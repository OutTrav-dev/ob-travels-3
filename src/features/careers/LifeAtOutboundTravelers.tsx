import Image from "next/image";
import React from "react";

const GALLERY_IMAGES = [
  "/images/life/office1.jpg",
  "/images/life/office2.jpg",
  "/images/life/trip1.jpg",
  "/images/life/team1.jpg",
  "/images/life/event1.jpg",
  "/images/life/celebration1.jpg",
  "/images/life/trip2.jpg",
  "/images/life/office3.jpg",
  "/images/life/team2.jpg",
];

const INSTAGRAM_URL = "https://instagram.com/lifeatoutbound";

const LifeAtOutboundTravelers = () => {
  return (
    <section className="w-full py-8 px-2 bg-linear-to-br from-[#f0fdfa] via-[#f8fafc] to-[#e0f2fe]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#052210] mb-2 text-center drop-shadow-lg">
          Life at Outbound Travelers
        </h2>
        <div className="h-1 w-20 bg-emerald-400 mb-4 rounded"></div>
        <p className="text-lg text-gray-700 mb-8 text-center max-w-2xl">
          A glimpse into our vibrant culture, team moments, and adventures
          together!
        </p>
        {/* Responsive Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full mb-10">
          {GALLERY_IMAGES.map((src, idx) => (
            <div
              key={idx}
              className="aspect-4/3 rounded-xl overflow-hidden shadow group relative"
            >
              <Image
                width={200}
                height={150}
                src={src}
                alt={`Life at Outbound Travelers ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Instagram CTA */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-emerald-400 to-emerald-600 text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
            <rect
              width="24"
              height="24"
              rx="6"
              fill="#fff"
              fillOpacity="0.12"
            />
            <path
              d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5 1a1 1 0 110 2 1 1 0 010-2z"
              fill="#fff"
              fillOpacity="0.7"
            />
          </svg>
          Follow us on Instagram
        </a>
      </div>
    </section>
  );
};

export default LifeAtOutboundTravelers;
