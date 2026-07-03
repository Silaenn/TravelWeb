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
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="news-heading"
    >
      <div className="container-voya">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          data-aos="fade-up"
        >
          <div>
            <p className="section-kicker mb-2">The Travel Journal</p>
            <div className="double-rule-thin mb-4" />
            <h2
              id="news-heading"
              className="section-headline"
            >
              Stories &amp; Insights
              <br />
              <span style={{ color: "var(--color-accent)" }}>From the World</span>
            </h2>
            <p className="byline mt-2">Dispatches from our correspondents abroad</p>
          </div>
          <button
            id="news-view-all-btn"
            className="hidden md:flex ink-btn text-xs self-end"
            aria-label="View all journal articles"
          >
            View All Articles &rarr;
          </button>
        </div>

        {/* Bento layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Featured large card */}
          <article
            className="group relative overflow-hidden cursor-pointer paper-card"
            style={{ height: "480px", borderRadius: "var(--radius-sm)" }}
            data-aos="fade-right"
            aria-label={`Featured: ${featured.title}`}
          >
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 sepia-img"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(44, 24, 16, 0.9) 0%, rgba(44, 24, 16, 0.2) 50%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span
                className="inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider mb-3"
                style={{
                  background: "var(--color-bg-card)",
                  color: "var(--color-accent)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                {featured.category}
              </span>
              <h3
                className="text-xl font-bold mb-3 leading-snug"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-bg-card)",
                }}
              >
                {featured.title}
              </h3>
              <div className="flex items-center gap-4 text-xs font-mono" style={{ color: "rgba(242, 238, 231, 0.7)" }}>
                <span className="flex items-center gap-1">
                  <TbCalendar className="w-3.5 h-3.5" style={{ color: "var(--color-aged-gold)" }} />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <TbClock className="w-3.5 h-3.5" style={{ color: "var(--color-aged-gold)" }} />
                  {featured.readTime}
                </span>
              </div>
            </div>

            <div
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-bg-card)",
                borderRadius: "var(--radius-sm)",
              }}
              aria-hidden="true"
            >
              <TbArrowRight className="w-4 h-4" />
            </div>
          </article>

          {/* Right: 3 smaller cards stacked */}
          <div className="flex flex-col gap-4">
            {rest.map((article, i) => (
              <article
                key={article.id}
                className="group flex gap-4 p-4 paper-card cursor-pointer transition-all duration-300 hover:border-[var(--color-accent)]"
                style={{ borderRadius: "var(--radius-sm)", flex: 1 }}
                data-aos="fade-left"
                data-aos-delay={`${i * 80}`}
                aria-label={article.title}
              >
                <div
                  className="relative w-28 flex-shrink-0 overflow-hidden"
                  style={{ minHeight: "100px", borderRadius: "var(--radius-sm)" }}
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 sepia-img"
                    sizes="112px"
                  />
                </div>

                <div className="flex flex-col justify-between py-0.5 min-w-0">
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
                      {article.category}
                    </span>
                    <h3
                      className="text-sm font-semibold leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[var(--color-accent)]"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      {article.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono mt-2" style={{ color: "var(--color-text-muted)" }}>
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
