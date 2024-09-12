"use client";
import React, { useState, useRef, useEffect } from "react";
import HeadingWithDivider from "../HeadingWithDivider";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Practices = () => {
  const t = useTranslations("HomePractices");

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
    <div>
      <div>
        <HeadingWithDivider title={t(`title`)} />
      </div>

      <div>
      
        <div className="flex flex-wrap gap-4 justify-center ">
          {images.slice(0, visibleItems).map((image, index) => (
           
            <Link
              key={index}
              href={image.href}
              id={`practice-item-${index}`}
              className={`practice-item  cursor-pointer mt-2 w-[40%] md:w-[30%] lg:w-[22%] xl:w-[18%] xl:mx-6 h-[200px] border border-color6 transform transition-transform duration-1000 hover:bg-amber-50  rounded-3xl  ${
                animatedItems.includes(`practice-item-${index}`)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <div className="flex flex-col items-center h-full mt-6 gap-6">
                <h2 className="text-color1 font-bold text-sm md:text-md">{t(`practicesHome${index + 1}`)}</h2>
                <Image
                  src={`/${image.src}`}
                  alt={`Hukuk Hizmetleri ${index + 1}`}
                  width={96}
                  height={96}
                  className="hover:scale-110"
                />
              </div>
            </Link>
            
          ))}
        </div>

        <div className="flex justify-start mt-16">
          {isExpanded ? (
            <button
              onClick={handleShowLess}
              className="show-more-button"
            >
              ⬆ 
            </button>
          ) : (
            visibleItems < images.length && (
              <button
                onClick={handleShowMore}
                className="show-more-button"
              >
                ⬇ 
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Practices;
