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
          fontFamily: "var(--font-display)",
        }}
      >
        {displayValue}
      </p>
      <p className="text-xs font-mono uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
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
      className="py-24 relative"
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="why-choose-heading"
    >
      <div className="container-voya">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div data-aos="fade-right">
            <p className="section-kicker mb-2">Editor&apos;s Note</p>
            <div className="double-rule-thin mb-4" />
            <h2
              id="why-choose-heading"
              className="section-headline mb-6"
            >
              Travel Smarter,
              <br />
              <span style={{ color: "var(--color-accent)" }}>Live Better.</span>
            </h2>
            <p
              className="text-base mb-8 max-w-md leading-relaxed drop-cap"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Voya combines curated luxury with effortless booking. We handle
              every detail so you can focus on what matters &mdash; the experience.
            </p>
            <p className="byline mb-8">&mdash; The Editorial Board</p>

            {/* Benefits list */}
            <div className="grid grid-cols-1 gap-3">
              {BENEFITS.map((benefit, i) => {
                const Icon = ICONS[i];
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3 paper-card"
                    style={{ borderRadius: "var(--radius-sm)" }}
                    data-aos="fade-right"
                    data-aos-delay={`${i * 80}`}
                  >
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(139, 58, 42, 0.08)",
                        border: "1px solid rgba(139, 58, 42, 0.2)",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
                    </div>
                    <p className="text-sm" style={{ color: "var(--color-text-primary)" }}>
                      {benefit}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Stats */}
          <div data-aos="fade-left">
            <div
              className="paper-card-elevated p-8 mb-6"
              style={{ borderRadius: "var(--radius-sm)" }}
              ref={ref}
            >
              <p className="section-kicker mb-4 text-center">BY THE NUMBERS</p>
              <div style={{ borderTop: "1px solid var(--color-border)" }} className="mb-6" />
              <div className="grid grid-cols-2 gap-8">
                {statsData.map((stat) => (
                  <StatItem key={stat.label} stat={stat} active={active} />
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div
              className="flex items-center gap-4 p-5 ink-wash-accent"
              style={{
                border: "1px solid rgba(139, 58, 42, 0.2)",
                borderRadius: "var(--radius-sm)",
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                style={{
                  background: "var(--color-accent)",
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <TbShieldCheck className="w-5 h-5" style={{ color: "var(--color-bg-card)" }} />
              </div>
              <div>
                <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--color-text-primary)" }}>
                  Trusted by 500,000+ travellers worldwide
                </p>
                <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
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
