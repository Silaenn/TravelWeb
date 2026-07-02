import { toursData } from "@/data/data";
import Image from "next/image";
import React from "react";
import { TbMapPin, TbClock, TbStarFilled, TbArrowRight } from "react-icons/tb";

const ToursSection = () => {
  return (
    <section
      id="tours"
      className="py-24"
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="tours-heading"
    >
      <div className="container-voya">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          data-aos="fade-up"
        >
          <div>
            <div className="section-divider mb-4" />
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Curated Experiences
            </p>
            <h2
              id="tours-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{
                fontFamily: "var(--font-playfair, serif)",
                color: "var(--color-text-primary)",
              }}
            >
              Extraordinary
              <br />
              <span className="text-gradient">Tours & Experiences</span>
            </h2>
          </div>
          <button
            id="tours-view-all-btn"
            className="hidden md:flex self-end px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-secondary)",
              background: "var(--color-bg-surface)",
            }}
            aria-label="Browse all tours"
          >
            Browse All Tours →
          </button>
        </div>

        {/* Tour Cards — Horizontal list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {toursData.map((tour, i) => (
            <article
              key={tour.id}
              className="group flex gap-4 rounded-2xl p-4 overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)] cursor-pointer"
              style={{
                background: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-card)",
              }}
              data-aos="fade-up"
              data-aos-delay={`${i * 80}`}
              aria-label={`${tour.title} — ${tour.location}`}
            >
              {/* Image */}
              <div
                className="relative w-36 h-36 flex-shrink-0 rounded-xl overflow-hidden"
              >
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="144px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(5% 0.02 250 / 0.3), transparent)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                <div>
                  {/* Type badge */}
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-2"
                    style={{
                      background: "oklch(75% 0.16 85 / 0.12)",
                      color: "var(--color-accent)",
                      border: "1px solid oklch(75% 0.16 85 / 0.2)",
                    }}
                  >
                    {tour.type}
                  </span>

                  <h3
                    className="text-sm font-semibold mb-2 leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[var(--color-accent)]"
                    style={{
                      fontFamily: "var(--font-playfair, serif)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {tour.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <TbMapPin className="w-3 h-3" style={{ color: "var(--color-accent)" }} />
                      {tour.location}
                    </span>
                    <span
                      className="flex items-center gap-1 text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <TbClock className="w-3 h-3" style={{ color: "var(--color-accent)" }} />
                      {tour.time}
                    </span>
                  </div>
                </div>

                {/* Bottom: Rating + Price */}
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1.5">
                    <TbStarFilled className="w-3.5 h-3.5" style={{ color: "var(--color-accent)" }} />
                    <span
                      className="text-xs font-semibold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {tour.rating}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      ({tour.reviews})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="text-base font-bold"
                      style={{ color: "var(--color-accent)", fontFamily: "var(--font-playfair, serif)" }}
                    >
                      ${tour.price}
                    </span>
                    <button
                      id={`tour-book-${tour.id}`}
                      className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 hover:opacity-90 active:scale-95"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--color-accent), var(--color-accent-glow))",
                        color: "oklch(10% 0.02 250)",
                      }}
                      aria-label={`Book tour: ${tour.title}`}
                    >
                      <TbArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile — View All */}
        <div className="flex justify-center mt-10 md:hidden">
          <button
            id="tours-view-all-mobile-btn"
            className="px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-secondary)",
              background: "var(--color-bg-surface)",
            }}
            aria-label="Browse all tours"
          >
            Browse All Tours →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
