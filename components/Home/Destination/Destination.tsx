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
      className="py-20 md:py-28"
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="destinations-heading"
    >
      <div className="container-voya">
        <div className="mb-12" data-aos="fade-up">
          <p className="section-label mb-2">Destinations</p>
          <h2
            id="destinations-heading"
            className="section-heading"
          >
            Explore the World&apos;s
            <br />
            <span style={{ color: "var(--color-primary)" }}>Most Loved Places</span>
          </h2>
          <p className="text-sm mt-2" style={{ color: "var(--color-text-muted)" }}>
            A curated selection of extraordinary destinations
          </p>
        </div>

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
              className="text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer"
              style={
                activeRegion === region
                  ? {
                      background: "var(--color-primary)",
                      color: "white",
                    }
                  : {
                      background: "var(--color-bg-card)",
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((dest, i) => (
            <div
              key={dest.id}
              className="group relative overflow-hidden cursor-pointer card"
              style={{ height: "300px" }}
              data-aos="fade-up"
              data-aos-delay={`${i * 60}`}
              role="article"
              aria-label={`${dest.country} — ${dest.highlight}`}
            >
              <Image
                src={dest.image}
                alt={`${dest.country} travel destination`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(11, 94, 92, 0.85) 0%, rgba(11, 94, 92, 0.1) 50%, transparent 100%)",
                }}
                aria-hidden="true"
              />

              <div className="tag absolute top-3 left-3">
                {dest.region}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3
                  className="text-lg font-bold mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "white" }}
                >
                  {dest.country}
                </h3>
                <p className="text-xs mb-2" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                  {dest.highlight}
                </p>
                <div className="flex items-center gap-1">
                  <TbUsers className="w-3 h-3" style={{ color: "var(--color-brass)" }} />
                  <span className="text-xs font-semibold" style={{ color: "var(--color-brass)" }}>
                    {dest.travelers} travellers
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12" data-aos="fade-up" data-aos-delay="200">
          <button
            id="destinations-view-all-btn"
            className="btn-outline flex items-center gap-2"
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
