import { About } from "@/components/About";
import Navbar from "@/components/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";

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

      <About />
    </>
  );
}
