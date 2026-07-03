"use client";
import { navLinks, BRAND_NAME } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { HiXMark } from "react-icons/hi2";

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
      <div
        className="absolute inset-0"
        style={{ background: "rgba(44, 24, 16, 0.6)" }}
        onClick={closeNav}
        aria-hidden="true"
      />

      <div
        className="relative ml-auto w-[80%] max-w-[320px] h-full flex flex-col p-8"
        style={{
          background: "var(--color-bg)",
          borderLeft: "3px double var(--color-border)",
        }}
      >
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="masthead text-xl">{BRAND_NAME}</h2>
            <p className="masthead-sub">Est. 1924</p>
          </div>
          <button
            onClick={closeNav}
            className="p-2 rounded transition-colors duration-200"
            style={{
              color: "var(--color-text-secondary)",
              background: "var(--color-bg-surface)",
            }}
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
              className="px-3 py-2.5 text-sm font-medium transition-all duration-200"
              style={{
                color: "var(--color-text-secondary)",
                borderBottom: "1px solid var(--color-border-dim)",
                fontFamily: "var(--font-body)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p
          className="mt-auto pt-8 text-xs"
          style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
        >
          &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default MobileNav;
