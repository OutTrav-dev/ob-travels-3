import SlideUpReveal from "@/src/components/common/animation/SlideUpReveal";
import React from "react";
import StatGrid from "./components/StatGrid";
import ShortDescription from "./ShortDescription";
import AboutSection from "./AboutSection";
import HighlightsSection from "./HighlightsSection";
import AmenitiesSection from "./AmenitiesSection";
import WhyChooseUsSection from "./WhyChooseUsSection";
import CancellationPolicySection from "./CancellationPolicySection";
import { OverviewProps } from "@/types/overview.types";

const Overview: React.FC<OverviewProps> = ({
  shortDescription,
  stats,
  longDescription,
  highlights,
  amenities,
  whyChooseUs,
  cancellationPolicy,
}) => {
  return (
    <>
      <SlideUpReveal delayMs={200}>
        <StatGrid stats={stats ?? []} />
      </SlideUpReveal>

      <SlideUpReveal delayMs={200}>
        <ShortDescription html={shortDescription} />
      </SlideUpReveal>

      <SlideUpReveal delayMs={200}>
        <AboutSection text={longDescription} />
      </SlideUpReveal>

      <SlideUpReveal delayMs={200}>
        <HighlightsSection highlights={highlights ?? []} />
      </SlideUpReveal>

      <SlideUpReveal delayMs={200}>
        <AmenitiesSection amenities={amenities ?? []} />
      </SlideUpReveal>

      <SlideUpReveal delayMs={200}>
        <WhyChooseUsSection items={whyChooseUs ?? []} />
      </SlideUpReveal>

      <SlideUpReveal delayMs={200}>
        <CancellationPolicySection items={cancellationPolicy ?? []} />
      </SlideUpReveal>
    </>
  );
};

export default Overview;
