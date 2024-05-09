import Cards from "@/components/Cards";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link"
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
      <div className="m-8 flex flex-col justify-center max-w-lg">
      <SearchBar />
      </div>
      <Cards/>
      <div className="flex flex-col ml-[650px]">
        <Link href={"/generatenotes"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Generate Notes
            </Button>
          </Link>
      </div>
     
        </>
    );
  }