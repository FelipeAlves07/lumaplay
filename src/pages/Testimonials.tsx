import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

import logoIcon from "../assets/logo-icon.png";
import socialProof from "../assets/images/social-proof.webp";

import LiveActivity from "../components/LiveActivity";
import FloatingCTA from "../components/FloatingCTA";

export default function Testimonials() {
  const reviews = [
    {
      name: "Carlos M.",
      city: "Belo Horizonte",
      text: "Instalação rápida, atendimento excelente e tudo funcionando perfeitamente.",
    },
    {
      name: "Fernanda R.",
      city: "Contagem",
      text: "Muito mais organizado do que eu imaginava. Atendimento rápido demais.",
    },
    {
      name: "Juliano P.",
      city: "Betim",
      text: "Uso na Smart TV e no celular sem dor de cabeça.",
    },
    {
      name: "Patrícia A.",
      city: "Nova Lima",
      text: "Assinei no mesmo dia e já estava usando em minutos.",
    },
    {
      name: "Rafael S.",
      city: "Uberlândia",
      text: "Suporte realmente responde. Isso me passou confiança.",
    },
    {
      name: "Marina C.",
      city: "Juiz de Fora",
      text: "Visual premium e atendimento muito bom.",
    },
    {
      name: "Camila B.",
      city: "Campinas",
      text: "Tudo muito simples e organizado.",
    },
    {
      name: "Eduardo L.",
      city: "Curitiba",
      text: "Melhor do que eu esperava sinceramente.",
    },
    {
      name: "Amanda T.",
      city: "Recife",
      text: "Funcionou rápido e sem dor de cabeça.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#04050A] text-white relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <motion.div
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,92,255,0.22),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(110,0,255,0.22),transparent_35%)]"
        />
      </div>

      <LiveActivity />
      <FloatingCTA />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#04050A]/80 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoIcon}
              alt="LumaPlay"
              className="h-12 w-12 rounded-2xl"
            />

            <div>
              <p className="font-semibold tracking-[0.24em]">LUMAPLAY</p>
              <p className="text-[10px] uppercase text-white/35">
                by Luma Labs
              </p>
            </div>
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-semibold">
            Clientes satisfeitos com a
            <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-500 bg-clip-text text-transparent">
              {" "}LumaPlay
            </span>
          </h1>

          <p className="mt-6 text-xl text-white/60 max-w-3xl mx-auto leading-9">
            Pessoas reais aproveitando a experiência premium da LumaPlay.
          </p>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={socialProof}
          alt="Clientes satisfeitos"
          className="mt-14 rounded-3xl border border-white/10 shadow-2xl"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="hover-card rounded-3xl border border-white/8 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-5 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400"
                  />
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
      </section>
    </main>
  );
}