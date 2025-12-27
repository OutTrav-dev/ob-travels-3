"use client";

import React from "react";
import { useHomePageFetcher } from "@/src/hooks/useHomePageFetcher";
import { API_URLS } from "@/src/api/apiUrls";

export default function GlobalLoaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading, error } = useHomePageFetcher(API_URLS.homePage);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <p className="text-red-600 font-semibold">Failed to load data.</p>
      </div>
    );
  }

  return <>{children}</>;
}
