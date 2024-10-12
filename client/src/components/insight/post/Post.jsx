import HorizontalDivider from '@/components/HorizontalDivider';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Post = ({ post }) => {
  const locale = useLocale()
  return (
    <div className='flex flex-col gap-4 w-full h-[600px] mb-8 pb-2 transition-all duration-1000 cursor-pointer px-6 py-6'>
      <div className='relative w-full h-72'>
        {post.photo && <Image 
          src={post.photo} 
          alt='blog-image' 
          fill 
          className='object-cover rounded-3xl border-2 border-black shadow-xl' 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />}
      </div>
      <span className='text-xs font-light text-gray-400 mt-2'>  {new Date(post.createdAt).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}</span>
      {post.categories.map((c,index)=>{
        <span key={index} className="text-[11px]  font-light text-color6 md:font-normal lg:font-medium">
        {c.name}
      </span>
      })}
      <h2 className='w-[80%] text-sm font-semibold color1 overflow-hidden'>
        {post.title}
      </h2>
      <p className='text-sm text-gray-600 my-2 postParagraf w-[80%]'>
        {post.desc}
      </p>
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light'>
          <span className='text-color1'>By </span>
          <span className='text-color6'>{post.username}</span>
        </span>
        <span className='text-xs font-extralight text-gray-600'>{post.timeAgo}</span>
      </div>
     
      <HorizontalDivider width='100%' />
    </div>
  );
};

export default Post;
