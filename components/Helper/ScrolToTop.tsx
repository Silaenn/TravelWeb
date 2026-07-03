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
      className="fixed bottom-6 right-6 z-[900] w-10 h-10 flex items-center justify-center transition-all duration-300 hover:opacity-80 active:scale-95"
      style={{
        background: "var(--color-text-primary)",
        color: "var(--color-bg-card)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--color-text-primary)",
      }}
      aria-label="Scroll back to top"
    >
      <TbArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
