import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero conhecer a LumaPlay.";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Conheça", path: "/conheca" },
    { label: "Planos", path: "/planos" },
    { label: "Benefícios", path: "/beneficios" },
    { label: "Avaliações", path: "/avaliacoes" },
    { label: "FAQ", path: "/faq" },
    { label: "Contato", path: "/contato" },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden rounded-xl border border-white/10 bg-white/5 p-3"
      >
        <Menu className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="
                fixed top-0 right-0 z-[100]
                h-screen w-[85%] max-w-[340px]
                bg-[#070A12]
                border-l border-white/10
                p-5
                overflow-y-auto
              "
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold tracking-[0.2em]">
                  LUMAPLAY
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-white/5 p-3"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-3">
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl bg-white/5 px-5 py-4 text-base"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                className="
                  mt-6
                  flex items-center justify-center gap-3
                  rounded-2xl
                  bg-gradient-to-r from-[#157BFF] to-[#8E35FF]
                  px-6 py-4
                  font-semibold
                "
              >
                <MessageCircle className="h-5 w-5" />
                Assinar agora
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}