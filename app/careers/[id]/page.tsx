"use client";
import Header from "@/src/components/header/Header";
import JobApplyModal from "@/src/features/careers/JobApplyModal";
import JobDescription from "@/src/features/careers/JobDescription";
import React, { useState } from "react";

const JobPage = () => {
  const job = {
    title: "Travel Consultant",
    location: "Nagercoil, Tamil Nadu",
    type: "Full Time",
    description:
      "As a Travel Consultant, you will help clients plan and book their dream vacations, providing expert advice and personalized service.",
    detailsHtml: `
        <h2 class="text-lg font-semibold text-emerald-700 mb-2">Responsibilities</h2>
        <ul class="list-disc list-inside mb-4">
            <li>Consult with clients to understand their travel needs</li>
            <li>Create customized itineraries</li>
            <li>Coordinate bookings and logistics</li>
            <li>Provide after-sales support</li>
        </ul>
        <h2 class="text-lg font-semibold text-emerald-700 mb-2">Requirements</h2>
        <ul class="list-disc list-inside mb-4">
            <li>Excellent communication skills</li>
            <li>Passion for travel</li>
            <li>Experience in travel industry preferred</li>
            <li>Attention to detail</li>
        </ul>
    `,
    experience: "2+ years"
  };
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="w-full bg-linear-to-br from-[#e0f7fa] via-[#f8fafc] to-[#e0f2fe] flex flex-col min-h-screen">
      <section
        id="section-1-header"
        aria-label="Header Section"
        className="mb-4"
      >
        <Header
          title={"Careers"}
          backgroundImage={""}
          subtitle={"Join our team and shape the future of travel!"}
        />
      </section>
      <JobDescription {...job} onApply={() => setModalOpen(true)} />
      <JobApplyModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        jobTitle={job.title}
      />
    </main>
  );
};

export default JobPage;
