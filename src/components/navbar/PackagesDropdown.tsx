"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { LinkItem } from "@/types/navbar.types";

export default function PackagesDropdown({ link }: { link: LinkItem }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLLIElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li ref={wrapperRef} className="relative">
      {/* CLICK TOGGLE BUTTON */}
      <button
        type="button"
        className={`hover:text-lime-300 transition px-1 ${
          open ? "text-lime-300" : ""
        }`}
        onClick={() => setOpen((prev) => !prev)}
      >
        {link.label}
      </button>

      {/* DROPDOWN MENU */}
      <ul
        className={`absolute left-0 top-full bg-[#052210] border border-white/10 rounded shadow-lg w-56 p-3 flex flex-col gap-2 z-50 transition-all duration-150
          ${open ? "opacity-100 translate-y-2 pointer-events-auto" : "opacity-0 translate-y-0 pointer-events-none"}
        `}
      >
        <li>
          <Link
            href={link.href}
            className="font-semibold hover:text-lime-300"
            onClick={() => setOpen(false)}
          >
            All {link.label}
          </Link>
        </li>

        {link.submenu?.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="hover:text-lime-300"
              onClick={() => setOpen(false)}
            >
              {s.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
