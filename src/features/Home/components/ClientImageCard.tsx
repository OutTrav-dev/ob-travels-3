import React from "react";
import Image from "next/image";
import { ClientImageCardProps } from "@/types/homePage.types";

const ClientImageCard: React.FC<ClientImageCardProps> = ({ src, alt }) => {
  return (
    <div className="shadow-md rounded-2xl transition-transform duration-300 ease-out">
      <figure
        className="
          group relative rounded-2xl overflow-hidden bg-gray-100
          h-48
          lg:h-90
          w-40 
          lg:w-60
          origin-left
          transition-[width] duration-500 ease-out
          hover:w-56 
          lg:hover:w-120
        "
      >
        <Image
          src={src}
          alt={alt || "Client image"}
          fill
          className="object-cover"
        />
      </figure>
    </div>
  );
};

export default ClientImageCard;
