import type { Metadata } from "next";
import "./globals.css";
import {Menu} from "@/components/menu/menu";
import {Progress} from "@/components/progress/progress";

export const metadata: Metadata = {
  title: "Louis Vuitton x Logitech",
  description: "Pop up store Louis Vuitton x Logitech",
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
      <header style={{zIndex:999}}>
        <Menu />
      </header>
      <aside className="z-50">
          <Progress />
      </aside>
        {children}
      </body>
    </html>
  );
}
