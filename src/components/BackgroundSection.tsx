"use client";
import React from "react";
import Image from "next/image";

interface BackgroundSectionProps {
  bgImg: string;
  children: React.ReactNode;
  className?: string;
  overlayClassName?: string;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({
  bgImg,
  children,
  className = "",
  overlayClassName = "bg-black/60",
}) => {
  return (
    <div className={`relative w-full flex items-center justify-center overflow-hidden ${className}`}>
      <Image
        src={bgImg}
        alt="Background section image"
        fill
        style={{ objectFit: "cover", zIndex: 0 }}
        priority
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className={`absolute inset-0 z-10 pointer-events-none ${overlayClassName}`} />
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default BackgroundSection;
