"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import InsightsCardStack from "./InsightsCardStack";

const INSIGHTS = [
  {
    title: "Mainland, Free Zone, or Offshore: how to actually choose",
    image: "/images/stich/s3.jpg",
    slug: "mainland-freezone-offshore",
    badge: "Business Setup",
  },
  {
    title: "UAE Corporate Tax for small businesses, explained simply",
    image: "/images/stich/w2.jpg",
    slug: "uae-corporate-tax-small-business",
    badge: "Accounting & Tax",
  },
  {
    title: "What a Dubai company setup really costs in 2026",
    image: "/images/stich/s1.jpg",
    slug: "dubai-company-setup-cost-2026",
    badge: "Business Setup",
  },
  {
    title: "Employment visas and PRO services, without the queueing",
    image: "/images/stich/r1.jpg",
    slug: "employment-visas-pro-services",
    badge: "Corporate Services",
  },
  {
    title: "Opening a UAE corporate bank account, without the runaround",
    image: "/images/stich/g3.jpg",
    slug: "uae-corporate-bank-account-guide",
    badge: "Business Setup",
  },
  {
    title: "VAT registration and filing for UAE businesses: what actually matters",
    image: "/images/stich/vat services.jpg",
    slug: "vat-registration-uae-guide",
    badge: "Accounting & Tax",
  },
];

const ARROW_ICON = (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const AUTOPLAY_MS = 4000;
const RESUME_DELAY_MS = 2500;

export default function Insights() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const scrollByCardRef = useRef<(direction: 1 | -1) => void>(() => {});
  const pauseAutoplayRef = useRef<() => void>(() => {});
  const resumeAutoplayRef = useRef<() => void>(() => {});

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const updateArrows = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };
    updateArrows();

    const scrollByCard = (direction: 1 | -1, behavior: ScrollBehavior = "smooth") => {
      const card = el.querySelector<HTMLElement>("a");
      const gap = parseFloat(getComputedStyle(el).columnGap || "24");
      const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.9;
      el.scrollBy({ left: direction * amount, behavior });
    };
    scrollByCardRef.current = scrollByCard;

    // Auto-advance one card at a time, looping back to the start at the end.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let paused = false;
    let resumeTimeout: ReturnType<typeof setTimeout> | null = null;

    const pause = () => {
      paused = true;
      if (resumeTimeout) clearTimeout(resumeTimeout);
    };
    const scheduleResume = () => {
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        paused = false;
      }, RESUME_DELAY_MS);
    };
    pauseAutoplayRef.current = pause;
    resumeAutoplayRef.current = scheduleResume;

    const intervalId = reduceMotion
      ? null
      : setInterval(() => {
          if (paused) return;
          const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 4;
          if (atEnd) {
            el.scrollTo({ left: 0, behavior: "auto" });
          } else {
            scrollByCard(1, "auto");
          }
        }, AUTOPLAY_MS);

    // Mouse click-and-drag panning (touch already scrolls natively via overflow-x-auto).
    // Pointer capture is only claimed once the mouse actually moves past DRAG_THRESHOLD_PX —
    // claiming it immediately on pointerdown retargets the eventual pointerup/click to `el`
    // instead of the card link underneath, silently breaking clicks.
    const DRAG_THRESHOLD_PX = 4;
    let pending = false;
    let dragging = false;
    let pointerId = 0;
    let dragStartX = 0;
    let dragStartScrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      pause();
      if (e.pointerType !== "mouse") return;
      pending = true;
      pointerId = e.pointerId;
      dragStartX = e.clientX;
      dragStartScrollLeft = el.scrollLeft;
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!pending && !dragging) return;
      if (!dragging) {
        if (Math.abs(e.clientX - dragStartX) < DRAG_THRESHOLD_PX) return;
        dragging = true;
        el.setPointerCapture(pointerId);
      }
      el.scrollLeft = dragStartScrollLeft - (e.clientX - dragStartX);
    };
    const onPointerUp = (e: PointerEvent) => {
      pending = false;
      if (dragging) {
        dragging = false;
        try {
          el.releasePointerCapture(e.pointerId);
        } catch {
          // pointer capture may already be released
        }
      }
      scheduleResume();
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("wheel", pause, { passive: true });
    el.addEventListener("wheel", scheduleResume, { passive: true });
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", scheduleResume);
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (resumeTimeout) clearTimeout(resumeTimeout);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("wheel", pause);
      el.removeEventListener("wheel", scheduleResume);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", scheduleResume);
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    pauseAutoplayRef.current();
    scrollByCardRef.current(direction);
    resumeAutoplayRef.current();
  };

  return (
    <section id="insights" className="bg-white/85 py-5 sm:py-10">
      <div className="mx-auto max-w-7xl px-8 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl text-left">
              <h2 className="text-balance flex items-center justify-start gap-2 text-xl font-bold tracking-tight text-ink sm:gap-3 sm:text-4xl">
                <Image
                  src="/images/logo-mark.png"
                  alt=""
                  width={775}
                  height={721}
                  className="h-10 w-auto shrink-0 sm:h-10"
                />
                <span>
                  Business Setup in <span className="text-primary">Dubai Insights</span>
                </span>
              </h2>
              <p className="mt-3 text-sm text-ink-soft sm:mt-4 sm:text-lg">
                Keep up with UAE company formation, tax, and compliance, explained
                by the team that files it.
              </p>
            </div>
            <div className="hidden shrink-0 items-center gap-3 sm:flex">
              <button
                type="button"
                aria-label="Scroll to previous articles"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white text-ink transition hover:border-primary/40 hover:text-primary disabled:pointer-events-none disabled:opacity-30"
              >
                <span className="rotate-180">{ARROW_ICON}</span>
              </button>
              <button
                type="button"
                aria-label="Scroll to next articles"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-white text-ink transition hover:border-primary/40 hover:text-primary disabled:pointer-events-none disabled:opacity-30"
              >
                {ARROW_ICON}
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 sm:hidden">
            <InsightsCardStack items={INSIGHTS} />
          </div>

          <div
            ref={scrollerRef}
            className="hidden scrollbar-hide sm:mx-0 sm:mt-16 sm:flex sm:cursor-grab sm:select-none sm:gap-6 sm:overflow-x-auto sm:py-2 sm:active:cursor-grabbing"
          >
            {INSIGHTS.map((item) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                draggable={false}
                className="group flex h-full w-44 shrink-0 flex-col overflow-hidden rounded-2xl border border-surface-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:w-100"
              >
                <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden sm:aspect-[5/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 640px) 320px, 176px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm sm:px-3 sm:text-[11px]">
                    {item.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-8">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-ink sm:text-base">
                    {item.title}
                  </h3>
                  <span className="mt-auto inline-flex w-fit items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-[11px] font-bold uppercase tracking-wide text-white transition-colors group-hover:bg-primary-light sm:text-xs">
                    Explore More
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              View all articles <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
