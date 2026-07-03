"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  TbArrowDown,
  TbSearch,
  TbMapPin,
  TbCalendar,
} from "react-icons/tb";
import { BRAND_TAGLINE } from "@/constant/constant";

function formatDate(value: string) {
  if (!value) return "";
  const d = new Date(value + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function DateField({ label }: { label: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [date, setDate] = useState("");

  return (
    <div
      className="flex flex-col gap-1 px-3 py-2 rounded-lg cursor-pointer"
      style={{ background: "rgba(255, 255, 255, 0.9)" }}
      onClick={() => inputRef.current?.showPicker()}
    >
      <span className="text-[10px] font-semibold uppercase tracking-wider text-center" style={{ color: "var(--color-text-muted)" }}>
        {label}
      </span>
      <div className="flex items-center justify-center gap-2 relative">
        <TbCalendar className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-accent)" }} />
        <span className="text-sm" style={{ color: date ? "var(--color-text-primary)" : "var(--color-text-muted)" }}>
          {date ? formatDate(date) : "Select date"}
        </span>
        <input
          ref={inputRef}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ fontSize: "16px" }}
          aria-label={label}
        />
      </div>
    </div>
  );
}

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    const el = document.getElementById("why-choose");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-dvh overflow-hidden flex items-center justify-center"
      aria-label="Voya Travel — Hero"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11, 94, 92, 0.7) 0%, rgba(11, 94, 92, 0.4) 50%, rgba(11, 94, 92, 0.8) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(196, 154, 94, 0.15) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div
        className={`container-voya relative z-10 w-full transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--color-brass)" }}
            />
            <span
              className="text-xs font-semibold tracking-wider uppercase"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              {BRAND_TAGLINE}
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-4"
            style={{ color: "white" }}
          >
            Explore the World,
            <br />
            <span style={{ color: "var(--color-brass)" }}>Your Way</span>
          </h1>

          <p
            className="text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.75)" }}
          >
            Curated destinations, handpicked hotels, and unforgettable
            experiences &mdash; crafted for the modern explorer.
          </p>

          <div
            className="max-w-2xl mx-auto p-4 rounded-xl"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div
                className="flex flex-col gap-1 px-3 py-2 rounded-lg"
                style={{ background: "rgba(255, 255, 255, 0.9)" }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-center" style={{ color: "var(--color-text-muted)" }}>
                  Destination
                </span>
                <div className="flex items-center justify-center gap-2">
                  <TbMapPin className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-accent)" }} />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full text-sm bg-transparent border-none outline-none"
                    style={{ color: "var(--color-text-primary)" }}
                    aria-label="Enter destination"
                  />
                </div>
              </div>

              <DateField label="Check In" />
              <DateField label="Check Out" />

              <button
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: "var(--color-accent)",
                  color: "white",
                }}
                aria-label="Search"
              >
                <TbSearch className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 md:gap-10 mt-8">
            {[
              { num: "500K+", label: "Travellers" },
              { num: "120+", label: "Destinations" },
              { num: "98%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-lg md:text-xl font-bold"
                  style={{ color: "white", fontFamily: "var(--font-display)" }}
                >
                  {stat.num}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "rgba(255, 255, 255, 0.6)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-opacity duration-300 hover:opacity-60 animate-bounce"
        style={{ color: "rgba(255, 255, 255, 0.5)" }}
        aria-label="Scroll to learn more"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest">
          Scroll
        </span>
        <TbArrowDown className="w-3.5 h-3.5" />
      </button>
    </section>
  );
};

export default Hero;
