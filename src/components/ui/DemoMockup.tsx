"use client";

import Image from "next/image";

interface DemoMockupProps {
  url: string;
  title: string;
  /** Captura estática de la demo (webp en public/demos/). */
  imagen: string;
  /** Grados de rotación (Hero usa -4°, otros contextos van rectos). */
  rotate?: number;
  className?: string;
  /** Prioriza la carga (usar solo en el mockup del Hero, above-the-fold). */
  priority?: boolean;
}

/**
 * Mockup premium de una demo real (Sección 3.3 del brief): marco de navegador
 * minimalista (3 puntos + sliver de barra de dirección) + captura estática
 * optimizada de la demo. El click navega a la URL real en vivo en una pestaña
 * nueva. Glow púrpura sutil alrededor del marco.
 *
 * Se usa imagen estática (no iframe en vivo) por rendimiento: varios iframes
 * externos simultáneos congelaban el renderer y bloqueaban el primer paint del
 * hero — contradiciendo la regla de rendimiento del propio brief (Sección 10).
 */
export default function DemoMockup({
  url,
  title,
  imagen,
  rotate = 0,
  className = "",
  priority = false,
}: DemoMockupProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[28px] bg-purple/25 blur-3xl -z-10"
      />

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver demo de ${title} en una pestaña nueva`}
        className="group block overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(30,17,74,0.18)] transition-transform duration-300 motion-safe:hover:scale-[1.015]"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#F4F3F7] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-2 flex-1 truncate rounded-full bg-white px-2.5 py-1 text-[10px] text-muted border border-black/5">
            {url.replace(/^https?:\/\//, "")}
          </span>
        </div>

        {/* Viewport — captura estática 4:3 */}
        <div className="relative aspect-[4/3] overflow-hidden bg-white">
          <Image
            src={imagen}
            alt={`Vista previa de la web demo de ${title} desarrollada por AS BIT`}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            priority={priority}
            loading={priority ? undefined : "lazy"}
          />
          {/* Overlay de hover sutil */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </a>
    </div>
  );
}
