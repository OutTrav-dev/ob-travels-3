import React from "react";
import {
  Wifi,
  Car,
  BedDouble,
  Utensils,
  ShieldCheck,
  Map,
  Camera,
  BriefcaseMedical,
  Check,
} from "lucide-react";

export default function AmenityIcon({
  name,
  className = "w-5 h-5 text-indigo-600",
}: {
  name: string;
  className?: string;
}) {
  const n = name?.toLowerCase() || "";
  if (n.includes("wifi") || n.includes("internet")) return <Wifi className={className} />;
  if (n.includes("car") || n.includes("transfer") || n.includes("transport")) return <Car className={className} />;
  if (n.includes("bed") || n.includes("stay") || n.includes("hotel") || n.includes("accommodation"))
    return <BedDouble className={className} />;
  if (n.includes("meal") || n.includes("breakfast") || n.includes("lunch") || n.includes("dinner"))
    return <Utensils className={className} />;
  if (n.includes("insurance") || n.includes("secure") || n.includes("safety"))
    return <ShieldCheck className={className} />;
  if (n.includes("guide") || n.includes("tour") || n.includes("itinerary") || n.includes("map"))
    return <Map className={className} />;
  if (n.includes("photo") || n.includes("camera")) return <Camera className={className} />;
  if (n.includes("medical") || n.includes("first aid") || n.includes("doctor"))
    return <BriefcaseMedical className={className} />;
  return <Check className="w-5 h-5 text-emerald-600" />;
}