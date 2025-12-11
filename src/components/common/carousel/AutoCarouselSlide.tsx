"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlideItem } from "@/types/carousel.types";

interface AutoCarouselSlideProps {
  slide: SlideItem;
  priority?: boolean;
}

function AutoCarouselSlide({ slide, priority = false }: AutoCarouselSlideProps) {
  const titleStyle = useMemo<React.CSSProperties>(
    () => ({ color: slide.titleColor ?? "#ffffff" }),
    [slide.titleColor]
  );

  const subtitleStyle = useMemo<React.CSSProperties>(
    () => ({ color: slide.subtitleColor ?? "#ffffff" }),
    [slide.subtitleColor]
  );

  const buttonStyle = useMemo<React.CSSProperties>(
    () => ({
      backgroundColor: slide.buttonColor ?? "var(--color-primary)",
      color: slide.buttonTextColor ?? "#ffffff",
    }),
    [slide.buttonColor, slide.buttonTextColor]
  );

  const altText: string =
    slide.title ??
    slide.subtitle ??
    slide.buttonText ??
    "carousel slide";

  return (
    <div className="group relative w-full h-full overflow-hidden" aria-label={altText}>
      <div className="absolute inset-0">
        <Image
          src={slide.img_src}
          alt={altText}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, 800px"
          style={{ objectFit: "cover" }}
          className="transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
        />
      </div>

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
        {slide.title && (
          <h3 className="text-xl md:text-2xl font-semibold mb-2" style={titleStyle}>
            {slide.title}
          </h3>
        )}

        {slide.subtitle && (
          <p className="text-sm md:text-base mb-4 opacity-90" style={subtitleStyle}>
            {slide.subtitle}
          </p>
        )}

        {slide.buttonText && (
          <Link
            href={slide.link ?? "#"}
            className="text-sm md:text-base px-4 py-2 rounded-full transition-opacity hover:opacity-90"
            style={buttonStyle}
          >
            {slide.buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}

export default React.memo(AutoCarouselSlide);
