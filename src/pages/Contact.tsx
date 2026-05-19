import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

import logoIcon from "../assets/logo-icon.png";
import humanSupport from "../assets/images/human-support.webp";
import ctaFinal from "../assets/images/cta-final.webp";

const WHATSAPP_URL = "https://wa.me/5531975672291";
const INSTAGRAM_URL = "https://instagram.com/lumaplaytv";

export default function Contact() {
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
        <h1 className="text-center text-5xl font-semibold">
          Fale com nossa equipe
        </h1>

        <img
          src={humanSupport}
          className="mt-12 rounded-3xl border border-white/10"
        />

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            className="rounded-3xl bg-gradient-to-r from-[#157BFF] to-[#8E35FF] p-10 text-center"
          >
            <MessageCircle className="mx-auto mb-5 h-10 w-10" />
            <h2 className="text-3xl font-semibold">WhatsApp</h2>
            <p className="mt-4 text-white/80">Atendimento rápido</p>
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            className="rounded-3xl bg-white/5 p-10 text-center"
          >
            <h2 className="text-3xl font-semibold">Instagram</h2>
            <p className="mt-4 text-white/60">@lumaplaytv</p>
          </a>
        </div>

        <img
          src={ctaFinal}
          className="mt-16 rounded-3xl border border-white/10"
        />
      </section>
    </main>
  );
}