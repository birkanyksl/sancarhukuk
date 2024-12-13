import Image from "next/image";
import React from "react";
import HorizontalDivider from "../HorizontalDivider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faGavel,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const Team = () => {
  const t = useTranslations("teamPage")
  return (
    <div className="flex flex-col mb-20">
      <div className="pb-8 md:px-8 lg:px-16 xl:px-32 2xl:px-48 ">
        <div className="flex flex-col lg:flex-row  mx-auto px-8 justify-center">
          <div className="lg:w-1/2 w-full pt-20 justify-center ">
            <div className="flex flex-col gap-4 mb-10 justify-center">
              <h2 className="text-sm font-normal text-color1">
              <span className="text-color6">{t("founderPartner").split(" ")[0]}{" "}</span>
              <span className="text-black">{t("founderPartner").split(" ")[1]}</span>
              </h2>
              <h3 className="text-4xl font-medium text-color1">Erkan YÜKSEL</h3>
              <HorizontalDivider />
            </div>
            <div className="flex flex-col gap-6 mb-8">
              <p className="text-sm md:text-base mb-4 text-gray-800 leading-6 lg:max-w-[500px] 2xl:max-w-[650px]">
              {t("textErkan")}
              </p>
              <p className="text-sm md:text-base mb-4 text-gray-800 leading-6 lg:max-w-[500px] 2xl:max-w-[650px]">
              {t("textErkan2")}
              </p>
              <p className="text-sm md:text-base mb-4 text-gray-800 leading-6 lg:max-w-[500px] 2xl:max-w-[650px]">
              {t("textErkan3")}
              </p>
            
            </div>

            <Link href="/team/erkan_yksl" passHref>
            <button className="cursor-pointer flex flex-row items-center border-b-[0.5px] border-black">
                <span className=" pb-1 tracking-widest text-sm  pr-2  ">
                {t("bio")}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                    className="fill-current text-black"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>

          <div className="w-full overflow-hidden lg:w-1/2 flex justify-center max-w-[400px]  mx-auto ">
            <Image
              src="/erkanprofil.png"
              alt="Maria Johnson"
              width={400}
              height={600}
              className="object-contain"
              priority
           
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-col shadow-lg py-4 md:my-10 px-6">
        <div className="flex flex-col justify-center items-center text-color1 px-4 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold md:mb-2">
          <span className="text-black">{t("header2Text").split(" ")[0]}{" "}</span>
          <span className="text-color6">{t("header2Text").split(" ")[1]}{" "}</span>
          <span className="text-black">{t("header2Text").split(" ")[2]}</span>
          </h2>
          <p className="mt-2 text-sm md:text-lg max-w-md md:mb-6">
          {t("header2SubText")}
          </p>

          <div className="mx-6 my-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="flex items-center justify-center mb-2">
                <FontAwesomeIcon
                  icon={faScaleBalanced}
                  className="w-8 h-8 text-color6"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold">
              {t("businessLaw")}
              </h3>
              <p className="mt-1 text-xs md:text-sm">
              {t("businessLawText")}
              </p>
            </div>

            <div className="mb-6 md:mb-12">
              <div className="flex items-center justify-center mb-2">
                <FontAwesomeIcon
                  icon={faGavel}
                  className="w-8 h-8 text-color6"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold">
              {t("disputeSupport")}
              </h3>
              <p className="mt-1 text-xs md:text-sm">
              {t("disputeSupportText")}
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-2">
                <FontAwesomeIcon
                  icon={faCopyright}
                  className="w-8 h-8 text-color6"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold">
              {t("copyright")}
              </h3>
              <p className="mt-1 text-xs md:text-sm">
              {t("copyrightText")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8 md:px-8 lg:px-16 xl:px-32 2xl:px-36 2xl:mt-20 ">
        <div className="flex flex-col lg:flex-row mx-auto px-8 justify-center ">
          <div className="lg:w-1/2 w-full pt-20  justify-center mb-6 ">
            <div className="flex flex-col gap-4 mb-10 justify-center">
              <h2 className="text-sm font-normal text-color1">
              <span className="text-color6">{t("ManagerPartner").split(" ")[0]}{" "}</span>
              <span className="text-black">{t("ManagerPartner").split(" ")[1]}</span>
              </h2>
              <h3 className="text-4xl font-medium text-color1">
                Mehmet Ali KÜMÜŞ
              </h3>
              <HorizontalDivider />
            </div>
            <div className="flex flex-col gap-6 mb-8">
              <p className="text-sm md:text-base mb-4 text-gray-800 leading-6 lg:max-w-[500px] 2xl:max-w-[650px]">
              {t("textMehmetAli")}
              </p>
              <p className="text-sm md:text-base mb-4 text-gray-800 leading-6 lg:max-w-[500px] 2xl:max-w-[650px]">
              {t("textMehmetAli2")}
              </p>
              <p className="text-sm md:text-base mb-4 text-gray-800 leading-6 lg:max-w-[500px] 2xl:max-w-[650px]">
              {t("textMehmetAli3")}
              </p>
            </div>

            <Link href="/team/mehmet_ali_kumus" passHref>
              <button className="cursor-pointer flex flex-row items-center border-b-[0.5px] border-black">
                <span className=" pb-1 tracking-widest text-sm  pr-2  ">
                {t("bio")}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                    className="fill-current text-black"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>

          <div className="w-full overflow-hidden lg:w-1/2 flex justify-center max-w-[400px] mx-auto ">
            <Image
              src="/maninsuit.png"
              alt="Maria Johnson"
              width={655}
              height={517}
               className="object-contain"
              priority
              
            />
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Team;
