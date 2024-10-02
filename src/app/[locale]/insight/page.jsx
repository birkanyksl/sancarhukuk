
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; 
import Image from "next/image";
import React from "react";
import Posts from "@/components/insight/posts/Posts";


const page = () => {
  return (
    <div className="">
      <div className="relative w-full h-48 bg-slate-50">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-color1 p-4 text-center">
            <h1 className="text-4xl font-normal">
              <span className="text-color6">Yayınlar</span>
            </h1>
            <p className="mt-4 text-sm text-gray-600">
              Şirketimiz, kapsamlı hukuki danışmanlık ve dava hizmetleri sunarak
              müvekkillerine güvenilir çözümler sağlar.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-24 flex items-center justify-center mt-2 gap-4">
        <Image
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width={64} 
          height={64} 
          className="rounded-full object-cover w-12 h-12" 
        />
        <li className="list-none">Logout</li>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-12 h-12" />
      </div>

     
        
      <Posts />
        
        {/* <div className="w-[25%]">

      <PostSideBar/>
        </div> */}
      
    </div>
  );
};

export default page;
