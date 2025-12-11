import React from "react";
import Section from "./components/Section";
import { PolicyItem } from "@/types/overview.types";

export default function CancellationPolicySection({ items }: { items: PolicyItem[] }) {
  console.log("CancellationPolicySection items:", items);
  if (!items?.length) return null;

  const getMeta = (info: string, detail: string) => {
    const pctMatch = /(\d{1,3})%/.exec(info) || /(\d{1,3})%/.exec(detail);
    let pct = pctMatch ? parseInt(pctMatch[1], 10) : undefined;

    if (pct === undefined) {
      if (/no refund|not refundable/i.test(info + detail)) pct = 0;
      else if (/free|full/i.test(info + detail)) pct = 100;
      else if (/50|half/i.test(info + detail)) pct = 50;
    }
    if (pct === undefined) pct = 0;

    const emoji = pct >= 100 ? "😍" : pct >= 50 ? "😃" : "😕";
    return { emoji };
  };

  return (
    <Section title="Cancellation Policy" subtitle="Refund timeline & conditions">
      <ul className="steps steps-vertical w-full pr-4">   {/* ⭐ FIX: Add right padding */}
        {items.map((p, i) => {
          const { emoji } = getMeta(p.info, p.detail);

          return (
            <li
              key={i}
              className="step"
              data-content={emoji}
            >
              <div className="mb-4 w-full rounded-lg bg-slate-50 p-3 shadow-sm ring-1 ring-slate-200 text-left">
                <div className="mb-1 text-[14px] font-semibold text-slate-900">
                  {p.info}
                </div>
                <p className="text-[13px] leading-relaxed text-slate-600">
                  {p.detail}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
