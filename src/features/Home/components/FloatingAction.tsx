import React from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const WHATSAPP_TEXT =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  "Hello! I am interested in booking a tour with Outbound. Please provide me with more details.";

const FloatingAction = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        WHATSAPP_TEXT
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg bg-green-500 hover:bg-green-600 transition-colors w-16 h-16 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src={"/images/whatsappLogo.png"}
        alt="WhatsApp"
        width={40}
        height={40}
        className="w-10 h-10"
        priority
      />
    </a>
  );
};

export default FloatingAction;
