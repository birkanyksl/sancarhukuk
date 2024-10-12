"use client";

import React, { useState } from "react";
import InsightCard from "./InsightCard";
import HeadingWithDivider from "../HeadingWithDivider";
import HorizontalDivider from "../HorizontalDivider";
import useIntersectionObserver from "../IntersectionObserver";

const ClientInsights = () => {
  const articles = [
    {
      date: "24.07.2023",
      category: "FINANCES | REAL ESTATE",
      title: "How Lawyer Can Help",
      author: "Wendy Smith",
      authorTitle: "Lawyer",
    },
    {
      date: "24.07.2023",
      category: "FINANCES | REAL ESTATE",
      title: "Alternative Fee Arrangements",
      author: "Erkan Yüksel",
      authorTitle: "Lawyer",
    },
    {
      date: "24.07.2023",
      category: "FINANCES | REAL ESTATE",
      title: "Becoming The Company",
      author: "Erkan Yüksel",
      authorTitle: "Lawyer",
    },
    {
      date: "24.07.2023",
      category: "FINANCES | REAL ESTATE",
      title: "Business Skills All In",
      author: "Erkan Yüksel",
      authorTitle: "Lawyer",
    },
    {
      date: "24.07.2023",
      category: "FINANCES | REAL ESTATE",
      title: "Business Skills All In",
      author: "Erkan Yüksel",
      authorTitle: "Lawyer",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (target) => {
    console.log("Element is visible:", target);
    setIsVisible(true);
  };

  const { setRef } = useIntersectionObserver({
    threshold: 0.1,
    callback: handleIntersection,
  });

  return (
    <>
      <HeadingWithDivider title="Insights" />
      <div
        ref={setRef}
        className={`mb-12 md:my-20 lg:mb:24 flex flex-col items-center justify-center gap-4
    transform transition-transform duration-500 ease-in
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
  `}
      >
        <h1 className="text-center text-2xl lg:text-3xl font-semibold ">
          {" "}
          <span className="text-color6">Adaletin Gündeminde </span>
          <span className="text-color1">Neler Var?</span>
        </h1>
        <p className="text-sm font-light md:text-base text-gray-600">
          Yeni yasalar, kararlar ve hukuk dünyasındaki değişiklikler.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-16 w-full h-[1100px] md:gap-8 pt-4  md:h-[600px]  md:mb-16">
        {/* LEFT */}

        <div className="flex flex-col w-full ">
          <p className="text-[14px] font-medium text-color1 px-2 mb-2 md:mb-10 lg:text-[16px] xl:text-[18px]">
            Through team’s blog posts and professional publications, you can
            gain insights into important topics in the industry and stay updated
            on the latest developments in the field of law.
          </p>

          {articles.map((article, index) => (
            <div key={index} className="mb-1 md:px-4 ">
              <div className=" flex flex-row gap-4 justify-between items-center p-2 md:pb-8">
                <div className="flex flex-col gap-2 w-[60%] md:gap-4">
                  <div className="flex flex-col gap-2 md:flex-row">
                    <span className="text-[10px] font-light text-gray-400 md:font-normal lg:font-medium">
                      {article.date}
                    </span>
                    <span className="text-[11px]  font-light text-color6 md:font-normal lg:font-medium">
                      {article.category}
                    </span>
                  </div>

                  <h2 className="text-sm  font-semibold color1 overflow-hidden lg:font-bold">
                    {article.title}
                  </h2>
                </div>

                <div className="flex flex-col w-[30%] ">
                  <span className="text-[12px] font-medium text-color1 lg:font-semibold">
                    {article.author}
                  </span>
                  <span className="text-[12px] font-medium text-color1 lg:font-semibold">
                    {article.authorTitle}
                  </span>
                </div>

                <button className="w-[10%] text-[11px] font-medium text-gray-600 lg:font-semibold">
                  View More
                </button>
              </div>
              <HorizontalDivider width="100%" />
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col w-full md:w-1/3 gap-8 overflow-y-auto scroll-smooth insight-scroll overflow-hidden px-1">
          <div className="flex justify-between items-center">
            <h3 className="text-sm md:text-md font-semibold">
              Latest Insights
            </h3>
            <span className="text-xs font-light text-gray-900 ">View all</span>
          </div>
          <div className="flex flex-wrap justify-between">
            <InsightCard />
            <InsightCard />
            <InsightCard />
            <InsightCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientInsights;
