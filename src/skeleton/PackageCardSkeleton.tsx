"use client";
import React from "react";

const PackageCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-xl p-4 bg-base-200">
      <div className="h-32 skeleton mb-3" />
      <div className="h-4 skeleton w-3/4 mb-2" />
      <div className="h-4 skeleton w-1/2" />
    </div>
  );
};

export default PackageCardSkeleton;