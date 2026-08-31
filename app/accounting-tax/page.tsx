import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { faqPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const TITLE = "Accounting & Tax in the UAE | Purple Cow";
const DESCRIPTION =
  "Real accountants, not a form-filling service. Bookkeeping, VAT filing, and Corporate Tax handled by people who understand UAE compliance.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/accounting-tax" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/accounting-tax",
    images: [{ url: "/images/service/tax.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/service/tax.jpg"],
  },
};

const BREADCRUMB_ITEMS = [{ label: "Home", href: "/" }, { label: "Accounting & Tax" }];

const STATS = [
  { value: "3", label: "Core services — Bookkeeping, VAT & Corporate Tax" },
  { value: "100%", label: "Transparent, flat-fee pricing" },
  { value: "0", label: "Hidden admin fees" },
  { value: "<5 min", label: "WhatsApp response" },
];

const SERVICES = [
  {
    key: "bookkeeping",
    title: "Bookkeeping",
    tagline: "Books that are always audit-ready",
    bestFor:
      "Companies that want every invoice and expense reconciled by a real accountant, not sorted out in a scramble at year end.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M9 12h6M9 16h6M9 8h3" />
      </svg>
    ),
    benefits: [
      "Monthly reconciliation & bank matching",
      "Invoices and expenses logged and categorized",
      "Financial statements ready on demand",
      "IFRS-aligned bookkeeping standards",
    ],
  },
  {
    key: "vat",
    title: "VAT Filing",
    tagline: "Quarterly VAT, filed before the deadline",
    bestFor:
      "Companies that need VAT returns prepared, checked, and submitted to the FTA — with input tax reviewed before it's ever filed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.5 3H5a2 2 0 0 0-2 2v7.5a2 2 0 0 0 .586 1.414l8.5 8.5a2 2 0 0 0 2.828 0l7.5-7.5a2 2 0 0 0 0-2.828l-8.5-8.5A2 2 0 0 0 12.5 3z" />
        <circle cx="8" cy="8" r="1.25" fill="currentColor" stroke="none" />
      </svg>
    ),
    benefits: [
      "Quarterly VAT return preparation & filing",
      "Input tax verification",
      "FTA submission & correspondence handled",
      "VAT registration for new companies",
    ],
  },
  {
    key: "corptax",
    title: "Corporate Tax",
    tagline: "Handled by people who understand it",
    bestFor:
      "Companies that want registration, taxable income calculation, and CT returns handled by accountants, not a checklist.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
    benefits: [
      "Corporate Tax registration",
      "Taxable income calculation",
      "CT return preparation & filing",
      "Exemption & small business relief assessment",
    ],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Books review",
    description:
      "We assess your current bookkeeping, VAT status, and CT registration to spot gaps early.",
  },
  {
    step: "02",
    title: "Monthly bookkeeping",
    description:
      "Your invoices and expenses are reconciled every month, not just before a deadline.",
  },
  {
    step: "03",
    title: "Filings prepared",
    description:
      "VAT and Corporate Tax returns are prepared and reviewed before anything is submitted.",
  },
  {
    step: "04",
    title: "Filed & confirmed",
    description:
      "Returns are submitted to the FTA and you get confirmation, not just a \"we sent it.\"",
  },
];

