import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero assinar a LumaPlay por R$29,90.";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type="button"
        className="md:hidden rounded-xl border border-white/10 bg-white/5 p-3 z-[100000] relative"
      >
        <Menu className="h-6 w-6 text-white" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[999999] bg-[#04050A] overflow-y-auto">
          <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
            <p className="text-lg font-semibold tracking-[0.2em] text-white">
              LUMAPLAY
            </p>

            <button
              onClick={closeMenu}
              type="button"
              className="rounded-xl border border-white/10 bg-white/5 p-3"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex flex-col gap-6 px-6 py-8">
            <Link
              to="/conheca"
              onClick={closeMenu}
              className="text-2xl text-white"
            >
              Conheça
            </Link>

            <Link
              to="/planos"
              onClick={closeMenu}
              className="text-2xl text-white"
            >
              Planos
            </Link>

            <Link
              to="/beneficios"
              onClick={closeMenu}
              className="text-2xl text-white"
            >
              Benefícios
            </Link>

            <Link
              to="/avaliacoes"
              onClick={closeMenu}
              className="text-2xl text-white"
            >
              Avaliações
            </Link>

            <Link
              to="/faq"
              onClick={closeMenu}
              className="text-2xl text-white"
            >
              FAQ
            </Link>

            <Link
              to="/contato"
              onClick={closeMenu}
              className="text-2xl text-white"
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