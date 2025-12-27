"use client";

import Link from "next/link";
import React from "react";

interface ViewAllLinkProps {
  viewAll: string;
  label?: string;
}

const ViewAllLink: React.FC<ViewAllLinkProps> = ({
  viewAll,
  label = "View all →",
}) => {
  return (
    <Link
      href={viewAll || "#"}
      className="text-sm md:text-[13px] font-medium text-[#052210] hover:text-blue-800 underline transition-colors"
    >
      {label}
    </Link>
  );
};

export default ViewAllLink;
