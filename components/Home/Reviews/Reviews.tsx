"use client";
import { reviewData } from "@/data/data";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { TbChevronLeft, TbChevronRight, TbStarFilled } from "react-icons/tb";

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const total = reviewData.length;
  const visible = 3;

  const prev = useCallback(() => {
    setDirection("left");
    setCurrent((p) => (p - 1 + total) % total);
  }, [total]);

  const next = useCallback(() => {
    setDirection("right");
    setCurrent((p) => (p + 1) % total);
  }, [total]);

  const getVisible = () => {
    return Array.from({ length: visible }, (_, i) => reviewData[(current + i) % total]);
  };

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 relative"
      style={{ background: "var(--color-bg-surface)" }}
      aria-labelledby="reviews-heading"
    >
      <div className="container-voya">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          data-aos="fade-up"
        >
          <div>
            <p className="section-label mb-2">Reviews</p>
            <h2
              id="reviews-heading"
              className="section-heading"
            >
              What Our Travellers
              <br />
              <span style={{ color: "var(--color-primary)" }}>Say About Us</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 px-5 py-3 card" data-aos="fade-left">
            <div>
              <p className="text-4xl font-bold" style={{ color: "var(--color-primary)", fontFamily: "var(--font-display)" }}>
                4.9
              </p>
              <div className="rating-stars flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <TbStarFilled key={i} className="w-3 h-3" fill="var(--color-brass)" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                Overall Rating
              </p>
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                Based on 12,000+ reviews
              </p>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 overflow-hidden"
          aria-live="polite"
        >
          {getVisible().map((review, i) => (
            <article
              key={`${review.id}-${current}-${i}`}
              className="card p-6 flex flex-col gap-4 transition-all duration-400"
              style={{
                animation: `slideInFrom${direction === "right" ? "Right" : "Left"} 0.4s ease-out`,
              }}
              aria-label={`Review from ${review.name}`}
            >
              <div className="rating-stars flex gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <TbStarFilled key={j} className="w-3.5 h-3.5" fill="var(--color-brass)" />
                ))}
              </div>

              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--color-text-secondary)" }}>
                &ldquo;{review.review}&rdquo;
              </p>

              <div style={{ borderTop: "1px solid var(--color-border-dim)" }} />

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
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
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

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            id="reviews-prev-btn"
            className="flex items-center justify-center w-9 h-9 transition-all duration-200 hover:opacity-70 active:scale-95 rounded-md"
            style={{
              background: "var(--color-bg-card)",
              border: "1.5px solid var(--color-border)",
              color: "var(--color-primary)",
            }}
            aria-label="Previous reviews"
          >
            <TbChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-1.5" role="tablist" aria-label="Review pages">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? "right" : "left");
                  setCurrent(i);
                }}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to review ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "20px" : "6px",
                  height: "6px",
                  background:
                    i === current
                      ? "var(--color-primary)"
                      : "var(--color-border)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            id="reviews-next-btn"
            className="flex items-center justify-center w-9 h-9 transition-all duration-200 hover:opacity-70 active:scale-95 rounded-md"
            style={{
              background: "var(--color-bg-card)",
              border: "1.5px solid var(--color-border)",
              color: "var(--color-primary)",
            }}
            aria-label="Next reviews"
          >
            <TbChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ReviewsSection;
