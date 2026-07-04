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
      className="py-20 md:py-28 relative"
      style={{ background: "var(--color-primary)" }}
      aria-labelledby="newsletter-heading"
    >
      <div className="container-voya">
        <div
          className="max-w-2xl mx-auto text-center"
          data-aos="fade-up"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--color-brass)" }}
            />
            <span
              className="text-xs font-semibold tracking-wider uppercase"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              Stay Connected
            </span>
          </div>

          <h2
            id="newsletter-heading"
            className="section-heading mb-4"
            style={{ color: "white" }}
          >
            Your Journey
            <br />
            <span style={{ color: "var(--color-brass)" }}>Starts with a Click</span>
          </h2>

          <p
            className="text-base mb-8 max-w-md mx-auto leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.75)" }}
          >
            Subscribe for exclusive travel deals, curated destination guides, and insider tips
            delivered to your inbox.
          </p>

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              aria-label="Newsletter subscription form"
            >
              <div
                className="flex-1 flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:brightness-95"
                style={{
                  background: "rgba(255, 255, 255, 0.9)",
                  border: `1.5px solid ${focused ? "var(--color-brass)" : "transparent"}`,
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
                  style={{ color: "var(--color-text-primary)" }}
                  aria-label="Email address for newsletter"
                />
              </div>

              <button
                id="newsletter-subscribe-btn"
                type="submit"
                className="btn-accent flex items-center justify-center gap-2 flex-shrink-0"
                aria-label="Subscribe to newsletter"
              >
                <TbSend className="w-3.5 h-3.5" />
                Subscribe
              </button>
            </form>
          ) : (
            <div
              className="flex items-center justify-center gap-3 px-6 py-4 mx-auto max-w-md rounded-lg"
              style={{ background: "rgba(255, 255, 255, 0.1)" }}
              role="alert"
              aria-live="polite"
            >
              <div
                className="w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-md"
                style={{ background: "var(--color-brass)" }}
              >
                <TbCheck className="w-4 h-4" style={{ color: "white" }} />
              </div>
              <p className="text-sm" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
                <span className="font-semibold">You&apos;re on the list!</span> Welcome aboard.
                Look for our first email in your inbox soon.
              </p>
            </div>
          )}

          <p className="mt-5 text-xs" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            No spam, ever. Unsubscribe anytime. &nbsp;·&nbsp; Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
