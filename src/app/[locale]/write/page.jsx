"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Context } from "@/context/Context";
import axios from "axios";
// import { user} from "@/utils/auth";
// import { redirect } from "next/navigation";
// import { useLocale } from "next-intl";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pt-12 mx-auto max-w-4xl">
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/27947532/pexels-photo-27947532/free-photo-of-piknik.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          alt="Yazı Görseli"
          fill
          className="object-cover"
        />
      </div>

      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <label
            htmlFor="fileInput"
            className="cursor-pointer flex items-center"
          >
            <FontAwesomeIcon
              icon={faImages}
              className="text-gray-700 mr-2 w-6 h-6"
            />
          </label>
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-teal-500 flex-1 ml-2"
            placeholder="Başlık"
            type="text"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <textarea
            className="writeInput w-full h-[50vh] p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 text-lg"
            placeholder="Hikayenizi anlatın..."
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-teal-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-teal-600 transition"
        >
          Yayınla
        </button>
      </form>
    </div>
  );
}
