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
    setIsDropdownOpen(!isDropdownOpen);
  };

 
  const handleSelect = (practice) => {
    setSelectedPractice(practice);
    setIsDropdownOpen(false);
  };



  return (
    <div className="flex flex-col lg:flex-row items-start px-6 md:px-8 lg:px-16 xl:px-32 my-10 gap-4">
      {/* Mobil */}
      <div className="block lg:hidden w-full mb-4 relative">
        <button
          onClick={toggleDropdown}
          className="w-full p-3 border border-gray-300 rounded-md bg-white text-color1 text-sm font-semibold flex justify-between items-center focus:border-black "
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
              <div
                key={practice}
                onClick={() => handleSelect(practice)}
                className="p-3 text-color1 text-sm hover:bg-gray-100 transition-colors cursor-pointer"
              >
                {practiceDetails[practice].title}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hizmet İçeriği */}
      <div className="p-4 w-full md:w-[65%]">
        <h2 className="text-2xl font-semibold mb-4">İçerik</h2>
        <p className="text-gray-700">
          {practiceDetail ? practiceDetail.content : "İçerik bulunamadı."}
        </p>
      </div>

      {/*  Masaüstü */}
      <div className="hidden lg:block p-4 bg-slate-50 w-full md:w-[35%]">
        <h2 className="px-4 text-base font-semibold mb-4">Hizmetler</h2>
        <div className="px-4">
          {Object.keys(practiceDetails).map((practice) => (
            <Link
              key={practice}
              href={`/practice/${practice}`}
              onClick={() => setSelectedPractice(practice)}
              className="group p-4 flex items-center justify-between text-[13px] lg:text-[15px] font-medium relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:bg-gray-300 hover:before:bg-color6 before:transition-all before:duration-500"
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
