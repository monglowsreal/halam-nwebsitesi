import type { Metadata } from "next";
import { Cormorant, Playfair_Display } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sakine Reinigung | Professionelle Reinigungsdienste",
  description: "Professionelle Reinigungsdienste in Deutschland. Perfekte Sauberkeit für Ihr Zuhause.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${playfair.variable} h-full antialiased`}
    >
      <body style={{ fontFamily: 'var(--font-cormorant), serif' }} className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
