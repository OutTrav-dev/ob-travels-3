"use client";

import Accordion from "@/src/components/common/layout/Accordion";
import RichHtml from "@/src/components/RichHtml";
import { ItineraryDay } from "@/types/PackageDetail.types";
import Image from "next/image";


export default function ItineraryDayCard({
  item,
  defaultOpen = false,
}: {
  item: ItineraryDay;
  defaultOpen?: boolean;
}) {
  return (
    <Accordion
      title={`Day ${item.day}: ${item.title}`}
      subtitle={item.subtitle}
      defaultOpen={defaultOpen}
    >
      <div className="text-[13px] leading-6 text-slate-700">
        <RichHtml html={item.content} />
      </div>
      {item.images?.length ? (
        <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-3">
          {item.images.slice(0, 6).map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg ring-1 ring-slate-200">
              <Image
                src={src}
                alt={`Day ${item.day} image ${i + 1}`}
                width={400}
                height={240}
                className="h-24 w-full object-cover md:h-28"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      ) : null}
    </Accordion>
  );
}
