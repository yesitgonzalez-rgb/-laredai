"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Bot,
  Calendar,
  Globe,
  ShoppingBag,
  Smartphone,
  Megaphone,
  GraduationCap,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  TrendingUp,
  Users,
  Phone,
} from "lucide-react";

const WA_URL = "https://wa.me/573203358826";
const WA_MSG = encodeURIComponent(
  "Hola! Visité laredai.agency y me gustaría saber cómo pueden ayudarme a automatizar mi negocio. 🤖"
);
const FB_URL = "https://www.facebook.com/profile.php?id=61586467695359";
const IG_URL = "https://www.instagram.com/accounts/onetap/";

/* ── Íconos SVG de redes ── */
function IconFacebook({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
function IconWhatsApp({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ── Flujos de conversación ── */
const FLOWS = {
  agenda: {
    label: "🗓️ Agenda para mi consultorio",
    botReply: "¡Perfecto! La agenda inteligente es nuestra especialidad. Configuramos tu WhatsApp para gestionar citas sin llamadas ni trabajo manual. ¡Te explicamos cómo en 5 minutos! 👇",
    waMsg: "Hola La Red AI! Me interesa la agenda automatizada para mi consultorio/clínica. ¿Cuándo podemos hablar? 🗓️",
  },
  chatbot: {
    label: "🤖 Chatbot para mi negocio",
    botReply: "¡Excelente elección! Un chatbot IA puede atender a tus clientes 24/7, capturar leads y cerrar ventas mientras duermes. ¡Escríbenos y te mostramos ejemplos reales! 👇",
    waMsg: "Hola La Red AI! Quiero implementar un chatbot con IA para mi negocio. ¿Me pueden asesorar? 🤖",
  },
  web: {
    label: "🌐 Quiero una página web",
    botReply: "¡Genial! Hacemos landing pages de alta conversión y tiendas ecommerce que venden desde el primer día. Te compartimos nuestro portafolio ahora mismo 👇",
    waMsg: "Hola La Red AI! Necesito una página web o landing page profesional. ¿Qué opciones tienen? 🌐",
  },
  ads: {
    label: "📣 Campañas Meta Ads",
    botReply: "¡Buena decisión! Gestionamos campañas en Facebook e Instagram que traen clientes reales, no solo likes. Cuéntanos sobre tu negocio 👇",
    waMsg: "Hola La Red AI! Me interesan las campañas de Meta Ads. ¿Cómo trabajan? 📣",
  },
} as const;

type FlowKey = keyof typeof FLOWS;

/* ── Widget flotante WhatsApp ── */
function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<FlowKey | null>(null);
  const [typing, setTyping] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Scroll al último mensaje
  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [open, showReply, typing]);

  const handleSelect = (key: FlowKey) => {
    setSelected(key);
    setTyping(true);
    setShowReply(false);
    setTimeout(() => {
      setTyping(false);
      setShowReply(true);
    }, 1600);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSelected(null);
      setTyping(false);
      setShowReply(false);
    }, 300);
  };

  const waTarget = selected
    ? `${WA_URL}?text=${encodeURIComponent(FLOWS[selected].waMsg)}`
    : `${WA_URL}?text=${WA_MSG}`;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-[9999] flex flex-col items-end gap-3">

      {/* ── Popup chat ── */}
      <div
        className={`w-[calc(100vw-32px)] sm:w-80 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] overflow-hidden transition-all duration-300 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-90 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header verde */}
        <div className="bg-[#25D366] px-4 py-4 flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <IconWhatsApp size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-white text-sm leading-tight">La Red AI</p>
            <p className="text-white/80 text-xs">Automatización &amp; IA · Bogotá</p>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-white/70 text-[10px]">En línea</span>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar chat"
            className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors flex-shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Área de conversación */}
        <div className="bg-[#ECE5DD] px-4 py-4 flex flex-col gap-3 max-h-72 overflow-y-auto">

          {/* Mensaje inicial del bot */}
          <div className="flex items-end gap-2">
            <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
              <IconWhatsApp size={14} />
            </div>
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
              <p className="text-[#0D2621] text-sm leading-relaxed">
                👋 ¡Hola! Soy el asistente de <strong>La Red AI</strong>.
              </p>
              <p className="text-[#0D2621] text-sm leading-relaxed mt-1">
                ¿En qué podemos ayudarte hoy?
              </p>
              <p className="text-gray-400 text-[10px] mt-1.5 text-right">ahora</p>
            </div>
          </div>

          {/* Opciones de respuesta rápida */}
          {!selected && (
            <div className="flex flex-col gap-2 ml-9">
              {(Object.entries(FLOWS) as [FlowKey, typeof FLOWS[FlowKey]][]).map(([key, flow]) => (
                <button
                  key={key}
                  onClick={() => handleSelect(key)}
                  className="text-left bg-white border-2 border-[#25D366]/40 text-[#0D2621] text-xs font-semibold px-3 py-2.5 rounded-xl hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-200 shadow-sm"
                >
                  {flow.label}
                </button>
              ))}
            </div>
          )}

          {/* Mensaje del usuario seleccionado */}
          {selected && (
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-sm max-w-[80%]">
                <p className="text-[#0D2621] text-sm">{FLOWS[selected].label}</p>
                <p className="text-gray-400 text-[10px] mt-1 text-right">ahora ✓✓</p>
              </div>
            </div>
          )}

          {/* Indicador "escribiendo..." */}
          {typing && (
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <IconWhatsApp size={14} />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}

          {/* Respuesta del bot */}
          {showReply && selected && (
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <IconWhatsApp size={14} />
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
                <p className="text-[#0D2621] text-sm leading-relaxed">{FLOWS[selected].botReply}</p>
                <p className="text-gray-400 text-[10px] mt-1.5 text-right">ahora</p>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Botón abrir chat */}
        <div className="bg-white px-4 py-4">
          <a
            href={waTarget}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold text-sm py-3 rounded-xl hover:bg-[#1ebe5d] transition-colors shadow-sm"
            onClick={handleClose}
          >
            <IconWhatsApp size={18} />
            {showReply ? "¡Continuar en WhatsApp!" : "Abrir chat"}
          </a>
          <p className="text-center text-gray-400 text-[10px] mt-2">
            Powered by <span className="text-[#2BB89A] font-semibold">La Red AI</span>
          </p>
        </div>
      </div>

      {/* ── Botón flotante ── */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar WhatsApp" : "Abrir WhatsApp"}
        style={{ touchAction: "manipulation" }}
        className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.5)] hover:shadow-[0_12px_48px_rgba(37,211,102,0.7)] hover:scale-110 transition-all duration-300 select-none"
      >
        {/* Anillo pulsante — solo cuando está cerrado */}
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
            <span className="absolute inset-[-5px] rounded-full border-2 border-[#25D366]/30 animate-pulse" />
          </>
        )}
        {/* Ícono con transición */}
        <span className={`transition-all duration-200 ${open ? "rotate-90 scale-90" : "rotate-0 scale-100"}`}>
          {open
            ? <span className="text-xl font-bold leading-none">✕</span>
            : <IconWhatsApp size={30} />
          }
        </span>
      </button>
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#2BB89A] flex items-center justify-center">
            <span className="text-white font-display font-extrabold text-sm leading-none">R</span>
          </div>
          <div className="leading-tight">
            <span className="font-display font-extrabold text-[#0D2621] text-lg">La Red</span>
            <span className="font-display font-extrabold text-[#2BB89A] text-lg"> AI</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
          <a href="#servicios" className="hover:text-[#2BB89A] transition-colors">Servicios</a>
          <a href="#como-funciona" className="hover:text-[#2BB89A] transition-colors">Cómo funciona</a>
          <a href="#resultados" className="hover:text-[#2BB89A] transition-colors">Resultados</a>
          <a href="#faq" className="hover:text-[#2BB89A] transition-colors">FAQ</a>
          <a href="#nosotros" className="hover:text-[#2BB89A] transition-colors">Nosotros</a>
        </nav>

        {/* CTA */}
        <a
          href={`${WA_URL}?text=${WA_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#2BB89A] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#1d9e82] transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <MessageCircle size={15} />
          Hablar con un asesor
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium">
          <a href="#servicios" onClick={() => setOpen(false)} className="text-gray-700 hover:text-[#2BB89A]">Servicios</a>
          <a href="#como-funciona" onClick={() => setOpen(false)} className="text-gray-700 hover:text-[#2BB89A]">Cómo funciona</a>
          <a href="#resultados" onClick={() => setOpen(false)} className="text-gray-700 hover:text-[#2BB89A]">Resultados</a>
          <a href="#faq" onClick={() => setOpen(false)} className="text-gray-700 hover:text-[#2BB89A]">FAQ</a>
          <a href="#nosotros" onClick={() => setOpen(false)} className="text-gray-700 hover:text-[#2BB89A]">Nosotros</a>
          <a
            href={`${WA_URL}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#2BB89A] text-white px-5 py-3 rounded-full font-semibold"
          >
            <MessageCircle size={15} /> Hablar con un asesor
          </a>
        </div>
      )}
    </header>
  );
}

const metrics = [
  { icon: <Zap size={18} />, value: "+50", label: "Proyectos implementados" },
  { icon: <TrendingUp size={18} />, value: "3×", label: "Aumento en conversiones" },
  { icon: <Clock size={18} />, value: "80%", label: "Menos tiempo de respuesta" },
  { icon: <Users size={18} />, value: "200h", label: "Ahorradas por cliente/mes" },
];

const industries = [
  {
    img: "/images/ind-clinicas.png",
    label: "Clínicas de salud",
    tag: "Agenda & Atención IA",
    desc: "Agenda automática, recordatorios y atención 24/7 para tus pacientes por WhatsApp. Sin llamadas perdidas.",
  },
  {
    img: "/images/ind-consultorios.png",
    label: "Consultorios",
    tag: "Citas automatizadas 24/7",
    desc: "Tu asistente IA gestiona citas, confirma pacientes y responde preguntas. Tú te enfocas en atender.",
  },
  {
    img: "/images/ind-veterinarias.png",
    label: "Veterinarias",
    tag: "Chatbot & eCommerce",
    desc: "Chatbot para citas, venta de productos y atención multicanal. Tus clientes y sus mascotas, siempre atendidos.",
  },
  {
    img: "/images/ind-emprendedores.png",
    label: "Emprendedores",
    tag: "Presencia digital completa",
    desc: "Landing pages, tienda online y automatización para crecer rápido, sin complicaciones y sin grandes presupuestos.",
  },
  {
    img: "/images/ind-independientes.png",
    label: "Profesionales independientes",
    tag: "Automatización integral",
    desc: "Un sistema que trabaja para ti 24/7 mientras te concentras en asesorar a tus clientes y hacer crecer tu marca.",
  },
  {
    img: "/images/ind-empresas.png",
    label: "Pequeñas empresas",
    tag: "Operación inteligente",
    desc: "Automatiza procesos, atiende más clientes y reduce costos operativos. Haz más con el mismo equipo.",
  },
];

const pillars = [
  {
    icon: <Calendar size={28} />,
    tag: "Para profesionales de la salud",
    title: "Agenda Inteligente",
    desc: "Tus pacientes agendan, confirman y reprograman por WhatsApp sin que tú muevas un dedo. Sin llamadas perdidas. Sin citas sin confirmar. Tu consulta, organizada sola.",
    benefit: "Reduce ausencias hasta un 60%",
    color: "bg-[#F0FAF7] border-[#2BB89A]/20",
    iconBg: "bg-[#2BB89A]",
  },
  {
    icon: <Bot size={28} />,
    tag: "Para cualquier negocio",
    title: "Chatbots & Agentes IA",
    desc: "Atención 24/7 sin contratar más personal. Responde preguntas, captura leads, califica clientes y cierra ventas mientras duermes. Integrado con WhatsApp, Instagram y tu web.",
    benefit: "Atiende hasta 10x más clientes",
    color: "bg-white border-gray-100",
    iconBg: "bg-[#0D2621]",
  },
  {
    icon: <Globe size={28} />,
    tag: "Presencia digital completa",
    title: "Presencia Digital",
    desc: "Landing pages que convierten, tiendas online profesionales y campañas de Meta Ads que traen clientes reales. No solo visitas — resultados medibles desde el primer mes.",
    benefit: "ROI visible desde el mes 1",
    color: "bg-[#F0FAF7] border-[#2BB89A]/20",
    iconBg: "bg-[#2BB89A]",
  },
];

const steps = [
  {
    num: "01",
    title: "Diagnóstico gratuito",
    desc: "Analizamos tu negocio, tus procesos y dónde estás perdiendo tiempo y clientes. Sin costo. Sin compromiso.",
  },
  {
    num: "02",
    title: "Implementamos tu solución",
    desc: "Diseñamos y activamos tu automatización en menos de 2 semanas. Tú solo apruebas — nosotros lo construimos.",
  },
  {
    num: "03",
    title: "Mides resultados reales",
    desc: "Desde el primer mes ves el impacto: más citas, más ventas, menos trabajo manual. Los números no mienten.",
  },
];

const bigMetrics = [
  { value: "+50", label: "Proyectos entregados", sub: "en clínicas, PYMES y negocios" },
  { value: "3×", label: "Conversión promedio", sub: "más ventas que sin automatización" },
  { value: "80%", label: "Reducción en respuesta", sub: "de horas a segundos" },
  { value: "24/7", label: "Atención continua", sub: "sin contratar más personal" },
];

const services = [
  { icon: <Bot size={22} />, title: "Chatbots con IA", desc: "Atención automática en WhatsApp, Instagram y tu web. Responden, venden y capturan leads." },
  { icon: <Calendar size={22} />, title: "Agenda Automatizada", desc: "Citas inteligentes para clínicas, consultorios y veterinarias. Sin llamadas, sin ausencias." },
  { icon: <Zap size={22} />, title: "Agentes de IA", desc: "Agentes que ejecutan tareas, responden clientes y automatizan flujos completos de trabajo." },
  { icon: <GraduationCap size={22} />, title: "Formación & Consultoría", desc: "Aprende a usar IA en tu negocio o deja que nuestros expertos implementen todo por ti." },
  { icon: <Globe size={22} />, title: "Landing Pages de Alta Conversión", desc: "Páginas diseñadas para convertir visitas en clientes. Rápidas, bonitas y optimizadas." },
  { icon: <ShoppingBag size={22} />, title: "Tiendas Ecommerce", desc: "Tu tienda online profesional con catálogo, carrito y pagos integrados. Lista para vender." },
  { icon: <Smartphone size={22} />, title: "Apps Personalizadas", desc: "Aplicaciones a medida para tu negocio. Web apps, móviles, paneles internos." },
  { icon: <Megaphone size={22} />, title: "Campañas Meta Ads", desc: "Publicidad en Facebook e Instagram que genera clientes reales, no solo likes." },
];

const faqs = [
  {
    q: "¿Cuánto tiempo toma implementar una solución?",
    a: "La mayoría de implementaciones están listas en 1 a 2 semanas. Los proyectos más complejos (apps, ecommerce) pueden tomar 3 a 4 semanas. Siempre te damos una fecha de entrega clara desde el inicio.",
  },
  {
    q: "¿Necesito conocimientos técnicos para usar sus sistemas?",
    a: "No. Todo lo que implementamos es fácil de usar para ti. Te entregamos acceso, te capacitamos brevemente y nos encargamos del soporte. Tú solo usas el resultado.",
  },
  {
    q: "¿Los chatbots funcionan con WhatsApp?",
    a: "Sí. La mayoría de nuestras soluciones se integran directamente con WhatsApp Business API, que es donde están tus clientes. También integramos Instagram, Messenger y web.",
  },
  {
    q: "¿Trabajan solo en Bogotá?",
    a: "Tenemos base en Bogotá pero trabajamos con clientes en toda Colombia y Latinoamérica. Todo nuestro trabajo es 100% remoto y digital — la ubicación no es un límite.",
  },
  {
    q: "¿Qué pasa si el sistema no me funciona como esperaba?",
    a: "Incluimos período de ajustes sin costo adicional después de cada entrega. Nuestro objetivo es que veas resultados reales, no que simplemente recibas un entregable.",
  },
  {
    q: "¿Cuánto cuesta implementar una solución?",
    a: "Depende del proyecto. Tenemos soluciones desde precios muy accesibles para emprendedores hasta desarrollos empresariales completos. Escríbenos para un diagnóstico gratuito y presupuesto a medida.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left text-[#0D2621] font-semibold text-base hover:bg-[#F0FAF7] transition-colors"
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown
          size={18}
          className={`text-[#2BB89A] flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        {/* ── HERO ── */}
        <section className="pt-28 pb-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#F0FAF7] border border-[#2BB89A]/30 text-[#1d9e82] font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8">
                <Zap size={12} />
                Automatización con IA · Bogotá, Colombia
              </div>

              {/* Headline */}
              <h1 className="font-display font-extrabold text-[#0D2621] text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
                Tu negocio trabaja.
                <br />
                <span className="text-[#2BB89A]">Tus clientes, atendidos.</span>
                <br />
                Tú, libre.
              </h1>

              <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                Automatizamos clínicas, consultorios, veterinarias y negocios en Colombia con Inteligencia Artificial.
                Más ventas, menos trabajo manual — desde el primer mes.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a
                  href={`${WA_URL}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#2BB89A] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#1d9e82] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} />
                  Hablar con un asesor
                </a>
                <a
                  href="#como-funciona"
                  className="flex items-center gap-2 border-2 border-[#0D2621] text-[#0D2621] px-8 py-4 rounded-full font-bold text-base hover:bg-[#0D2621] hover:text-white transition-all duration-200"
                >
                  Cómo funciona
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Metrics strip */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-[#F0FAF7] rounded-2xl p-5 border border-[#2BB89A]/15 text-center"
                  >
                    <div className="flex justify-center text-[#2BB89A] mb-2">{m.icon}</div>
                    <div className="font-display font-extrabold text-3xl text-[#0D2621]">{m.value}</div>
                    <div className="text-xs text-gray-500 mt-1 leading-snug">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── INDUSTRIAS ── */}
        <section className="py-20 bg-[#0D2621]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-[#2BB89A] font-semibold text-sm uppercase tracking-widest mb-3">
              Soluciones para cada tipo de negocio
            </p>
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl text-center mb-12">
              Hecho para tu sector. Desde el primer día.
            </h2>

            {/* Grid 3 × 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <div
                  key={ind.label}
                  className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#2BB89A]/50 hover:bg-white/8 transition-all duration-300"
                >
                  {/* Imagen completa, sin recorte */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0a1f18]">
                    <Image
                      src={ind.img}
                      alt={ind.label}
                      fill
                      className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Texto debajo */}
                  <div className="p-5 flex flex-col flex-1">
                    <span className="inline-block bg-[#2BB89A]/15 text-[#2BB89A] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3 w-fit">
                      {ind.tag}
                    </span>
                    <h3 className="font-display font-bold text-white text-lg mb-2">
                      {ind.label}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed flex-1">
                      {ind.desc}
                    </p>
                    <a
                      href={`${WA_URL}?text=${encodeURIComponent(`Hola! Me interesa la solución de La Red AI para ${ind.label}. ¿Me cuentan más? 🤖`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center gap-2 text-[#2BB89A] text-sm font-semibold hover:text-white transition-colors"
                    >
                      <MessageCircle size={14} />
                      Quiero esta solución
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 PILARES ── */}
        <section className="py-24 bg-white" id="servicios">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#2BB89A] font-semibold text-sm uppercase tracking-widest">Nuestras soluciones</span>
              <h2 className="font-display font-extrabold text-[#0D2621] text-4xl sm:text-5xl mt-3 mb-4">
                Tres pilares que transforman
                <br />
                cómo funciona tu negocio
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto text-base">
                Cada solución está diseñada para un problema real. Sin tecnología por tecnología — solo resultados concretos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className={`rounded-3xl p-8 border flex flex-col ${p.color}`}
                >
                  <div className={`${p.iconBg} text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                    {p.icon}
                  </div>
                  <span className="text-[#2BB89A] text-xs font-bold uppercase tracking-wider mb-2">{p.tag}</span>
                  <h3 className="font-display font-extrabold text-[#0D2621] text-2xl mb-4">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">{p.desc}</p>
                  <div className="flex items-center gap-2 text-[#2BB89A] font-semibold text-sm">
                    <CheckCircle2 size={16} />
                    {p.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ── */}
        <section className="py-24 bg-[#F0FAF7]" id="como-funciona">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#2BB89A] font-semibold text-sm uppercase tracking-widest">El proceso</span>
              <h2 className="font-display font-extrabold text-[#0D2621] text-4xl sm:text-5xl mt-3">
                De cero a automatizado
                <br />
                en tres pasos
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* connector line */}
              <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-[#2BB89A]/20" />
              {steps.map((s, i) => (
                <div key={i} className="relative flex flex-col items-start">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#2BB89A] flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="font-display font-extrabold text-white text-xl">{s.num}</span>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-[#0D2621] text-xl mb-3">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <a
                href={`${WA_URL}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0D2621] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#2BB89A] transition-all duration-200 shadow-lg"
              >
                <Phone size={16} />
                Agendar diagnóstico gratuito
              </a>
            </div>
          </div>
        </section>

        {/* ── MÉTRICAS GRANDES ── */}
        <section className="py-24 bg-[#0D2621]" id="resultados">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#2BB89A] font-semibold text-sm uppercase tracking-widest">Resultados reales</span>
              <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl mt-3">
                Números que hablan
              </h2>
              <p className="text-gray-400 mt-4 max-w-lg mx-auto text-base">
                Estos son los resultados promedio que ven nuestros clientes después de implementar automatización con IA.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {bigMetrics.map((m) => (
                <div
                  key={m.label}
                  className="text-center bg-white/5 rounded-3xl p-8 border border-white/10"
                >
                  <div className="font-display font-extrabold text-[#2BB89A] text-5xl sm:text-6xl mb-3">{m.value}</div>
                  <div className="font-display font-bold text-white text-lg mb-2">{m.label}</div>
                  <div className="text-gray-400 text-xs leading-snug">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICIOS COMPLETOS ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#2BB89A] font-semibold text-sm uppercase tracking-widest">Todo lo que necesitas</span>
              <h2 className="font-display font-extrabold text-[#0D2621] text-4xl sm:text-5xl mt-3">
                Una sola agencia.
                <br />
                Todas las herramientas.
              </h2>
              <p className="text-gray-500 mt-4 max-w-lg mx-auto">
                No necesitas contratar 5 proveedores diferentes. Aquí tienes todo bajo un mismo techo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#2BB89A]/40 hover:shadow-[0_8px_32px_rgba(43,184,154,0.12)] transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-[#F0FAF7] text-[#2BB89A] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#2BB89A] group-hover:text-white transition-colors duration-300">
                    {s.icon}
                  </div>
                  <h3 className="font-display font-bold text-[#0D2621] text-base mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTERMEDIO CTA ── */}
        <section className="py-20 bg-[#2BB89A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-white text-4xl sm:text-5xl mb-4">
              ¿Listo para dejar de hacer todo manual?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Habla con nosotros hoy. El diagnóstico es gratis. Los resultados, reales.
            </p>
            <a
              href={`${WA_URL}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#0D2621] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F0FAF7] transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            >
              <MessageCircle size={20} />
              Escribir ahora por WhatsApp
            </a>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-[#F0FAF7]" id="faq">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="text-[#2BB89A] font-semibold text-sm uppercase tracking-widest">Preguntas frecuentes</span>
              <h2 className="font-display font-extrabold text-[#0D2621] text-4xl sm:text-5xl mt-3">
                Lo que todos preguntan
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((f) => (
                <FaqItem key={f.q} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── NOSOTROS ── */}
        <section className="py-24 bg-white" id="nosotros">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#2BB89A] font-semibold text-sm uppercase tracking-widest">El equipo</span>
              <h2 className="font-display font-extrabold text-[#0D2621] text-4xl sm:text-5xl mt-3">
                La persona detrás de cada solución
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 bg-[#F0FAF7] rounded-3xl p-8 lg:p-14 border border-[#2BB89A]/15">
              {/* Foto */}
              <div className="flex-shrink-0">
                <div className="relative w-52 h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#2BB89A]/30 shadow-xl">
                  <Image
                    src="/images/yesit-gonzalez.png"
                    alt="Yesit González Pedraza — Fundador de La Red AI"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 208px, 256px"
                    priority
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center lg:text-left">
                <span className="text-[#2BB89A] text-xs font-bold uppercase tracking-widest mb-2 block">— Fundador</span>
                <h3 className="font-display font-extrabold text-[#0D2621] text-3xl lg:text-4xl mb-1">
                  Yesit González Pedraza
                </h3>
                <p className="text-[#2BB89A] font-bold text-sm uppercase tracking-wider mb-1">
                  Consultor IA · Fundador de La Red AI
                </p>
                <p className="text-gray-500 text-sm italic mb-5">
                  Campañas Meta Ads · Meta Business · Automatización · Creador de Sitios Web
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-7 max-w-xl">
                  Especialista en automatización de procesos y marketing digital para el sector salud. Con experiencia en herramientas como Make, ManyChat, WhatsApp Business API y Meta Ads, ayudo a consultorios, clínicas e IPS a transformar su gestión y multiplicar su impacto — desde el primer mes.
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
                  {["Automatización", "Meta Ads", "IA Aplicada", "Sector Salud", "Bogotá, Colombia"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#2BB89A]/10 text-[#2BB89A] border border-[#2BB89A]/20 text-xs font-semibold px-4 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`${WA_URL}?text=${encodeURIComponent("Hola Yesit! Vi tu perfil en laredai.agency y quiero hablar contigo sobre automatización para mi negocio. 🤖")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2BB89A] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#1d9e82] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <MessageCircle size={16} />
                  Hablar directamente con Yesit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="py-28 bg-[#0D2621]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 bg-[#2BB89A]/20 text-[#2BB89A] font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-8">
              <Zap size={12} /> Da el primer paso hoy
            </span>
            <h2 className="font-display font-extrabold text-white text-5xl sm:text-6xl leading-tight mb-6">
              Tu competencia ya
              <br />
              está automatizando.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Cada día sin automatización es un día perdiendo clientes, tiempo y dinero. Empieza ahora — el diagnóstico no cuesta nada.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`${WA_URL}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#2BB89A] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#1d9e82] transition-all duration-200 shadow-lg hover:shadow-[0_20px_40px_rgba(43,184,154,0.3)] hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
                Hablar con un asesor
              </a>
              <a
                href={`${WA_URL}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border-2 border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:border-[#2BB89A] hover:text-[#2BB89A] transition-all duration-200"
              >
                <Phone size={18} />
                Agendar llamada
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#080f0d] py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#2BB89A] flex items-center justify-center">
                <span className="text-white font-display font-extrabold text-sm">R</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-white text-base">La Red</span>
                <span className="font-display font-extrabold text-[#2BB89A] text-base"> AI</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <a href="#servicios" className="hover:text-[#2BB89A] transition-colors">Servicios</a>
              <a href="#como-funciona" className="hover:text-[#2BB89A] transition-colors">Cómo funciona</a>
              <a href="#resultados" className="hover:text-[#2BB89A] transition-colors">Resultados</a>
              <a href="#faq" className="hover:text-[#2BB89A] transition-colors">FAQ</a>
              <a
                href={`${WA_URL}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2BB89A] hover:text-[#00D4AA] transition-colors font-semibold"
              >
                WhatsApp
              </a>
            </div>

            {/* Redes sociales + contacto */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <p className="text-sm text-gray-500">Bogotá, Colombia · <span className="text-[#2BB89A]">+57 320 335 8826</span></p>
              <div className="flex items-center gap-3">
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook de La Red AI"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-200"
                >
                  <IconFacebook size={18} />
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de La Red AI"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white hover:border-transparent transition-all duration-200"
                >
                  <IconInstagram size={18} />
                </a>
                <a
                  href={`${WA_URL}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp de La Red AI"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-200"
                >
                  <IconWhatsApp size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
            <p>© 2026 La Red AI · Automatización es la Solución</p>
            <p>
              Built with{" "}
              <a href="https://tododeia.com" target="_blank" rel="noopener noreferrer" className="text-[#2BB89A] hover:underline">
                Claude Web Builder by Tododeia
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* ── BOTÓN FLOTANTE WHATSAPP ── */}
      <FloatingWhatsApp />
    </>
  );
}
