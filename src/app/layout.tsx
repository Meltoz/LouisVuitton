import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Menu} from "@/components/menu/menu";
import {Progress} from "@/components/progress/progress";

const Futura = localFont({
    src: './fonts/FuturaCyrillicMedium.woff',
    variable: '--font-futura',

})

export const metadata: Metadata = {
  title: "Louis Vuitton x Logitech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-futura antialiased"
      >
      <header>
        <Menu />
      </header>
      <aside>
          <Progress />
      </aside>
        {children}
      </body>
    </html>
  );
}
