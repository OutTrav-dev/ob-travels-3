import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  size?: number;
  showNumber?: boolean;
  showLabel?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  size = 14,
  showNumber = false,
  showLabel = false,
}) => {
  const textSize = Math.round(size * 0.9);

  return (
    <div className="flex items-center gap-1">
      {showLabel && (
        <span className="text-sm font-medium opacity-50">Rating:</span>
      )}

      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => {
          const starNumber = i + 1;

          // Determine fill percentage for each star
          let fillPercent = 0;
          if (rating >= starNumber) fillPercent = 100; // full star
          else if (rating + 1 > starNumber) {
            fillPercent = Math.round((rating - i) * 100); // partial star
          }

          return (
            <div
              key={i}
              className="relative"
              style={{ width: size, height: size }}
            >
              {/* EMPTY OUTLINE STAR */}
              <Star
                size={size}
                stroke="#FFD700"
                fill="none"
                className="absolute top-0 left-0"
              />

              {/* FILLED PARTIAL STAR */}
              <Star
                size={size}
                stroke="none"
                fill="#FFD700"
                className="absolute top-0 left-0"
                style={{
                  clipPath: `inset(0 ${100 - fillPercent}% 0 0)`,
                }}
              />
            </div>
          );
        })}
      </div>

      {showNumber && (
        <span
          className="text-[#052210] font-medium opacity-50"
          style={{
            fontSize: `${textSize}px`,
            lineHeight: 1,
          }}
        >
          ({rating.toFixed(1)})
        </span>
      )}
    </div>
  );
};

export default StarRating;
