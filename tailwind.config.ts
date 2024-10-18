const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          futura: ['Futura'],
          ivy: ['ivy']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  }
};

export default config;
