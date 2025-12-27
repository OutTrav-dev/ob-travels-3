"use client";
import React from "react";
import DestinationCardSkeleton from "./DestinationCardSkeleton";

type Props = { count?: number };

const DestinationGridSkeleton: React.FC<Props> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <DestinationCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default DestinationGridSkeleton;