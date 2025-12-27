"use client";
import React, { useState } from "react";
import PricePanel from "./parts/PricePanel";
import MetaList from "./parts/MetaList";
import IncludesList from "./parts/IncludesList";
import VerificationPanel from "./parts/VerificationPanel";
import ContactButtons from "./parts/ContactButtons";
import BookingRequestModal from "./parts/BookingRequestModal";
import { BookingPricing } from "@/types/booking.types";

export interface BookingAsideProps {
  pricing: BookingPricing;
  currency?: string;
  perLabel?: string;
  cancellationNote?: string;
  instant_confirm?: string;
  support?: string;
  includes?: string[];
  ctaLabel?: string;
  price_type?: string;
  seoUrl?: string; // ADDED
  packageTitle?: string;
  days?: number;
  nights?: number;
}

export default function BookingAside(props: BookingAsideProps) {
  const {
    pricing,
    currency = "₹",
    perLabel = "per person • taxes included",
    cancellationNote = "Free cancel up to 48 hours before start",
    instant_confirm = "Instant confirm • confirmation email in minutes",
    support = "24/7 support • chat, phone and email",
    includes = ["Airport pickup", "Guided city tour", "Daily breakfast"],
    ctaLabel = "Check Availability",
    price_type = "From",
    seoUrl, // ADDED
    packageTitle,
    days,
    nights,
  } = props;

  const [open, setOpen] = useState(false);
  const curr = pricing.currency || currency;

  return (
    <aside
      className="rounded-xl bg-slate-50 p-4 shadow-sm ring-1 ring-slate-200"
      aria-labelledby="booking-aside-heading"
    >
      <h2 id="booking-aside-heading" className="sr-only">
        Booking Summary & Availability
      </h2>

      <PricePanel
        pricing={pricing}
        currency={curr}
        perLabel={perLabel}
        ctaLabel={ctaLabel}
        price_type={price_type}
        onOpen={() => setOpen(true)}
      />

      <MetaList
        cancellationNote={cancellationNote}
        instantConfirm={instant_confirm}
        support={support}
      />

      {!!includes.length && <IncludesList items={includes} />}

      <VerificationPanel />

      <ContactButtons packageTitle={packageTitle} days={days} nights={nights} price={pricing.discounted} />

      <OfferStructuredData pricing={pricing} currency={curr} url={seoUrl} />

      {open && (
        <BookingRequestModal
          pricing={pricing}
          currency={curr}
          onClose={() => setOpen(false)}
        />
      )}
    </aside>
  );
}

// JSON-LD for SEO (no window usage to avoid hydration mismatch)
function OfferStructuredData({
  pricing,
  currency,
  url, // pass from server if you need it
}: {
  pricing: BookingPricing;
  currency: string;
  url?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Offer",
    priceCurrency: currency.replace(/[^A-Z₹$€£]/g, ""),
    price: pricing.discounted,
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    url: url ?? "", // stable value during SSR/CSR
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
