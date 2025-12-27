"use client";
import React, { useRef, useState } from "react";
import { useToast } from "@/src/context/ToastContext";

const SOCIALS = [
  {
    name: "Instagram",
    url: "https://instagram.com/outboundtravelers",
    icon: (
      <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#fff" fillOpacity="0.12" />
        <path
          d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5 1a1 1 0 110 2 1 1 0 010-2z"
          fill="#E1306C"
        />
      </svg>
    ),
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@outboundtravelers",
    icon: (
      <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#fff" fillOpacity="0.12" />
        <path
          d="M21.8 7.2a2.7 2.7 0 00-1.9-1.9C18.1 5 12 5 12 5s-6.1 0-7.9.3a2.7 2.7 0 00-1.9 1.9C2 9 2 12 2 12s0 3 .3 4.8a2.7 2.7 0 001.9 1.9C5.9 19 12 19 12 19s6.1 0 7.9-.3a2.7 2.7 0 001.9-1.9C22 15 22 12 22 12s0-3-.2-4.8zM10 15V9l6 3-6 3z"
          fill="#FF0000"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com/outboundtravelers",
    icon: (
      <svg width={28} height={28} fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="6" fill="#fff" fillOpacity="0.12" />
        <path
          d="M17 2H7C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h5v-7H9v-3h3V9.5A3.5 3.5 0 0115.5 6H18v3h-2.5A1.5 1.5 0 0014 10.5V12h4l-1 3h-3v7h2c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5z"
          fill="#1877F3"
        />
      </svg>
    ),
  },
];

const FollowUsOn = () => {
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const { showToast } = useToast();

  // Simulate async subscribe
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const email = emailRef.current?.value || "";
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);

    // Simple email validation
    if (!email || !/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(email)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }

    // Simulate random error/success
    if (email.toLowerCase().includes("fail")) {
      showToast("Subscription failed. Please try again.", "error");
    } else {
      showToast("Subscribed successfully! Check your inbox.", "success");
      if (emailRef.current) emailRef.current.value = "";
    }
  };

  return (
    <section className="w-full py-16 px-2 bg-linear-to-br from-[#f0fdfa] via-[#f8fafc] to-[#e0f2fe]">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#052210] mb-2 text-center drop-shadow-lg">
          Stay Connected With Us
        </h2>
        <div className="h-1 w-20 bg-emerald-400 mb-8 rounded"></div>
        <p className="text-sm text-gray-700 mb-8 text-center max-w-xl">
          Follow us for travel inspiration, behind-the-scenes, and the latest updates. Subscribe to our YouTube for travel stories and tips!
        </p>
        <div className="flex flex-wrap gap-6 justify-center mb-10">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow hover:scale-105 transition-transform font-semibold text-[#052210] text-lg"
            >
              {social.icon}
              {social.name}
            </a>
          ))}
        </div>
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-bold text-emerald-700 mb-2">Subscribe to our Travel Letters</h3>
          <p className="text-gray-600 text-center mb-4 text-base">
            Get the best travel stories, tips, and exclusive offers delivered to your inbox.
          </p>
          <form className="flex w-full gap-2" onSubmit={handleSubscribe}>
            <input
              type="email"
              required
              ref={emailRef}
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-l-full border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              disabled={loading}
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-r-full bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition flex items-center justify-center min-w-[110px]"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm text-white"></span>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FollowUsOn;