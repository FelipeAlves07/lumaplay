import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

import logoIcon from "../assets/logo-icon.png";
import socialProof from "../assets/images/social-proof.webp";

import LiveActivity from "../components/LiveActivity";
import FloatingCTA from "../components/FloatingCTA";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

export default function Testimonials() {
  const reviews = [
    {
      name: "Carlos M.",
      city: "Belo Horizonte",
      text: "Ativação muito rápida e atendimento excelente.",
    },
    {
      name: "Fernanda R.",
      city: "São Paulo",
      text: "A qualidade surpreendeu, uso todos os dias.",
    },
    {
      name: "Juliano P.",
      city: "Curitiba",
      text: "Funcionando muito bem na Smart TV e no celular.",
    },
    {
      name: "Patrícia A.",
      city: "Rio de Janeiro",
      text: "Vale muito a pena pelo valor de R$29,90.",
    },
    {
      name: "Rafael S.",
      city: "Brasília",
      text: "Suporte responde rápido e resolve de verdade.",
    },
    {
      name: "Marina C.",
      city: "Recife",
      text: "Muito mais premium do que eu esperava.",
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
              <p className="text-sm font-semibold tracking-[0.24em]">
                LUMAPLAY
              </p>
              <p className="text-[10px] uppercase text-white/35">
                BY LUMALABS
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

          <MobileMenu />
        </div>
      </header>

      <section className="w-full px-4 md:px-8 py-8 md:py-20">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-tight">
              Clientes satisfeitos com a
              <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-500 bg-clip-text text-transparent">
                {" "}LumaPlay
              </span>
            </h1>

            <p className="mt-6 text-base md:text-xl text-white/60 max-w-3xl mx-auto leading-8">
              Experiência premium por apenas R$29,90/mês.
            </p>
          </div>

          <img
            src={socialProof}
            alt="Avaliações"
            className="mt-8 w-full max-w-[340px] md:max-w-[520px] lg:max-w-[700px] xl:max-w-[820px] mx-auto rounded-3xl border border-white/10 shadow-2xl"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="hover-card rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl"
              >
                <div className="mb-5 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400" />
                  ))}
                </div>

                <p className="leading-8 text-white/70">
                  "{review.text}"
                </p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-medium">{review.name}</p>
                  <p className="text-sm text-white/45">{review.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}