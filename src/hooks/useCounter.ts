import { useEffect, useState } from "react";

export const useCounter = (start: number, end: number, duration = 1500) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Number((start + (end - start) * progress).toFixed(0)));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, end, duration]);

  return value;
};
