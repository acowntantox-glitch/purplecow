"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(raw: string) {
  const match = raw.match(/^([^\d]*)([\d.]+)(.*)$/);
  if (!match) {
    return { prefix: "", target: 0, suffix: raw, decimals: 0 };
  }
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, target: parseFloat(numStr), suffix, decimals };
}

export default function Counter({
  value,
  duration = 900,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(() => {
    const { prefix, suffix, decimals } = parseValue(value);
    return `${prefix}${(0).toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const { prefix, target, suffix, decimals } = parseValue(value);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = target * eased;
          setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setDisplay(value);
          }
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
