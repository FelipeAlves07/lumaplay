const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero assinar a LumaPlay agora.";

export default function FloatingCTA() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      className="
        floating-cta
        fixed
        bottom-5
        right-5
        z-[9999]
        rounded-2xl
        bg-gradient-to-r
        from-[#157BFF]
        to-[#8E35FF]
        px-6
        py-4
        font-semibold
        text-white
        shadow-2xl
      "
    >
      Assinar por R$29,90
    </a>
  );
}