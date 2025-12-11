"use client";

import React, { useEffect, useState } from "react";
import { CalendarRange, User, Phone, Mail, Globe, MapPin, MessageSquare, X } from "lucide-react";
import { addDays } from "date-fns";
import TextField from "./fields/TextField";
import GuestsField from "./fields/GuestsField";
import BookingSummary from "./BookingSummary";
import { BookingPricing } from "@/types/booking.types";
import { Range } from "react-date-range";
import ModalPortal from "@/src/components/common/layout/ModalPortal";
import DateRangeField from "@/src/components/DateRangeField";

export default function BookingRequestModal({
  onClose,
  pricing,
  currency,
}: {
  onClose: () => void;
  pricing: BookingPricing;
  currency: string;
}) {
  const { discounted } = pricing;

  const [range, setRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const start = range[0].startDate;
  const end = range[0].endDate;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <ModalPortal>
      <div className="fixed inset-0 z-99999">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 flex flex-col h-[70vh] max-h-[70vh] overflow-hidden">

            <button
              onClick={onClose}
              className="btn btn-circle btn-xs absolute right-3 top-3 bg-white text-slate-700 shadow z-10"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="px-5 pt-5 pb-3">
              <h3 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                <CalendarRange className="h-5 w-5 text-blue-600" />
                Check Availability
              </h3>
              <p className="mt-1 text-[11px] text-slate-500">Quick request. We respond fast.</p>
            </div>
            <div className="h-px bg-slate-200" />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                onClose();
              }}
              className="flex-1 overflow-y-auto px-5 py-4 space-y-5"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <DateRangeField value={range} onChange={setRange} />
                <GuestsField
                  adults={adults}
                  child={children}  // fixed prop name
                  setAdults={setAdults}
                  setChildren={setChildren}
                />
              </div>

              {/* Personal Info */}
              <div className="grid gap-4 sm:grid-cols-2">
                <TextField name="name" label="Full Name" icon={<User className="h-4 w-4" />} required />
                <TextField name="mobile" type="tel" label="Mobile" icon={<Phone className="h-4 w-4" />} required />
                <TextField name="email" type="email" label="Email" icon={<Mail className="h-4 w-4" />} required />
                <TextField name="country" label="Country" icon={<Globe className="h-4 w-4" />} />
                <TextField name="state" label="State" icon={<MapPin className="h-4 w-4" />} />
                <TextField name="place" label="City" icon={<MapPin className="h-4 w-4" />} />
              </div>

              {/* Comments */}
              <div className="space-y-1">
                <label className="text-[11px] font-medium uppercase tracking-wide text-slate-600 flex items-center gap-1">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  Comments
                </label>
                <textarea className="textarea textarea-bordered w-full text-sm" rows={3} />
              </div>

              {/* Summary */}
              <BookingSummary
                currency={currency}
                pricePerPerson={discounted}
                adults={adults}
                child={children}
                start={start}
                end={end}
              />

              <div className="flex justify-end gap-2 pt-1">
                <button type="button" onClick={onClose} className="btn btn-ghost btn-sm">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-sm" disabled={!start || !end}>
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
}
