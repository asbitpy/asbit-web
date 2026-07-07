// Datos de las 4 demos reales (Sección 3.3, 8 y 8-Portafolio del brief).
// El mockup se muestra como captura estática optimizada (webp) dentro de un
// marco de navegador; el click navega al sitio en vivo (GitHub Pages).
// Se usa captura estática en vez de iframe en vivo por rendimiento: 5 iframes
// externos simultáneos congelaban el renderer y dejaban el hero en blanco al
// cargar, contradiciendo la regla de rendimiento del brief (Sección 10).

import { assetPath } from "@/lib/site";

export type DemoCategoria = "web" | "seo" | "sistemas" | "automatizacion";

export interface Demo {
  slug: string;
  rubro: string;
  nombre: string;
  frase: string;
  url: string;
  /** Captura estática (webp) en public/demos/. */
  imagen: string;
  categorias: DemoCategoria[];
  /** Slot grande del bento asimétrico en Portafolio Preview (Home). */
  destacadaEnHome?: boolean;
  /**
   * Se muestra en el bento curado de Home (Portafolio Preview). El catálogo
   * completo (todas las demos) vive siempre en /portafolio — Home solo
   * muestra una selección de 4 (1 grande + 3 estándar) para no saturar la
   * preview, tal como define el brief.
   */
  previewHome?: boolean;
}

export const DEMOS: Demo[] = [
  {
    slug: "hotel",
    rubro: "Hotel",
    nombre: "Hotel",
    frase:
      "Reservas claras y presentación premium para un huésped que decide en segundos.",
    url: "https://gomezarturosantander-cloud.github.io/hoteldemo-AS-BIT/",
    imagen: assetPath("/demos/hotel.webp"),
    categorias: ["web", "seo"],
    previewHome: true,
  },
  {
    slug: "clinica-dental",
    rubro: "Clínica odontológica",
    nombre: "Clínica odontológica",
    frase: "Confianza y turnos: lo que necesita un paciente antes de agendar.",
    url: "https://gomezarturosantander-cloud.github.io/CLINICA-DENTAL/",
    imagen: assetPath("/demos/clinica-dental.webp"),
    categorias: ["web", "seo"],
    previewHome: true,
  },
  {
    slug: "salon-belleza",
    rubro: "Salón de belleza",
    nombre: "Salón de belleza",
    frase: "Visual atractivo pensado para reservar turno desde el celular.",
    url: "https://gomezarturosantander-cloud.github.io/Salondebelleza-demo/",
    imagen: assetPath("/demos/salon-belleza.webp"),
    categorias: ["web", "seo"],
    // Slot grande del bento asimétrico (Sección 8): estética editorial
    // (LUMIÈRE) recomendada en el brief de negocio/arquitectura.
    destacadaEnHome: true,
    previewHome: true,
  },
  {
    slug: "cafeteria",
    rubro: "Cafetería",
    nombre: "Cafetería",
    frase: "Ambiente y menú que dan ganas de ir, optimizado para mobile.",
    url: "https://gomezarturosantander-cloud.github.io/ARTURO/",
    imagen: assetPath("/demos/cafeteria.webp"),
    categorias: ["web", "seo"],
    previewHome: true,
  },
  {
    slug: "quinta",
    rubro: "Quinta / alquiler turístico",
    nombre: "Quinta Paraíso",
    frase: "Reservas con urgencia real: disponibilidad y confianza para decidir un fin de semana.",
    url: "https://gomezarturosantander-cloud.github.io/quintademo-AS-BIT/",
    imagen: assetPath("/demos/quinta.webp"),
    categorias: ["web", "seo"],
  },
  {
    slug: "panaderia",
    rubro: "Panadería y pastelería",
    nombre: "MIGA",
    frase: "Fotografía que vende sola y pedido directo por WhatsApp, sin fricción.",
    url: "https://gomezarturosantander-cloud.github.io/DEMO-PANADERIA/",
    imagen: assetPath("/demos/panaderia.webp"),
    categorias: ["web", "seo"],
  },
];
