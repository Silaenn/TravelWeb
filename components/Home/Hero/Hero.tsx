"use client";
import React, { useEffect, useState } from "react";
import { TbArrowDown, TbSearch, TbMapPin, TbCalendar, TbUsers } from "react-icons/tb";
import { BRAND_TAGLINE } from "@/constant/constant";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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
      className="relative w-full min-h-[100dvh] overflow-hidden flex items-center justify-center pt-28 lg:pt-36"
      style={{ background: "var(--color-bg)" }}
      aria-label="The Traveller's Gazette — Front Page"
    >
      {/* CSS paper grain texture */}
      <div className="noise-overlay absolute inset-0 pointer-events-none z-0 opacity-[0.04]" aria-hidden="true" />

      <div className="container-voya relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Lead Story */}
          <div className="lg:col-span-8">
            <div
              className={`transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "0.1s" }}
            >
              <p className="section-kicker mb-3">THE FRONT PAGE</p>
              <h1
                className="section-headline text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-4"
                style={{ letterSpacing: "-0.02em" }}
              >
                The World Is Yours
                <br />
                <span style={{ color: "var(--color-accent)" }}>to Discover.</span>
              </h1>

              <p
                className="text-base md:text-lg max-w-xl leading-relaxed mb-6"
                style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
              >
                {BRAND_TAGLINE} Curated destinations, handpicked hotels, and
                extraordinary tours &mdash; all in one place.
              </p>

              <p className="byline mb-8">
                By the Editors &middot; A special travel dispatch
              </p>
            </div>

            <div className="double-rule mb-8" data-aos="fade-up" data-aos-delay="200" />

            {/* Classified Inquiries — Clean 1-layer */}
            <div
              className={`max-w-2xl transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <p className="section-kicker mb-3">CLASSIFIED INQUIRIES</p>
              <div
                className="p-5"
                style={{
                  background: "var(--color-bg-card)",
                  border: "2px solid var(--color-text-primary)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  {/* Destination */}
                  <div className="flex items-center gap-3">
                    <TbMapPin className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-accent)" }} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-mono uppercase tracking-wider mb-0.5" style={{ color: "var(--color-text-muted)" }}>
                        Destination
                      </p>
                      <input
                        type="text"
                        placeholder="Where to?"
                        className="w-full text-sm bg-transparent border-none outline-none"
                        style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
                        id="hero-destination-input"
                        aria-label="Enter your destination"
                      />
                    </div>
                  </div>

                  {/* Check-in */}
                  <div className="flex items-center gap-3">
                    <TbCalendar className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-accent)" }} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-mono uppercase tracking-wider mb-0.5" style={{ color: "var(--color-text-muted)" }}>
                        Check In
                      </p>
                      <input
                        type="date"
                        className="w-full text-sm bg-transparent border-none outline-none"
                        style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
                        id="hero-checkin-input"
                        aria-label="Check-in date"
                      />
                    </div>
                  </div>

                  {/* Check-out */}
                  <div className="flex items-center gap-3">
                    <TbCalendar className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-accent)" }} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-mono uppercase tracking-wider mb-0.5" style={{ color: "var(--color-text-muted)" }}>
                        Check Out
                      </p>
                      <input
                        type="date"
                        className="w-full text-sm bg-transparent border-none outline-none"
                        style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
                        id="hero-checkout-input"
                        aria-label="Check-out date"
                      />
                    </div>
                  </div>

                  {/* Guests + Find */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <TbUsers className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-accent)" }} />
                      <div className="min-w-0">
                        <p className="text-[10px] font-mono uppercase tracking-wider mb-0.5" style={{ color: "var(--color-text-muted)" }}>
                          Guests
                        </p>
                        <p className="text-sm truncate" style={{ color: "var(--color-text-primary)" }}>
                          2 Adults
                        </p>
                      </div>
                    </div>
                    <button
                      id="hero-search-btn"
                      className="whitespace-nowrap flex-shrink-0 flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold transition-all duration-200 hover:opacity-80 active:scale-95"
                      style={{
                        background: "var(--color-accent)",
                        color: "var(--color-bg-card)",
                        borderRadius: "var(--radius-sm)",
                        fontFamily: "var(--font-mono)",
                      }}
                      aria-label="Search"
                    >
                      <TbSearch className="w-3.5 h-3.5" />
                      Find
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sidebar — By the Numbers */}
          <div
            className={`lg:col-span-4 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div style={{ borderLeft: "3px solid var(--color-border)", paddingLeft: "1.5rem" }}>
              <div className="double-rule-thin mb-4" />
              <p className="section-kicker mb-5 text-left">BY THE NUMBERS</p>
              <div className="space-y-5">
                {[
                  { num: "500K+", label: "Happy Travellers" },
                  { num: "120+", label: "Destinations" },
                  { num: "98%", label: "Satisfaction" },
                ].map((stat, i) => (
                  <div key={i} className="text-left">
                    <p
                      className="text-3xl font-bold leading-none mb-0.5"
                      style={{ color: "var(--color-accent)", fontFamily: "var(--font-display)" }}
                    >
                      {stat.num}
                    </p>
                    <p
                      className="text-xs tracking-wider"
                      style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className="mt-5 pt-4"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                <div
                  className="p-3 text-left"
                  style={{
                    background: "var(--color-bg-card)",
                    border: "1px solid var(--color-accent)",
                    borderRadius: "var(--radius-sm)",
                  }}
                >
                  <p className="text-xs font-mono italic" style={{ color: "var(--color-accent)" }}>
                    &ldquo;Travel is the only thing you buy that makes you richer.&rdquo;
                  </p>
                  <p className="text-[10px] mt-1 font-mono" style={{ color: "var(--color-text-muted)" }}>
                    &mdash; Old Adage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down */}
        <div className="flex justify-center mt-12">
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center gap-1 transition-opacity duration-300 hover:opacity-60"
            style={{ color: "var(--color-text-muted)" }}
            aria-label="Continue reading"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest">Continue Reading</span>
            <TbArrowDown className="w-3.5 h-3.5" style={{ color: "var(--color-accent)" }} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
