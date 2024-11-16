import Image from "next/image";
import React from "react";

const InsightCard = ({ article, locale }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-4 w-full pb-2 shadow-md rounded-lg p-4 mb-6">
      <div className="relative w-full h-48">
        <Image
          src={article.photo}
          alt="blog-image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg"
          priority
        />
      </div>
      <span className="text-xs font-light text-gray-400 mt-2 px-4">
        {new Date(article.createdAt).toLocaleDateString(
          locale === "tr" ? "tr-TR" : "en-GB",
          {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }
        )}
      </span>
      <h2 className="w-[80%] text-sm font-semibold color1 overflow-hidden text-ellipsis whitespace-nowrap px-4">
        {locale === "tr" ? article.title : article.titleEN}
      </h2>
      <div className="flex items-center justify-between px-4">
        <span className="text-xs font-medium text-color6">
          {(locale === "tr" ? article.categories : article.categoriesEN)
            ?.length > 0
            ? (locale === "tr" ? article.categories : article.categoriesEN)
                .map((category) => category.toUpperCase())
                .join(" | ")
            : "NO CATEGORY"}
        </span>
      </div>
    </div>
  );
};

export default InsightCard;
