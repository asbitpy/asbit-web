"use client";

import { motion } from "framer-motion";
import Chip from "@/components/ui/Chip";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

const CHIPS = ["Asunción, Paraguay", "Atención lun-sáb 7:00-20:00", "Contacto directo por WhatsApp"];

export default function About() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="bg-navy py-20 md:py-28">
      <motion.div
        initial={reduced ? { opacity: 0 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: reduced ? 0.15 : 0.7 }}
        className="mx-auto max-w-[720px] px-5 text-center md:px-8"
      >
        <h2 className="text-[24px] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[30px] md:text-[38px]">
          Una agencia joven, seria, y hecha en Paraguay.
        </h2>

        <p className="mt-6 text-[16px] leading-[1.6] text-white/75 md:text-[18px]">
          AS BIT nació en Asunción con una idea simple: los negocios
          paraguayos merecen la misma calidad digital que las grandes
          empresas, sin pagar de más ni depender de agencias de otro país que
          ni siquiera contestan en horario local. Somos un equipo chico, con
          capacidad técnica real, que atiende de lunes a sábado y responde
          por WhatsApp como cualquier negocio paraguayo serio debería
          hacerlo.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {CHIPS.map((chip, i) => (
            <motion.div
              key={chip}
              initial={reduced ? { opacity: 0 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: reduced ? 0 : i * 0.08 }}
            >
              <Chip tone="on-dark">{chip}</Chip>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
