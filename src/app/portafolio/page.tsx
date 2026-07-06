import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import Chip from "@/components/ui/Chip";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import { waLink, WA_MESSAGES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Proyectos demo desarrollados por AS BIT para mostrar el nivel de calidad que entregamos: hotel, clínica dental, salón de belleza y cafetería.",
};

export default function PortafolioPage() {
  return (
    <>
      <section className="bg-navy pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-[760px] px-5 text-center md:px-8">
          <Chip tone="on-dark">Nuestro trabajo</Chip>
          <h1 className="mt-6 text-[32px] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[42px] md:text-[52px]">
            Portafolio
          </h1>
          <p className="mt-6 text-[16px] leading-relaxed text-white/75 md:text-[18px]">
            Los proyectos que ves acá son demos propias, desarrolladas para
            mostrarte exactamente el nivel de calidad que entregamos.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <PortfolioGrid />
        </div>
      </section>

      <section className="bg-lavender py-16 md:py-20">
        <div className="mx-auto max-w-[640px] px-5 text-center md:px-8">
          <h2 className="text-[24px] font-bold leading-tight text-navy sm:text-[28px] md:text-[32px]">
            ¿Te gustó lo que viste? Hablemos de tu proyecto
          </h2>
          <a
            href={waLink(WA_MESSAGES.portafolioPagina)}
            target="_blank"
            rel="noopener noreferrer"
            className="touch-target mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-purple px-8 py-3.5 text-[16px] font-semibold text-white transition-all active:scale-95 motion-safe:hover:scale-[1.02] motion-safe:hover:bg-purple-hover"
          >
            <MessageCircle size={18} />
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
