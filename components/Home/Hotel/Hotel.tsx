"use client";
import { hotelsData } from "@/data/data";
import Image from "next/image";
import React, { useState } from "react";
import { TbMapPin, TbHeart, TbStarFilled } from "react-icons/tb";

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
      className="py-20 md:py-28 relative"
      style={{ background: "var(--color-bg-surface)" }}
      aria-labelledby="hotels-heading"
    >
      <div className="container-voya">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          data-aos="fade-up"
        >
          <div>
            <p className="section-label mb-2">Hotels</p>
            <h2
              id="hotels-heading"
              className="section-heading"
            >
              Stay in the
              <br />
              <span style={{ color: "var(--color-primary)" }}>Finest Places</span>
            </h2>
            <p className="text-sm mt-2" style={{ color: "var(--color-text-muted)" }}>
              Handpicked lodgings for every traveller
            </p>
          </div>
          <button
            id="hotels-view-all-btn"
            className="hidden md:flex btn-outline self-end"
            aria-label="View all hotels"
          >
            View All Hotels &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hotelsData.map((hotel, i) => (
            <article
              key={hotel.id}
              className="group card transition-all duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={`${i * 80}`}
              aria-label={`${hotel.name} — ${hotel.location}`}
            >
              <div className="relative h-56 overflow-hidden rounded-t-[10px]">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(var(--color-primary-rgb), 0.5) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />

                <button
                  onClick={() => toggleFavorite(hotel.id)}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md active:scale-95 rounded-md"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                  }}
                  aria-label={
                    favorites.includes(hotel.id)
                      ? `Remove ${hotel.name} from saved`
                      : `Save ${hotel.name}`
                  }
                  aria-pressed={favorites.includes(hotel.id)}
                  id={`hotel-wishlist-${hotel.id}`}
                >
                  <TbHeart
                    className="w-3.5 h-3.5 transition-colors duration-200"
                    style={{
                      color: favorites.includes(hotel.id) ? "var(--color-accent)" : "var(--color-text-muted)",
                      fill: favorites.includes(hotel.id) ? "var(--color-accent)" : "none",
                    }}
                  />
                </button>

                <div
                  className="absolute bottom-3 left-3 flex items-center gap-1 px-2 py-0.5 rounded-md"
                  style={{ background: "rgba(255, 255, 255, 0.9)" }}
                >
                  <TbStarFilled className="w-3 h-3" style={{ color: "var(--color-brass)" }} />
                  <span className="text-xs font-semibold" style={{ color: "var(--color-text-primary)" }}>
                    {hotel.rating}
                  </span>
                  <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    ({hotel.reviews})
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3
                  className="text-base font-semibold mb-2 leading-tight line-clamp-2 transition-colors duration-200 group-hover:text-[var(--color-primary)]"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {hotel.name}
                </h3>

                <div className="flex items-center gap-1.5 mb-4">
                  <TbMapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--color-accent)" }} />
                  <p className="text-xs truncate" style={{ color: "var(--color-text-secondary)" }}>
                    {hotel.location}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid var(--color-border-dim)" }} className="my-3" />

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
                      From
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{ color: "var(--color-accent)", fontFamily: "var(--font-display)" }}
                    >
                      ${hotel.price}
                      <span className="text-xs font-normal ml-0.5" style={{ color: "var(--color-text-muted)" }}>
                        /night
                      </span>
                    </p>
                  </div>
                  <button
                    id={`hotel-book-${hotel.id}`}
                    className="btn-accent text-xs px-3 py-1.5"
                    aria-label={`Book ${hotel.name}`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-10 md:hidden">
          <button
            id="hotels-view-all-mobile-btn"
            className="btn-outline"
            aria-label="View all hotels"
          >
            View All Hotels &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotelSection;
