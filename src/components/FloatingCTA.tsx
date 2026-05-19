import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero conhecer a LumaPlay.";

export default function FloatingCTA() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      className="
        floating-cta
        fixed z-50
        bottom-4 right-4
        md:bottom-6 md:right-6
        flex items-center gap-2
        rounded-full
        bg-gradient-to-r from-[#157BFF] to-[#8E35FF]
        px-5 py-3
        md:px-6 md:py-4
        text-sm md:text-base
        font-semibold
        shadow-2xl
      "
    >
      <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
      Assinar
    </a>
  );
}