import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { MdDriveFolderUpload, MdDownload } from "react-icons/md";
const FileCard = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
};
export const projects = [
  {
    title: <MdDriveFolderUpload size={50} />,
    description: "Upload syllabus",
  },
  {
    title: <MdDriveFolderUpload size={50} />,
    description: "Upload books",
  },
  {
    title: <MdDownload size={50} />,
    description: "Download file",
  },
];

export default FileCard;
