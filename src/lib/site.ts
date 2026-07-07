// Configuración central del sitio: dominio, contacto y helpers de WhatsApp.
//
// NOTA IMPORTANTE: el dominio real todavía no existe. Mientras tanto el sitio
// vive en GitHub Pages. NEXT_PUBLIC_SITE_URL sigue siendo reemplazable por
// env var — actualizar este valor (o setear la env var) cuando se compre el
// dominio real, no hace falta tocar más código.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asbitpy.github.io/asbit-web"; // TODO: reemplazar cuando se compre el dominio real

// Subdirectorio donde vive el sitio en GitHub Pages (basePath de next.config.ts).
// Vacío ("") cuando el sitio viva en la raíz de un dominio propio — no hace
// falta tocar los usos de assetPath() más abajo, solo esta env var.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Ruta absoluta same-origin para assets locales (imágenes en /public, ícono,
 * etc). Necesario porque next/image con images.unoptimized no antepone
 * basePath automáticamente a los src locales.
 */
export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}

export const SITE_NAME = "AS BIT";
export const SITE_TAGLINE = "Impulso digital";
export const SITE_DESCRIPTION =
  "Diseñamos webs que convierten visitas en consultas, te posicionamos en Google donde te buscan tus clientes, y automatizamos lo repetitivo para que tu negocio funcione solo. Agencia tecnológica en Asunción, Paraguay.";

export const CONTACT = {
  whatsappNumber: "595991932406",
  whatsappDisplay: "+595 991 932406",
  email: "asbit.py@gmail.com",
  city: "Asunción, Paraguay",
  hours: "Lunes a sábado, 7:00 a 20:00",
  instagram: "@asbit.py",
  instagramUrl: "https://instagram.com/asbit.py",
};

export function waLink(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

// Mensajes precargados de WhatsApp por ubicación de CTA (Sección 6 del brief).
// Donde el brief no especificó el texto literal exacto, se usó un mensaje
// razonable y coherente con el tono de voz de la marca y con el copy del
// botón correspondiente (documentado como desviación menor en la entrega).
export const WA_MESSAGES = {
  nav: "Hola AS BIT, quiero saber qué plan me conviene para mi negocio.",
  mobileBar: "Hola AS BIT, quiero saber qué plan me conviene para mi negocio.",
  heroPrimary: "Hola AS BIT, quiero mi propuesta para mi negocio.",
  solucion:
    "Hola AS BIT, no sé si necesito web, SEO o un sistema completo, ¿me ayudan a ver qué me conviene?",
  proceso: "Hola AS BIT, quiero arrancar la conversación sobre mi proyecto.",
  ctaFinal: "Hola AS BIT, vi la web y quiero hablar sobre mi proyecto.",
  portafolioPagina:
    "Hola AS BIT, me gustó lo que vi en el portafolio y quiero hablar de mi proyecto.",
  planByte: "Hola AS BIT, quiero el plan Byte para mi negocio.",
  planCore: "Hola AS BIT, quiero el plan Core para mi negocio.",
  planStack: "Hola AS BIT, quiero el plan Stack para mi negocio.",
} as const;

export function diagnosticoMessage(plan: string, resumen: string): string {
  return `Hola AS BIT, hice el diagnóstico rápido en la web. Respondí: ${resumen}. Me recomendó el plan ${plan}. Quiero que me cuenten más.`;
}
