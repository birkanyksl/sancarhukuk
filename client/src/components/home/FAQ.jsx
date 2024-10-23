"use client";

import { useState, useCallback } from "react";
import HeadingWithDivider from "../HeadingWithDivider";
import HorizontalDivider from "../HorizontalDivider";
import { FaPlus, FaMinus } from "react-icons/fa";
import useIntersectionObserver from "../IntersectionObserver";

const sections = {
  basic: [
    {
      id: 1,
      question: "What types of cases does your law firm handle?",
      answer:
        "Our practice areas include Business law, employment and labor law, intellectual property, matrimonial and family law, real estate law, and health care law.",
    },
    {
      id: 2,
      question: "Do you charge for consultations?",
      answer:
        "We offer a free initial consultation to discuss your case and determine how we can assist you.",
    },
    {
      id: 3,
      question: "How long will this process take?",
      answer:
        "The duration of the process depends on the complexity of the case. We strive to resolve matters as efficiently as possible.",
    },
    {
      id: 4,
      question: "Can I bring a case for a family member who has died?",
      answer:
        "Yes, you can bring a case on behalf of a deceased family member. Please contact us for more details.",
    },
  ],
  lawyers: [
    {
      id: 5,
      question: "How experienced are your lawyers?",
      answer:
        "Our lawyers have over 20 years of experience in various fields of law.",
    },
    {
      id: 6,
      question: "Can I choose my lawyer?",
      answer:
        "Yes, you can choose your lawyer based on their expertise and your specific needs.",
    },
  ],
  service: [
    {
      id: 7,
      question: "What services do you offer?",
      answer:
        "We offer a wide range of legal services including consultation, litigation, and mediation.",
    },
    {
      id: 8,
      question: "Do you offer online consultations?",
      answer: "Yes, we offer online consultations for your convenience.",
    },
  ],
  price: [
    {
      id: 9,
      question: "What are your fees?",
      answer:
        "Our fees vary depending on the complexity of the case. Please contact us for a detailed quote.",
    },
    {
      id: 10,
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment plans to accommodate your financial situation.",
    },
  ],
};

const Faq = () => {
  const [activeSection, setActiveSection] = useState("basic");
  const [openQuestion, setOpenQuestion] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleSectionClick = useCallback((section) => {
    setActiveSection(section);
    setOpenQuestion(null);
  }, []);

  const handleQuestionClick = useCallback((id) => {
    setOpenQuestion((prevState) => (prevState === id ? null : id));
  }, []);

  const handleIntersection = (target) => {
    setIsVisible(true);
  };

  const { setRef } = useIntersectionObserver({
    threshold: 0.1,
    callback: handleIntersection,
  });

  return (
    <>
      {/* // MD EKRAN ÜSTÜ */}
      <div className=" hidden  md:block  flex-col w-full p-4 justify-center mb-10">
        <HeadingWithDivider title="FAQ" />

        <div
          className={`mb-12 md:my-20 lg:mb:24 flex flex-row lg:my-24  items-end justify-center gap-4  `}
        >
          <div className="flex flex-col text-center items-center w-1/2">
            <h1
              className={`text-center text-2xl lg:text-3xl font-semibold mb-8`}
            >
              {" "}
              <span className="text-color6">Merak </span>
              <span className="text-color1">Ettikleriniz</span>
            </h1>
            <p className="text-sm font-light md:text-base text-gray-600">
              Avukatlık hizmetlerimizle ilgili merak ettiğiniz soruları bu
              bölümde bulabilirsiniz.
            </p>
          </div>

          <div className="flex flex-row w-1/2 flex-wrap justify-end">
            {Object.keys(sections).map((section) => (
              <div key={section} className="flex">
                <button
                  className={`px-4 py-2 flex w-full rounded text-sm font-semibold justify-between items-center ${
                    activeSection === section ? "bg-color5 text-color1" : ""
                  }`}
                  onClick={() => handleSectionClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </div>
            ))}
          </div>
        </div>

        {Object.keys(sections).map((section) => (
          <div key={section}>
            {activeSection === section && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {sections[section].map((faq) => (
                  <div
                    key={faq.id}
                    className={`scroll-hide min-w-full p-4 border-b-[1px] transition-all duration-1000 ease-in-out`}
                  >
                    <h2
                      className="text-[14px] font-semibold color1 cursor-pointer "
                      onClick={() => handleQuestionClick(faq.id)}
                    >
                      {faq.question}
                    </h2>
                    {openQuestion === faq.id && (
                      <p className="mt-2 text-[12.5px] font-medium text-gray-600">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/*   SM EKRAN */}

      <div className="flex flex-col w-full p-4 justify-center md:hidden">
        <div className="flex flex-col gap-4 mb-6">
          <HeadingWithDivider title="FAQ" />

          <div
            ref={setRef}
            className={`mb-12 md:my-16 lg:mb:24 flex lg:my-12 flex-col items-center justify-center gap-4 transform transition-transform duration-500 ease-in ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <h1 className="text-center text-2xl lg:text-3xl font-semibold ">
              {" "}
              <span className="text-color6">Merak </span>
              <span className="text-color1">Ettikleriniz</span>
            </h1>
            <p className="text-sm font-light md:text-base text-gray-600">
              Avukatlık hizmetlerimizle ilgili merak ettiğiniz soruları bu
              bölümde bulabilirsiniz.
            </p>
          </div>

          <div className="flex flex-col gap-4 ">
            {Object.keys(sections).map((section) => (
              <div key={section}>
                <button
                  className={`px-6 py-2 flex w-full rounded text-sm font-semibold justify-between items-center ${
                    activeSection === section
                      ? "bg-gray-100 text-color1"
                      : "bg-gray-50"
                  }`}
                  onClick={() => handleSectionClick(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="flex ml-2 text-sm">
                    {activeSection === section ? (
                      <FaMinus className="text-[10px] text-color6" />
                    ) : (
                      <FaPlus className="text-[10px] text-color6" />
                    )}
                  </span>
                </button>
                <HorizontalDivider width="100%" />
                {activeSection === section && (
                  <div className="flex flex-col gap-4 mt-4">
                    {sections[section].map((faq) => (
                      <div
                        key={faq.id}
                        className={`scroll-hide min-w-full p-2 border-b-[1px] transition-all duration-1000 ease-in-out`}
                      >
                        <h2
                          className="text-[12.5px] font-medium color1 cursor-pointer "
                          onClick={() => handleQuestionClick(faq.id)}
                        >
                          {faq.question}
                        </h2>
                        {openQuestion === faq.id && (
                          <p className="mt-2 text-xs font-medium text-gray-600">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;

{
}
