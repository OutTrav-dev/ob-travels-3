"use client";

import React from "react";
import { CalendarRange } from "lucide-react";
import { addDays, format } from "date-fns";
import type { Range } from "react-date-range";
import Popover from "./Popover";
import DateRangePicker from "./DateRangePicker";

export default function DateRangeField({
  value,
  onChange,
  label = "Date Range",
}: {
  value: Range[];
  onChange: (next: Range[]) => void;
  label?: string;
}) {
  const start = value[0]?.startDate;
  const end = value[0]?.endDate;
  const labelText =
    start && end ? `${format(start, "yyyy-MM-dd")} → ${format(end, "yyyy-MM-dd")}` : "Select date range";

  return (
    <div className="space-y-1">
      <label className="text-[11px] font-medium uppercase tracking-wide text-slate-600 flex items-center gap-1">
        <CalendarRange className="h-4 w-4 text-blue-600" />
        {label}
      </label>

      <Popover
        side="bottom"
        align="start"
        // matchTriggerWidth
        className="p-2"
        trigger={(t) => (
          <button
            ref={t.ref}
            type="button"
            onClick={t.onClick}
            aria-expanded={t["aria-expanded"]}
            className="btn btn-sm btn-outline w-full justify-between"
          >
            <span className="truncate text-xs">{labelText}</span>
            <span className="text-[10px] text-slate-500">
              {t["aria-expanded"] ? "Close" : "Pick"}
            </span>
          </button>
        )}
      >
        {(close) => (
          <div className="">
            <DateRangePicker value={value} onChange={onChange} months={1} rangeColors={["#052210"]} />
            <div className="mt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() =>
                  onChange([{ startDate: new Date(), endDate: addDays(new Date(), 3), key: "selection" }])
                }
                className="btn btn-ghost btn-xs"
              >
                Reset
              </button>
              <button type="button" onClick={close} className="btn btn-primary btn-xs">
                Apply
              </button>
            </div>
          </div>
        )}
      </Popover>
    </div>
  );
}
