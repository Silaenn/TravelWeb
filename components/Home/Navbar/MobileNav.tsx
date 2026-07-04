"use client";
import { navLinks, BRAND_NAME } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { HiXMark } from "react-icons/hi2";

type Props = {
  closeNav: () => void;
  isOpen: boolean;
};

const MobileNav = ({ closeNav, isOpen }: Props) => {
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
    <div
      className={`fixed inset-0 z-[1001] flex transition-all duration-300 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-label="Mobile navigation"
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        style={{ background: "rgba(28, 24, 20, 0.5)" }}
        onClick={closeNav}
        aria-hidden="true"
      />

      <div
        className={`relative ml-auto w-[80%] max-w-[320px] h-full flex flex-col p-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ background: "var(--color-bg)" }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 flex items-center justify-center rounded-md"
              style={{ background: "var(--color-primary)" }}
            >
              <span
                className="text-sm font-bold"
                style={{ color: "var(--color-bg-card)", fontFamily: "var(--font-display)" }}
              >
                V
              </span>
            </div>
            <span
              className="text-base font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
            >
              {BRAND_NAME}
            </span>
          </div>
          <button
            onClick={closeNav}
            className="p-2 rounded-md transition-all duration-200 hover:opacity-80 hover:rotate-90 hover:scale-110"
            style={{ color: "var(--color-text-secondary)", background: "var(--color-bg-surface)" }}
            aria-label="Close menu"
          >
            <HiXMark className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-1" aria-label="Mobile navigation links">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={(e) => handleNavClick(link.url, e)}
              className="px-3 py-2.5 text-sm font-medium rounded-md transition-all duration-200 hover:bg-black/10 hover:translate-x-1"
              style={{
                color: "var(--color-text-secondary)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="btn-primary mt-6 w-full" aria-label="Book now">
          Book Now
        </button>

        <p
          className="mt-auto pt-8 text-xs"
          style={{ color: "var(--color-text-muted)" }}
        >
          &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default MobileNav;
