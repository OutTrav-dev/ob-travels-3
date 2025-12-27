"use client";

import React from "react";

export type FilterOptionValue =
  | string
  | number
  | (string | number)[]
  | Record<string, unknown>;

export type FilterOption = {
  label: string;
  value: FilterOptionValue;
};

export type FilterGroup = {
  key: string;
  label: string;
  options: FilterOption[];
};

export type FilterValue = FilterOptionValue | undefined;

type Props = {
  filters: FilterGroup[];
  values?: Record<string, FilterValue>;
  onChange?: (filterKey: string, value: FilterValue) => void;
  className?: string;
};

const FilterBar: React.FC<Props> = ({
  filters,
  values = {},
  onChange,
  className = "",
}) => {
  return (
    <div className={"mb-5 overflow-x-auto mx-auto whitespace-nowrap lg:whitespace-normal " + className}>
      <div className="inline-flex lg:grid gap-3 lg:gap-4 w-fit lg:grid-cols-4 mb-1">
        {filters.map(({ key, label, options }) => {
          const selectedValue = values[key];

          // convert to string for select
          const stringValue =
            typeof selectedValue === "string"
              ? selectedValue
              : selectedValue !== undefined
              ? JSON.stringify(selectedValue)
              : "";

          const hasValue = Boolean(stringValue);

          // find label to display
          const selectedOption = options.find(
            (opt) =>
              (typeof opt.value === "string" && opt.value === stringValue) ||
              JSON.stringify(opt.value) === stringValue
          );

          const displayLabel = selectedOption?.label ?? label;

          return (
            <div key={key} className="min-w-[140px] inline-block align-top relative">
              <select
                value={stringValue}
                onChange={(e) => {
                  let parsed: FilterValue = e.target.value;

                  try {
                    parsed = JSON.parse(e.target.value);
                  } catch {
                    // keep as string
                  }

                  onChange?.(key, parsed);
                }}
                className={[
                  "w-full rounded-full px-3 py-2 text-sm font-semibold bg-white/70",
                  "shadow-inner backdrop-blur-md appearance-none truncate overflow-hidden text-ellipsis pr-8 transition-all",

                  hasValue
                    ? "border border-emerald-500 ring-1 ring-emerald-300 shadow shadow-emerald-200"
                    : "border border-black/40"
                ].join(" ")}
              >
                <option value="" disabled hidden>
                  {displayLabel}
                </option>

                {options.map((opt) => (
                  <option
                    key={opt.label}
                    value={
                      typeof opt.value === "string"
                        ? opt.value
                        : JSON.stringify(opt.value)
                    }
                    className="truncate"
                  >
                    {opt.label}
                  </option>
                ))}
              </select>

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#052210] text-xs opacity-70">
                ▼
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
