"use client";

import { setBreadcrumbs, useBreadcrumbs } from "@/src/utils/breadcrumbs";
import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({
  items,
  className = "",
  useStored = true,
  currentLabel,
}: {
  items?: BreadcrumbItem[];
  className?: string;
  useStored?: boolean;
  // Optional: override the last crumb label (e.g., show package name instead of id)
  currentLabel?: string;
}) {
  const stored = useBreadcrumbs();
  const list =
    useStored && (!items || items.length === 0) ? stored : items ?? [];
  const lastIdx = list.length - 1;

  const onClickCrumb = (idx: number) => {
    // Trim the stored trail to clicked index (only items with href)
    const concrete = list.filter(
      (i): i is Required<BreadcrumbItem> => !!i.href
    );
    if (!concrete.length) return;
    const next = concrete.slice(0, Math.min(idx + 1, concrete.length));
    setBreadcrumbs(next);
  };

  return (
    <div className={`breadcrumbs ${className}`}>
      <ul>
        {list.map((item, idx) => (
          <li key={`${item.label}-${idx}`}>
            {item.href && idx !== lastIdx ? (
              <Link href={item.href} onClick={() => onClickCrumb(idx)}>
                {item.label}
              </Link>
            ) : (
              <span
                className="font-semibold"
                aria-current={idx === lastIdx ? "page" : undefined}
              >
                {idx === lastIdx && currentLabel ? currentLabel : item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
