import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

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
  icons: {
    icon: "/logos/GateLogos/250727_MKT_LogoVectorialBlack.svg",
    shortcut: "/logos/GateLogos/250727_MKT_LogoVectorialBlack.svg",
  },
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
        <Footer />
        <Analytics />
        <GoogleAnalytics gaId="G-NDFCLRDELD" />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wanw8cpuj6");`,
          }}
        />
      </body>
    </html>
  );
}
