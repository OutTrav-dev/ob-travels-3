"use client";
import { sanitizeHtml } from "@/src/utils/helper";
import { Map } from "lucide-react";
import React, { useState } from "react";

const MapContentCard = ({
  content,
  mapSrc,
  mapTitle = "Location Map",
  sectionTitle = "Head Office",
}: {
  content: string;
  mapSrc: string;
  mapTitle?: string;
  sectionTitle?: string;
}) => {
  const [showMap, setShowMap] = useState(false);

  const sanitizedContent = sanitizeHtml(content);

  return (
    <div className="relative w-full min-h-[250px] max-w-sm mx-auto my-4 bg-white/90 rounded-2xl shadow-lg overflow-hidden">
      <div className="flex items-center justify-between py-3 px-4">
        <div className="font-semibold text-emerald-700 text-lg">
          {sectionTitle}
        </div>

        <button
          className={`btn btn-sm btn-outline rounded-xl shadow transition h-8 w-10
            ${
              showMap
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-emerald-500 text-white hover:bg-emerald-600"
            }`}
          onClick={() => setShowMap((v) => !v)}
        >
          {showMap ? "✕" : <Map className="h-4 w-4" />}
        </button>
      </div>

      <div className="relative">
        {/* Content */}
        <div
          className={`transition-opacity duration-300 px-6 pb-6 ${
            showMap ? "opacity-30" : "opacity-100"
          }`}
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      </div>

      <div
        className={`
          absolute left-0 right-0 z-20 
          transition-transform duration-500 ease-out
          ${showMap ? "translate-y-0" : "translate-y-full"}
        `}
        style={{
          top: 50,
          height: "calc(100% - 50px)",
        }}
      >
        <iframe
          title={mapTitle}
          src={mapSrc}
          width="100%"
          height="100%"
          className="rounded-xl shadow"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default MapContentCard;
