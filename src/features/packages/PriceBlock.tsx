"use client";
import React from "react";

function getDiscountPercent(original?: string, discounted?: string) {
  if (!original || !discounted) return null;
  const orig = Number(original);
  const disc = Number(discounted);
  if (!orig || !disc || disc >= orig) return null;
  return Math.round(((orig - disc) / orig) * 100);
}

interface PriceBlockProps {
  detailed?: boolean;
  original_price?: string;
  discounted_price?: string;
  price: string;
}

const PriceBlock: React.FC<PriceBlockProps> = ({
  detailed,
  original_price,
  discounted_price,
  price,
}) => {
  const percent = getDiscountPercent(original_price, discounted_price);
  if (detailed && original_price && discounted_price && percent) {
    return (
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through text-sm">₹{original_price}</span>
          <span className="bg-rose-100 text-rose-600 text-xs font-bold px-2 py-0.5 rounded-full border border-rose-200">
            {percent}% OFF
          </span>
        </div>
        <span className="text-[#052210] font-extrabold text-xl">₹{discounted_price}</span>
      </div>
    );
  }

  return (
    <span className="text-[#052210] font-extrabold text-xl">₹{price}</span>
  );
};

export default PriceBlock;
