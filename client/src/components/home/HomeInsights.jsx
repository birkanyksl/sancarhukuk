"use client";
import InsightCard from "./InsightCard";
import HeadingWithDivider from "../HeadingWithDivider";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { IoIosArrowForward } from "react-icons/io";

const HomeInsights = () => {
  const [articles, setArticles] = useState([]);
  const locale = useLocale();
  const t = useTranslations("HomePublications")

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get("/api/posts");
        const sortedArticles = res.data.sort((a, b) => {
          
          const dateA = new Date(a.specificDate || a.createdAt);
          const dateB = new Date(b.specificDate || b.createdAt);
          return dateB - dateA; 
        });
        const recentArticles = sortedArticles.slice(0, 11); 
        setArticles(recentArticles);
      } catch (error) {
        console.log("Makale alınırken hata oluştu.", error);
      }
    };
    fetchArticles();
  }, []);

  const rightArticles = articles.slice(0, 4); 
  const leftArticles = articles.slice(4); 

  return (
    <>
      <HeadingWithDivider title={t("title")} />
      <div className="mb-12 md:my-20 lg:mb:24 flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-2xl lg:text-3xl font-bold ">
          <span className="text-color6">{t("H11")}</span>
          <span className="text-color1">{t("H12")}</span>
        </h1>
        <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
        {t("P1")}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row xl:px-12 gap-16 w-full md:gap-20 pt-4 md:mb-16">
        {/* LEFT */}
        <div className="flex flex-col w-full lg:w-1/2 xl:w-2/3">
          <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
          {t("Text")}
          </p>

          {leftArticles.map((article, index) => (
            <div key={index} className="mb-1 md:px-4">
              <div className="flex flex-col gap-4 p-2 pb-8 shadow-bottom">
                <div className="flex flex-row gap-2 justify-between">
                  <div className="flex gap-2 md:flex-row">
                    <span className="text-[10px] font-light text-gray-400 md:font-normal lg:font-medium">
                      {new Date(article.specificDate || article.createdAt).toLocaleDateString(
                        locale === "tr" ? "tr-TR" : "en-GB",
                        {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </span>
                    <span className="text-[11px] font-light text-color6 md:font-normal lg:font-medium">
                    {(locale === "tr" ? article.categories : article.categoriesEN)?.length > 0
                        ? (locale === "tr" ? article.categories : article.categoriesEN)
                            .map((category) => category.toUpperCase())
                            .join(" | ")
                        : "NO CATEGORY"}
                    </span>
                  </div>
                    
                  <Link href={`/insight/${article._id}`} className="w-max mr-6 text-xs text-gray-800 font-semibold hover:text-color6">
                <IoIosArrowForward className="w-5 h-5"/>
                </Link>
                  
                </div>
                <h2 className="flex flex-wrap text-sm w-[90%] font-semibold lg:font-bold text-ellipsis leading-loose ">
                  {locale === "tr" ? article.title : article.titleEN}
                    
                  </h2>
                
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col w-full lg:w-1/2 xl:w-1/3 gap-8 overflow-y-auto mx-auto">
          <div className="flex justify-between items-center sticky top-0 bg-white py-2">
            <h3 className="text-sm md:text-md font-semibold">
            {t("Latest Insights")}
            </h3>
          
            <Link href={"/insight"}>
            <span className="text-xs font-light text-gray-900 cursor-pointer">{t("View all")}</span>
            </Link>
            
          </div>
          <div className="flex flex-col gap-6">
            {rightArticles.map((article, index) => (
              <Link key={index} href={`/insight/${article._id}`}  >
              <InsightCard  article={article} locale={locale} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeInsights;
