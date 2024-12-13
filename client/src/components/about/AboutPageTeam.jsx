import { useTranslations } from 'next-intl';
import Image from 'next/image'
import React from 'react'

const AboutPageTeam = () => {
  const  t  = useTranslations("aboutPageTeam");
  return (
    <div className='px-6 pb-8 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-row gap-2 my-8 items-center md:my-20'>
      
      <div className='flex flex-col w-1/2 lg:w-1/3 h-48 p-4  [border-radius:0px_200px_200px_0px] bg-amber-200 text-center justify-center items-center cursor-pointer shadow-lg '>
        <h2 className='text-base font-semibold mr-4 text-color1'>{t("team.heading")}</h2>
       
      </div>

      
      <div className='flex w-1/2 lg:w-1/3 md:mx-auto h-80 overflow-hidden gap-4'>
      
        <div className='relative w-full md:w-1/2'>
          <Image
            alt='team-img-1'
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400"
            fill
            className='object-cover [border-radius:200px_0px_0px_200px]'
             sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
        </div>

       
        <div className='hidden md:block relative w-1/2'>
          <Image
            alt='team-img-2'
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fill
            className='object-cover [border-radius:0px_200px_200px_0px]'
             sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
        </div>
      </div>
      <div className='hidden w-1/3 h-72 pl-12 border lg:flex [border-radius:200px_0px_0px_200px] bg-amber-200 justify-center items-center cursor-pointer shadow-lg'>
      <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
      {t("team.description")}</p>
       
      </div>
      
    </div>
  )
}

export default AboutPageTeam
