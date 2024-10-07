"use client";
import InsightCard from "@/components/home/InsightCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocale } from "next-intl";
import { Context } from "@/context/Context";
import { useRouter } from "next/navigation";

export default function SinglePost({ postId }) {
  const [post, setPost] = useState({});
  const locale = useLocale();
  const { user } = useContext(Context);
  const router = useRouter();

  //Update
  const [title, setTitle] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc)
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
        router.push("/");
      } catch (error) {
        console.log(error);
      }
  };

  const handleUpdate = async () => {
    const confirmUpdate = window.confirm(
      "Bu gönderi güncellenecektir. Devam etmek istiyor musunuz?"
    );
    if (confirmUpdate)
      try {
        await axios.put(`/api/posts/${post._id}`, {
          username: user.username,
          title,
          desc: cleanHtmlContent(desc),
        });
        setUpdateMode(false)
      } catch (error) {
        console.log(error);
      }
  };

  const cleanHtmlContent = (html) => {
    let cleanedHtml = html.replace(/<br\s*\/?>/gi, "\n");

    cleanedHtml = cleanedHtml.replace(/<\/?[^>]+(>|$)/g, "");

    return cleanedHtml;
  };

  return (
    <div>
      <div className="relative w-full h-48 bg-slate-50 flex items-center justify-center">
        <div className="text-color1 p-4 text-center">
          {updateMode ? (
            <input
              type="text"
              value={title}
              placeholder="Başlık girin"
              className="w-full p-2 border border-gray-300 rounded-lg text-xl text-gray-900
                       focus:ring-2 focus:ring-color6 focus:border-color6 outline-none 
                       transition duration-300 ease-in-out shadow-sm hover:shadow-md"
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="text-4xl lg:text-5xl font-normal text-color6">
              {title?.toUpperCase()}
            </h1>
          )}

          <div className="flex items-center justify-center">
            <span className="text-xs font-light mt-6">
              <span className="text-color1">By </span>
              <span className="text-color6">{post.username}</span>
            </span>
          </div>
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

      <div className="mx-auto mt-6 flex flex-col md:flex-row gap-8 px-6 pb-8 md:px-8 lg:px-16">
        <div className="md:w-4/5 flex flex-col gap-6">
          <div className="flex justify-start w-full">
            {post.photo && (
              <Image
                src={post.photo}
                alt="Post görseli"
                width={2000}
                height={3000}
                className="w-full h-72 object-cover"
              />
            )}
          </div>

          {/* Makale */}
          <div className="md:border-l border-color6 md:pl-8 flex flex-col">
            {updateMode ? (
              <div
                className="writeInput w-full p-4 border border-gray-300 rounded-lg text-lg
              bg-white shadow-sm focus-within:shadow-md transition-all duration-300
              outline-none focus:border-color6 focus:ring-2 focus:ring-color6
              h-[50vh] overflow-y-auto text-gray-800"
                contentEditable
                suppressContentEditableWarning
                style={{
                  minHeight: "30vh",
                  whiteSpace: "pre-wrap",
                }}
                onInput={(e) => {
                  setDesc(e.currentTarget.innerText);
                }}
              >
                {post.desc}
              </div>
            ) : (
              <p className="text-base text-gray-700 whitespace-pre-wrap">
                {desc}
              </p>
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
                onClick={() => setUpdateMode(false)}
              >
                İptal
              </button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="md:w-1/5 flex flex-col gap-8 overflow-y-auto scroll-smooth insight-scroll px-1 h-[700px]">
          <div className="flex justify-between items-center">
            <h3 className="text-sm md:text-md font-semibold">
              Latest Insights
            </h3>
            <span className="text-xs font-light text-gray-900">View all</span>
          </div>
          <div className="flex flex-wrap justify-between">
            <InsightCard />
            <InsightCard />
            <InsightCard />
            <InsightCard />
          </div>
        </div>
      </div>
    </div>
  );
}
