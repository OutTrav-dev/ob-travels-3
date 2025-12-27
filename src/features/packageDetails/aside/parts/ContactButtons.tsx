"use client";
import React from "react";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "918300306136"; // No "+" for wa.me
const TEL_NUMBER = "+918300306136";    // Keep "+" for tel:
const STATIC_MESSAGE = "Hello, I am interested in this package. Please provide more details.";

export default function ContactButtons({
  packageTitle,
  days,
  nights,
  price,
}: {
  packageTitle?: string;
  days?: number;
  nights?: number;
  price?: string | number;
}) {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const message = `Hello, I am interested in the following travel package:

*Package Name:* ${packageTitle || "N/A"}
*Duration:* ${days || "?"} Days / ${nights || "?"} Nights
*Price:* ₹${
    typeof price !== "undefined" && price !== null && `${price}`.trim().length > 0
      ? price
      : "?"
  }
*Package Link:* ${url}

Please provide more details.`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <section aria-label="Contact options" className="mt-2">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm flex items-center justify-center"
          aria-label="Chat with support on WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
          Chat
        </a>
        <a
          href={`tel:${TEL_NUMBER}`}
          className="btn btn-outline btn-sm flex items-center justify-center"
          aria-label="Call support"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
      </div>
    </section>
  );
}