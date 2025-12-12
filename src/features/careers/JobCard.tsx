"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface JobCardProps {
  id: string;
  title: string;
  location: string;
  type: string;
  experience: string;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  location,
  type,
  experience,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/careers/${id}`);
  };

  return (
    <button
      className="w-full flex items-center justify-between bg-white rounded-xl shadow-md px-6 py-4 hover:bg-emerald-50 transition group"
      onClick={handleClick}
      type="button"
    >
      <div>
        <div className="text-lg text-left font-semibold text-emerald-700 group-hover:underline">
          {title}
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm text-left text-gray-500">
            {location} &middot; {type}
            <span className="ml-2 px-2 inline py-0.5 rounded bg-emerald-100 text-emerald-700 text-xs font-semibold border border-emerald-200">
              {experience}
            </span>
          </span>
        </div>
      </div>
      <span className="ml-4 text-emerald-500 group-hover:translate-x-1 transition-transform">
        <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
          <path
            d="M9 18l6-6-6-6"
            stroke="#10b981"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};

export default JobCard;
