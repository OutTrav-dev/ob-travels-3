"use client";

import React from "react";
import ThumbnailsGrid from "./ThumbnailsGrid";
import CarouselMain from "./CarouselMain";
import { SlideItem } from "@/types/carousel.types";

const PackageDetailsImageCarousel: React.FC<{ slides: SlideItem[] }> = ({
  slides,
}) => {
  return (
    <div className="w-full mx-auto lg:grid lg:grid-cols-3 lg:gap-6 lg:h-[450px]">
      <article className="lg:col-span-2" aria-label="Featured Travel Offers">
        {/* Smaller height on small screens */}
        <div className="lg:hidden">
          <CarouselMain slides={slides} heightPx={260} />
        </div>
        {/* Full height on large screens */}
        <div className="hidden lg:block">
          <CarouselMain slides={slides} heightPx={450} />
        </div>
      </article>

      {/* Thumbnails only on large screens */}
      <div className="hidden lg:block">
        <ThumbnailsGrid slides={slides} />
      </div>
    </div>
  );
};

export default PackageDetailsImageCarousel;
