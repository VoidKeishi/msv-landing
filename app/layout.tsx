import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mining Services Vietnam | Exploration, EPCM & Engineering | Southeast Asia",
  description: "Vietnam-based mining services company delivering exploration, geological services, EPCM, and resource development across Southeast Asia. JORC & NI43-101 certified.",
  keywords: ["mining services vietnam", "exploration services cambodia laos", "EPCM southeast asia", "geological services", "JORC resource estimation"],
  openGraph: {
    title: "Mining Services Vietnam | Exploration, EPCM & Engineering",
    description: "Practical, high-quality mining solutions across Southeast Asia",
    type: "website",
    url: "https://www.dma-msv.com",
  },
  icons: {
    icon: [
      { url: "/logos/favicon.svg", type: "image/svg+xml" },
      { url: "/logos/favicon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
