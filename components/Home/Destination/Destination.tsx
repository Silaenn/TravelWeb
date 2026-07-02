"use client";
import React, { useState } from "react";
import { destinationData, Region } from "@/data/data";
import Image from "next/image";
import { TbMapPin, TbUsers } from "react-icons/tb";

const REGIONS: Region[] = ["All", "Europe", "Asia", "Americas", "Oceania"];

const DestinationSection = () => {
  const [activeRegion, setActiveRegion] = useState<Region>("All");

  const filtered =
    activeRegion === "All"
      ? destinationData
      : destinationData.filter((d) => d.region === activeRegion);

  return (
    <section
      id="destinations"
      className="py-24"
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="destinations-heading"
    >
      <div className="container-voya">
        {/* Section Header */}
        <div className="mb-12" data-aos="fade-up">
          <div className="section-divider mb-4" />
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Popular Destinations
          </p>
          <h2
            id="destinations-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{
              fontFamily: "var(--font-playfair, serif)",
              color: "var(--color-text-primary)",
            }}
          >
            Explore the World&apos;s
            <br />
            <span className="text-gradient">Most Loved Places</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="group"
          aria-label="Filter destinations by region"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {REGIONS.map((region) => (
            <button
              key={region}
              id={`destination-filter-${region.toLowerCase()}`}
              onClick={() => setActiveRegion(region)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-250 cursor-pointer"
              style={
                activeRegion === region
                  ? {
                      background:
                        "linear-gradient(135deg, var(--color-accent), var(--color-accent-glow))",
                      color: "oklch(10% 0.02 250)",
                      boxShadow: "0 4px 16px oklch(75% 0.16 85 / 0.3)",
                    }
                  : {
                      background: "var(--color-bg-surface)",
                      color: "var(--color-text-secondary)",
                      border: "1px solid var(--color-border)",
                    }
              }
              aria-pressed={activeRegion === region}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((dest, i) => (
            <div
              key={dest.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              style={{
                height: i === 0 || i === 3 ? "380px" : "280px",
                background: "var(--color-bg-card)",
                boxShadow: "var(--shadow-card)",
              }}
              data-aos="fade-up"
              data-aos-delay={`${i * 60}`}
              role="article"
              aria-label={`${dest.country} — ${dest.highlight}`}
            >
              {/* Image */}
              <Image
                src={dest.image}
                alt={`${dest.country} travel destination`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, oklch(5% 0.02 250 / 0.9) 0%, oklch(5% 0.02 250 / 0.2) 50%, transparent 100%)",
                }}
                aria-hidden="true"
              />

              {/* Region badge */}
              <div
                className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  background: "oklch(0% 0 0 / 0.5)",
                  backdropFilter: "blur(8px)",
                  color: "var(--color-accent)",
                  border: "1px solid oklch(75% 0.16 85 / 0.3)",
                }}
              >
                {dest.region}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3
                  className="text-lg font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-playfair, serif)" }}
                >
                  {dest.country}
                </h3>
                <p
                  className="text-xs mb-2"
                  style={{ color: "oklch(70% 0.01 250)" }}
                >
                  {dest.highlight}
                </p>
                <div className="flex items-center gap-1">
                  <TbUsers className="w-3 h-3" style={{ color: "var(--color-accent)" }} />
                  <span className="text-xs" style={{ color: "var(--color-accent)" }}>
                    {dest.travelers} travelers
                  </span>
                </div>
              </div>

              {/* Hover: explore button */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              >
                <div
                  className="px-5 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: "var(--color-accent)",
                    color: "oklch(10% 0.02 250)",
                  }}
                >
                  Explore →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className="flex justify-center mt-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <button
            id="destinations-view-all-btn"
            className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-80 active:scale-95"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-secondary)",
              background: "var(--color-bg-surface)",
            }}
            aria-label="View all destinations"
          >
            <TbMapPin className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
