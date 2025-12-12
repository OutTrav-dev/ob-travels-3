import Header from "@/src/components/header/Header";
import FollowUsOn from "@/src/features/about/FollowUsOn";
import MissionVision from "@/src/features/about/MissionVision";
import OurTeam from "@/src/features/about/OurTeam";
import WhoAreWe from "@/src/features/about/WhoAreWe";
import WhyChooseUs from "@/src/features/about/WhyChooseUs";


export default function About() {
  return (
    <main className="w-full bg-linear-to-br from-[#e0f7fa] via-[#f8fafc] to-[#e0f2fe] flex flex-col gap-10">
      <section
        id="section-1-header"
        aria-label="Header Section"
        className="mb-4 bg-[#0c4423]"
      >
        <Header title={"About Us"}  backgroundImage={""}/>
      </section>
      <WhoAreWe />
      <MissionVision />
      <WhyChooseUs />
      <OurTeam />
      <FollowUsOn />
    </main>
  );
}
