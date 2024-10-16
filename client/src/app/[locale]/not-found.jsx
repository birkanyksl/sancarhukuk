import Image from 'next/image';
import React from 'react'

const NotFound = () => {
    return (
        <div className="w-full max-w-screen-lg mx-auto my-10">
          <Image
            src="/404.jpg" 
            alt="Responsive Image"
            width={1200} 
            height={800} 
            layout="responsive" 
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
      );
}

export default NotFound