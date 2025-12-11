import React from "react";
import * as Lucide from "lucide-react";

export type LucideName = keyof typeof Lucide;

export default function Icon({
  name,
  className,
}: {
  name: LucideName;
  className?: string;
}) {
  const Cmp = Lucide[name] as React.ComponentType<React.SVGProps<SVGSVGElement>> | undefined;
  if (!Cmp) return null;
  return <Cmp className={className ?? "h-5 w-5"} />;
}