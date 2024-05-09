import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
    
  return (
    <form className='w-[500px]  relative mt-[150px] justify-center align-center mx-[400px]'>
        <div className="relative">
            <input type="search" placeholder='Search your content' className='w-full p-4 rounded-full bg-zinc-700'/>
            <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-zinc-900 rounded-full cursor-pointer'>
                <FaSearch />
            </button>
        </div>        
    </form>

  )
}

export default SearchBar