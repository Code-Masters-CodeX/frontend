"use client";
import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const newText = [
  `Welcome to [Website Name], where we revolutionize the way students engage with their academic materials. Our mission is simple yet profound: to empower learners with tools that streamline their study process, making education more accessible and enjoyable.`,

  `At [Website Name], we understand the challenges students face when deciphering syllabi and textbooks, often overwhelmed by the sheer volume of information. That's why we've developed a cutting-edge digital solution that seamlessly analyzes syllabi and textbooks, distilling complex content into clear and concise study notes.`,

  `With our platform, students can upload their syllabi and textbooks with ease, allowing our advanced algorithms to work their magic. By leveraging the latest in natural language processing and machine learning technologies, we extract key insights from the provided materials, identifying important topics, concepts, and connections.`,
  `The result? Personalized study notes that cater to each student's unique learning needs. Whether it's summarizing chapters, highlighting key points, or providing context and explanations, our platform transforms raw data into invaluable study companions.`,
  ,
  `But our commitment to student success doesn't stop there. We believe in continuous improvement and strive to enhance our platform based on user feedback and evolving educational trends. Our team is dedicated to providing a seamless and intuitive user experience, ensuring that students can focus on what truly matters: mastering their academic content.`,
  `Join us on this journey as we redefine the way students study and learn. Together, let's unlock the full potential of education, one syllabus at a time. Welcome to the future of learning. Welcome to [Website Name].`,
];
export function About() {
  return (
    <div className="mt-[150px] rounded-md border-solid border-2 border-gray-600 m-8 p-4">
      <h2 className="font-bold text-[30px] text-neutral-800 dark:text-neutral-200">
        About
      </h2>
      {newText.map((item) => (
        <TextGenerateEffect
          words={item}
          className="font-thin text-[20px]"
          delay={0.005}
        />
      ))}
    </div>
  );
}
