"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ShowcaseItem {
  id: string;
  name: string;
  tagLine?: string;
  locale?: string;
  image: string;
}

interface ShowcaseCarouselProps {
  items: ShowcaseItem[];
  title?: string;
  showMeta?: boolean;
  showDots?: boolean;
  className?: string;
  fallbackImage?: string;
  onActiveChange?: (item: ShowcaseItem, index: number) => void;
}

const DEFAULT_FALLBACK =
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop";

export default function ShowcaseCarousel({
  items,
  title,
  showMeta = false,
  showDots = false,
  className = "",
  fallbackImage = DEFAULT_FALLBACK,
  onActiveChange,
}: ShowcaseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const updateCarousel = useCallback(
    (newIndex: number) => {
      if (isAnimating || items.length === 0) return;
      setIsAnimating(true);
      const idx = (newIndex + items.length) % items.length;
      setCurrentIndex(idx);
      onActiveChange?.(items[idx], idx);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating, items, onActiveChange]
  );

  // --- AUTOPLAY ---
  useEffect(() => {
    if (items.length <= 1) return;
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      updateCarousel(currentIndex + 1);
    }, 3500); // 3.5 seconds per slide
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex, items.length, updateCarousel]);
  // ---

  const getClass = (i: number) => {
    const diff = (i - currentIndex + items.length) % items.length;
    if (isMobile) {
      switch (diff) {
        case 0:
          return "z-40 scale-[1.15] opacity-100";
        case 1:
          return "z-30 translate-x-[120px] scale-[0.92]";
        case 2:
          return "z-20 translate-x-[180px] scale-[0.80]";
        case items.length - 1:
          return "z-30 -translate-x-[120px] scale-[0.92]";
        case items.length - 2:
          return "z-20 -translate-x-[180px] scale-[0.80]";
        default:
          return "opacity-0 pointer-events-none";
      }
    }
    switch (diff) {
      case 0:
        return "z-40 scale-[1.3] opacity-100";
      case 1:
        return "z-30 translate-x-[250px] xl:translate-x-[280px] scale-[1] xl:scale-[1]";
      case 2:
        return "z-20 translate-x-[450px] xl:translate-x-[520px] scale-[0.80] xl:scale-[0.85]";
      case 3:
        return "z-10 translate-x-[610px] xl:translate-x-[710px] scale-[0.60] xl:scale-[0.60]";
      case items.length - 1:
        return "z-30 -translate-x-[250px] xl:-translate-x-[280px] scale-[1] xl:scale-[1]";
      case items.length - 2:
        return "z-20 -translate-x-[450px] xl:-translate-x-[520px] scale-[0.80] xl:scale-[0.85]";
      case items.length - 3:
        return "z-10 -translate-x-[610px] xl:-translate-x-[710px] scale-[0.60] xl:scale-[0.60]";
      default:
        return "opacity-0 pointer-events-none";
    }
  };

  const prev = () => updateCarousel(currentIndex - 1);
  const next = () => updateCarousel(currentIndex + 1);
  const goTo = (i: number) => updateCarousel(i);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  let touchStart = 0;
  let touchEnd = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart = e.changedTouches[0].screenX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEnd = e.changedTouches[0].screenX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  const active = items[currentIndex];

  return (
    <div
      className={`w-full flex flex-col items-center select-none ${className}`}
    >
      {title && (
        <h1
          className="
          text-3xl md:text-5xl font-extrabold tracking-tight mb-6
          bg-linear-to-b from-[#052210] via-[#05221056] to-[#0522100b]
          bg-clip-text text-transparent leading-[1.15]
          transform-[scaleY(1.9)] origin-top
        "
        >
          {title}
        </h1>
      )}

      <div
        className="relative w-full max-w-[1200px] h-[150px] sm:h-[250px] lg:h-[300px] flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2  text-[#052210] w-10 h-10 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition z-30 cursor-pointer"
        >
          <ChevronLeft />
        </button>

        <div className="relative w-full h-full flex items-center justify-center">
          {items.map((d, i) => (
            <div
              key={d.id}
              onClick={() => goTo(i)}
              className={`absolute
                w-[120px] h-40
                sm:w-[200px] sm:h-[200px]
                md:w-[200px] md:h-[200px]
                xl:w-[230px] xl:h-[230px]
                rounded-xl overflow-hidden shadow-xl cursor-pointer
                transition-all duration-500 ease-[cubic-bezier(.25,.46,.45,.94)]
                ${getClass(i)}
              `}
            >
              <Image
                src={d.image}
                alt={d.name}
                fill
                className="object-cover"
                onError={(e) => {
                  const tgt = e.target as HTMLImageElement;
                  if (tgt.src !== fallbackImage) tgt.src = fallbackImage;
                }}
                priority={i === currentIndex}
              />
            </div>
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#052210] w-10 h-10 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition z-30 cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>

      {showMeta && active && (
        <div className="text-center transition-all duration-500">
          <h2 className="text-2xl md:text-3xl font-bold text-[#052210]">
            {active.name}
          </h2>
          {active.tagLine && <p className="text-gray-500">{active.tagLine}</p>}
          {active.locale && (
            <p className="text-xs text-gray-400 uppercase mt-1">
              {active.locale}
            </p>
          )}
        </div>
      )}

      {showDots && (
        <div className="mt-10 lg:mt-5 xl:mt-5 flex gap-3">
          {items.map((d, i) => (
            <button
              key={d.id}
              onClick={() => goTo(i)}
              aria-label={`Go to ${d.name}`}
              aria-pressed={i === currentIndex}
              className={`w-2 h-2 rounded-full transition ${
                i === currentIndex
                  ? "bg-[#052210] scale-125"
                  : "bg-[#5c8f70]/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
