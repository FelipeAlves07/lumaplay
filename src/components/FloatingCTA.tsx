const WHATSAPP_URL =
  "https://wa.me/5531975672291?text=Olá! Quero assinar a LumaPlay.";

export default function FloatingCTA() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-cta fixed bottom-4 right-4 z-50 rounded-2xl bg-gradient-to-r from-[#157BFF] to-[#8E35FF] px-5 py-4 text-sm md:text-base font-semibold text-white shadow-2xl"
    >
      Assinar por R$29,90
    </a>
  );
}