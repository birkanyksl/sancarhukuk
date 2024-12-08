import Image from "next/image";
import React from "react";

const InsightCard = ({ article, locale }) => {
  return (
    <div className="flex flex-row gap-6 shadow-bottom p-4 mb-6 w-full overflow-x-hidden">

      <div className="relative w-32 min-w-32 h-32 ">
        <Image
          src={article.photo}
          alt="blog-image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg"
          priority
        />
      </div>
      <div className="flex flex-col gap-6 w-full">

      <span className="text-xs font-light text-gray-400 mt-2 px-4">
        {new Date(article.specificDate || article.createdAt).toLocaleDateString(
          locale === "tr" ? "tr-TR" : "en-GB",
          {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }
        )}
      </span>
      <h2 className="w-full text-sm font-semibold color1 px-4 postParagrafRightBar">
        {locale === "tr" ? article.title : article.titleEN}
      </h2>
      <div className="flex items-center justify-between px-4">
        <span className="text-xs font-normal text-color6 postParagrafRightBar ">
          {(locale === "tr" ? article.categories : article.categoriesEN)
            ?.length > 0
            ? (locale === "tr" ? article.categories : article.categoriesEN)
            .map((category) => category.toUpperCase())
            .join(" | ")
            : "NO CATEGORY"}
        </span>
      </div>
            </div>
    </div>
  );
};

export default InsightCard;
