import type { Metadata } from "next";
import { Outfit, Montserrat } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
      className={`${outfit.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body style={{ fontFamily: 'var(--font-outfit), sans-serif' }} className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
