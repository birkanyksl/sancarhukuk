"use client"
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HorizontalDivider = ({ width = "70%" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentHeading = headingRef.current; 

    if (currentHeading) {
      observer.observe(currentHeading);
    }

    return () => {
      if (currentHeading) {
        observer.unobserve(currentHeading); 
      }
    };
  }, []);

  return (
    <div  ref={headingRef}>
      
        {/* Sol Çizgi */}
        <motion.div
          className="w-[1/2]  md:w-[300px] lg:w-[450px] h-[1px] bg-color6"
          initial={{ width: 0 }}
          animate={isVisible ? { width } : {}}
          transition={{ duration: 1.5 }}
        ></motion.div>

        
    </div>
  );
};

export default HorizontalDivider;
