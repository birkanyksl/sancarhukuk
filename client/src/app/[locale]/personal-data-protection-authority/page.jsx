import Breadcrumb from "@/components/BreadCrumb";
import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import tr from "../../../messages/tr.json";
import en from "../../../messages/en.json";

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
  const locale = useLocale();
  const list1Tr = tr.PDPA.subHead2UL.list
  const list1En = en.PDPA.subHead2UL.list
  const list2Tr = tr.PDPA.subHead3UL.list
  const list2En = en.PDPA.subHead3UL.list
  const list3Tr = tr.PDPA.subHead4UL.list
  const list3En = en.PDPA.subHead4UL.list
  const list4Tr = tr.PDPA.subHead5UL.list
  const list4En = en.PDPA.subHead5UL.list

  return (
    <>
      <div className="relative w-full h-48 bg-slate-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-color1 p-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-medium">
              <span className="text-color6">{t("headerText")}</span>
            </h1>
            <p className="mt-4 text-sm lg:text-base text-gray-600">
              {t("headerSubText")}
            </p>
          </div>
        </div>
      </div>
      <Breadcrumb />
      <div className="flex flex-col items-start justify-center px-10 md:px-12 lg:px-20 xl:px-30 mt-10 gap-4 mb-20">
        <h2 className="text-base md:text-lg font-bold mb-4">
          {t("h1")}
        </h2>
        <h3 className="text-base  font-semibold mb-4">
        {t("subHead1")}
        </h3>
        <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
        {t("subP1")}
          </p>
          <h3 className="text-base  font-semibold mb-4">
          {t("subHead2")}
        </h3>
        <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
        {t("subP2")}
          </p>
          <ul className="list-disc list-inside mb-4 text-sm md:text-base text-gray-800 leading-6">
          {(locale === "tr" ? list1Tr : list1En).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
          <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
          {t("subP3")}
          </p>
          <h3 className="text-base  font-semibold mb-4">
          {t("subHead3")}
        </h3>
        <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
        {t("subP4")}
          </p>
          <ul className="list-disc list-inside mb-4 text-sm md:text-base text-gray-800 leading-6">
          {(locale === "tr" ? list2Tr : list2En).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
            
          </ul>
          <h3 className="text-base  font-semibold mb-4">
          {t("subHead4")}
        </h3>
        <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
        {t("subP5")}
          </p>
          <h3 className="text-base  font-semibold mb-4">
          {t("subHead5")}
        </h3>
        <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
        {t("subP6")}
          </p>
          <h2 className="text-base md:text-lg font-semibold mb-4">
  {t("h2")}
</h2>
<h3 className="text-base font-semibold mb-4">
{t("subHead1")}
</h3>
<p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
{t("subP1")}
</p>
<h3 className="text-base font-semibold mb-4">
{t("subHead2")}
</h3>
<p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
  {t("subP7")}
</p>
<ul className="list-disc list-inside mb-4 text-sm md:text-base text-gray-800 leading-6">
{(locale === "tr" ? list3Tr : list3En).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
</ul>
<p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
 {t("subP8")}
</p>
<h3 className="text-base font-semibold mb-4">
{t("subHead3")}
</h3>
<p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
  {t("subP4")}
</p>
<ul className="list-disc list-inside mb-4 text-sm md:text-base text-gray-800 leading-6">
{(locale === "tr" ? list4Tr : list4En).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
</ul>
<h3 className="text-base font-semibold mb-4">
{t("subHead4")}
</h3>
<p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
{t("subP5")}
</p>
<h3 className="text-base font-semibold mb-4">
{t("subHead5")}
</h3>
<p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
{t("subP6")}
</p>
      </div>
    </>
  );
};

export default PDPA;
