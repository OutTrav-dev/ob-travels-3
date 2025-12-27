"use client";

import { useAppData } from "@/src/context/AppDataContext";
import React, { useState } from "react";
import StatsStrip from "./components/StatsStrip";
import Image from "next/image";

const HeroBanner = () => {
  const { state } = useAppData();
  const [videoError, setVideoError] = useState<boolean>(false);

  const hero = state.homePage?.heroBanner;

  if (!hero) return null;

  const d = hero.design;
  


  return (
    <section
      className={`relative flex flex-col justify-center items-center text-white overflow-hidden w-full h-[60vh] md:h-[65vh] lg:h-[calc(100vh-72px)]`}
      style={{ fontFamily: d.fontFamily }}
    >
      {/* 🎥 Background Video or Fallback Image */}
      {!videoError ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster={"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D"}
          onError={() => setVideoError(true)}
        >
          {d.videoSources.map((srcObj) => (
            <source key={srcObj.type} src={srcObj.src} type={srcObj.type} />
          ))}
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src={"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D"}
          alt="Travel destination background"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover"
          priority
        />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 ${d.overlayClass}`} />

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center px-4 py-12 z-10 w-3/4">
        <h1 className={`${d.titleClasses} text-white drop-shadow-lg text-center`}>
          {d.title}
        </h1>
        <p
          className={`${d.subTitleClasses} text-white/90 max-w-2xl mx-auto text-center`}
        >
          {d.subTitle}
        </p>
      </div>

      {/* Stats Strip */}
      <div className="max-w-[90%] w-full mx-auto absolute bottom-0">
        <StatsStrip />
      </div>
    </section>
  );
};

export default HeroBanner;
