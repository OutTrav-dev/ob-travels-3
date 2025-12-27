import React from "react";
import { Check } from "lucide-react";
import Section from "./components/Section";

export default function HighlightsSection({
  highlights,
}: {
  highlights: string[];
}) {
  if (!highlights?.length) return null;
  return (
    <Section title="Highlights" subtitle="What makes this trip special">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {highlights.map((h, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-xl bg-emerald-50/70 p-3 shadow-sm ring-1 ring-emerald-100 transition hover:shadow-md"
          >
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-100 text-emerald-700">
              <Check className="h-5 w-5" />
            </span>
            <span className="text-[14px]">{h}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}