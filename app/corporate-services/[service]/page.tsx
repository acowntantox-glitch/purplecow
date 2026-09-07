import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { faqPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type CorporateService = {
  slug: string;
  title: string;
  badge: string;
  heroTitle: React.ReactNode;
  heroSubcopy: string;
  icon: React.ReactNode;
  stats: { value: string; label: string }[];
  overview: string;
  benefits: { title: string; description: string }[];
  whoFor: string[];
  requirements: string[];
  faqs: { q: string; a: string }[];
};

const SERVICES: Record<string, CorporateService> = {
  pro: {
    slug: "pro",
    title: "PRO & Visa Services",
    badge: "Corporate Services · PRO & Visa",
    heroTitle: (
      <>Visas and Emirates ID, <span className="text-primary-light">without the government counters</span></>
    ),
    heroSubcopy:
      "Employment, investor, and dependent visas, Emirates ID, and labor cards — processed by an in-house PRO team so you're never stuck typing centers or chasing a counter appointment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="11" r="2" />
        <path d="M6 16c.6-1.6 1.9-2.5 3-2.5s2.4.9 3 2.5M14 10h4M14 14h4" />
      </svg>
    ),
    stats: [
      { value: "<5 min", label: "WhatsApp response" },
      { value: "100%", label: "Applications filed on your behalf" },
      { value: "0", label: "Government counters you visit" },
      { value: "4", label: "Visa types handled — employment, investor, dependent & golden" },
    ],
    overview:
      "PRO & Visa Services covers every government-facing task tied to running a licensed UAE company — employment and investor visas, Emirates ID, labor cards, and medical fitness tests — handled by our in-house PRO team instead of scattered typing centers and government counters.",
    benefits: [
      {
        title: "Full visa lifecycle handled",
        description:
          "From employment and investor visas to dependent and golden visas, we manage applications, renewals, and cancellations end to end.",
      },
      {
        title: "Emirates ID & labor card issuance",
        description:
          "We coordinate biometrics, medical tests, and card collection so nothing sits waiting on a missing signature.",
      },
      {
        title: "No queuing at government counters",
        description:
          "Applications are submitted and tracked digitally through our PRO team's direct channels with UAE authorities.",
      },
      {
        title: "Dependent & family visa support",
        description:
          "Sponsor your spouse, children, or parents with the same paperwork handled by your account manager.",
      },
      {
        title: "Status tracked in real time",
        description: "You always know where an application stands — no chasing typing centers for updates.",
      },
    ],
    whoFor: [
      "Companies onboarding new employees who need visas and Emirates ID",
      "Founders sponsoring dependents or family members",
      "Businesses without an in-house PRO or HR admin function",
      "Companies switching from a slow or unresponsive PRO provider",
    ],
    requirements: [
      "Passport copies of the visa applicant",
      "Passport-size photograph meeting UAE specifications",
      "Entry permit / current visa status, if applicable",
      "Company immigration card and establishment card",
      "Medical fitness test results (we coordinate scheduling)",
    ],
    faqs: [
      {
        q: "How long does an employment visa take?",
        a: "Typically 1–3 weeks from entry permit to Emirates ID, depending on medical test scheduling and Emirates ID appointment availability — we'll give you a specific timeline once the application is filed.",
      },
      {
        q: "Can you sponsor visas for my employees' families?",
        a: "Yes — dependent visas for spouses, children, and in some cases parents are processed the same way as employment visas, once the sponsoring employee's visa is issued.",
      },
      {
        q: "What is a Golden Visa and can you help me apply?",
        a: "The Golden Visa is a long-term (5 or 10 year) UAE residency for qualifying investors, entrepreneurs, and professionals. We assess your eligibility and manage the application if you qualify.",
      },
      {
        q: "Do I need to be present in the UAE for visa processing?",
        a: "Medical testing and Emirates ID biometrics require your physical presence in the UAE — we schedule these efficiently so it's a single visit wherever possible.",
      },
    ],
  },
  banking: {
    slug: "banking",
    title: "Corporate Banking",
    badge: "Corporate Services · Banking",
    heroTitle: (
      <>A business bank account that <span className="text-primary-light">actually opens</span></>
    ),
    heroSubcopy:
      "We prepare your compliance file correctly the first time and manage the relationship with the bank, so your application moves forward instead of stalling in back-and-forth requests.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10 12 4l9 6" />
        <path d="M5 10v9M10 10v9M14 10v9M19 10v9M3 19h18" />
      </svg>
    ),
    stats: [
      { value: "<5 min", label: "WhatsApp response" },
      { value: "100%", label: "Compliance file prepared for you" },
      { value: "0", label: "Branch visits required to start" },
      { value: "5+", label: "UAE banking partners" },
    ],
    overview:
      "Opening a UAE corporate bank account is one of the most common points where new companies stall — banks apply strict KYC and compliance checks, and an incomplete or poorly prepared file is the most common reason for delay or rejection. We prepare your compliance file correctly the first time and manage the relationship with the bank on your behalf.",
    benefits: [
      {
        title: "Compliance file prepared for you",
        description: "We assemble the KYC documentation, business plan, and source-of-funds evidence banks expect to see.",
      },
      {
        title: "Direct relationships with major UAE banks",
        description: "We work with relationship managers across leading local and international banks operating in the UAE.",
      },
      {
        title: "Multi-currency account guidance",
        description: "We help you choose an account structure that supports international invoicing and payments.",
      },
      {
        title: "Support through activation",
        description: "We stay involved from application submission through to your account going live, not just the introduction.",
      },
      {
        title: "Second-opinion review before submission",
        description: "Your file is reviewed for common rejection triggers before it ever reaches a bank.",
      },
    ],
    whoFor: [
      "Newly formed companies opening their first UAE bank account",
      "Businesses that had an account application rejected elsewhere",
      "Companies needing multi-currency accounts for international trade",
      "Founders who want one point of contact instead of a call center queue",
    ],
    requirements: [
      "Trade license and Memorandum of Association",
      "Passport copies and visa pages of all shareholders",
      "Proof of UAE address (Ejari or tenancy contract)",
      "Business plan or summary of anticipated banking activity",
      "Source-of-funds documentation for initial capital",
    ],
    faqs: [
      {
        q: "Can you guarantee my bank account will be approved?",
        a: "No — the bank makes the final decision, and no provider can guarantee approval. What we do is prepare your file to the standard banks expect and manage the process so it doesn't stall.",
      },
      {
        q: "How long does account opening take?",
        a: "It varies by bank and activity, typically a few weeks from a complete application. We'll give you a realistic timeline once we know which bank fits your business.",
      },
      {
        q: "Which bank should I choose?",
        a: "It depends on your activity, expected transaction volumes, and whether you need multi-currency or international transfer capability — we'll recommend 2-3 banks that fit your profile.",
      },
      {
        q: "Can you help if my application was already rejected?",
        a: "Yes. We review what was submitted, identify likely gaps, and re-prepare the file before approaching a different bank.",
      },
    ],
  },
  renewals: {
    slug: "renewals",
    title: "Renewals & Compliance",
    badge: "Corporate Services · Renewals & Compliance",
    heroTitle: (
      <>Nothing lapses <span className="text-primary-light">on your watch</span></>
    ),
    heroSubcopy:
      "License, establishment card, labor file, and membership renewals — tracked on one compliance calendar and filed before they're due, not after a warning letter.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4M8.5 15l2 2 4-4" />
      </svg>
    ),
    stats: [
      { value: "<5 min", label: "WhatsApp response" },
      { value: "100%", label: "Renewal deadlines tracked" },
      { value: "0", label: "Lapsed licenses on our watch" },
      { value: "3", label: "Renewal types tracked — license, cards & membership" },
    ],
    overview:
      "UAE companies carry a running list of dates that matter — trade license renewal, establishment card, labor file, Chamber of Commerce membership, and visa expiries. Missing any one of them can mean fines or a lapsed status. We track every deadline attached to your company and handle the renewal filing before it's due.",
    benefits: [
      {
        title: "Every renewal date tracked in one place",
        description: "License, cards, memberships, and visas are monitored on a single compliance calendar for your company.",
      },
      {
        title: "Filed ahead of the deadline, not after",
        description: "We submit renewal paperwork with enough lead time to avoid late fees or lapses.",
      },
      {
        title: "Deadline alerts sent directly to you",
        description: "You're notified well before anything is due, with no surprise notices.",
      },
      {
        title: "Trade license renewal handled end to end",
        description: "Fee payment, document updates, and authority submission are managed on your behalf.",
      },
      {
        title: "Works alongside your PRO and banking services",
        description: "Renewals are coordinated with your visa and compliance file, not handled in isolation.",
      },
    ],
    whoFor: [
      "Companies that have missed a renewal deadline before",
      "Founders who don't want to track compliance dates manually",
      "Businesses with multiple licenses, cards, or memberships to renew",
      "Companies taking over compliance management from a previous provider",
    ],
    requirements: [
      "Current trade license and establishment card",
      "Chamber of Commerce membership certificate, if applicable",
      "Updated tenancy contract / Ejari, if due for renewal",
      "List of active employee visas tied to the license",
    ],
    faqs: [
      {
        q: "What happens if a license renewal is missed?",
        a: "Late renewals typically carry fines that increase the longer they go unpaid, and a lapsed license can put visas and bank accounts at risk. We track dates specifically to prevent this.",
      },
      {
        q: "Do you handle Chamber of Commerce and other membership renewals?",
        a: "Yes — any membership or certificate tied to your company's compliance status is tracked and renewed alongside your license.",
      },
      {
        q: "How far in advance will I be notified of a renewal?",
        a: "We flag upcoming renewals well before the deadline, giving enough time to gather any documents needed without a last-minute scramble.",
      },
      {
        q: "Can you take over renewals for a company you didn't originally set up?",
        a: "Yes. We onboard existing companies and take over renewal tracking and filing at any point, regardless of who handled the original formation.",
      },
    ],
  },
};

