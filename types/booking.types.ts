export interface BookingPricing {
  original: number;       // original (MRP)
  discounted: number;     // discounted/sale price
  currency?: string;      // symbol e.g. ₹
}