"use client";
import React from "react";

const PackageDetailsSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10 px-4 flex flex-col gap-6">
      
      {/* Breadcrumb */}
      <div className="skeleton h-3 w-40 rounded-md" />

      {/* Title + Subtitle */}
      <div className="flex flex-col gap-3">
        <div className="skeleton h-8 w-3/4 rounded-md" />
        <div className="skeleton h-4 w-1/2 rounded-md" />
      </div>

      {/* Meta Chips */}
      <div className="flex items-center justify-center gap-3">
        <div className="skeleton h-6 w-20 rounded-full" />
        <div className="skeleton h-6 w-16 rounded-full" />
        <div className="skeleton h-6 w-24 rounded-full" />
      </div>

      {/* Main Preview Image */}
      <div className="skeleton h-56 sm:h-72 w-full rounded-xl" />

      {/* Description Lines */}
      <div className="flex flex-col gap-3">
        <div className="skeleton h-4 w-full rounded-md" />
        <div className="skeleton h-4 w-5/6 rounded-md" />
        <div className="skeleton h-4 w-4/6 rounded-md" />
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="skeleton h-10 w-28 rounded-md" />
        <div className="skeleton h-10 w-36 rounded-md" />
      </div>
      
    </div>
  );
};

export default PackageDetailsSkeleton;
