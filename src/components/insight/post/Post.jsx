import HorizontalDivider from '@/components/HorizontalDivider';
import Image from 'next/image';
import React from 'react';

const Post = ({ post }) => {
  return (
    <div className='flex flex-col gap-4 w-full h-[600px] mb-8 pb-2 transition-all duration-1000 cursor-pointer px-6 py-6'>
      <div className='relative w-full h-72'>
        <Image 
          src={post.imageUrl} 
          alt='blog-image' 
          fill 
          className='object-cover' 
        />
      </div>
      <span className='text-xs font-light text-gray-400 mt-2'>{post.date}</span>
      <h2 className='w-[80%] text-sm font-semibold color1 overflow-hidden'>
        {post.title}
      </h2>
      <p className='text-sm text-gray-600 my-2 postParagraf w-[80%]'>
        {post.content}
      </p>
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light'>
          <span className='text-color1'>By </span>
          <span className='text-color6'>{post.author}</span>
        </span>
        <span className='text-xs font-extralight text-gray-600'>{post.timeAgo}</span>
      </div>
     
      <HorizontalDivider width='100%' />
    </div>
  );
};

export default Post;
