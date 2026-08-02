import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const siteUrl = "https://alexanderhild.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alexander Hild — Zeitgenössische Kunst",
    template: "%s — Alexander Hild",
  },
  description:
    "Alexander Hild ist ein zeitgenössischer Künstler, dessen Werk sich mit Stille, Raum und Materialität auseinandersetzt. Aktuelle Arbeiten, Ausstellungen und Kontakt.",
  keywords: [
    "Alexander Hild",
    "zeitgenössische Kunst",
    "contemporary art",
    "Maler",
    "Künstler",
    "Galerie",
    "Gemälde",
  ],
  authors: [{ name: "Alexander Hild" }],
  openGraph: {
    title: "Alexander Hild — Zeitgenössische Kunst",
    description:
      "Werke, Ausstellungen und Artist Statement des zeitgenössischen Künstlers Alexander Hild.",
    url: siteUrl,
    siteName: "Alexander Hild",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Alexander Hild — Zeitgenössische Kunst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Hild — Zeitgenössische Kunst",
    description:
      "Werke, Ausstellungen und Artist Statement des zeitgenössischen Künstlers Alexander Hild.",
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${inter.variable} font-body antialiased`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
