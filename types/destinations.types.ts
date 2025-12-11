export type DestinationCategory = "INTERNATIONAL" | "DOMESTIC";

export type DestinationItem = {
  id: string;
  place: string;
  type: DestinationCategory;
  images: string[];
  country: string;
  amount: number;
  highlights: string[];
  isActive: boolean;
};