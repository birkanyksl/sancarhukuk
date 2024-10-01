import React from 'react';
import { posts } from '@/data/posts';
import SinglePost from '@/components/insight/singlePost/SinglePost';

const SinglePage = ({ params }) => {
  const { singlePost } = params; 
  console.log(singlePost); 
  const post = posts.find((p) => p.id === parseInt(singlePost));

  return (
    <div>
      <h1>Post ID: {singlePost}</h1> 
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Author: {post.author}</p>
      <p>Date: {post.date}</p>
      
      <SinglePost/>
    </div>
  );
};

export default SinglePage;
