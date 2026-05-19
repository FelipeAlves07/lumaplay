import { useEffect, useState } from "react";

const cities = [
  "Belo Horizonte",
  "São Paulo",
  "Rio de Janeiro",
  "Curitiba",
  "Brasília",
  "Salvador",
  "Recife",
  "Fortaleza",
  "Goiânia",
  "Campinas",
  "Manaus",
  "Porto Alegre",
  "Santos",
  "Florianópolis",
  "Uberlândia",
];

const names = [
  "Carlos",
  "Fernanda",
  "Rafael",
  "Patrícia",
  "Juliano",
  "Marina",
  "Lucas",
  "Camila",
  "Eduardo",
  "Aline",
  "Bruno",
  "Vanessa",
  "Renato",
  "Larissa",
  "Gustavo",
];

export default function LiveActivity() {
  const [activity, setActivity] = useState("");

  useEffect(() => {
    const generateActivity = () => {
      const randomName =
        names[Math.floor(Math.random() * names.length)];

      const randomCity =
        cities[Math.floor(Math.random() * cities.length)];

      setActivity(
        `${randomName} de ${randomCity} acabou de assinar a LumaPlay`
      );
    };

    generateActivity();

    const interval = setInterval(generateActivity, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        fixed
        bottom-5
        left-5
        z-[9998]
        rounded-2xl
        border
        border-white/10
        bg-black/70
        backdrop-blur-xl
        px-5
        py-3
        text-sm
        text-white/90
        shadow-2xl
        max-w-[320px]
      "
    >
      🔥 {activity}
    </div>
  );
}