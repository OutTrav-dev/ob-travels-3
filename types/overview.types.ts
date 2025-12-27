export type StatKey = "travelers" | "days" | "nights" | "extras";

export type Stat = {
  label: string;
  value: string | number;
  // If your data uses iconKey mapping in UI (recommended)
  iconKey?: StatKey | string;
};

export type WhyChoose = {
  title: string;
  points: string[];
};

export type PolicyItem = {
  _id: string;
  info: string;
  detail: string;
};

export interface OverviewProps {
  title?: string;
  shortDescription?: string;
  shortDescriptionHtml?: string;
  stats?: Stat[];
  longDescription?: string;
  longDescriptionHtml?: string;
  highlights?: string[];
  amenities?: string[];
  whyChooseUs?: WhyChoose[];
  cancellationPolicy?: PolicyItem[];
}

export type ReviewItem = {
  id: string;
  authorName: string;
  authorAvatarUrl?: string;
  rating: number; // 0..5
  relativeTime?: string; // e.g., "a week ago"
  contentHtml?: string;  // rich text from DB/editor
  contentText?: string;  // plain text fallback
  photos?: string[];
};