"use client";
import React, { useState, useEffect } from "react";
import EmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "../app/globals.css";
import { useTranslations } from "next-intl";


const slides = [
  {
    bg: "https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // SlideHead: "sdaas sda dsa dsa dsad sad sad ",
    // SlideText:"sa dsa dsadasdasdasda sdaas sda dsa dsa dsad sad sad sa dsa dsadasdasdasda sdaas sda dsa dsa dsad sad sad sa dsa dsadasdasdasda sdaas sda dsa dsa dsad sad sad sa dsa dsadasdasdasda",
    mdbackground: "bg-color2",
  },
  {
    bg: "https://images.pexels.com/photos/13591994/pexels-photo-13591994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // SlideHead: "sdaas sda dsa dsa dsad sad sad ",
    // SlideText:"sa dsa dsadasdasdasda sdaas sda dsa dsa dsad sad sad sa dsa dsadasdasdasda sdaas sda dsa dsa dsad sad sad sa dsa dsadasdasdasda sdaas sda dsa dsa dsad sad sad sa dsa dsadasdasdasda",
    mdbackground: "bg-color3",
  },
  {
    bg: "https://images.pexels.com/photos/28310726/pexels-photo-28310726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // SlideHead: "sdaas sda dsa dsa dsad sad sad ",
    // SlideText:"sa dsa dsadasdasdasda sdaas sda dsa dsa dsad sad sad sa dsa dsadasdasdasda sdaas sda dsa dsa dsad sad sad sa dsa dsadasdasdasda sdaas sda dsa dsa dsad sad sad sa dsa dsadasdasdasda",
    mdbackground: "bg-color4",
  },
];
 


const ParallaxCarousel = () => {
  const [emblaRef, emblaApi] = EmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("SliderTexts");

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setCurrentIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi.scrollPrev();
  const scrollNext = () => emblaApi.scrollNext();

  const goTo = (index) => emblaApi.scrollTo(index);

  return (
    <div className="relative h-[50vh] rounded-md">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className={`embla__slide relative md:flex md:flex-row  ${slide.mdbackground}`}
              key={index}
            >
              {/* SLIDER TEXT */}
              <div className="absolute inset-0 text-white md:relative md:w-1/2 z-10 ">
                <h1 className="text-xl md:text-2xl pt-10 px-4 ">{t(`slider${index + 1}header`)}</h1>
                <p className="pt-4 px-4 hidden md:block">{t(`slider${index + 1}paragh`)}</p>
              </div>

              {/* SLIDER IMAGE */}
              <div className="embla__image w-full relative h-[50vh] md:h-full md:w-1/2 overflow-hidden  md:rounded-[350px_50px_0px_0px_/600px_0px_0px_0px] ">
                <Image
                  src={slide.bg}
                  alt={slide.text}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                />
              </div>

            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <button className="embla__prev" onClick={scrollPrev}>
          <Image
            src="/next-button.png"
            alt="Previous"
            width={40}
            height={40}
            className="rotate-180"
          />
        </button>
        <div className="embla__dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`embla__dot ${
                index === currentIndex ? "embla__dot--active" : ""
              }`}
              onClick={() => goTo(index)}
            ></div>
          ))}
        </div>
        <button className="embla__next" onClick={scrollNext}>
          <Image
            src="/next-button.png"
            alt="Next"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
};

export default ParallaxCarousel;
