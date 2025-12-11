import React from "react";
import Image from "next/image";

const stats = [
  {
    label: (
      <>
        <span className="flex items-center gap-1">
          {/* Google Icon */}
          <Image
            src="/icons/googleIcon.svg"
            alt="Google rating"
            width={20}
            height={20}
            className="w-5 h-5 mr-1 inline-block align-middle"
          />
          4.9
          {/* Star Icon */}
          <Image
            src="/icons/starIcon.svg"
            alt="Star"
            width={20}
            height={20}
            className="w-5 h-5 inline-block align-middle"
          />
          Rated
        </span>
      </>
    ),
  },
  { label: "100% Customized Trips" },
  { label: "100% Visa Success Rate" },
  { label: "24x7 Concierge" },
];

const StatsStrip = () => {
  return (
    <div className="w-full mx-auto flex justify-center">
      <div
        className="bg-[#052210] rounded-t-4xl w-full flex justify-between items-center px-6 py-3 gap-2 md:gap-0"
        style={{ minHeight: 60 }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className={
              "flex items-center flex-1 min-w-0 justify-center" +
              (i > 1 ? " hidden md:flex" : "") +
              (i > 2 ? " md:hidden lg:flex" : "")
            }
          >
            <span className="text-base font-semibold text-white whitespace-nowrap text-center flex items-center gap-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsStrip;
