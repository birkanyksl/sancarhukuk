"use client";
import React, { useState, useEffect } from "react";
import EmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image";
import "../app/globals.css";

const slides = [
  {
    bg: "https://images.pexels.com/photos/28120193/pexels-photo-28120193/free-photo-of-gun-dogumunda-altin-ahududular.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    text: "Slide 1",
  },
  {
    bg: "https://images.pexels.com/photos/27962172/pexels-photo-27962172/free-photo-of-ahsap-tahta-safak-gun-dogumu.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    text: "Slide 2",
  },
  {
    bg: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    text: "Slide 3",
  },
];

const ParallaxCarousel = () => {
  const [emblaRef, emblaApi] = EmblaCarousel({ loop: true },[Autoplay()]);
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
    <div className="relative h-[50vh] ">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className="embla__slide relative md:flex md:flex-row items-center"
              key={index}
            >
              <div className="absolute inset-0 flex justify-center items-center bg-black/50 text-white md:text-black md:relative md:w-1/2 md:bg-transparent z-10">
                <h2 className="text-xl md:text-3xl">{slide.text}</h2>
              </div>
              <div className="embla__image w-full relative h-[50vh] md:h-full md:w-1/2">
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
        <div className="embla__dots ">
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
