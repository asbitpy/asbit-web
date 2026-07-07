import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { CONTACT } from "@/lib/site";

const NAV_COLUMN = [
  { href: "/#solucion", label: "Servicios" },
  { href: "/#planes", label: "Planes" },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/#faq", label: "Preguntas frecuentes" },
];

const PILARES_COLUMN = [
  { href: "/#solucion", label: "Web de conversión" },
  { href: "/#solucion", label: "SEO local" },
  { href: "/#solucion", label: "Automatización & Sistemas" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-[220px] text-[14px] leading-relaxed text-white/60">
              Agencia tecnológica en Asunción. Webs que convierten, SEO local y
              automatización para negocios paraguayos.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-white/50">
              Navegación
            </h3>
            <ul className="space-y-3">
              {NAV_COLUMN.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="touch-target inline-flex items-center text-[15px] text-white/80 transition-colors hover:text-purple"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-white/50">
              Pilares
            </h3>
            <ul className="space-y-3">
              {PILARES_COLUMN.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="touch-target inline-flex items-center text-[15px] text-white/80 transition-colors hover:text-purple"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-white/50">
              Contacto
            </h3>
            <ul className="space-y-3 text-[15px] text-white/80">
              <li>
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center hover:text-purple"
                >
                  {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="touch-target inline-flex items-center hover:text-purple"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="touch-target inline-flex items-center hover:text-purple"
                >
                  {CONTACT.instagram}
                </a>
              </li>
              <li className="text-white/50">{CONTACT.city}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[13px] text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} AS BIT. Todos los derechos reservados.</p>
          <p>Hecho en Asunción, Paraguay.</p>
        </div>
      </div>
    </footer>
  );
}
