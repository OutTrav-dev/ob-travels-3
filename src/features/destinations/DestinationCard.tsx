"use client";
import { DestinationItem } from "@/types/destinations.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { item: DestinationItem };

const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);

const DestinationCard: React.FC<Props> = ({ item }) => {
  return (
    <article
      className="group rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 h-full flex flex-col"
      itemScope
      itemType="https://schema.org/Product"
    >
      <meta itemProp="name" content={item.place} />
      {item.country && <meta itemProp="brand" content={item.country} />}
      <link itemProp="url" href={`/destinations/${item.type}/${item.place}`} />

      {/* IMAGE */}
      <div className="relative aspect-4/3 w-full">
        <Image
          src={item.images?.[0] || "/images/destination-placeholder.jpg"}
          alt={`${item.place} - ${item.country ?? "Destination"}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/55 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 flex items-end justify-between">
          <div className="min-w-0">
            <h3 className="text-white text-base sm:text-lg font-bold truncate">
              {item.place}
            </h3>
            {item.country && (
              <p className="text-white/80 text-xs sm:text-sm truncate">
                {item.country}
              </p>
            )}
          </div>
          <span className="px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-white/90 text-[#052210]">
            {item?.type?.toUpperCase()}
          </span>
        </div>
      </div>

      {/* BODY - FLEX COLUMN FIX */}
      <div className="p-3 sm:p-4 flex flex-col justify-between flex-1">
        {/* TOP PART */}
        <div>
          <div className="flex items-center justify-between">
            <Link
              href={`/packages/${item.place || item.country}`}
              className="text-lime-700 hover:text-lime-800 text-xs lg:text-sm font-semibold"
            >
              View Packages
            </Link>
            <span className="text-xs text-gray-500">
              {item.highlights.length} highlights
            </span>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-gray-700 line-clamp-2">
            {item.highlights.join(" • ")}
          </p>
        </div>

        {/* BOTTOM FIXED PART */}
        <div
          className="mt-4 flex items-center justify-between rounded-lg bg-[#f5fff8] border border-lime-200 px-3 py-2"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <div className="flex flex-col">
            <span className="text-[11px] sm:text-xs text-gray-600">
              Starting from
            </span>
            <span
              className="text-[#052210] text-base sm:text-lg font-bold"
              itemProp="price"
            >
              {formatINR(item.amount)}
            </span>
            <meta itemProp="priceCurrency" content="INR" />
            <link itemProp="availability" href="https://schema.org/InStock" />
          </div>

          <Link
            href={`/packages/${item.place || item.country}`}
            className="text-xs sm:text-sm font-semibold text-white bg-[#052210] hover:bg-[#06401b] px-3 py-1.5 rounded-full transition-colors"
          >
            Explore
          </Link>
        </div>
      </div>
    </article>
  );
};

export default DestinationCard;
