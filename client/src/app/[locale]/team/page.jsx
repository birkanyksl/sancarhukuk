
import Breadcrumb from "@/components/BreadCrumb";
import Team from "@/components/teams/Team";
import { useTranslations } from "next-intl";
import React from "react";

export const metadata = {
  title: "Ekibimiz - Yüksel Hukuk Bürosu | İstanbul",
  description: "Yüksel Hukuk Bürosu'ndaki deneyimli avukatlar ve hukuk uzmanlarımızla tanışın. İstanbul'da en iyi hukuki danışmanlık hizmetleri için doğru adres.",
  openGraph: {
    title: "Ekibimiz - Yüksel Hukuk Bürosu | İstanbul",
    description: "Yüksel Hukuk Bürosu'ndaki deneyimli avukatlar ve hukuk uzmanlarımızla tanışın. İstanbul'da en iyi hukuki danışmanlık hizmetleri için doğru adres.",
    url: "",
    site_name: "Yüksel Hukuk Bürosu",
    locale: "tr_TR",
    // image: "https://yukselhukuk.com/og-image.jpg", // Örnek Open Graph görseli
  },
};
const TeamPage = () => {
  const t = useTranslations("teamPage")
  return (
    <>
   
      <div className="relative w-full h-48 bg-slate-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-color1 p-4 text-center">
          
          <h1 className="text-4xl lg:text-5xl font-medium"><span className="text-color6">{t("headerText").split(" ")[0]}</span>{" "}
          <span className="text-black">{t("headerText").split(" ")[1]}{" "}</span>
          <span className="text-black">{t("headerText").split(" ")[2]}</span>
          </h1>
   
            <p className="mt-4 text-sm lg:text-base text-gray-600">
            {t("headerSubText")}
            </p>
          </div>
        </div>
      </div> 
      <Breadcrumb/>  
      <Team/>
    </>
  );
};

export default TeamPage;
