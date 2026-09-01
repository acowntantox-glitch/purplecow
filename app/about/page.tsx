import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { faqPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const TITLE = "About Purple Cow | Business Setup & Accounting in the UAE";
const DESCRIPTION =
  "Purple Cow is a digital-first business setup and accounting partner in the UAE — one team handling formation, licensing, and compliance, so nothing falls through the cracks after your license is issued.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
    images: [{ url: "/images/dubai-skyline.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/dubai-skyline.png"],
  },
};

const BREADCRUMB_ITEMS = [{ label: "Home", href: "/" }, { label: "About" }];

const STATS = [
  { value: "500+", label: "Companies formed" },
  { value: "100%", label: "Transparent pricing" },
  { value: "<5 min", label: "WhatsApp response" },
  { value: "10+", label: "Years combined expertise" },
];

const VALUES = [
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
    title: "One team, start to finish",
    description:
      "Formation, banking, visas, and accounting sit with the same team — not handed off between departments or outsourced once the license is issued.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 15l6-6M8 7l1.5-1.5a3.5 3.5 0 0 1 5 5L13 12M16 17l-1.5 1.5a3.5 3.5 0 0 1-5-5L11 12" />
      </svg>
    ),
  },
  {
    title: "Compliance from day one",
    description:
      "We think about your VAT position, corporate tax, and bookkeeping before your license is issued, not months after, when the gaps are expensive to fix.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M9 12h6M9 16h6M9 8h3" />
      </svg>
    ),
  },
  {
    title: "Answer like a person, not a queue",
    description:
      "Reach a dedicated account manager on WhatsApp, typically within five minutes during business hours — not a support ticket that goes quiet.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.4A7.96 7.96 0 0 1 4 12z" />
      </svg>
    ),
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Free consultation",
    description:
      "We learn how your business actually operates before recommending a jurisdiction, license, or visa package.",
  },
  {
    step: "02",
    title: "Formation & licensing",
    description:
      "We prepare and file your trade license application — translations, approvals, and paperwork handled end to end.",
  },
  {
    step: "03",
    title: "Banking & visas",
    description:
      "Your corporate bank account is opened and investor or employee visas are processed, so you can start operating.",
  },
  {
    step: "04",
    title: "Ongoing compliance",
    description:
      "Bookkeeping, VAT and corporate tax filing, renewals, and PRO services — the relationship continues after licensing, not stop there.",
  },
];

const TEAM = [
  {
    title: "Company formation specialists",
    description:
      "Licensed to structure and file across Mainland, Free Zone, and Offshore jurisdictions, matching the entity to how you actually trade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V9l6-4 6 4v12" />
        <path d="M14 21v-7l6 3v4" />
        <path d="M9 21v-4M4 21h16" />
      </svg>
    ),
  },
  {
    title: "In-house accountants & tax advisors",
    description:
      "Qualified accountants handle your bookkeeping, VAT, and Corporate Tax filings directly — never outsourced to a third party after formation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 8h8M8 12h5M8 16h8" />
      </svg>
    ),
  },
  {
    title: "PRO & visa specialists",
    description:
      "The team that deals with GDRFA, MOHRE, and the ICP daily — so your visa and Emirates ID applications don't stall on avoidable errors.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 21c0-3.5 3-6 7-6s7 2.5 7 6" />
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "Is Purple Cow a licensed UAE company formation provider?",
    a: "Yes. We're licensed to structure and file company formations across Mainland, Free Zone, and Offshore jurisdictions in the UAE, and our accounting team operates under the same compliance standards we help our clients meet.",
  },
  {
    q: "Where is Purple Cow based, and can you work with clients outside the UAE?",
    a: "We're based in Dubai and work with founders across 20+ nationalities, many of whom manage their entire setup remotely. Document submission and license issuance can usually be handled without a UAE visit — some steps, like visa biometrics or opening a bank account, typically require one.",
  },
  {
    q: "Do you only work with certain business sizes or industries?",
    a: "No. We work with first-time founders forming a single-shareholder Free Zone company as often as we work with established businesses expanding into the UAE with multiple visas and a Mainland presence.",
  },
  {
    q: "What happens after my license is issued?",
    a: "That's where most formation agents stop. We continue as your accountants — bookkeeping, VAT and Corporate Tax filing, renewals, and PRO services for visas — so your company stays compliant long after day one.",
  },
  {
    q: "How is Purple Cow different from a typical business setup agent?",
    a: "Most agents are formation-first: they're paid on the license and have little reason to think past it. We built the accounting side in from the start, so the same team that structures your company also keeps it compliant — one point of contact, not a handoff.",
  },
];

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-primary">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

const STORY_POINTS = [
  "Company formation and licensing across Mainland, Free Zone, and Offshore",
  "In-house bookkeeping, VAT, and Corporate Tax — not outsourced after formation",
  "Corporate banking support and PRO services for visas, under one roof",
];

export default function AboutPage() {
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
                About Purple Cow
              </span>
              <h1 className="animate-fade-up text-balance mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-white [animation-delay:120ms] sm:text-5xl lg:text-[3.25rem]">
                Formation and accounting, from{" "}
                <span className="text-primary-light">one team that stays</span>
              </h1>
              <p className="animate-fade-up text-balance mx-auto mt-6 max-w-2xl text-lg text-white/70 [animation-delay:240ms]">
                Most business setup companies hand you a trade license and move on.
                Purple Cow stays — as your accountants, your PRO, and the team you
                call when something doesn&apos;t add up.
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

        {/* Our story */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-1.5 text-xs font-medium text-ink-soft">
                  Why we exist
                </span>
                <h2 className="text-balance mt-6 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Company formation is easy.{" "}
                  <span className="text-primary">Staying compliant is where most businesses struggle.</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink-soft">
                  Most UAE business setup companies are formation agents first. Once your
                  license is issued and their commission is paid, ongoing compliance
                  becomes an afterthought — outsourced to whichever bookkeeper you find
                  next, often after a VAT deadline has already been missed.
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  We built Purple Cow the other way around. Company formation specialists
                  and accountants work from the same desk, so your VAT registration,
                  Corporate Tax position, and bank account are considered before you sign
                  your license application — not scrambled together after.
                </p>
                <ul className="mt-6 space-y-3">
                  {STORY_POINTS.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      {CHECK_ICON}
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={150}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                  <Image
                    src="/images/dubai-skyline.png"
                    alt="Dubai skyline"
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  What we stand for
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  Four principles that shape how we work with every client, regardless
                  of company size.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-surface-border bg-white p-6 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:h-5 [&_svg]:w-5">
                      {v.icon}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  How we work with you
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  Four stages, one team accountable for all of them — including the
                  ones after your license is issued.
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

        {/* Team */}
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Who&apos;s behind the work
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  Three functions, working as one team instead of three separate
                  handoffs.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {TEAM.map((t, i) => (
                <Reveal key={t.title} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-8 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:h-6 [&_svg]:w-6">
                      {t.icon}
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-ink">{t.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 sm:py-24">
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
