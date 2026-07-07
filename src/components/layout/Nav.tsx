"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { waLink, WA_MESSAGES } from "@/lib/site";

const NAV_LINKS = [
  { href: "/#solucion", label: "Servicios" },
  { href: "/#planes", label: "Planes" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 8);
    if (latest > previous && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !menuOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
          scrolled || menuOpen
            ? "bg-navy/90 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
            : "bg-navy/70 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3.5 md:px-8">
          <Logo variant="light" />

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-white/80 transition-colors hover:text-purple"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href={waLink(WA_MESSAGES.nav)}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target inline-flex items-center justify-center rounded-lg bg-purple px-6 py-2.5 text-[15px] font-semibold text-white transition-all hover:bg-purple-hover motion-safe:hover:scale-[1.02]"
            >
              Hablemos
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setMenuOpen((v) => !v)}
            className="touch-target flex items-center justify-center rounded-lg text-white md:hidden"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-navy md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="touch-target flex items-center text-2xl font-semibold text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waLink(WA_MESSAGES.nav)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="touch-target mt-4 inline-flex items-center justify-center rounded-lg bg-purple px-8 py-3.5 text-lg font-semibold text-white"
            >
              Hablemos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
