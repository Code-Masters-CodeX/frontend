import { TextGeneration } from '@/components/TextGeneration'
import FileCard from "@/components/FileCard";
import React from 'react'

const page = () => {
  return (

    <div className="mt-[130px] ml-8">
    <FileCard />
        <TextGeneration />
       </div>
  )
}

export default page