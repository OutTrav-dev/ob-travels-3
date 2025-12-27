"use client";
import Section from "@/src/components/common/layout/Section";
import { useAppData } from "@/src/context/AppDataContext";
import React from "react";

const TopCelebs = () => {
  const { state } = useAppData();

  const data = state.homePage?.topCelebrities;
  if (!data) return null;
  return (
    <Section className="bg-[#E6FFF0] py-10">
      <div className="flex flex-row gap-6 lg:gap-20 lg:mx-20">
        <div className="w-1/2 flex flex-col items-center ">
          <h2 className="h-full flex items-center text-3xl sm:text-3xl md:text-5xl lg:text-6xl w-full text-left font-bold text-[#052210] mb-1 sm:mb-2">
            {data.left.title}
          </h2>

          <div className="w-full">
            <video
              src={data.left.videoUrl}
              className="object-cover rounded-2xl w-full max-h-30 md:max-h-60 lg:max-h-90 h-full"
              style={{ objectFit: "cover", borderRadius: "1rem" }}
              controls
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <video
            src={data.right.videoUrl}
            className="object-cover rounded-2xl w-full max-h-60 md:max-h-80 lg:max-h-150 h-full"
            style={{ objectFit: "cover", borderRadius: "1rem" }}
            controls
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </Section>
  );
};

export default TopCelebs;
