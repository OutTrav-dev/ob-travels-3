import React from "react";
import ShowcaseCarousel from "@/src/components/common/carousel/ShowcaseCarousel";
import { TEAM_MEMBERS } from "./showcaseItems";

const OurTeam = () => {
  return (
    <section className="w-full py-16 px-6 ">
      <div className="mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#052210] mb-2 text-center drop-shadow-lg">
          Meet Our Team
        </h2>
        <div className="h-1 w-20 bg-emerald-400 mb-6 rounded"></div>
        <p className="text-lg text-gray-700 text-center max-w-2xl italic">
          &ldquo;Alone we can do so little; together we can do so much.&rdquo; &ndash; Helen
          Keller
        </p>
        <div className="w-full">
          <ShowcaseCarousel
            items={TEAM_MEMBERS}
            showMeta={true}
            showDots={true}
            className="mt-4"
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
