"use client";
import Section from "@/src/components/common/layout/Section";
import TestimonialCard from "./components/TestimonialCard";
import { useAppData } from "@/src/context/AppDataContext";

const Testimonials = () => {
  const { state } = useAppData();
  const testimonials = state.homePage?.testimonials ?? [];
  return (
    <Section title="TESTIMONIALS" viewAllUrl="/testimonials" className="mb-8">
      <div className="flex flex-col gap-6 mt-6">
        {testimonials.map((t, idx) => (
          <TestimonialCard
            key={t.name + idx}
            name={t.name}
            text={t.text}
            image={t.image}
            align={t.align as "left" | "right"}
          />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
