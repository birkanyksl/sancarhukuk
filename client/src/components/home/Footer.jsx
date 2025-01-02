import { Link } from "@/navigation";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <>
      <div className="w-full flex md:flex-row flex-col justify-between items-start lg:px-10 xl:px-16 2xl:px-32 mb-4">
        <div className="p-2">
          <ul>
            <div className="flex gap-2 flex-col">
              {/* <FaInstagram className="text-sm cursor-pointer hover:text-yellow-600" /> */}
              <div className="relative w-96 h-48 -ml-20">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="Sancar Hukuk Logo"
                    fill
                    className=" object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>
              </div>
              <div className="flex gap-6">
                <FaTwitter className="text-sm cursor-pointer hover:text-blue-600" />
                <FaLinkedin className="text-sm cursor-pointer hover:text-blue-600" />
              </div>
              {/* <FaYoutube className="text-sm cursor-pointer hover:text-red-600" /> */}
            </div>
          </ul>
        </div>

        <div className="p-2">
          <p className="text-gray-800 font-bold text-xs md:text-sm pb-2">
            {t("browse")}
          </p>
          <ul className="grid grid-cols-3 md:grid-cols-2 gap-2 list-none">
            <Link href={"/about"}>
              <li className="text-gray-800 text-xs md:text-sm pb-2 font-light cursor-pointer hover:text-color6">
                {t("aboutUs")}
              </li>
            </Link>
            <Link href={"/team"}>
              <li className="text-gray-800 text-xs md:text-sm pb-2 font-light cursor-pointer hover:text-color6">
                {t("team")}
              </li>
            </Link>
            <Link href={"/practice"}>
              <li className="text-gray-800 text-xs md:text-sm pb-2 font-light cursor-pointer hover:text-color6">
                {t("practices")}
              </li>
            </Link>
            <Link href={"/insight"}>
              <li className="text-gray-800 text-xs md:text-sm pb-2 font-light cursor-pointer hover:text-color6">
                {t("publications")}
              </li>
            </Link>

            <Link href={"/communication"}>
              <li className="text-gray-800 text-xs md:text-sm pb-2 font-light cursor-pointer hover:text-color6">
                {t("contact")}
              </li>
            </Link>
            {/* <li className="text-gray-400 text-xs font-light hover:text-color6 cursor-pointer">
              E-Payment
            </li> */}
          </ul>
        </div>

        <div className="p-2">
          <p className="text-gray-800 font-bold text-xs md:text-sm pb-2">
          {t("contact")}
          </p>
          <ul className="grid grid-cols-1 gap-2">
           
            <li className="text-gray-800 text-xs md:text-sm pb-2 font-light ">
              {t("email")}
            </li>
            <li className="text-gray-800 text-xs md:text-sm pb-2 font-light ">
              {t("phone")}
            </li>
           
            <Link
              href={"/communication"}
              className="text-gray-800 text-xs md:text-sm pb-2 font-light cursor-pointer hover:text-color6"
            >
              {t("more")}
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-center pb-4 px-4 gap-1">
        <h1 className="text-xs text-gray-400 font-extralight">
          {t("rightsReserved")}
          <span className="hover:text-color6 font-extralight cursor-pointer">
            Birkan{" "}
          </span>
        </h1>
        <ul className="text-xs text-gray-400 font-light flex gap-6">
          <Link href={"/privacy-policy"}>
            <li className="cursor-pointer">{t("privacyPolicy")}</li>
          </Link>
          <Link href={"/legal-notice"}>
            <li className="cursor-pointer">{t("legalNotice")}</li>
          </Link>
          <Link href={"/legal-notice"}>
            <li className="cursor-pointer">{t("KVKK")}</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Footer;
