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
            Misyonumuz, müvekkillerimize en yüksek kalitede hukuki danışmanlık ve temsil sunarak, onların haklarını korumak ve adalet arayışlarında yanlarında olmaktır. Hukuk büromuz, uzman avukatlarımız ve deneyimli ekibimizle, her türlü hukuki sorun için etkili çözümler geliştirmektedir. Müşterilerimizin ihtiyaçlarına özel stratejiler oluşturarak, en karmaşık davalarda bile en iyi sonuçları elde etmeyi hedefliyoruz.
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
              <span className="text-color1">Vision</span>
            </h2>
            <p className="text-[13px]  font-normal text-gray-600">
            Vizyonumuz, hukukun üstünlüğünü savunmak ve müvekkillerimizin güvenini kazanarak sektördeki en saygın hukuk bürolarından biri olmaktır. Her bir davaya gösterdiğimiz özen ve titizlik, bizi farklı kılan en önemli unsurlardandır. Hukuki süreçlerde şeffaflık ve güvenilirlik anlayışımızla, müvekkillerimizin en zor anlarında bile yanlarında durmayı amaçlıyoruz.
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
              <span className="text-color1">Practices</span>
            </h2>
            <p className="text-[13px]  font-normal text-gray-600">
            Sanchaar Hukuk Bürosu, ceza hukuku, aile hukuku, ticaret hukuku ve gayrimenkul hukuku gibi birçok alanda uzmanlaşmıştır. Müşterilerimize sunduğumuz kapsamlı hizmetler arasında; dava takibi, hukuki danışmanlık, sözleşme hazırlığı ve uyuşmazlıkların çözümü bulunmaktadır. Her bir müvekkilimizle birebir ilgilenerek, onların ihtiyaçlarına uygun çözümler sunmaktayız.
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
        Hukuk büromuz, müvekkillerimizin hukuki sorunlarını en etkili şekilde çözebilmek için kapsamlı bir yaklaşım benimsemektedir. Her bir davaya özel stratejiler geliştirerek, hukukun her alanında yüksek başarı oranlarına ulaşmayı hedefliyoruz. Müşterilerimizin ihtiyaçlarını derinlemesine analiz ederek, onlara en uygun hukuki çözümleri sunmayı ilke ediniyoruz.
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
            <span className="text-color6">Expert</span>{" "}
            <span className="text-color1">Team</span>
          </h2>
          <p className="text-[13px]  font-normal text-gray-600">
          Sanchaar Hukuk Bürosu, alanında deneyimli avukatlar ve hukuk uzmanlarından oluşan bir ekip ile hizmet vermektedir. Her avukatımız, kendi branşında derinlemesine uzmanlığa sahip olup, müvekkillerimize en iyi hukuki desteği sunabilmek için sürekli olarak kendilerini yenilemektedir. Uzman kadromuz, hukukun karmaşık yapılarında müvekkillerimize rehberlik ederek, en etkili savunmayı sağlamak için özveriyle çalışmaktadır.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
