"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DemoMockup from "@/components/ui/DemoMockup";
import Chip from "@/components/ui/Chip";
import { DEMOS } from "@/lib/demos";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

export default function PortfolioPreview() {
  const reduced = usePrefersReducedMotion();
  // Curado: solo las demos marcadas previewHome (4: 1 grande + 3 estándar) —
  // el catálogo completo (con las demos nuevas) vive en /portafolio, para no
  // saturar la preview de Home.
  const curadas = DEMOS.filter((d) => d.previewHome);
  const big = curadas.find((d) => d.destacadaEnHome) ?? curadas[0];
  const rest = curadas.filter((d) => d.slug !== big.slug);

  return (
    <section className="bg-lavender py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-navy sm:text-[36px] md:text-[42px]">
            Mirá el tipo de trabajo que hacemos.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-muted md:text-[18px]">
            Estos son proyectos demo desarrollados por nosotros para
            mostrarte exactamente el nivel de calidad que entregamos — te lo
            decimos así de directo porque preferimos la honestidad antes que
            inventar testimonios.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2">
          {/* Slot grande */}
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={reduced ? { duration: 0.15 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl bg-white/40 p-6 md:row-span-2 md:p-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-navy md:text-[24px]">{big.rubro}</h3>
              <Chip tone="neutral">Demo propia</Chip>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/70 md:text-[16px]">
              {big.frase}
            </p>
            <div className="mt-6">
              <DemoMockup url={big.url} title={big.nombre} imagen={big.imagen} />
            </div>
            <a
              href={big.url}
              target="_blank"
              rel="noopener noreferrer"
              className="touch-target mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-purple hover:text-purple-hover"
            >
              Ver demo <ArrowRight size={16} />
            </a>
          </motion.div>

          {rest.map((demo, i) => {
            // El último ítem ocupa el ancho completo (en vez de quedar
            // huérfano en una fila nueva junto a una celda vacía — bug
            // reportado: la cafetería aparecía "muy separada" de la de
            // arriba). Con col-span-2 se ve como una franja destacada
            // intencional, con layout horizontal en desktop.
            const isLast = i === rest.length - 1;
            return (
              <motion.div
                key={demo.slug}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={
                  reduced
                    ? { duration: 0.15 }
                    : { duration: 0.6, delay: (i + 1) * 0.1, ease: [0.16, 1, 0.3, 1] }
                }
                className={`rounded-2xl bg-white/40 p-5 ${
                  isLast ? "md:col-span-2 md:flex md:items-center md:gap-8 md:p-6" : ""
                }`}
              >
                <div className={isLast ? "md:w-[55%] md:shrink-0" : ""}>
                  <DemoMockup url={demo.url} title={demo.nombre} imagen={demo.imagen} />
                </div>
                <div className={isLast ? "mt-5 md:mt-0" : "mt-0"}>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[18px] font-semibold text-navy md:text-[19px]">
                      {demo.rubro}
                    </h3>
                    <Chip tone="neutral" className="shrink-0 text-[11px]">
                      Demo propia
                    </Chip>
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink/70 md:text-[15px]">
                    {demo.frase}
                  </p>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-target mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-purple hover:text-purple-hover"
                  >
                    Ver demo <ArrowRight size={15} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/portafolio"
            className="touch-target inline-flex items-center gap-2 text-[16px] font-semibold text-navy underline-offset-4 hover:text-purple hover:underline"
          >
            Ver portafolio completo <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
