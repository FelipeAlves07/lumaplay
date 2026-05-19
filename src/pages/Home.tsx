import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Flame,
  Star,
} from "lucide-react";

import heroPremium from "../assets/images/hero-premium.webp";
import socialProof from "../assets/images/social-proof.webp";
import logoIcon from "../assets/logo-icon.png";

import LiveActivity from "../components/LiveActivity";
import FloatingCTA from "../components/FloatingCTA";
import AnimatedCounter from "../components/AnimatedCounter";
import Countdown from "../components/Countdown";
import LiveViewers from "../components/LiveViewers";
import MobileMenu from "../components/MobileMenu";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero conhecer a LumaPlay.";

const INSTAGRAM_URL = "https://instagram.com/lumaplaytv";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#04050A] text-white relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,92,255,0.23),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(110,0,255,0.22),transparent_34%)]"
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

          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="glow-button hidden md:inline-block rounded-full bg-gradient-to-r from-[#157BFF] to-[#8E35FF] px-5 py-3 text-sm font-semibold"
            >
              WhatsApp
            </a>

            <MobileMenu />
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 md:gap-14 px-4 md:px-5 py-10 md:py-20 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs md:text-sm">
            <Flame className="mr-2 h-4 w-4" />
            Oferta especial de lançamento
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-7xl font-semibold leading-tight">
            Streaming premium
            <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-500 bg-clip-text text-transparent">
              {" "}com suporte real
            </span>
          </h1>

          <p className="mt-6 text-base md:text-xl leading-8 md:leading-9 text-white/60">
            Filmes, séries, canais ao vivo e futebol com experiência premium,
            ativação rápida e atendimento humano.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="glow-button rounded-2xl bg-gradient-to-r from-[#157BFF] to-[#8E35FF] px-8 py-4 font-semibold flex items-center justify-center gap-2"
            >
              Assinar agora
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              to="/conheca"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-center"
            >
              Conhecer a LumaPlay
            </Link>
          </div>

          <div className="mt-6 grid gap-4">
            <Countdown />
            <LiveViewers />
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="hover-card rounded-2xl bg-white/5 p-5 text-center">
              <p className="text-3xl font-semibold">
                +<AnimatedCounter target={120} />
              </p>
              <p className="text-white/45">clientes</p>
            </div>

            <div className="hover-card rounded-2xl bg-white/5 p-5 text-center">
              <p className="text-3xl font-semibold">
                <AnimatedCounter target={98} suffix="%" />
              </p>
              <p className="text-white/45">aprovação</p>
            </div>

            <div className="hover-card rounded-2xl bg-white/5 p-5 text-center">
              <p className="text-3xl font-semibold">24h</p>
              <p className="text-white/45">suporte</p>
            </div>
          </div>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          src={heroPremium}
          alt="Hero"
          className="rounded-3xl border border-white/10 shadow-2xl"
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-5 pb-28 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.img
            whileHover={{ scale: 1.02 }}
            src={socialProof}
            alt="Social Proof"
            className="rounded-3xl border border-white/10"
          />

          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Clientes já estão aproveitando
            </h2>

            <p className="mt-6 text-base md:text-lg leading-8 text-white/60">
              Experiência premium com suporte rápido.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Instalação rápida e excelente atendimento.",
                "Muito mais organizado do que eu esperava.",
                "Uso no celular e na TV sem dor de cabeça.",
              ].map((text) => (
                <div key={text} className="hover-card rounded-2xl bg-white/5 p-5">
                  <div className="mb-3 flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/70">{text}</p>
                </div>
              ))}
            </div>

            <Link
              to="/avaliacoes"
              className="mt-8 inline-block rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-4"
            >
              Ver avaliações
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 md:px-5 pb-32 md:pb-24">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#157BFF]/15 to-[#8E35FF]/15 p-6 md:p-10 text-center">
          <MessageCircle className="mx-auto mb-6 h-10 w-10 text-cyan-300" />

          <h2 className="text-3xl md:text-4xl font-semibold">
            Pronto para começar?
          </h2>

          <p className="mt-5 text-base md:text-lg text-white/60">
            Fale agora com nossa equipe.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="glow-button rounded-2xl bg-white px-8 py-4 font-semibold text-black"
            >
              WhatsApp
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}