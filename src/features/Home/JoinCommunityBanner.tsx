"use client";
import BackgroundSection from "@/src/components/BackgroundSection";
import Section from "@/src/components/common/layout/Section";
import { useAppData } from "@/src/context/AppDataContext";
import type { CommunityBanner } from "@/types/homePage.types";
import React from "react";

const fallbackBg = "/images/joinwhatsappbanner.jpg";

const JoinCommunityBanner = () => {
  const { state } = useAppData();

  // Single, typed object with fallbacks
  const bannerData: CommunityBanner = {
    title: state.homePage?.communityBanner?.title ?? "ENJOY YOUR TRIP",
    subTitle:
      state.homePage?.communityBanner?.subTitle ?? "JOIN OUR WHATSAPP CHANNEL",
    ctaButtonText: state.homePage?.communityBanner?.ctaButtonText ?? "Join Us",
    bgImage: state.homePage?.communityBanner?.bgImage ?? fallbackBg,
    whatsappLink: state.homePage?.communityBanner?.whatsappLink ?? "#",
  };

  return (
    <Section fullWidth className="mb-8">
      <BackgroundSection bgImg={bannerData.bgImage}>
        <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto gap-4 py-20 lg:py-30">
          <h1 className="w-full text-center text-4xl md:text-5xl font-bold tracking-tight text-white">
            {bannerData.title}
          </h1>
          <h5 className="w-full text-center text-lg md:text-2xl font-bold tracking-wide text-white">
            {bannerData.subTitle}
          </h5>
          <a
            href={bannerData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-white text-black text-base lg:text-2xl px-8 lg:px-16 py-3 rounded-full font-semibold text-nowrap shadow-md active:scale-95 transition-transform duration-100"
            aria-label="Join our WhatsApp channel"
          >
            {bannerData.ctaButtonText}
          </a>
        </div>
      </BackgroundSection>
    </Section>
  );
};

export default JoinCommunityBanner;
