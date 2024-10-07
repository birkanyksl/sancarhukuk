"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { Context } from "@/context/Context";
import axios from "axios";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [error, setError] = useState(""); 
  const [uploadedImageUrl, setUploadedImageUrl] = useState(""); 

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadedImageUrl(URL.createObjectURL(selectedFile)); 
    }
  };
  
  const cleanHtmlContent = (html) => {
    let cleanedHtml = html.replace(/<br\s*\/?>/gi, "\n");

    cleanedHtml = cleanedHtml.replace(/<\/?[^>]+(>|$)/g, "");

    return cleanedHtml;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Lütfen bir dosya yükleyin.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", user.username);
    formData.append("title", title);
    formData.append("desc", cleanHtmlContent(desc));

    try {
      const uploadRes = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const newPost = {
        username: user.username,
        title,
        desc,
        photo: uploadRes.data, 
      };

      const res = await axios.post("/api/posts", newPost);
      console.log(res.data);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Bir hata oluştu."); 
    }
  };

  

  return (
    <div className="pt-12 mx-auto max-w-4xl">
      {error && <div className="text-red-500">{error}</div>} 
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
     
        {uploadedImageUrl ? (
          <Image
            src={uploadedImageUrl} 
            alt="Yazı Görseli"
            fill
            className="object-cover"
            priority 
          />
        ) : (
          <Image
            src="https://images.pexels.com/photos/27947532/pexels-photo-27947532/free-photo-of-piknik.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
            alt="Yazı Görseli"
            fill
            className="object-cover"
            priority 
          />
        )}
      </div>

      <form className="mt-6" onSubmit={handleSubmit}>
        <div className="flex items-center mb-4">
          <label htmlFor="fileInput" className="cursor-pointer flex items-center">
            <FontAwesomeIcon
              icon={faImages}
              className="text-gray-700 mr-2 w-6 h-6"
            />
          </label>
          <input
            id="fileInput"
            type="file"
            className="hidden"
            onChange={handleFileChange} 
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
          <div
            className="writeInput w-full h-[50vh] p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 text-lg whitespace-pre-wrap"
            contentEditable
            suppressContentEditableWarning
            placeholder="Hikayenizi anlatın..."
            style={{
              minHeight: '50vh',
              overflowY: 'auto'
            }}
            onInput={e => setDesc(e.currentTarget.innerText)}
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
