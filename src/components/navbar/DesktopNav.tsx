"use client";

import Link from "next/link";
import PackagesDropdown from "./PackagesDropdown";
import { LinkItem } from "@/types/navbar.types";

export default function DesktopNav({ navLinks }: { navLinks: LinkItem[] }) {
  return (
    <ul className="hidden md:flex items-center gap-6">
      {navLinks.map((link) =>
        link.submenu ? (
          <PackagesDropdown key={link.label} link={link} />
        ) : (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-lime-300 transition">
              {link.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
