"use client";
import React from "react";
import PackageCardSkeleton from "./PackageCardSkeleton";

type Props = { count?: number };

const PackagesGridSkeleton: React.FC<Props> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <PackageCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default PackagesGridSkeleton;