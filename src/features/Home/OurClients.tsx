"use client";
import Carousel from "@/src/components/common/carousel/Carousel";
import Section from "@/src/components/common/layout/Section";
import ClientImageCard from "./components/ClientImageCard";
import { useAppData } from "@/src/context/AppDataContext";
import { ClientImageCardProps } from "@/types/homePage.types";

const OurClients = () => {
  const { state } = useAppData();

  const data = state.homePage?.ourClients ?? [];

  const ourClients: ClientImageCardProps[] = data.map((d) => ({
    id: d.id,
    src: d.src ?? "",
    alt: d.alt ?? "Client image",
  }));
  return (
    <Section className="mt-18 md:mt-24 lg:mt-25" title="Our Clients">
      <Carousel<ClientImageCardProps>
        items={ourClients}
        renderCard={(item) => (
          <ClientImageCard
            key={item.id}
            id={item.id}
            src={item.src}
            alt={item.alt}
          />
        )}
      />
    </Section>
  );
};

export default OurClients;
