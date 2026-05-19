import { Link } from "react-router-dom";
import {
  Tv,
  Trophy,
  Smartphone,
  Headphones,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

import logoIcon from "../assets/logo-icon.png";
import multiDevice from "../assets/images/multi-device.webp";

import FloatingCTA from "../components/FloatingCTA";
import LiveActivity from "../components/LiveActivity";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero assinar a LumaPlay.";

export default function Benefits() {
  const benefits = [
    {
      icon: Tv,
      title: "Conteúdo premium",
      desc: "Filmes, séries e canais premium.",
    },
    {
      icon: Trophy,
      title: "Futebol ao vivo",
      desc: "Os principais campeonatos ao vivo.",
    },
    {
      icon: Smartphone,
      title: "Multi dispositivos",
      desc: "Smart TV, celular, tablet e notebook.",
    },
    {
      icon: Headphones,
      title: "Suporte humano",
      desc: "Atendimento rápido quando precisar.",
    },
    {
      icon: ShieldCheck,
      title: "Experiência confiável",
      desc: "Mais praticidade para assistir.",
    },
    {
      icon: Zap,
      title: "Ativação rápida",
      desc: "Comece em poucos minutos.",
    },
  ];

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

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#04050A]/90 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 md:px-8 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoIcon}
              alt="LumaPlay"
              className="h-10 w-10 md:h-12 md:w-12 rounded-2xl"
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

      <section className="w-full px-4 md:px-8 py-8 md:py-20">
        <div className="mx-auto w-full max-w-[1600px] grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
              Benefícios da
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-500 bg-clip-text text-transparent">
                {" "}LumaPlay
              </span>
            </h1>

            <p className="mt-6 text-base md:text-xl text-white/60 leading-8">
              Tudo o que você precisa em uma experiência premium.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="hover-card rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                  >
                    <Icon className="h-8 w-8 text-cyan-300" />

                    <h3 className="mt-5 text-xl font-semibold">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-white/55 leading-7">
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button mt-8 inline-flex rounded-2xl bg-gradient-to-r from-[#157BFF] to-[#8E35FF] px-10 py-5 font-semibold"
            >
              Assinar por R$29,90
            </a>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            src={multiDevice}
            alt="Benefícios"
            className="w-full max-w-[340px] md:max-w-[420px] lg:max-w-[520px] xl:max-w-[620px] mx-auto rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}