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
        if (el && window.scrollY >= el.offsetTop - 120) {
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
        scrolled ? "shadow-md" : ""
      }`}
      style={{
        background: scrolled
          ? "rgba(242, 237, 230, 0.97)"
          : "rgba(242, 237, 230, 0)",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid var(--color-border)" : "1px solid transparent",
      }}
    >
      <div
        className="container-voya flex items-center justify-between"
        style={{ height: "64px" }}
      >
        {/* Logo */}
        <Link
          href="#hero"
          onClick={(e) => handleNavClick("#hero", e)}
          className="flex items-center gap-2"
          id="nav-logo"
          aria-label={`${BRAND_NAME} — Home`}
        >
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
            className="text-lg font-bold hidden sm:inline"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--color-text-primary)",
            }}
          >
            {BRAND_NAME}
          </span>
        </Link>

        {/* Nav links — desktop */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const sectionId = link.url.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <Link
                key={link.id}
                href={link.url}
                onClick={(e) => handleNavClick(link.url, e)}
                className="px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200"
                style={{
                  color: isActive ? "var(--color-primary)" : "var(--color-text-secondary)",
                  background: isActive ? "rgba(11, 94, 92, 0.08)" : "transparent",
                }}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA + Mobile button */}
        <div className="flex items-center gap-3">
          <button className="btn-primary text-xs hidden sm:flex" aria-label="Book now">
            Book Now
          </button>
          <button
            onClick={openNav}
            className="lg:hidden p-2 rounded-md transition-colors duration-200"
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
    </header>
  );
};

export default Nav;
