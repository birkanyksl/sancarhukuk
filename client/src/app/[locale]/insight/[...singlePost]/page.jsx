import React from 'react';
import SinglePost from '@/components/insight/singlePost/SinglePost';

const SinglePage = ({ params }) => {
  const { singlePost } = params; 

  return (
    <div>
      <h1>Post ID: {singlePost}</h1> 
      <SinglePost postId={singlePost}/>
    </div>
  );
};

export default SinglePage;
