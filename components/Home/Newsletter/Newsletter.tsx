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
      className="py-24 relative"
      style={{ background: "var(--color-bg-surface)" }}
      aria-labelledby="newsletter-heading"
    >
      <div className="container-voya">
        <div
          className="max-w-2xl mx-auto text-center"
          data-aos="fade-up"
        >
          <p className="section-kicker mb-3">Dispatch Subscription</p>
          <div className="double-rule-thin mb-6" />

          <h2
            id="newsletter-heading"
            className="section-headline mb-4"
          >
            Your Journey
            <br />
            <span style={{ color: "var(--color-accent)" }}>Starts with a Click</span>
          </h2>

          <p
            className="text-base mb-8 max-w-md mx-auto leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Subscribe to our weekly dispatch &mdash; exclusive travel deals, curated destination
            guides, and insider tips, delivered to your door.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              aria-label="Newsletter subscription form"
            >
              <div
                className="flex-1 flex items-center gap-3 px-4 py-3 transition-all duration-200"
                style={{
                  background: "var(--color-bg-card)",
                  border: `1px solid ${focused ? "var(--color-accent)" : "var(--color-border)"}`,
                  borderRadius: "var(--radius-sm)",
                }}
              >
                <input
                  id="newsletter-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused(true)}
                  onBlur={() => setFocused(false)}
                  placeholder="your@address.com"
                  required
                  className="flex-1 bg-transparent border-none outline-none text-sm"
                  style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-body)" }}
                  aria-label="Email address for newsletter"
                />
              </div>

              <button
                id="newsletter-subscribe-btn"
                type="submit"
                className="ink-btn ink-btn-accent flex items-center justify-center gap-2 text-xs flex-shrink-0"
                aria-label="Subscribe to dispatch"
              >
                <TbSend className="w-3.5 h-3.5" />
                Subscribe
              </button>
            </form>
          ) : (
            <div
              className="flex items-center justify-center gap-3 px-6 py-4 mx-auto max-w-md ink-wash-accent"
              style={{
                border: "1px solid rgba(139, 58, 42, 0.2)",
                borderRadius: "var(--radius-sm)",
              }}
              role="alert"
              aria-live="polite"
            >
              <div
                className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--color-accent)", borderRadius: "var(--radius-sm)" }}
              >
                <TbCheck className="w-4 h-4" style={{ color: "var(--color-bg-card)" }} />
              </div>
              <p className="text-sm" style={{ color: "var(--color-text-primary)" }}>
                <span className="font-semibold">You&apos;re on the list!</span> Welcome to the Gazette.
                Look for our first dispatch in your inbox soon.
              </p>
            </div>
          )}

          <p
            className="mt-5 text-xs font-mono"
            style={{ color: "var(--color-text-muted)" }}
          >
            No spam, ever. Unsubscribe anytime. &nbsp;·&nbsp; Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
