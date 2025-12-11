"use client";

import React from "react";
import PortraitCard from "./PortraitCard";
import LandscapeCard from "./LandscapeCard";
import { PackagesCardItem } from "@/types/packages.types";

const PackagesSaleMiniCard: React.FC<PackagesCardItem> = (props) => {
  if (props.landscape) return <LandscapeCard {...props} />;

  return <PortraitCard {...props} />;
};

export default PackagesSaleMiniCard;
