import Breadcrumb from '@/components/BreadCrumb';
import Communication from '@/components/communication/Communication';
import React from 'react'
import { useTranslations } from 'next-intl';

export const metadata = {
  title: "İletişim - Yüksel Hukuk Bürosu | İstanbul",
  description: "Yüksel Hukuk Bürosu ile İstanbul'da iletişime geçin. Hukuki danışmanlık hizmetlerimiz hakkında bilgi alabilir, randevu talep edebilirsiniz.",
  openGraph: {
    title: "İletişim - Yüksel Hukuk Bürosu | İstanbul",
    description: "Yüksel Hukuk Bürosu ile İstanbul'da iletişime geçin. Hukuki danışmanlık hizmetlerimiz hakkında bilgi alabilir, randevu talep edebilirsiniz.",
    url: "",
    site_name: "Yüksel Hukuk Bürosu",
    locale: "tr_TR",
    // image: "https://yukselhukuk.com/og-image.jpg", 
  },
};

const CommunicationPage = () => {
  const t = useTranslations("contactPage");

    return (
          <>
          <div className="relative w-full h-48 bg-slate-50">
              <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-color1 p-4  text-center">
        <h1 className="text-4xl lg:text-5xl font-medium"><span className='text-color6'>{t("headerText")} </span></h1>
          <p className="mt-4 text-sm lg:text-base text-gray-600">
          {t("headerSubText")}
          </p>
        </div>
      </div>
      </div>
      <Breadcrumb/>
        <Communication/>
                        </>
    );
}

export default CommunicationPage