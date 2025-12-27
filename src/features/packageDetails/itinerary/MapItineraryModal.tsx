"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";
import ItineraryDayCard from "../itinerary/ItineraryDayCard";
import { ItineraryDay } from "@/types/PackageDetail.types";
import { getMapPointsFromItinerary } from "@/src/utils/helper";

export default function MapItineraryModal({
  open,
  onClose,
  days,
  speed = 4000,
  minLoaderMs = 2000,
}: {
  open: boolean;
  onClose: () => void;
  days: ItineraryDay[];
  speed?: number;
  minLoaderMs?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Leaflet typed references
  const mapRef = useRef<L.Map | null>(null);
  const polyRef = useRef<L.Polyline | null>(null);
  const flightRef = useRef<L.Marker | null>(null);

  const distancesRef = useRef<number[]>([]);
  const progressRef = useRef(0);
  const dirRef = useRef<1 | -1>(1);
  const rafRef = useRef<number>(0);

  const [state, setState] = useState({ loading: false, ready: false });

  const points = useMemo(() => getMapPointsFromItinerary(days), [days]);

  /** ⭐ Load Leaflet only on client */
  useEffect(() => {
    if (!open) return;

    let Lmod: typeof import("leaflet") | null = null;

    async function loadLeaflet() {
      setState({ loading: true, ready: false });

      // SAFE dynamic import inside client
      const leaflet = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      Lmod = leaflet;

      if (!containerRef.current) return;

      /** --------------------------
       * MAP INITIALIZATION
       * -------------------------- */
      const map = Lmod.map(containerRef.current, {
        center: [points[0].lat, points[0].lng],
        zoom: 5,
        zoomControl: false,
      });

      mapRef.current = map;

      Lmod.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ).addTo(map);

      // Convert list to Leaflet LatLng objects
      const latLngs: L.LatLng[] = points.map((p) => Lmod!.latLng(p.lat, p.lng));

      /** --------------------------
       * MARKERS
       * -------------------------- */
      points.forEach((p) =>
        Lmod!
          .marker([p.lat, p.lng])
          .addTo(map)
          .bindTooltip(`Day ${p.day}: ${p.title}`)
      );

      /** --------------------------
       * POLYLINE
       * -------------------------- */
      const polyline = Lmod.polyline(latLngs, {
        color: "#dc2626",
        weight: 3,
      }).addTo(map);

      polyRef.current = polyline;

      map.fitBounds(polyline.getBounds(), { padding: [30, 30] });

      /** --------------------------
       * DISTANCES for animation
       * -------------------------- */
      const d: number[] = [0];
      for (let i = 1; i < latLngs.length; i++) {
        d.push(d[i - 1] + latLngs[i - 1].distanceTo(latLngs[i]));
      }
      distancesRef.current = d;

      /** --------------------------
       * FLIGHT ICON MARKER
       * -------------------------- */
      const flightIcon = Lmod.divIcon({
        html: `<div style="width:22px;height:22px;background:#2563eb;color:white;
               display:flex;align-items:center;justify-content:center;border-radius:50%">
                 ✈
               </div>`,
      });

      flightRef.current = Lmod.marker(latLngs[0], {
        icon: flightIcon,
      }).addTo(map);

      setTimeout(() => {
        setState({ loading: false, ready: true });
      }, minLoaderMs);
    }

    loadLeaflet();

    return () => {
      cancelAnimationFrame(rafRef.current);
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [open, points, minLoaderMs]);

  /** --------------------------
   * ANIMATION LOOP
   * -------------------------- */
  useEffect(() => {
    if (!open || !state.ready) return;

    const poly = polyRef.current;
    const flight = flightRef.current;
    const map = mapRef.current;

    if (!poly || !flight || !map) return;

    const latLngs = poly.getLatLngs() as L.LatLng[];
    const d = distancesRef.current;
    const total = d[d.length - 1];

    const animate = () => {
      progressRef.current += dirRef.current * speed;

      if (progressRef.current >= total) {
        progressRef.current = total;
        dirRef.current = -1;
      } else if (progressRef.current <= 0) {
        progressRef.current = 0;
        dirRef.current = 1;
      }

        // If we don't have at least two points, skip animation and just place the marker
        if (!latLngs || latLngs.length < 2) {
          flight.setLatLng(latLngs[0]);
          return;
        }
      
        let i = 0;
        while (i < d.length - 1 && progressRef.current > d[i + 1]) i++;

        // Safety: ensure next index exists
        const nextIndex = Math.min(i + 1, latLngs.length - 1);
        const segmentLen = Math.max(d[nextIndex] - d[i], 1);
        const ratio = (progressRef.current - d[i]) / segmentLen;

        const a = latLngs[i];
        const b = latLngs[nextIndex];

        const lat = a.lat + (b.lat - a.lat) * ratio;
        const lng = a.lng + (b.lng - a.lng) * ratio;

      flight.setLatLng([lat, lng]);

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, [open, state.ready, speed]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="bg-white w-full max-w-6xl rounded-xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button (visible on all layouts) */}

        {/* Responsive layout: map left, content right on desktop; stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Map panel */}
          <div className="relative h-[40vh] md:h-[70vh]">
            {state.loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/70">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            )}
            <div ref={containerRef} className="h-full w-full" />
          </div>

          {/* Details panel */}
          <div className="p-4 md:p-6 md:pt-4 max-h-[40vh] md:max-h-[70vh] overflow-y-auto bg-gray-50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm md:text-base font-semibold text-slate-900">
                Itineraries
              </h4>
              <button
                onClick={onClose}
                className=" bg-white/95 shadow rounded-full w-7 h-7 flex items-center justify-center z-10 border border-slate-200"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-slate-700" />
              </button>
            </div>
            <div className="space-y-3">
              {days.map((day) => (
                <ItineraryDayCard item={day} key={day.day} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
