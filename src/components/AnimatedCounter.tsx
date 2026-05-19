import { useEffect, useState } from "react";

type Props = {
  target: number;
  suffix?: string;
};

export default function AnimatedCounter({
  target,
  suffix = "",
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += Math.ceil(target / 30);

      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}