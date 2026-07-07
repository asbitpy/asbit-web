import type { NextConfig } from "next";

// GitHub Pages sirve el sitio en https://asbitpy.github.io/asbit-web/ (un
// subdirectorio, no la raíz del dominio) y es hosting 100% estático — sin
// servidor Node. Por eso: output "export" (genera HTML/CSS/JS estáticos en
// /out, sin necesitar servidor), basePath/assetPrefix para que todas las
// rutas y assets apunten al subdirectorio correcto, images.unoptimized
// porque la optimización on-demand de next/image necesita un servidor que
// GitHub Pages no tiene, y trailingSlash para que /portafolio resuelva a
// /portafolio/index.html como espera un host de archivos estáticos.
const repoBasePath = "/asbit-web";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // next/image con unoptimized:true NO antepone basePath automáticamente a
  // los src locales (bug/comportamiento verificado en build) — se expone acá
  // como env var para que src/lib/site.ts arme las rutas de assets a mano.
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBasePath,
  },
};

export default nextConfig;
