import Image from "next/image";
import React from "react";
import HeadingWithDivider from "../HeadingWithDivider";
import HorizontalDivider from "../HorizontalDivider";

const AboutPage = () => {
  return (

    <div className="flex flex-col lg:flex-row w-full px-6 md:px-8 lg:px-16 xl:px-32  pb-8 mt-8 lg:gap-8">
      {/* LEFT */}
      <div className="flex flex-col gap-6 p-2 lg:w-1/2">
        <div className="text-center">
          <HeadingWithDivider title="Sanchaar Law Firm" />
        </div>

        <div className="flex flex-col md:flex-row mb-8 gap-6 md:items-center">
          <div className="flex flex-col md:w-1/2 lg:w-full gap-4">
            <h2 className="text-base md:text-lg font-bold">
              <span className="text-color6">Our</span>{" "}
              <span className="text-color1">Mission</span>
            </h2>
            <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
              Misyonumuz, müvekkillerimize en yüksek kalitede hukuki danışmanlık ve temsil sunarak, onların haklarını korumak ve adalet arayışlarında yanlarında olmaktır.
            </p>
          </div>
          <div className="relative w-full h-48 md:w-1/2 hidden md:block lg:hidden">
            <Image
              src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="blog-image"
              fill
              quality={80}
              priority
              className="rounded-lg object-cover"
            />
          </div>
          <HorizontalDivider width="100%" />
        </div>

        <div className="flex flex-col md:flex-row mb-8 gap-6 md:items-center">
          <div className="flex flex-col md:w-1/2 lg:w-full gap-4">
          <h2 className="text-base md:text-lg font-bold">
              <span className="text-color6">Our</span>{" "}
              <span className="text-color1">Vision</span>
            </h2>
            <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
              Vizyonumuz, hukukun üstünlüğünü savunmak ve müvekkillerimizin güvenini kazanarak sektördeki en saygın hukuk bürolarından biri olmaktır.
            </p>
          </div>
          <div className="relative w-full h-48 md:w-1/2 hidden md:block lg:hidden">
            <Image
              src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="blog-image"
              fill
              quality={80}
              className="rounded-lg object-cover"
            />
          </div>
          <HorizontalDivider width="100%" />
        </div>

        <div className="flex flex-col md:flex-row mb-8 gap-6 md:items-center">
          <div className="flex flex-col md:w-1/2 lg:w-full gap-4">
          <h2 className="text-base md:text-lg font-bold">
              <span className="text-color6">Our</span>{" "}
              <span className="text-color1">Practices</span>
            </h2>
            <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
              Sanchaar Hukuk Bürosu, ceza hukuku, aile hukuku, ticaret hukuku ve gayrimenkul hukuku gibi birçok alanda uzmanlaşmıştır.
            </p>
          </div>
          <div className="relative w-full h-48 md:w-1/2 hidden md:block lg:hidden">
            <Image
              src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="blog-image"
              fill
              quality={80}
              className="rounded-lg object-cover"
            />
          </div>
          <HorizontalDivider width="100%" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-8 p-2 lg:w-1/2">
      <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
          Hukuk büromuz, müvekkillerimizin hukuki sorunlarını en etkili şekilde çözebilmek için kapsamlı bir yaklaşım benimsemektedir.
        </p>

        <div className="hidden lg:flex flex-row gap-4 w-full h-[24rem] mx-auto">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="relative w-1/3 h-full">
              <Image
                src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="blog-image"
                fill
                quality={80}
                className="rounded-lg object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
        <h2 className="text-base md:text-lg font-bold">
            <span className="text-color6">Expert</span>{" "}
            <span className="text-color1">Team</span>
          </h2>
          <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
            Sanchaar Hukuk Bürosu, alanında deneyimli avukatlar ve hukuk uzmanlarından oluşan bir ekip ile hizmet vermektedir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
