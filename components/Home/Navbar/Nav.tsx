"use client";
import { navLinks, BRAND_NAME } from "@/constant/constant";
import Image from "next/image";
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
      className="fixed top-0 left-0 w-full max-w-full z-[1000] transition-colors duration-500"
      style={{
        background: scrolled
          ? "rgba(242, 237, 230, 0.97)"
          : "rgba(242, 237, 230, 0)",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
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
          className="flex items-center gap-2 transition-all duration-200 hover:opacity-80 hover:scale-105"
          id="nav-logo"
          aria-label={`${BRAND_NAME} — Home`}
        >
          <Image
            src="/images/logo.png"
            alt={BRAND_NAME}
            width={32}
            height={32}
            priority
            className="w-8 h-8 object-contain"
          />
          <span
            className="text-lg font-bold hidden sm:inline"
            style={{
              fontFamily: "var(--font-display)",
              color: scrolled ? "var(--color-text-primary)" : "white",
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
                className="px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 hover:opacity-80 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:transition-all after:duration-300 hover:after:w-full after:bg-current"
                style={{
                  color: isActive
                    ? scrolled
                      ? "var(--color-primary)"
                      : "white"
                    : scrolled
                      ? "var(--color-text-secondary)"
                      : "rgba(255, 255, 255, 0.85)",
                  background: isActive
                    ? scrolled
                      ? "rgba(var(--color-primary-rgb), 0.08)"
                      : "rgba(255, 255, 255, 0.15)"
                    : "transparent",
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
          <button
            className="hidden lg:inline-flex text-xs font-semibold px-4 py-1.5 rounded-md transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg"
            style={{
              background: scrolled ? "var(--color-primary)" : "rgba(255, 255, 255, 0.2)",
              color: "white",
              border: scrolled
                ? "1px solid transparent"
                : "1px solid rgba(255, 255, 255, 0.3)",
            }}
            aria-label="Book now"
          >
            Book Now
          </button>
          <button
            onClick={openNav}
            className="lg:hidden p-2 rounded-md transition-all duration-200 hover:bg-white/20 hover:scale-105"
            style={{ color: scrolled ? "var(--color-text-primary)" : "white" }}
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
