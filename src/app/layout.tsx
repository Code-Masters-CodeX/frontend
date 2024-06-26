import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmartNotes",
  description: "SmartNotes AI Notes Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          {/* <Navbar /> */}
        </div>

        {children}
      </body>
    </html>
  );
}

//topic segregation
//searching keyword in book
//extracting all the data
//getting more summary on data related to a certain keyword provided(prompt)
//summarizing all the abv data
