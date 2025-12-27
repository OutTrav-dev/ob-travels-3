"use client";
import AutoCarousel from "@/src/components/common/carousel/AutoCarousel";
import { SlideItem } from "@/types/carousel.types";
import React, { useState } from "react";
import DetailsImageSlide from "./DetailsImageSlide";

export default function CarouselMain({
  slides,
  heightPx = 450,
}: {
  slides: SlideItem[];
  heightPx?: number;
}) {
  const [current, setCurrent] = useState(0);
  return (
    <AutoCarousel
      heightPx={heightPx}
      slides={slides}
      current={current}
      setCurrent={setCurrent}
      intervalMs={5000}
      pauseOnHover
      renderSlide={(slide, idx) => (
        <DetailsImageSlide slide={slide} priority={idx === 0} />
      )}
    />
  );
}