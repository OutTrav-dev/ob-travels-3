import { sanitizeHtml } from "@/src/utils/helper";
import React from "react";

interface JobDescriptionProps {
  title: string;
  location: string;
  type: string;
  experience?: string;
  description: string;
  detailsHtml: string; // All requirements & responsibilities in one HTML string
  onApply: () => void;
}

const JobDescription: React.FC<JobDescriptionProps> = ({
  title,
  location,
  type,
  experience,
  description,
  detailsHtml,
  onApply,
}) => (
  <section className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8 m-8">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <h1 className="text-2xl md:text-3xl font-bold text-emerald-700">{title}</h1>
      <div className="mt-2 md:mt-0 text-gray-600 text-sm flex flex-col md:items-end">
        <span>{location}</span>
        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full font-semibold mt-1 w-fit">{type}</span>
        {experience && (
          <span className="text-xs text-gray-500 mt-1">Experience: {experience}</span>
        )}
      </div>
    </div>
    <p className="text-gray-700 mb-6">{description}</p>
    <div
      className="mb-6 text-gray-700"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(detailsHtml),
      }}
    />
    <button
      className="px-8 py-3 rounded-full bg-linear-to-r from-emerald-400 to-emerald-600 text-white font-bold text-lg shadow-lg tracking-wide hover:scale-105 transition-transform"
      onClick={onApply}
    >
      Apply Now
    </button>
  </section>
);

export default JobDescription;