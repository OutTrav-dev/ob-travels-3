// src/components/cookie/CookieConsent.tsx
"use client";

import React, { useMemo, useState } from "react";
import {
  type Consent,
  type ConsentCategories,
  getClientConsent,
  setClientConsent,
  getLocalMirror,
  setLocalMirror,
} from "@/src/features/cookieConsent/cookie";

type Props = {
  onDecided?: (consent: Consent) => void;
};

export default function CookieConsent({ onDecided }: Props) {
  // Lazy initialize for SSR safety
  const [open, setOpen] = useState(() => {
    const local = getLocalMirror();
    if (local) return false;

    const cookie = getClientConsent();
    return !cookie;
  });

  const [categories, setCategories] = useState<ConsentCategories>({
    functional: true,
    analytics: false,
    marketing: false,
  });

  const save = (consent: Consent) => {
    setClientConsent(consent);
    setLocalMirror(consent);
    setOpen(false);
    onDecided?.(consent);
  };

  const acceptAll = () => {
    save({
      allowed: true,
      categories: { functional: true, analytics: true, marketing: true },
    });
  };

  const acceptSelected = () => {
    save({ allowed: true, categories });
  };

  const denyAll = () => {
    save({ allowed: false, categories: { functional: true } });
  };

  const isSelected = useMemo(
    () => ({
      functional: !!categories.functional,
      analytics: !!categories.analytics,
      marketing: !!categories.marketing,
    }),
    [categories]
  );

  if (!open) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%]"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-desc"
      aria-modal="true"
    >
      <section
        itemScope
        itemType="https://schema.org/ConsentAction"
        className="rounded-2xl border border-gray-200 bg-white/90 shadow-lg backdrop-blur p-4 md:p-6"
      >
        <meta itemProp="name" content="Cookie Consent Preferences" />
        <meta
          itemProp="description"
          content="This popup allows the user to give consent for website cookies including required, analytics, and marketing cookies."
        />

        <div className="md:flex md:items-end md:justify-between gap-4">
          <div className="md:flex-1">
            <h3 id="cookie-title" className="text-base md:text-lg font-semibold text-gray-900">
              We use cookies
            </h3>

            <p id="cookie-desc" className="mt-1 text-sm text-gray-600">
              We use cookies to improve your browsing experience, analyze our traffic, and support
              personalized marketing. You may accept all, customize your choices, or deny
              non-essential cookies.
            </p>

            <div className="sr-only" itemProp="actionStatus" itemType="https://schema.org/CompletedActionStatus" />

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              <label className="flex items-center gap-2 rounded-lg border px-3 py-2">
                <input
                  type="checkbox"
                  checked={isSelected.functional}
                  disabled
                  aria-disabled="true"
                />
                <span className="text-sm">Functional (required)</span>
              </label>

              <label className="flex items-center gap-2 rounded-lg border px-3 py-2">
                <input
                  type="checkbox"
                  checked={isSelected.analytics}
                  onChange={(e) =>
                    setCategories((c) => ({ ...c, analytics: e.target.checked }))
                  }
                />
                <span className="text-sm">Analytics</span>
              </label>

              <label className="flex items-center gap-2 rounded-lg border px-3 py-2">
                <input
                  type="checkbox"
                  checked={isSelected.marketing}
                  onChange={(e) =>
                    setCategories((c) => ({ ...c, marketing: e.target.checked }))
                  }
                />
                <span className="text-sm">Marketing</span>
              </label>
            </div>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col gap-2 md:w-48">
            <button
              className="w-full rounded-md bg-[#052210] text-white px-4 py-2 text-sm font-medium hover:opacity-95"
              itemProp="accept"
              onClick={acceptAll}
            >
              Accept all
            </button>

            <button
              className="w-full rounded-md bg-white text-[#052210] border border-[#052210] px-4 py-2 text-sm font-medium hover:bg-gray-50"
              itemProp="object"
              onClick={acceptSelected}
            >
              Accept selected
            </button>

            <button
              className="w-full rounded-md text-gray-700 border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
              itemProp="disagree"
              onClick={denyAll}
            >
              Deny non-essential
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
