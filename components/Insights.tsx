"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const INSIGHTS = [
  {
    title: "Mainland, Free Zone, or Offshore — how to actually choose",
    image: "/images/service/business setup.jpg",
    slug: "mainland-freezone-offshore",
  },
  {
    title: "UAE Corporate Tax for small businesses, explained simply",
    image: "/images/service/tax.jpg",
    slug: "uae-corporate-tax-small-business",
  },
  {
    title: "What a Dubai company setup really costs in 2026",
    image: "/images/dubai-skyline.png",
    slug: "dubai-company-setup-cost-2026",
  },
  {
    title: "Employment visas and PRO services, without the queueing",
    image: "/images/service/corporate service.jpg",
    slug: "employment-visas-pro-services",
  },
  {
    title: "Opening a UAE corporate bank account, without the runaround",
    image: "/images/service/business 1.jpg",
    slug: "uae-corporate-bank-account-guide",
  },
  {
    title: "VAT registration and filing for UAE businesses: what actually matters",
    image: "/images/service/tax 3.jpeg",
    slug: "vat-registration-uae-guide",
  },
];

const RESUME_DELAY_MS = 1500;
const AUTO_SCROLL_SPEED_PX = 0.6;

export default function Insights() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const track = [...INSIGHTS, ...INSIGHTS];

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let paused = false;
    let resumeTimeout: ReturnType<typeof setTimeout> | null = null;
    let frameId: number;

    const wrapIfNeeded = () => {
      const halfWidth = el.scrollWidth / 2;
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft -= halfWidth;
      }
    };

    const step = () => {
      if (!paused && !reduceMotion) {
        el.scrollLeft += AUTO_SCROLL_SPEED_PX;
      }
      wrapIfNeeded();
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);

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

    // Mouse click-and-drag panning (touch already scrolls natively via overflow-x-auto).
    let dragging = false;
    let dragStartX = 0;
    let dragStartScrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      pause();
      if (e.pointerType !== "mouse") return;
      dragging = true;
      dragStartX = e.clientX;
      dragStartScrollLeft = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      el.scrollLeft = dragStartScrollLeft - (e.clientX - dragStartX);
    };
    const onPointerUp = (e: PointerEvent) => {
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

    return () => {
      cancelAnimationFrame(frameId);
      if (resumeTimeout) clearTimeout(resumeTimeout);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("wheel", pause);
      el.removeEventListener("wheel", scheduleResume);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", scheduleResume);
    };
  }, []);

  return (
    <section id="insights" className="bg-white/85 py-5 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl text-left sm:mx-auto sm:text-center">
            <h2 className="text-balance flex items-center justify-start gap-2 text-xl font-bold tracking-tight text-ink sm:justify-center sm:gap-3 sm:text-4xl">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={775}
                height={721}
                className="h-6 w-auto shrink-0 sm:h-10"
              />
              <span>
                Business Setup in <span className="text-primary">Dubai Insights</span>
              </span>
            </h2>
            <p className="mt-3 text-sm text-ink-soft sm:mt-4 sm:text-lg">
              Keep up with UAE company formation, tax, and compliance — explained
              by the team that files it.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            ref={scrollerRef}
            className="mt-8 flex cursor-grab select-none gap-4 overflow-x-auto py-2 scrollbar-hide active:cursor-grabbing sm:mt-16 sm:gap-6"
          >
            {track.map((item, index) => (
              <Link
                key={`${item.slug}-${index}`}
                href={`/insights/${item.slug}`}
                draggable={false}
                className="group flex h-full w-60 shrink-0 flex-col overflow-hidden rounded-2xl border border-surface-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:w-80"
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 640px) 320px, 240px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-ink sm:text-base">
                    {item.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-bold uppercase tracking-wide text-primary sm:pt-4">
                    Read more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      »
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
