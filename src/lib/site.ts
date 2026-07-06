// Configuración central del sitio: dominio, contacto y helpers de WhatsApp.
//
// NOTA IMPORTANTE: el dominio real todavía no existe. NEXT_PUBLIC_SITE_URL
// es un placeholder — reemplazar cuando se compre el dominio real
// (actualizar la env var, no hace falta tocar código).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://asbit.com.py"; // TODO: reemplazar cuando se compre el dominio real

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
