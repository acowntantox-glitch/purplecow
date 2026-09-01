import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { faqPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const TITLE = "Business Setup in the UAE | Purple Cow";
const DESCRIPTION =
  "Mainland, Free Zone, or Offshore — Purple Cow structures and licenses your UAE company with transparent pricing and real accountants from day one.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/business-setup" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/business-setup",
    images: [{ url: "/images/service/business setup.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/service/business setup.jpg"],
  },
};

const BREADCRUMB_ITEMS = [{ label: "Home", href: "/" }, { label: "Business Setup" }];

const STATS = [
  { value: "3", label: "Jurisdictions — Mainland, Free Zone & Offshore" },
  { value: "40+", label: "Free zones licensed" },
  { value: "100%", label: "Foreign ownership available" },
  { value: "<5 min", label: "WhatsApp response" },
];

const JURISDICTIONS = [
  {
    key: "mainland",
    slug: "mainland",
    title: "Mainland",
    tagline: "Trade anywhere in the UAE",
    bestFor:
      "Businesses trading directly within the local UAE market, or bidding on government contracts.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V9l6-4 6 4v12" />
        <path d="M14 21v-7l6 3v4" />
        <path d="M9 21v-4M4 21h16" />
      </svg>
    ),
    benefits: [
      "Trade freely across the UAE with no restrictions",
      "No requirement to operate inside a free zone",
      "Eligible to bid on government contracts",
      "Widest range of licensable business activities",
    ],
  },
  {
    key: "freezone",
    slug: "free-zone",
    title: "Free Zone",
    tagline: "100% foreign ownership, zone-based",
    bestFor:
      "International trading, consultancy, and e-commerce businesses that don't need a mainland presence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 3 8l9 5 9-5-9-5z" />
        <path d="M3 16l9 5 9-5M3 12l9 5 9-5" />
      </svg>
    ),
    benefits: [
      "100% foreign ownership, guaranteed",
      "Choose from 40+ UAE free zones by industry",
      "Streamlined, fast-track licensing",
      "Visa quota included with your license",
    ],
  },
  {
    key: "offshore",
    slug: "offshore",
    title: "Offshore",
    tagline: "Hold assets, structure internationally",
    bestFor:
      "Holding companies, asset protection, and international structuring — no local office needed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
      </svg>
    ),
    benefits: [
      "No physical office required in the UAE",
      "100% foreign ownership with full confidentiality",
      "Hold assets and open international bank accounts",
      "No UAE residency requirement for shareholders",
    ],
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Free consultation",
    description:
      "We map your business activity to the right jurisdiction, license, and visa package — no jargon, no pressure.",
  },
  {
    step: "02",
    title: "Documents & application",
    description:
      "We prepare and file your trade license application, handling translations, approvals, and paperwork end to end.",
  },
  {
    step: "03",
    title: "License issued",
    description:
      "Your trade license is issued and your company becomes a fully licensed legal entity in the UAE.",
  },
  {
    step: "04",
    title: "Bank account & visas",
    description:
      "We open your corporate bank account and process investor and employee visas, so you can start operating.",
  },
];

const WHY = [
  {
    title: "One partner, start to finish",
    description:
      "Formation, licensing, bank account, and visas handled by one team — not handed off between departments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 15l6-6M8 7l1.5-1.5a3.5 3.5 0 0 1 5 5L13 12M16 17l-1.5 1.5a3.5 3.5 0 0 1-5-5L11 12" />
      </svg>
    ),
  },
  {
    title: "Real accountants, not just formation agents",
    description:
      "Your books and filings are ready to go from day one, handled by accountants who understand UAE compliance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M9 12h6M9 16h6M9 8h3" />
      </svg>
    ),
  },
  {
    title: "Transparent, flat-fee pricing",
    description:
      "No hidden administrative fees or surprise costs — your setup cost is shown before you commit to anything.",
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
      "Reach a dedicated account manager where you already are, typically within 5 minutes during business hours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.4A7.96 7.96 0 0 1 4 12z" />
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "Can I own 100% of my company in the UAE?",
    a: "Yes. Every free zone company allows 100% foreign ownership, and most mainland business activities were opened to 100% foreign ownership under the UAE's 2021 reforms — we'll confirm this for your specific activity during your consultation.",
  },
  {
    q: "Should I choose Mainland or Free Zone?",
    a: "It depends on where you plan to trade. Mainland gives you unrestricted access to the local UAE market and government contracts. Free Zone is typically simpler and faster to set up if your business is international, consultancy, or e-commerce focused. We'll recommend the right fit on your free consultation.",
  },
  {
    q: "How long does company formation take?",
    a: "Many free zone licenses can be issued within a few working days once your documents are ready. Mainland timelines depend on your activity and the approvals it requires — we'll give you a clear timeline upfront.",
  },
  {
    q: "Do I need to be in the UAE to set up my company?",
    a: "Not always. Much of the process — including document submission and license issuance — can be handled remotely. Some steps, like visa biometrics or opening a bank account, typically require a visit.",
  },
  {
    q: "Will I need a physical office?",
    a: "Mainland companies generally require a registered office or Ejari. Most free zones offer flexi-desk options that satisfy licensing requirements without a full-time office.",
  },
  {
    q: "What does Purple Cow handle after my license is issued?",
    a: "Bookkeeping, VAT and corporate tax filing, renewals, and PRO services for visas — so your company stays compliant long after the formation itself is done.",
  },
];

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-primary">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

export default function BusinessSetupPage() {
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
                Business Setup
              </span>
              <h1 className="animate-fade-up text-balance mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-white [animation-delay:120ms] sm:text-5xl lg:text-[3.25rem]">
                Launch your UAE company the{" "}
                <span className="text-primary-light">clear-headed way</span>
              </h1>
              <p className="animate-fade-up text-balance mx-auto mt-6 max-w-2xl text-base text-white/70 [animation-delay:240ms] sm:text-lg">
                Mainland, Free Zone, or Offshore — we structure your company around your
                business, handle the paperwork end to end, and stay on as your accountants
                once you&apos;re licensed.
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

        {/* Jurisdictions */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-4xl">
                  Three jurisdictions, <span className="text-primary">one clear recommendation</span>
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  We don&apos;t steer you toward whichever jurisdiction pays us more —
                  we match you to the one that actually fits your business.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {JURISDICTIONS.map((j, i) => (
                <Reveal key={j.key} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-8 shadow-xl shadow-black/5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:h-6 [&_svg]:w-6">
                      {j.icon}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-ink">{j.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{j.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">{j.bestFor}</p>
                    <ul className="mt-6 space-y-3">
                      {j.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-ink-soft">
                          {CHECK_ICON}
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/business-setup/${j.slug}`}
                      className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                      Learn more about {j.title} <span aria-hidden>&rarr;</span>
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
                <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-4xl">
                  From consultation to <span className="text-primary">company in hand</span>
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
                <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-4xl">
                  Why founders set up with <span className="text-primary">Purple Cow</span>
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
        <section id="faq" className="scroll-mt-24 bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <Reveal>
              <div className="text-center">
                <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-4xl">
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
