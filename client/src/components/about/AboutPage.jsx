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
          <HeadingWithDivider title="Sancar Law Firm" />
        </div>

        <div className="flex flex-col md:flex-row mb-8 gap-6 md:items-center">
          <div className="flex flex-col md:w-1/2 lg:w-full gap-4">
            <h2 className="text-base md:text-lg font-bold">
              <span className="text-color6">Our</span>{" "}
              <span className="text-color1">Mission</span>
            </h2>
            <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
            Misyonumuz, müvekkillerimize en yüksek kalitede hukuki danışmanlık ve temsil sunarak, onların haklarını korumak ve adalet arayışlarında yanlarında olmaktır. Hukukun üstünlüğüne olan inancımızla, her bir müvekkilimizin adaletin sağlanması için gerekli tüm desteği almasını sağlıyoruz. Her dava, bizim için yalnızca bir yargılama süreci değil, müvekkilimizin hayatına dokunan bir değişim fırsatıdır.
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
               sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
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
            Vizyonumuz, hukukun üstünlüğünü savunmak ve müvekkillerimizin güvenini kazanarak sektördeki en saygın hukuk bürolarından biri olmaktır. Sancar Hukuk Bürosu olarak, etik değerlerden taviz vermeden, her türlü hukuki ihtimale karşı çözüm odaklı yaklaşımımızla sektördeki yerimizi güçlendirmeyi hedefliyoruz. Yenilikçi ve sürdürülebilir çözümler üreterek müvekkillerimizin beklentilerini aşmayı amaçlıyoruz.
            </p>
          </div>
          <div className="relative w-full h-48 md:w-1/2 hidden md:block lg:hidden">
            <Image
              src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="blog-image"
              fill
              quality={80}
              className="rounded-lg object-cover"
               sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
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
            Sancar Hukuk Bürosu, ceza hukuku, aile hukuku, ticaret hukuku ve gayrimenkul hukuku gibi birçok alanda uzmanlaşmıştır. Alanında deneyimli avukatlarımız, müvekkillerinin hukuki sorunlarını en etkili şekilde çözebilmek için kapsamlı bir yaklaşım benimsemektedir. Her bir alan için uzmanlaşmış ekip üyelerimiz, hukuki süreçlerin her aşamasında en doğru yönlendirmeleri ve çözümleri sunmaktadı
            </p>
          </div>
          <div className="relative w-full h-48 md:w-1/2 hidden md:block lg:hidden">
            <Image
              src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="blog-image"
              fill
              quality={80}
              className="rounded-lg object-cover"
               sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
            />
          </div>
          <HorizontalDivider width="100%" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-8 p-2 lg:w-1/2">
      <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
      Sancar Hukuk Bürosu, uzun yıllardır hukuki alanda hizmet veren, müvekkillerine en iyi çözüm yollarını sunmayı hedefleyen bir hukuk firmasıdır. Her birey ve kurum için özel bir yaklaşım benimseyen büromuz, müvekkillerinin ihtiyaçlarına en uygun hukuki hizmeti sağlar.
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
                 sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
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
          Sancar Hukuk Bürosu, alanında deneyimli avukatlar ve hukuk uzmanlarından oluşan bir ekip ile hizmet vermektedir. Her bir ekip üyemiz, kendi uzmanlık alanında derinlemesine bilgiye sahip olup, müvekkillerine en iyi hizmeti verebilmek için sürekli olarak kendilerini geliştirmektedir. Hukukun farklı alanlarında sahip olduğumuz bilgi birikimi, müvekkillerimizin karşılaştığı her türlü hukuki sorun için etkin çözümler üretmemizi sağlar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
