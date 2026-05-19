import { Link } from "react-router-dom";
import {
  Tv,
  Trophy,
  Smartphone,
  Headphones,
} from "lucide-react";

import logoIcon from "../assets/logo-icon.png";
import multiDevice from "../assets/images/multi-device.webp";
import whyLumaplay from "../assets/images/why-lumaplay.webp";

export default function Benefits() {
  const benefits = [
    { icon: Tv, title: "Conteúdo completo" },
    { icon: Trophy, title: "Futebol ao vivo" },
    { icon: Smartphone, title: "Multi dispositivos" },
    { icon: Headphones, title: "Suporte humano" },
  ];

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
          Por que escolher a LumaPlay?
        </h1>

        <img
          src={whyLumaplay}
          className="mt-12 rounded-3xl border border-white/10"
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-3xl bg-white/5 p-8 text-center"
              >
                <Icon className="mx-auto mb-5 h-8 w-8 text-cyan-300" />
                <h3 className="text-xl font-semibold">
                  {benefit.title}
                </h3>
              </div>
            );
          })}
        </div>

        <img
          src={multiDevice}
          className="mt-16 rounded-3xl border border-white/10"
        />
      </section>
    </main>
  );
}