import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import logoIcon from "../assets/logo-icon.png";
import faqSupport from "../assets/images/faq-support.webp";

import FloatingCTA from "../components/FloatingCTA";
import LiveActivity from "../components/LiveActivity";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

export default function FAQPage() {
  const faqs = [
    {
      q: "Funciona na Smart TV?",
      a: "Sim. Compatível com Smart TVs, TV Box, celulares, tablets e notebooks.",
    },
    {
      q: "Funciona no celular?",
      a: "Sim. Você pode assistir normalmente no celular ou tablet.",
    },
    {
      q: "Quanto custa?",
      a: "O plano premium da LumaPlay custa apenas R$29,90 por mês.",
    },
    {
      q: "É difícil instalar?",
      a: "Não. A ativação é rápida e se precisar nossa equipe ajuda.",
    },
    {
      q: "Tem suporte humano?",
      a: "Sim. Atendimento real via suporte para ajudar quando precisar.",
    },
    {
      q: "Quanto tempo leva para ativar?",
      a: "Normalmente poucos minutos após a confirmação.",
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
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
              Dúvidas frequentes
            </h1>

            <p className="mt-6 text-base md:text-xl text-white/60 max-w-3xl mx-auto leading-8">
              Tudo o que você precisa saber antes de assinar a LumaPlay.
            </p>
          </div>

          <img
            src={faqSupport}
            alt="FAQ"
            className="mt-8 w-full lg:max-w-3xl xl:max-w-4xl mx-auto rounded-3xl border border-white/10 shadow-2xl"
          />

          <div className="mt-8 max-w-5xl mx-auto space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="hover-card rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg md:text-2xl font-semibold">
                    {faq.q}
                  </h3>

                  <ChevronDown className="h-5 w-5 text-cyan-300 shrink-0" />
                </div>

                <p className="mt-5 text-white/60 leading-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}