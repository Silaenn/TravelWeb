"use client";
import React, { useEffect, useState } from "react";
import { TbArrowUp } from "react-icons/tb";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      id="scroll-to-top-btn"
      className="fixed bottom-6 right-6 z-[900] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:opacity-90 active:scale-95 hover:shadow-lg"
      style={{
        background:
          "linear-gradient(135deg, var(--color-accent), var(--color-accent-glow))",
        boxShadow: "0 4px 20px oklch(75% 0.16 85 / 0.4)",
        color: "oklch(10% 0.02 250)",
      }}
      aria-label="Scroll back to top"
    >
      <TbArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
