import Breadcrumb from "@/components/BreadCrumb";
import React from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import tr from "../../../messages/tr.json";
import en from "../../../messages/en.json";

export const metadata = {
  title: "Gizlilik Politikası - KY Hukuk Bürosu | İstanbul",
  description:
    "Bu gizlilik politikası, kişisel verilerinizin toplanma, işlenme ve korunma süreçlerini detaylandırır. Büromuzun veri gizliliği taahhütleri ve üçüncü taraf bağlantılarla ilgili bilgiler için okuyun.",
  openGraph: {
    title: "Gizlilik Politikası - KY Hukuk Bürosu | İstanbul",
    description:
      "Bu gizlilik politikası, kişisel verilerinizin toplanma, işlenme ve korunma süreçlerini detaylandırır. Büromuzun veri gizliliği taahhütleri ve üçüncü taraf bağlantılarla ilgili bilgiler için okuyun.",
    url: "",
    site_name: "KY Hukuk Bürosu",
    locale: "tr_TR",
    // image: "https://yukselhukuk.com/og-image.jpg",
  },
};

const PrivacyPolicy = () => {
  const locale = useLocale();
  const t = useTranslations("privacyPolicyPage");
  const exceptionsList = tr.privacyPolicyPage.sections.exceptions.list;
  const exceptionListEN = en.privacyPolicyPage.sections.exceptions.list;
  const cookiesList = tr.privacyPolicyPage.sections.cookies.content;
  const cookiesListEN = en.privacyPolicyPage.sections.cookies.content;

  return (
    <>
      <div className="relative w-full h-48 bg-slate-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-color1 p-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-medium">
              <span className="text-color6">
                {t("headerText").split(" ")[0]}
              </span>{" "}
              <span className="text-black">
                {t("headerText").split(" ")[1]}
              </span>
            </h1>
            <p className="mt-4 text-sm lg:text-base text-gray-600">
              {t("headerSubText")}
            </p>
          </div>
        </div>
      </div>
      <Breadcrumb />
      <div className="flex flex-col items-start justify-center px-10 md:px-12 lg:px-20 xl:px-30 mt-10 gap-4 mb-20">
        <div className="">
          <h2 className="text-base md:text-lg font-bold mb-4">
            <span className="text-color6">{t("h1").split(" ")[0]}</span>{" "}
            <span className="text-black">{t("h1").split(" ")[1]}</span>
          </h2>
          <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
            {t("intro")}
          </p>

          <h2 className="text-base md:text-base font-semibold mb-4">
            {t("sections.collection.title")}
          </h2>
          <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
            {t("sections.collection.content")}
          </p>

          <h2 className="text-base md:text-base font-semibold mb-4">
            {t("sections.confidentiality.title")}
          </h2>
          <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
            {t("sections.confidentiality.content")}
          </p>

          <h2 className="text-base md:text-base font-semibold mb-4 text-gray-900">
            {t("sections.thirdParty.title")}
          </h2>
          <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
            {t("sections.thirdParty.content")}
          </p>

          <h2 className="text-base md:text-base font-semibold mb-4">
            {t("sections.exceptions.title")}
          </h2>
          <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
            {t("sections.exceptions.content")}
          </p>
          <ul className="list-disc list-inside mb-4 text-sm md:text-base text-gray-800 leading-6">
            {(locale === "tr" ? exceptionsList : exceptionListEN).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>

          <h2 className="text-base md:text-base font-semibold mb-4">
            {t("sections.emailSecurity.title")}
          </h2>
          <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
            {t("sections.emailSecurity.content")}
          </p>

          <h2 className="text-base md:text-base font-semibold mb-4">
            {t("sections.cookies.title")}
          </h2>
          {(locale === "tr" ? cookiesList : cookiesListEN).map(
            (item, index) => (
              <p
                className="text-sm md:text-base mb-4 text-gray-800 leading-6"
                key={index}
              >
                {item}
              </p>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
