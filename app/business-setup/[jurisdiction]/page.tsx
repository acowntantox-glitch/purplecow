import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Breadcrumb from "@/components/Breadcrumb";

type Jurisdiction = {
  slug: string;
  title: string;
  article: "a" | "an";
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

const JURISDICTIONS: Record<string, Jurisdiction> = {
  mainland: {
    slug: "mainland",
    title: "Mainland",
    article: "a",
    badge: "Business Setup · Mainland",
    heroTitle: (
      <>Trade anywhere in the UAE with a <span className="text-primary-light">Mainland</span> company</>
    ),
    heroSubcopy:
      "A Mainland license lets you operate across the entire UAE market and beyond — no restriction on where you trade, and no cap on foreign ownership for most activities.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 21V9l6-4 6 4v12" />
        <path d="M14 21v-7l6 3v4" />
        <path d="M9 21v-4M4 21h16" />
      </svg>
    ),
    stats: [
      { value: "0", label: "Restrictions on where you trade in the UAE" },
      { value: "2000+", label: "Licensable business activities" },
      { value: "100%", label: "Foreign ownership for most activities" },
      { value: "<5 min", label: "WhatsApp response" },
    ],
    overview:
      "A Mainland company is registered with the Department of Economic Development (DED) and can trade directly within the local UAE market, take on government contracts, and open branches anywhere in the country. It's the most flexible license type, with the widest range of business activities available.",
    benefits: [
      {
        title: "Unrestricted UAE market access",
        description:
          "Trade with any company or individual anywhere in the UAE, with no geographic or sector limitation.",
      },
      {
        title: "Eligible for government contracts",
        description:
          "Mainland companies can bid on and win UAE government tenders — a route closed to free zone entities.",
      },
      {
        title: "100% foreign ownership on most activities",
        description:
          "Following the UAE's 2021 reforms, most commercial and industrial activities allow full foreign ownership.",
      },
      {
        title: "Flexible office locations",
        description:
          "Set up anywhere in the emirate, rather than being confined to a single free zone.",
      },
      {
        title: "Widest activity list",
        description:
          "Access to over 2,000 licensable business activities across commercial, professional, and industrial categories.",
      },
    ],
    whoFor: [
      "Retail & F&B businesses serving walk-in customers",
      "Contractors bidding on government or semi-government projects",
      "Businesses that need multiple branches across emirates",
      "Companies trading physical goods within the UAE",
    ],
    requirements: [
      "Passport copies of all shareholders",
      "Initial approval from the DED",
      "Memorandum of Association (MOA)",
      "Proof of registered office (Ejari / tenancy contract)",
      "Approvals from relevant authorities, depending on activity",
    ],
    faqs: [
      {
        q: "Do I need a local UAE sponsor for a Mainland company?",
        a: "For most commercial and professional activities, no — 100% foreign ownership is allowed since the 2021 reforms. A small number of \"strategic\" activities still require a UAE national partner or local service agent; we'll confirm this for your activity.",
      },
      {
        q: "Can a Mainland company open branches in other emirates?",
        a: "Yes. Mainland licenses aren't restricted to a single emirate the way free zone licenses are.",
      },
      {
        q: "Is Mainland more expensive than Free Zone?",
        a: "It depends on the activity and office requirement — we'll give you an exact, itemized quote rather than a rule of thumb.",
      },
      {
        q: "How many visas can a Mainland company sponsor?",
        a: "Typically tied to your office size (Ejari) rather than a fixed quota, which usually gives you more room to scale your team.",
      },
    ],
  },
  "free-zone": {
    slug: "free-zone",
    title: "Free Zone",
    article: "a",
    badge: "Business Setup · Free Zone",
    heroTitle: (
      <>100% foreign ownership in one of <span className="text-primary-light">40+ UAE free zones</span></>
    ),
    heroSubcopy:
      "Free zones give international founders full ownership, fast licensing, and a jurisdiction tailored to their industry — without needing a mainland presence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 3 8l9 5 9-5-9-5z" />
        <path d="M3 16l9 5 9-5M3 12l9 5 9-5" />
      </svg>
    ),
    stats: [
      { value: "40+", label: "UAE free zones to choose from" },
      { value: "100%", label: "Foreign ownership, guaranteed" },
      { value: "0%", label: "Tax on qualifying income" },
      { value: "<5 min", label: "WhatsApp response" },
    ],
    overview:
      "Free zones are self-contained jurisdictions with their own registration authority, each typically focused on a specific industry — media, tech, logistics, finance, and more. They're built for international founders who want full ownership and a fast setup, without needing to trade directly with the UAE mainland market.",
    benefits: [
      {
        title: "100% foreign ownership, guaranteed",
        description:
          "Every UAE free zone allows full foreign ownership, with no exceptions by activity.",
      },
      {
        title: "Choose a zone built for your industry",
        description:
          "From commodities-focused zones to finance-focused zones, pick one with a regulatory framework suited to what you do.",
      },
      {
        title: "Fast, streamlined licensing",
        description:
          "Free zone authorities are built for speed, often issuing licenses in days rather than weeks.",
      },
      {
        title: "Repatriate 100% of profits and capital",
        description: "No restriction on moving money out of the UAE.",
      },
      {
        title: "Visa quota included with your license",
        description: "Most packages come with a set number of visas built in from day one.",
      },
    ],
    whoFor: [
      "Consultants, agencies, and service businesses trading internationally",
      "E-commerce and tech companies without a physical UAE storefront",
      "Holding companies for regional operations",
      "Founders who want to start fast with minimal local requirements",
    ],
    requirements: [
      "Passport copies of all shareholders",
      "Business plan (for select zones/activities)",
      "Proof of address",
      "No Objection Certificate (NOC) if currently on a UAE employment visa",
      "Zone-specific application form",
    ],
    faqs: [
      {
        q: "Can a free zone company trade directly with UAE mainland customers?",
        a: "Only through a registered mainland distributor, or by obtaining a dual license in select free zones — we'll advise on the right structure for your activity.",
      },
      {
        q: "Which free zone should I choose?",
        a: "It depends on your activity, budget, and whether you need physical office space or visas — we'll narrow it down to 2-3 zones during your consultation.",
      },
      {
        q: "Can I upgrade from Free Zone to Mainland later?",
        a: "Yes, many founders start in a free zone and add a mainland license once they need direct local market access.",
      },
      {
        q: "Do free zone companies pay Corporate Tax?",
        a: "Qualifying free zone entities can benefit from 0% Corporate Tax on qualifying income; non-qualifying income is taxed at the standard 9% rate. We'll assess your eligibility.",
      },
    ],
  },
  offshore: {
    slug: "offshore",
    title: "Offshore",
    article: "an",
    badge: "Business Setup · Offshore",
    heroTitle: (
      <>Hold assets and structure internationally with an <span className="text-primary-light">Offshore</span> company</>
    ),
    heroSubcopy:
      "An offshore company doesn't trade within the UAE — it's built for holding assets, opening international bank accounts, and structuring cross-border operations with full confidentiality.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3z" />
      </svg>
    ),
    stats: [
      { value: "0", label: "Physical office required" },
      { value: "100%", label: "Foreign ownership" },
      { value: "0", label: "UAE visits required to set up" },
      { value: "<5 min", label: "WhatsApp response" },
    ],
    overview:
      "Offshore companies are registered in the UAE but are not licensed to conduct business within the UAE market. They're used for holding companies, international trading structures, IP holding, and opening multi-currency bank accounts — with a level of confidentiality mainland and free zone companies don't offer.",
    benefits: [
      {
        title: "No physical office required",
        description: "Offshore companies don't need UAE office space, cutting setup and running costs.",
      },
      {
        title: "100% foreign ownership with full confidentiality",
        description: "Shareholder details aren't published on a public register.",
      },
      {
        title: "Hold assets and IP internationally",
        description:
          "A common structure for holding real estate, shares in other companies, or intellectual property.",
      },
      {
        title: "Open multi-currency bank accounts",
        description:
          "Offshore entities are commonly used to open corporate accounts for international operations.",
      },
      {
        title: "No UAE residency requirement",
        description: "Shareholders and directors don't need to live in, or even visit, the UAE.",
      },
    ],
    whoFor: [
      "Holding companies for international assets or subsidiaries",
      "Founders structuring IP ownership separately from operating companies",
      "International traders who don't need a UAE office or visa",
      "Investors seeking a confidential ownership structure",
    ],
    requirements: [
      "Passport copies of shareholders & directors",
      "Proof of address (utility bill or bank statement)",
      "Bank reference letter (for some registries)",
      "A registered agent in the UAE — mandatory, and we act as yours",
      "No physical presence or visit required in most cases",
    ],
    faqs: [
      {
        q: "Can an offshore company get UAE residency visas?",
        a: "No. Offshore companies aren't licensed to sponsor visas — if you need a UAE visa, you'll need a mainland or free zone company alongside it.",
      },
      {
        q: "Can an offshore company open a UAE bank account?",
        a: "Yes, though banks apply extra due diligence to offshore entities. We manage that compliance file for you.",
      },
      {
        q: "What's the difference between Offshore and Free Zone?",
        a: "Free zone companies can operate and sponsor visas within the UAE; offshore companies exist purely for holding and international structuring, and cannot trade locally.",
      },
      {
        q: "Do I need to visit the UAE to set up an offshore company?",
        a: "In most cases, no — the entire process can be completed remotely through your registered agent.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(JURISDICTIONS).map((jurisdiction) => ({ jurisdiction }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ jurisdiction: string }>;
}): Promise<Metadata> {
  const { jurisdiction } = await params;
  const data = JURISDICTIONS[jurisdiction];
  if (!data) return {};

  return {
    title: `${data.title} Company Setup in the UAE | Purple Cow`,
    description: data.heroSubcopy,
  };
}

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-primary">
    <path d="M5 12l4 4L19 6" />
  </svg>
);

