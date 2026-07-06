"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import DotGrid from "@/components/ui/DotGrid";
import Button from "@/components/ui/Button";
import { waLink, WA_MESSAGES } from "@/lib/site";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

const PILARES = [
  {
    numero: "01",
    titulo: "Web de conversión",
    copy: "Tu web no es una tarjeta de presentación. Es la primera vendedora de tu negocio: rápida, clara, y pensada para que quien entra te escriba.",
    offset: "md:mt-0",
  },
  {
    numero: "02",
    titulo: "SEO local",
    copy: "De nada sirve una web si nadie la encuentra. Te posicionamos para las búsquedas reales que hace tu cliente en Paraguay — y empezamos a preparar tu presencia también para los buscadores con inteligencia artificial (ChatGPT, Gemini y similares), donde cada vez más gente busca antes de decidir.",
    offset: "md:mt-16",
  },
  {
    numero: "03",
    titulo: "Automatización, sistemas y cobros",
    copy: "Cuando tu negocio crece, automatizamos lo repetitivo (respuestas, turnos, seguimiento de clientes) y podés cobrar en línea integrando Bancard o Ueno Bank directo en tu web o sistema.",
    offset: "md:mt-32",
    ejemplos: [
      "Alguien te escribe fuera de horario → recibe una respuesta automática al toque, y vos la ves apenas abrís.",
      "Se agenda un turno → se manda solo un recordatorio por WhatsApp 24 horas antes.",
      "Se registra una venta → se descuenta del stock y se envía la factura por email, sin cargar nada a mano.",
      "Un cliente paga con Bancard o Ueno Bank → te llega la notificación al instante, sin ir a revisar.",
    ],
  },
];

export default function Solution() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="solucion" className="relative overflow-hidden bg-white py-20 md:py-32">
      <DotGrid variant="light" className="opacity-70" />

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="mx-auto max-w-[700px] text-center">
          <motion.h2
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={reduced ? { duration: 0.15 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[28px] font-bold leading-[1.12] tracking-[-0.02em] text-navy sm:text-[36px] md:text-[42px]"
          >
            De cero presencia digital a un sistema completo que te consigue y
            gestiona clientes.
          </motion.h2>
          <motion.p
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={
              reduced ? { duration: 0.15 } : { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }
            }
            className="mt-5 text-[16px] leading-relaxed text-muted md:text-[18px]"
          >
            No vendemos servicios sueltos. Construimos un camino: primero una
            web que convierte, después que te encuentren en Google, y cuando
            tu negocio lo necesite, un sistema que automatiza lo repetitivo y
            cobra por vos.
          </motion.p>
        </div>

        <div className="mt-20 space-y-16 md:mt-28 md:space-y-0">
          {PILARES.map((pilar, i) => (
            <motion.div
              key={pilar.numero}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 40 }}
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={
                reduced
                  ? { duration: 0.15 }
                  : { duration: 0.6, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] }
              }
              className={`relative max-w-[620px] ${pilar.offset} ${
                i === 1 ? "md:ml-auto" : i === 2 ? "md:ml-24" : ""
              }`}
            >
              {/* Número editorial gigante de fondo */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-2 -top-16 select-none text-[90px] font-bold leading-none text-navy/[0.16] sm:text-[110px] md:-top-24 md:text-[220px]"
              >
                {pilar.numero}
              </span>

              <div className="relative pt-6 md:pt-10">
                <h3 className="text-[20px] font-bold text-navy sm:text-[24px] md:text-[27px]">
                  {pilar.titulo}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-ink/75 md:text-[18px]">
                  {pilar.copy}
                </p>

                {pilar.ejemplos && (
                  <ul className="mt-5 space-y-2.5 rounded-xl border border-purple/10 bg-purple/[0.04] p-4 sm:p-5">
                    {pilar.ejemplos.map((ejemplo) => (
                      <li key={ejemplo} className="flex items-start gap-2.5">
                        <Check
                          size={15}
                          className="mt-[3px] shrink-0 text-purple"
                          aria-hidden="true"
                        />
                        <span className="text-[14px] leading-snug text-ink/70 sm:text-[15px]">
                          {ejemplo}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center md:mt-24">
          <Button href={waLink(WA_MESSAGES.solucion)} external variant="primary">
            ¿Por dónde empieza mi negocio?
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
