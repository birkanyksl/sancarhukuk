"use client";

import { useState, useCallback } from 'react';
import HeadingWithDivider from '../HeadingWithDivider';
import HorizontalDivider from '../HorizontalDivider';
import { FaPlus, FaMinus } from "react-icons/fa";

const sections = {
  basic: [
    {
      id: 1,
      question: "What types of cases does your law firm handle?",
      answer: "Our practice areas include Business law, employment and labor law, intellectual property, matrimonial and family law, real estate law, and health care law."
    },
    {
      id: 2,
      question: "Do you charge for consultations?",
      answer: "We offer a free initial consultation to discuss your case and determine how we can assist you."
    },
    {
      id: 3,
      question: "How long will this process take?",
      answer: "The duration of the process depends on the complexity of the case. We strive to resolve matters as efficiently as possible."
    },
    {
      id: 4,
      question: "Can I bring a case for a family member who has died?",
      answer: "Yes, you can bring a case on behalf of a deceased family member. Please contact us for more details."
    }
  ],
  lawyers: [
    {
      id: 5,
      question: "How experienced are your lawyers?",
      answer: "Our lawyers have over 20 years of experience in various fields of law."
    },
    {
      id: 6,
      question: "Can I choose my lawyer?",
      answer: "Yes, you can choose your lawyer based on their expertise and your specific needs."
    }
  ],
  service: [
    {
      id: 7,
      question: "What services do you offer?",
      answer: "We offer a wide range of legal services including consultation, litigation, and mediation."
    },
    {
      id: 8,
      question: "Do you offer online consultations?",
      answer: "Yes, we offer online consultations for your convenience."
    }
  ],
  price: [
    {
      id: 9,
      question: "What are your fees?",
      answer: "Our fees vary depending on the complexity of the case. Please contact us for a detailed quote."
    },
    {
      id: 10,
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans to accommodate your financial situation."
    }
  ],
  benefits: [
    {
      id: 11,
      question: "What are the benefits of choosing your firm?",
      answer: "We provide personalized service, experienced lawyers, and a commitment to achieving the best possible outcome for our clients."
    },
    {
      id: 12,
      question: "Do you have client testimonials?",
      answer: "Yes, we have numerous client testimonials that highlight our successful track record."
    }
  ]
};

const Faq = () => {
  const [activeSection, setActiveSection] = useState('basic');
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleSectionClick = useCallback((section) => {
    setActiveSection(section);
    setOpenQuestion(null); 
  }, []);

  const handleQuestionClick = useCallback((id) => {
    setOpenQuestion(prevState => (prevState === id ? null : id)); 
  }, []);

  return (
    <div className="flex flex-col w-full p-4 justify-center">
      <div className="flex flex-col gap-4 mb-6">
        <HeadingWithDivider title="FAQ"/>
        <div className="flex flex-col gap-4">
          {Object.keys(sections).map((section) => (
            <div key={section}>
              <button
                className={`px-6 py-2 flex w-full rounded text-sm font-medium justify-between items-center ${activeSection === section ? 'bg-gray-100 text-color1' : 'bg-gray-50'}`}
                onClick={() => handleSectionClick(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="flex ml-2 text-sm">
                  {activeSection === section ? <FaMinus className='text-[10px] text-color6'/> : <FaPlus className='text-[10px] text-color6'/>}
                </span>
              </button>
              <HorizontalDivider width='100%'/>
              {activeSection === section && (
                <div className="flex flex-col gap-4 mt-4">
                  {sections[section].map((faq) => (
                    <div
                      key={faq.id}
                      className={`scroll-hide min-w-full p-2 border-b-[1px] transition-all duration-1000 ease-in-out `}
                    >
                      <h2
                        className="text-sm font-normal mb-3 cursor-pointer"
                        onClick={() => handleQuestionClick(faq.id)}
                      >
                        {faq.question}
                      </h2>
                      {openQuestion === faq.id && (
                        <p className="mt-2 text-xs font-normal text-gray-500">
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
  );
};

export default Faq;
