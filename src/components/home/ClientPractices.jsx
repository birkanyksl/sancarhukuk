"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import HeadingWithDivider from "../HeadingWithDivider";

const ClientPractices = ({ images }) => {
  const t = useTranslations("HomePractices");

  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleItems, setVisibleItems] = useState(getInitialVisibleItemsCount());
  const [animatedItems, setAnimatedItems] = useState([]);
  const observer = useRef(null);

  function getInitialVisibleItemsCount() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 3;
    }
    return 4;
  }

  useEffect(() => {
    const handleResize = () => {
      if (!isExpanded) {
        setVisibleItems(getInitialVisibleItemsCount());
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isExpanded]);

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

  const handleShowMore = () => {
    setIsExpanded(true);
    setVisibleItems(images.length);
  };

  const handleShowLess = () => {
    setIsExpanded(false);
    setVisibleItems(getInitialVisibleItemsCount());
  };

  return (
    <>
     <HeadingWithDivider title={t(`title`)} />

      <div className="flex flex-wrap gap-4 justify-center">
        {images.slice(0, visibleItems).map((image, index) => (
          <Link
            key={index}
            href={image.href}
            id={`practice-item-${index}`}
            className={` group practice-item cursor-pointer mt-2 w-[40%] md:w-[30%] lg:w-[22%] xl:w-[18%] xl:mx-6 h-[200px] transform transition-transform duration-1000 bg-color0 hover:bg-white rounded-3xl shadow-custom-shadow overflow-hidden ${
              animatedItems.includes(`practice-item-${index}`)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="flex flex-col items-center h-full mt-6 gap-6 w-full">
              <h2 className="text-color6 font-semibold text-sm md:text-md ">
                {t(`practicesHome${index + 1}`)}
              </h2>
              <Image
                src={`/${image.src}`}
                alt={`Hukuk Hizmetleri ${index + 1}`}
                width={96}
                height={96}
              />
            </div>
            <div className="absolute left-0 bottom-0 w-full h-0 transform  transition-all duration-1000 group-hover:translate-y-0 group-hover:h-[66%] backdrop-blur-3xl opacity-90 overflow-hidden flex justify-center text-xs sm:text-sm lg:text-base font-normal px-4 rounded-3xl text-indent-2 text-color1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit numquam ipsum esse voluptas. Repudiandae reiciendis excepturi mollit..
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-start mt-12">
        {isExpanded ? (
          <button className="learn-more" onClick={handleShowLess}>
            <span aria-hidden="true" className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text text-sm"></span>
          </button>
        ) : (
          visibleItems < images.length && (
            <button className="learn-more" onClick={handleShowMore}>
              <span aria-hidden="true" className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text text-sm">Diğer Hizmetler</span>
            </button>
          )
        )}
      </div>
    </>
  );
};

export default ClientPractices;
