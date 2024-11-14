import { Link } from '@/navigation';
import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col justify-between items-start lg:px-10 xl:px-16 2xl:px-32">
        
        <div className="p-2">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Sancar <span className="text-color6">Hukuk</span>
            </p>
            <div className="flex gap-6 pb-2">
              {/* <FaInstagram className="text-sm cursor-pointer hover:text-yellow-600" /> */}
              <FaTwitter className="text-sm cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-sm cursor-pointer hover:text-blue-600" />
              {/* <FaYoutube className="text-sm cursor-pointer hover:text-red-600" /> */}
            </div>
          </ul>
        </div>
         
        <div className="p-2">
          <p className="text-gray-800 font-bold text-xs md:text-sm pb-2">Gözat</p>
          <ul className="grid grid-cols-3 md:grid-cols-2 gap-2 xl:grid-cols-3">
            <Link href={"/about"}>
            <li className="text-gray-800 text-xs md:text-sm pb-2 font-light cursor-pointer hover:text-color6">
              About Us
            </li>
             </Link>
             <Link href={"/team"}>
             <li className="text-gray-800 text-xs md:text-sm pb-2 font-light cursor-pointer hover:text-color6">
              Team
            </li>
             </Link>
             <Link href={"/practice"}>
             <li className="text-gray-800 text-xs md:text-sm pb-2 font-light cursor-pointer hover:text-color6">
              Practices
            </li>
             </Link>
             <Link href={"/insight"}>
             <li className="text-gray-800 text-xs md:text-sm pb-2 font-light cursor-pointer hover:text-color6">
              Publications
            </li>
             </Link>
            {/* <li className="text-gray-400 text-xs font-light hover:text-color6 cursor-pointer">
              Career
            </li> */}
           <Link href={"/communication"} >
           <li className="text-gray-800 text-xs md:text-sm pb-2 font-light cursor-pointer hover:text-color6">
              Contact

           </li>
            </Link >
            {/* <li className="text-gray-400 text-xs font-light hover:text-color6 cursor-pointer">
              E-Payment
            </li> */}
          </ul>
        </div>
       
        <div className="p-2">
          <p className="text-gray-800 font-bold text-xs md:text-sm pb-2">İletişim</p>
          <ul className='grid grid-cols-2 gap-2'>
            <li className="text-gray-800 text-xs md:text-sm pb-2 font-light ">
              Adres: Örnek Cad. No: 123, İstanbul
            </li>
            <li className="text-gray-800 text-xs md:text-sm pb-2 font-light ">
              E-Posta: info@sancarlaw.com
            </li>
            <li className="text-gray-800 text-xs md:text-sm pb-2 font-light ">
              Telefon: +90 555 555 55 55
            </li>
            <li className="text-gray-800 text-xs md:text-sm pb-2 font-light ">
              Faks: +90 212 555 55 55
            </li>
            <Link href={"/communication"} className="text-gray-800 text-xs md:text-sm pb-2 font-light cursor-pointer hover:text-color6">
              Daha fazlası...
            </Link >
          </ul>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-center pb-4 px-4 gap-1">
        <h1 className="text-xs text-gray-400 font-extralight">
          © 2024-2025 All rights reserved | 
          <span className="hover:text-color6 font-extralight cursor-pointer">
            Birkan{" "}
          </span>
        </h1>
        <ul className="text-xs text-gray-400 font-light flex gap-6 ">
          <li className='cursor-pointer'>Gizilik Politikası</li>
          <li className='cursor-pointer'>Yasak Uyarı</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
