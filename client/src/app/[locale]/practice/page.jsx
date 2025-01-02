import Breadcrumb from "@/components/BreadCrumb";
import Practice from "@/components/practice/Practice";
import React from "react";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Hizmetler - Kümüş & Yüksel (KY) Hukuk Bürosu | İstanbul",
  description: "İstanbul'da hukuki danışmanlık ve dava hizmetleri sunan Kümüş & Yüksel (KY) Hukuk Bürosu, çeşitli hukuk alanlarında profesyonel çözümler sunmaktadır. İhtiyaçlarınıza uygun hizmetleri keşfedin.",
  openGraph: {
    title: "Hizmetler - Kümüş & Yüksel (KY) Hukuk Bürosu| İstanbul",
    description: "İstanbul'da hukuki danışmanlık ve dava hizmetleri sunan Kümüş & Yüksel (KY) Hukuk Bürosu, çeşitli hukuk alanlarında profesyonel çözümler sunmaktadır. İhtiyaçlarınıza uygun hizmetleri keşfedin.",
    url: "",
    site_name: "Kümüş & Yüksel (KY) Hukuk Bürosu",
    locale: "tr_TR",
    // image: "https://yukselhukuk.com/og-image.jpg", 
  },
};
const PracticePage = () => {
  const t = useTranslations("practicePage")
  return (
    <>
      <div className="relative w-full h-48 bg-slate-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-color1 p-4  text-center">
          <h1 className="text-4xl lg:text-5xl font-medium">
              <span className="text-color6">{t("headerText")}</span>
            </h1>
            <p className="mt-4 text-sm lg:text-base text-gray-600">
            {t("headerSubText")}
            </p>
          </div>
        </div>
      </div>
      <Breadcrumb/>
      <Practice />
    </>
  );
};

export default PracticePage;
