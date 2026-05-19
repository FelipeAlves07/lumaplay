import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";

import logoIcon from "../assets/logo-icon.png";
import aboutLifestyle from "../assets/images/about-lifestyle.webp";

const WHATSAPP_URL = "https://wa.me/5531975672291";

export default function About() {
  return (
    <main className="min-h-screen bg-[#04050A] text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#04050A]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoIcon} className="h-12 w-12 rounded-2xl" />
            <div>
              <p className="text-sm font-semibold tracking-[0.24em]">LUMAPLAY</p>
              <p className="text-[10px] uppercase text-white/35">by Luma Labs</p>
            </div>
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <Link to="/" className="mb-8 inline-flex gap-2 text-white/50">
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Link>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-semibold">
              Muito mais do que assistir.
            </h1>

            <p className="mt-8 text-xl leading-9 text-white/60">
              A LumaPlay nasceu para oferecer entretenimento premium com
              praticidade, organização e suporte real.
            </p>

            <p className="mt-6 text-lg leading-8 text-white/55">
              Nossa proposta é centralizar entretenimento em uma experiência
              moderna, intuitiva e com atendimento próximo.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="mt-10 inline-flex rounded-2xl bg-gradient-to-r from-[#157BFF] to-[#8E35FF] px-8 py-5 font-semibold"
            >
              Falar com a equipe
            </a>
          </div>

          <img
            src={aboutLifestyle}
            className="rounded-3xl border border-white/10"
          />
        </div>
      </section>
    </main>
  );
}