"use client";
import { navLinks, BRAND_NAME } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { HiXMark } from "react-icons/hi2";
import { TbCompass } from "react-icons/tb";

type Props = {
  closeNav: () => void;
};

const MobileNav = ({ closeNav }: Props) => {
  const handleNavClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    const id = url.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    closeNav();
  };

  return (
    <div className="fixed inset-0 z-[999] flex" aria-label="Mobile navigation">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: "oklch(0% 0 0 / 0.7)", backdropFilter: "blur(4px)" }}
        onClick={closeNav}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className="relative ml-auto w-[80%] max-w-[320px] h-full flex flex-col p-8"
        style={{
          background: "var(--color-bg-elevated)",
          borderLeft: "1px solid var(--color-border)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent), var(--color-accent-glow))",
              }}
            >
              <TbCompass className="w-4 h-4 text-black" />
            </div>
            <span
              className="text-xl font-bold"
              style={{ fontFamily: "var(--font-playfair, serif)", color: "var(--color-text-primary)" }}
            >
              {BRAND_NAME}
            </span>
          </div>
          <button
            onClick={closeNav}
            className="p-2 rounded-lg transition-colors duration-200"
            style={{
              color: "var(--color-text-secondary)",
              background: "var(--color-bg-surface)",
            }}
            aria-label="Close menu"
          >
            <HiXMark className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-2" aria-label="Mobile navigation links">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={(e) => handleNavClick(link.url, e)}
              className="px-4 py-3 rounded-lg text-base font-medium transition-all duration-200"
              style={{
                color: "var(--color-text-secondary)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-accent)";
                (e.currentTarget as HTMLElement).style.background = "var(--color-bg-surface)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div
          className="my-8"
          style={{ borderTop: "1px solid var(--color-border)" }}
        />

        {/* CTA */}
        <button
          id="mobile-nav-book-cta"
          className="w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-95"
          style={{
            background:
              "linear-gradient(135deg, var(--color-accent), var(--color-accent-glow))",
            color: "oklch(10% 0.02 250)",
            boxShadow: "0 4px 20px oklch(75% 0.16 85 / 0.3)",
          }}
          aria-label="Book Now"
        >
          Book Now
        </button>

        {/* Footer note */}
        <p
          className="mt-auto pt-8 text-xs"
          style={{ color: "var(--color-text-muted)" }}
        >
          © 2025 Voya. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default MobileNav;
