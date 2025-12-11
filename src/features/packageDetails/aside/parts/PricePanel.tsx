import { BookingPricing } from "@/types/booking.types";

export default function PricePanel({
  pricing,
  currency,
  perLabel,
  ctaLabel,
  price_type,
  onOpen,
}: {
  pricing: BookingPricing;
  currency: string;
  perLabel: string;
  ctaLabel: string;
  price_type: string;
  onOpen: () => void;
}) {
  const { original, discounted } = pricing;
  const savePct =
    original > discounted
      ? Math.round(((original - discounted) / original) * 100)
      : 0;
  return (
    <section aria-label="Price" className="mb-4">
      <div className="text-[12px] uppercase tracking-wide text-slate-500">
        {price_type}
      </div>
      <div className="flex items-baseline gap-2">
        <div className="text-2xl font-semibold text-slate-900">
          {currency}
          {discounted.toLocaleString("en-IN")}
        </div>
        {original > discounted && (
          <div className="text-[14px] text-slate-400 line-through">
            {currency}
            {original.toLocaleString("en-IN")}
          </div>
        )}
      </div>
      {savePct > 0 && (
        <div className="mt-1 flex items-center gap-2">
          <span className="badge badge-success badge-sm">
            Save {savePct}%
          </span>
          <span className="text-[11px] text-emerald-600">
            You save {currency}
            {(original - discounted).toLocaleString("en-IN")}
          </span>
        </div>
      )}
      <div className="mt-1 text-[12px] text-slate-500">{perLabel}</div>
      <button
        onClick={onOpen}
        className="btn btn-primary btn-block mt-3"
        aria-haspopup="dialog"
      >
        {ctaLabel}
      </button>
    </section>
  );
}