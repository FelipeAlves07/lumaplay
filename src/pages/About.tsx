import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Zap, Headphones } from "lucide-react";
import { motion } from "framer-motion";

import logoIcon from "../assets/logo-icon.png";
import aboutLifestyle from "../assets/images/about-lifestyle.webp";

import FloatingCTA from "../components/FloatingCTA";
import LiveActivity from "../components/LiveActivity";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero assinar a LumaPlay.";

export default function About() {
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
              Muito mais que
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-500 bg-clip-text text-transparent">
                {" "}streaming
              </span>
            </h1>

            <p className="mt-6 text-base md:text-xl text-white/60 leading-8 md:leading-9">
              A LumaPlay entrega entretenimento premium com praticidade,
              suporte humano e experiência moderna.
            </p>

            <p className="mt-5 text-white/50 leading-8">
              Filmes, séries, canais ao vivo e futebol por apenas R$29,90 por mês,
              com ativação rápida e atendimento real.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="
                glow-button
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-2xl
                bg-gradient-to-r
                from-[#157BFF]
                to-[#8E35FF]
                px-8
                py-5
                font-semibold
              "
            >
              Assinar agora
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            src={aboutLifestyle}
            alt="Experiência premium"
            className="w-full md:max-w-4xl mx-auto rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="hover-card rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl">
            <Zap className="h-8 w-8 text-cyan-300" />

            <h3 className="mt-5 text-2xl font-semibold">
              Ativação rápida
            </h3>

            <p className="mt-4 text-white/55 leading-7">
              Comece sua experiência premium em poucos minutos.
            </p>
          </div>

          <div className="hover-card rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl">
            <ShieldCheck className="h-8 w-8 text-cyan-300" />

            <h3 className="mt-5 text-2xl font-semibold">
              Experiência confiável
            </h3>

            <p className="mt-4 text-white/55 leading-7">
              Plataforma organizada, moderna e prática.
            </p>
          </div>

          <div className="hover-card rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl">
            <Headphones className="h-8 w-8 text-cyan-300" />

            <h3 className="mt-5 text-2xl font-semibold">
              Suporte humano
            </h3>

            <p className="mt-4 text-white/55 leading-7">
              Atendimento real quando precisar.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}