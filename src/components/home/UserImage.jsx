"use client"

import { useContext } from "react";
import { Context } from "@/context/Context";

import Image from "next/image";

const UserImage = () => {
  const { user } = useContext(Context);
  
  if (!user) return null;

  return (
    <div
      
      className="relative w-8 h-8 cursor-pointer rounded-full overflow-hidden"
    >
      <Image
        src={user.profilePic}
        alt="Profil Fotoğrafı"
        fill
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default UserImage;
