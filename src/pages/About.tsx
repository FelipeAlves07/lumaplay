import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
        <div className="mx-auto w-full max-w-[1600px] grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Muito mais que streaming
            </h1>

            <p className="mt-5 text-white/60 leading-7 max-w-xl">
              A LumaPlay entrega entretenimento premium.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button mt-7 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#157BFF] to-[#8E35FF] px-7 py-4 font-semibold"
            >
              Assinar agora
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            src={aboutLifestyle}
            alt="Sobre"
            className="w-full max-w-[400px] lg:max-w-[580px] mx-auto rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}