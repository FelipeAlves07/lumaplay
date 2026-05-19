import { useEffect, useState } from "react";

const names = [
  "Larissa de Curitiba",
  "Lucas de Goiânia",
  "Marina de Uberlândia",
  "Juliano de Porto Alegre",
  "Carlos de BH",
];

export default function LiveActivity() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % names.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-4 left-4 z-50 rounded-2xl border border-white/10 bg-black/90 px-4 py-3 backdrop-blur-xl">
      <p className="text-xs md:text-sm text-white/85">
        🔥 {names[current]} acabou de assinar a LumaPlay
      </p>
    </div>
  );
}