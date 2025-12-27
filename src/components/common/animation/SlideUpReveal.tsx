"use client";
import { useRef, useEffect, useState, ReactNode } from "react";

interface SlideUpRevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  distancePx?: number;
  once?: boolean;
  easing?: string;
}

export default function SlideUpReveal({
  children,
  className = "",
  delayMs = 10,
  durationMs = 800,
  distancePx = 48,
  once = true,
  easing = "cubic-bezier(.23,1,.32,1)",
}: SlideUpRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setActive(false);
          setReady(false);
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  // Defer enabling transitions to avoid initial jump
  useEffect(() => {
    if (active) {
      const id = requestAnimationFrame(() => setReady(true));
      return () => cancelAnimationFrame(id);
    }
  }, [active]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: ready ? 1 : 0,
        transform: ready ? "translateY(0)" : `translateY(${distancePx}px)`,
        transition: `opacity ${durationMs * 3}ms ${easing} ${ready ? delayMs : 0}ms,
                     transform ${durationMs}ms ${easing} ${ready ? delayMs : 0}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}