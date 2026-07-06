"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DemoMockup from "@/components/ui/DemoMockup";
import Chip from "@/components/ui/Chip";
import { DEMOS, DemoCategoria } from "@/lib/demos";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

type FilterId = "todos" | DemoCategoria | "sistemas" | "automatizacion";

const FILTERS: { id: FilterId; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "web", label: "Páginas Web" },
  { id: "seo", label: "SEO" },
  { id: "sistemas", label: "Sistemas" },
  { id: "automatizacion", label: "Automatización" },
];

export default function PortfolioGrid() {
  const reduced = usePrefersReducedMotion();
  const [filter, setFilter] = useState<FilterId>("todos");

  const filtered =
    filter === "todos"
      ? DEMOS
      : DEMOS.filter((d) => d.categorias.includes(filter as DemoCategoria));

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`touch-target rounded-full px-5 py-2.5 text-[14px] font-semibold transition-all ${
                active
                  ? "bg-purple text-white"
                  : "border-[1.5px] border-purple text-purple hover:bg-purple/10"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 && (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full py-16 text-center text-muted"
            >
              Todavía no tenemos demos en esta categoría — pronto vamos a sumar más.
            </motion.p>
          )}
          {filtered.map((demo) => (
            <motion.div
              key={demo.slug}
              layout
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={
                reduced ? { duration: 0.15 } : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_4px_24px_rgba(30,17,74,0.06)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-[19px] font-semibold text-navy">{demo.rubro}</h3>
                <Chip tone="neutral">Demo propia</Chip>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{demo.frase}</p>
              <div className="mt-5">
                <DemoMockup url={demo.url} title={demo.nombre} imagen={demo.imagen} />
              </div>
              <a
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-purple hover:text-purple-hover"
              >
                Ver demo <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
