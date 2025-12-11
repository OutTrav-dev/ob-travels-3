"use client";

import React from "react";
import Image from "next/image";

interface TicketBaseProps {
  tabs: string[];
  ctaText: string;
}

export default function TicketBase({ tabs, ctaText }: TicketBaseProps) {
  return (
    <div
      className="
        relative w-[75%] flex flex-col items-center 
        bg-[#052210] py-4 px-4 lg:px-15 gap-4 lg:gap-8 
        rounded-3xl lg:rounded-4xl overflow-hidden
      "
    >
      {/* Background Overlay */}
      <Image
        src="/images/obdottedworldbg.png"
        alt="Decorative world map pattern"
        fill
        priority
        className="object-cover opacity-20 z-0 pointer-events-none"
        sizes="(max-width: 1024px) 75vw, 900px"
      />

      {/* Left white circle */}
      <div className="absolute h-8 lg:h-10 w-8 lg:w-10 bg-white rounded-full -left-5 top-10 lg:top-14 z-10" />

      {/* Tabs */}
      <nav
        aria-label="Ticket booking categories"
        className="w-full flex justify-between items-center text-white font-bold text-xs md:text-xl z-10"
      >
        {tabs.map((tab) => (
          <span
            key={tab}
            className="cursor-pointer hover:opacity-80"
            role="button"
          >
            {tab}
          </span>
        ))}
      </nav>

      {/* Right white circle */}
      <div className="absolute h-8 lg:h-10 w-8 lg:w-10 bg-white rounded-full -right-5 top-10 lg:top-14 z-10" />

      {/* CTA Button */}
      <button
        className="
          bg-white text-black text-xs lg:text-base 
          px-4 lg:px-10 py-2 rounded-full 
          font-semibold text-nowrap z-10
        "
        aria-label={ctaText}
      >
        {ctaText}
      </button>
    </div>
  );
}
