"use client";
import React, { useEffect, useRef, useState } from "react";
import { statsData } from "@/data/data";
import { TbShieldCheck, TbCurrencyDollar, TbHeadset, TbAward } from "react-icons/tb";

const ICONS = [TbCurrencyDollar, TbShieldCheck, TbHeadset, TbAward];
const BENEFITS = [
  "Best price guarantee on all bookings",
  "Verified hotels, tours & experiences",
  "24/7 dedicated travel concierge",
  "Award-winning travel curation",
];

function useCountUp(target: number, suffix: string, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target]);

  return `${value}${suffix}`;
}

const StatItem = ({
  stat,
  active,
}: {
  stat: { value: number; suffix: string; label: string };
  active: boolean;
}) => {
  const displayValue = useCountUp(stat.value, stat.suffix, active);
  return (
    <div className="text-center" aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>
      <p
        className="text-3xl md:text-4xl font-bold mb-1"
        style={{
          color: "var(--color-accent)",
          fontFamily: "var(--font-playfair, serif)",
        }}
      >
        {displayValue}
      </p>
      <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
        {stat.label}
      </p>
    </div>
  );
};

const WhyChooseSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-choose"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--color-bg-surface)" }}
      aria-labelledby="why-choose-heading"
    >
      {/* Background accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-voya">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div data-aos="fade-right">
            <div className="section-divider mb-4" />
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--color-accent)" }}
            >
              Why Voya?
            </p>
            <h2
              id="why-choose-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{
                fontFamily: "var(--font-playfair, serif)",
                color: "var(--color-text-primary)",
              }}
            >
              Travel Smarter,
              <br />
              <span className="text-gradient">Live Better.</span>
            </h2>
            <p
              className="text-base mb-10 max-w-md"
              style={{ color: "var(--color-text-secondary)", lineHeight: "1.8" }}
            >
              Voya combines curated luxury with effortless booking. We handle
              every detail so you can focus on what matters — the experience.
            </p>

            {/* Benefits list */}
            <div className="grid grid-cols-1 gap-4">
              {BENEFITS.map((benefit, i) => {
                const Icon = ICONS[i];
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                    style={{
                      background: "var(--color-bg-elevated)",
                      border: "1px solid var(--color-border)",
                    }}
                    data-aos="fade-right"
                    data-aos-delay={`${i * 80}`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "oklch(75% 0.16 85 / 0.1)",
                        border: "1px solid oklch(75% 0.16 85 / 0.2)",
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: "var(--color-accent)" }}
                      />
                    </div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {benefit}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Stats */}
          <div data-aos="fade-left">
            {/* Big stat block */}
            <div
              className="rounded-2xl p-8 mb-6"
              style={{
                background: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border)",
                boxShadow: "var(--shadow-elevated)",
              }}
              ref={ref}
            >
              <div className="grid grid-cols-2 gap-8">
                {statsData.map((stat) => (
                  <StatItem key={stat.label} stat={stat} active={active} />
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div
              className="flex items-center gap-4 rounded-2xl p-5"
              style={{
                background: "oklch(75% 0.16 85 / 0.08)",
                border: "1px solid oklch(75% 0.16 85 / 0.2)",
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent), var(--color-accent-glow))",
                }}
              >
                <TbShieldCheck className="w-6 h-6 text-black" />
              </div>
              <div>
                <p
                  className="text-sm font-semibold mb-0.5"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Trusted by 500,000+ travelers worldwide
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Verified reviews, secure payments, and 24/7 support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
