import Image from 'next/image'
import React from 'react'
import HorizontalDivider from '../HorizontalDivider'

const InsightCard = () => {
  return (
    <div className='flex flex-col gap-3 w-96 px-2 mb-6 pb-6'>
        <div className='relative w-full h-64'>
        <Image src="https://images.pexels.com/photos/1344537/pexels-photo-1344537.jpeg?auto=compress&cs=tinysrgb&w=600" alt='blog-image' fill className='object-cover'/>

        </div>
        <span className='text-sm font-medium text-gray-400 mt-2'>18-04-1994</span>
        <h2 className='w-80 text-lg font-bold color1'>Tokyo declares La Nina weather event has begun</h2>
        <div className='flex items-center justify-between '>
            <span className='text-sm font-medium'>
                <span className='text-color1'>By </span><span className='text-color6'>Birkan </span><span className='text-color1'>Yüksel</span>
                </span>
            <span className='text-xs font-medium text-gray-600'>23 minutes ago</span>
        </div>
        <HorizontalDivider width='100%'/>
    </div>
  )
}

export default InsightCard