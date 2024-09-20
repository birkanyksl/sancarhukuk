import Image from "next/image";
import React from "react";
import HeadingWithDivider from "../HeadingWithDivider";
import HorizontalDivider from "../HorizontalDivider";

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full px-6 pb-8 md:px-8 lg:px-16 mt-8 lg:gap-6">
      {/* LEFT */}
      <div className="flex flex-col gap-2 lg:gap-10 p-2 lg:w-1/2">
        {/* <h1 className='text-color1 font-medium text-2xl'>Welcome to Sanchaar Law Firm - Where Expertise Meets Advocacy</h1> */}
        <div className="text-center ">
          <HeadingWithDivider title="Sanchaar Law Firm" />
        </div>

        <div className="flex flex-col md:flex-row mb-8 gap-5 md:items-center md:gap-6">
          <div className="flex flex-col md:w-1/2 lg:w-full gap-4">
            <h2 className="text-xl font-medium">
              <span className="text-color6">Our</span>{" "}
              <span className="text-color1">Mission</span>
            </h2>
            <p className="text-[13px]  font-normal text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus perspiciatis illo odio asperiores cumque, omnis velit
              dolorum est aut blanditiis.Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellendus perspiciatis illo odio asperiores
              cumque, omnis velit dolorum est aut blanditiis.Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Repellendus perspiciatis
              illo odio asperiores cumque, omnis velit dolorum est aut
              blanditiis.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit.{" "}
            </p>
          </div>

          <div className="relative w-full h-48  md:w-1/2 lg:hidden">
            <Image
              src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="blog-image"
              fill
              className="object-cover "
            />
          </div>
          <HorizontalDivider width="100%" />
        </div>

        <div className="flex flex-col md:flex-row mb-8 gap-4 md:items-center md:gap-6">
          <div className="flex flex-col md:w-1/2 lg:w-full gap-4">
            <h2 className="text-xl font-medium">
              <span className="text-color6">Our</span>{" "}
              <span className="text-color1">Mission</span>
            </h2>
            <p className="text-[13px]  font-normal text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus perspiciatis illo odio asperiores cumque, omnis velit
              dolorum est aut blanditiis.Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellendus perspiciatis illo odio asperiores
              cumque, omnis velit dolorum est aut blanditiis.Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Repellendus perspiciatis
              illo odio asperiores cumque, omnis velit dolorum est aut
              blanditiis.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit.{" "}
            </p>
          </div>

          <div className="relative w-full h-48  md:w-1/2 lg:hidden ">
            <Image
              src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="blog-image"
              fill
              className="object-cover "
            />
          </div>
          <HorizontalDivider width="100%" />
        </div>
        <div className="flex flex-col md:flex-row mb-8 gap-4 md:items-center md:gap-6">
          <div className="flex flex-col md:w-1/2 lg:w-full gap-4">
            <h2 className="text-xl font-medium">
              <span className="text-color6">Our</span>{" "}
              <span className="text-color1">Mission</span>
            </h2>
            <p className="text-[13px]  font-normal text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus perspiciatis illo odio asperiores cumque, omnis velit
              dolorum est aut blanditiis.Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellendus perspiciatis illo odio asperiores
              cumque, omnis velit dolorum est aut blanditiis.Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Repellendus perspiciatis
              illo odio asperiores cumque, omnis velit dolorum est aut
              blanditiis.Lorem ipsum dolor sit amet consectetur, adipisicing
              elit.{" "}
            </p>
          </div>

          <div className="relative w-full h-48  md:w-1/2 lg:hidden ">
            <Image
              src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="blog-image"
              fill
              className="object-cover "
            />
          </div>
          <HorizontalDivider width="100%" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-4 lg:gap-12 p-2 lg:w-1/2 ">
        <p className="text-[13px] text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
          perspiciatis illo odio asperiores cumque, omnis velit dolorum est aut
          blanditiis.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Repellendus perspiciatis illo odio asperiores cumque, omnis velit
          dolorum est aut blanditiis.Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Repellendus perspiciatis illo odio asperiores
          cumque, omnis velit dolorum est aut blanditiis.Lorem ipsum dolor sit
          amet consectetur, adipisicing elit.{" "}
        </p>

        <div className="hidden lg:flex flex-row gap-4 w-full h-[24rem]  mx-auto">
          <div className="relative w-1/3 h-full">
            <Image
              src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="blog-image"
              fill
              className="object-cover   "
            />
          </div>
          <div className="relative w-1/3 h-full">
            <Image
              src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="blog-image"
              fill
              className="object-cover "
            />
          </div>
          <div className="relative w-1/3 h-full">
            <Image
              src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="blog-image"
              fill
              className="object-cover "
            />
          </div>
        </div>

        <div className="flex flex-col  gap-4">
          <h2 className="text-xl font-medium">
            <span className="text-color6">Our</span>{" "}
            <span className="text-color1">Mission</span>
          </h2>
          <p className="text-[13px]  font-normal text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus perspiciatis illo odio asperiores cumque, omnis velit
            dolorum est aut blanditiis.Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Repellendus perspiciatis illo odio asperiores
            cumque, omnis velit dolorum est aut blanditiis.Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Repellendus perspiciatis illo
            odio asperiores cumque, omnis velit dolorum est aut blanditiis.Lorem
            ipsum dolor sit amet consectetur, adipisicing elit.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
