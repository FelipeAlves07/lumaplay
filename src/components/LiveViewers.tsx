import { useEffect, useState } from "react";

export default function LiveViewers() {
  const [count, setCount] = useState(7);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(Math.floor(Math.random() * 11) + 4);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4">
      <p className="text-sm text-cyan-200">
        👀 {count} pessoas visualizando agora
      </p>
    </div>
  );
}