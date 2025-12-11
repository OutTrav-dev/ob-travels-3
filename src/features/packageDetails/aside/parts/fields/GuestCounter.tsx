import React from "react";
export default function GuestCounter({
  label,
  value,
  setValue,
  min = 0,
  max = 99,
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium text-slate-600">{label}</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setValue(Math.max(min, value - 1))}
          disabled={value <= min}
          className="btn btn-xs btn-outline"
          aria-label={`Decrease ${label}`}
        >
          -
        </button>
        <span className="w-6 text-center text-sm">{value}</span>
        <button
          type="button"
          onClick={() => setValue(Math.min(max, value + 1))}
          disabled={value >= max}
          className="btn btn-xs btn-outline"
          aria-label={`Increase ${label}`}
        >
          +
        </button>
      </div>
    </div>
  );
}