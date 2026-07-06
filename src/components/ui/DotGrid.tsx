interface DotGridProps {
  variant?: "light" | "dark";
  className?: string;
}

/** Grilla de puntos sutil de fondo (Sección 3.4). Puramente decorativo, sin interacción. */
export default function DotGrid({ variant = "light", className = "" }: DotGridProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${
        variant === "light" ? "dot-grid" : "dot-grid-dark"
      } ${className}`}
    />
  );
}
