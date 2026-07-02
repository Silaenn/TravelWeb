import { newsData } from "@/data/data";
import Image from "next/image";
import React from "react";
import { TbCalendar, TbClock, TbArrowRight } from "react-icons/tb";

const NewsSection = () => {
  const [featured, ...rest] = newsData;

  return (
    <section
      id="news"
      className="py-24"
      style={{ background: "var(--color-bg-surface)" }}
      aria-labelledby="news-heading"
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
              Travel Journal
            </p>
            <h2
              id="news-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{
                fontFamily: "var(--font-playfair, serif)",
                color: "var(--color-text-primary)",
              }}
            >
              Stories &amp; Insights
              <br />
              <span className="text-gradient">From the World</span>
            </h2>
          </div>
          <button
            id="news-view-all-btn"
            className="hidden md:flex self-end px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80"
            style={{
              border: "1px solid var(--color-border)",
              color: "var(--color-text-secondary)",
              background: "var(--color-bg-elevated)",
            }}
            aria-label="View all journal articles"
          >
            View All Articles →
          </button>
        </div>

        {/* Bento layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured large card */}
          <article
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
            style={{ height: "480px", background: "var(--color-bg-card)" }}
            data-aos="fade-right"
            aria-label={`Featured: ${featured.title}`}
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, oklch(5% 0.02 250 / 0.95) 0%, oklch(5% 0.02 250 / 0.3) 50%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                style={{
                  background: "oklch(75% 0.16 85 / 0.15)",
                  color: "var(--color-accent)",
                  border: "1px solid oklch(75% 0.16 85 / 0.3)",
                }}
              >
                {featured.category}
              </span>
              <h3
                className="text-xl font-bold text-white mb-3 leading-snug"
                style={{ fontFamily: "var(--font-playfair, serif)" }}
              >
                {featured.title}
              </h3>
              <div
                className="flex items-center gap-4 text-xs"
                style={{ color: "oklch(70% 0.01 250)" }}
              >
                <span className="flex items-center gap-1">
                  <TbCalendar className="w-3.5 h-3.5" style={{ color: "var(--color-accent)" }} />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <TbClock className="w-3.5 h-3.5" style={{ color: "var(--color-accent)" }} />
                  {featured.readTime}
                </span>
              </div>
            </div>

            {/* Hover: Read button */}
            <div
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
              style={{
                background: "var(--color-accent)",
                color: "oklch(10% 0.02 250)",
              }}
              aria-hidden="true"
            >
              <TbArrowRight className="w-5 h-5" />
            </div>
          </article>

          {/* Right: 3 smaller cards stacked */}
          <div className="flex flex-col gap-4">
            {rest.map((article, i) => (
              <article
                key={article.id}
                className="group flex gap-4 rounded-2xl p-4 overflow-hidden cursor-pointer transition-all duration-300 hover:border-[var(--color-accent)]"
                style={{
                  background: "var(--color-bg-elevated)",
                  border: "1px solid var(--color-border)",
                  flex: 1,
                }}
                data-aos="fade-left"
                data-aos-delay={`${i * 80}`}
                aria-label={article.title}
              >
                {/* Thumbnail */}
                <div
                  className="relative w-28 flex-shrink-0 rounded-xl overflow-hidden"
                  style={{ minHeight: "100px" }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="112px"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col justify-between py-1 min-w-0">
                  <div>
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-2"
                      style={{
                        background: "oklch(75% 0.16 85 / 0.1)",
                        color: "var(--color-accent)",
                        border: "1px solid oklch(75% 0.16 85 / 0.2)",
                      }}
                    >
                      {article.category}
                    </span>
                    <h3
                      className="text-sm font-semibold leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[var(--color-accent)]"
                      style={{
                        fontFamily: "var(--font-playfair, serif)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {article.title}
                    </h3>
                  </div>
                  <div
                    className="flex items-center gap-3 text-xs mt-2"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <span className="flex items-center gap-1">
                      <TbCalendar className="w-3 h-3" style={{ color: "var(--color-accent)" }} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <TbClock className="w-3 h-3" style={{ color: "var(--color-accent)" }} />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
