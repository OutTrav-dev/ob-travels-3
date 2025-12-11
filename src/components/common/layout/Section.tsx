import React from "react";
import ViewAllLink from "./ViewAllLink";

export interface SectionProps {
  title?: string;
  viewAllUrl?: string;
  children?: React.ReactNode;
  lessSpace?: boolean;
  noSpace?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  viewAllUrl,
  children,
  lessSpace,
  noSpace,
  fullWidth,
  className,
}) => {
  return (
    <div
      className={`relative max-w-screen-2xl mx-auto mt-4 sm:mt-6  ${className} ${
        lessSpace
          ? "px-2 md:px-4 lg:px-6"
          : noSpace
          ? "lg:px-4"
          : fullWidth
          ? ""
          : "px-4 sm:px-6 md:px-20"
      }`}
    >
      {title && (
        <div
          className={`flex items-center justify-between mb-4 ${
            noSpace ? "mx-2 md:mx-4 lg:mx-6" : ""
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold tracking-tight text-[#052210] capitalize ">
            {title}
          </h2>
          {viewAllUrl && <ViewAllLink viewAll={viewAllUrl} />}
        </div>
      )}
      {children}
    </div>
  );
};

export default Section;
