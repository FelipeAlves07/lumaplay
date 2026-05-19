import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const names = [
  "Felipe","Mariana","Carlos","Juliana","Rafael","Camila","Eduardo","Fernanda",
  "Bruno","Amanda","Lucas","Patrícia","Gustavo","Renata","Thiago","Larissa",
  "João","Beatriz","Matheus","Vanessa","Rodrigo","Bianca","Gabriel","Ana",
];

const cities = [
  "Belo Horizonte","Contagem","Betim","Uberlândia","Juiz de Fora",
  "Montes Claros","Divinópolis","Campinas","Curitiba","Recife",
  "Goiânia","Brasília","Salvador","Fortaleza","São Paulo","Rio de Janeiro",
];

const actions = [
  "acabou de contratar",
  "iniciou assinatura",
  "começou a usar",
  "ativou acesso",
  "entrou agora",
];

function random(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function LiveActivity() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const generate = () =>
      `🔥 ${random(names)} ${random(actions)} • ${random(cities)}`;

    setMessage(generate());

    const interval = setInterval(() => {
      setMessage(generate());
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={message}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="
          fixed z-40
          left-3 right-3 bottom-20
          md:left-6 md:right-auto md:bottom-6
          md:max-w-fit
          rounded-2xl
          border border-cyan-400/20
          bg-[#0C0F17]/95
          px-4 py-3
          shadow-2xl
          backdrop-blur-xl
        "
      >
        <p className="text-xs md:text-sm font-medium text-cyan-200 text-center md:text-left">
          {message}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}