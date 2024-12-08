import HorizontalDivider from "@/components/HorizontalDivider";
import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";

const Post = ({ post }) => {
  const locale = useLocale();

  return (
    <div className="flex flex-col gap-4 w-full my-3 cursor-pointer p-4 shadow-sm bg-white">
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
        {post.photo && (
          <Image
            src={post.photo}
            alt="blog-image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
           priority
          />
        )}
      </div>
      <span className="text-xs md:text-sm font-light text-gray-400 mt-2">
        {new Date(post.specificDate || post.createdAt).toLocaleDateString(
          locale === "tr" ? "tr-TR" : "en-GB",
          {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }
        )}
      </span>
      <span className="text-color6 text-xs md:text-sm font-medium">
        {(locale === "tr" ? post.categories : post.categoriesEN)?.length > 0
          ? (locale === "tr" ? post.categories : post.categoriesEN)
              .map((category) => category.toUpperCase())
              .join(" | ")
          : "NO CATEGORY"}
      </span>
      <h2 className="w-[90%] text-sm md:text-base font-bold mb-4 overflow-hidden text-ellipsis whitespace-nowrap">
        {locale === "tr" ? post.title : post.titleEN}
      </h2>

      <HorizontalDivider width="100%" />
    </div>
  );
};

export default Post;
