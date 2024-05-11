"use client";
import React from "react";
import SearchBar from "@/components/SearchBar";
import { Cards } from "@/components/Cards";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
const page = () => {
  return (
    <>
      <div className="m-8 flex flex-col justify-center max-w-lg">
        <SearchBar />
      </div>
      <Cards />
      <div className="flex justify-center">
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
};

export default page;