const WHY = [
  {
    title: "Real accountants, not a checklist",
    description:
      "Your books and filings are handled by accountants who understand UAE compliance, not a generic template.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M9 12h6M9 16h6M9 8h3" />
      </svg>
    ),
  },
  {
    title: "Every deadline tracked",
    description:
      "VAT quarters, CT returns, and renewals are tracked on your behalf, so nothing is filed late.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4M8.5 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Transparent, flat-fee pricing",
    description:
      "No hidden administrative fees or surprise costs — your fee is shown before you commit to anything.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.5 3H5a2 2 0 0 0-2 2v7.5a2 2 0 0 0 .586 1.414l8.5 8.5a2 2 0 0 0 2.828 0l7.5-7.5a2 2 0 0 0 0-2.828l-8.5-8.5A2 2 0 0 0 12.5 3z" />
        <circle cx="8" cy="8" r="1.25" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "WhatsApp-first support",
    description:
      "Reach a dedicated accountant where you already are, typically within 5 minutes during business hours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.4A7.96 7.96 0 0 1 4 12z" />
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "Do I need to register for VAT?",
    a: "VAT registration is mandatory once your taxable turnover exceeds AED 375,000 in a 12-month period, and voluntary registration is available above AED 187,500. We'll confirm your exact position based on your business.",
  },
  {
    q: "What's the UAE Corporate Tax rate?",
    a: "0% on profits up to AED 375,000, and 9% on profits above that, for most businesses. Some qualifying free zone entities may be eligible for 0% on qualifying income — we'll assess your eligibility.",
  },
  {
    q: "How often do I need to file VAT?",
    a: "Most businesses file quarterly, though some are classified as monthly filers by the FTA depending on their turnover. We'll confirm your filing frequency during onboarding.",
  },
  {
    q: "Can you take over my existing bookkeeping?",
    a: "Yes. We can pick up your books wherever they currently stand, including mid-year, and bring them up to date.",
  },
  {
    q: "Will you deal with the FTA directly if there's an audit or query?",
    a: "Yes. Handling FTA correspondence and audit support on your behalf is part of the engagement, not a separate add-on.",
  },
];

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-primary">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

export default function AccountingTaxPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(BREADCRUMB_ITEMS)} />
      <JsonLd data={faqPageJsonLd(FAQS)} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
            <Breadcrumb items={BREADCRUMB_ITEMS} />
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                Accounting & Tax
              </span>
              <h1 className="animate-fade-up text-balance mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-white [animation-delay:120ms] sm:text-5xl lg:text-[3.25rem]">
                Real accountants,{" "}
                <span className="text-primary-light">not a form-filling service</span>
              </h1>
              <p className="animate-fade-up text-balance mx-auto mt-6 max-w-2xl text-lg text-white/70 [animation-delay:240ms]">
                Bookkeeping, VAT filing, and Corporate Tax — your books and your filings,
                handled by people who understand UAE compliance, not a template.
              </p>
              <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:320ms]">
                <a
                  href="/#contact"
                  className="w-full rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light sm:w-auto"
                >
                  Book Free Consultation
                </a>
                <a
                  href="https://wa.me/"
                  className="w-full rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dt className="text-2xl font-semibold text-white sm:text-3xl">
                    <Counter value={stat.value} />
                  </dt>
                  <dd className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Services breakdown */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Everything your books and filings{" "}
                  <span className="text-primary">actually need</span>
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  Three services, one team of accountants — not a formation agent
                  who disappears once your license is issued.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <Reveal key={s.key} delay={i * 100}>
                  <div
                    id={s.key}
                    className="flex h-full scroll-mt-28 flex-col rounded-2xl border border-surface-border bg-white p-8 shadow-xl shadow-black/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:h-6 [&_svg]:w-6">
                      {s.icon}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-ink">{s.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{s.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">{s.bestFor}</p>
                    <ul className="mt-6 space-y-3">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-ink-soft">
                          {CHECK_ICON}
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/#contact"
                      className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                      Ask about this service <span aria-hidden>&rarr;</span>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative overflow-hidden bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  From messy books to <span className="text-primary">filed & confirmed</span>
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  Four steps, one team handling all of them.
                </p>
              </div>
            </Reveal>

            <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div
                className="pointer-events-none absolute inset-x-0 top-6 hidden h-px bg-surface-border lg:block"
                aria-hidden
              />
              {PROCESS.map((p, i) => (
                <Reveal key={p.step} delay={i * 100}>
                  <div className="relative">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg shadow-primary/30">
                      {p.step}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Purple Cow */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Why founders trust their books to{" "}
                  <span className="text-primary">Purple Cow</span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-surface-border bg-white p-6 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:h-5 [&_svg]:w-5">
                      {w.icon}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{w.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <Reveal>
              <div className="text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Frequently asked <span className="text-primary">questions</span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 space-y-3">
              {FAQS.map((f, i) => (
                <Reveal key={f.q} delay={i * 60}>
                  <details className="group rounded-2xl border border-surface-border bg-white px-6 py-5 open:shadow-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-open:rotate-45">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
