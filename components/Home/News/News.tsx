import { newsData } from "@/data/data";
import Image from "next/image";
import React from "react";
import { TbCalendar, TbClock } from "react-icons/tb";

const NewsSection = () => {
  const [featured, ...rest] = newsData;

  return (
    <section
      id="news"
      className="py-20 md:py-28"
      style={{ background: "var(--color-bg-surface)" }}
      aria-labelledby="news-heading"
    >
      <div className="container-voya">
        <div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
          data-aos="fade-up"
        >
          <div>
            <p className="section-label mb-2">Travel Journal</p>
            <h2
              id="news-heading"
              className="section-heading"
            >
              Stories &amp; Insights
              <br />
              <span style={{ color: "var(--color-primary)" }}>From the World</span>
            </h2>
            <p className="text-sm mt-2" style={{ color: "var(--color-text-muted)" }}>
              Dispatches from our explorers around the globe
            </p>
          </div>
          <button
            id="news-view-all-btn"
            className="hidden md:flex btn-outline self-end"
            aria-label="View all articles"
          >
            View All Articles &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <article
            className="group relative overflow-hidden cursor-pointer card hover:-translate-y-1"
            style={{ height: "480px" }}
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
                  "linear-gradient(to top, rgba(11, 94, 92, 0.9) 0%, rgba(11, 94, 92, 0.2) 50%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="tag mb-3" style={{ background: "var(--color-bg-card)" }}>
                {featured.category}
              </span>
              <h3
                className="text-xl font-bold mb-3 leading-snug"
                style={{ fontFamily: "var(--font-display)", color: "white" }}
              >
                {featured.title}
              </h3>
              <div className="flex items-center gap-4 text-xs" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                <span className="flex items-center gap-1">
                  <TbCalendar className="w-3.5 h-3.5" style={{ color: "var(--color-brass)" }} />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <TbClock className="w-3.5 h-3.5" style={{ color: "var(--color-brass)" }} />
                  {featured.readTime}
                </span>
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-4 h-[480px] justify-between">
            {rest.map((article, i) => (
              <article
                key={article.id}
                className="group flex gap-4 p-4 card cursor-pointer transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-left"
                data-aos-delay={`${i * 80}`}
                aria-label={article.title}
              >
                <div
                  className="relative w-28 flex-shrink-0 overflow-hidden rounded-md"
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

                <div className="flex flex-col justify-between py-0.5 min-w-0">
                  <div>
                    <span className="tag inline-flex mb-2" style={{ background: "rgba(11, 94, 92, 0.08)", color: "var(--color-primary)", border: "1px solid rgba(11, 94, 92, 0.15)" }}>
                      {article.category}
                    </span>
                    <h3
                      className="text-sm font-semibold leading-snug line-clamp-2 transition-colors duration-200 group-hover:text-[var(--color-primary)]"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {article.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-xs mt-2" style={{ color: "var(--color-text-muted)" }}>
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
