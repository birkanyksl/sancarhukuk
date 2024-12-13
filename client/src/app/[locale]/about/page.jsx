import AboutPage from "@/components/about/AboutPage";
import AboutPageTeam from "@/components/about/AboutPageTeam";
import BreadCrumb from "@/components/BreadCrumb";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("aboutPage")
  return (
    
    <>
    <div className="relative w-full h-48 bg-slate-50">
      

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-color1 p-4  text-center">
          <h1 className="text-4xl lg:text-5xl font-medium"><span className="text-color6">{t("headerText").split(" ")[0]}</span>{" "}
          <span className="text-black">{t("headerText").split(" ")[1]}</span>
          </h1>
          <p className="mt-4 text-sm lg:text-base text-gray-600 ">
           {t("headerSubText")}
          </p>
        </div>
      </div>

      
    </div>
    <BreadCrumb/>
     <AboutPage/>
     <AboutPageTeam/>
</>
  );
};

export default Page;
