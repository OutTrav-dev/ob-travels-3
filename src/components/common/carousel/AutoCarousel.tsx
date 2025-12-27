"use client";
import React, { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AutoCarouselProps, SlideItem } from "@/types/carousel.types";
import AutoCarouselSlide from "./AutoCarouselSlide";

export default function AutoCarousel({
  slides,
  images,
  current,
  setCurrent,
  intervalMs = 5000,
  pauseOnHover = true,
  heightPx,
  className = "",
  renderSlide,
}: AutoCarouselProps) {
  // Normalize input to SlideItem[]
  const renderSlides: SlideItem[] = useMemo(() => {
    if (slides?.length) return slides;
    if (images?.length) {
      return images.map((i) => ({
        _id: i.id,
        img_src: i.src,
        title: i.label,
        subtitle: i.desc,
      }));
    }
    return [];
  }, [slides, images]);

  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [paused, setPaused] = useState(false);

  // Sync selected index to parent (for indicators, etc.)
  useEffect(() => {
    if (!embla || !setCurrent) return;
    const onSelect = () => setCurrent(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla, setCurrent]);

  // Jump to index when parent controls it
  useEffect(() => {
    if (!embla || current == null) return;
    embla.scrollTo(current);
  }, [embla, current]);

  // Auto-advance every intervalMs, wrap to first (loop handles wrap)
  useEffect(() => {
    if (!embla || intervalMs <= 0) return;
    if (pauseOnHover && paused) return;
    const id = setInterval(() => embla.scrollNext(), intervalMs);
    return () => clearInterval(id);
  }, [embla, intervalMs, paused, pauseOnHover]);

  if (!renderSlides.length) {
    return (
      <div className="w-full h-40 flex items-center justify-center text-sm text-gray-500">
        No images available.
      </div>
    );
  }

  const prev = () => embla?.scrollPrev();
  const next = () => embla?.scrollNext();

  const containerStyle =
    typeof heightPx === "number"
      ? { height: `${heightPx}px`, minHeight: `${Math.max(200, Math.round(heightPx * 0.6))}px` }
      : undefined;

  return (
    <div className={`flex flex-col items-center w-full ${className || ""}`}>
      <div
        className="group relative w-full rounded-2xl shadow-md"
        style={containerStyle}
        onMouseEnter={() => pauseOnHover && setPaused(true)}
        onMouseLeave={() => pauseOnHover && setPaused(false)}
      >
        {/* Embla viewport + container */}
        <div className="overflow-hidden h-full w-full rounded-2xl" ref={emblaRef}>
          <div className="flex h-full">
            {renderSlides.map((slide, idx) => (
              <div key={String(slide._id)} className="flex-[0_0_100%] min-w-0 relative h-[inherit]">
                {renderSlide ? renderSlide(slide, idx) : <AutoCarouselSlide slide={slide} priority={idx === 0} />}
              </div>
            ))}
          </div>
        </div>

        {/* Prev/Next controls (low opacity until hovered) */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="
            absolute left-3 top-1/2 -translate-y-1/2 z-20
            rounded-full p-2 shadow transition
            bg-white/70 hover:bg-white/90
            opacity-10 group-hover:opacity-100 focus-visible:opacity-100
            pointer-events-none group-hover:pointer-events-auto cursor-pointer
          "
        >
          <ChevronLeft className="w-6 h-6 text-slate-800/80" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="
            absolute right-3 top-1/2 -translate-y-1/2 z-20
            rounded-full p-2 shadow transition
            bg-white/70 hover:bg-white/90
            opacity-10 group-hover:opacity-100 focus-visible:opacity-100
            pointer-events-none group-hover:pointer-events-auto cursor-pointer
          "
        >
          <ChevronRight className="w-6 h-6 text-slate-800/80" />
        </button>
      </div>
    </div>
  );
}
