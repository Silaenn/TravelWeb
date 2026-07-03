import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrolToTop from "@/components/Helper/ScrolToTop";

export const metadata: Metadata = {
  title: "The Traveller's Gazette — Est. 1924",
  description:
    "A journal of curious journeys. Curated destinations, handpicked hotels, and extraordinary tours for the discerning traveller.",
  keywords: ["travel", "destinations", "hotels", "tours", "newspaper", "gazette"],
  openGraph: {
    title: "The Traveller's Gazette",
    description: "A journal of curious journeys — curated destinations and handpicked hotels.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=Special+Elite&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrolToTop />
      </body>
    </html>
  );
}
