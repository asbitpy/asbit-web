"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Chip from "@/components/ui/Chip";
import { PLANS } from "@/lib/plans";
import { waLink } from "@/lib/site";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

export default function Plans() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="planes" className="bg-lavender py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.02em] text-navy sm:text-[36px] md:text-[42px]">
            Planes claros, sin letra chica.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-muted md:text-[18px]">
            Cada plan se ajusta al proyecto y se cotiza en una asesoría
            previa — pero acá abajo ves exactamente qué incluye cada uno, sin
            sorpresas.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-8 md:mt-20 md:flex-row md:items-end md:justify-center md:gap-6">
          {/* Orden mobile: Core primero. Orden desktop: Byte, Core, Stack via order utilities */}
          {PLANS.map((plan, i) => {
            const isCore = plan.destacado;
            return (
              <motion.div
                key={plan.id}
                initial={
                  reduced
                    ? { opacity: 0 }
                    : { opacity: 0, y: 36, scale: isCore ? 0.95 : 1 }
                }
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={
                  reduced
                    ? { duration: 0.15 }
                    : { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }
                }
                className={`w-full max-w-[380px] rounded-2xl border bg-white p-8 transition-all duration-300 ${
                  isCore
                    ? "order-first border-purple/30 shadow-[0_20px_60px_rgba(127,58,239,0.18)] md:order-2 md:w-[115%] md:max-w-[420px] md:-translate-y-6 md:p-9 md:hover:-translate-y-8"
                    : `order-none border-black/5 shadow-[0_4px_24px_rgba(30,17,74,0.06)] md:hover:-translate-y-1 ${
                        i === 0 ? "md:order-1" : "md:order-3"
                      }`
                }`}
              >
                <Chip tone={isCore ? "purple" : "neutral"}>{plan.chip}</Chip>

                <h3
                  className={`mt-4 font-bold text-navy tracking-[-0.01em] ${
                    isCore ? "text-[27px] md:text-[36px]" : "text-[26px] md:text-[32px]"
                  }`}
                >
                  {plan.nombre}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-muted md:text-[16px]">
                  {plan.paraQuien}
                </p>

                {plan.incluyeIntro && (
                  <p className="mt-6 text-[14px] font-semibold text-navy/70">
                    {plan.incluyeIntro}
                  </p>
                )}

                <ul className={`space-y-3 ${plan.incluyeIntro ? "mt-3" : "mt-6"}`}>
                  {plan.incluye.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink/80 md:text-[16px]">
                      <Check size={18} className="mt-0.5 shrink-0 text-purple" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(plan.ctaMensaje)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`touch-target mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-[16px] font-semibold transition-all active:scale-95 ${
                    isCore
                      ? "bg-purple text-white hover:bg-purple-hover motion-safe:hover:scale-[1.02]"
                      : "border-[1.5px] border-purple text-purple hover:bg-purple hover:text-white"
                  }`}
                >
                  Quiero este plan
                  <ArrowRight size={17} />
                </a>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-14 max-w-[640px] text-center text-[14px] leading-relaxed text-muted md:text-[15px]">
          Los precios varían según el proyecto — por eso antes de cotizar
          hacemos una reunión corta para entender tu negocio y recomendarte
          el plan justo, ni de más ni de menos. Dominio y servidor se
          coordinan aparte con vos.
        </p>

        <p className="mx-auto mt-6 max-w-[640px] text-center text-[14px] leading-relaxed text-muted/80 md:text-[15px]">
          ¿Necesitás algo más específico? También desarrollamos{" "}
          <strong className="font-semibold text-navy/70">
            sistemas de gestión / CRM a medida
          </strong>
          , <strong className="font-semibold text-navy/70">automatizaciones</strong>{" "}
          y <strong className="font-semibold text-navy/70">SaaS a medida</strong> —
          cotización según el proyecto.
        </p>
      </div>
    </section>
  );
}
