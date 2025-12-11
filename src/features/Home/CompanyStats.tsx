"use client";

import BackgroundSection from "@/src/components/BackgroundSection";
import Section from "@/src/components/common/layout/Section";
import { useAppData } from "@/src/context/AppDataContext";
import React, { useEffect, useRef, useState } from "react";
import { useCounter } from "@/src/hooks/useCounter";
import type { CompanyStats } from "@/types/homePage.types";

const fallbackBgImg = "/images/statsbgimg.png";

const CompanyStats = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [startCounting, setStartCounting] = useState(false);

  const { state } = useAppData();

  const data = state.homePage?.companyStats as CompanyStats| undefined;

  const yearsTarget = Number(data?.left?.value ?? 3);
  const clientsTarget = Number(data?.right?.value ?? 10000);

  const years = useCounter(0, startCounting ? yearsTarget : 0, 1500);
  const clients = useCounter(0, startCounting ? clientsTarget : 0, 1200);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStartCounting(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section fullWidth>
      <BackgroundSection bgImg={data?.bgImg || fallbackBgImg}>
        <div
          ref={containerRef}
          className="relative z-20 w-full h-full flex flex-row items-center justify-between max-w-4xl mx-auto px-6 py-20"
        >
          {/* LEFT STAT */}
          <div className="flex flex-col gap-2">
            <span className="text-lg md:text-3xl font-semibold tracking-widest text-white">
              {data?.left?.label || "YEARS OF EXPERIENCE"}
            </span>
            <span className="text-3xl md:text-6xl font-bold text-yellow-400">
              {years}+
            </span>
          </div>

          {/* RIGHT STAT */}
          <div className="flex flex-col gap-2">
            <span className="text-lg md:text-xl font-semibold tracking-widest text-white">
              {data?.right?.label || "SATISFIED CLIENTS"}
            </span>
            <span className="text-3xl md:text-6xl font-bold text-yellow-400">
              {clients.toLocaleString()}+
            </span>
          </div>
        </div>
      </BackgroundSection>
    </Section>
  );
};

export default CompanyStats;
