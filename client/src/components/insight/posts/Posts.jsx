"use client"
import Link from 'next/link';
import Post from '../post/Post';
import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
    const locale = useLocale()

    const [post, setPost] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
          try {
              const res = await axios.get("/api/posts");
              setPost(res.data);
              
              
          } catch (error) {
              console.error('Error fetching posts:', error);
          }
      };
      
      fetchPosts();
  }, []); 

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center px-6 md:px-8 lg:px-16 gap-8'>
      {post.map(p => (
        <Link  key={p._id} href={`/${locale}/insight/${p._id}`}>
          <Post post={p} />
        </Link>
      ))}
    </div>

    
  );
};

export default Posts;
