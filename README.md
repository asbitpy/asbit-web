# AS Bit — Web

Web de AS Bit, agencia tecnológica en Asunción, Paraguay: desarrollo web, SEO local, automatizaciones y sistemas a medida.

**Sitio en vivo:** https://asbitpy.github.io/asbit-web/

## Stack

- [Next.js 15](https://nextjs.org) (App Router, exportación estática)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- TypeScript

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Genera la exportación estática en `/out` (hosting sin servidor, listo para GitHub Pages).

## Deploy

El deploy a GitHub Pages es automático: cada push a `main` dispara el workflow en `.github/workflows/deploy.yml`, que buildea y publica el contenido de `/out`.

## Estructura

```
src/
  app/              rutas (Home, /portafolio, sitemap, robots)
  components/
    layout/         Nav, Footer, barra de WhatsApp fija
    sections/       las 11 secciones de Home (Hero, Diagnóstico, Planes, etc.)
    portfolio/       grilla filtrable de /portafolio
    ui/              componentes base (Button, Chip, Logo, DemoMockup)
  lib/               datos y config: demos, planes, diagnóstico, contacto
public/
  demos/             capturas de las webs demo
  logo/              isotipo vectorizado
```
