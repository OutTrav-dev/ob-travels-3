"use client";
import { SlideItem } from "@/types/carousel.types";
import Image from "next/image";

export default function DetailsImageSlide({
  slide,
  priority = false,
}: {
  slide: SlideItem;
  priority?: boolean;
}) {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <Image
          src={slide.img_src}
          alt={slide.title || slide.subtitle || "slide"}
          fill
          sizes="(max-width: 640px) 100vw, 800px"
          style={{ objectFit: "cover" }}
          priority={priority}
        />
      </div>
    </div>
  );
}
