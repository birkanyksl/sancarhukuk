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
    <div className="flex flex-col mb-20">
      <div className="pb-8 md:px-8 lg:px-16 xl:px-32 2xl:px-48 ">
        <div className="flex flex-col lg:flex-row  mx-auto px-8 justify-center">
          <div className="lg:w-1/2 w-full pt-20 justify-center ">
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

            <Link href="/team/erkan_yksl" passHref>
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

          <div className="w-full overflow-hidden lg:w-1/2 flex justify-center max-w-[400px]  mx-auto">
            <Image
              src="/erkanprofil.png"
              alt="Maria Johnson"
              width={400}
              height={600}
              className="object-contain w-full h-auto"
              priority
           
            />
          </div>
        </div>
      </div>

      <div className=" flex flex-col shadow-lg py-4 md:my-10 px-6">
        <div className="flex flex-col justify-center items-center text-color1 px-4 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold md:mb-2">
            Defining <span className="text-color6">success</span> together
          </h2>
          <p className="mt-2 text-sm md:text-lg max-w-md md:mb-6">
            In order to ensure the highest quality of service in the field of
            corruption practices, we have assembled a team of experienced
            professionals with a mix of international background.
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
                Business Law
              </h3>
              <p className="mt-1 text-xs md:text-sm">
                Having top calibre legal support has become a necessity.
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

      <div className="pb-8 md:px-8 lg:px-16 xl:px-32 2xl:px-36 2xl:mt-20 ">
        <div className="flex flex-col lg:flex-row mx-auto px-8 justify-center ">
          <div className="lg:w-1/2 w-full pt-20  justify-center mb-6 ">
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

          <div className="overflow-hidden lg:w-1/2 flex justify-center mx-auto">
            <Image
              src="/maninsuit.png"
              alt="Maria Johnson"
              width={655}
              height={517}
               className="object-contain w-full h-auto"
              priority
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
