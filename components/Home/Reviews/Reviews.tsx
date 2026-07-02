"use client";
import { reviewData } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";
import { TbChevronLeft, TbChevronRight, TbStarFilled } from "react-icons/tb";

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = reviewData.length;
  const visible = 3; // show 3 cards at a time on desktop

  const prev = () => setCurrent((p) => (p - 1 + total) % total);
  const next = () => setCurrent((p) => (p + 1) % total);

  const getVisible = () => {
    return Array.from({ length: visible }, (_, i) => reviewData[(current + i) % total]);
  };

  return (
    <section
      id="reviews"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="reviews-heading"
    >
      {/* Background grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

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
              Traveler Stories
            </p>
            <h2
              id="reviews-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{
                fontFamily: "var(--font-playfair, serif)",
                color: "var(--color-text-primary)",
              }}
            >
              What Our Travelers
              <br />
              <span className="text-gradient">Say About Voya</span>
            </h2>
          </div>

          {/* Overall rating */}
          <div
            className="flex items-center gap-4 px-6 py-4 rounded-2xl"
            style={{
              background: "var(--color-bg-surface)",
              border: "1px solid var(--color-border)",
            }}
            data-aos="fade-left"
          >
            <div>
              <p
                className="text-4xl font-bold"
                style={{ color: "var(--color-accent)", fontFamily: "var(--font-playfair, serif)" }}
              >
                4.9
              </p>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <TbStarFilled
                    key={i}
                    className="w-3.5 h-3.5"
                    style={{ color: "var(--color-accent)" }}
                  />
                ))}
              </div>
            </div>
            <div>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-text-primary)" }}
              >
                Overall Rating
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                Based on 12,000+ reviews
              </p>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
          aria-live="polite"
          aria-label="Customer reviews"
        >
          {getVisible().map((review, i) => (
            <article
              key={`${review.id}-${current}-${i}`}
              className="rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              style={{
                background: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-card)",
                animationDelay: `${i * 50}ms`,
              }}
              data-aos="fade-up"
              data-aos-delay={`${i * 80}`}
              aria-label={`Review by ${review.name}`}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <TbStarFilled
                    key={j}
                    className="w-3.5 h-3.5"
                    style={{ color: "var(--color-accent)" }}
                  />
                ))}
              </div>

              {/* Review text */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "var(--color-text-secondary)" }}
              >
                &ldquo;{review.review}&rdquo;
              </p>

              {/* Divider */}
              <div style={{ borderTop: "1px solid var(--color-border)" }} />

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {review.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
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
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:scale-95"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-secondary)",
              background: "var(--color-bg-elevated)",
            }}
            aria-label="Previous reviews"
          >
            <TbChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5" role="tablist" aria-label="Review pages">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to review ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "20px" : "6px",
                  height: "6px",
                  background:
                    i === current
                      ? "var(--color-accent)"
                      : "var(--color-border)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            id="reviews-next-btn"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:scale-95"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-secondary)",
              background: "var(--color-bg-elevated)",
            }}
            aria-label="Next reviews"
          >
            <TbChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
