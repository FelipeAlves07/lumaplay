import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero assinar a LumaPlay por R$29,90.";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden relative z-[999999] rounded-xl border border-white/10 bg-white/5 p-3"
      >
        <Menu className="h-6 w-6 text-white" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999999] bg-[#04050A]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
            <h2 className="text-white text-xl font-semibold tracking-[0.2em]">
              LUMAPLAY
            </h2>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-white/10 bg-white/5 p-3"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex flex-col gap-6 px-6 py-8">
            <Link
              to="/conheca"
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              Conheça
            </Link>

            <Link
              to="/planos"
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              Planos
            </Link>

            <Link
              to="/beneficios"
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              Benefícios
            </Link>

            <Link
              to="/avaliacoes"
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              Avaliações
            </Link>

            <Link
              to="/faq"
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              FAQ
            </Link>

            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              Contato
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 rounded-2xl bg-gradient-to-r from-[#157BFF] to-[#8E35FF] px-6 py-5 text-center text-lg font-semibold text-white"
            >
              Assinar por R$29,90
            </a>
          </div>
        </div>
      )}
    </>
  );
}