"use client";
import InsightCard from "@/components/home/InsightCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocale } from "next-intl";
import { Context } from "@/context/Context";
import { useRouter } from "next/navigation";
import sanitizeHtml from "sanitize-html";

import RichTextEditor from "@/components/textEditor/RichTextEditor";
import { Link } from "@/navigation";

const sanitizeContent = (content) => {
  const sanitized = sanitizeHtml(content, {
    allowedTags: [
      "p",
      "strong",
      "em",
      "u",
      "ol",
      "ul",
      "li",
      "a",
      "img",
      "br",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "span",
      "mark",
    ],
    allowedAttributes: {
      "*": ["class", "style"],
      a: ["href", "target"],
      img: ["src", "alt", "width", "height"],
    },
  });

  return sanitized;
};

export default function SinglePost({ postId }) {
  const [post, setPost] = useState({});
  const locale = useLocale();
  const { user } = useContext(Context);
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [titleEN, setTitleEN] = useState("");

  const [desc, setDesc] = useState("");
  const [descEN, setDescEN] = useState("");

  const [categories, setCategories] = useState([]);
  const [categoriesEN, setCategoriesEN] = useState([]);

  const [updateMode, setUpdateMode] = useState(false);
  const [articles, setArticles] = useState([]);

  const [file, setFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        const postData = res.data;

        setPost(postData);
        setTitle(postData.title);
        setTitleEN(postData.titleEN);
        setDesc(postData.desc);
        setDescEN(postData.descEN);
        setCategories(postData.categories);
        setCategoriesEN(postData.categoriesEN);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    getPost();
  }, [postId]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Bu gönderiyi silmek istediğinize emin misiniz?"
    );
    if (confirmDelete)
      try {
        await axios.delete(`/api/posts/${postId}`, {
          data: { username: user.username },
        });
        alert("Post deleted successfully!");
        router.push("/");
      } catch (error) {
        console.error(error);
        alert("An error occurred while deleting the post.");
      }
  };

  const handleUpdate = async () => {
    const confirmUpdate = window.confirm(
      "Bu gönderi güncellenecektir. Devam etmek istiyor musunuz?"
    );

    if (confirmUpdate) {
      try {
        const sanitizedDesc = sanitizeContent(desc);
        const sanitizedDescEN = sanitizeContent(descEN);

        let photo = post.photo;

        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          const uploadRes = await axios.post("/api/upload", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          photo = uploadRes.data;
        }

        await axios.put(`/api/posts/${post._id}`, {
          username: user.username,
          title,
          titleEN,
          desc: sanitizedDesc,
          descEN: sanitizedDescEN,
          categories,
          categoriesEN,
          photo,
        });

        setUpdateMode(false);
        alert("Post updated successfully!");
      } catch (error) {
        console.log(error);
        alert("An error occurred while updating the post.");
      }
    }
  };
  const handleCancelUpdate = () => {
    setUpdateMode(false);

    setTitle(post.title);
    setTitleEN(post.titleEN);
    setDesc(post.desc);
    setDescEN(post.descEN);
    setCategories(post.categories);
    setCategoriesEN(post.categoriesEN);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadedImageUrl(URL.createObjectURL(selectedFile));
    }
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get("/api/posts");
        const recentArticles = res.data.reverse().slice(0, 4);
        setArticles(recentArticles);
      } catch (error) {
        console.log("Makale alınırken hata oluştu.", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <div className="relative w-full h-48 bg-slate-50 flex items-center justify-center">
        <div className="text-color1 p-4 text-center">
          {updateMode ? (
            <div className="flex gap-8">
              <input
                type="text"
                value={title || ""}
                placeholder="Başlık girin"
                className="border p-2 rounded text-sm font-medium mt-6 w-full"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                value={titleEN || ""}
                placeholder="Başlık girin"
                className="border p-2 rounded text-sm font-medium mt-6 w-full"
                onChange={(e) => setTitleEN(e.target.value)}
              />
            </div>
          ) : (
            <h1 className="text-4xl lg:text-5xl font-medium text-black ">
              {(locale === "tr" ? title : titleEN) || ""}
            </h1>
          )}

          {updateMode ? (
            <div className="flex gap-8">
              <input
                type="text"
                className="border p-2 rounded text-sm font-medium mt-6 w-full"
                placeholder="Kategorileri virgülle ayırarak yazın"
                value={categories.join(", ") || ""}
                onChange={(e) =>
                  setCategories(
                    e.target.value.split(",").map((category) => category.trim())
                  )
                }
              />
              <input
                type="text"
                className="border p-2 rounded text-sm font-medium mt-6 w-full"
                placeholder="Kategorileri virgülle ayırarak yazın"
                value={categoriesEN.join(", ") || ""}
                onChange={(e) =>
                  setCategoriesEN(
                    e.target.value.split(",").map((category) => category.trim())
                  )
                }
              />
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <span className="text-color6 text-sm font-medium mt-6">
                {(locale === "tr" ? categories : categoriesEN)?.length > 0
                  ? (locale === "tr" ? categories : categoriesEN)
                      .map((category) => category.toUpperCase())
                      .join(" | ")
                  : "NO CATEGORY"}
              </span>
            </div>
          )}

          {!updateMode && (
            <span className="text-xs font-light text-color7 mt-2">
              {new Date(post.createdAt).toLocaleDateString(
                locale === "tr" ? "tr-TR" : "en-GB",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }
              )}
            </span>
          )}
          {post.username === user?.username && (
            <div className="flex items-center justify-center mt-4 gap-4 ">
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="w-4 h-4 text-green-600 cursor-pointer"
                onClick={() => setUpdateMode(true)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="w-4 h-4 cursor-pointer text-red-700"
                onClick={handleDelete}
              />
            </div>
          )}
        </div>
      </div>

      <div className="mx-auto mt-6 flex flex-col lg:flex-row gap-8 px-6 pb-8 md:px-8 lg:px-16">
        <div className=" flex flex-col gap-6 lg:w-4/6 ">
          {updateMode ? (
            <div className="relative aspect-[16/9] overflow-hidden w-96 mx-auto bg-slate-100">
              {uploadedImageUrl || post.photo ? (
                <Image
                  src={uploadedImageUrl || post.photo}
                  alt="Post görseli"
                  className="object-contain rounded-lg"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="text-gray-500 text-sm">Görsel Yüklenmedi</div>
              )}
            </div>
          ) : (
            post.photo && (
              <div className="relative aspect-[16/9] overflow-hidden w-96 mx-auto bg-slate-100">
                <Image
                  src={post.photo}
                  alt="Post görseli"
                  className="object-contain rounded-lg"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )
          )}
    {
      updateMode && <>
       <label
        htmlFor="fileInput"
        className="cursor-pointer flex items-center justify-center text-black mt-2"
      >
        <FontAwesomeIcon icon={faImages} className="mr-2" />
        Resmi Güncelle
      </label>
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
      
      </>
    }
       
          {/* Makale */}
          <div className="md:pl-8 flex flex-col">
            {updateMode ? (
              <>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Türkçe Metin</label>
                  <RichTextEditor
                    content={desc}
                    value={desc}
                    onChange={(value) => setDesc(value)}
                  />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <label className="font-semibold">İngilizce Metin</label>
                  <RichTextEditor
                    content={descEN}
                    value={descEN}
                    onChange={(value) => setDescEN(value)}
                  />
                </div>
              </>
            ) : (
              <p
                className="text-base whitespace-pre-wrap mx-6 lg:mx-12 my-6 text-justify"
                dangerouslySetInnerHTML={{
                  __html: sanitizeContent(locale === "tr" ? desc : descEN),
                }}
              />
            )}
          </div>

          {updateMode && (
            <div className="flex justify-end mt-4 gap-4">
              <button
                type="submit"
                className="bg-teal-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-teal-600 transition text-sm"
                onClick={handleUpdate}
              >
                Güncelle
              </button>
              <button
                type="button"
                className="bg-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-600 transition text-sm"
                onClick={handleCancelUpdate}
              >
                İptal
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="flex flex-col w-full lg:w-2/6 gap-8 overflow-y-auto mx-auto">
          <div className="flex justify-between items-center py-2">
            <h3 className="text-sm md:text-md font-semibold">
              Latest Insights
            </h3>

            <Link href={"/insight"}>
              <span className="text-xs font-light text-gray-900 cursor-pointer">
                View all
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-6">
            {articles.map((article, index) => (
              <Link key={index} href={`/insight/${article._id}`}>
                <InsightCard article={article} locale={locale} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
