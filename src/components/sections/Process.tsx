"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { waLink, WA_MESSAGES } from "@/lib/site";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

const STEPS = [
  {
    title: "Conversamos",
    copy: "Reunión corta (virtual, sirve para todo Paraguay) para entender tu negocio, tus objetivos y tu presupuesto real.",
    big: true,
  },
  {
    title: "Te proponemos",
    copy: "Te mandamos una propuesta con el plan que realmente necesitás, sin venderte de más.",
    big: false,
  },
  {
    title: "Construimos con avances",
    copy: "Vas viendo el progreso en el camino y pedís ajustes antes de que esté cerrado.",
    big: false,
  },
  {
    title: "Lanzamos y acompañamos",
    copy: "Publicamos tu proyecto y seguimos con mantenimiento mensual para que nunca se quede parado.",
    big: true,
  },
];

export default function Process() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="proceso" className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-navy sm:text-[36px] md:text-[42px]">
            Así vamos a trabajar juntos.
          </h2>
        </div>

        {/* Desktop: línea horizontal */}
        <div className="relative mt-24 hidden md:block">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={reduced ? { duration: 0.15 } : { duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[15px] h-[2px] bg-gradient-to-r from-navy/10 via-navy/25 to-navy/10"
          />
          <div className="grid grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={
                  reduced
                    ? { duration: 0.15 }
                    : { duration: 0.5, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }
                }
                className="relative"
              >
                <span
                  className={`relative z-10 block rounded-full bg-purple ${
                    step.big ? "h-8 w-8" : "h-5 w-5 translate-y-1.5"
                  }`}
                />
                <h3 className="mt-6 text-[20px] font-semibold text-navy md:text-[22px]">
                  {i + 1}. {step.title}
                </h3>
                <p className="mt-2 text-[16px] leading-relaxed text-ink/70">{step.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: línea vertical */}
        <div className="relative mt-16 space-y-10 pl-8 md:hidden">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reduced ? { duration: 0.15 } : { duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[9px] top-2 h-full w-[2px] bg-gradient-to-b from-navy/10 via-navy/25 to-navy/10"
          />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={reduced ? { opacity: 0 } : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={
                reduced
                  ? { duration: 0.15 }
                  : { duration: 0.5, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }
              }
              className="relative"
            >
              <span
                className={`absolute rounded-full bg-purple ${
                  step.big ? "-left-[27px] h-6 w-6 top-0" : "-left-[24px] h-4 w-4 top-1"
                }`}
              />
              <h3 className="text-[18px] font-semibold text-navy sm:text-[19px]">
                {i + 1}. {step.title}
              </h3>
              <p className="mt-2 text-[16px] leading-relaxed text-ink/70">{step.copy}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center md:mt-20">
          <Button href={waLink(WA_MESSAGES.proceso)} external variant="primary">
            Arrancar la conversación
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
