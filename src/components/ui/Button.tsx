import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "primary-on-purple" | "outline-on-purple";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  href?: string;
  external?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-purple text-white hover:bg-purple-hover shadow-[0_4px_24px_rgba(127,58,239,0.25)] hover:shadow-[0_8px_36px_rgba(127,58,239,0.4)]",
  outline:
    "bg-transparent border-[1.5px] border-purple text-purple hover:bg-purple hover:text-white",
  "primary-on-purple": "bg-white text-purple hover:shadow-[0_8px_32px_rgba(255,255,255,0.35)]",
  "outline-on-purple":
    "bg-transparent border-[1.5px] border-white/70 text-white hover:bg-white/15",
};

const baseClasses =
  "touch-target inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 font-semibold text-[16px] transition-all duration-200 ease-out active:scale-[0.98] motion-safe:hover:scale-[1.02]";

/**
 * Botón/link unificado del sitio. Si recibe `href`, renderiza como enlace
 * (externo con `external`, o interno vía next/link); si no, como `<button>`.
 */
export default function Button({
  children,
  variant = "primary",
  className = "",
  icon,
  href,
  external,
  onClick,
  type,
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
