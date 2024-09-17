"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const MobileMenu = () => {
const [isOpen,setIsOpen] = useState(false)

  return (
    <div className='md:hidden '>
        <div className='flex flex-col gap-[4.5px] cursor-pointer' onClick={()=>setIsOpen(prevstate =>!prevstate)}>
            <div className={`w-6 h-1 bg-gray-800 rounded-sm ${isOpen ? "rotate-45": ""} origin-left ease-in-out duration-500` }/>

            <div className={`w-6 h-1 bg-gray-800 rounded-sm ${isOpen ? "opacity-0": ""} ease-in-out duration-500`}/>

            <div className={`w-6 h-1 bg-gray-800 rounded-sm ${isOpen ? "-rotate-45": ""} origin-left ease-in-out duration-500`}/>

            {isOpen && (
            <div className='absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10'>
                <Link href="/">Hakkımızda</Link>
                <Link href="/">Ekibimiz</Link>
                <Link href="/">Hizmetler</Link>
                <Link href="/">Yayınlar</Link>
                <Link href="/">İletişim</Link>

            </div>
            )}
        </div>
    </div>
  )
}

export default MobileMenu