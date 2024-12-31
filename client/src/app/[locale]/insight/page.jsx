import React from "react";
import Posts from "@/components/insight/posts/Posts";
import Breadcrumb from "@/components/BreadCrumb";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Yayınlar - Yüksel Hukuk Bürosu | İstanbul",
  description: "Yüksel Hukuk Bürosu'nun İstanbul'daki en son hukuki analizlerini ve yayınlarını keşfedin. Hukuk alanındaki güncel gelişmeleri takip edin.",
  openGraph: {
    title: "Yayınlar - Yüksel Hukuk Bürosu | İstanbul",
    description: "Yüksel Hukuk Bürosu'nun İstanbul'daki en son hukuki analizlerini ve yayınlarını keşfedin. Hukuk alanındaki güncel gelişmeleri takip edin.",
    url: "",
    site_name: "Yüksel Hukuk Bürosu",
    locale: "tr_TR",
    // image: "https://yukselhukuk.com/og-image.jpg",
  },
};

const page = () => {
  const t = useTranslations("publicationsPage");

  return (
    <div className="">
      <div className="relative w-full h-48 bg-slate-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-color1 p-4 text-center">
            <h1 className="text-4xl font-normal">
              <span className="text-color6">{t("headerText")}</span>
            </h1>
            <p className="mt-4 text-sm text-gray-600">
              {t("headerSubText")}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8">
      <Breadcrumb/>

      </div>
      <Posts />
    </div>
  );
};

export default page;
