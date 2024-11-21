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


  const [title, setTitle] = useState("");
  const [titleEN, setTitleEN] = useState("");

  const [desc, setDesc] = useState("");
  const [descEN, setDescEN] = useState("");

  const [categories, setCategories] = useState([]);
  const [categoriesEN, setCategoriesEN] = useState([]);

  const [updateMode, setUpdateMode] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/api/posts/${postId}`);
        setPost(res.data);
        setTitle(res.data.title);
        setTitleEN(res.data.titleEN);
        setDesc(res.data.desc);
        setDescEN(res.data.descEN);
        setCategories(res.data.categories);
        setCategoriesEN(res.data.categoriesEN);
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
          titleEN,
          desc: cleanHtmlContent(desc),
          descEN: cleanHtmlContent(descEN),
          categories,
          categoriesEN,
        });
        setUpdateMode(false);
      } catch (error) {
        console.log(error);
      }
  };

  const cleanHtmlContent = (html) => {
    let cleanedHtml = html.replace(/<br\s*\/?>/gi, "\n");

    cleanedHtml = cleanedHtml.replace(/<\/?[^>]+(>|$)/g, "");

    return cleanedHtml;
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
                value={title}
                placeholder="Başlık girin"
                className="border p-2 rounded text-sm font-medium mt-6 w-full"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                value={titleEN}
                placeholder="Başlık girin"
                className="border p-2 rounded text-sm font-medium mt-6 w-full"
                onChange={(e) => setTitleEN(e.target.value)}
              />
            </div>
          ) : (
            <h1 className="text-4xl lg:text-5xl font-normal text-color6">
              {(locale === "tr" ? title : titleEN).toUpperCase()}
            </h1>
          )}

          {updateMode ? (
            <div className="flex gap-8">
              <input
                type="text"
                className="border p-2 rounded text-sm font-medium mt-6 w-full"
                placeholder="Kategorileri virgülle ayırarak yazın"
                value={categories.join(", ")}
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
                value={categoriesEN.join(", ")}
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
        <div className=" flex flex-col gap-6 lg:w-3/4">
          <div className="flex justify-start w-full">
            {post.photo && (
              <Image
                src={post.photo}
                alt="Post görseli"
                width={2000}
                height={3000}
                className="w-full h-72 object-cover rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>

          {/* Makale */}
          <div className="md:pl-8 flex flex-col">
            {updateMode ? (
              <div className="flex flex-col gap-2">
                <>
                  <span className="text-sm text-color6">
                    Güncellenecek Türkçe Metin:
                  </span>
                  <div
                    className="border p-2 rounded text-sm font-medium mt-6 w-full
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
                </>

                <>
                  <span className="text-sm text-color6">
                    Güncellenecek İngilizce Metin:{" "}
                  </span>
                  <div
                    className="border p-2 rounded text-sm font-medium mt-6 w-full
                   h-[50vh] overflow-y-auto text-gray-800"
                    contentEditable
                    suppressContentEditableWarning
                    style={{
                      minHeight: "30vh",
                      whiteSpace: "pre-wrap",
                    }}
                    onInput={(e) => {
                      setDescEN(e.currentTarget.innerText);
                    }}
                  >
                    {post.descEN}
                  </div>
                </>
              </div>
            ) : (
              <p className="text-base text-gray-700 whitespace-pre-wrap">
                
                {locale === "tr" ? desc : descEN}
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
        <div className="flex flex-col w-full gap-8 overflow-y-auto lg:w-1/4 ">
          <div className="flex justify-between items-center sticky top-0 bg-white py-2">
            <h3 className="text-sm md:text-md font-semibold">
              Latest Insights
            </h3>
            <span className="text-xs font-light text-gray-900">View all</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 pt-4">
            {articles.map((article, index) => (
              <InsightCard key={index} article={article} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
