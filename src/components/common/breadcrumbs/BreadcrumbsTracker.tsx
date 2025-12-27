"use client";

import { setBreadcrumbs } from "@/src/utils/breadcrumbs";
import { useEffect } from "react";
import { BreadcrumbItem } from "./Breadcrumbs";

export default function BreadcrumbsTracker({ items }: { items: Required<BreadcrumbItem>[] }) {
  useEffect(() => {
    const id = setTimeout(() => setBreadcrumbs(items), 0); // defer so listeners are attached
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(items)]);
  return null;
}