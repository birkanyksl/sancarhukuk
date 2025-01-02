import Breadcrumb from "@/components/BreadCrumb";
import React from "react";
import { useTranslations } from "next-intl";

export const metadata = {
    title: "Yasal Uyarı - Kümüş & Yüksel (KY) Hukuk Bürosu | İstanbul",
    description: "Kümüş & Yüksel (KY) Hukuk Bürosu'nun yasal uyarı sayfası. İstanbul'da bulunan hukuk büromuzun yasal bildirimleri ve uyarıları hakkında bilgi edinin.",
    openGraph: {
        title: "Yasal Uyarı - Kümüş & Yüksel (KY) Hukuk Bürosu | İstanbul",
        description: "Kümüş & Yüksel (KY) Hukuk Bürosu'nun yasal uyarı sayfası. İstanbul'da bulunan hukuk büromuzun yasal bildirimleri ve uyarıları hakkında bilgi edinin.",
        url: "",
        site_name: "Kümüş & Yüksel (KY) Hukuk Bürosu",
        locale: "tr_TR",
        // image: "https://yukselhukuk.com/og-image.jpg", 
    },
};


const LegalNotice = () => {
    const t = useTranslations("legalNoticePage"); 
 
return (
    <>
        <div className="relative w-full h-48 bg-slate-50">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 text-center">
                    <h1 className="text-4xl lg:text-5xl font-medium">
                    <span className="text-color6">{t("headerText").split(" ")[0]}</span>{" "}
                    <span className="text-black">{t("headerText").split(" ")[1]}</span>
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
            <span className="text-color6">{t("h1").split(" ")[0]}</span>{" "}
            <span className="text-black">{t("h1").split(" ")[1]}</span>
            </h2>
            <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
            {t("p1")}
            </p>
            <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
            {t("p2")}
            </p>
            <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
            {t("p3")}
            </p>
        </div>
    </>
);
};

export default LegalNotice;
