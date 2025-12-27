import type React from "react";

export type SlideItem = {
  _id: string | number;
  img_src: string;
  title?: string;
  subtitle?: string;
  alt?: string;
  titleColor?: string;
  subtitleColor?: string;
  buttonText?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  link?: string;
};

export type ImageItem = {
  id: string;
  src: string;
  label?: string;
  desc?: string;
};

export type RenderSlideFn = (slide: SlideItem, index: number) => React.ReactNode;

export interface AutoCarouselProps {
  slides?: SlideItem[];
  images?: ImageItem[];
  current?: number;
  setCurrent?: React.Dispatch<React.SetStateAction<number>>;
  intervalMs?: number;
  pauseOnHover?: boolean;
  heightPx?: number;
  className?: string;
  renderSlide?: RenderSlideFn; // parent-provided slide renderer
}