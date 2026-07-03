"use client";
import { navLinks, BRAND_NAME } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

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
        scrolled ? "shadow-elevated" : ""
      }`}
      style={{
        background: scrolled ? "var(--color-bg)" : "var(--color-bg)",
        borderBottom: scrolled
          ? "3px double var(--color-border)"
          : "3px double var(--color-border)",
      }}
    >
      <div className="container-voya flex flex-col items-center py-3">
        {/* Masthead row */}
        <div className="w-full flex items-center justify-between">
          {/* Left: date (desktop only) */}
          <div className="hidden lg:block">
            <span className="masthead-sub">{new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</span>
          </div>

          {/* Center: Brand nameplate */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick("#hero", e)}
            className="text-center group"
            id="nav-logo"
            aria-label={`${BRAND_NAME} — Home`}
          >
            <h1 className="masthead text-2xl md:text-3xl lg:text-4xl tracking-wide leading-none">
              {BRAND_NAME}
            </h1>
            <p className="masthead-sub mt-0.5">{new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>
          </Link>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              id="nav-book-cta"
              className="hidden md:flex ink-btn ink-btn-accent text-xs px-4 py-1.5"
              aria-label="Subscribe"
            >
              Subscribe
            </button>

            <button
              onClick={openNav}
              className="lg:hidden p-2 rounded transition-colors duration-200"
              style={{ color: "var(--color-text-primary)" }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiXMark className="w-5 h-5" />
              ) : (
                <HiBars3BottomRight className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Bottom rule + nav links */}
        <div
          className="w-full mt-2 pt-2 hidden lg:flex items-center justify-center gap-6"
          style={{ borderTop: "1px solid var(--color-border-dim)" }}
        >
          <nav className="flex items-center gap-6" aria-label="Primary navigation">
            {navLinks.map((link) => {
              const sectionId = link.url.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  onClick={(e) => handleNavClick(link.url, e)}
                  className="text-xs font-medium uppercase tracking-widest transition-colors duration-200"
                  style={{
                    color: isActive ? "var(--color-accent)" : "var(--color-text-secondary)",
                    fontFamily: "var(--font-body)",
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
