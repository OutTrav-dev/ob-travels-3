import RichHtml from "@/src/components/RichHtml";
import React from "react";
import Section from "./components/Section";

export default function AboutSection({
  html,
  text,
}: {
  html?: string;
  text?: string;
}) {
  return (
    <Section title="About This Package">
      <div className="space-y-3 text-[14px] leading-7 text-slate-800">
        <RichHtml html={html} textFallback={text} />
      </div>
    </Section>
  );
}