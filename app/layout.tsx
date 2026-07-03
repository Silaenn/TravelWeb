import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrolToTop from "@/components/Helper/ScrolToTop";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  title: "Voya Travel — Discover the World, Your Way",
  description:
    "Curated destinations, handpicked hotels, and extraordinary tours for the modern explorer.",
  keywords: ["travel", "destinations", "hotels", "tours", "voya", "booking"],
  openGraph: {
    title: "Voya Travel",
    description: "Curated destinations, handpicked hotels, and extraordinary tours.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrolToTop />
      </body>
    </html>
  );
}
