"use client";
import React, { useState } from "react";
import { TbSend, TbCheck } from "react-icons/tb";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="newsletter"
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--color-bg)" }}
      aria-labelledby="newsletter-heading"
    >
      {/* Decorative orbs */}
      <div
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-accent), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--color-accent), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="container-voya">
        <div
          className="max-w-2xl mx-auto text-center"
          data-aos="fade-up"
        >
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "oklch(75% 0.16 85 / 0.1)",
              border: "1px solid oklch(75% 0.16 85 / 0.25)",
            }}
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-accent)" }}
            >
              ✦ Join the Voya Club
            </span>
          </div>

          <h2
            id="newsletter-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-playfair, serif)",
              color: "var(--color-text-primary)",
            }}
          >
            Your Journey
            <br />
            <span className="text-gradient">Starts with a Click</span>
          </h2>

          <p
            className="text-base mb-10"
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: "1.8",
            }}
          >
            Subscribe for exclusive travel deals, curated destination guides, and
            insider tips — delivered straight to your inbox.
          </p>

          {/* Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              aria-label="Newsletter subscription form"
            >
              <div
                className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200"
                style={{
                  background: "var(--color-bg-elevated)",
                  border: `1px solid ${focused ? "oklch(75% 0.16 85 / 0.4)" : "var(--color-border)"}`,
                  boxShadow: focused ? "0 0 20px oklch(75% 0.16 85 / 0.1)" : "none",
                }}
              >
                <input
                  id="newsletter-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-transparent border-none outline-none text-sm"
                  style={{ color: "var(--color-text-primary)" }}
                  aria-label="Email address for newsletter"
                />
              </div>

              <button
                id="newsletter-subscribe-btn"
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95 flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent), var(--color-accent-glow))",
                  color: "oklch(10% 0.02 250)",
                  boxShadow: "0 4px 20px oklch(75% 0.16 85 / 0.3)",
                }}
                aria-label="Subscribe to newsletter"
              >
                <TbSend className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          ) : (
            <div
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl max-w-md mx-auto"
              style={{
                background: "oklch(75% 0.16 85 / 0.1)",
                border: "1px solid oklch(75% 0.16 85 / 0.3)",
              }}
              role="alert"
              aria-live="polite"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--color-accent)" }}
              >
                <TbCheck className="w-4 h-4 text-black" />
              </div>
              <p className="text-sm" style={{ color: "var(--color-text-primary)" }}>
                <span className="font-semibold">You&apos;re in!</span> Welcome to the Voya Club.
                Check your inbox soon.
              </p>
            </div>
          )}

          {/* Trust note */}
          <p
            className="mt-5 text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            No spam, ever. Unsubscribe anytime. &nbsp;·&nbsp; Privacy policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
