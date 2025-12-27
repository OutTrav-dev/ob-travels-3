"use client";
import React, { useState } from "react";
import Section from "../overview/components/Section";
import { Plane, PlaneTakeoff, PlaneLanding, Map } from "lucide-react";
import { ItineraryDay } from "@/types/PackageDetail.types";
import ItineraryDayCard from "./ItineraryDayCard";
import MapItineraryModal from "./MapItineraryModal";

const Itinerary: React.FC<{ days: ItineraryDay[] }> = ({ days }) => {
  const [showMap, setShowMap] = useState(false);
  console.log("Itinerary days:", days);
  if (!days?.length) return null;

  return (
    <>
      <Section
        title={`${days.length} day${days.length > 1 ? "s" : ""} Itinerary`}
        subtitle="Day-wise plan with highlights"
        actions={
          <button onClick={() => setShowMap(true)} className="btn btn-sm btn-outline gap-2">
            <Map className="h-4 w-4" />
            Show Map
          </button>
        }
      >
        {/* <div className="mb-4 flex">
          <button onClick={() => setShowMap(true)} className="btn btn-sm btn-outline gap-2">
            <Map className="h-4 w-4" />
            Show Map
          </button>
        </div> */}

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-slate-200" />
          <div className="space-y-4">
            {days.map((d, i) => {
              const isFirst = i === 0;
              const isLast = i === days.length - 1;
              const Icon = isFirst ? PlaneTakeoff : isLast ? PlaneLanding : Plane;
              return (
                <div key={d.day} className="relative flex items-start gap-6">
                  <div className="absolute left-0 top-0 flex">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 ring-1 ring-slate-300 shadow-sm">
                      <Icon className="h-5 w-5 text-[#052210]" strokeWidth={2.3} />
                    </div>
                  </div>
                  <div className="ml-16 flex-1">
                    <ItineraryDayCard item={d} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <MapItineraryModal open={showMap} onClose={() => setShowMap(false)} days={days} />
    </>
  );
}

export default Itinerary;