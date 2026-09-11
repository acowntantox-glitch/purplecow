import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

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
      "No multi-year ladder before you're trusted with real client work: you own cases and conversations early.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 15l6-6M8 7l1.5-1.5a3.5 3.5 0 0 1 5 5L13 12M16 17l-1.5 1.5a3.5 3.5 0 0 1-5-5L11 12" />
      </svg>
    ),
  },
  {
    title: "Work directly with clients",
    description:
      "You'll talk to founders on WhatsApp and calls, not just push tickets through a queue: the work stays real.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.4A7.96 7.96 0 0 1 4 12z" />
      </svg>
    ),
  },
  {
    title: "Flat structure, real autonomy",
    description:
      "Small teams, short decision chains: good ideas ship without waiting on layers of sign-off.",
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

const ROLES = [
  {
    title: "Company Formation Specialist",
    department: "Business Setup",
    type: "Full-time · Dubai",
    description:
      "Guide founders through Mainland, Free Zone, and Offshore formation, from first consultation to license issuance.",
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
      "Handle GDRFA, MOHRE, and ICP applications daily: visas, Emirates IDs, and establishment card renewals.",
  },
  {
    title: "Client Success Associate",
    department: "Client Success",
    type: "Full-time · Dubai",
    description:
      "Be the WhatsApp-first point of contact for clients, coordinating across formation, banking, and compliance teams.",
  },
];

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(BREADCRUMB_ITEMS)} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <Breadcrumb items={BREADCRUMB_ITEMS} />
            </div>

            <div className="mt-10 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div className="flex flex-col justify-center px-6 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]">
                <span className="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                  We&apos;re hiring
                </span>
                <h1 className="animate-fade-up text-balance mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-white [animation-delay:60ms] sm:text-5xl lg:text-[3.25rem]">
                  Help founders build companies that{" "}
                  <span className="text-primary-light">actually stay compliant</span>
                </h1>
                <p className="animate-fade-up text-balance mt-6 max-w-xl text-base text-white/70 [animation-delay:120ms] sm:text-lg">
                  We&apos;re a small, Dubai-based team combining company formation with
                  real accounting expertise. If you&apos;d rather own client relationships
                  than push tickets, this is that kind of place.
                </p>
                <div className="animate-fade-up mt-10 flex flex-col gap-4 sm:flex-row [animation-delay:160ms]">
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

              <div className="relative hidden overflow-hidden lg:block lg:min-h-[620px]" aria-hidden>
                <Image
                  src="/images/stich/d6.jpg"
                  alt=""
                  fill
                  sizes="40vw"
                  className="object-cover opacity-20"
                  style={{ transform: "scale(1.4)", transformOrigin: "50% 18%" }}
                />
                <div className="absolute inset-0 grid-fade" />
                <span className="absolute -right-10 top-6 h-64 w-64 rounded-full border border-white/10" />
                <span className="absolute right-6 top-20 h-40 w-40 rounded-full border border-white/10" />
                <span className="absolute right-24 top-36 h-24 w-24 rounded-full border border-primary-light/25" />
              </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <dl className="mt-16 grid max-w-4xl grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-2xl font-semibold text-white sm:text-3xl">
                      <Counter value={stat.value} />
                    </dt>
                    <dd className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-4xl">
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

        {/* Open roles */}
        <section id="roles" className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-4xl">
                  Open <span className="text-primary">roles</span>
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  Don&apos;t see the right fit? Email us anyway. We keep strong
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

        {/* Closing CTA */}
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Don&apos;t see your role listed?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-balance text-base text-white/70 sm:text-lg">
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
