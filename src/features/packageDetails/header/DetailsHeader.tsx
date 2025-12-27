"use client";
import { Share2Icon, MailIcon, InstagramIcon, CopyIcon } from "lucide-react";
import StarRating from "@/src/components/common/StarRating";
import { useRef, useState, useEffect } from "react";

interface DetailsHeaderProps {
  title: string;
  location: string;
  rating: number;
}

const DetailsHeader = ({ title, location, rating }: DetailsHeaderProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const url = typeof window !== "undefined" ? window.location.href : "";

  // Close popup when clicking outside
  useEffect(() => {
    if (!showPopup) return;
    function handleClick(e: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node)
      ) {
        setShowPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showPopup]);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <header>
      <div className="flex justify-between relative">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
          {title}
        </h1>
        <div className="relative">
          <button
            className="cursor-pointer"
            onClick={() => setShowPopup((v) => !v)}
            aria-label="Share"
            type="button"
          >
            <Share2Icon className="inline-block ml-2 mb-1" size={26} />
          </button>
          {showPopup && (
            <div
              ref={popupRef}
              className="absolute right-0 z-20 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg p-3 flex flex-col gap-2 animate-fade-in"
            >
              <span className="text-xs text-gray-500 mb-1 font-semibold">Share</span>
              <a
                href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1 text-gray-700"
                aria-label="Share via Email"
              >
                <MailIcon size={18} /> Email
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1 text-green-600"
                aria-label="Share on WhatsApp"
              >
                <svg width={18} height={18} viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.37L4 29l7.824-2.05A12.93 12.93 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.85-.58-5.41-1.58l-.38-.24-4.65 1.22 1.24-4.52-.25-.39A9.93 9.93 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 5.01 4.23.7.24 1.24.38 1.67.49.7.18 1.34.16 1.85.1.56-.07 1.65-.67 1.88-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={`https://www.instagram.com/?url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1 text-pink-500"
                aria-label="Share on Instagram"
              >
                <InstagramIcon size={18} /> Instagram
              </a>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 hover:bg-gray-100 rounded px-2 py-1 text-gray-700 w-full"
                aria-label="Copy link"
                type="button"
              >
                <CopyIcon size={18} />
                {copied ? "Copied!" : "Copy Link"}
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p>{location}</p> |
        <StarRating rating={rating} showLabel={true} showNumber={true} />
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.18s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-8px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </header>
  );
};

export default DetailsHeader;
