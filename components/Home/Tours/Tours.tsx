import { toursData } from "@/data/data";
import Image from "next/image";
import React from "react";
import { TbMapPin, TbClock, TbStarFilled, TbArrowRight } from "react-icons/tb";

const ToursSection = () => {
  return (
    <section
      id="tours"
      className="py-24"
      style={{ background: "var(--color-bg-surface)" }}
      aria-labelledby="tours-heading"
    >
      <div className="container-voya">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          data-aos="fade-up"
        >
          <div>
            <p className="section-kicker mb-2">Expeditions &amp; Excursions</p>
            <div className="double-rule-thin mb-4" />
            <h2
              id="tours-heading"
              className="section-headline"
            >
              Extraordinary
              <br />
              <span style={{ color: "var(--color-accent)" }}>Tours &amp; Experiences</span>
            </h2>
            <p className="byline mt-2">Curated journeys for the modern explorer</p>
          </div>
          <button
            id="tours-view-all-btn"
            className="hidden md:flex ink-btn text-xs self-end"
            aria-label="Browse all tours"
          >
            Browse All Tours &rarr;
          </button>
        </div>

        {/* Tour Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {toursData.map((tour, i) => (
            <article
              key={tour.id}
              className="group flex gap-4 p-4 paper-card cursor-pointer transition-all duration-300 hover:border-[var(--color-accent)]"
              style={{ borderRadius: "var(--radius-sm)" }}
              data-aos="fade-up"
              data-aos-delay={`${i * 80}`}
              aria-label={`${tour.title} — ${tour.location}`}
            >
              <div className="relative w-36 h-36 flex-shrink-0 overflow-hidden" style={{ borderRadius: "var(--radius-sm)" }}>
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 sepia-img"
                  sizes="144px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(44, 24, 16, 0.3), transparent)",
                  }}
                  aria-hidden="true"
                />
              </div>

              <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                <div>
                  <span
                    className="inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider mb-2"
                    style={{
                      background: "rgba(139, 58, 42, 0.08)",
                      color: "var(--color-accent)",
                      border: "1px solid rgba(139, 58, 42, 0.2)",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    {tour.type}
                  </span>

                  <h3
                    className="text-sm font-semibold mb-2 leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[var(--color-accent)]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                  >
                    {tour.title}
                  </h3>

                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="flex items-center gap-1 text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
                      <TbMapPin className="w-3 h-3" style={{ color: "var(--color-accent)" }} />
                      {tour.location}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
                      <TbClock className="w-3 h-3" style={{ color: "var(--color-accent)" }} />
                      {tour.time}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1.5">
                    <TbStarFilled className="w-3.5 h-3.5" style={{ color: "var(--color-aged-gold)" }} />
                    <span className="text-xs font-semibold" style={{ color: "var(--color-text-primary)" }}>
                      {tour.rating}
                    </span>
                    <span className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
                      ({tour.reviews})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold" style={{ color: "var(--color-accent)", fontFamily: "var(--font-display)" }}>
                      ${tour.price}
                    </span>
                    <button
                      id={`tour-book-${tour.id}`}
                      className="ink-btn ink-btn-accent px-2 py-1 text-xs"
                      aria-label={`Book tour: ${tour.title}`}
                    >
                      <TbArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-10 md:hidden">
          <button
            id="tours-view-all-mobile-btn"
            className="ink-btn text-xs"
            aria-label="Browse all tours"
          >
            Browse All Tours &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
