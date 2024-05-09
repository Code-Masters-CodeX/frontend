import Navbar from "@/components/Navbar";
import { TextGeneration } from "@/components/TextGeneration";
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
      <div className="mt-[130px] ml-8">
        <TextGeneration />
      </div>
       
        </>
    );
  }