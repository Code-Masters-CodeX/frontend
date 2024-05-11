import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Navbar />
      {children}
    </>
  );
}
