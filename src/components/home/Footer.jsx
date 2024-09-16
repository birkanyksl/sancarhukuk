import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col justify-between items-start">
        
        <div className="p-2">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">
              Sancar <span className="text-color6">Hukuk</span>
            </p>
            <div className="flex gap-6 pb-2">
              <FaInstagram className="text-sm cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-sm cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-sm cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-sm cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
         
        <div className="p-2">
          <p className="text-gray-800 font-bold text-xs pb-2">Gözat</p>
          <ul className="grid grid-cols-3 md:grid-cols-2 gap-2 xl:grid-cols-3">
            <li className="text-gray-400 text-xs font-light hover:text-color6 cursor-pointer">
              About Us
            </li>
            <li className="text-gray-400 text-xs font-light hover:text-color6 cursor-pointer">
              Team
            </li>
            <li className="text-gray-400 text-xs font-light hover:text-color6 cursor-pointer">
              Practices
            </li>
            <li className="text-gray-400 text-xs font-light hover:text-color6 cursor-pointer">
              Publications
            </li>
            <li className="text-gray-400 text-xs font-light hover:text-color6 cursor-pointer">
              Career
            </li>
            <li className="text-gray-400 text-xs font-light hover:text-color6 cursor-pointer">
              Contact
            </li>
            <li className="text-gray-400 text-xs font-light hover:text-color6 cursor-pointer">
              E-Payment
            </li>
          </ul>
        </div>
       
        <div className="p-2">
          <p className="text-gray-800 font-bold text-xs pb-2">İletişim</p>
          <ul className='grid grid-cols-2 gap-2'>
            <li className="text-gray-400 text-xs md:text-xs pb-2 font-light">
              Adres: Örnek Cad. No: 123, İstanbul
            </li>
            <li className="text-gray-400 text-xs md:text-xs pb-2 font-light">
              E-Posta: info@sancarlaw.com
            </li>
            <li className="text-gray-400 text-xs md:text-xs pb-2 font-light">
              Telefon: +90 555 555 55 55
            </li>
            <li className="text-gray-400 text-xs md:text-xs pb-2 font-light">
              Faks: +90 212 555 55 55
            </li>
            <li className="text-gray-800 text-xs md:text-xs pb-2 font-light cursor-pointer">
              Daha fazlası...
            </li>
          </ul>
        </div>

       

  
        <div className="p-2 mb-2 max-h-80 overflow-y-auto">
          <p className="text-gray-800 font-bold text-xs pb-2">Blog</p>
          <ul className='grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-16 md:gap-6'>
            <li className="text-gray-400 text-xs font-light flex items-center gap-4 ">
              <Image src="https://images.pexels.com/photos/28319907/pexels-photo-28319907.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="Blog 1" width={128} height={128} className="w-9 h-9 object-cover rounded-xl" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">Vatandaşlık Hakları</p>
                <p className="text-xs truncate">Erkan Yüksel</p>
              </div>
            </li>
            <li className="text-gray-400 text-xs font-light flex items-center gap-4 ">
              <Image src="https://images.pexels.com/photos/28319907/pexels-photo-28319907.jpeg?auto=compress&cs=tinysr00&lazy=load" alt="Blog 2" width={128} height={128} className="w-9 h-9 object-cover rounded-xl " />
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">Adliyede Neler Oluyor?</p>
                <p className="text-xs truncate">Erkan Yüksel</p>
              </div>
            </li>
            
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-center pb-4 px-4 gap-1">
        <h1 className="text-xs text-gray-400 font-extralight">
          © 2024-2025 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-color6 font-extralight cursor-pointer">
            Birkan{" "}
          </span>
        </h1>
        <ul className="text-xs text-gray-400 font-light flex gap-6 cursor-pointer">
          <li>Gizilik Politikası</li>
          <li>Yasak Uyarı</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
