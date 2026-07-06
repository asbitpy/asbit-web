"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Chip from "@/components/ui/Chip";
import Button from "@/components/ui/Button";
import DotGrid from "@/components/ui/DotGrid";
import DemoMockup from "@/components/ui/DemoMockup";
import { waLink, WA_MESSAGES } from "@/lib/site";
import { DEMOS } from "@/lib/demos";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

const heroDemo = DEMOS.find((d) => d.destacadaEnHome) ?? DEMOS[0];

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  const layerTransition = (delayIndex: number) =>
    reduced
      ? { duration: 0.15, delay: 0 }
      : { duration: 0.55, delay: delayIndex * 0.09, ease: [0.16, 1, 0.3, 1] as const };

  const layerInitial = reduced ? { opacity: 0 } : { opacity: 0, y: 24 };
  const layerAnimate = reduced ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-20 md:pt-44 md:pb-28">
      <DotGrid variant="dark" className="opacity-60" />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-5 md:grid-cols-[60%_40%] md:gap-8 md:px-8">
        {/* Bloque de mensaje — 60% */}
        <div>
          <motion.div initial={layerInitial} animate={layerAnimate} transition={layerTransition(0)}>
            <Chip tone="on-dark">Agencia tecnológica · Asunción, Paraguay</Chip>
          </motion.div>

          <motion.h1
            initial={layerInitial}
            animate={layerAnimate}
            transition={layerTransition(1)}
            className="mt-6 max-w-[560px] text-[34px] font-bold leading-[1.08] tracking-[-0.02em] text-white sm:text-[44px] md:text-[58px]"
          >
            Tu negocio necesita clientes, no solo una página bonita.
          </motion.h1>

          <motion.div
            initial={layerInitial}
            animate={layerAnimate}
            transition={layerTransition(2)}
            className="mt-6 max-w-[520px]"
          >
            <p className="text-[16px] leading-[1.5] text-white/75 md:text-[19px]">
              Diseñamos webs que convierten visitas en consultas, te
              posicionamos en Google donde te buscan tus clientes, y
              automatizamos lo repetitivo para que tu negocio funcione solo.
              Todo en un mismo lugar, en Paraguay.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={waLink(WA_MESSAGES.heroPrimary)} external variant="primary">
                Quiero mi propuesta
                <ArrowRight size={18} />
              </Button>
              <Button href="#proceso" variant="outline-on-purple" className="!border-white/40 !text-white hover:!bg-white/10">
                Ver cómo trabajamos
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Mockup — 40% */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
          transition={
            reduced
              ? { duration: 0.15, delay: 0 }
              : { duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] as const }
          }
          className="mx-auto w-full max-w-[420px] md:max-w-none"
        >
          <DemoMockup
            url={heroDemo.url}
            title={heroDemo.nombre}
            imagen={heroDemo.imagen}
            priority
            className="md:[transform:rotate(-4deg)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
