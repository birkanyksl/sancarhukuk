import Image from 'next/image'
import React from 'react'


const InsightCard = () => {
  return (
    <div className='flex flex-col gap-3 md:gap-4 w-full mb-8 pb-2 transition-all duration-1000 cursor-pointer shadow-md rounded-lg p-2 bg-slate-50'>
      <div className='relative w-full h-48'>
        <Image
          src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt='blog-image'
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className='object-cover rounded-lg'
        />
      </div>
      <span className='text-xs font-light text-gray-400 mt-2 px-4'>18-04-1994</span>
      <h2 className='w-[80%] text-sm font-semibold color1 overflow-hidden px-4'>
        Tokyo declares La Nina weather event has begun
      </h2>
      <div className='flex items-center justify-between px-4'>
        <span className='text-xs font-light'>
          <span className='text-color1'>Sancar </span>
          <span className='text-color6'>Hukuk</span>
        </span>
        <span className='text-xs font-extralight text-gray-600'>23 minutes ago</span>
      </div>
    </div>
  );
};

export default InsightCard;