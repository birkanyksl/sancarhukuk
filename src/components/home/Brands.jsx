import Image from "next/image";
import React from "react";

function Brands() {
  const row1 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
  ];

  const row2 = [
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
    "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
  ];

  return (
    <div className="w-full h-[30vh] flex items-center justify-center mt-12 md:mt-6 md:mb-6">
      <div className="w-full flex flex-col items-center justify-center">
        {/* <div className="text-lg font-medium mb-2 text-color1">Başarılı İşbirlikleri</div> */}
        <div className="text-base font-light mb-10 text-gray-400">
        Başarıya giden yolda birlikte yürüdüğümüz iş ortaklarımız.
        </div>

        <div className="flex w-[1200px] overflow-hidden mask-image-gradient mb-4">
          <div className="flex whitespace-nowrap animate-scrollX">
            {row1.map((el, index) => (
              <div key={index} className="flex items-center justify-center w-32 md:w-36 ">
                <Image
                  src={el}
                  width={200} 
                  height={31} 
                  className="w-16 h-9 md:w-18 md:h-10 object-contain rounded-md aspect-[16/9] "
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="flex whitespace-nowrap animate-scrollX">
            {row1.map((el, index) => (
              <div key={index} className=" flex items-center justify-center w-32 md:w-36 ">
                <Image
                  src={el}
                  width={200} 
                  height={32} 
                  className="w-16 h-9 md:w-18 md:h-10 object-contain rounded-md aspect-[16/9] "
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-[1200px] overflow-hidden mask-image-gradient">
          <div className="flex whitespace-nowrap animate-scrollXReverse">
            {row2.map((el, index) => (
              <div key={index} className="flex items-center justify-center w-32 md:w-36">
                <Image
                  src={el}
                  width={200} 
                  height={32} 
                  className="w-16 h-9 md:w-18 md:h-10 object-contain rounded-md aspect-[16/9] "
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="flex whitespace-nowrap animate-scrollXReverse">
            {row2.map((el, index) => (
              <div key={index} className="flex items-center justify-center w-32 md:w-36 ">
                <Image
                  src={el}
                  width={200} 
                  height={31}
                  className="w-16 h-9 md:w-18 md:h-10 object-contain rounded-md aspect-[16/9] "
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
