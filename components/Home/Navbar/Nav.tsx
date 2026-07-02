"use client";
import { navLinks, BRAND_NAME } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import { TbCompass } from "react-icons/tb";

type Props = {
  openNav: () => void;
  isOpen: boolean;
};

const Nav = ({ openNav, isOpen }: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 60);

      // Active section tracking
      const sections = navLinks.map((l) => l.url.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    const id = url.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled ? "glass shadow-2xl" : ""
      }`}
      style={{
        borderBottom: scrolled
          ? "1px solid oklch(100% 0 0 / 0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="container-voya flex items-center h-[72px] justify-between">
        {/* Logo */}
        <Link
          href="#hero"
          onClick={(e) => handleNavClick("#hero", e)}
          className="flex items-center gap-3 group"
          id="nav-logo"
          aria-label={`${BRAND_NAME} — Home`}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent), var(--color-accent-glow))",
              boxShadow: "0 0 20px oklch(75% 0.16 85 / 0.3)",
            }}
          >
            <TbCompass className="w-5 h-5 text-black" />
          </div>
          <span
            className="text-2xl font-bold tracking-tight transition-colors duration-300"
            style={{
              fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
              color: "var(--color-text-primary)",
            }}
          >
            {BRAND_NAME}
          </span>
        </Link>

        {/* Nav Links — Desktop */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const sectionId = link.url.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={(e) => handleNavClick(link.url, e)}
                className={`text-sm font-medium transition-colors duration-200 hover-underline ${
                  isActive
                    ? "text-gradient"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            id="nav-book-cta"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent), var(--color-accent-glow))",
              color: "oklch(10% 0.02 250)",
              boxShadow: "0 4px 16px oklch(75% 0.16 85 / 0.25)",
            }}
            aria-label="Book Now"
          >
            Book Now
          </button>

          <button
            onClick={openNav}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200"
            style={{ color: "var(--color-text-primary)" }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <HiXMark className="w-6 h-6" />
            ) : (
              <HiBars3BottomRight className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
