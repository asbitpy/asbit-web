"use client";

import { motion } from "framer-motion";
import DotGrid from "@/components/ui/DotGrid";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

const BULLETS = [
  "Alguien te busca en Google y aparece la competencia primero.",
  "Tenés una web, pero nadie te escribe desde ahí.",
  "Contestás los mismos mensajes de WhatsApp uno por uno, todo el día.",
  "Cobrar o coordinar turnos todavía depende de que vos estés disponible.",
];

export default function Problem() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <DotGrid variant="light" className="opacity-70" />

      <div className="relative mx-auto max-w-[760px] px-5 md:px-8">
        <motion.h2
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={reduced ? { duration: 0.15 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-navy sm:text-[36px] md:text-[42px]"
        >
          La mayoría de negocios en Paraguay pierde clientes todos los días
          sin darse cuenta.
        </motion.h2>

        <div className="relative mt-14 pl-7 md:mt-16 md:pl-10">
          {/* Línea vertebral */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reduced ? { duration: 0.15 } : { duration: 1.1, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-0 top-1 h-full w-[2px] bg-gradient-to-b from-navy/40 via-navy/25 to-navy/10"
          />

          <ul className="space-y-8 md:space-y-9">
            {BULLETS.map((bullet, i) => (
              <motion.li
                key={i}
                initial={reduced ? { opacity: 0 } : { opacity: 0, x: -16 }}
                whileInView={reduced ? { opacity: 1 } : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={
                  reduced
                    ? { duration: 0.15 }
                    : { duration: 0.5, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] }
                }
                className="relative text-[17px] font-medium leading-snug text-ink/80 sm:text-[19px] md:text-[21px]"
              >
                <span className="absolute -left-7 top-2 h-2 w-2 rounded-full bg-navy/50 md:-left-10" />
                {bullet}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.p
          initial={reduced ? { opacity: 0 } : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.65 }}
          className="mt-14 text-[18px] font-semibold leading-relaxed text-navy md:mt-16 md:text-[23px]"
        >
          Esto no se resuelve con una web más linda. Se resuelve con un
          sistema que trabaje para vos.
        </motion.p>
      </div>
    </section>
  );
}
