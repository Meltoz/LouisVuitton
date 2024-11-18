# Étape de build
FROM node:latest AS builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json (ou yarn.lock)
COPY package*.json ./

# Installer les dépendances
RUN npm install

COPY . .

# Construire l'application Next.js
RUN npm run build

# Étape de production
FROM node:latest AS runner

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier uniquement les fichiers nécessaires à partir de l'étape de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/tsconfig.json ./

# Installer uniquement les dépendances de production
RUN npm install --only=production

# Exposer le port sur lequel l'application écoute
EXPOSE 3000

# Commande de démarrage de l'application
CMD ["npm", "start"]