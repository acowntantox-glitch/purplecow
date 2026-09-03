"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const AUTOPLAY_MS = 3400;

const SCENES = [
  {
    key: "bookkeeping",
    eyebrow: "Bookkeeping",
    title: "Bookkeeping",
    description:
      "Every invoice and expense reconciled by a real accountant, so your books are always audit-ready.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M9 12h6M9 16h6M9 8h3" />
      </svg>
    ),
    items: [
      { label: "Monthly Reconciliation", status: "Up to date" },
      { label: "Invoices Logged", status: "Synced" },
      { label: "Financial Statements", status: "Ready" },
    ],
  },
  {
    key: "vat",
    eyebrow: "VAT Filing",
    title: "VAT Filing",
    description:
      "Quarterly VAT returns prepared, checked, and submitted to the FTA before every deadline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.5 3H5a2 2 0 0 0-2 2v7.5a2 2 0 0 0 .586 1.414l8.5 8.5a2 2 0 0 0 2.828 0l7.5-7.5a2 2 0 0 0 0-2.828l-8.5-8.5A2 2 0 0 0 12.5 3z" />
        <circle cx="8" cy="8" r="1.25" fill="currentColor" stroke="none" />
      </svg>
    ),
    items: [
      { label: "VAT Return — Q2", status: "Filed" },
      { label: "Input Tax Verified", status: "Verified" },
      { label: "FTA Submission", status: "Accepted" },
    ],
  },
  {
    key: "corptax",
    eyebrow: "Corporate Tax",
    title: "Corporate Tax",
    description:
      "Registration, taxable income calculation, and CT returns handled by people who understand the law, not just the form.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
    items: [
      { label: "CT Registration", status: "Registered" },
      { label: "Taxable Income", status: "Calculated" },
      { label: "CT Return", status: "Filed" },
    ],
  },
];

export default function AccountingTaxShowcase({ active }: { active: boolean }) {
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
          src="/images/service/tax 3.jpeg"
          alt="Accounting & Tax"
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

        {/* Workload split (donut) + rolling forecast (sparkline) */}
        <div
          className="hidden w-24 shrink-0 flex-col items-center justify-start gap-3 border-l border-surface-border/70 pl-3 pt-1 sm:flex sm:w-28"
          style={enter(60)}
        >
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full animate-pop-in"
            style={{
              background:
                "conic-gradient(var(--color-primary) 0% 33.3%, var(--color-primary-light) 33.3% 66.6%, #34d399 66.6% 100%)",
            }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[10px] font-bold text-ink">
              {sceneIndex + 1}/3
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[9px] font-semibold uppercase tracking-wide text-ink-soft/70">
              Forecast
            </span>
            <svg viewBox="0 0 100 30" className="h-6 w-20" fill="none">
              <polyline
                points="0,26 20,20 40,22 60,10 80,12 100,3"
                stroke="#34d399"
                className="animate-draw-line"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
