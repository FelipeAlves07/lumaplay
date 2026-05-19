import { Link } from "react-router-dom";

import logoIcon from "../assets/logo-icon.png";
import faqSupport from "../assets/images/faq-support.webp";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#04050A] text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#04050A]/80 backdrop-blur-2xl">
        <div className="mx-auto max-w-7xl px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoIcon} className="h-12 w-12 rounded-2xl" />
            <p className="font-semibold tracking-[0.24em]">LUMAPLAY</p>
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <h1 className="text-center text-5xl font-semibold">Dúvidas frequentes</h1>

        <img
          src={faqSupport}
          className="mt-12 rounded-3xl border border-white/10"
        />

        <div className="mt-16 space-y-6 max-w-4xl mx-auto">
          {[
            ["Funciona na Smart TV?", "Sim."],
            ["Funciona no celular?", "Sim."],
            ["Tem suporte?", "Sim, suporte humano."],
            ["É difícil instalar?", "Não, ativação simplificada."],
            ["Como assino?", "WhatsApp ou Instagram."],
          ].map(([q, a]) => (
            <div className="rounded-3xl bg-white/5 p-8">
              <h3 className="text-xl font-semibold">{q}</h3>
              <p className="mt-4 text-white/60">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}