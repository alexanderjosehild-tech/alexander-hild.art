import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// Echtes Root-Layout — definiert html/body und lädt die Fonts genau
// einmal. Sprache, Header/Footer und Theme kommen aus dem
// [locale]-Layout; das Sanity Studio unter /studio nutzt ebenfalls
// dieses Root-Layout, aber ohne die Website-Chrome darum.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
