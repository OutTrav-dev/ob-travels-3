"use client";

import React from "react";
import { format } from "date-fns";

function toNumber(v: string | undefined, fallback: number) {
  const n = parseFloat(v ?? "");
  return Number.isFinite(n) ? n : fallback;
}

export default function BookingSummary({
  currency,
  pricePerPerson,
  adults,
  child,
  start,
  end,
}: {
  currency: string;
  pricePerPerson: number;
  adults: number;
  child: number;
  start?: Date;
  end?: Date;
}) {
  // From env: adults full (1), children half (0.5) by default
  const adultMultiplier = toNumber(process.env.NEXT_PUBLIC_ADULT_MULTIPLIER, 1);
  const childMultiplier = toNumber(process.env.NEXT_PUBLIC_CHILD_MULTIPLIER, 0.5);

  const adultTotal = pricePerPerson * adultMultiplier * adults;
  const childTotal = pricePerPerson * childMultiplier * child;
  const total = adultTotal + childTotal;

  return (
    <div className="rounded-lg bg-slate-50 p-3 text-[11px] text-slate-600 space-y-1">
      <div>
        Est. base total: {currency}
        {Math.round(total).toLocaleString("en-IN")}
      </div>
      <div>
        {adults} adult{adults !== 1 ? "s" : ""}
        {child > 0 && `, ${child} child${child !== 1 ? "ren" : ""}`}
      </div>
      {start && end && (
        <div>
          {format(start, "dd MMM")} – {format(end, "dd MMM")}
        </div>
      )}
    </div>
  );
}