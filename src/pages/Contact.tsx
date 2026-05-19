import { Link } from "react-router-dom";
import {
  MessageCircle,
  Headphones,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

import logoIcon from "../assets/logo-icon.png";
import humanSupport from "../assets/images/human-support.webp";

import FloatingCTA from "../components/FloatingCTA";
import LiveActivity from "../components/LiveActivity";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero assinar a LumaPlay.";

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
        <div className="mx-auto w-full max-w-[1600px] grid lg:grid-cols-2 gap-8 items-center">
          
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Fale com nossa
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-500 bg-clip-text text-transparent">
                {" "}Equipe
              </span>
            </h1>

            <p className="mt-5 text-white/60 leading-7 max-w-xl">
              Atendimento humano rápido para assinatura, suporte e dúvidas.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#157BFF] to-[#8E35FF] p-6"
              >
                <MessageCircle className="h-8 w-8" />

                <h2 className="mt-4 text-xl font-semibold">
                  WhatsApp
                </h2>

                <p className="mt-2 text-sm text-white/85 leading-6">
                  Atendimento rápido.
                </p>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <FaInstagram className="h-8 w-8 text-pink-400" />

                <h2 className="mt-4 text-xl font-semibold">
                  Instagram
                </h2>

                <p className="mt-2 text-sm text-white/60 leading-6">
                  Novidades e promoções.
                </p>
              </a>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
              <Headphones className="mx-auto h-8 w-8 text-cyan-300" />

              <h3 className="mt-4 text-xl font-semibold">
                Suporte real
              </h3>

              <p className="mt-2 text-sm text-white/60">
                Atendimento humano de verdade.
              </p>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            src={humanSupport}
            alt="Contato"
            className="w-full max-w-[380px] lg:max-w-[560px] mx-auto rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}