export default async function JurisdictionPage({
  params,
}: {
  params: Promise<{ jurisdiction: string }>;
}) {
  const { jurisdiction } = await params;
  const data = JURISDICTIONS[jurisdiction];
  if (!data) notFound();

  const others = Object.values(JURISDICTIONS).filter((j) => j.slug !== data.slug);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-28">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Business Setup", href: "/business-setup" },
                { label: data.title },
              ]}
            />
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 [animation-delay:60ms]">
                {data.badge}
              </span>
              <h1 className="animate-fade-up text-balance mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-white [animation-delay:120ms] sm:text-5xl lg:text-[3.1rem]">
                {data.heroTitle}
              </h1>
              <p className="animate-fade-up text-balance mx-auto mt-6 max-w-2xl text-lg text-white/70 [animation-delay:240ms]">
                {data.heroSubcopy}
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
                <h2 className="text-balance mt-5 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  What is {data.article} {data.title} company?
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
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
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
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
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

        {/* Compare other jurisdictions */}
        <section className="bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <Reveal>
              <p className="text-sm font-medium text-ink-soft">Not sure {data.title} is the right fit?</p>
              <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/business-setup/${o.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition hover:border-primary/30 hover:text-primary"
                  >
                    Compare {o.title} <span aria-hidden>&rarr;</span>
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
