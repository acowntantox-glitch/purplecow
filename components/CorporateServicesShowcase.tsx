"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AUTOPLAY_MS = 3400;

const SCENES = [
  {
    key: "pro",
    eyebrow: "PRO & Visa Services",
    title: "PRO Services",
    description:
      "Employment visas, Emirates ID, and labor cards processed for you — no queuing at government counters.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="11" r="2" />
        <path d="M6 16c.6-1.6 1.9-2.5 3-2.5s2.4.9 3 2.5M14 10h4M14 14h4" />
      </svg>
    ),
    items: [
      { label: "Employment Visa", status: "Approved" },
      { label: "Emirates ID", status: "Issued" },
      { label: "Labor Card", status: "Active" },
    ],
  },
  {
    key: "banking",
    eyebrow: "Corporate Banking",
    title: "Bank Account",
    description:
      "We prepare the compliance file and manage the relationship so your account opens without repeat trips to the bank.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10 12 4l9 6" />
        <path d="M5 10v9M10 10v9M14 10v9M19 10v9M3 19h18" />
      </svg>
    ),
    items: [
      { label: "Compliance Documents", status: "Verified" },
      { label: "Account Application", status: "Submitted" },
      { label: "IBAN", status: "Issued" },
    ],
  },
  {
    key: "renewals",
    eyebrow: "Renewals & Compliance",
    title: "Renewals",
    description:
      "License, establishment card, and Chamber of Commerce renewals tracked and filed before they lapse.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4M8.5 15l2 2 4-4" />
      </svg>
    ),
    items: [
      { label: "Trade License Renewal", status: "Filed" },
      { label: "Establishment Card", status: "Renewed" },
      { label: "Chamber of Commerce", status: "Active" },
    ],
  },
];

export default function CorporateServicesShowcase({ active }: { active: boolean }) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const count = SCENES.length;

  useEffect(() => {
    if (!active) {
      setSceneIndex(0);
      return;
    }
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => setSceneIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [active, count]);

  const scene = SCENES[sceneIndex];
  const enter = (delayMs: number) =>
    active ? { animation: "fade-up 0.28s ease-out both", animationDelay: `${delayMs}ms` } : undefined;

  return (
    <div className="relative h-full w-full">
      {/* Static cover image: shown at rest, fades out on hover/expand */}
      <div
        className="absolute inset-0 overflow-hidden rounded-2xl"
        style={{
          opacity: active ? 0 : 0.6,
          transition: "opacity 0.3s ease-out",
          pointerEvents: active ? "none" : "auto",
        }}
      >
        <Image
          src="/images/service/corporate 3.jpeg"
          alt="Corporate Services"
          fill
          sizes="(min-width: 1024px) 60vw, 90vw"
          className="object-cover"
        />
      </div>

      {/* Animated mockup: shown on hover/expand */}
      <div
        className="absolute inset-0 flex flex-col rounded-2xl border border-surface-border bg-white/98 shadow-2xl shadow-black/40"
        style={{
          opacity: active ? 1 : 0,
          transition: "opacity 0.3s ease-out",
          pointerEvents: active ? "auto" : "none",
        }}
      >
      <div className="flex items-center gap-1.5 px-5 pt-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>

      <div
        key={active ? `scene-${sceneIndex}` : "static"}
        className="flex min-h-0 flex-1 gap-3 px-5 pb-3 pt-3 sm:px-6"
      >
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-2" style={enter(0)}>
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:h-4 [&_svg]:w-4">
              {scene.icon}
            </div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
              {scene.eyebrow}
            </p>
          </div>

          <div className="mt-5 space-y-2">
            {scene.items.map((item, i) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-lg border border-surface-border bg-surface/60 px-3 py-2"
                style={enter(80 + i * 70)}
              >
                <span className="text-xs font-medium text-ink">{item.label}</span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Workstream tracker: the bar matching the current scene fills in */}
        <div
          className="hidden w-24 shrink-0 flex-col justify-start gap-3 border-l border-surface-border/70 pl-3 pt-1 sm:flex sm:w-28"
          style={enter(60)}
        >
          {["PRO", "Banking", "Renewals"].map((label, i) => {
            const isCurrent = i === sceneIndex;
            return (
              <div key={label} className="flex flex-col gap-1">
                <span
                  className={`whitespace-nowrap text-[9px] font-semibold uppercase tracking-wide ${
                    isCurrent ? "text-primary" : "text-ink-soft/60"
                  }`}
                >
                  {label}
                </span>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-border/70">
                  <div
                    className={`h-full rounded-full ${
                      isCurrent ? "bg-primary animate-grow-bar-x" : "bg-surface-border"
                    }`}
                    style={{ width: isCurrent ? "100%" : "55%" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}
