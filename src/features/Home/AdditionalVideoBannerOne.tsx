"use client";

import React from "react";
import VideoCard from "../../components/VideoCard";
import { useAppData } from "@/src/context/AppDataContext";
import Section from "@/src/components/common/layout/Section";

const AdditionalVideoBannerOne = () => {
  const { state } = useAppData();

  const videoConfig = state.homePage?.videoCardData;

  if (!videoConfig) return null;

  return (
    <Section fullWidth>
      <VideoCard config={videoConfig} />
    </Section>
  );
};

export default AdditionalVideoBannerOne;
