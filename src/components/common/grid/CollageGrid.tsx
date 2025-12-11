"use client";
import { CollageGridProps } from "@/types/homePage.types";
import Image from "next/image";
import React from "react";

const spanMap: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  10: "md:col-span-10",
  11: "md:col-span-11",
  12: "md:col-span-12",
};

export default function CollageGrid({ items }: CollageGridProps) {
  return (
    <div className="w-full max-w-screen-2xl grid grid-cols-12 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={`
            col-span-6
            ${spanMap[item.size]}
            group relative rounded-2xl overflow-hidden h-48 md:h-60
          `}
        >
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />

          {/* gradient for readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

          {/* solid, less-opacity black bottom section */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/30">
            <div className="p-3 flex justify-between items-center">
              <span className="text-white/95 text-sm md:text-base font-semibold tracking-tight truncate">
                {item.title}
              </span>

              {/* Catchy price: "From ₹2000/-" */}
              <span
                className="
                  inline-flex items-center gap-1.5
                  rounded-full px-3 py-2 bg-linear-to-b from-emerald-500 to-emerald-700 backdrop-blur
                  text-white font-bold text-sm md:text-base
                  shadow-sm 
                "
                aria-label={`From ${item.price}`}
                title={`From ${item.price}`}
              >
                <span className="text-white text-xs font-semibold">From</span>
                <span className="tabular-nums">{item.price}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
