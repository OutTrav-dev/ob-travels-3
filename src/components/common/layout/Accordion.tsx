"use client";
import React, { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  headingClassName?: string;
  controlledOpen?: boolean;
  onToggle?: (open: boolean) => void;
}

export default function Accordion({
  title,
  subtitle,
  children,
  defaultOpen = false,
  className = "",
  headingClassName = "",
  onToggle,
}: AccordionProps) {
  const id = useId();
  const [open, setOpen] = useState(defaultOpen);

  function toggle() {
    const next = !open;
    setOpen(next);
    onToggle?.(next);
  }

  return (
    <div
      className={`collapse rounded-xl bg-white/70 text-left shadow-sm ring-1 ring-slate-200 ${className} ${
        open ? "collapse-open" : "collapse-close"
      }`}
    >
      <input
        id={id}
        type="checkbox"
        checked={open}
        onChange={toggle}
        className="cursor-pointer"
        aria-expanded={open}
        aria-controls={id + "-content"}
      />
      <div
        className={`collapse-title flex items-start justify-between gap-2 px-4 py-3 cursor-pointer select-none ${headingClassName}`}
        onClick={toggle}
      >
        <div className="min-w-0">
          <div
            className={`text-[14px] font-semibold leading-tight text-slate-900 ${
              open ? "whitespace-normal wrap-break-word" : "truncate"
            }`}
          >
            {title}
          </div>
          {subtitle && (
            <div className="mt-0.5 text-[12px] leading-5 text-slate-500">
              {subtitle}
            </div>
          )}
        </div>
        <ChevronDown
          className={`mt-0.5 h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      <div id={id + "-content"} className="collapse-content px-4 pt-0 pb-0">
        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            open ? "max-h-[2000px] opacity-100 pb-4" : "max-h-0 opacity-0 pb-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}