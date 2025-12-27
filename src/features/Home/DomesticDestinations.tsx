"use client";

import CollageGrid from "@/src/components/common/grid/CollageGrid";
import Section from "@/src/components/common/layout/Section";
import { useAppData } from "@/src/context/AppDataContext";
import type { DestinationCard, CollageItem } from "@/types/homePage.types";

const DomesticDestinations = () => {
  const { state } = useAppData();

  const data: DestinationCard[] = state.homePage?.domesticDestinations ?? [];
  const items: CollageItem[] = data.map((d) => ({
    title: d.title ?? d.name ?? "Destination",
    price: d.price ?? "₹NA/-",
    img: d.img ?? d.image ?? "",
    size: d.size ?? 3,
    destination: d.destination,
  }));

  return (
    <Section
      title="DOMESTIC DESTINATIONS"
      viewAllUrl="/destinations?type=domestic"
    >
      <div className="">
        <CollageGrid items={items} />
      </div>
    </Section>
  );
};

export default DomesticDestinations;
