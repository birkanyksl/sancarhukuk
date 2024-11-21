import React from "react";
import ClientPractices from "./ClientPractices";

const images = [
  { src: '/ticaret-hukuku.webp', href: '/' , alt:"Ticaret Hukuku"},
  { src: '/aile-hukuku.webp', href: '/' , alt:"Aile Hukuku"},
  { src: '/icra-iflas.webp', href: '/',  alt:"İcra ve İflas Hukuku" },
  { src: '/ceza-hukuku.webp', href: '/', alt:"Ceza Hukuku" },

];

const Practices = () => {
  return (
    <div className="mb-36 md:mb-48 ">
        <ClientPractices images={images} />    
    </div>
  );
};

export default Practices;
