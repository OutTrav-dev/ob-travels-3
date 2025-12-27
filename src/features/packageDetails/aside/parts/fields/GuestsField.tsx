"use client";
import React from "react";
import { Users } from "lucide-react";
import GuestCounter from "./GuestCounter";
import Popover from "@/src/components/Popover";

export default function GuestsField({
  adults,
  child,
  setAdults,
  setChildren,
  label = "Guests",
}: {
  adults: number;
  child: number;
  setAdults: (v: number) => void;
  setChildren: (v: number) => void;
  label?: string;
}) {
  return (
    <div className="space-y-1 md:max-w-xs">
      <label className="text-[11px] font-medium uppercase tracking-wide text-slate-600 flex items-center gap-1">
        <Users className="h-4 w-4 text-indigo-600" />
        {label}
      </label>

      <Popover
        side="bottom"
        align="start"
        matchTriggerWidth
        className="p-3"
        trigger={(t) => (
          <button
            ref={t.ref}
            type="button"
            onClick={t.onClick}
            aria-expanded={t["aria-expanded"]}
            className="btn btn-sm btn-outline w-full justify-between"
          >
            <span className="text-xs">
              {adults} Adult{adults > 1 && "s"}, {child} Child{child !== 1 && "ren"}
            </span>
            <span className="text-[10px] text-slate-500">
              {t["aria-expanded"] ? "Close" : "Edit"}
            </span>
          </button>
        )}
      >
        {(close) => (
          <div className="">
            <div className="space-y-3">
              <GuestCounter label="Adults" value={adults} setValue={setAdults} min={1} />
              <GuestCounter label="Children" value={child} setValue={setChildren} min={0} />
            </div>
            <div className="mt-3 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setAdults(2);
                  setChildren(0);
                }}
                className="btn btn-ghost btn-xs"
              >
                Reset
              </button>
              <button type="button" onClick={close} className="btn btn-primary btn-xs">
                Done
              </button>
            </div>
          </div>
        )}
      </Popover>
    </div>
  );
}