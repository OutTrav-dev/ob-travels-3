"use client";

import React, { useEffect, useState } from "react";
import { fetchWithRetry } from "@/src/lib/fetchWithRetry";
import { useToast } from "@/src/context/ToastContext";

// import DetailsHeader from "@/src/components/packages/packageDetails/header/DetailsHeader";
// import PackageDetailsImageCarousel from "@/src/components/packages/packageDetails/header/PackageDetailsImageCarousel";
// import Overview from "@/src/components/packages/packageDetails/overview/Overview";
// import BookingAside from "@/src/components/packages/packageDetails/aside/BookingAside";
// import Itinerary from "@/src/components/packages/packageDetails/itinerary/Itinerary";
// import Tabs, { TabItem } from "@/src/components/common/Tabs";
// import SlideUpReveal from "@/src/components/common/animations/SlideUpReveal";

import PackageDetailsSkeleton from "@/src/skeleton/PackageDetailsSkeleton";

import {
  ApiResponse,
  PackageDetail,
  TabItem,
} from "@/types/PackageDetail.types";
import SlideUpReveal from "@/src/components/common/animation/SlideUpReveal";
import { API_URLS } from "@/src/api/apiUrls";
import { redirect } from "next/navigation";
import DetailsHeader from "./header/DetailsHeader";
import Tabs from "@/src/components/common/layout/Tabs";
import PackageDetailsImageCarousel from "./header/PackageDetailsImageCarousel";
import Itinerary from "./itinerary/Itinerary";
import Overview from "./overview/Overview";
import BookingAside from "./aside/BookingAside";

interface Props {
  id: string;
}

export default function PackageDetailClient({ id }: Props) {
  const { showToast } = useToast();

  const [data, setData] = useState<PackageDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // -------------------------------
  // ⭐ FETCH PACKAGE DETAILS
  // -------------------------------
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const response = await fetchWithRetry<PackageDetail>(
          `${API_URLS.packages}/${id}`,
          3
        );

        setData(response);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to load package details";
        showToast(message, "error");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) {
    return <PackageDetailsSkeleton />;
  }
  if (!data) {
    redirect("/not-found");
    return null;
  }

  const tabItems: TabItem[] = [
    { id: "overview", label: "Overview" },
    { id: "itinerary", label: "Itinerary" },
  ];

  return (
    <>
      {/* HEADER */}
      <section>
        <DetailsHeader
          title={data.title}
          location={data.location.short}
          rating={data.rating}
        />

        <SlideUpReveal delayMs={200}>
          <div className="mt-4">
            <PackageDetailsImageCarousel slides={data.image_gallery} />
          </div>
        </SlideUpReveal>
      </section>

      {/* BODY LAYOUT */}
      <div className="mt-10 grid gap-6 lg:grid-cols-6">
        {/* LEFT CONTENT */}
        <section className="w-full lg:col-span-4">
          <Tabs items={tabItems} defaultValue={0}>
            {/* OVERVIEW */}
            <div>
              <Overview
                shortDescription={data.overview_content}
                longDescription={data.about_package}
                highlights={data.highlights}
                amenities={data.amenities}
                stats={[
                  { label: "Travelers", value: 2, iconKey: "travelers" },
                  { label: "Days", value: data.meta.days, iconKey: "days" },
                  {
                    label: "Nights",
                    value: data.meta.nights,
                    iconKey: "nights",
                  },
                  {
                    label: "Extras",
                    value: data.meta.extras,
                    iconKey: "extras",
                  },
                ]}
                cancellationPolicy={data.cancellation_policy?.map((c) => ({
                  _id: c._id,
                  info: c.info,
                  detail: c.detail,
                }))}
              />
            </div>

            {/* ITINERARY */}
            <div>
              <Itinerary
                days={
                  data?.itinerary_details?.map((d) => ({
                    _id: d._id,
                    day: d.day,
                    title: d.title,
                    subtitle: d.subtitle,
                    content: d.content,
                    images: d.images,
                    location: d.location,
                  })) || []
                }
              />
            </div>
          </Tabs>
        </section>

        {/* RIGHT SIDEBAR */}
        <aside className="w-full self-start lg:sticky lg:top-4 lg:col-span-2">
          <SlideUpReveal delayMs={200}>
            <BookingAside
              pricing={{
                original: data.booking_details.original_price,
                discounted: data.booking_details.discounted_price,
              }}
              packageTitle={data.title}
              days={data.meta.days}
              nights={data.meta.nights}
              perLabel={data.booking_details.person_label}
              includes={data.booking_details.includes}
              cancellationNote={data.booking_details.cancellation_note}
              instant_confirm={data.booking_details.instant_confirm}
              support={data.booking_details.support}
              ctaLabel={data.booking_details.cta_button}
              seoUrl={data.seo_url}
              price_type={data.booking_details.price_type}
            />
          </SlideUpReveal>
        </aside>
      </div>
    </>
  );
}
