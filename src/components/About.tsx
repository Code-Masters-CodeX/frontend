"use client";
import React,{useState,useEffect} from 'react'
import {TypewriterEffectSmooth} from "@/components/ui/typewriter-effect"
const newText = `Welcome to [Website Name], where we revolutionize the way students engage with their academic materials. Our mission is simple yet profound: to empower learners with tools that streamline their study process, making education more accessible and enjoyable.

At [Website Name], we understand the challenges students face when deciphering syllabi and textbooks, often overwhelmed by the sheer volume of information. That's why we've developed a cutting-edge digital solution that seamlessly analyzes syllabi and textbooks, distilling complex content into clear and concise study notes.

With our platform, students can upload their syllabi and textbooks with ease, allowing our advanced algorithms to work their magic. By leveraging the latest in natural language processing and machine learning technologies, we extract key insights from the provided materials, identifying important topics, concepts, and connections.

The result? Personalized study notes that cater to each student's unique learning needs. Whether it's summarizing chapters, highlighting key points, or providing context and explanations, our platform transforms raw data into invaluable study companions.

But our commitment to student success doesn't stop there. We believe in continuous improvement and strive to enhance our platform based on user feedback and evolving educational trends. Our team is dedicated to providing a seamless and intuitive user experience, ensuring that students can focus on what truly matters: mastering their academic content.
Join us on this journey as we redefine the way students study and learn. Together, let's unlock the full potential of education, one syllabus at a time. Welcome to the future of learning. Welcome to [Website Name].`
export function About() {
    const [text,setText] = useState([]);
    useEffect(()=>{
        let about = newText.split(' ').map(e=>({text:e}))
        setText(about)
    })
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}

