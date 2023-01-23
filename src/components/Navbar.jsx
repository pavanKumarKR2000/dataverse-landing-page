import React from 'react';
import { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import {  Divide as Hamburger } from 'hamburger-react'

const Navbar = () => {

    const [active, setActive] = useState(false);
    
    const handleClick = () => {
        setActive(!active);
    }

  return (
      <header className='sticky top-0 z-10 bg-[#000300]'>
          <div className='max-w-[1500px] mx-auto flex justify-between items-center px-4 py-2  uppercase'>
              <div>
                  <h1 className='text-3xl font-bold text-[#00df9a]'>dataverse</h1>
              </div>
              <div className='hidden md:inline-flex'>
                <ul className='flex items-center space-x-8 text-white'>
                    <li className='px-4 py-2'>Home</li>
                    <li className='px-4 py-2'>Company</li>
                    <li className='px-4 py-2'>Resources</li>
                    <li className='px-4 py-2'>About</li>
                    <li className='px-4 py-2'>Contact</li>
                </ul>
              </div>
              <div className='text-white cursor-pointer md:hidden' onClick={handleClick}>
                  <Hamburger size={20} />
              </div>
              <div className={`fixed bg-[#000300] ${active?'left-0':'-left-[100%]'} top-0 w-[60%] h-full  px-4 py-4 space-y-6 border-r border-gray-900 transition-all transition-200 ease-in-out`}>
                   <h1 className='text-3xl font-bold text-[#00df9a]'>dataverse</h1>
                    <ul className='flex flex-col text-white text-sm sm:text-base'>
                        <li className='p-4 border-b border-gray-600'>Home</li>
                        <li className='p-4 border-b border-gray-600'>Company</li>
                        <li className='p-4 border-b border-gray-600'>Resources</li>
                        <li className='p-4  border-b border-gray-600'>About</li>
                        <li className='p-4'>Contact</li>
                    </ul>
              </div>
          </div>    
      </header>
  )
}

export default Navbar;