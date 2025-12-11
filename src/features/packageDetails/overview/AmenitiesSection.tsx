import React from "react";
import Section from "./components/Section";
import AmenityIcon from "./components/AmenityIcon";

export default function AmenitiesSection({ amenities }: { amenities: string[] }) {
  if (!amenities?.length) return null;
  return (
    <Section title="Amenities" subtitle="Included comforts and services">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {amenities.map((a, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg bg-slate-50 p-2.5 shadow-sm transition hover:bg-slate-100 hover:shadow-md"
            title={a}
          >
            <div className="grid h-7 w-7 place-items-center rounded-md bg-indigo-50 ring-1 ring-indigo-100">
              <AmenityIcon name={a} />
            </div>
            <div className="text-[13px]">{a}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}