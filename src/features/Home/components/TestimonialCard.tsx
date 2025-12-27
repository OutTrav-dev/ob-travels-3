import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
  align?: "left" | "right";
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  text,
  image,
  align = "left",
}) => {
  const isRight = align === "right";

  return (
    <div
      className={`
        flex w-full items-stretch
        ${isRight ? "flex-row-reverse" : "flex-row"}
        gap-4 md:gap-6
      `}
    >
      <div className="relative w-24 min-h-24 h-auto md:w-40 md:min-h-40 md:h-auto rounded-xl overflow-hidden shadow-md shrink-0 grow-0">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div
        className="
          flex-1 bg-green-50 rounded-xl p-4 md:p-8 shadow-sm flex flex-col justify-center
        "
      >
        <h3 className="text-base md:text-lg font-bold">{name || "Jhonny Depp"}</h3>

        <div className="text-yellow-500 text-lg md:text-xl -mt-2 mb-1">★★★★★</div>

        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
          {text || "This is a fantastic Agency! Highly recommend it to everyone."}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
