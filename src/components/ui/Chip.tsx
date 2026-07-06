import { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  className?: string;
  tone?: "purple" | "neutral" | "on-dark";
}

/**
 * Chip/eyebrow pill. Tono "purple" reservado para contexto donde el chip
 * comunica algo destacado/accionable (ej. "Recomendado para crecer" en Core);
 * "neutral" para chips puramente informativos (ej. "Demo propia"), coherente
 * con la regla 3.2 de que el púrpura señala interactividad/foco.
 */
export default function Chip({ children, className = "", tone = "purple" }: ChipProps) {
  const toneClasses = {
    purple: "bg-purple-soft text-purple",
    neutral: "bg-black/5 text-ink/70",
    "on-dark": "bg-white/10 text-white",
  }[tone];

  return (
    <span
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-wide ${toneClasses} ${className}`}
    >
      {children}
    </span>
  );
}
