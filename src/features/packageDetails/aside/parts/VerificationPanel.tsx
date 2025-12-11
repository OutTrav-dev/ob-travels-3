import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function VerificationPanel() {
  return (
    <section
      aria-label="Verification"
      className="rounded-lg bg-white p-3 ring-1 ring-slate-200 mb-4"
    >
      <div className="mb-2 flex items-center gap-2 text-[12px] text-slate-600">
        <ShieldCheck className="h-4 w-4 text-emerald-600" />
        <span>Verified operator • licensed & insured</span>
      </div>
      <div className="flex items-center gap-2 text-[12px] text-slate-600">
        <CheckCircle2 className="h-4 w-4 text-blue-600" />
        <span>Best price guarantee • no hidden fees</span>
      </div>
      {/* <div className="divider my-4" /> */}
    </section>
  );
}