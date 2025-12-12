import React from "react";

const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/lifeatoutboundtravelers",
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

const phone = "+91 98765 43210";
const email = "hello@outboundtravelers.com";

const ContactSocials = () => (
  <div className="bg-white/90 rounded-2xl shadow-lg p-8 w-full max-h-fit max-w-xl mx-auto">
    <h2 className="text-2xl font-bold text-emerald-700 mb-1 text-center">Connect With Us</h2>
    <p className="italic text-emerald-700 text-sm font-medium mb-4 text-center">
      &lsquo;We&apos;re expecting your calls and messages!&rsquo;
    </p>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
      <div className="flex flex-col items-start gap-1">
        <div className="flex items-center gap-2 text-gray-700">
          <span className="font-semibold">Phone:</span>
          <a href={`tel:${phone}`} className="hover:text-emerald-600 underline">{phone}</a>
        </div>
        <div className="flex items-center gap-2 text-gray-700">
          <span className="font-semibold">Email:</span>
          <a href={`mailto:${email}`} className="hover:text-emerald-600 underline">{email}</a>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap gap-4 justify-center">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 shadow text-[#052210] font-semibold text-lg transition"
        >
          {s.icon}
          {s.name}
        </a>
      ))}
    </div>
  </div>
);

export default ContactSocials;