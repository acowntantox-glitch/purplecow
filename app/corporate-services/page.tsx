import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { faqPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const TITLE = "Corporate Services in the UAE | Purple Cow";
const DESCRIPTION =
  "Visas, corporate banking, renewals, and accounting & tax — Purple Cow handles the day-to-day corporate admin your UAE company needs, so nothing lapses on your watch.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/corporate-services" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/corporate-services",
    images: [{ url: "/images/service/corporate service.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/service/corporate service.jpg"],
  },
};

const BREADCRUMB_ITEMS = [{ label: "Home", href: "/" }, { label: "Corporate Services" }];

const STATS = [
  { value: "4", label: "Core services — PRO, Banking, Renewals & Tax" },
  { value: "40+", label: "Free zones supported" },
  { value: "100%", label: "Renewal deadlines tracked" },
  { value: "<5 min", label: "WhatsApp response" },
];

const SERVICES = [
  {
    key: "pro",
    title: "PRO & Visa Services",
    tagline: "Visas & Emirates ID, without the counters",
    bestFor:
      "Companies that need employment visas, Emirates ID, and labor cards processed without the back-and-forth at government counters.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="11" r="2" />
        <path d="M6 16c.6-1.6 1.9-2.5 3-2.5s2.4.9 3 2.5M14 10h4M14 14h4" />
      </svg>
    ),
    benefits: [
      "Employment & investor visa processing",
      "Emirates ID and labor card issuance",
      "Medical fitness test coordination",
      "Dependent & family visa support",
    ],
  },
  {
    key: "banking",
    title: "Corporate Banking",
    tagline: "A business bank account that actually opens",
    bestFor:
      "Companies that need a compliance file prepared correctly the first time — not another rejected bank application.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10 12 4l9 6" />
        <path d="M5 10v9M10 10v9M14 10v9M19 10v9M3 19h18" />
      </svg>
    ),
    benefits: [
      "Compliance file & KYC documentation prepared for you",
      "Direct relationships with major UAE banks",
      "Multi-currency account guidance",
      "Support through account activation",
    ],
  },
  {
    key: "renewals",
    title: "Renewals & Compliance",
    tagline: "Nothing lapses on your watch",
    bestFor:
      "Companies that want license, card, and membership renewals tracked and filed before they're due — not after a warning letter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4M8.5 15l2 2 4-4" />
      </svg>
    ),
    benefits: [
      "Trade license renewal tracking & filing",
      "Establishment card & labor file renewals",
      "Chamber of Commerce membership renewal",
      "Deadline alerts before anything lapses",
    ],
  },
  {
    key: "accounting",
    title: "Accounting & Tax",
    tagline: "Bookkeeping, VAT & Corporate Tax, in-house",
    bestFor:
      "Companies that want bookkeeping, VAT filing, and Corporate Tax handled by real accountants — not outsourced after formation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 8h8M8 12h5M8 16h8" />
      </svg>
    ),
    benefits: [
      "Monthly bookkeeping & reconciliation",
      "Quarterly VAT return preparation & filing",
      "Corporate Tax registration & filing",
      "Financial statements ready on demand",
    ],
    href: "/accounting-tax",
    cta: "Explore accounting & tax",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Onboarding & audit",
    description:
      "We review your current visas, bank status, and renewal dates to flag what's due and what's missing.",
  },
  {
    step: "02",
    title: "We handle the paperwork",
    description:
      "Applications, documents, and government submissions are prepared and filed on your behalf.",
  },
  {
    step: "03",
    title: "Approvals tracked",
    description:
      "We follow up with authorities and banks directly, so nothing sits idle in a queue.",
  },
  {
    step: "04",
    title: "Ongoing management",
    description:
      "Once set up, we track every renewal date and notify you well before anything is due.",
  },
];

const WHY = [
  {
    title: "One team for every request",
    description:
      "Visas, banking, and renewals handled by the same team that formed your company — no re-explaining your setup.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 15l6-6M8 7l1.5-1.5a3.5 3.5 0 0 1 5 5L13 12M16 17l-1.5 1.5a3.5 3.5 0 0 1-5-5L11 12" />
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
    q: "Can you open a corporate bank account for me?",
    a: "We prepare your compliance file and manage the relationship with the bank, but the bank makes the final approval decision. Our job is to maximize your chances and keep the process moving instead of stalling in back-and-forth requests.",
  },
  {
    q: "How many visas can my company sponsor?",
    a: "It depends on your license type, office space (Ejari), and jurisdiction. We'll confirm your exact visa quota as part of onboarding, and help you increase it if you need more.",
  },
  {
    q: "What happens if I miss a renewal?",
    a: "Late license, card, or membership renewals typically carry fines and can put your visas at risk. We track every deadline on your behalf so you're never caught out.",
  },
  {
    q: "Do you handle visa renewals for existing employees, not just new hires?",
    a: "Yes. We manage the full visa lifecycle — new applications, renewals, and cancellations — not just the initial formation paperwork.",
  },
  {
    q: "Can you help if my company is already set up elsewhere?",
    a: "Yes. We onboard existing UAE companies and take over their visas, banking relationship, and renewal tracking at any time — you don't need to have formed with us.",
  },
];

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-primary">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

export default function CorporateServicesPage() {
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
                Corporate Services
              </span>
              <h1 className="animate-fade-up text-balance mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-white [animation-delay:120ms] sm:text-5xl lg:text-[3.25rem]">
                Run your UAE company{" "}
                <span className="text-primary-light">without the admin grind</span>
              </h1>
              <p className="animate-fade-up text-balance mx-auto mt-6 max-w-2xl text-lg text-white/70 [animation-delay:240ms]">
                Visas, bank accounts, renewals, and accounting & tax — the day-to-day
                corporate admin every UAE company needs, managed by one team so you can
                focus on running the business.
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

        {/* Services breakdown */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Everything that keeps a company{" "}
                  <span className="text-primary">running day to day</span>
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  Four services, one team — instead of juggling a PRO agent, a bank
                  relationship manager, a renewal reminder, and a separate bookkeeper.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                      href={s.href ?? "/#contact"}
                      className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                      {s.cta ?? "Ask about this service"} <span aria-hidden>&rarr;</span>
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
                  How we take this <span className="text-primary">off your plate</span>
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
                  Why companies stay with{" "}
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
