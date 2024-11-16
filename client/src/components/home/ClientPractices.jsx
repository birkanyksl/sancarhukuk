"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import HeadingWithDivider from "../HeadingWithDivider";


const ClientPractices = ({ images }) => {
  const t = useTranslations("HomePractices");

  const [visibleItems, setVisibleItems] = useState(2);


  const updateVisibleItems = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setVisibleItems(2);
    } else if (width >= 768 && width < 1280) {
      setVisibleItems(3);
    } else {
      setVisibleItems(4);
    }
  };

  useEffect(() => {
    updateVisibleItems();

    window.addEventListener("resize", updateVisibleItems);

    return () => {
      window.removeEventListener("resize", updateVisibleItems);
    };
  }, []);

  return (
    <div className="">
      <HeadingWithDivider title={t("title")} />

      <div
        className={`mb-12 md:my-20 lg:mb:24 flex flex-col items-center justify-center gap-4 `}
      >
        <h1 className="text-center text-2xl lg:text-3xl font-bold ">
          {" "}
          <span className="text-color6">Güçlü Savunma, </span>
          <span className="text-color1">Etkin Sonuçlar</span>
        </h1>
        <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
          Bireysel ve kurumsal çözümlerle sizlere hizmet veriyoruz.
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-[75%] md:w-full lg:w-[95%] justify-center items-center mx-auto gap-24 md:gap-4 lg:gap-8">
        {images.slice(0, visibleItems).map((image, index) => (
          <Link
            key={index}
            href={image.href}
            className=" relative w-full "
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="blog-image"
                fill
                 sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                priority
              />
            </div>
            <div className="bg-slate-50 absolute flex flex-col justify-center w-[90%] top-[200px] left-1/2 transform -translate-x-1/2 p-6 rounded-lg  border-2 border-black">
              <h2 className="text-black uppercase font-bold text-sm md:text-base text-center mb-2">
                {t(`practicesHome${index + 1}`)}
              </h2>
              <p className="text-center text-xs md:text-sm font-extralight text-black mb-2 line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            <div className="w-full h-[1px] bg-black"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClientPractices;
