import { Link } from "react-router-dom";
import {
  Play,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
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
            <img src={logoIcon} alt="LumaPlay" className="h-10 w-10 rounded-2xl" />

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
              por apenas R$29,90
            </h1>

            <p className="mt-5 text-white/60 leading-8 max-w-xl">
              Filmes, séries, canais ao vivo e futebol com experiência premium.
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