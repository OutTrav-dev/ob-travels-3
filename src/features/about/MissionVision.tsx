import React from "react";

const visionText = `Our team at Outbound Travelers is committed to achieving world-class status as a leading travel company. With a customer-centric approach, we strive for global recognition by maintaining the highest standards of quality and crafting extraordinary experiences for our clients.`;

const missionText = `At Outbound Travelers, our mission is to redefine the way the world experiences travel. We are dedicated to delivering unparalleled customer service, personalized travel solutions, and unforgettable journeys that inspire adventure and discovery.`;

const MissionVision = () => {
  return (
    <section className="w-full px-6">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto">
        {/* Vision */}
        <div className="flex-1 flex flex-col items-center px-4 md:px-10 py-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-700 mb-2 text-center">
           Our Vision
          </h2>
          <div className="h-1 w-12 bg-emerald-400 mb-4 rounded"></div>
          <p className="text-gray-700 text-lg text-center">{visionText}</p>
        </div>
        {/* Divider */}
        <div className="hidden lg:block w-px bg-emerald-200 mx-4 my-8" />
        <div className="block lg:hidden h-px bg-emerald-200 mx-8 my-2" />
        {/* Mission */}
        <div className="flex-1 flex flex-col items-center px-4 md:px-10 py-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-700 mb-2 text-center">
           Our Mission
          </h2>
          <div className="h-1 w-12 bg-emerald-400 mb-4 rounded"></div>
          <p className="text-gray-700 text-lg text-center">{missionText}</p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;