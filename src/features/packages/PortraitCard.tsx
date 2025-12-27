"use client";

import React from "react";
import Image from "next/image";
import ViewAllLink from "@/src/components/common/layout/ViewAllLink";
import StarRating from "@/src/components/common/StarRating";
import PriceBlock from "./PriceBlock";
import { PackagesCardItem } from "@/types/packages.types";

const PortraitCard: React.FC<PackagesCardItem> = ({
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
    <article className="group/card rounded-xl shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover/card:scale-110"
        />
        <div className="absolute top-2 left-2 bg-emerald-600 text-white px-3 py-1 text-xs rounded-full">
          {days}D / {nights}N
        </div>
      </div>

      <div className="p-5 flex flex-col justify-between h-[220px]">
        <h3 className="text-lg font-bold text-emerald-900 line-clamp-1">
          {title}
        </h3>

        <StarRating rating={rating} showNumber />
        <p className="text-sm text-gray-600 line-clamp-2 mt-2">{subtitle}</p>

        <div className="flex justify-between items-end mt-3">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-1.5 rounded-full shadow">
            Enquiry
          </button>

          <div className="flex flex-col items-end">
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

export default PortraitCard;
