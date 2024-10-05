"use client"
import InsightCard from '@/components/home/InsightCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare,faTrash } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocale } from 'next-intl';
import { Context } from '@/context/Context';
import { useRouter } from 'next/navigation';



export default function SinglePost({postId}) {
   
 const [post, setPost] = useState({})
 const locale = useLocale();
 const {user} = useContext(Context)
 const router = useRouter();

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data); 
     
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };
    getPost();
  }, [postId]);
   
  const handleDelete = async()=>{
try {
  await axios.delete(`/api/posts/${postId}`, {
    data: { username: user.username }
  });
    router.push("/");
} catch (error) {
  console.log(error);
  
}
  }

  return (
    <div>
       
      <div className="relative w-full h-48 bg-slate-50 flex items-center justify-center">
        <div className="text-color1 p-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-color6">
          {post.title?.toUpperCase()}
          </h1>
          <div className="flex items-center justify-center">
            <span className="text-xs font-light mt-6">
              <span className="text-color1">By </span>
              <span className="text-color6">{post.username}</span>
            </span>
          </div>
          <span className="text-xs font-light text-color7 mt-2">
          {new Date(post.createdAt).toLocaleDateString(locale === 'tr' ? 'tr-TR' : 'en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}
          </span>
          { post.username === user?.username && (

            <div className='flex items-center justify-center mt-4 gap-4 '>
          <FontAwesomeIcon icon={faPenToSquare} className='w-4 h-4 text-green-600 cursor-pointer'/>
          <FontAwesomeIcon icon={faTrash} className='w-4 h-4 cursor-pointer text-red-700' onClick={handleDelete}/>

          </div>)
          }
        </div>
      </div>

      <div className="mx-auto mt-6 flex flex-col md:flex-row gap-8 px-6 pb-8 md:px-8 lg:px-16">
      
        <div className="md:w-4/5 flex flex-col gap-6">
          
          <div className="flex justify-start w-full">
            {post.photo && <Image
              src={post.photo}
              alt="Post görseli"
              width={2000}
              height={3000}
              className="w-full h-72 object-cover"
            />}
          </div>

          {/* Makale */}
          <div className="md:border-l border-color6 md:pl-8 flex flex-col">
            <p className="text-base text-gray-700">
              {post.desc}
            </p>
            
            
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:w-1/5 flex flex-col gap-8 overflow-y-auto scroll-smooth insight-scroll px-1 h-[700px]">
          <div className="flex justify-between items-center">
            <h3 className="text-sm md:text-md font-semibold">
              Latest Insights
            </h3>
            <span className="text-xs font-light text-gray-900">View all</span>
          </div>
          <div className="flex flex-wrap justify-between">
            <InsightCard />
            <InsightCard />
            <InsightCard />
            <InsightCard />
          </div>
        </div>
      </div>
    </div>
  );
}
