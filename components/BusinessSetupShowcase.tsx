"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AUTOPLAY_MS = 3400;

const SCENES = [
  {
    key: "mainland",
    eyebrow: "Mainland Setup",
    title: "Mainland",
    description:
      "Trade anywhere in the UAE and bid on government contracts, with full access to the local market.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V9l6-4 6 4v12" />
        <path d="M14 21v-7l6 3v4" />
        <path d="M9 21v-4M4 21h16" />
      </svg>
    ),
    items: [
      { label: "DED Trade License", status: "Approved" },
      { label: "Local Market Access", status: "Unlocked" },
      { label: "Office Lease", status: "Filed" },
    ],
  },
  {
    key: "freezone",
    eyebrow: "Free Zone Setup",
    title: "Free Zone",
    description:
      "100% foreign ownership and streamlined licensing, tailored to over 40 UAE free zones.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 3 8l9 5 9-5-9-5z" />
        <path d="M3 16l9 5 9-5M3 12l9 5 9-5" />
      </svg>
    ),
    items: [
      { label: "100% Foreign Ownership", status: "Confirmed" },
      { label: "Zero Import Duty", status: "Active" },
      { label: "Visa Quota", status: "Allocated" },
    ],
  },
  {
    key: "offshore",
    eyebrow: "Offshore Setup",
    title: "Offshore",
    description:
      "Hold assets, open accounts, and structure international operations with an offshore company.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
      </svg>
    ),
    items: [
      { label: "Intl. Bank Account", status: "Eligible" },
      { label: "Asset Holding Structure", status: "Set up" },
      { label: "Profit Repatriation", status: "Enabled" },
    ],
  },
];

export default function BusinessSetupShowcase({ active }: { active: boolean }) {
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
          src="/images/service/business set 3.jpeg"
          alt="Business Setup"
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

        {/* Setup pipeline: three stages, the one matching the current scene lit up */}
        <div
          className="hidden w-24 shrink-0 items-start justify-center border-l border-surface-border/70 pl-3 pt-1 sm:flex sm:w-28"
          style={enter(60)}
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="absolute left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-surface-border" aria-hidden />
            {["Apply", "License", "Launch"].map((label, i) => {
              const isCurrent = i === sceneIndex;
              return (
                <div key={label} className="relative z-10 flex flex-col items-center gap-1.5">
                  {isCurrent && (
                    <span className="absolute -inset-2 rounded-full bg-primary/40 animate-ring-pulse" aria-hidden />
                  )}
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full border-2 text-[10px] font-bold transition-colors ${
                      isCurrent
                        ? "border-primary bg-primary text-white animate-pop-in"
                        : "border-surface-border bg-white text-ink-soft"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`whitespace-nowrap text-[9px] font-medium ${
                      isCurrent ? "text-primary" : "text-ink-soft/70"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
