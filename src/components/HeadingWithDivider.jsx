"use client"
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const HeadingWithDivider = ({ title }) => {
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
    <div className="my-16" ref={headingRef}>
      <div className="flex items-center justify-center">
        {/* Sol Çizgi */}
        <motion.div
          className="w-1/3 h-[1px] bg-color6"
          initial={{ width: 0 }}
          animate={isVisible ? { width: "33%" } : {}}
          transition={{ duration: 1.5 }}
        ></motion.div>

        {/* Başlık */}
        <h2 className="mx-6 text-xl font-bold text-color1">{title}</h2>

        {/* Sağ Çizgi */}
        <motion.div
          className="w-1/3 h-[1px] bg-color6"
          initial={{ width: 0 }}
          animate={isVisible ? { width: "33%" } : {}}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default HeadingWithDivider;
