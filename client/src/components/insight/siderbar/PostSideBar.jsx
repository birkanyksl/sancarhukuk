import Image from 'next/image';
import React from 'react';

const PostSideBar = () => {
  return (
    <div className=" m-2 rounded-lg flex flex-col items-center gap-6">
      {/* ABOUT ME */}
      <div className="flex flex-col mt-8 w-full">
        <span className="text-sm font-semibold text-gray-800 border-t border-b border-gray-300 text-center py-2">
          ABOUT ME
        </span>
        <Image
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="About Me"
          width={250}
          height={250}
          className="rounded-lg mt-4 mx-auto "
        />
        <p className="text-center text-sm mt-4 px-6">
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse. Sunt eu ut nostrud id quis proident.
        </p>
      </div>

      {/* CATEGORIES */}
      <div className="flex flex-col mt-8 w-full ">
        <span className="text-sm font-semibold text-gray-800 border-t border-b border-gray-300  text-center py-2">
          CATEGORIES
        </span>
        <ul className="grid grid-cols-2 gap-3 text-base mt-4 p-6">
          <li className="hover:text-blue-600 cursor-pointer">Life</li>
          <li className="hover:text-blue-600 cursor-pointer">Music</li>
          <li className="hover:text-blue-600 cursor-pointer">Sport</li>
          <li className="hover:text-blue-600 cursor-pointer">Style</li>
          <li className="hover:text-blue-600 cursor-pointer">Tech</li>
          <li className="hover:text-blue-600 cursor-pointer">Cinema</li>
        </ul>
      </div>
    </div>
  );
};

export default PostSideBar;
















{/* <div className='flex flex-col items-center  gap-4'>
        
<div className='flex flex-col items-center  gap-4'>
  <span className='font-medium border-t-2 border-b-2'>ABOUT ME</span>
  <Image
    src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt=""
    width={512} 
    height={512} 
    className="rounded-md object-cover w-48 h-64 mt-4" 
  />
  <p className='text-sm text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, sit?</p>
</div>

<div className='flex flex-col gap-2 mt-6 w-full bg-red-200'>
  <span className='font-medium border-t-2 border-b-2'>CATEGORIES</span>
  

  <ul className='list-none inline-block bg-slate-400 w-1/2'>
    <li>Hukuk</li>
    <li>Ticaret</li>
    <li>Anayasa</li>
    <li>Ceza</li>
    <li>Bilişim</li>
    <li>Boşanma</li>
  </ul>
  </div>

</div> */}