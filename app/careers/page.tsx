import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { faqPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const TITLE = "Careers at Purple Cow | Join Our UAE Business Setup & Accounting Team";
const DESCRIPTION =
  "Purple Cow is hiring company formation specialists, accountants, and PRO specialists in Dubai. See open roles and what it's like to work here.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/careers" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/careers",
    images: [{ url: "/images/dubai-skyline.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/dubai-skyline.png"],
  },
};

const BREADCRUMB_ITEMS = [{ label: "Home", href: "/" }, { label: "Careers" }];

const STATS = [
  { value: "500+", label: "Companies formed" },
  { value: "20+", label: "Nationalities on our client roster" },
  { value: "10+", label: "Years combined expertise" },
  { value: "3", label: "Jurisdictions we work across daily" },
];

const CULTURE = [
  {
    title: "Ownership from day one",
    description:
      "No multi-year ladder before you're trusted with real client work — you own cases and conversations early.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 15l6-6M8 7l1.5-1.5a3.5 3.5 0 0 1 5 5L13 12M16 17l-1.5 1.5a3.5 3.5 0 0 1-5-5L11 12" />
      </svg>
    ),
  },
  {
    title: "Work directly with clients",
    description:
      "You'll talk to founders on WhatsApp and calls, not just push tickets through a queue — the work stays real.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.4A7.96 7.96 0 0 1 4 12z" />
      </svg>
    ),
  },
  {
    title: "Flat structure, real autonomy",
    description:
      "Small teams, short decision chains — good ideas ship without waiting on layers of sign-off.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
      </svg>
    ),
  },
  {
    title: "Learn across three jurisdictions",
    description:
      "Mainland, Free Zone, and Offshore work sits side by side, so you build breadth most formation-only agents never touch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const BENEFITS = [
  {
    title: "Visa & Emirates ID sponsorship",
    description: "Full-time roles include UAE residence visa and Emirates ID sponsorship.",
  },
  {
    title: "Health insurance",
    description: "Medical coverage from day one, in line with UAE labour law requirements.",
  },
  {
    title: "Growth & training",
    description: "Cross-training across formation, accounting, and PRO work — not siloed by department.",
  },
  {
    title: "Dubai office, real flexibility",
    description: "Based in Dubai with flexibility around hours for roles that don't require a fixed desk.",
  },
  {
    title: "Competitive, transparent pay",
    description: "The same clarity we promise clients on pricing applies to how we talk about compensation.",
  },
  {
    title: "A team that actually talks",
    description: "Small enough that you'll know everyone's name — and what they're working on.",
  },
];

const ROLES = [
  {
    title: "Company Formation Specialist",
    department: "Business Setup",
    type: "Full-time · Dubai",
    description:
      "Guide founders through Mainland, Free Zone, and Offshore formation — from first consultation to license issuance.",
  },
  {
    title: "Accountant / Tax Advisor",
    department: "Accounting & Tax",
    type: "Full-time · Dubai",
    description:
      "Own bookkeeping, VAT, and Corporate Tax filings for a portfolio of UAE clients across multiple industries.",
  },
  {
    title: "PRO & Visa Specialist",
    department: "Corporate Services",
    type: "Full-time · Dubai",
    description:
      "Handle GDRFA, MOHRE, and ICP applications daily — visas, Emirates IDs, and establishment card renewals.",
  },
  {
    title: "Client Success Associate",
    department: "Client Success",
    type: "Full-time · Dubai",
    description:
      "Be the WhatsApp-first point of contact for clients, coordinating across formation, banking, and compliance teams.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Apply",
    description: "Send your CV for the role you're interested in — or email us if nothing listed fits yet.",
  },
  {
    step: "02",
    title: "Intro call",
    description: "A short call to understand your background and what you're looking for next.",
  },
  {
    step: "03",
    title: "Working conversation",
    description: "A practical discussion around real scenarios from the role — no trick questions.",
  },
  {
    step: "04",
    title: "Offer",
    description: "If it's a fit on both sides, we move quickly — no weeks-long waiting for a decision.",
  },
];

const FAQS = [
  {
    q: "Do you sponsor visas for full-time employees?",
    a: "Yes. Full-time roles include UAE residence visa and Emirates ID sponsorship as standard.",
  },
  {
    q: "Can I work remotely?",
    a: "Most roles are based out of our Dubai office, since client and government-facing work benefits from being in person. Some flexibility on hours is possible depending on the role.",
  },
  {
    q: "Do you hire people without UAE experience?",
    a: "Yes — for accounting and client-facing roles especially, relevant experience elsewhere matters more than prior UAE-specific exposure, which we train for on the job.",
  },
  {
    q: "What if there's no open role that matches my background?",
    a: "Send your CV anyway. We keep strong applications on file and reach out when a matching role opens up.",
  },
];

export default function CareersPage() {
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
                We&apos;re hiring
              </span>
              <h1 className="animate-fade-up text-balance mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-white [animation-delay:120ms] sm:text-5xl lg:text-[3.25rem]">
                Help founders build companies that{" "}
                <span className="text-primary-light">actually stay compliant</span>
              </h1>
              <p className="animate-fade-up text-balance mx-auto mt-6 max-w-2xl text-lg text-white/70 [animation-delay:240ms]">
                We&apos;re a small, Dubai-based team combining company formation with
                real accounting expertise. If you&apos;d rather own client relationships
                than push tickets, this is that kind of place.
              </p>
              <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:320ms]">
                <a
                  href="#roles"
                  className="w-full rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light sm:w-auto"
                >
                  View Open Roles
                </a>
                <a
                  href="mailto:hello@purplecow.ae?subject=Career%20enquiry"
                  className="w-full rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
                >
                  Email Your CV
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

        {/* Culture */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  What it&apos;s like to work here
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  We hire people who&apos;d rather do the work well than perform busyness.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {CULTURE.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <div className="h-full rounded-2xl border border-surface-border bg-white p-6 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:h-5 [&_svg]:w-5">
                      {c.icon}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Benefits
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map((b, i) => (
                <Reveal key={b.title} delay={i * 70}>
                  <div className="h-full rounded-2xl border border-surface-border bg-white p-6 shadow-sm">
                    <h3 className="text-base font-semibold text-ink">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Open roles */}
        <section id="roles" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Open <span className="text-primary">roles</span>
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  Don&apos;t see the right fit? Email us anyway — we keep strong
                  applications on file.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {ROLES.map((r, i) => (
                <Reveal key={r.title} delay={i * 80}>
                  <div className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-8 shadow-sm">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {r.department}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-ink">{r.title}</h3>
                    <p className="mt-1 text-xs font-medium text-ink-soft">{r.type}</p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{r.description}</p>
                    <a
                      href={`mailto:hello@purplecow.ae?subject=${encodeURIComponent(`Application: ${r.title}`)}`}
                      className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary"
                    >
                      Apply for this role <span aria-hidden>&rarr;</span>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Hiring process */}
        <section className="relative overflow-hidden bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  Our hiring process
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  Four steps, usually done within two weeks.
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

        {/* Closing CTA */}
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Don&apos;t see your role listed?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-lg text-white/70">
              Send us your CV anyway. We&apos;d rather hear from good people early
              than miss them because the timing didn&apos;t line up with an open req.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:hello@purplecow.ae?subject=Career%20enquiry"
                className="w-full rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light sm:w-auto"
              >
                Email Your CV
              </a>
              <a
                href="https://wa.me/"
                className="w-full rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
