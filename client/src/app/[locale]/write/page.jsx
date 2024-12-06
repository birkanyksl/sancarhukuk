"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context/Context";
import axios from "axios";
import { useAxiosClient } from "@/utils/axiosClient";
import RichTextEditor from "@/components/textEditor/RichTextEditor";


export default function Write() {
  const axiosClient = useAxiosClient();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [categoriesInput, setCategoriesInput] = useState("");
  const [categories, setCategories] = useState([]);

  const [titleEN, setTitleEN] = useState("");
  const [descEN, setDescEN] = useState("");
  const [categoriesENInput, setCategoriesENInput] = useState("");
  const [categoriesEN, setCategoriesEN] = useState([]);

  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [error, setError] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadedImageUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError("Lütfen bir dosya yükleyin.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("username", user.username);
    formData.append("categories", categories.join(","));
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("titleEN", titleEN);
    formData.append("descEN", descEN);
    formData.append("categoriesEN", categoriesEN.join(","));

    try {
      const uploadRes = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const newPost = {
        username: user.username,
        categories,
        title,
        desc,
        photo: uploadRes.data,
        titleEN,
        descEN,
        categoriesEN,
      };

      await axiosClient.post("/api/posts", newPost, { withCredentials: true });
      setSuccess("Yükleme başarılı!");
      setTimeout(() => setSuccess(""), 3000);
      setTitle("");
      setCategoriesInput("");
      setCategories([]);
      setDesc("");
      setFile(null);
      setTitleEN("");
      setDescEN("");
      setCategoriesENInput("");
      setCategoriesEN([]);
      setUploadedImageUrl("");
    } catch (err) {
      console.log(err);
      setError("Bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoriesInputChange = (e) => {
    const input = e.target.value;
    setCategoriesInput(input);

    const updatedCategories = input
      .split(",")
      .map((category) => category.trim());
    setCategories(updatedCategories);
  };

  useEffect(() => {
    return () => {
      if (uploadedImageUrl) {
        URL.revokeObjectURL(uploadedImageUrl);
      }
    };
  }, [uploadedImageUrl]);

  return (
    <div className="flex flex-col w-full justify-center items-center pt-12 px-8 md:px-16 lg:px-32 xl:px-64 mx-auto mb-8">
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-500">{success}</div>}

      <div className=" relative w-96 aspect-[16/9] flex items-center justify-center rounded-lg overflow-hidden mb-6 bg-slate-100 py-6">
        {uploadedImageUrl ? (
          <Image
            src={uploadedImageUrl}
            alt="Yazı Görseli"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        ) : (
          <Image
            src="/no-image.png"
            alt="Yazı Görseli"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        )}
      </div>

      <form className="space-y-8 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center mb-4 space-y-2">
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
            onChange={handleFileChange}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-1">
          <input
            className="text-md border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
            placeholder="Başlık giriniz."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="text-md border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
            placeholder="Kategorileri virgülle ayırarak giriniz!"
            type="text"
            value={categoriesInput}
            onChange={handleCategoriesInputChange}
          />
        </div>

        <div className="mb-4">
          {/* <div
            className=" w-full h-[50vh] p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 text-lg whitespace-pre-wrap"
            contentEditable
            suppressContentEditableWarning
            placeholder="Hikayenizi anlatın..."
            style={{
              minHeight: "50vh",
              overflowY: "auto",
            }}
            onInput={(e) => setDesc(e.currentTarget.innerText)}
          /> */}
           <RichTextEditor
            content={desc}
            onChange={(value) => {
              setDesc(value);
            }}
          />
        </div>

        <div className="grid gap-4 grid-cols-1">
          <input
            className="text-md border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
            placeholder="Enter title in English."
            type="text"
            value={titleEN}
            onChange={(e) => setTitleEN(e.target.value)}
          />
          <input
            className="text-md border-b-2 border-gray-300 focus:outline-none focus:border-teal-500"
            placeholder="Enter categories in English, separated by commas!"
            type="text"
            value={categoriesENInput}
            onChange={(e) => {
              const input = e.target.value;
              setCategoriesENInput(input);
              setCategoriesEN(
                input.split(",").map((category) => category.trim())
              );
            }}
          />
        </div>

        <div className="mb-4">
          {/* <div
            className="w-full h-[50vh] p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 text-lg whitespace-pre-wrap"
            contentEditable
            suppressContentEditableWarning
            placeholder="Hikayenizi anlatın..."
            style={{
              minHeight: '50vh',
              overflowY: 'auto'
            }}
            onInput={(e) => setDescEN(e.currentTarget.innerText)}
           
          /> */}
          <RichTextEditor
            content={descEN}
            onChange={(value) => {
              setDescEN(value);
            }}
          />
        </div>

        <button
          type="submit"
          className={`bg-teal-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-teal-600 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Yükleniyor..." : "Yayınla"}
        </button>
      </form>
    </div>
  );
}
