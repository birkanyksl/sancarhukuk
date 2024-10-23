import SinglePractice from "@/components/practice/singlePractice";
import practiceDetails from "@/data/practiceDetails";
import React from "react";

const page = ({params}) => {
 
  const {singlePractice} = params


const practiceDetail = practiceDetails[singlePractice]

  return (
    <>
      <div className="relative w-full h-48 bg-slate-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-color1 p-4  text-center">
            <h1 className="text-4xl font-normal">
              <span className="text-color6">{practiceDetail ? practiceDetail.title : 'Bölüm Bulunamadı'}</span>
            </h1>
            <p className="mt-4 text-sm text-gray-600">
              Şirketimiz, kapsamlı hukuki danışmanlık ve dava hizmetleri sunarak
              müvekkillerine güvenilir çözümler sağlar.
            </p>
          </div>
        </div>
      </div>
  <SinglePractice params={params}/>
    </>
  );
};

export default page;
