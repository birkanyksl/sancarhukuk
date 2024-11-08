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

const Team = () => {
  return (
    <div className="flex flex-col ">
      <div className="px-6 pb-8 md:px-8 lg:px-16 xl:px-32 2xl:px-48 ">
        <div className="flex flex-col lg:flex-row  mx-auto px-8 justify-center">
          <div className="lg:w-1/2 w-full pt-20 px-8 justify-center ">
            <div className="flex flex-col gap-4 mb-10 justify-center">
              <h2 className="text-sm font-normal text-color1">
                <span className="text-color6">FOUNDER</span> PARTNER
              </h2>
              <h3 className="text-4xl font-medium text-color1">Erkan YÜKSEL</h3>
              <HorizontalDivider />
            </div>
            <div className="flex flex-col gap-6 mb-8">
              <p className="text-sm md:text-base mb-4 text-gray-800 leading-6 max-w-[500px] 2xl:max-w-[650px]">
                As an independent Attorney at Law, practicing in cooperation
                with Law firm, Maria is a senior member of the Regional
                Intellectual Property Practice Group. She advises clients on all
                aspects of intellectual property, including registration and
                protection.
              </p>
              <p className="text-sm md:text-base mb-4 text-gray-800 leading-6 max-w-[500px] 2xl:max-w-[650px]">
                She has worked on numerous corporate transactions and
                competition matters involving specialised advice on competition
                law, namely merger control and anti-trust issues. She is a
                senior member of the Corporate & Commercial Practice Group and
                is an active member of our Healthcare & Pharmaceuticals and
                Food, Agriculture & Cosmetics Industry Groups.
              </p>
            </div>
            <div className="flex flex-row justify-between max-w-[500px]">
              <button className="group w-12 hover:w-48 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700  font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                <svg
                  y="0"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                  height="100"
                  className="w-8 h-8 shrink-0 fill-neutral-50"
                >
                  <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                </svg>
                <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                  Erkan Yüksel
                </span>
              </button>
               
                <Link href="/team/erkan_yksl" passHref>
              <div className="cursor-pointer flex flex-row items-center border-b-[0.5px] border-black">
                <span className=" pb-1 tracking-widest text-sm  pr-2  ">
                  Read Full Bio
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
              </div>
                    </Link>
            </div>
          </div>

          <div className="w-full overflow-hidden lg:w-1/2 flex justify-center max-w-[400px]  mx-auto">
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

      <div className="relative h-[50vh] shadow-lg">
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-color1 px-4 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold md:mb-2">
            Defining <span className="text-color6">success</span> together
          </h2>
          <p className="mt-2 text-sm md:text-lg max-w-md md:mb-6">
            In order to ensure the highest quality of service in the field of
            corruption practices, we have assembled a team of experienced
            professionals with a mix of international background.
          </p>

          <div className="mx-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <div className="flex items-center justify-center mb-2">
                <FontAwesomeIcon
                  icon={faScaleBalanced}
                  className="w-8 h-8 text-color6"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold">
                Business Law
              </h3>
              <p className="mt-1 text-xs md:text-sm">
                Having top calibre legal support has become a necessity.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-2">
                <FontAwesomeIcon
                  icon={faGavel}
                  className="w-8 h-8 text-color6"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold">
                Dispute Support
              </h3>
              <p className="mt-1 text-xs md:text-sm">
                We advise many of the leading companies in legal services.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center mb-2">
                <FontAwesomeIcon
                  icon={faCopyright}
                  className="w-8 h-8 text-color6"
                />
              </div>
              <h3 className="text-base md:text-lg font-semibold">Copyright</h3>
              <p className="mt-1 text-xs md:text-sm">
                Including infringement warnings and civil law proceedings.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-8 md:px-8 lg:px-16 xl:px-32 2xl:px-36 2xl:mt-20 mb-20 ">
        <div className="flex flex-col lg:flex-row mx-auto px-8 justify-center ">
          <div className="lg:w-1/2 w-full pt-20 px-8 justify-center ">
            <div className="flex flex-col gap-4 mb-10 justify-center">
              <h2 className="text-sm font-normal text-color1">
                <span className="text-color6">MANAGER</span> PARTNER
              </h2>
              <h3 className="text-4xl font-medium text-color1">
                Mehmet Ali KÜMÜŞ
              </h3>
              <HorizontalDivider />
            </div>
            <div className="flex flex-col gap-6 mb-8">
            <p className="text-sm md:text-base mb-4 text-gray-800 leading-6 max-w-[500px] 2xl:max-w-[650px]">
                As an independent Attorney at Law, practicing in cooperation
                with Law firm, Maria is a senior member of the Regional
                Intellectual Property Practice Group. She advises clients on all
                aspects of intellectual property, including registration and
                protection.
              </p>
              <p className="text-sm md:text-base mb-4 text-gray-800 leading-6 max-w-[500px] 2xl:max-w-[650px]">
                competition matters involving specialised advice on competition
                law, namely merger control and anti-trust issues. She is a
                senior member of the Corporate & Commercial Practice Group and
                is an active member of our Healthcare & Pharmaceuticals and
                Food, Agriculture & Cosmetics Industry Groups.
              </p>
            </div>
            <div className="flex flex-row justify-between max-w-[500px]">
              <button className="group w-12 hover:w-48 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700  font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45">
                <svg
                  y="0"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                  height="100"
                  className="w-8 h-8 shrink-0 fill-neutral-50"
                >
                  <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
                </svg>
                <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                  Mehmet Ali Kümüş
                </span>
              </button>

              <Link href="/team/mehmet_ali_kumus" passHref>
              <button className="cursor-pointer flex flex-row items-center border-b-[0.5px] border-black">
                <span className=" pb-1 tracking-widest text-sm  pr-2  ">
                  Read Full Bio
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
          </div>

          <div className="overflow-hidden lg:w-1/2 flex justify-center mx-auto">
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
