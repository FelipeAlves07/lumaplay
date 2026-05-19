import { Link } from "react-router-dom";
import {
  Play,
  ShieldCheck,
  Tv,
  Smartphone,
  Star,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

import logoIcon from "../assets/logo-icon.png";
import heroPremium from "../assets/images/hero-premium.webp";

import LiveActivity from "../components/LiveActivity";
import FloatingCTA from "../components/FloatingCTA";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero assinar a LumaPlay agora.";

export default function Home() {
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
        <div className="mx-auto w-full max-w-[1600px] grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs md:text-sm">
              <Play className="h-4 w-4" />
              Streaming premium com ativação rápida
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
              Seu entretenimento
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-500 bg-clip-text text-transparent">
                {" "}premium
              </span>
              <br />
              por apenas R$29,90
            </h1>

            <p className="mt-6 text-base md:text-xl text-white/60 leading-8 max-w-2xl">
              Filmes, séries, canais ao vivo e futebol com experiência premium,
              suporte humano e ativação simplificada.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-button flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#157BFF] to-[#8E35FF] px-8 py-5 font-semibold"
              >
                Assinar agora
              </a>

              <Link
                to="/planos"
                className="rounded-2xl border border-white/10 bg-white/5 px-8 py-5 text-center font-semibold"
              >
                Ver planos
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                <span className="text-white/70">Ativação rápida</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-cyan-300" />
                <span className="text-white/70">Suporte humano</span>
              </div>

              <div className="flex items-center gap-3">
                <Tv className="h-5 w-5 text-cyan-300" />
                <span className="text-white/70">Canais e filmes</span>
              </div>

              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-cyan-300" />
                <span className="text-white/70">Multi dispositivos</span>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400" />
              ))}

              <span className="ml-2 text-white/60 text-sm">
                Clientes satisfeitos em todo o Brasil
              </span>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            src={heroPremium}
            alt="LumaPlay Premium"
            className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[520px] xl:max-w-[620px] mx-auto rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}