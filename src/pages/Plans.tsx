import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

import logoIcon from "../assets/logo-icon.png";
import plansOffer from "../assets/images/plans-offer.webp";

const WHATSAPP_URL = "https://wa.me/5531975672291";

export default function Plans() {
  return (
    <main className="min-h-screen bg-[#04050A] text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#04050A]/80 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoIcon} className="h-12 w-12 rounded-2xl" />
            <div>
              <p className="text-sm font-semibold tracking-[0.24em]">LUMAPLAY</p>
            </div>
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-semibold">Plano Premium</h1>
          <p className="mt-5 text-xl text-white/60">
            Oferta especial de lançamento.
          </p>
        </div>

        <img
          src={plansOffer}
          className="mt-12 rounded-3xl border border-white/10"
        />

        <div className="mt-14 mx-auto max-w-3xl rounded-3xl bg-white/5 p-10">
          <div className="text-center">
            <p className="text-white/50 uppercase tracking-[0.2em]">
              Mensal
            </p>

            <h2 className="mt-4 text-7xl font-semibold">R$25</h2>
          </div>

          <div className="mt-10 space-y-5">
            {[
              "Filmes e séries",
              "Canais ao vivo",
              "Futebol",
              "Smart TV / celular / tablet",
              "Suporte rápido",
              "Ativação simplificada",
            ].map((item) => (
              <div className="flex gap-3">
                <CheckCircle2 className="text-cyan-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            className="mt-10 block rounded-2xl bg-gradient-to-r from-[#157BFF] to-[#8E35FF] px-8 py-5 text-center font-semibold"
          >
            Quero assinar agora
          </a>
        </div>
      </section>
    </main>
  );
}