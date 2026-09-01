import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import DifferentiatorsShowcase from "@/components/DifferentiatorsShowcase";
import { faqPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const TITLE = "Why Purple Cow | UAE Business Setup & Accounting, One Team";
const DESCRIPTION =
  "See what sets Purple Cow apart from a typical UAE formation agency — transparent pricing, in-house accountants, a dedicated account manager, and WhatsApp-first support.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/why-purple-cow" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/why-purple-cow",
    images: [{ url: "/images/dubai-skyline.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/dubai-skyline.png"],
  },
};

const BREADCRUMB_ITEMS = [{ label: "Home", href: "/" }, { label: "Why Purple Cow" }];

const STATS = [
  { value: "500+", label: "Companies formed" },
  { value: "100%", label: "Transparent pricing" },
  { value: "<5 min", label: "WhatsApp response" },
  { value: "0", label: "Hidden admin fees" },
];

const COMPARISON = [
  {
    category: "Pricing",
    typical: "Quoted low, then admin fees appear after you've committed",
    purpleCow: "One upfront number — the price quoted is the price you pay",
  },
  {
    category: "After the license is issued",
    typical: "Relationship ends once the license is filed",
    purpleCow: "We continue as your accountants — bookkeeping, VAT, and tax filing",
  },
  {
    category: "Accounting & tax",
    typical: "Outsourced to a third-party bookkeeper you have to find yourself",
    purpleCow: "In-house accountants on the same team, from day one",
  },
  {
    category: "Support",
    typical: "Support tickets and a rotating queue that starts from zero each time",
    purpleCow: "A dedicated account manager reachable on WhatsApp",
  },
  {
    category: "Compliance",
    typical: "You find out about a missed deadline after the fine arrives",
    purpleCow: "Renewal and filing deadlines tracked and flagged before they're due",
  },
];

const DIFFERENTIATORS = [
  {
    title: "One team, start to finish",
    description:
      "Formation, banking, visas, and accounting sit with the same team — not handed off between departments after your license is issued.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 15l6-6M8 7l1.5-1.5a3.5 3.5 0 0 1 5 5L13 12M16 17l-1.5 1.5a3.5 3.5 0 0 1-5-5L11 12" />
      </svg>
    ),
  },
  {
    title: "Say the true cost upfront",
    description:
      "The setup cost we quote is the setup cost you pay — no administrative add-ons revealed after you've committed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.5 3H5a2 2 0 0 0-2 2v7.5a2 2 0 0 0 .586 1.414l8.5 8.5a2 2 0 0 0 2.828 0l7.5-7.5a2 2 0 0 0 0-2.828l-8.5-8.5A2 2 0 0 0 12.5 3z" />
        <circle cx="8" cy="8" r="1.25" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Real accountants, in-house",
    description:
      "Qualified accountants handle your bookkeeping, VAT, and Corporate Tax filings directly — never outsourced to a third party.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 8h8M8 12h5M8 16h8" />
      </svg>
    ),
  },
  {
    title: "A dedicated account manager",
    description:
      "One point of contact for every request, not a rotating support queue that starts from zero each time.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4.5 20c1.5-4 5-5.5 7.5-5.5s6 1.5 7.5 5.5" />
      </svg>
    ),
  },
  {
    title: "Nothing falls through the cracks",
    description:
      "Every license, card, and visa renewal date is tracked, with alerts sent well ahead of the deadline.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4M8.5 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "WhatsApp-first support",
    description:
      "Reach a real person where you already are, typically within five minutes during business hours — not a support ticket that goes quiet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.4A7.96 7.96 0 0 1 4 12z" />
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "How is Purple Cow different from a typical business setup agent?",
    a: "Most agents are formation-first: they're paid on the license and have little reason to think past it. We built the accounting side in from the start, so the same team that structures your company also keeps it compliant — one point of contact, not a handoff.",
  },
  {
    q: "Is the setup cost really the final cost?",
    a: "Yes. The price we quote for formation is the price you pay — no administrative fees revealed after you've committed to the process.",
  },
  {
    q: "What happens after my license is issued?",
    a: "That's where most formation agents stop. We continue as your accountants — bookkeeping, VAT and Corporate Tax filing, renewals, and PRO services — so your company stays compliant long after day one.",
  },
  {
    q: "Do I get a dedicated point of contact, or a support queue?",
    a: "A dedicated account manager, reachable on WhatsApp, typically responds within five minutes during business hours — you're not starting over with someone new each time you reach out.",
  },
  {
    q: "Do you only work with certain business sizes or industries?",
    a: "No. We work with first-time founders forming a single-shareholder Free Zone company as often as we work with established businesses expanding into the UAE with multiple visas and a Mainland presence.",
  },
];

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-primary">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

const CROSS_ICON = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-ink-soft/50">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export default function WhyPurpleCowPage() {
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
                Why Purple Cow
              </span>
              <h1 className="animate-fade-up text-balance mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-white [animation-delay:120ms] sm:text-5xl lg:text-[3.25rem]">
                Formation agents disappear after your license.{" "}
                <span className="text-primary-light">We don&apos;t.</span>
              </h1>
              <p className="animate-fade-up text-balance mx-auto mt-6 max-w-2xl text-lg text-white/70 [animation-delay:240ms]">
                We treat accounting as the core of the business, not an upsell
                after formation — one team for setup, banking, visas, and the
                compliance work that comes after.
              </p>
              <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:320ms]">
                <a
                  href="/book-consultation"
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

        {/* Showcase */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-1.5 text-xs font-medium text-ink-soft">
                  How it feels to work with us
                </span>
                <h2 className="text-balance mt-6 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Built to replace{" "}
                  <span className="text-primary">email threads and lost paperwork</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink-soft">
                  A client portal to track filings and documents, a dedicated
                  account manager who already knows your setup, transparent
                  pricing shown before you commit, and support that answers on
                  WhatsApp instead of a ticket queue.
                </p>
              </Reveal>

              <Reveal delay={150}>
                <DifferentiatorsShowcase />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Purple Cow vs. a typical{" "}
                  <span className="text-primary">formation agency</span>
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  The differences that matter most show up after your license is
                  issued, not before.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-14 overflow-hidden rounded-2xl border border-surface-border bg-white shadow-sm">
                <div className="grid grid-cols-1 divide-y divide-surface-border">
                  <div className="hidden grid-cols-[1fr_1.4fr_1.4fr] gap-4 bg-surface px-6 py-4 sm:grid">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      &nbsp;
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
                      Typical agency
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                      Purple Cow
                    </span>
                  </div>
                  {COMPARISON.map((row) => (
                    <div
                      key={row.category}
                      className="grid grid-cols-1 gap-3 px-6 py-6 sm:grid-cols-[1fr_1.4fr_1.4fr] sm:gap-4 sm:py-5"
                    >
                      <span className="text-sm font-semibold text-ink">{row.category}</span>
                      <span className="flex items-start gap-2 text-sm text-ink-soft">
                        {CROSS_ICON}
                        {row.typical}
                      </span>
                      <span className="flex items-start gap-2 text-sm text-ink">
                        {CHECK_ICON}
                        {row.purpleCow}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Differentiators */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  What that looks like{" "}
                  <span className="text-primary">day to day</span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {DIFFERENTIATORS.map((d, i) => (
                <Reveal key={d.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-surface-border bg-white p-6 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:h-5 [&_svg]:w-5">
                      {d.icon}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d.description}</p>
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
