"use client";

import React from "react";
import Image from "next/image";
import ViewAllLink from "@/src/components/common/layout/ViewAllLink";
import StarRating from "@/src/components/common/StarRating";
import PriceBlock from "./PriceBlock";
import { PackagesCardItem } from "@/types/packages.types";

const LandscapeCard: React.FC<PackagesCardItem> = ({
  image,
  title,
  subtitle,
  rating,
  days,
  nights,
  price,
  link,
  detailed,
  original_price,
  discounted_price,
}) => {
  return (
    <article className="group/card flex h-56 overflow-hidden shadow-md rounded-xl">
      {/* Image */}
      <div className="relative h-full w-1/3 overflow-hidden">
        <Image
          src={image || "/images/mountainImage.jpg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover/card:scale-110"
        />

        <div className="absolute top-2 left-2 bg-emerald-600 text-white text-xs px-3 py-1 rounded-full">
          {days}D / {nights}N
        </div>
      </div>

      {/* Content */}
      <div className="w-2/3 p-4 flex flex-col justify-between bg-linear-to-br from-white via-white to-emerald-50">
        <div>
          <h3 className="text-lg font-bold text-emerald-900 mb-1 line-clamp-1">
            {title}
          </h3>
          <StarRating rating={rating} showNumber />
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{subtitle}</p>
        </div>

        <div className="flex justify-between items-end mt-2">
          <div className="flex flex-col gap-5.5">
            <div className="flex items-center gap-1 text-emerald-700 font-semibold">
              {days}D / {nights}N
            </div>

            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full shadow">
              Enquiry
            </button>
          </div>

          <div className="flex flex-col items-end gap-2">
            <PriceBlock
              detailed={detailed}
              original_price={original_price}
              discounted_price={discounted_price}
              price={price}
            />
            <ViewAllLink viewAll={link} label="View Details" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default LandscapeCard;
