import React from "react";
import { ShieldCheck, CheckCircle2, MessageCircle } from "lucide-react";

export default function MetaList({
  cancellationNote,
  instantConfirm,
  support,
}: {
  cancellationNote: string;
  instantConfirm: string;
  support: string;
}) {
  return (
    <section aria-label="Guarantees" className="mt-4">
      <ul className="m-0 list-none space-y-2 p-0 text-[13px] text-slate-700">
        <li className="flex items-start gap-2">
          <ShieldCheck className="mt-0.5 h-4 w-4 text-emerald-600" />
          <span>{cancellationNote}</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
          <span>{instantConfirm}</span>
        </li>
        <li className="flex items-start gap-2">
          <MessageCircle className="mt-0.5 h-4 w-4 text-indigo-600" />
          <span>{support}</span>
        </li>
      </ul>
      <div className="divider my-4" />
    </section>
  );
}