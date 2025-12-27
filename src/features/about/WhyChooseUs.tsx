import Image from "next/image";
import React from "react";

const reasons = [
  {
    icon: "/images/about/anniverseryLogo.png",
    title: "Years of Experience",
    desc: "Over 4 years of expertise in planning and executing memorable journeys for travelers worldwide.",
  },
  {
    icon: "/images/about/24by7.png",
    title: "24/7 Support",
    desc: "Our dedicated team is always available to assist you before, during, and after your trip.",
  },
  {
    icon: "/images/about/trust.png",
    title: "Tailor-Made Trips",
    desc: "Every itinerary is personalized to match your interests, pace, and travel style.",
  },
  {
    icon: "/images/about/cashValue.jpg",
    title: "Best Value",
    desc: "We offer competitive pricing without compromising on quality or experience.",
  },
  {
    icon: "/images/about/partnerHand.jpg",
    title: "Trusted Partners",
    desc: "We work with reliable local partners and global brands to ensure your safety and comfort.",
  },
  {
    icon: "/images/about/travelpalmtree.png",
    title: "Happy Travelers",
    desc: "Thousands of positive reviews and repeat customers are a testament to our service.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#052210] mb-4 text-center drop-shadow-lg">
          Why Choose Us?
        </h2>
        <div className="h-1 w-20 bg-emerald-400 mb-8 rounded"></div>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
          Discover what sets <span className="font-bold text-emerald-600">Outbound Travelers</span> apart and why thousands trust us for their adventures.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {reasons.map((reason, idx) => (
            <li
              key={idx}
              className="flex flex-col items-center bg-white/90 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full">
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="text-lg font-bold text-emerald-700 mb-2 text-center">{reason.title}</div>
              <div className="text-gray-700 text-base text-center">{reason.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;