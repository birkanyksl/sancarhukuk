import React from "react";
import ClientPractices from "./ClientPractices";

const images = [
  { src: 'commercial.png', href: '/' },
  { src: 'family.png', href: '/' },
  { src: 'bankruptcy.png', href: '/' },
  { src: 'criminal.png', href: '/' },

];

const Practices = () => {
  return (
    <div className="mb-36 md:mb-48 ">
        <ClientPractices images={images} />    
    </div>
  );
};

export default Practices;
