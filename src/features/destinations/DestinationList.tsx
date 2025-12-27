"use client";

import Section from "@/src/components/common/layout/Section";
import DestinationGridSkeleton from "@/src/skeleton/DestinationGridSkeleton";
import { API_URLS } from "@/src/api/apiUrls";
import { useToast } from "@/src/context/ToastContext";
import { fetchWithRetry } from "@/src/lib/fetchWithRetry";
import { DestinationItem } from "@/types/destinations.types";
import React, { useEffect, useState } from "react";
import DestinationCard from "./DestinationCard";
import { useSearchParams } from "next/navigation";

const DestinationList: React.FC = () => {
  const searchParams = useSearchParams();
  const { showToast } = useToast();

  const [title, setTitle] = useState("Destinations");
  const [items, setItems] = useState<DestinationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const typeParam = searchParams.get("type");

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        setLoading(true);

        const apiQuery = new URLSearchParams();

        if (typeParam) {
          apiQuery.set("type", typeParam.toUpperCase());
        }

        const apiUrl = `${API_URLS.destinations}?${apiQuery.toString()}`;

        const data = await fetchWithRetry<{ data: DestinationItem[] }>(
          apiUrl,
          3
        );

        setItems(
          data.data.map((raw) => ({
            id: raw.id ?? "",
            place: raw.place ?? "Unknown Place",
            type: raw.type ?? "",
            images: Array.isArray(raw.images) ? raw.images : [],
            country: raw.country ?? "Unknown",
            amount: typeof raw.amount === "number" ? raw.amount : 0,
            highlights: Array.isArray(raw.highlights) ? raw.highlights : [],
            isActive: Boolean(raw.isActive),
          }))
        );

        setHasLoadedOnce(true);
      } catch (err: unknown) {
        showToast(
          err instanceof Error ? err.message : "Failed to load destinations",
          "error"
        );
      } finally {
        setLoading(false);
      }
    };

    setTitle(
      typeParam ? `${typeParam.toLowerCase()} Destinations` : "Destinations"
    );

    loadDestinations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeParam]);

  return (
    <Section className="w-full mb-10" title={title}>
      {loading && !hasLoadedOnce ? (
        <DestinationGridSkeleton />
      ) : items.length === 0 ? (
        <div className="text-center text-gray-600 py-16">
          No destinations found.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {items.map((item) => (
            <DestinationCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default DestinationList;
