"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { LinkItem } from "@/types/navbar.types";

interface MobileNavProps {
  navLinks: LinkItem[];
  logo: StaticImageData | string; // <— removed any
}

export default function MobileNav({ navLinks, logo }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        aria-label="Open Menu"
        className="md:hidden p-2"
        onClick={() => setOpen(true)}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor">
          <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-[#052210] text-white z-50 p-5 transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-right mb-4"
          aria-label="Close Menu"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <div className="flex justify-center mb-6">
          <Image src={logo} alt="Logo" width={120} height={50} />
        </div>

        <ul className="flex flex-col gap-4">
          {navLinks.map(link =>
            link.submenu ? (
              <li key={link.label}>
                <details>
                  <summary className="cursor-pointer">{link.label}</summary>

                  <ul className="ml-4 mt-2 flex flex-col gap-2">
                    <li>
                      <Link href={link.href} onClick={() => setOpen(false)}>
                        All {link.label}
                      </Link>
                    </li>

                    {link.submenu.map(s => (
                      <li key={s.href}>
                        <Link href={s.href} onClick={() => setOpen(false)}>
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </aside>
    </>
  );
}
