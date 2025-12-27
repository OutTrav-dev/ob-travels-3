"use client";

import dynamic from "next/dynamic";

const CookieConsent = dynamic(() => import("@/src/components/cookie/CookieConsent"), {
  ssr: false,
});

export default function CookieConsentWrapper() {
  return <CookieConsent />;
}
