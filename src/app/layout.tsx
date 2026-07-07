import type { Metadata } from "next";
import { Cabin } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, CONTACT, assetPath } from "@/lib/site";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import MobileWhatsappBar from "@/components/layout/MobileWhatsappBar";

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE} | Agencia tecnológica en Asunción, Paraguay`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "agencia digital paraguay",
    "diseño web asuncion",
    "seo paraguay",
    "automatizacion negocios paraguay",
    "desarrollo web paraguay",
    "as bit",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        // URL absoluta a propósito (no relativa): los bots de OG/Twitter no
        // resuelven basePath, necesitan el link completo.
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: assetPath("/favicon.svg"),
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL, // TODO: reemplazar cuando se compre el dominio real
  email: CONTACT.email,
  telephone: `+${CONTACT.whatsappNumber}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Asunción",
    addressCountry: "PY",
  },
  areaServed: "PY",
  openingHours: "Mo-Sa 07:00-20:00",
  sameAs: [CONTACT.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PY" className={`${cabin.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-ink font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileWhatsappBar />
      </body>
    </html>
  );
}
