import React from "react";
import ClientPractices from "./ClientPractices";
import Image from "next/image";


const images = [
  { src: 'commercial.png', href: '/' },
  { src: 'family.png', href: '/' },
  { src: 'bankruptcy.png', href: '/' },
  { src: 'criminal.png', href: '/' },
  { src: 'labour.png', href: '/' },
  { src: 'inheritance.png', href: '/' },
  { src: 'estate.png', href: '/' },
  { src: 'tech.png', href: '/' },
];

const Practices = () => {
  return (
    <div className="mb-24 ">
       <div className="absolute mx-auto top-[500px] left-0 w-full h-full  bg-white opacity-40 blur-[1px] md:w-[800px] md:h-[720px] md:top-[580px] md:left-[-100px] ">
        <Image
          src="/themis-bg1.png"
          alt="Background Image"
          fill 
          className="object-cover" 
        />
      </div>
    
        <ClientPractices images={images} />    
    </div>
  );
};

export default Practices;
