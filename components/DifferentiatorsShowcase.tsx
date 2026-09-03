"use client";

import { useEffect, useState } from "react";

const AUTOPLAY_MS = 3400;

const DOCS = [
  { name: "Trade License.pdf", status: "Synced" },
  { name: "VAT Filing — Q2", status: "Synced" },
  { name: "Bank KYC Form", status: "Synced" },
];

const SCENES = [
  {
    title: "Technology-Driven",
    eyebrow: "Client Portal",
    description:
      "A client portal that replaces email threads and lost paperwork — track filings, documents, and deadlines in one place.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </svg>
    ),
    illustration: (
      <div className="space-y-2">
        {DOCS.map((doc, i) => (
          <div
            key={doc.name}
            className="flex items-center justify-between rounded-lg border border-surface-border bg-surface/60 px-3 py-2"
            style={{ animation: "fade-up 0.28s ease-out both", animationDelay: `${80 + i * 70}ms` }}
          >
            <span className="text-xs font-medium text-ink">{doc.name}</span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
              {doc.status}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Dedicated Account Managers",
    eyebrow: "Your Account Manager",
    description:
      "Your single point of contact for personalized support and corporate continuity, not a rotating support queue.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20c1.5-4 5-5.5 7.5-5.5s6 1.5 7.5 5.5" />
      </svg>
    ),
    illustration: (
      <div className="flex items-center gap-4 py-1">
        <div
          className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary"
          style={{ animation: "fade-up 0.28s ease-out both", animationDelay: "60ms" }}
        >
          FA
          <span className="absolute bottom-0 right-0 h-3.5 w-3.5 animate-pulse rounded-full border-2 border-white bg-emerald-500" />
        </div>
        <div style={{ animation: "fade-up 0.28s ease-out both", animationDelay: "140ms" }}>
          <p className="text-sm font-semibold text-ink">Fathima A.</p>
          <p className="text-xs text-ink-soft">Senior Account Manager</p>
          <p className="mt-1 text-xs font-medium text-emerald-600">Online now</p>
        </div>
      </div>
    ),
  },
  {
    title: "Transparent Pricing",
    eyebrow: "Pricing Breakdown",
    description:
      "No hidden administrative fees or surprise costs. Predictable monthly and flat setup charges, shown before you commit.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.5 3H5a2 2 0 0 0-2 2v7.5a2 2 0 0 0 .586 1.414l8.5 8.5a2 2 0 0 0 2.828 0l7.5-7.5a2 2 0 0 0 0-2.828l-8.5-8.5A2 2 0 0 0 12.5 3z" />
        <circle cx="8" cy="8" r="1.25" fill="currentColor" stroke="none" />
      </svg>
    ),
    illustration: (
      <div className="flex items-end justify-center gap-8 py-1">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-16 w-10 items-end overflow-hidden rounded-md bg-surface-border/50 sm:h-24">
            <div
              className="w-full animate-grow-bar rounded-md bg-rose-300"
              style={{ height: "88%", animationDelay: "150ms" }}
            />
          </div>
          <span className="text-center text-[10px] leading-tight text-ink-soft">
            Typical
            <br />
            agency
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-16 w-10 items-end overflow-hidden rounded-md bg-surface-border/50 sm:h-24">
            <div
              className="w-full animate-grow-bar rounded-md bg-primary"
              style={{ height: "32%", animationDelay: "350ms" }}
            />
          </div>
          <span className="text-center text-[10px] font-semibold leading-tight text-primary">
            Purple
            <br />
            Cow
          </span>
        </div>
        <div
          className="max-w-[7rem] text-xs text-ink-soft"
          style={{ animation: "fade-up 0.28s ease-out both", animationDelay: "220ms" }}
        >
          <span className="font-semibold text-ink">AED 0</span> hidden fees, ever
        </div>
      </div>
    ),
  },
  {
    title: "WhatsApp-First Support",
    eyebrow: "WhatsApp Support",
    description:
      "Reach a real person where you already are — typically within 5 minutes during business hours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.4A7.96 7.96 0 0 1 4 12z" />
      </svg>
    ),
    illustration: (
      <div className="space-y-2 py-1">
        <div
          className="max-w-[80%] rounded-2xl rounded-bl-sm bg-surface px-3 py-2 text-xs text-ink"
          style={{ animation: "fade-up 0.28s ease-out both", animationDelay: "60ms" }}
        >
          Hi, need help with my VAT filing 🙋
        </div>
        <div
          className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-xs text-white"
          style={{ animation: "fade-up 0.28s ease-out both", animationDelay: "160ms" }}
        >
          On it! Sending the checklist now ✅
        </div>
        <div
          className="flex items-center gap-1.5 pt-1 text-[11px] font-medium text-emerald-600"
          style={{ animation: "fade-up 0.28s ease-out both", animationDelay: "240ms" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Replied in 3 minutes
        </div>
      </div>
    ),
  },
];

export default function DifferentiatorsShowcase() {
  const [active, setActive] = useState(0);
  const count = SCENES.length;

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => setActive((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [count]);

  const scene = SCENES[active];

  return (
    <div
      className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/40"
    >
      <div className="flex items-center gap-1.5 px-4 pt-3 sm:px-5 sm:pt-4">
       <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
       <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
       <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>

      <div key={active} className="h-[17rem] overflow-hidden px-4 pb-3 pt-2 sm:min-h-[20rem] sm:h-auto sm:px-6 sm:pb-5 sm:pt-3">
        <div
          className="flex items-center gap-2"
          style={{ animation: "fade-up 0.25s ease-out both" }}
        >
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:h-3.5 [&_svg]:w-3.5 sm:h-8 sm:w-8 sm:[&_svg]:h-4 sm:[&_svg]:w-4">
            {scene.icon}
          </div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft sm:text-xs">
            {scene.eyebrow}
          </p>
        </div>

        <div className="mt-2 sm:mt-5">{scene.illustration}</div>

        <div
          className="mt-3 border-t border-surface-border pt-2 sm:mt-6 sm:pt-4"
          style={{ animation: "fade-up 0.28s ease-out both", animationDelay: "260ms" }}
        >
          <h3 className="text-sm font-semibold text-ink">{scene.title}</h3>
          <p className="mt-1 text-[11px] leading-snug text-ink-soft sm:mt-1.5 sm:text-xs sm:leading-relaxed">{scene.description}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 pb-3 sm:pb-5">
        {SCENES.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${s.title}`}
            aria-current={i === active}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === active ? "w-8 bg-primary" : "w-1.5 bg-surface-border hover:bg-primary/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
