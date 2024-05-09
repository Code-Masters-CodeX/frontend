import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import { Spotlight } from "@/components/ui/Spotlight";
import {Button} from "@/components/ui/moving-border"
import Link from "next/link";
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

        <Link href={"/myprofile"} className="mt-[150px]">
                        <Button
                        borderRadius="1.75rem"
                        className=" bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                        Edit Profile
                        </Button>
            </Link>

      </div>
      < Profile />
        </>
    );
  }