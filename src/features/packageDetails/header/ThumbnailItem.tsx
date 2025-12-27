"use client";
import React from "react";
import Image from "next/image";
import { SlideItem } from "@/types/carousel.types";

export default function ThumbnailItem({ slide }: { slide: SlideItem }) {
  return (
    <div
      className="group relative w-full h-full rounded-xl bg-white border shadow-sm overflow-hidden
                 transform transition-all duration-300 ease-out
                 hover:shadow-xl hover:scale-[1.03]"
    >
      <Image
        src={slide.img_src}
        alt={slide.title || slide.subtitle || "preview"}
        fill
        sizes="200px"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      {/* <div className="absolute inset-0 bg-black/35 flex items-end">
        <p className="text-white text-xs font-medium px-2 py-1 truncate w-full">
          {slide.title}
        </p>
      </div> */}
    </div>
  );
}