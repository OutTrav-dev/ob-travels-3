"use client";

import { VideoCardConfig } from "@/types/homePage.types";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface VideoCardProps {
  config: VideoCardConfig;
  className?: string;
}

export default function VideoCard({ config, className = "" }: VideoCardProps) {
  const {
    videoSrc,
    videoSources,
    poster,
    heading,
    subheading,
    description,
    ctaText,
    ctaHref,
    colors,
    size,
    align = "center",
  } = config;

  const {
    heading: headingColor = "#111827",
    subheading: subheadingColor = "#374151",
    description: descriptionColor = "#4B5563",
    ctaBg = "#082A7B",
    ctaText: ctaTextColor = "#FFFFFF",
    overlayFrom = "",
    overlayTo = "",
  } = colors || {};

  const { height = "460px", minHeight = "380px" } = size || {};

  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // Only animate text (slower upward slide)
  const TEXT_DELAY_MS = 250;
  const TEXT_DURATION_MS = 1200;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const onLoaded = () => {
      setVideoReady(true);
      const p = v.play();
      if (p && p.catch) {
        p.catch(() => {
          v.muted = true;
          setTimeout(() => v.play().catch(() => {}), 200);
        });
      }
    };
    v.addEventListener("loadeddata", onLoaded);
    v.addEventListener("playing", onLoaded);
    return () => {
      v.removeEventListener("loadeddata", onLoaded);
      v.removeEventListener("playing", onLoaded);
    };
  }, []);

  const alignmentClasses =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <section
      ref={containerRef}
      className={`relative w-full shadow-sm border border-neutral-200 ${className}`}
      style={{ height, minHeight }}
      aria-label={heading}
    >
      {/* Media wrapper keeps overflow clipping; section itself no overflow-hidden */}
      <div className="absolute inset-0 overflow-hidden">
        {(videoSrc || (videoSources && videoSources.length > 0)) && (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            playsInline
            webkit-playsinline="true"
            loop
            preload="auto"
            poster={poster}
            disablePictureInPicture
            controls={false}
            controlsList="nodownload noplaybackrate nofullscreen"
          >
            {videoSources && videoSources.length
              ? videoSources.map((s) => (
                  <source key={s.src} src={s.src} type={s.type} />
                ))
              : videoSrc && <source src={videoSrc} type="video/mp4" />}
          </video>
        )}
        {!videoReady && poster && (
          <Image
            src={poster}
            alt={heading || ""}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        )}
        <div
          className="absolute inset-0"
          style={{
            background: `${
              overlayFrom
                ? `linear-gradient(to top, ${overlayFrom}, ${overlayTo})`
                : "transparent"
            }`,
          }}
        />
      </div>

      {/* Text animation (reduced initial translate to avoid clipping) */}
      <div
        className={`
          relative h-full w-full flex flex-col justify-end px-6 sm:px-10 pb-12 gap-3 ${alignmentClasses}
          transition-[opacity,transform] ease-out
        `}
        style={{
          transitionDelay: isVisible ? `${TEXT_DELAY_MS}ms` : "0ms",
          transitionDuration: `${TEXT_DURATION_MS}ms`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(2.5rem)",
        }}
      >
        <h2
          className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight"
          style={{ color: headingColor }}
        >
          {heading}
        </h2>
        {subheading && (
          <p
            className="text-sm sm:text-base font-medium"
            style={{
              color: subheadingColor,
              transition: "opacity 900ms ease-out, transform 900ms ease-out",
              transitionDelay: isVisible ? `${TEXT_DELAY_MS + 150}ms` : "0ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(1rem)",
            }}
          >
            {subheading}
          </p>
        )}
        {description && (
          <p
            className="text-xs sm:text-sm max-w-2xl leading-relaxed"
            style={{
              color: descriptionColor,
              transition: "opacity 900ms ease-out, transform 900ms ease-out",
              transitionDelay: isVisible ? `${TEXT_DELAY_MS + 300}ms` : "0ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(1rem)",
            }}
          >
            {description}
          </p>
        )}
        {ctaHref && (
          <div
            className="mt-2"
            style={{
              transition: "opacity 900ms ease-out, transform 900ms ease-out",
              transitionDelay: isVisible ? `${TEXT_DELAY_MS + 450}ms` : "0ms",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(1rem)",
            }}
          >
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-medium text-sm shadow-sm hover:shadow-md transition active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ backgroundColor: ctaBg, color: ctaTextColor }}
            >
              {ctaText}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
