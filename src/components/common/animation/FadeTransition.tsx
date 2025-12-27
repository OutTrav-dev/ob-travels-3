'use client';
import React, { useEffect, useState } from "react";

export function FadeTransition({
  activeKey,
  children,
  duration = 250,
}: {
  activeKey: number | string;
  children: React.ReactNode;
  duration?: number;
}) {
  const [current, setCurrent] = useState(children);
  const [fade, setFade] = useState<"in" | "out">("in");

  useEffect(() => {
    // Use requestAnimationFrame to avoid synchronous setState warnings
    requestAnimationFrame(() => {
      setFade("out");
    });

    const timeout = setTimeout(() => {
      setCurrent(children);

      requestAnimationFrame(() => {
        setFade("in");
      });
    }, duration);

    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeKey]);

  return (
    <div
      style={{
        opacity: fade === "in" ? 1 : 0,
        transform: fade === "in" ? "none" : "translateY(4px)",
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
      }}
    >
      {current}
    </div>
  );
}
