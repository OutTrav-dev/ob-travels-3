import Header from "@/src/components/header/Header";
import CareersContent from "@/src/features/careers/CareersContent";
import JobCard from "@/src/features/careers/JobCard";
import LifeAtOutboundTravelers from "@/src/features/careers/LifeAtOutboundTravelers";


const jobs = [
  {
    title: "Travel Sales Executive",
    location: "Nagercoil, Tamil Nadu",
    type: "Full Time",
    experience: "0 - 3 years",
  },
  // {
  //   title: "Digital Marketing Specialist",
  //   location: "Remote",
  //   type: "Full Time",
  //   experience: "3+ years",
  // },
  // {
  //   title: "Operations Executive",
  //   location: "Nagercoil, Tamil Nadu",
  //   type: "Full Time",
  //   experience: "1+ years",
  // },
  // {
  //   title: "Content Writer",
  //   location: "Remote",
  //   type: "Part Time",
  //   experience: "Freshers",
  // },
];

export default function Careers() {
  return (
    <main className="w-full bg-linear-to-br from-[#e0f7fa] via-[#f8fafc] to-[#e0f2fe] flex flex-col min-h-screen">
      <section
        id="section-1-header"
        aria-label="Header Section"
        className="mb-4 bg-[red]"
      >
        <Header
          title={"Careers"}
          backgroundImage={""}
          subtitle={"Join our team and shape the future of travel!"}
        />
      </section>
      <CareersContent />
      <section className="max-w-3xl mx-auto w-full px-4 py-4 lg:py-8">
        <h2 className="text-2xl font-bold text-emerald-700 mb-4 text-center">
          Open Positions
        </h2>
        <div className="flex flex-col gap-4">
          {jobs.map((job, idx) => (
            <JobCard
              id={"sadsfsdfdsfdsf"}
              key={job.title + idx}
              title={job.title}
              location={job.location}
              type={job.type}
              experience={job.experience}
            />
          ))}
        </div>
      </section>
      <LifeAtOutboundTravelers />
    </main>
  );
}
