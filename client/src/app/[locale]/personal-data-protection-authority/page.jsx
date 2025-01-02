import Breadcrumb from '@/components/BreadCrumb';
import React from 'react'
import { useTranslations } from "next-intl";

export const metadata = {
  title: "KVKK -Kümüş & Yüksel (KY) Hukuk Bürosu| İstanbul",
  description:
    "Kişisel verilerinizi önemsiyoruz. Sitemizde, KVKK'ya uygun şekilde verilerinizi topluyor, saklıyor ve işliyoruz. Detaylı bilgi için gizlilik politikamızı inceleyin.",
  openGraph: {
    title: "KVKK - Kümüş & Yüksel (KY) Hukuk Bürosu | İstanbul",
    description:
      "Kişisel verilerinizi önemsiyoruz. Sitemizde, KVKK'ya uygun şekilde verilerinizi topluyor, saklıyor ve işliyoruz. Detaylı bilgi için gizlilik politikamızı inceleyin.",
    url: "",
    site_name: "Kümüş & Yüksel (KY) Hukuk Bürosu",
    locale: "tr_TR",
    // image: "https://yukselhukuk.com/og-image.jpg",
  },
};

const PDPA = () => {
  const t = useTranslations("PDPA");

  return (<>
    <div className="relative w-full h-48 bg-slate-50">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-color1 p-4 text-center">
        <h1 className="text-4xl lg:text-5xl font-medium">
          <span className="text-color6">
            {t("headerText")}
          </span>
        
        </h1>
        <p className="mt-4 text-sm lg:text-base text-gray-600">
          {t("headerSubText")}
        </p>
      </div>
    </div>
  </div>
  <Breadcrumb />
  </>
  )
}

export default PDPA