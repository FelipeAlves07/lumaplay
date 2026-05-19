import { Link } from "react-router-dom";
import { Globe, MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero assinar a LumaPlay.";

const INSTAGRAM_URL = "https://instagram.com/lumaplaytv";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 mt-16">
      <div className="mx-auto max-w-[1600px] px-4 md:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-semibold">LUMAPLAY</h3>

            <p className="mt-4 text-white/50 leading-7">
              Streaming premium com suporte humano e ativação rápida.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>

            <div className="flex flex-col gap-3 text-white/60">
              <Link to="/conheca">Conheça</Link>
              <Link to="/planos">Planos</Link>
              <Link to="/beneficios">Benefícios</Link>
              <Link to="/avaliacoes">Avaliações</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/contato">Contato</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>

            <div className="flex gap-4">
              <a href={WHATSAPP_URL} target="_blank">
                <MessageCircle className="h-6 w-6 text-green-400" />
              </a>

              <a href={INSTAGRAM_URL} target="_blank">
                <Globe className="h-6 w-6 text-pink-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-white/40 text-sm">
          © 2026 LumaPlay • Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}