import React from "react";
import {
  Users,
  CalendarRange,
  Utensils,
  MapPin,
  Compass,
  Sparkles,
} from "lucide-react";
import { Stat } from "@/types/overview.types";

type IconKey =
  | "travelers"
  | "days"
  | "nights"
  | "meals"
  | "location"
  | "extras"
  | "activities"
  | "default";

const ICONS: Record<IconKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  travelers: Users,
  days: CalendarRange,
  nights: CalendarRange,
  meals: Utensils,
  location: MapPin,
  extras: Compass,
  activities: Sparkles,
  default: Compass,
};

// Map traveler counts/keywords to audience labels like "Couple, Friends, Group"
function toAudienceLabels(input?: string | number): string {
  if (input === undefined || input === null) return "Couple • Friends • Group";
  const raw = String(input).toLowerCase();
  const nums = raw.match(/\d+/g)?.map((n) => parseInt(n, 10)).filter((n) => !Number.isNaN(n)) ?? [];
  const labels = new Set<string>();

  if (raw.includes("family")) labels.add("Family");
  if (raw.includes("honeymoon")) labels.add("Couple");
  if (nums.includes(1)) labels.add("Solo");
  if (nums.includes(2)) labels.add("Couple");
  if (nums.some((n) => n === 3 || n === 4)) labels.add("Friends");
  if (nums.some((n) => n >= 5)) labels.add("Group");

  if (labels.size === 0) {
    // sensible default when no hints present
    labels.add("Couple");
    labels.add("Friends");
    labels.add("Group");
  }
  return Array.from(labels).join(" • ");
}

export default function StatGrid({ stats }: { stats: Stat[] }) {
  const travelers = stats.find(
    (s) => s.iconKey === "travelers" || /travelers?/.test(s.label.toLowerCase())
  );
  const days = stats.find(
    (s) => s.iconKey === "days" || /day/.test(s.label.toLowerCase())
  );
  const nights = stats.find(
    (s) => s.iconKey === "nights" || /night/.test(s.label.toLowerCase())
  );

  // Filter out core duration & travelers & airport
  const filtered = stats.filter((s) => {
    const label = s.label.toLowerCase();
    const key = s.iconKey;
    const isTravelers = key === "travelers" || /travelers?/.test(label);
    const isDays = key === "days" || /day/.test(label);
    const isNights = key === "nights" || /night/.test(label);
    const isAirport = /airport/.test(label);
    return !isTravelers && !isDays && !isNights && !isAirport;
  });

  const extras = filtered.slice(0, 2);

  const durationText = `${days?.value || "0"} days / ${nights?.value || "0"} nights`;
  const travelersText = toAudienceLabels(travelers?.value);

  // Inject Activities row (static or derive if you have a stat)
  const activitiesValue =
    stats.find((s) => s.iconKey === "activities")?.value?.toString() || "4+ activities";

  const rows: { label: string; value: string; icon: IconKey }[] = [
    { label: "Best for", value: travelersText, icon: "travelers" }, // changed from Travelers + numbers
    { label: "Duration", value: durationText, icon: "days" },
    { label: "Activities", value: activitiesValue, icon: "activities" },
    ...extras.map((e) => ({
      label: e.label,
      value: e.value.toString(),
      icon: (e.iconKey as IconKey) || "extras",
    })),
  ];

  return (
    <div className="my-4">
      <div className="grid gap-y-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-x-8">
        {rows.map((r, i) => {
          const Icon = ICONS[r.icon] || ICONS.default;
          return (
            <div key={i} className="flex items-start gap-3 text-sm">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-[#052210] ring-1 ring-blue-100">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wide text-slate-500">{r.label}</div>
                <div className="mt-0.5 truncate font-semibold text-slate-800">{r.value}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}