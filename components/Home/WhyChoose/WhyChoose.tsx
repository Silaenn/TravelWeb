"use client";
import React from "react";
import {
  TbShieldCheck,
  TbCurrencyDollar,
  TbHeadset,
  TbAward,
  TbArrowRight,
} from "react-icons/tb";

const BENEFITS = [
  {
    icon: TbCurrencyDollar,
    title: "Best Price Guarantee",
    desc: "We match any lower price you find. Book with confidence knowing you got the best deal.",
  },
  {
    icon: TbShieldCheck,
    title: "Verified & Trusted",
    desc: "Every hotel, tour, and experience is vetted by our team. No surprises, only quality.",
  },
  {
    icon: TbHeadset,
    title: "24/7 Support",
    desc: "Our travel concierge team is here for you anytime, anywhere in the world.",
  },
  {
    icon: TbAward,
    title: "Curated Excellence",
    desc: "We handpick every listing so you get exceptional experiences, not endless choices.",
  },
];

const WhyChooseSection = () => {
  return (
    <section
      id="why-choose"
      className="py-20 md:py-28"
      style={{ background: "var(--color-bg-surface)" }}
      aria-labelledby="why-choose-heading"
    >
      <div className="container-voya">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div data-aos="fade-right">
            <p className="section-label mb-3">Why Travel With Us</p>
            <h2
              id="why-choose-heading"
              className="section-heading mb-6"
            >
              Designed for
              <br />
              <span style={{ color: "var(--color-primary)" }}>
                Meaningful Travel
              </span>
            </h2>
            <p
              className="text-base mb-6 max-w-md leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              We believe travel should be effortless, not overwhelming. Voya
              brings you curated destinations and handpicked stays so you spend
              less time planning and more time experiencing.
            </p>

            <div
              className="flex items-center gap-3 p-4 rounded-lg mb-6 transition-all duration-200 hover:border-[var(--color-primary)] hover:scale-[1.02]"
              style={{
                background: "rgba(11, 94, 92, 0.06)",
                border: "1px solid rgba(11, 94, 92, 0.12)",
              }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-md flex-shrink-0"
                style={{ background: "var(--color-primary)" }}
              >
                <TbAward className="w-5 h-5" style={{ color: "white" }} />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                  Trusted by 500,000+ travellers
                </p>
                <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
                  Verified reviews &bull; Secure payments &bull; 24/7 support
                </p>
              </div>
            </div>

            <button className="btn-primary text-sm group" aria-label="Start planning">
              Start Planning
              <TbArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right: Benefits cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left">
            {BENEFITS.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="card p-5 group"
                  data-aos="fade-up"
                  data-aos-delay={`${i * 80}`}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-md mb-4 transition-transform duration-200 group-hover:scale-110 group-hover:bg-[var(--color-primary)]"
                    style={{
                      background: "rgba(11, 94, 92, 0.08)",
                    }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-200 group-hover:text-white"
                      style={{ color: "var(--color-primary)" }}
                    />
                  </div>
                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
