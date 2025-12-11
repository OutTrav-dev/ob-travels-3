import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function IncludesList({ items }: { items: string[] }) {
  return (
    <section aria-label="Included features">
      <div className="mb-2 text-[12px] font-semibold uppercase tracking-wide text-slate-500">
        What’s included
      </div>
      <ul className="grid grid-cols-2 gap-2 m-0 p-0 list-none text-[13px] text-slate-700">
        {items.map((inc, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
            <span>{inc}</span>
          </li>
        ))}
      </ul>
      <div className="divider my-4" />
    </section>
  );
}