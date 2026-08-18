import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laredai.agency"),
  title: "La Red AI | Automatización e Inteligencia Artificial · Bogotá",
  description:
    "Automatizamos clínicas, consultorios, veterinarias y negocios en Bogotá con IA. Chatbots, agendas inteligentes, agentes de IA, landing pages, ecommerce y Meta Ads que generan resultados reales desde el primer mes.",
  keywords:
    "automatización IA Bogotá, chatbot WhatsApp Colombia, agenda automatizada consultorio, agencia inteligencia artificial Bogotá, chatbot para clínicas Colombia, automatización procesos Colombia, agentes IA Colombia, landing page Bogotá, meta ads Colombia, WhatsApp Business API Colombia, chatbot para médicos Colombia, automatización veterinaria, ManyChat Colombia, Make automatización Colombia, agencia IA Colombia, chatbot para negocios Bogotá, agenda online consultorio médico, inteligencia artificial para clínicas, La Red AI, laredai agency",
  alternates: {
    canonical: "https://www.laredai.agency",
  },
  openGraph: {
    title: "La Red AI | Automatización es la Solución",
    description:
      "Tu negocio trabaja. Tus clientes, atendidos. Tú, libre. Automatización con IA para negocios en Colombia.",
    url: "https://www.laredai.agency",
    siteName: "La Red AI",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Red AI | Automatización e Inteligencia Artificial · Bogotá",
    description:
      "Chatbots, agendas inteligentes y agentes IA para clínicas, consultorios y negocios en Colombia.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-white text-gray-900">
        {children}
        <Script
          src="https://forja-starter-ff6dac.yesitgonzalez.workers.dev/widget.js"
          strategy="lazyOnload"
        />
        <Script
          id="json-ld-laredai"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "La Red AI",
              url: "https://www.laredai.agency",
              description:
                "Agencia de automatización e inteligencia artificial en Bogotá. Chatbots, agendas automatizadas, agentes IA, landing pages, ecommerce y Meta Ads para clínicas, consultorios y negocios en Colombia.",
              telephone: "+573203358826",
              email: "yesitgonzalez@gmail.com",
              founder: {
                "@type": "Person",
                name: "Yesit González Pedraza",
                jobTitle: "Consultor IA · Fundador",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bogotá",
                addressRegion: "Cundinamarca",
                addressCountry: "CO",
              },
              areaServed: ["Bogotá", "Colombia", "Latinoamérica"],
              sameAs: [
                "https://www.facebook.com/profile.php?id=61586467695359",
                "https://www.instagram.com/accounts/onetap/",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Automatización IA",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chatbots con IA para WhatsApp", description: "Chatbots inteligentes para atención 24/7 en WhatsApp, Instagram y web." } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agenda Automatizada para Consultorios", description: "Sistema de citas inteligente para clínicas, consultorios y veterinarias." } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Agentes de Inteligencia Artificial", description: "Agentes IA que automatizan flujos completos de trabajo." } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Campañas Meta Ads", description: "Publicidad en Facebook e Instagram que genera clientes reales." } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landing Pages de Alta Conversión", description: "Páginas web diseñadas para convertir visitas en clientes." } },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
