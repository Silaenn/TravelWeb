import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrolToTop from "@/components/Helper/ScrolToTop";

export const metadata: Metadata = {
  title: "Voya — Discover the World in Luxury",
  description:
    "Voya is your premium travel companion. Explore curated destinations, handpicked hotels, and unforgettable tours crafted for the modern traveler.",
  keywords: ["travel", "luxury travel", "destinations", "hotels", "tours", "voya"],
  openGraph: {
    title: "Voya — Discover the World in Luxury",
    description: "Explore curated destinations and premium hotels with Voya.",
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
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
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
