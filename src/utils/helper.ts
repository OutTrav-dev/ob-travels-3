import { ItineraryDay, MapPoint } from "@/types/PackageDetail.types";

export const toTitle = (slug: string) =>
  slug
    ?.split("-")
    ?.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

export function getMapPointsFromItinerary(days: ItineraryDay[]): MapPoint[] {
  const used: string[] = [];
  return (
    days
      .filter((d) => typeof d.location.lat === "number" && typeof d.location.lng === "number")
      .map((d) => ({
        day: d.day,
        title: d.location.name || d.title,
        lat: d.location.lat as number,
        lng: d.location.lng as number,
      }))
      // remove consecutive duplicates
      .filter((p) => {
        const key = `${p.lat},${p.lng}`;
        const keep = key !== used[used.length - 1];
        if (keep) used.push(key);
        return keep;
      })
  );
}
