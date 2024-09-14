import Image from 'next/image'
import React from 'react'
import HorizontalDivider from '../HorizontalDivider'

const InsightCard = () => {
  return (
    <div className='flex flex-col gap-3 md:gap-4 w-full mb-8 pb-2 hover:bg-slate-50 transition-all duration-1000 cursor-pointer'>
        <div className='relative w-full h-48'>
        <Image src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600" alt='blog-image' fill className='object-cover'/>

        </div>
        <span className='text-xs font-light text-gray-400 mt-2'>18-04-1994</span>
        <h2 className='w-[80%] text-sm  font-semibold color1 overflow-hidden'>Tokyo declares La Nina weather event has begun</h2>
        <div className='flex items-center justify-between '>
            <span className='text-xs font-light'>
                <span className='text-color1'>By </span><span className='text-color6'>Birkan </span><span className='text-color1'>Yüksel</span>
                </span>
            <span className='text-xs font-extralight text-gray-600'>23 minutes ago</span>
        </div>
        <HorizontalDivider width='100%'/>
    </div>
  )
}

export default InsightCard