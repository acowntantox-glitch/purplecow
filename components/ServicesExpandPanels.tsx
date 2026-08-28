"use client";

import Image from "next/image";
import { useState } from "react";

export type ServicePillar = {
  title: string;
  eyebrow: string;
  description: string;
  cta: string;
  image: string;
  basis?: number;
};

export default function ServicesExpandPanels({ pillars }: { pillars: ServicePillar[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex h-[520px] w-full gap-3 sm:h-[560px] lg:h-[620px]">
      {pillars.map((pillar, i) => {
        const isActive = active === i;
        const isDimmed = active !== null && !isActive;

        return (
          <button
            key={pillar.title}
            type="button"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            aria-expanded={isActive}
            className="relative h-full overflow-hidden rounded-2xl text-left outline-none"
            style={{
              flex: isActive
                ? "3.4 1 0%"
                : isDimmed
                ? "0.7 1 0%"
                : `${pillar.basis ?? 1} 1 0%`,
              transition: "flex 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
              minWidth: 0,
            }}
          >
            <Image
              src={pillar.image}
              alt={pillar.title}
              fill
              sizes="(min-width: 1024px) 60vw, 90vw"
              priority={i === 0}
              className="object-cover"
              style={{
                transform: isActive ? "scale(1.04)" : "scale(1)",
                transition: "transform 0.7s ease-out",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

            {/* Collapsed label: rotated title + arrow, bottom-right */}
            <div
              className="absolute bottom-6 right-5 flex items-center gap-2"
              style={{
                opacity: isActive ? 0 : 1,
                transition: "opacity 0.35s ease-out",
              }}
            >
              <span
                className="whitespace-nowrap text-lg font-semibold text-white/90 [writing-mode:vertical-rl]"
              >
                {pillar.title}
              </span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
            </div>

            {/* Expanded content */}
            <div
              className="absolute inset-x-0 bottom-0 p-6 sm:p-8"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.4s ease-out 0.15s, transform 0.4s ease-out 0.15s",
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <p className="text-sm font-medium text-white/70">{pillar.eyebrow}</p>
              <h3 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm text-white/80 sm:text-base">
                {pillar.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-light">
                {pillar.cta} <span aria-hidden>&rarr;</span>
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
