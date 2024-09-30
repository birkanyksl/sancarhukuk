import Image from 'next/image'
import React from 'react'

const AboutPageTeam = () => {
  return (
    <div className='px-6 pb-8 md:px-8 lg:px-16 flex flex-row gap-2 my-8 items-center md:my-20'>
      
      <div className='flex flex-col w-1/2 lg:w-1/3 h-72 p-4  [border-radius:0px_200px_200px_0px] bg-amber-300 text-center justify-center items-center cursor-pointer shadow-lg '>
        <h2 className='text-2xl lg:text-3xl xl:text-4xl font-semibold mr-4 text-color7'>Meet Our Team</h2>
       
      </div>

      
      <div className='flex w-1/2 lg:w-1/3 md:mx-auto h-96 overflow-hidden gap-4'>
      
        <div className='relative w-full md:w-1/2'>
          <Image
            alt='team-img-1'
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400"
            fill
            className='object-cover [border-radius:200px_0px_0px_200px]'
          />
        </div>

       
        <div className='hidden md:block relative w-1/2'>
          <Image
            alt='team-img-2'
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400"
            fill
            className='object-cover [border-radius:0px_200px_200px_0px]'
          />
        </div>
      </div>
      <div className='hidden w-1/3 h-72 pl-12 border lg:flex [border-radius:200px_0px_0px_200px] bg-amber-300 justify-center items-center cursor-pointer shadow-lg'>
      <p className='text-lg font-semibold  text-color7'>
      Our diverse team is committed to delivering outstanding results and innovative solutions.</p>
       
      </div>
      
    </div>
  )
}

export default AboutPageTeam
