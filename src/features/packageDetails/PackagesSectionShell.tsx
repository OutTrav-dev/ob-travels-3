"use client";

import Breadcrumbs from "@/src/components/common/breadcrumbs/Breadcrumbs";
import BreadcrumbsTracker from "@/src/components/common/breadcrumbs/BreadcrumbsTracker";

// import Breadcrumbs from "./Breadcrumbs";
// import BreadcrumbsTracker from "./BreadcrumbsTracker";

export default function PackagesSectionShell({
  trail,
  children,
}: {
  trail: { label: string; href: string }[];
  children: React.ReactNode;
}) {
  return (
    <div className="py-6 md:py-6">
      {/* <BreadcrumbsTracker items={trail} />
      <Breadcrumbs
        className="text-sm mb-4 opacity-70"
        items={trail}
        useStored={false}
      /> */}
      {children}
    </div>
  );
}
