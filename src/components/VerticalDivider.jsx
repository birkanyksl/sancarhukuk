"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const VerticalDivider = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dividerRef = useRef(null);

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

    const currentDivider = dividerRef.current;

    if (currentDivider) {
      observer.observe(currentDivider);
    }

    return () => {
      if (currentDivider) {
        observer.unobserve(currentDivider);
      }
    };
  }, []);

  return (
    <motion.div
      ref={dividerRef}
      className="w-[1.5px] bg-color6"
      initial={{ height: 0 }}
      animate={isVisible ? { height: "100px" } : {}}
      transition={{ duration: 1 }}
      style={{ height: "100px" }}  
    />
  );
};

export default VerticalDivider;
