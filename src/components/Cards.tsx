"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React, {useState} from "react"
export function Cards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Generated Text",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://google.com",
  },
  {
    title: "Uploaded books",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://google.com",
  },
  {
    title: "Uploaded syllabus",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  

];

export default Cards