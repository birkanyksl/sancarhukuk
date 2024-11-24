"use client";
import InsightCard from "./InsightCard";
import HeadingWithDivider from "../HeadingWithDivider";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocale } from "next-intl";
import { Link } from "@/navigation";

const HomeInsights = () => {
  const [articles, setArticles] = useState([]);
  const locale = useLocale();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get("/api/posts");
        const recentArticles = res.data.reverse().slice(0, 11);
 
        
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
      <HeadingWithDivider title="Insights" />
      <div className="mb-12 md:my-20 lg:mb:24 flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-2xl lg:text-3xl font-bold ">
          <span className="text-color6">Adaletin Gündeminde </span>
          <span className="text-color1">Neler Var?</span>
        </h1>
        <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
          Yeni yasalar, kararlar ve hukuk dünyasındaki değişiklikler.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row xl:px-12 gap-16 w-full md:gap-20 pt-4 md:mb-16">
        {/* LEFT */}
        <div className="flex flex-col w-full lg:w-2/3">
          <p className="text-sm md:text-base mb-4 text-gray-800 leading-6">
            Through team’s blog posts and professional publications, you can
            gain insights into important topics in the industry and stay updated
            on the latest developments in the field of law.
          </p>

          {leftArticles.map((article, index) => (
            <div key={index} className="mb-1 md:px-4">
              <div className="flex flex-row gap-4 justify-between items-center p-2 md:pb-8 shadow-bottom">
                <div className="flex flex-col gap-2 w-[60%] md:gap-6">
                  <div className="flex flex-col gap-2 md:flex-row">
                    <span className="text-[10px] font-light text-gray-400 md:font-normal lg:font-medium">
                      {new Date(article.createdAt).toLocaleDateString(
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

                  <h2 className="text-sm font-semibold color1 lg:font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                  {locale === "tr" ? article.title : article.titleEN}
                    
                  </h2>
                </div>

                <Link href={`/insight/${article._id}`} className="w-max mr-6 text-xs text-gray-800 font-semibold hover:text-color6">
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex flex-col w-full lg:w-1/3 gap-8 overflow-y-auto mx-auto">
          <div className="flex justify-between items-center sticky top-0 bg-white py-2">
            <h3 className="text-sm md:text-md font-semibold">
              Latest Insights
            </h3>
          
            <Link href={"/insight"}>
            <span className="text-xs font-light text-gray-900 cursor-pointer">View all</span>
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
