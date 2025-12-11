"use client";

import { SlideItem } from "@/types/carousel.types";
import OverlayCountThumbnail from "./OverlayCountThumbnail";
import ThumbnailItem from "./ThumbnailItem";

export default function ThumbnailsGrid({ slides }: { slides: SlideItem[] }) {
  const total = slides.length;
  const hasOverflow = total > 4;
  const baseThumbs = hasOverflow ? slides.slice(0, 3) : slides.slice(0, 4);
  const overlayThumb = hasOverflow ? slides[3] : null;
  const remainingCount = hasOverflow ? total - 4 : 0;

  return (
    <aside
      className="grid grid-cols-2 grid-rows-2 gap-3 h-full"
      aria-label="Additional previews"
    >
      {baseThumbs.map((s) => (
        <ThumbnailItem key={String(s._id)} slide={s} />
      ))}
      {overlayThumb && (
        <OverlayCountThumbnail slide={overlayThumb} count={remainingCount} />
      )}
    </aside>
  );
}