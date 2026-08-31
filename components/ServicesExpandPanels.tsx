"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  illustrationFullBleed?: boolean;
  ctaHref?: string;
};

export default function ServicesExpandPanels({ pillars }: { pillars: ServicePillar[] }) {
  const router = useRouter();
  const [active, setActive] = useState<number | null>(null);
  const [supportsHover, setSupportsHover] = useState(false);

  useEffect(() => {
    setSupportsHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  return (
    <>
      {/* Mobile/tablet: stacked accordion — tap a row to expand it in place */}
      <div className="flex flex-col gap-3 lg:hidden">
        {pillars.map((pillar, i) => {
          const isActive = active === i;

          return (
            <div
              key={pillar.title}
              className="overflow-hidden rounded-2xl border border-surface-border bg-white"
            >
              <button
                type="button"
                onClick={() => setActive((cur) => (cur === i ? null : i))}
                aria-expanded={isActive}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span>
                  <span className="block text-sm font-medium text-primary">{pillar.eyebrow}</span>
                  <span className="mt-0.5 block text-lg font-semibold text-ink">{pillar.title}</span>
                </span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300"
                  style={{ transform: isActive ? "rotate(45deg)" : "rotate(0deg)" }}
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              <div
                className="grid transition-[grid-template-rows] duration-500 ease-out"
                style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="100vw"
                      className="object-contain p-6"
                    />
                  </div>
                  <div className="px-5 pb-6">
                    <p className="text-sm leading-relaxed text-ink-soft">{pillar.description}</p>
                    {pillar.ctaHref ? (
                      <Link
                        href={pillar.ctaHref}
                        className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-primary/40 hover:bg-primary/20"
                      >
                        {pillar.cta} <span aria-hidden>&rarr;</span>
                      </Link>
                    ) : (
                      <span className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary">
                        {pillar.cta} <span aria-hidden>&rarr;</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: side-by-side hover/click-to-expand panels */}
      <div className="hidden gap-3 lg:flex lg:h-[580px]">
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
                ? "2.4 1 0%"
                : isDimmed
                ? "0.7 1 0%"
                : `${pillar.basis ?? 1} 1 0%`,
              transition: "flex 2s cubic-bezier(0.22, 1, 0.36, 1)",
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

            {/* Floating illustration card: stays visible (as its faded cover) while a sibling card is expanded */}
            <div>
              {pillar.customIllustration ? (
                <div
                  className={
                    pillar.illustrationFullBleed
                      ? "absolute inset-0 overflow-hidden rounded-2xl"
                      : "absolute inset-x-4 top-4 bottom-20 overflow-hidden rounded-2xl sm:inset-x-6 sm:top-6 sm:bottom-24"
                  }
                >
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
            </div>

            {/* Idle label: horizontal title + arrow, bottom-left (shown when nothing is active) */}
            <div
              className="absolute bottom-6 left-5 flex items-center gap-2"
              style={{
                opacity: isActive || isDimmed ? 0 : 1,
                transition: "opacity 0.18s ease-out",
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

            {/* Dimmed label: large vertical title, centered (shown while a sibling card is expanded) */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                opacity: isDimmed ? 1 : 0,
                transition: "opacity 0.3s ease-out",
              }}
            >
              <span className="whitespace-nowrap text-2xl font-bold tracking-tight text-white/90 [writing-mode:vertical-rl] sm:text-2xl">
                {pillar.title}
              </span>
            </div>

            {/* Expanded content */}
            <div
              className="absolute inset-x-4 bottom-4 rounded-2xl p-6 shadow-lg ring-1 ring-black/5 backdrop-blur-sm sm:inset-x-6 sm:bottom-6 sm:p-8"
              style={{
                backgroundColor: "rgba(252, 242, 253, 1)",
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.2s ease-out 0.06s, transform 0.2s ease-out 0.06s",
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
              <span
                role={pillar.ctaHref ? "link" : undefined}
                tabIndex={pillar.ctaHref ? 0 : undefined}
                onClick={
                  pillar.ctaHref
                    ? (e) => {
                        e.stopPropagation();
                        router.push(pillar.ctaHref!);
                      }
                    : undefined
                }
                onKeyDown={
                  pillar.ctaHref
                    ? (e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          e.stopPropagation();
                          router.push(pillar.ctaHref!);
                        }
                      }
                    : undefined
                }
                className={`mt-5 inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-md transition hover:border-primary/40 hover:bg-primary/20 ${
                  pillar.ctaHref ? "cursor-pointer" : ""
                }`}
              >
                {pillar.cta} <span aria-hidden>&rarr;</span>
              </span>
            </div>
          </button>
        );
      })}
      </div>
    </>
  );
}
