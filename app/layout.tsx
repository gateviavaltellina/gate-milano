import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gate Milano — Club e spazio eventi a Milano",
  description:
    "Gate Milano lavora nel mondo della musica dal 2017 per l'organizzazione di concerti, eventi, spettacoli e dj set.",
  openGraph: {
    title: "Gate Milano",
    description: "The event space where the city sets the stage.",
    url: "https://www.gatemilano.it",
    siteName: "Gate Milano",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${geistSans.variable} ${bebasNeue.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gate-black text-gate-white">
        {children}
      </body>
    </html>
  );
}
