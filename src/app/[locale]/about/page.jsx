import HeadingWithDivider from '@/components/HeadingWithDivider';
import Image from 'next/image';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="relative w-full h-48 bg-slate-50">
      {/* <Image src="https://img.freepik.com/free-photo/blank-white-concrete-wall-background_53876-145041.jpg?t=st=1726739392~exp=1726742992~hmac=070284314d3c9f79c302e1ffff8d45ef00928508ffe72b00d2bff39ffd151f9d&w=1380" alt='about-image' fill  style={{objectFit:"cover"}}/> */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" text-color1 p-4 w-64 justify-center items-center  text-center ">
          <h1 className="text-4xl font-semibold">About</h1>
          <span></span>
        </div>
      </div>
      
    </div>
  );
};

export default AboutPage;
