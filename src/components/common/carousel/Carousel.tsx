"use client";

import React, { useRef } from "react";
import ViewAllLink from "../layout/ViewAllLink";

interface CarouselProps<T> {
  items: T[];
  renderCard: (item: T, index: number) => React.ReactNode; // card renderer
  title?: string;
  className?: string;
  viewAll?: string;
}

const Carousel = <T,>({
  items,
  renderCard,
  title,
  className = "",
  viewAll,
}: CarouselProps<T>) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) return;
    container.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`relative group ${className}`}
      aria-labelledby={title ? "carousel-title" : undefined}
    >
      <div className="flex items-center justify-between mb-3">
        {title && (
          <h2 id="carousel-title" className="text-2xl font-bold text-gray-900">
            {title}
          </h2>
        )}

        {viewAll && <ViewAllLink viewAll={viewAll} />}
      </div>

      <div className="relative w-full">
        <div
          ref={carouselRef}
          className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
        >
          {items.map((item, index) => (
            <div key={index} className="snap-start shrink-0 flex-none my-3">
              {renderCard(item, index)}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scrollByCard("left")}
          className="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 z-10"
          aria-label="Previous"
        >
          ❮
        </button>

        <button
          onClick={() => scrollByCard("right")}
          className="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 z-10"
          aria-label="Next"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default Carousel;
