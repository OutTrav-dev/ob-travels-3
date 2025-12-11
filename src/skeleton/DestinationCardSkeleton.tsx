"use client";
import React from "react";

const DestinationCardSkeleton: React.FC = () => {
  return (
    <div className="rounded-2xl overflow-hidden bg-base-200">
      <div className="h-40 sm:h-52 skeleton" />
      <div className="p-3 space-y-2">
        <div className="h-4 skeleton rounded" />
        <div className="h-4 w-2/3 skeleton rounded" />
      </div>
    </div>
  );
};

export default DestinationCardSkeleton;