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
        onClick={() => setOpen(true)}
        className="md:hidden rounded-xl border border-white/10 bg-white/5 p-3"
      >
        <Menu className="h-6 w-6 text-white" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[99999] bg-[#04050A]">
          <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
            <p className="text-lg font-semibold tracking-[0.2em]">
              LUMAPLAY
            </p>

            <button
              onClick={() => setOpen(false)}
              className="rounded-xl border border-white/10 bg-white/5 p-3"
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex flex-col gap-5 px-5 py-8 text-lg">
            <Link to="/conheca" onClick={() => setOpen(false)}>
              Conheça
            </Link>

            <Link to="/planos" onClick={() => setOpen(false)}>
              Planos
            </Link>

            <Link to="/beneficios" onClick={() => setOpen(false)}>
              Benefícios
            </Link>

            <Link to="/avaliacoes" onClick={() => setOpen(false)}>
              Avaliações
            </Link>

            <Link to="/faq" onClick={() => setOpen(false)}>
              FAQ
            </Link>

            <Link to="/contato" onClick={() => setOpen(false)}>
              Contato
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              className="
                mt-6
                rounded-2xl
                bg-gradient-to-r
                from-[#157BFF]
                to-[#8E35FF]
                px-6
                py-4
                text-center
                font-semibold
              "
            >
              Assinar por R$29,90
            </a>
          </div>
        </div>
      )}
    </>
  );
}