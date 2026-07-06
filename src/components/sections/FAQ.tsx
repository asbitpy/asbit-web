"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

const FAQS = [
  {
    q: "¿Cuánto cuesta una página web?",
    a: "Depende del tipo de negocio y lo que necesita — por eso, en la reunión inicial te armamos una propuesta a medida, sin compromiso.",
  },
  {
    q: "¿Cuánto tarda en estar lista mi web?",
    a: "Normalmente 15 días hábiles trabajando bien, o según el plazo que tu negocio necesite.",
  },
  {
    q: "¿Qué incluye el mantenimiento mensual?",
    a: "Actualizaciones, seguridad, cambios menores y soporte técnico continuo — está incluido en los tres planes.",
  },
  {
    q: "¿Puedo pedir cambios durante el desarrollo?",
    a: "Sí. Te mandamos avances periódicos para que veas cómo va quedando y ajustes lo que haga falta antes de la entrega final.",
  },
  {
    q: "¿Trabajan con negocios chicos?",
    a: "Sí, es nuestra especialidad. La mayoría de nuestros clientes son negocios pequeños y medianos que quieren verse tan profesionales como uno grande.",
  },
  {
    q: "¿Necesito saber de tecnología para trabajar con ustedes?",
    a: "No. Nosotros nos encargamos de todo el proceso técnico y te explicamos cada paso en lenguaje simple.",
  },
  {
    q: "¿Qué es una automatización y para qué le sirve a mi negocio?",
    a: "Es hacer que tareas repetitivas (respuestas, recordatorios, seguimiento de clientes) pasen solas, sin que alguien las haga a mano cada vez. Ahorrás tiempo y evitás errores.",
  },
  {
    q: "¿Atienden en todo Paraguay?",
    a: "Sí. Al ser un servicio digital, coordinamos reuniones virtuales sin importar en qué ciudad estés.",
  },
  {
    q: "¿Puedo cobrar en línea desde mi web?",
    a: "Sí, integramos Bancard y Ueno Bank dentro del desarrollo de tu sistema para que recibas pagos automáticamente.",
  },
];

export default function FAQ() {
  const reduced = usePrefersReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[760px] px-5 md:px-8">
        <h2 className="text-center text-[24px] font-bold leading-tight tracking-[-0.02em] text-navy sm:text-[30px] md:text-[34px]">
          Preguntas frecuentes
        </h2>

        <div className="mt-12 divide-y divide-black/8 border-t border-b border-black/8">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="touch-target flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[16px] font-semibold text-navy sm:text-[18px]">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: reduced ? 0.05 : 0.25 }}
                    className="shrink-0 text-navy/60"
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={
                        reduced ? { duration: 0.05 } : { duration: 0.28, ease: [0.16, 1, 0.3, 1] }
                      }
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-[16px] leading-relaxed text-ink/70">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
