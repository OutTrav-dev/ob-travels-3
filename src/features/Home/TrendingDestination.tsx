"use client";

import ShowcaseCarousel from "@/src/components/common/carousel/ShowcaseCarousel";
import Section from "@/src/components/common/layout/Section";
import { useAppData } from "@/src/context/AppDataContext";
import type { TrendingDestinationItem } from "@/types/homePage.types";

export default function TrendingDestination() {
  const { state } = useAppData();

  const items: TrendingDestinationItem[] =
    (state.homePage?.trendingDestinations ?? []).map((d) => ({
      ...d,
      tagLine: d.tagLine ?? "Trending now",
      locale: d.locale ?? "en",
    }));

  return (
    <Section title="TRENDING DESTINATIONS" viewAllUrl="/destinations" noSpace className="mt-10">
      <div className="w-full overflow-x-hidden">

      <ShowcaseCarousel items={items} className="py-8" showDots />
      </div>
    </Section>
  );
}
