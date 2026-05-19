import { Link } from "react-router-dom";
import {
  Play,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Zap,
  Headphones,
  Tv,
} from "lucide-react";
import { motion } from "framer-motion";

import logoIcon from "../assets/logo-icon.png";
import heroPremium from "../assets/images/hero-premium.webp";

import LiveActivity from "../components/LiveActivity";
import FloatingCTA from "../components/FloatingCTA";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero assinar a LumaPlay.";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#04050A] text-white relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,92,255,0.14),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(110,0,255,0.14),transparent_35%)]"
        />
      </div>

      <LiveActivity />
      <FloatingCTA />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#04050A]/90 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 md:px-8 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoIcon}
              alt="LumaPlay"
              className="h-10 w-10 rounded-2xl"
            />

            <div>
              <p className="text-sm font-semibold tracking-[0.24em]">LUMAPLAY</p>
              <p className="text-[10px] uppercase text-white/35">BY LUMALABS</p>
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

      <section className="w-full px-4 md:px-8 py-6 md:py-12">
        <div className="mx-auto max-w-[1600px] grid lg:grid-cols-2 gap-8 items-start">
          
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs">
              <Play className="h-4 w-4" />
              Streaming premium com ativação rápida
            </div>

            <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight">
              Seu entretenimento
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-500 bg-clip-text text-transparent">
                {" "}premium
              </span>
              <br />
              sem complicação
            </h1>

            <p className="mt-5 text-white/65 leading-8 max-w-xl">
              Filmes, séries, canais ao vivo, futebol e uma experiência premium
              pensada para quem quer praticidade, suporte humano e ativação rápida.
            </p>

            <p className="mt-4 text-white/50 leading-8 max-w-xl">
              Nada de perder tempo com processos confusos ou atendimento inexistente.
              Aqui você fala com pessoas reais e começa rápido.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button rounded-2xl bg-gradient-to-r from-[#157BFF] to-[#8E35FF] px-7 py-4 font-semibold"
              >
                Assinar agora
              </a>

              <Link
                to="/planos"
                className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold"
              >
                Ver planos
              </Link>
            </div>

            <div className="mt-7 flex flex-col gap-3 text-white/70">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Atendimento humano de verdade
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Processo simples e objetivo
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                Experiência premium por apenas R$29,90
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <ShieldCheck className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-4 font-semibold">Suporte humano</h3>
                <p className="mt-2 text-sm text-white/50 leading-6">
                  Fale com pessoas reais quando precisar.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Zap className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-4 font-semibold">Ativação rápida</h3>
                <p className="mt-2 text-sm text-white/50 leading-6">
                  Sem enrolação desnecessária.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Tv className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-4 font-semibold">Na sua TV</h3>
                <p className="mt-2 text-sm text-white/50 leading-6">
                  Curta no conforto da sua casa.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Smartphone className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-4 font-semibold">No celular</h3>
                <p className="mt-2 text-sm text-white/50 leading-6">
                  Entretenimento onde quiser.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/5 p-5">
              <div className="flex items-start gap-3">
                <Headphones className="h-6 w-6 text-fuchsia-300 mt-1" />

                <div>
                  <h3 className="font-semibold text-lg">
                    Uma experiência feita para ser simples
                  </h3>

                  <p className="mt-2 text-white/55 leading-7">
                    Nossa proposta é entregar praticidade, atendimento humano
                    e uma experiência premium sem complicação.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            src={heroPremium}
            alt="Hero"
            className="w-full max-w-[430px] lg:max-w-[620px] mx-auto rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}