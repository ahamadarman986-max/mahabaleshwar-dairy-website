import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700', '800'] });

export const metadata: Metadata = {
  title: "Aura Dairy | Premium Dairy Beverages",
  description: "Premium dairy beverages crafted with rich flavors and natural goodness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-[#FDFBF7]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
