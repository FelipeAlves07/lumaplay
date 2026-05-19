import { useEffect, useState } from "react";

export default function Countdown() {
  const [time, setTime] = useState(3 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 3 * 60 * 60));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10 px-5 py-4">
      <p className="text-sm uppercase tracking-[0.2em] text-white/60">
        Oferta de lançamento termina em
      </p>

      <p className="mt-2 text-3xl font-semibold">
        {hours}:{minutes}:{seconds}
      </p>
    </div>
  );
}