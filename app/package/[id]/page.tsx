import PackageDetailClient from "@/src/features/packageDetails/PackageDetailClient";
import PackagesSectionShell from "@/src/features/packageDetails/PackagesSectionShell";
import { toTitle } from "@/src/utils/helper";
import type { Metadata } from "next";

type RouteParams = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: RouteParams;
}): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `page - ${id}`,
    description: `Details for ${id}`,
  };
}

export default async function Page({ params }: { params: RouteParams }) {
  const { id } = await params;

  const trail = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    { label: toTitle?.(id) ?? id, href: `/packages/${id}` },
  ];
  return (
    <PackagesSectionShell trail={trail}>
      <PackageDetailClient id={id} />
    </PackagesSectionShell>
  );
}
