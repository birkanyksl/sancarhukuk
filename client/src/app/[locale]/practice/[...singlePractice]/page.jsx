import Breadcrumb from "@/components/BreadCrumb";
import SinglePractice from "@/components/practice/singlePractice";
import practiceDetails from "@/data/practiceDetails";
import React from "react";


export async function generateMetadata({ params }) {
  const { singlePractice } = params;
  const practiceDetail = practiceDetails[singlePractice];

  if (!practiceDetail) {
    return {
      title: "Hizmet Bulunamadı - Yüksel Hukuk Bürosu | İstanbul",
      description: "Aradığınız hizmet bilgisi bulunamadı. Yüksel Hukuk Bürosu ile iletişime geçin.",
      openGraph: {
        title: "Hizmet Bulunamadı - Yüksel Hukuk Bürosu | İstanbul",
        description: "Aradığınız hizmet bilgisi bulunamadı. Yüksel Hukuk Bürosu ile iletişime geçin.",
        url: "",
        site_name: "Yüksel Hukuk Bürosu",
        locale: "tr_TR",
      },
    };
  }

  return {
    title: `${practiceDetail.title} - Yüksel Hukuk Bürosu | İstanbul`,
    description: practiceDetail.description || "Yüksel Hukuk Bürosu'nun sunduğu detaylı hizmet hakkında bilgi edinin.",
    openGraph: {
      title: `${practiceDetail.title} - Yüksel Hukuk Bürosu | İstanbul`,
      description: practiceDetail.description || "Yüksel Hukuk Bürosu'nun sunduğu detaylı hizmet hakkında bilgi edinin.",
      url: "",  // 
      site_name: "Yüksel Hukuk Bürosu",
      locale: "tr_TR",
      // image: practiceDetail.image || "https://yukselhukuk.com/og-image.jpg",  
    },
  };
}

const page = ({params}) => {
 
  const {singlePractice} = params


const practiceDetail = practiceDetails[singlePractice]

  return (
    <>
      <div className="relative w-full h-48 bg-slate-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-color1 p-4  text-center">
          <h1 className="text-4xl lg:text-5xl font-medium">
              <span className="text-color6">{practiceDetail ? practiceDetail.title : 'Bölüm Bulunamadı'}</span>
            </h1>
            <p className="mt-4 text-sm lg:text-base text-gray-600">
              Şirketimiz, kapsamlı hukuki danışmanlık ve dava hizmetleri sunarak
              müvekkillerine güvenilir çözümler sağlar.
            </p>
          </div>
        </div>
      </div>
      <Breadcrumb/>
  <SinglePractice params={params}/>
    </>
  );
};

export default page;
