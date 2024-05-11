import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import { MdDriveFolderUpload, MdDownload } from "react-icons/md";
const FileCard = () => {
    return (
        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      );
}
export const projects = [
    {
      title: <MdDriveFolderUpload />,
      description:
        "Upload syllabus",
    },
    {
        title: <MdDriveFolderUpload />,
        description:
          "Upload books",
    },
    {
        title: <MdDownload />,
        description:
          "Download file",
    },
    
  
  ];
  
export default FileCard
