"use client";
import React, { useState } from "react";
import { FadeTransition } from "../animation/FadeTransition";

export type TabItem = {
  id: string;
  label: React.ReactNode;
  disabled?: boolean;
};

export default function Tabs({
  items,
  children,
  defaultValue = 0,
}: {
  items: TabItem[];
  children: React.ReactNode;
  defaultValue?: number;
}) {
  const [active, setActive] = useState(defaultValue);
  const panels = Array.isArray(children) ? children : [children];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div role="tablist" aria-orientation="horizontal" className="flex items-center gap-2">
        {items.map((t, i) => {
          const isActive = active === i;
          return (
            <React.Fragment key={t.id}>
              <button
                role="tab"
                aria-selected={isActive}
                aria-controls={`tab-panel-${t.id}`}
                disabled={t.disabled}
                onClick={() => !t.disabled && setActive(i)}
                className={[
                  "px-3 py-1.5 text-sm md:text-base rounded-md transition",
                  // remove default outline; show subtle focus only for keyboard users
                  "outline-none focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#052210]/60",
                  t.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
                  isActive
                    // active: solid bg with clearer hover darkening
                    ? "bg-[#052210] text-white hover:bg-[#041a0c]"
                    // inactive: darker border and more visible hover background
                    : "bg-transparent text-base-content border border-base-600 hover:bg-base-300"
                ].join(" ")}
              >
                {t.label}
              </button>

              {/* Vertical divider between tabs (not after last) */}
              {i < items.length - 1 && (
                <div className="divider divider-horizontal mx-1" aria-hidden="true" />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Animated Panel */}
      <div
        id={`tab-panel-${items[active]?.id ?? "panel"}`}
        role="tabpanel"
        aria-labelledby={items[active]?.id}
        className="mt-3"
      >
        <FadeTransition activeKey={active}>{panels[active]}</FadeTransition>
      </div>
    </div>
  );
}
