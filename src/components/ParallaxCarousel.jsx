"use client";
import React, { useState, useEffect } from "react";
import EmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import "../app/globals.css";

const slides = [
  {
    bg: "https://images.pexels.com/photos/3684396/pexels-photo-3684396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Slide 1",
    mdbackground: "bg-color2",
  },
  {
    bg: "https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg",
    text: "Slide 2",
    mdbackground: "bg-color4",
  },
  {
    bg: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Slide 3",
    mdbackground: "bg-color3",
  },
];

const ParallaxCarousel = () => {
  const [emblaRef, emblaApi] = EmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = useState(0);

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
              className={`embla__slide relative md:flex md:flex-row items-center ${slide.mdbackground}`}
              key={index}
            >
              <div className="absolute inset-0 flex justify-center items-center text-white md:text-black md:relative md:w-1/2 z-10 ">
                <h2 className="text-xl md:text-3xl">{slide.text}</h2>
              </div>
              <div className="embla__image w-full relative h-[50vh] md:h-full md:w-1/2 overflow-hidden  md:rounded-[350px_50px_0px_0px_/600px_0px_0px_0px]">
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
