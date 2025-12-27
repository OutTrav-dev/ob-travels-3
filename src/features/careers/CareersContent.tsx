import React from "react";

const CareersContent = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-6 px-6 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4 drop-shadow-lg">
        Build Your Journey With Us
      </h1>
      <div className="h-1 w-16 bg-emerald-400 rounded-full mx-auto mb-6" />
      <p className="text-lg text-gray-700 mb-6 max-w-2xl">
        At <span className="font-bold text-emerald-600">Outbound Travelers</span>, we believe in the power of exploration, teamwork, and growth. Join a passionate group of travel enthusiasts, creators, and problem-solvers who are shaping the future of travel experiences. Whether you’re a seasoned professional or just starting out, your journey begins here!
      </p>
      <ul className="text-left text-gray-700 mb-4 max-w-xl mx-auto space-y-2">
        <li>🌏 Work with a global team and diverse clients</li>
        <li>🚀 Grow your skills with mentorship and learning opportunities</li>
        <li>🎉 Enjoy a vibrant, inclusive, and supportive culture</li>
        <li>💡 Bring your ideas to life and make a real impact</li>
      </ul>
      <p className="text-emerald-700 font-semibold mt-4">
        Ready to embark on your next adventure? Explore our open positions below!
      </p>
    </section>
  );
};

export default CareersContent;