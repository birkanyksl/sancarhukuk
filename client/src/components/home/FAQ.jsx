"use client";

import { useState, useCallback } from "react";
import HeadingWithDivider from "../HeadingWithDivider";
import { useTranslations } from "next-intl";

const Faq = () => {
  const [activeSection, setActiveSection] = useState("basic");
  const [openQuestion, setOpenQuestion] = useState(null);
  const t = useTranslations("faq");

  const sections = {
    basic: {
      title: t("sections.basic.title"),
      items: [
        {
          id: 1,
          question: t("sections.basic.items.0.question"),
          answer: t("sections.basic.items.0.answer"),
        },
        {
          id: 2,
          question: t("sections.basic.items.1.question"),
          answer: t("sections.basic.items.1.answer"),
        },
        {
          id: 3,
          question: t("sections.basic.items.2.question"),
          answer: t("sections.basic.items.2.answer"),
        },
        {
          id: 4,
          question: t("sections.basic.items.3.question"),
          answer: t("sections.basic.items.3.answer"),
        },
        {
          id: 5,
          question: t("sections.basic.items.4.question"),
          answer: t("sections.basic.items.4.answer"),
        },
      ],
    },
    lawyers: {
      title: t("sections.lawyers.title"),
      items: [
        {
          id: 6,
          question: t("sections.lawyers.items.0.question"),
          answer: t("sections.lawyers.items.0.answer"),
        },
        {
          id: 7,
          question: t("sections.lawyers.items.1.question"),
          answer: t("sections.lawyers.items.1.answer"),
        },
        {
          id: 8,
          question: t("sections.lawyers.items.2.question"),
          answer: t("sections.lawyers.items.2.answer"),
        },
        {
          id: 9,
          question: t("sections.lawyers.items.3.question"),
          answer: t("sections.lawyers.items.3.answer"),
        },
      ],
    },
    service: {
      title: t("sections.service.title"),
      items: [
        {
          id: 10,
          question: t("sections.service.items.0.question"),
          answer: t("sections.service.items.0.answer"),
        },
        {
          id: 11,
          question: t("sections.service.items.1.question"),
          answer: t("sections.service.items.1.answer"),
        },
        {
          id: 12,
          question: t("sections.service.items.2.question"),
          answer: t("sections.service.items.2.answer"),
        },
        {
          id: 13,
          question: t("sections.service.items.3.question"),
          answer: t("sections.service.items.3.answer"),
        },
      ],
    },
    price: {
      title: t("sections.price.title"),
      items: [
        {
          id: 14,
          question: t("sections.price.items.0.question"),
          answer: t("sections.price.items.0.answer"),
        },
        {
          id: 15,
          question: t("sections.price.items.1.question"),
          answer: t("sections.price.items.1.answer"),
        },
      ],
    },
  };

  const handleSectionClick = useCallback((section) => {
    setActiveSection(section);
    setOpenQuestion(null);
  }, []);

  const handleQuestionClick = useCallback((id) => {
    setOpenQuestion((prevState) => (prevState === id ? null : id));
  }, []);

  return (
    <div className="mb-28 md:mb-40">
    
      <div className="flex-col w-full p-4 justify-center mb-10">
        <HeadingWithDivider title={t("title")} />
        <div className="mb-12 md:my-20 lg:mb:24 flex flex-col lg:flex-row lg:my-24 md:items-end justify-center gap-4">
          <div className="flex flex-col text-center items-center w-full gap-4">
            <h1 className="text-center text-2xl lg:text-3xl font-bold">             
              <span className="text-color6">{t("Header1")}</span>
              <span className="text-color1">{t("Header2")}</span>
            </h1>
            <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
              {t("paragraph")}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row w-full  justify-end">
            {Object.keys(sections).map((section) => (
              <div key={section} className="flex">
                <button
                  className={`px-4 py-2 flex w-full rounded text-sm font-semibold justify-between items-center ${
                    activeSection === section ? "bg-color5 text-color1" : ""
                  }`}
                  onClick={() => handleSectionClick(section)}
                >
                  {sections[section].title} 
                </button>
              </div>
            ))}
          </div>
        </div>

        {Object.keys(sections).map((section) => (
          <div key={section}>
            {activeSection === section && (
              <div className="grid grid-cols-1 gap-8 mt-8">
                {sections[section].items.map((faq) => (
                  <div
                    key={faq.id}
                    className="scroll-hide min-w-full p-4 border-b-[1px] transition-all duration-1000 ease-in-out"
                  >
                    <h2
                      className="text-sm mb-4 font-medium text-gray-800 leading-6 cursor-pointer"
                      onClick={() => handleQuestionClick(faq.id)}
                    >
                      {faq.question}
                    </h2>
                    {openQuestion === faq.id && (
                      <div className="text-sm font-light leading-6 text-gray-800">
                        {faq.answer}
                      </div>
                    )}
                  
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
