"use client";

import React from "react";
import Image from "next/image";
import TicketBase from "./components/TicketBase";
import { useAppData } from "@/src/context/AppDataContext";
import type { BookYourTicketsSection } from "@/types/homePage.types";
import Section from "@/src/components/common/layout/Section";

export default function BookYourTickets() {
  const { state } = useAppData();

  const data: BookYourTicketsSection | undefined =
    state.homePage?.bookYourTicketsSection;

  if (!data) return null;

  return (
    <Section
      className="
        min-h-[250px] md:min-h-[400px] lg:min-h-[550px] 
        max-h-[300px] h-[60vh]
      "
    >
      {/* SEO Hidden Heading */}
      <h1 className="sr-only">{data.title} – Outbound Travelers</h1>

      <div className="relative w-full h-full">
        <Image
          src={data.image}
          alt="Book your tickets background"
          fill
          className="object-fill object-center rounded-4xl"
          priority
          sizes="100vw"
        />

        <div className="absolute w-full z-10 flex justify-center -bottom-14 md:-bottom-17 lg:-bottom-19">
          <TicketBase tabs={data.tabs} ctaText={data.ctaButtonText} />
        </div>
      </div>
    </Section>
  );
}
