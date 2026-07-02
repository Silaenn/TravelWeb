"use client";
import { hotelsData } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";
import { TbStar, TbHeart, TbMapPin, TbStarFilled } from "react-icons/tb";

const HotelSection = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="hotels"
      className="py-24 relative"
      style={{ background: "var(--color-bg-surface)" }}
      aria-labelledby="hotels-heading"
    >
      {/* Decorative background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-accent), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-voya">
        {/* Section Header */}
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
              Handpicked Hotels
            </p>
            <h2
              id="hotels-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{
                fontFamily: "var(--font-playfair, serif)",
                color: "var(--color-text-primary)",
              }}
            >
              Stay in the
              <br />
              <span className="text-gradient">Finest Places</span>
            </h2>
          </div>
          <button
            id="hotels-view-all-btn"
            className="hidden md:flex self-end px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-secondary)",
              background: "var(--color-bg-elevated)",
            }}
            aria-label="View all hotels"
          >
            View All Hotels →
          </button>
        </div>

        {/* Hotel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotelsData.map((hotel, i) => (
            <article
              key={hotel.id}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-card)",
              }}
              data-aos="fade-up"
              data-aos-delay={`${i * 80}`}
              aria-label={`${hotel.name} — ${hotel.location}`}
            >
              {/* Image container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(5% 0.02 250 / 0.7) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />

                {/* Wishlist button */}
                <button
                  onClick={() => toggleFavorite(hotel.id)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                  style={{
                    background: "oklch(0% 0 0 / 0.4)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid oklch(100% 0 0 / 0.1)",
                  }}
                  aria-label={
                    favorites.includes(hotel.id)
                      ? `Remove ${hotel.name} from wishlist`
                      : `Add ${hotel.name} to wishlist`
                  }
                  aria-pressed={favorites.includes(hotel.id)}
                  id={`hotel-wishlist-${hotel.id}`}
                >
                  <TbHeart
                    className="w-4 h-4 transition-colors duration-200"
                    style={{
                      color: favorites.includes(hotel.id)
                        ? "var(--color-accent)"
                        : "white",
                      fill: favorites.includes(hotel.id)
                        ? "var(--color-accent)"
                        : "none",
                    }}
                  />
                </button>

                {/* Rating badge */}
                <div
                  className="absolute bottom-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-full"
                  style={{
                    background: "oklch(0% 0 0 / 0.5)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <TbStarFilled
                    className="w-3 h-3"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <span
                    className="text-xs font-bold text-white"
                  >
                    {hotel.rating}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "oklch(70% 0.01 250)" }}
                  >
                    ({hotel.reviews})
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3
                  className="text-base font-semibold mb-2 leading-tight line-clamp-2 transition-colors duration-200 group-hover:text-[var(--color-accent)]"
                  style={{
                    fontFamily: "var(--font-playfair, serif)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {hotel.name}
                </h3>

                <div className="flex items-center gap-1.5 mb-4">
                  <TbMapPin
                    className="w-3.5 h-3.5 flex-shrink-0"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <p
                    className="text-xs truncate"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {hotel.location}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="my-3"
                  style={{ borderTop: "1px solid var(--color-border)" }}
                />

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      From
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{ color: "var(--color-accent)", fontFamily: "var(--font-playfair, serif)" }}
                    >
                      ${hotel.price}
                      <span
                        className="text-xs font-normal ml-1"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        /night
                      </span>
                    </p>
                  </div>
                  <button
                    id={`hotel-book-${hotel.id}`}
                    className="px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-accent), var(--color-accent-glow))",
                      color: "oklch(10% 0.02 250)",
                    }}
                    aria-label={`Book ${hotel.name}`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile — View All */}
        <div className="flex justify-center mt-10 md:hidden">
          <button
            id="hotels-view-all-mobile-btn"
            className="px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-secondary)",
              background: "var(--color-bg-elevated)",
            }}
            aria-label="View all hotels"
          >
            View All Hotels →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
