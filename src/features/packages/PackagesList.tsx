"use client";

import React, { useEffect, useState } from "react";
import Section from "@/src/components/common/layout/Section";
import { API_URLS } from "@/src/api/apiUrls";
import { useToast } from "@/src/context/ToastContext";
import { fetchWithRetry } from "@/src/lib/fetchWithRetry";
import { useParams, useSearchParams } from "next/navigation";
import PackageCard from "./PackageCard";
import PackagesGridSkeleton from "@/src/skeleton/PackagesGridSkeleton";
import { PackagesCardItem } from "@/types/packages.types";

const PackagesList: React.FC = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const { showToast } = useToast();

  const [title, setTitle] = useState("Packages");
  const [items, setItems] = useState<PackagesCardItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const typeParam = searchParams.get("type");
  const destinationParam = params?.destination as string | undefined;

  console.log("PackagesList params:", { typeParam, destinationParam });

  useEffect(() => {
    const loadPackages = async () => {
      try {
        setLoading(true);

        const apiQuery = new URLSearchParams();
        if (typeParam) apiQuery.set("type", typeParam.toUpperCase());
        if (destinationParam)
          apiQuery.set("place", destinationParam.toLowerCase());

        const apiUrl = destinationParam
          ? `${API_URLS.packages}${
              apiQuery.toString() ? `?${apiQuery.toString()}` : ""
            }`
          : `${API_URLS.packages}?${apiQuery.toString()}`;

        console.log("Fetching packages from:", { apiUrl, destinationParam });

        const data = await fetchWithRetry<{ results: PackagesCardItem[] }>(
          apiUrl,
          3
        );

        setItems(
          data.results.map(
            (raw): PackagesCardItem => ({
              id: raw.id ?? "",
              image: raw.image ?? "",
              title: raw.title ?? "Untitled Package",
              subtitle: raw.subtitle ?? "",
              rating: typeof raw.rating === "number" ? raw.rating : 0,
              days: typeof raw.days === "number" ? raw.days : 0,
              nights: typeof raw.nights === "number" ? raw.nights : 0,
              price:
                raw.discounted_price ??
                raw.original_price ??
                raw.discounted_price ??
                raw.original_price ??
                raw.price ??
                "—",
              link: raw.id ? "/package/" + raw.id : "#",
              portrait: Boolean(raw.portrait),
              landscape: Boolean(raw.landscape ?? true),
              detailed: Boolean(raw.detailed),
              original_price: raw.original_price ?? "0",
              discounted_price: raw.discounted_price ?? "0",
              advance_style: false,
              style_variant: "default",
            })
          )
        );

        setHasLoadedOnce(true);
      } catch (err: unknown) {
        showToast(
          err instanceof Error ? err.message : "Failed to load packages",
          "error"
        );
      } finally {
        setLoading(false);
      }
    };

    setTitle(
      destinationParam
        ? `${destinationParam} Packages`
        : typeParam
        ? `${typeParam.toLowerCase()} Packages`
        : "Packages"
    );

    loadPackages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeParam, destinationParam]);

  return (
    <Section className="w-full mb-10 min-h-screen" title={title}>
      {loading && !hasLoadedOnce ? (
        <PackagesGridSkeleton />
      ) : items.length === 0 ? (
        <div className="text-center text-gray-600 py-16">
          No packages found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {items.map((item) => (
            <PackageCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </Section>
  );
};

export default PackagesList;
