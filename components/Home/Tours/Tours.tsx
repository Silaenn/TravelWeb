import { toursData } from "@/data/data";
import Image from "next/image";
import React from "react";
import { TbMapPin, TbClock, TbStarFilled, TbArrowRight } from "react-icons/tb";

const ToursSection = () => {
  return (
    <section
      id="tours"
      className="py-20 md:py-28"
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="tours-heading"
    >
      <div className="container-voya">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          data-aos="fade-up"
        >
          <div>
            <p className="section-label mb-2">Tours &amp; Experiences</p>
            <h2
              id="tours-heading"
              className="section-heading"
            >
              Extraordinary
              <br />
              <span style={{ color: "var(--color-primary)" }}>Tours &amp; Experiences</span>
            </h2>
            <p className="text-sm mt-2" style={{ color: "var(--color-text-muted)" }}>
              Curated journeys for the modern explorer
            </p>
          </div>
          <button
            id="tours-view-all-btn"
            className="hidden md:flex btn-outline self-end"
            aria-label="Browse all tours"
          >
            Browse All Tours &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {toursData.map((tour, i) => (
            <article
              key={tour.id}
              className="group flex gap-4 p-4 card cursor-pointer transition-all duration-300 hover:border-[var(--color-primary)]"
              data-aos="fade-up"
              data-aos-delay={`${i * 80}`}
              aria-label={`${tour.title} — ${tour.location}`}
            >
              <div className="relative w-36 h-36 flex-shrink-0 overflow-hidden rounded-md">
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
                      "linear-gradient(135deg, rgba(11, 94, 92, 0.3), transparent)",
                  }}
                  aria-hidden="true"
                />
              </div>

              <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                <div>
                  <span className="tag inline-flex mb-2">
                    {tour.type}
                  </span>

                  <h3
                    className="text-sm font-semibold mb-2 leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[var(--color-primary)]"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {tour.title}
                  </h3>

                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="flex items-center gap-1 text-xs" style={{ color: "var(--color-text-muted)" }}>
                      <TbMapPin className="w-3 h-3" style={{ color: "var(--color-accent)" }} />
                      {tour.location}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: "var(--color-text-muted)" }}>
                      <TbClock className="w-3 h-3" style={{ color: "var(--color-accent)" }} />
                      {tour.time}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1.5">
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <TbStarFilled key={i} className="w-3 h-3" fill={i < Math.round(tour.rating) ? "var(--color-brass)" : "none"} />
                      ))}
                    </div>
                    <span className="text-xs font-semibold" style={{ color: "var(--color-text-primary)" }}>
                      {tour.rating}
                    </span>
                    <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      ({tour.reviews})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold" style={{ color: "var(--color-accent)", fontFamily: "var(--font-display)" }}>
                      ${tour.price}
                    </span>
                    <button
                      id={`tour-book-${tour.id}`}
                      className="btn-accent px-2 py-1 text-xs"
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
            className="btn-outline"
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
