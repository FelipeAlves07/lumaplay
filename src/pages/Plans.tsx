import { Link } from "react-router-dom";
import { CheckCircle2, Flame, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

import logoIcon from "../assets/logo-icon.png";
import plansOffer from "../assets/images/plans-offer.webp";
import FloatingCTA from "../components/FloatingCTA";
import LiveActivity from "../components/LiveActivity";
import MobileMenu from "../components/MobileMenu";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero assinar a LumaPlay.";

export default function Plans() {
  const benefits = [
    "Filmes e séries premium",
    "Canais ao vivo",
    "Futebol ao vivo",
    "Smart TV / celular / tablet",
    "Suporte humano rápido",
    "Ativação simplificada",
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

      <section className="w-full px-3 md:px-8 py-8 md:py-20">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs md:text-sm">
              <Flame className="h-4 w-4" />
              Oferta especial de lançamento
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
              Plano Premium
            </h1>

            <p className="mt-5 text-base md:text-xl text-white/60 max-w-3xl mx-auto leading-8">
              Tudo o que você precisa para entretenimento premium em um só lugar.
            </p>
          </div>

          <img
            src={plansOffer}
            alt="Plano LumaPlay"
            className="
              mt-8
              w-full
              rounded-3xl
              border border-white/10
              shadow-2xl
            "
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur-xl">
              <p className="uppercase tracking-[0.2em] text-white/40 text-sm">
                Mensal
              </p>

              <div className="mt-5 flex items-end gap-3 flex-wrap">
                <h2 className="text-6xl md:text-8xl font-semibold">R$25</h2>
                <span className="text-white/45 pb-3">/mês</span>
              </div>

              <p className="mt-6 text-white/60 leading-8">
                Sem complicação, ativação rápida e suporte real.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                className="
                  glow-button
                  mt-8
                  flex
                  justify-center
                  rounded-2xl
                  bg-gradient-to-r from-[#157BFF] to-[#8E35FF]
                  px-8 py-5
                  font-semibold
                "
              >
                Quero assinar agora
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10 backdrop-blur-xl">
              <h3 className="text-2xl md:text-3xl font-semibold">
                O que está incluso
              </h3>

              <div className="mt-8 space-y-5">
                {benefits.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckCircle2 className="h-5 w-5 text-cyan-300 shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="hover-card rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
              <Zap className="mx-auto mb-4 h-8 w-8 text-cyan-300" />
              <h4 className="text-xl font-semibold">Ativação rápida</h4>
              <p className="mt-3 text-white/50">Comece em poucos minutos.</p>
            </div>

            <div className="hover-card rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
              <ShieldCheck className="mx-auto mb-4 h-8 w-8 text-cyan-300" />
              <h4 className="text-xl font-semibold">Pagamento seguro</h4>
              <p className="mt-3 text-white/50">Processo simples e confiável.</p>
            </div>

            <div className="hover-card rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
              <CheckCircle2 className="mx-auto mb-4 h-8 w-8 text-cyan-300" />
              <h4 className="text-xl font-semibold">Suporte real</h4>
              <p className="mt-3 text-white/50">Atendimento humano.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}