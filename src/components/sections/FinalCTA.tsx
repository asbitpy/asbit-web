"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { waLink, WA_MESSAGES, CONTACT } from "@/lib/site";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

export default function FinalCTA() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="contacto" className="bg-purple py-20 md:py-28">
      <motion.div
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={reduced ? { duration: 0.15 } : { duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[720px] px-5 text-center md:px-8"
      >
        <h2 className="text-[28px] font-bold leading-[1.15] tracking-[-0.02em] text-white sm:text-[34px] md:text-[42px]">
          Tu competencia ya está buscando esto. Empecemos antes de que te
          saque ventaja.
        </h2>
        <p className="mt-5 text-[16px] leading-relaxed text-white/85 md:text-[19px]">
          Escribinos ahora y en una charla corta vemos exactamente qué
          necesita tu negocio — sin compromiso.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={waLink(WA_MESSAGES.ctaFinal)}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 text-[16px] font-semibold text-purple shadow-[0_8px_28px_rgba(0,0,0,0.15)] transition-all active:scale-95 motion-safe:hover:scale-[1.02] motion-safe:hover:shadow-[0_10px_36px_rgba(0,0,0,0.22)]"
          >
            <MessageCircle size={18} />
            Hablar por WhatsApp
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="touch-target inline-flex items-center justify-center gap-2 rounded-lg border-[1.5px] border-white/60 px-8 py-3.5 text-[16px] font-semibold text-white transition-all hover:bg-white/15 active:scale-95"
          >
            <Mail size={18} />
            Escribir un mensaje
          </a>
        </div>
      </motion.div>
    </section>
  );
}
