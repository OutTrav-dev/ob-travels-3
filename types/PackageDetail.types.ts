import { PolicyItem } from "./overview.types";

export interface LocationInfo {
  short: string;
}

export interface MetaInfo {
  days: number;
  nights: number;
  extras: number;
}
export type TabItem = {
  id: string;
  label: React.ReactNode;
  disabled?: boolean;
};

export interface BookingDetails {
  original_price: number;
  discounted_price: number;
  person_label: string;
  includes: string[];
  cancellation_note: string;
  instant_confirm: string;
  support: string;
  price_type: string;
  cta_button: string;
}

export interface GalleryImage {
  _id: string;
  img_src: string;
  alt: string;
}


export type DayLocation = {
name: string;
lat: number;
lng: number;
};

export interface ItineraryDay {
location: DayLocation;
images: string[];
_id: string;
day: number;
title: string;
subtitle?: string;
content: string; // HTML string
}

export interface MapPoint {
  day: number;
  title: string;
  lat: number;
  lng: number;
}

export interface PackageDetail {
  id: string;
  title: string;
  location: LocationInfo;
  rating: number;
  image_gallery: GalleryImage[]; // was string[]
  overview_content: string;
  about_package: string;
  highlights: string[];
  amenities: string[];
  meta: MetaInfo;
  cancellation_policy: PolicyItem[];
  itinerary_details: ItineraryDay[];
  booking_details: BookingDetails;
  seo_url: string;
}

export interface ApiResponse<T> {
  data: T;
}
