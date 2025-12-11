import React from "react";
import Section from "./components/Section";
import { WhyChoose } from "@/types/overview.types";

export default function WhyChooseUsSection({ items }: { items: WhyChoose[] }) {
  if (!items?.length) return null;
  return (
    <Section title="Why Choose Us">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((w, idx) => (
          <div key={idx} className="rounded-xl bg-slate-50/80 p-4 shadow-sm transition hover:shadow-md">
            <div className="mb-2 font-semibold">{w.title}</div>
            <ul className="m-0 grid list-none gap-2 p-0">
              {w.points.map((p, i) => (
                <li key={i} className="flex items-center gap-2 text-[14px] text-slate-900">
                  <svg className="h-5 w-5 text-emerald-600" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}