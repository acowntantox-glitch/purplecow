"use client";

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

export type ServicePillar = {
  title: string;
  eyebrow: string;
  description: string;
  cta: string;
  image: string;
  basis?: number;
  animateImageOnActive?: boolean;
  imageContainerVariant?: "solid" | "glass";
  customIllustration?: (isActive: boolean) => ReactNode;
};

export default function ServicesExpandPanels({ pillars }: { pillars: ServicePillar[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [supportsHover, setSupportsHover] = useState(false);

  useEffect(() => {
    setSupportsHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  return (
    <div className="flex h-[520px] w-full gap-3 sm:h-[560px] lg:h-[620px]">
      {pillars.map((pillar, i) => {
        const isActive = active === i;
        const isDimmed = active !== null && !isActive;

        return (
          <button
            key={pillar.title}
            type="button"
            onMouseEnter={supportsHover ? () => setActive(i) : undefined}
            onMouseLeave={supportsHover ? () => setActive(null) : undefined}
            onFocus={() => setActive(i)}
            onBlur={() => setActive(null)}
            onClick={() => setActive((cur) => (cur === i ? null : i))}
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
            {/* Same background treatment as the "Why Purple Cow" section */}
            <div className="absolute inset-0 hero-glow" aria-hidden />
            <div className="absolute inset-0 grid-fade" aria-hidden />
            <div
              className="stripe-corner pointer-events-none absolute right-0 top-0 h-16 w-16 sm:h-24 sm:w-24"
              aria-hidden
            />

            {/* Floating illustration card */}
            {pillar.customIllustration ? (
              <div className="absolute inset-x-4 top-4 bottom-20 overflow-hidden rounded-2xl sm:inset-x-6 sm:top-6 sm:bottom-24">
                {pillar.customIllustration(isActive)}
              </div>
            ) : (
              <div
                className={`absolute inset-x-4 top-4 bottom-20 overflow-hidden rounded-2xl sm:inset-x-6 sm:top-6 sm:bottom-24 ${
                  pillar.imageContainerVariant === "glass"
                    ? "border border-white/50 bg-white/25 shadow-xl backdrop-blur-xl"
                    : "bg-white shadow-xl ring-1 ring-black/5"
                }`}
              >
                {pillar.imageContainerVariant === "glass" && (
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.08) 35%, rgba(255,255,255,0) 60%)",
                    }}
                    aria-hidden
                  />
                )}
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 90vw"
                  priority={i === 0}
                  className={`object-contain p-6 ${
                    isActive && pillar.animateImageOnActive ? "animate-illustration-float" : ""
                  }`}
                  style={
                    isActive && pillar.animateImageOnActive
                      ? { transition: "transform 0.4s ease-out" }
                      : {
                          transform: isActive ? "scale(1.04)" : "scale(1)",
                          transition: "transform 0.7s ease-out",
                        }
                  }
                />
              </div>
            )}

            {/* Collapsed label: horizontal title + arrow, bottom-left */}
            <div
              className="absolute bottom-6 left-5 flex items-center gap-2"
              style={{
                opacity: isActive ? 0 : 1,
                transition: "opacity 0.35s ease-out",
              }}
            >
              <span className="whitespace-nowrap text-lg font-semibold text-white/90">
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
              className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-8"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.4s ease-out 0.15s, transform 0.4s ease-out 0.15s",
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <p className="text-sm font-medium text-primary">{pillar.eyebrow}</p>
              <h3 className="mt-1 text-2xl font-semibold text-ink sm:text-3xl">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm text-ink-soft sm:text-base">
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
