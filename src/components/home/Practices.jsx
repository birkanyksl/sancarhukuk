import React from "react";
import HeadingWithDivider from "../HeadingWithDivider";
import ClientPractices from "./ClientPractices";
import PracticesList from "./PracticesList";

const images = [
  { src: 'commercial.png', href: '/' },
  { src: 'family.png', href: '/' },
  { src: 'bankruptcy.png', href: '/' },
  { src: 'criminal.png', href: '/' },
  { src: 'labour.png', href: '/' },
  { src: 'inheritance.png', href: '/' },
  { src: 'estate.png', href: '/' },
  { src: 'tech.png', href: '/' },
  { src: 'consumer.png', href: '/' },
  { src: 'administration.png', href: '/' },
  { src: 'international.png', href: '/' },
  { src: 'energy.png', href: '/' },
];

const Practices = () => {
  return (
    <div className="mb-32">    
      <ClientPractices images={images} />
      
    </div>
  );
};

export default Practices;
