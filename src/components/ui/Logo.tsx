import Link from "next/link";

interface LogoProps {
  /** "light" para uso sobre fondo oscuro/púrpura (texto blanco), "dark" para fondo claro (texto navy). */
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
}

/**
 * Logo AS BIT — isotipo SVG (fill="currentColor", ver logo-assets/asbit-isotipo.svg)
 * + wordmark "AS Bit" y tagline "Impulso digital" tipeados en Cabin Bold/SemiBold.
 *
 * Nota de identidad (Sección 3.1 del brief): Neue Machina se usa únicamente en el
 * arte original congelado del logo — acá el wordmark es texto vivo en Cabin, no
 * una reproducción de esa fuente paga.
 */
export default function Logo({
  variant = "dark",
  showTagline = true,
  className = "",
}: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="AS BIT — Impulso digital, ir al inicio"
    >
      <span
        className={`shrink-0 ${isLight ? "text-white" : "text-purple"}`}
        style={{ width: 30, height: 30 }}
      >
        <svg
          viewBox="0 0 52.262 52.258"
          width="30"
          height="30"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M 42.785 0.022 L 34.849 0.022 L 0.065 39.536 L 13.982 51.787 L 34.849 28.082 L 34.849 44.170 C 34.849 48.637 38.471 52.258 42.937 52.258 L 52.262 52.258 L 52.262 9.499 C 52.262 4.265 48.019 0.022 42.785 0.022 Z"
            fill="currentColor"
          />
          <path
            d="M 24.237 4.931 L 24.237 0.000 L 0.000 0.000 L 0.000 17.418 L 15.909 17.418 L 22.237 10.230 C 23.526 8.766 24.237 6.882 24.237 4.931 Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-bold text-[19px] tracking-tight ${
            isLight ? "text-white" : "text-navy"
          }`}
        >
          AS Bit
        </span>
        {showTagline && (
          <span
            className={`font-medium text-[10.5px] tracking-wide ${
              isLight ? "text-white/70" : "text-muted"
            }`}
          >
            Impulso digital
          </span>
        )}
      </span>
    </Link>
  );
}
