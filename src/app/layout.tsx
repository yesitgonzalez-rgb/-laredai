import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
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
  title: "La Red AI | Automatización e Inteligencia Artificial · Bogotá",
  description:
    "Automatizamos clínicas, consultorios, veterinarias y negocios en Bogotá con IA. Chatbots, agendas inteligentes, agentes de IA, landing pages, ecommerce y Meta Ads que generan resultados.",
  keywords:
    "automatización IA Bogotá, chatbots Colombia, agenda automatizada clínicas, agentes inteligencia artificial, landing pages Colombia",
  openGraph: {
    title: "La Red AI | Automatización es la Solución",
    description:
      "Tu negocio trabaja. Tus clientes, atendidos. Tú, libre. Automatización con IA para negocios en Colombia.",
    url: "https://www.laredai.agency",
    siteName: "La Red AI",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
