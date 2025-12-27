"use client";

import Image from "next/image";
import Link from "next/link";

import logoWhite from "@/public/images/outboundLogoWhite.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { LinkItem } from "@/types/navbar.types";

const navLinks: LinkItem[] = [
  {
    label: "Packages",
    href: "/packages",
    submenu: [
      { label: "International Packages", href: "/packages/international" },
      { label: "Domestic Packages", href: "/packages/domestic" },
      { label: "Honeymoon Packages", href: "/packages/honeymoon" },
    ]
  },
  {
    label: "Destinations",
    href: "/destinations",
    submenu: [
      { label: "International", href: "/destinations?type=international" },
      { label: "Domestic", href: "/destinations?type=domestic" }
    ]
  },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export default function TopNavbar() {
  return (
    <header className="w-full bg-[#052210] text-white shadow-lg sticky top-0 z-50">
      <nav
        aria-label="Main Navigation"
        className="flex justify-between items-center px-4 py-4 container mx-auto"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logoWhite} alt="Outbound Travelers Logo" width={40} height={40} priority />
          <span className="text-lg font-semibold">Outbound Travelers</span>
        </Link>

        {/* Desktop Navbar */}
        <DesktopNav navLinks={navLinks} />

        {/* Mobile Menu */}
        <MobileNav navLinks={navLinks} logo={logoWhite} />
      </nav>
    </header>
  );
}
