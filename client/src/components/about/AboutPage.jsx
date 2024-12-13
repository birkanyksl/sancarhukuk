import React from "react";
import HeadingWithDivider from "../HeadingWithDivider";
import HorizontalDivider from "../HorizontalDivider";
import { useTranslations } from "next-intl";

const AboutPage = () => {
  const  t  = useTranslations("aboutPage");

return (

    <div className="flex flex-col w-full px-6 md:px-8 lg:px-16 xl:px-32  pb-8 mt-8 lg:gap-8">
     
      <div className="flex flex-col gap-6 p-2 ">
        <div className="text-center">
          <HeadingWithDivider title={t("title")} />
        </div>

        <div className="flex flex-col mb-8 gap-6 ">
          <div className="flex flex-col  gap-4">
          <h2 className="text-base md:text-lg font-bold">
              <span className="text-color6">{t("sections.mission.title").split(" ")[0]}</span>{" "}
              <span className="text-black">{t("sections.mission.title").split(" ")[1]}</span>
              
            </h2>
            <p className="text-sm  mb-4 text-gray-800 leading-6">
            {t("sections.mission.content")}
            </p>
          </div>
         
          <HorizontalDivider width="100%" />
        </div>

        <div className="flex flex-col mb-8 gap-6 ">
          <div className="flex flex-col gap-4">
          <h2 className="text-base md:text-lg font-bold">
              <span className="text-color6">{t("sections.vision.title").split(" ")[0]}</span>{" "}
              <span className="text-black">{t("sections.vision.title").split(" ")[1]}</span>
            </h2>
            <p className="text-sm  mb-4 text-gray-800 leading-6">
            {t("sections.vision.content")}
            </p>
          </div>
       
          <HorizontalDivider width="100%" />
        </div>

        <div className="flex flex-col mb-8 gap-6 ">
          <div className="flex flex-col gap-4">
          <h2 className="text-base md:text-lg font-bold">
              <span className="text-color6">{t("sections.practices.title").split(" ")[0]}</span>{" "}
              <span className="text-black">{t("sections.practices.title").split(" ")[1]}</span>
            </h2>
            <p className="text-sm  mb-4 text-gray-800 leading-6">
            {t("sections.practices.content")}
            </p>
          </div>
    
          <HorizontalDivider width="100%" />
        </div>


        <div className="flex flex-col mb-8 gap-6 ">
          <div className="flex flex-col  gap-4">
          <h2 className="text-base md:text-lg font-bold">
              <span className="text-color6">{t("sections.team.title").split(" ")[0]}</span>{" "}
              <span className="text-black">{t("sections.team.title").split(" ")[1]}</span>
            </h2>
            <p className="text-sm  mb-4 text-gray-800 leading-6">
            {t("sections.team.content")}
            </p>
          </div>
         
          <HorizontalDivider width="100%" />
        </div>



      </div>

  
    </div>
  );
};

export default AboutPage;
