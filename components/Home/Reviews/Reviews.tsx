"use client";
import { reviewData } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";
import { TbChevronLeft, TbChevronRight, TbStarFilled } from "react-icons/tb";

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = reviewData.length;
  const visible = 3;

  const prev = () => setCurrent((p) => (p - 1 + total) % total);
  const next = () => setCurrent((p) => (p + 1) % total);

  const getVisible = () => {
    return Array.from({ length: visible }, (_, i) => reviewData[(current + i) % total]);
  };

  return (
    <section
      id="reviews"
      className="py-24 relative"
      style={{ background: "var(--color-bg-surface)" }}
      aria-labelledby="reviews-heading"
    >
      <div className="container-voya">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          data-aos="fade-up"
        >
          <div>
            <p className="section-kicker mb-2">Letters from Our Travellers</p>
            <div className="double-rule-thin mb-4" />
            <h2
              id="reviews-heading"
              className="section-headline"
            >
              What Our Travellers
              <br />
              <span style={{ color: "var(--color-accent)" }}>Say About Us</span>
            </h2>
          </div>

          {/* Overall rating */}
          <div
            className="flex items-center gap-4 px-5 py-3 paper-card"
            style={{ borderRadius: "var(--radius-sm)" }}
            data-aos="fade-left"
          >
            <div>
              <p className="text-4xl font-bold" style={{ color: "var(--color-accent)", fontFamily: "var(--font-display)" }}>
                4.9
              </p>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <TbStarFilled key={i} className="w-3 h-3" style={{ color: "var(--color-aged-gold)" }} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                Overall Rating
              </p>
              <p className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
                Based on 12,000+ reviews
              </p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
          aria-live="polite"
          aria-label="Reader letters"
        >
          {getVisible().map((review, i) => (
            <article
              key={`${review.id}-${current}-${i}`}
              className="paper-card p-6 flex flex-col gap-4 transition-all duration-300"
              style={{ borderRadius: "var(--radius-sm)" }}
              data-aos="fade-up"
              data-aos-delay={`${i * 80}`}
              aria-label={`Letter from ${review.name}`}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <TbStarFilled key={j} className="w-3.5 h-3.5" style={{ color: "var(--color-aged-gold)" }} />
                ))}
              </div>

              {/* Review text — styled as letter */}
              <p
                className="text-sm leading-relaxed flex-1 italic"
                style={{ color: "var(--color-text-secondary)" }}
              >
                &ldquo;{review.review}&rdquo;
              </p>

              <div style={{ borderTop: "1px solid var(--color-border-dim)" }} />

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 sepia-img" style={{ borderRadius: "var(--radius-sm)" }}>
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                    {review.name}
                  </p>
                  <p className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
                    {review.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            id="reviews-prev-btn"
            className="flex items-center justify-center w-9 h-9 transition-all duration-200 hover:opacity-70 active:scale-95"
            style={{
              background: "var(--color-bg-card)",
              border: "2px solid var(--color-text-muted)",
              color: "var(--color-accent)",
              borderRadius: "var(--radius-sm)",
            }}
            aria-label="Previous letters"
          >
            <TbChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-1.5" role="tablist" aria-label="Letter pages">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to letter ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "20px" : "6px",
                  height: "6px",
                  background:
                    i === current
                      ? "var(--color-accent)"
                      : "var(--color-border)",
                  borderRadius: "2px",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            id="reviews-next-btn"
            className="flex items-center justify-center w-9 h-9 transition-all duration-200 hover:opacity-70 active:scale-95"
            style={{
              background: "var(--color-bg-card)",
              border: "2px solid var(--color-text-muted)",
              color: "var(--color-accent)",
              borderRadius: "var(--radius-sm)",
            }}
            aria-label="Next letters"
          >
            <TbChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
