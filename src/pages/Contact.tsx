import { Link } from "react-router-dom";
import { MessageCircle, Instagram, Headphones } from "lucide-react";
import { motion } from "framer-motion";

import logoIcon from "../assets/logo-icon.png";
import humanSupport from "../assets/images/human-support.webp";
import ctaFinal from "../assets/images/cta-final.webp";

import FloatingCTA from "../components/FloatingCTA";
import LiveActivity from "../components/LiveActivity";
import MobileMenu from "../components/MobileMenu";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero falar com a equipe da LumaPlay.";

const INSTAGRAM_URL = "https://instagram.com/lumaplaytv";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#04050A] text-white relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,92,255,0.18),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(110,0,255,0.18),transparent_35%)]"
        />
      </div>

      <LiveActivity />
      <FloatingCTA />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#04050A]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoIcon}
              alt="LumaPlay"
              className="h-10 w-10 md:h-12 md:w-12 rounded-2xl"
            />

            <div>
              <p className="text-sm font-semibold tracking-[0.24em]">
                LUMAPLAY
              </p>
              <p className="text-[10px] uppercase text-white/35">
                by Luma Labs
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex gap-7 text-white/60">
            <Link to="/conheca">Conheça</Link>
            <Link to="/planos">Planos</Link>
            <Link to="/beneficios">Benefícios</Link>
            <Link to="/avaliacoes">Avaliações</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contato">Contato</Link>
          </nav>

          <MobileMenu />
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 md:px-5 py-10 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
            Fale com nossa equipe
          </h1>

          <p className="mt-6 text-base md:text-xl text-white/60 max-w-3xl mx-auto leading-8">
            Atendimento rápido, humano e pronto para ajudar você.
          </p>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          src={humanSupport}
          alt="Suporte"
          className="mt-10 w-full rounded-3xl border border-white/10 shadow-2xl"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            className="
              hover-card
              rounded-3xl
              border border-white/10
              bg-gradient-to-r from-[#157BFF] to-[#8E35FF]
              p-8 md:p-10
            "
          >
            <MessageCircle className="h-10 w-10" />

            <h2 className="mt-6 text-2xl md:text-3xl font-semibold">
              WhatsApp
            </h2>

            <p className="mt-4 text-white/85 leading-7">
              Atendimento rápido para assinatura, dúvidas e suporte.
            </p>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            className="
              hover-card
              rounded-3xl
              border border-white/10
              bg-white/5
              p-8 md:p-10
              backdrop-blur-xl
            "
          >
            <Instagram className="h-10 w-10 text-cyan-300" />

            <h2 className="mt-6 text-2xl md:text-3xl font-semibold">
              Instagram
            </h2>

            <p className="mt-4 text-white/60 leading-7">
              Acompanhe novidades, conteúdo e contato direto.
            </p>
          </a>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 text-center backdrop-blur-xl">
          <Headphones className="mx-auto h-10 w-10 text-cyan-300" />

          <h3 className="mt-6 text-2xl md:text-3xl font-semibold">
            Suporte real
          </h3>

          <p className="mt-4 text-white/60 max-w-2xl mx-auto leading-8">
            Nada de respostas automáticas genéricas. Atendimento humano de verdade.
          </p>
        </div>

        <motion.img
          whileHover={{ scale: 1.01 }}
          src={ctaFinal}
          alt="CTA"
          className="mt-10 w-full rounded-3xl border border-white/10 shadow-2xl"
        />
      </section>
    </main>
  );
}