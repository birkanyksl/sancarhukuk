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
      
    
        <ClientPractices images={images} />    
    </div>
  );
};

export default Practices;
