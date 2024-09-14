import Image from "next/image";
import React from "react";
import InsightCard from "./InsightCard";
import HorizontalDivider from "../HorizontalDivider";
import HeadingWithDivider from "../HeadingWithDivider";

const ClientInsights = () => {
  


  return (
    <>
    <HeadingWithDivider title="Insights"/>
    <div className="flex flex-col md:flex-row gap-16 w-full h-screen md:gap-8 pt-4">
      {/* LEFT */}
      <div className="w-full md:w-2/3 flex flex-col gap-4 md:gap-8 ">
        <h2 className="text-lg font-medium md:text-2xl md:font-medium">
          Most Read Publications of The Week
        </h2>
        <p className="text-sm font-light md:font-normal text-gray-600 overflow-hidden">
          As a dedicated lawyer, my mission is to provide clients with effective
          legal solutions, ensuring their rights are protected and upheld.As a dedicated lawyer, my mission is to provide clients with effective
          legal solutions, ensuring their rights are protected and upheld.

          <br/>
          
          As a dedicated lawyer, my mission is to provide clients with effective
          legal solutions, ensuring their rights are protected and upheld.
        </p>

        <div className="flex flex-col gap-3 ">
          <div className=" relative w-full h-48 md:h-[441px] ">
            <Image
              src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="mostreadblog"
              fill
              className="object-cover"
            ></Image>
          </div>
          <span className="text-xs font-light text-gray-400 mt-2">
            18-04-1994
          </span>
          <h2 className="w-[80%] text-sm md:text-lg font-bold color1 overflow-hidden">
            Tokyo declares La Nina weather event has begun
          </h2>
          <div className="flex items-center justify-between ">
            <span className="text-xs font-normal">
              <span className="text-color1">By </span>
              <span className="text-color6">Birkan </span>
              <span className="text-color1">Yüksel</span>
            </span>
            <span className="text-xs font-extralight text-gray-600">
              23 minutes ago
            </span>
          </div>
          
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col w-full md:w-1/3 gap-8 overflow-y-auto scroll-hide scroll-smooth overflow-hidden">
        <div className="flex justify-between items-center">
          <h3 className="text-sm md:text-md font-semibold">Latest Insights</h3>
          <span className="text-xs font-light text-gray-900 ">View all</span>
        </div>
        <div className="flex flex-wrap justify-between">
          <InsightCard />
          <InsightCard />
          <InsightCard />
          <InsightCard />
        </div>
      </div>
    </div>
    </>
  );
};

export default ClientInsights;
