import { Link } from "react-router-dom";
import { MessageCircle, Mail, ShieldCheck } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero assinar a LumaPlay.";

const INSTAGRAM_URL = "https://instagram.com/lumaplaytv";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070d] mt-14">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-10">
        <div className="grid gap-10 md:grid-cols-4">
          
          <div>
            <h3 className="text-3xl font-semibold text-white">LUMAPLAY</h3>

            <p className="mt-4 text-white/55 leading-7 text-sm">
              Streaming premium com filmes, séries, canais ao vivo, futebol,
              suporte humano e ativação rápida.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>

            <div className="flex flex-col gap-3 text-white/60 text-sm">
              <Link to="/conheca">Conheça</Link>
              <Link to="/planos">Planos</Link>
              <Link to="/beneficios">Benefícios</Link>
              <Link to="/avaliacoes">Avaliações</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Suporte</h4>

            <div className="flex flex-col gap-3 text-white/60 text-sm">
              <Link to="/faq">FAQ</Link>
              <Link to="/contato">Contato</Link>

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyan-300" />
                <span>Atendimento humano</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-300" />
                <span>Suporte rápido</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>

            <div className="flex gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6 text-green-400" />
              </a>

              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-6 w-6 text-pink-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-center text-white/35 text-sm">
          © 2026 LumaPlay • Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}