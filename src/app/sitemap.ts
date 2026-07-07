import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Requerido por "output: export" (GitHub Pages es hosting estático).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // Con trailingSlash:true (next.config.ts) todas las páginas se sirven con
  // "/" al final — el sitemap debe coincidir exacto con la URL real servida.
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/portafolio/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
