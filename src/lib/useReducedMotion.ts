"use client";

import { useEffect, useState } from "react";

/**
 * Hook simple para detectar prefers-reduced-motion. Se usa en toda la web
 * para reemplazar stagger/scroll-trigger/slide por fade simple instantáneo
 * (~150ms) cuando el usuario lo activa (regla global — Sección 10 del brief).
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

/** Variantes de Framer Motion listas para usar, con fallback reduced-motion. */
export function fadeSlideUp(reduced: boolean, delay = 0) {
  if (reduced) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.15 },
    };
  }
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
  };
}
