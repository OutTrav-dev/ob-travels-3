"use client";
import React from "react";
import dynamic from "next/dynamic";
import type { Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export interface DateRangePickerProps {
  value: Range[];
  onChange: (next: Range[]) => void;
  months?: number;
  direction?: "horizontal" | "vertical";
  rangeColors?: string[];
  minDate?: Date;
  showDateDisplay?: boolean;
  className?: string;
}

const BaseDateRange = dynamic(
  () => import("react-date-range").then((m) => m.DateRange),
  { ssr: false }
);

export default function DateRangePicker({
  value,
  onChange,
  months = 1,
  direction = "horizontal",
  rangeColors = ["#052210"],
  minDate = new Date(),
  showDateDisplay = false,
  className = "",
}: DateRangePickerProps) {
  return (
    <div className={className}>
      <BaseDateRange
        ranges={value}
        onChange={(r: RangeKeyDict) => {
          if (r.selection) onChange([r.selection]);
        }}
        moveRangeOnFirstSelection={false}
        months={months}
        direction={direction}
        rangeColors={rangeColors}
        minDate={minDate}
        showDateDisplay={showDateDisplay}
      />
    </div>
  );
}