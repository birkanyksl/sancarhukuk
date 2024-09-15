import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <div className="w-full flex md:flex-row flex-col justify-start md:justify-around items-start">
        <div className="p-1 ">
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
        <div className="p-1">
            <ul>
                <p className="text-gray-800 font-bold text-xs pb-2">Product</p>
                <li className="text-gray-400 text-xs md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    Stocks
                </li>
                <li className="text-gray-400 text-xs md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    Futures & Options
                </li>
                <li className="text-gray-400 text-xs md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    Mutual Funds
                </li>
                <li className="text-gray-400 text-xs md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    Fixed deposits
                </li>
            </ul>
        </div>
        <div className="p-1">
            <ul>
                <p className="text-gray-800 font-bold text-xs pb-2">Gözat</p>
                <li className="text-gray-400 text-xs md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    About
                </li>
                <li className="text-gray-400 text-xs md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    Products
                </li>
                <li className="text-gray-400 text-xs md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    Pricing
                </li>
                <li className="text-gray-400 text-xs md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    Careers
                </li>
                <li className="text-gray-400 text-xs md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    Press & Media
                </li>
            </ul>
        </div>
        <div className="p-1">
            <ul>
                <p className="text-gray-800 font-bold text-xs pb-2">Support</p>
                <li className="text-gray-400 text-xs md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    Contact
                </li>
                <li className="text-gray-400 text-xs md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    Support Portals
                </li>
                <li className="text-gray-400 text-xs md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    List Of Charges
                </li>
                <li className="text-gray-400 text-xs md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    Downloads & Resources
                </li>
                <li className="text-gray-400 text-sm md:text-xs pb-2 font-light hover:text-blue-600 cursor-pointer">
                    Videos
                </li>
            </ul>
        </div>
    </div>
    <div className="flex flex-col md:flex-row justify-between items-center text-center pb-4 px-4 gap-1">
    <h1 className="text-xs text-gray-400 font-light">
            © 2024-2025 All rights reserved | Build with ❤ by{" "}
            <span className="hover:text-color6 font-semibold cursor-pointer">
                Birkan{" "}
            </span>
        </h1>
        <ul className="text-xs text-gray-400 font-light flex gap-6 cursor-pointer">
            <li>Gizilik Politikası</li>
            <li>Yasak Uyarı</li>
        </ul>
        
    </div>
</>
  )
}

export default Footer