const ALL_SERVICE_LINKS = [
  { slug: "pro", title: "PRO & Visa Services", href: "/corporate-services/pro" },
  { slug: "banking", title: "Corporate Banking", href: "/corporate-services/banking" },
  { slug: "renewals", title: "Renewals & Compliance", href: "/corporate-services/renewals" },
  { slug: "accounting", title: "Accounting & Tax", href: "/accounting-tax" },
];

export function generateStaticParams() {
  return Object.keys(SERVICES).map((service) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const data = SERVICES[service];
  if (!data) return {};

  const title = `${data.title} in the UAE | Purple Cow`;
  return {
    title,
    description: data.heroSubcopy,
    alternates: { canonical: `/corporate-services/${data.slug}` },
    openGraph: {
      title,
      description: data.heroSubcopy,
      url: `/corporate-services/${data.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: data.heroSubcopy,
    },
  };
}

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-primary">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

export default async function CorporateServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const data = SERVICES[service];
  if (!data) notFound();

  const others = ALL_SERVICE_LINKS.filter((s) => s.slug !== data.slug);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Corporate Services", href: "/corporate-services" },
    { label: data.title },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={faqPageJsonLd(data.faqs)} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
            <Breadcrumb items={breadcrumbItems} />
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 [animation-delay:30ms]">
                {data.badge}
              </span>
              <h1 className="animate-fade-up text-balance mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-white [animation-delay:60ms] sm:text-5xl lg:text-[3.1rem]">
                {data.heroTitle}
              </h1>
              <p className="animate-fade-up text-balance mx-auto mt-6 max-w-2xl text-base text-white/70 [animation-delay:120ms] sm:text-lg">
                {data.heroSubcopy}
              </p>
              <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:160ms]">
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
              {data.stats.map((stat) => (
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

        {/* Overview + benefits */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-16">
              <Reveal>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary [&_svg]:h-6 [&_svg]:w-6">
                  {data.icon}
                </div>
                <h2 className="text-balance mt-5 text-2xl font-bold tracking-tight text-black sm:text-4xl">
                  What is {data.title}?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">{data.overview}</p>

                <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-ink-soft">
                  Best for
                </h3>
                <ul className="mt-4 space-y-3">
                  {data.whoFor.map((w) => (
                    <li key={w} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      {CHECK_ICON}
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={100}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {data.benefits.map((b) => (
                    <div
                      key={b.title}
                      className="rounded-2xl border border-surface-border bg-white p-6 shadow-sm"
                    >
                      <h3 className="text-base font-semibold text-ink">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{b.description}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="relative overflow-hidden bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Reveal>
              <div className="text-center">
                <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-4xl">
                  What you&apos;ll need <span className="text-primary">to get started</span>
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  We prepare and file everything — this is simply what we&apos;ll ask you for.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ul className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
                {data.requirements.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-2.5 rounded-2xl border border-surface-border bg-white p-4 text-sm text-ink-soft shadow-sm"
                  >
                    {CHECK_ICON}
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <Reveal>
              <div className="text-center">
                <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-4xl">
                  {data.title} FAQs
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 space-y-3">
              {data.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 60}>
                  <details className="group rounded-2xl border border-surface-border bg-surface px-6 py-5 open:shadow-md">
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

        {/* Compare other services */}
        <section className="bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <Reveal>
              <p className="text-sm font-medium text-ink-soft">Looking for a different service?</p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={o.href}
                    className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:border-primary/30 hover:text-primary"
                  >
                    {o.title} <span aria-hidden>&rarr;</span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
