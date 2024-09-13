"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import HorizontalDivider from '../HorizontalDivider';

const listPractices = [
  "Fikri Mülkiyet Hukuku",
  "Kişisel Verilerin Korunması ",
  "Sigorta Hukuku",
  "Deniz Ticaret Hukuku",
  "Sağlık Hukuku",
  "Rekabet Hukuku",
  "Vergi Hukuku",
  "Sosyal Güvenlik Hukuku",
  "Sözleşmeler Hukuku",
  "Uluslararası Ticaret Hukuku",
  "Enerji Hukuku",
  "Çevre Hukuku",
];

const PracticesList = () => {
  const [visiblePractices, setVisiblePractices] = useState(5);

  useEffect(() => {
    const updateVisiblePractices = () => {
      if (window.innerWidth >= 1024) { 
        setVisiblePractices(listPractices.length); 
      } else if (window.innerWidth >= 768) { 
        setVisiblePractices(8); 
      } else { 
        setVisiblePractices(5); 
      }
    };

    window.addEventListener('resize', updateVisiblePractices);
    updateVisiblePractices(); 

    return () => window.removeEventListener('resize', updateVisiblePractices);
  }, []);

  return (
    <div className="bg-color5 p-8 mt-12">
      <div className="flex flex-wrap md:mx-8">
        {listPractices.slice(0, visiblePractices).map((practice, index) => (
          <div key={index} className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-2"> 
            <Link href="/">
              <div className="text-color1 text-sm font-medium hover:text-color2 p-4">
                {practice}
              </div>
            </Link>
            <HorizontalDivider />
          </div>
        ))}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(PracticesList), { ssr: false });
