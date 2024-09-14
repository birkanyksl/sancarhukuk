"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import HeadingWithDivider from "../HeadingWithDivider";

const ClientPractices = ({ images }) => {
  const t = useTranslations("HomePractices");


  const [visibleItems, setVisibleItems] = useState(images.length);
  const [animatedItems, setAnimatedItems] = useState([]);
  const observer = useRef(null);

  
  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimatedItems((prev) => [...prev, entry.target.id]);
          observer.unobserve(entry.target);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    const items = document.querySelectorAll(".practice-item");
    items.forEach((item) => {
      if (item) {
        observer.current.observe(item);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [visibleItems]);



  return (
    <div className="">
     <HeadingWithDivider title={t(`title`)} />

      <div className="flex flex-wrap gap-4 justify-center">
        {images.slice(0, visibleItems).map((image, index) => (
          <Link
          key={index}
          href={image.href}
          id={`practice-item-${index}`}
          className={`practice-item cursor-pointer mt-2 w-[40%] md:w-[30%] lg:w-[22%] xl:w-[18%] xl:mx-6 h-[250px] transform transition-transform duration-1000 overflow-hidden hover:bg-slate-50 ${
            animatedItems.includes(`practice-item-${index}`)
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex flex-col items-center h-full justify-center gap-4">
            <div className=" w-24 h-24 bg-color5 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={`/${image.src}`}
                alt={`Hukuk Hizmetleri ${index + 1}`}
                width={512}
                height={512}
                className="object-cover w-12 h-12"
              />
            </div>
            <h2 className="text-color1 font-semibold text-md md:text-md text-center">
              {t(`practicesHome${index + 1}`)}
            </h2>
            <p className="text-center text-gray-600 text-xs sm:text-sm xl:text-base">
              
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </Link>
        
        ))}
      </div>

      <div className="flex justify-start mt-12">
        
        <button className="learn-more" disabled>
          <span aria-hidden="true" className="circle">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text text-sm">Diğer Hizmetler</span>
        </button>
         
      </div>
    </div>
  );
};

export default ClientPractices;
