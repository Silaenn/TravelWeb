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
      style={{ background: "var(--color-bg-surface)" }}
      aria-labelledby="destinations-heading"
    >
      <div className="container-voya">
        {/* Section Header */}
        <div className="mb-12" data-aos="fade-up">
          <p className="section-kicker mb-2">Travelogue</p>
          <div className="double-rule-thin mb-4" />
          <h2
            id="destinations-heading"
            className="section-headline"
          >
            Explore the World&apos;s
            <br />
            <span style={{ color: "var(--color-accent)" }}>Most Loved Places</span>
          </h2>
          <p className="byline mt-2">A curated selection of extraordinary destinations</p>
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
              className="text-xs font-mono uppercase tracking-wider px-4 py-1.5 transition-all duration-200 cursor-pointer"
              style={
                activeRegion === region
                  ? {
                      background: "var(--color-text-primary)",
                      color: "var(--color-bg-card)",
                      border: "1px solid var(--color-text-primary)",
                    }
                  : {
                      background: "transparent",
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
              className="group relative overflow-hidden cursor-pointer paper-card"
              style={{
                height: "300px",
                borderRadius: "var(--radius-sm)",
              }}
              data-aos="fade-up"
              data-aos-delay={`${i * 60}`}
              role="article"
              aria-label={`${dest.country} — ${dest.highlight}`}
            >
              <Image
                src={dest.image}
                alt={`${dest.country} travel destination`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 sepia-img"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(44, 24, 16, 0.85) 0%, rgba(44, 24, 16, 0.1) 50%, transparent 100%)",
                }}
                aria-hidden="true"
              />

              <div
                className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider"
                style={{
                  background: "var(--color-bg-card)",
                  color: "var(--color-accent)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                {dest.region}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3
                  className="text-lg font-bold mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-bg-card)",
                  }}
                >
                  {dest.country}
                </h3>
                <p
                  className="text-xs mb-2"
                  style={{ color: "rgba(242, 238, 231, 0.7)" }}
                >
                  {dest.highlight}
                </p>
                <div className="flex items-center gap-1">
                  <TbUsers className="w-3 h-3" style={{ color: "var(--color-aged-gold)" }} />
                  <span className="text-xs font-mono" style={{ color: "var(--color-aged-gold)" }}>
                    {dest.travelers} travellers
                  </span>
                </div>
              </div>

              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              >
                <span className="ink-btn text-xs px-4 py-1.5" style={{ borderColor: "var(--color-bg-card)", color: "var(--color-bg-card)" }}>
                  Read More &rarr;
                </span>
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
            className="ink-btn flex items-center gap-2 text-xs"
            aria-label="View all destinations"
          >
            <TbMapPin className="w-3.5 h-3.5" />
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
