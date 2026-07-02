"use client";
import React, { useEffect, useRef, useState } from "react";
import { TbArrowDown, TbSearch, TbMapPin, TbCalendar, TbUsers } from "react-icons/tb";
import { BRAND_TAGLINE } from "@/constant/constant";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fade in after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    const el = document.getElementById("destinations");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      aria-label="Voya Hero — Discover the World"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        src="/images/hero2.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "scale(1.05)" }}
        aria-hidden="true"
      />

      {/* Multi-layer overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              oklch(5% 0.02 250 / 0.6) 0%,
              oklch(5% 0.02 250 / 0.3) 40%,
              oklch(5% 0.02 250 / 0.55) 75%,
              oklch(5% 0.02 250 / 0.95) 100%
            )
          `,
        }}
        aria-hidden="true"
      />

      {/* Vignette left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(5% 0.02 250 / 0.5) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-voya relative z-10 h-full flex flex-col justify-center items-center text-center">
        {/* Eyebrow */}
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            background: "oklch(100% 0 0 / 0.08)",
            backdropFilter: "blur(12px)",
            border: "1px solid oklch(75% 0.16 85 / 0.3)",
            transitionDelay: "0.1s",
          }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-accent)" }}
          >
            ✦ Premium Travel Experience
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            fontFamily: "var(--font-playfair, 'Playfair Display', serif)",
            color: "var(--color-text-primary)",
            lineHeight: "1.1",
            transitionDelay: "0.2s",
          }}
        >
          The World Is Yours
          <br />
          <span className="text-gradient">to Discover.</span>
        </h1>

        {/* Subline */}
        <p
          className={`text-base sm:text-lg max-w-xl mx-auto mb-10 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{
            color: "oklch(80% 0.01 250)",
            lineHeight: "1.7",
            transitionDelay: "0.35s",
          }}
        >
          {BRAND_TAGLINE} Curated destinations, handpicked hotels, and
          extraordinary tours — all in one place.
        </p>

        {/* Search Box */}
        <div
          className={`w-full max-w-3xl transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <div
            className="glass rounded-2xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            {/* Location */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-text"
              style={{ background: "var(--color-bg-elevated)" }}
            >
              <TbMapPin
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "var(--color-accent)" }}
              />
              <div className="min-w-0">
                <p
                  className="text-xs font-semibold mb-1 uppercase tracking-wide"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Destination
                </p>
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full text-sm bg-transparent border-none outline-none"
                  style={{ color: "var(--color-text-primary)" }}
                  id="hero-destination-input"
                  aria-label="Enter your destination"
                />
              </div>
            </div>

            {/* Check-in */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer"
              style={{ background: "var(--color-bg-elevated)" }}
            >
              <TbCalendar
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "var(--color-accent)" }}
              />
              <div>
                <p
                  className="text-xs font-semibold mb-1 uppercase tracking-wide"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Check In
                </p>
                <input
                  type="date"
                  className="text-sm bg-transparent border-none outline-none"
                  style={{ color: "var(--color-text-primary)" }}
                  id="hero-checkin-input"
                  aria-label="Check-in date"
                />
              </div>
            </div>

            {/* Check-out */}
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer"
              style={{ background: "var(--color-bg-elevated)" }}
            >
              <TbCalendar
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "var(--color-accent)" }}
              />
              <div>
                <p
                  className="text-xs font-semibold mb-1 uppercase tracking-wide"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Check Out
                </p>
                <input
                  type="date"
                  className="text-sm bg-transparent border-none outline-none"
                  style={{ color: "var(--color-text-primary)" }}
                  id="hero-checkout-input"
                  aria-label="Check-out date"
                />
              </div>
            </div>

            {/* Guests + Search CTA */}
            <div className="flex gap-2">
              <div
                className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background: "var(--color-bg-elevated)" }}
              >
                <TbUsers
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--color-accent)" }}
                />
                <div>
                  <p
                    className="text-xs font-semibold mb-1 uppercase tracking-wide"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Guests
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text-primary)" }}>
                    2 Adults
                  </p>
                </div>
              </div>
              <button
                id="hero-search-btn"
                className="w-12 flex-shrink-0 rounded-xl flex items-center justify-center transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent), var(--color-accent-glow))",
                  boxShadow: "0 4px 20px oklch(75% 0.16 85 / 0.4)",
                }}
                aria-label="Search destinations"
              >
                <TbSearch className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className={`flex items-center gap-6 sm:gap-10 mt-10 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "0.65s" }}
        >
          {[
            { num: "500K+", label: "Travelers" },
            { num: "120+", label: "Destinations" },
            { num: "98%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className="text-xl font-bold"
                style={{ color: "var(--color-accent)", fontFamily: "var(--font-playfair, serif)" }}
              >
                {stat.num}
              </p>
              <p className="text-xs" style={{ color: "oklch(60% 0.01 250)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll down indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-opacity duration-300 hover:opacity-70"
        style={{ color: "oklch(70% 0.01 250)" }}
        aria-label="Scroll to destinations"
      >
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <TbArrowDown
          className="w-4 h-4 animate-bounce"
          style={{ color: "var(--color-accent)" }}
        />
      </button>
    </section>
  );
};

export default Hero;
