"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  companyDetailsFooter,
  footerData,
  footerBottomLinks,
} from "@/src/assets/data/footer";
import logoWhite from "@/public/images/outboundLogoWhite.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#052210] text-white w-full py-12 rounded-none shadow-md">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-wrap gap-6 mb-12 px-6 sm:px-10 lg:px-16">
        {/* Company Details Section (Always Centered) */}
        <div className="w-full text-center flex flex-col justify-start items-center">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Image
              src={logoWhite}
              alt="Outbound Travelers Logo"
              height={300}
              className="object-contain h-full"
              priority
            />
          </div>
          <p className="text-xs text-white mb-4 leading-relaxed text-center sm:text-left max-w-lg">
            {companyDetailsFooter.description}
          </p>
          <p className="text-[10px] text-white text-center sm:text-left">
            {companyDetailsFooter.trustedBy}
          </p>
        </div>

        {/* Remaining Footer Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 w-full justify-items-center mx-auto">
          {footerData.map((section, i) => (
            <div
              key={i}
              className="pt-3 flex flex-col justify-start min-h-[180px] w-full max-w-[220px] sm:max-w-60"
            >
              {section.items ? (
                <>
                  <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3 border-b border-gray-200 pb-1">
                    {section.title}
                  </h3>
                  <ul className="space-y-1.5 text-xs text-white">
                    {section.items.map((item, j) => (
                      <li key={j}>
                        {item.link ? (
                          <Link
                            href={item.link}
                            className="hover:text-blue-600 transition underline-offset-2 hover:underline"
                            aria-label={item.label}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span>{item.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                section.contact && (
                  <>
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3 border-b border-gray-200 pb-1">
                      {section.title}
                    </h3>
                    <div className="space-y-2 text-xs text-white">
                      <div>
                        <p className="text-white text-[10px] mb-0.5">Phone:</p>
                        <p>
                          <a
                            href={`tel:${section.contact.phone.replace(
                              /[^+\d]/g,
                              ""
                            )}`}
                            className="hover:text-blue-600"
                            aria-label="Phone"
                          >
                            {section.contact.phone}
                          </a>
                        </p>
                      </div>
                      <div>
                        <p className="text-white text-[10px] mb-0.5">Email:</p>
                        <p>
                          <a
                            href={`mailto:${section.contact.email}`}
                            className="hover:text-blue-600"
                            aria-label="Email"
                          >
                            {section.contact.email}
                          </a>
                        </p>
                      </div>
                      <div>
                        <p className="font-medium text-white mb-0.5">
                          Travel Guides:
                        </p>
                        <p className="text-[10px]">{section.contact.guideInfo}</p>
                      </div>
                    </div>
                  </>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 pt-6 flex flex-col items-center justify-center gap-4 text-xs text-white px-6 lg:px-16">
        <p>© 2022 Outbound Travelers. All rights reserved.</p>

        <div className="flex flex-wrap justify-center gap-2">
          {footerBottomLinks.map((item) => (
            <Link
              key={item.label}
              href={item.link}
              className="hover:text-blue-600"
              aria-label={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
