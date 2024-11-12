"use client"

import { Link } from '@/navigation'
import React, {  useEffect, useState } from 'react'

const MobileMenu = () => {
const [isOpen,setIsOpen] = useState(false)
 
useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden"; 
  } else {
    document.body.style.overflow = "auto"; 
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isOpen]);




  return (
    <div className="md:hidden">
        <div className='flex flex-col gap-[4.5px] cursor-pointer ' onClick={()=>setIsOpen(prevstate =>!prevstate)}>
            <div className={`w-6 h-1 bg-gray-800 rounded-sm ${isOpen ? "rotate-45": ""} origin-left ease-in-out duration-500` }/>

            <div className={`w-6 h-1 bg-gray-800 rounded-sm ${isOpen ? "opacity-0": ""} ease-in-out duration-500`}/>

            <div className={`w-6 h-1 bg-gray-800 rounded-sm ${isOpen ? "-rotate-45": ""} origin-left ease-in-out duration-500`}/>

            {isOpen && (
            <div className='absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10'>
                <Link href="/about" className=' flex items-center justify-center w-48 h-16 hover:scale-110 transition-all duration-300 ease-in-out'>Hakkımızda</Link>
                <Link href="/team" className=' flex items-center justify-center w-48 h-16 hover:scale-110 transition-all duration-300 ease-in-out'>Ekibimiz</Link>
                <Link href="/practice" className=' flex items-center justify-center w-48 h-16 hover:scale-110 transition-all duration-300 ease-in-out'>Hizmetler</Link>
                <Link href="/insight" className=' flex items-center justify-center w-48 h-16 hover:scale-110 transition-all duration-300 ease-in-out'>Yayınlar</Link>
                <Link href="/communication" className=' flex items-center justify-center w-48 h-16 hover:scale-110 transition-all duration-300 ease-in-out'>İletişim</Link>

            </div>
            )}
        </div>
    </div>
  )
}

export default MobileMenu