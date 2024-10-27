"use client";
import practiceDetails from "@/data/practiceDetails";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "@/navigation";

const SinglePractice = ({ params }) => {
  const { singlePractice } = params;
  const [selectedPractice, setSelectedPractice] = useState(singlePractice);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const practiceDetail = practiceDetails[selectedPractice];

  
  const toggleDropdown = () => {
  
    setIsDropdownOpen((prevState)=> !prevState);
  };

 
  const handleSelect = (practice) => {
    setSelectedPractice(practice);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      
      if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen((prevState)=> !prevState);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="flex flex-col lg:flex-row items-start px-6 md:px-8 lg:px-16 xl:px-28 mt-10 gap-4 mb-20">
      {/* Mobil */}
      <div className="block lg:hidden w-full mb-4 relative">
        <button
          onClick={toggleDropdown}
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-color1 text-sm font-semibold flex justify-between items-center focus:border-black "
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        >
          {practiceDetails[selectedPractice].title}
          <FontAwesomeIcon icon={faAngleDown} className="ml-2 w-4 h-4" />
        </button>

        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10"
          >
            {Object.keys(practiceDetails).map((practice) => (
              <Link
                key={practice}
                href={`/practice/${practice}`}
                onClick={() => handleSelect(practice)}
                className=" flex flex-col p-3 text-color1 text-sm hover:bg-gray-100 transition-colors cursor-pointer"
              >
                {practiceDetails[practice].title}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Hizmet İçeriği */}       
      <div className="flex-grow lg:w-8/12 list-disc list-inside">
          {practiceDetail ? practiceDetail.content : "İçerik bulunamadı."}
      </div>      


      {/*  Masaüstü */}
      <div className="hidden lg:block lg:w-4/12 p-4 bg-slate-50 w-full ">
        <h2 className="px-4 text-base font-semibold mb-4">Hizmetler</h2>
        <div className="px-4">
          {Object.keys(practiceDetails).map((practice) => (
            <Link
              key={practice}
              href={`/practice/${practice}`}
              onClick={() => setSelectedPractice(practice)}
              className="group p-4 flex items-center justify-between text-sm font-medium hover:text-color6 relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-gray-300 hover:before:bg-color6 before:transition-all before:duration-500"
            >
              {practiceDetails[practice].title}
              <FontAwesomeIcon
                icon={faAngleRight}
                className="w-4 h-4 group-hover:text-color6 transition-all duration-500"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePractice;
