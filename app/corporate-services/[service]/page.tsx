import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
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
  heroImage: string;
  icon: React.ReactNode;
  stats: { value: string; label: string }[];
  overview: string;
  overviewImage: string;
  benefits: { title: string; description: string; icon: React.ReactNode }[];
  whoFor: string[];
  requirements: string[];
  requirementsImage: string;
  process: { step: string; title: string; description: string }[];
  breakImage: string;
  breakEyebrow: string;
  breakHeading: React.ReactNode;
  breakStats: { value: string; label: string }[];
  faqs: { q: string; a: string }[];
};

const ICON_ID_CARD = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="8.5" cy="11" r="2" />
    <path d="M6 16c.5-1.4 1.6-2.2 2.5-2.2s2 .8 2.5 2.2M14 9.5h4M14 13h4" />
  </svg>
);
const ICON_SHIELD_CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const ICON_FAMILY = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="8" r="2.5" />
    <circle cx="17" cy="8" r="2.5" />
    <circle cx="12" cy="13" r="1.8" />
    <path d="M2 21c0-3 2.2-5 5-5s5 2 5 5M12 21c0-2.2 1.6-3.8 3.5-3.8s3.5 1.6 3.5 3.8" />
  </svg>
);
const ICON_PULSE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h4l2 7 4-14 2 7h6" />
  </svg>
);
const ICON_FOLDER_CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    <path d="M9.5 14l2 2 3.5-3.5" />
  </svg>
);
const ICON_HANDSHAKE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12l4-4 4 3 3-3 4 4M2 12l3 3 2-1M22 12l-3 3-2-1" />
    <path d="M8 14l2.5 2.5a1.8 1.8 0 0 0 2.5 0 1.8 1.8 0 0 0 2.5 0L18 14" />
  </svg>
);
const ICON_CURRENCY = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="12" r="5" />
    <circle cx="16" cy="12" r="5" />
  </svg>
);
const ICON_ROCKET = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c3 1.5 5 5 5 9 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-7.5 5-9z" />
    <path d="M9 16l-3 1 1-3M15 16l3 1-1-3" />
    <circle cx="12" cy="10" r="1.6" fill="currentColor" stroke="none" />
  </svg>
);
const ICON_SEARCH_CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M8 10.5l1.8 1.8L14 8.5M20 20l-4.5-4.5" />
  </svg>
);
const ICON_CALENDAR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);
const ICON_CLOCK_CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
const ICON_BELL = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 10a6 6 0 1 1 12 0c0 4 1.5 5.5 1.5 5.5H4.5S6 14 6 10z" />
    <path d="M9.5 18.5a2.5 2.5 0 0 0 5 0" />
  </svg>
);
const ICON_DOC_REFRESH = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M9.5 13a2.5 2.5 0 0 1 4-2M14.5 15a2.5 2.5 0 0 1-4 2M13.5 10.5l1-.5.5 1M10.5 15.5l-1 .5-.5-1" />
  </svg>
);
const ICON_LINK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 15l6-6M8 7l1.5-1.5a3.5 3.5 0 0 1 5 5L13 12M16 17l-1.5 1.5a3.5 3.5 0 0 1-5-5L11 12" />
  </svg>
);

const SERVICES: Record<string, CorporateService> = {
  pro: {
    slug: "pro",
    title: "PRO & Visa Services",
    badge: "Corporate Services · PRO & Visa",
    heroTitle: (
      <>Visas and Emirates ID, <span className="text-primary-light">without the government counters</span></>
    ),
    heroSubcopy:
      "Employment, investor, and dependent visas, Emirates ID, and labor cards: processed by an in-house PRO team so you're never stuck typing centers or chasing a counter appointment.",
    heroImage: "/images/stich/d5.jpg",
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
      { value: "4", label: "Visa types handled: employment, investor, dependent & golden" },
    ],
    overview:
      "PRO & Visa Services covers every government-facing task tied to running a licensed UAE company (employment and investor visas, Emirates ID, labor cards, and medical fitness tests), handled by our in-house PRO team instead of scattered typing centers and government counters.",
    overviewImage: "/images/stich/k11.jpg",
    benefits: [
      {
        title: "Full visa lifecycle handled",
        description:
          "From employment and investor visas to dependent and golden visas, we manage applications, renewals, and cancellations end to end.",
        icon: ICON_ID_CARD,
      },
      {
        title: "Emirates ID & labor card issuance",
        description:
          "We coordinate biometrics, medical tests, and card collection so nothing sits waiting on a missing signature.",
        icon: ICON_SHIELD_CHECK,
      },
      {
        title: "No queuing at government counters",
        description:
          "Applications are submitted and tracked digitally through our PRO team's direct channels with UAE authorities.",
        icon: ICON_PULSE,
      },
      {
        title: "Dependent & family visa support",
        description:
          "Sponsor your spouse, children, or parents with the same paperwork handled by your account manager.",
        icon: ICON_FAMILY,
      },
      {
        title: "Status tracked in real time",
        description: "You always know where an application stands, no chasing typing centers for updates.",
        icon: ICON_PULSE,
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
    requirementsImage: "/images/stich/w1.jpg",
    process: [
      {
        step: "01",
        title: "Application prepared",
        description: "We assemble the required documents and file the entry permit application.",
      },
      {
        step: "02",
        title: "Medical & biometrics",
        description: "We schedule medical fitness testing and Emirates ID biometrics.",
      },
      {
        step: "03",
        title: "Approvals tracked",
        description: "We follow up directly with GDRFA, MOHRE, and the ICP until each stage clears.",
      },
      {
        step: "04",
        title: "Visa & ID issued",
        description: "Your residence visa is stamped and the Emirates ID is delivered.",
      },
    ],
    breakImage: "/images/stich/h2.jpg",
    breakEyebrow: "Global Mobility",
    breakHeading: <>Visas that keep pace <span className="text-primary-light">with your team</span></>,
    breakStats: [
      { value: "4", label: "Visa types handled" },
      { value: "0", label: "Government counters you visit" },
    ],
    faqs: [
      {
        q: "How long does an employment visa take?",
        a: "Typically 1–3 weeks from entry permit to Emirates ID, depending on medical test scheduling and Emirates ID appointment availability. We'll give you a specific timeline once the application is filed.",
      },
      {
        q: "Can you sponsor visas for my employees' families?",
        a: "Yes, dependent visas for spouses, children, and in some cases parents are processed the same way as employment visas, once the sponsoring employee's visa is issued.",
      },
      {
        q: "What is a Golden Visa and can you help me apply?",
        a: "The Golden Visa is a long-term (5 or 10 year) UAE residency for qualifying investors, entrepreneurs, and professionals. We assess your eligibility and manage the application if you qualify.",
      },
      {
        q: "Do I need to be present in the UAE for visa processing?",
        a: "Medical testing and Emirates ID biometrics require your physical presence in the UAE. We schedule these efficiently so it's a single visit wherever possible.",
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
    heroImage: "/images/stich/d4.jpg",
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
      "Opening a UAE corporate bank account is one of the most common points where new companies stall. Banks apply strict KYC and compliance checks, and an incomplete or poorly prepared file is the most common reason for delay or rejection. We prepare your compliance file correctly the first time and manage the relationship with the bank on your behalf.",
    overviewImage: "/images/stich/a4.jpg",
    benefits: [
      {
        title: "Compliance file prepared for you",
        description: "We assemble the KYC documentation, business plan, and source-of-funds evidence banks expect to see.",
        icon: ICON_FOLDER_CHECK,
      },
      {
        title: "Direct relationships with major UAE banks",
        description: "We work with relationship managers across leading local and international banks operating in the UAE.",
        icon: ICON_HANDSHAKE,
      },
      {
        title: "Multi-currency account guidance",
        description: "We help you choose an account structure that supports international invoicing and payments.",
        icon: ICON_CURRENCY,
      },
      {
        title: "Support through activation",
        description: "We stay involved from application submission through to your account going live, not just the introduction.",
        icon: ICON_ROCKET,
      },
      {
        title: "Second-opinion review before submission",
        description: "Your file is reviewed for common rejection triggers before it ever reaches a bank.",
        icon: ICON_SEARCH_CHECK,
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
    requirementsImage: "/images/stich/l1.jpg",
    process: [
      {
        step: "01",
        title: "Compliance file built",
        description: "We assemble the KYC, business plan, and source-of-funds documentation banks expect.",
      },
      {
        step: "02",
        title: "Bank match & introduction",
        description: "We introduce your file to the bank whose typical client profile fits your business.",
      },
      {
        step: "03",
        title: "Application submitted",
        description: "Your file is submitted and tracked through the bank's compliance review.",
      },
      {
        step: "04",
        title: "Account activated",
        description: "Your corporate account goes live, ready for transactions.",
      },
    ],
    breakImage: "/images/stich/k4.jpg",
    breakEyebrow: "Corporate Banking",
    breakHeading: <>A file banks <span className="text-primary-light">actually approve</span></>,
    breakStats: [
      { value: "5+", label: "UAE banking partners" },
      { value: "100%", label: "Compliance file prepared for you" },
    ],
    faqs: [
      {
        q: "Can you guarantee my bank account will be approved?",
        a: "No. The bank makes the final decision, and no provider can guarantee approval. What we do is prepare your file to the standard banks expect and manage the process so it doesn't stall.",
      },
      {
        q: "How long does account opening take?",
        a: "It varies by bank and activity, typically a few weeks from a complete application. We'll give you a realistic timeline once we know which bank fits your business.",
      },
      {
        q: "Which bank should I choose?",
        a: "It depends on your activity, expected transaction volumes, and whether you need multi-currency or international transfer capability. We'll recommend 2-3 banks that fit your profile.",
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
      "License, establishment card, labor file, and membership renewals: tracked on one compliance calendar and filed before they're due, not after a warning letter.",
    heroImage: "/images/stich/e1.jpg",
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
      { value: "3", label: "Renewal types tracked: license, cards & membership" },
    ],
    overview:
      "UAE companies carry a running list of dates that matter: trade license renewal, establishment card, labor file, Chamber of Commerce membership, and visa expiries. Missing any one of them can mean fines or a lapsed status. We track every deadline attached to your company and handle the renewal filing before it's due.",
    overviewImage: "/images/stich/a7.jpg",
    benefits: [
      {
        title: "Every renewal date tracked in one place",
        description: "License, cards, memberships, and visas are monitored on a single compliance calendar for your company.",
        icon: ICON_CALENDAR,
      },
      {
        title: "Filed ahead of the deadline, not after",
        description: "We submit renewal paperwork with enough lead time to avoid late fees or lapses.",
        icon: ICON_CLOCK_CHECK,
      },
      {
        title: "Deadline alerts sent directly to you",
        description: "You're notified well before anything is due, with no surprise notices.",
        icon: ICON_BELL,
      },
      {
        title: "Trade license renewal handled end to end",
        description: "Fee payment, document updates, and authority submission are managed on your behalf.",
        icon: ICON_DOC_REFRESH,
      },
      {
        title: "Works alongside your PRO and banking services",
        description: "Renewals are coordinated with your visa and compliance file, not handled in isolation.",
        icon: ICON_LINK,
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
    requirementsImage: "/images/stich/l2.jpg",
    process: [
      {
        step: "01",
        title: "Compliance audit",
        description: "We map every license, card, and membership date tied to your company.",
      },
      {
        step: "02",
        title: "Calendar built",
        description: "Every deadline is logged on your compliance calendar with lead-time alerts.",
      },
      {
        step: "03",
        title: "Renewal filed",
        description: "Paperwork and fees are submitted ahead of each deadline.",
      },
      {
        step: "04",
        title: "Confirmed & tracked",
        description: "You receive confirmation, and the next renewal cycle is already being tracked.",
      },
    ],
    breakImage: "/images/stich/h5.jpg",
    breakEyebrow: "Compliance Calendar",
    breakHeading: <>Every deadline, tracked <span className="text-primary-light">before it's due</span></>,
    breakStats: [
      { value: "100%", label: "Renewal deadlines tracked" },
      { value: "0", label: "Lapsed licenses on our watch" },
    ],
    faqs: [
      {
        q: "What happens if a license renewal is missed?",
        a: "Late renewals typically carry fines that increase the longer they go unpaid, and a lapsed license can put visas and bank accounts at risk. We track dates specifically to prevent this.",
      },
      {
        q: "Do you handle Chamber of Commerce and other membership renewals?",
        a: "Yes, any membership or certificate tied to your company's compliance status is tracked and renewed alongside your license.",
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
  { slug: "pro", title: "PRO & Visa Services", href: "/corporate-services/pro", image: "/images/stich/d5.jpg" },
  { slug: "banking", title: "Corporate Banking", href: "/corporate-services/banking", image: "/images/stich/d4.jpg" },
  { slug: "renewals", title: "Renewals & Compliance", href: "/corporate-services/renewals", image: "/images/stich/e1.jpg" },
  { slug: "accounting", title: "Accounting & Tax", href: "/accounting-tax", image: "/images/stich/records.jpg" },
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
          <div className="absolute inset-0 opacity-25" aria-hidden>
            <Image src={data.heroImage} alt="" fill priority className="object-cover" />
          </div>
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
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-black/10">
                  <Image
                    src={data.overviewImage}
                    alt={data.title}
                    fill
                    sizes="(min-width: 1024px) 35vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <h2 className="text-balance mt-6 text-2xl font-bold tracking-tight text-black sm:text-4xl">
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
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:h-5 [&_svg]:w-5">
                        {b.icon}
                      </div>
                      <h3 className="mt-4 text-base font-semibold text-ink">{b.title}</h3>
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
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-4xl">
                  What you&apos;ll need <span className="text-primary">to get started</span>
                </h2>
                <p className="mt-4 text-lg text-ink-soft">
                  We prepare and file everything: this is simply what we&apos;ll ask you for.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
              <Reveal delay={80}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-black/10">
                  <Image
                    src={data.requirementsImage}
                    alt={`${data.title} documents`}
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={140}>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
          </div>
        </section>

        {/* Process */}
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-4xl">
                  How {data.title} <span className="text-primary">actually works</span>
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
              {data.process.map((p, i) => (
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

        {/* Full-bleed visual break */}
        <section className="relative w-full overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src={data.breakImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-hero-deep via-hero-deep/85 to-transparent" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
                  {data.breakEyebrow}
                </span>
                <h2 className="text-balance mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  {data.breakHeading}
                </h2>
                <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-white/15 pt-8">
                  {data.breakStats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="text-2xl font-semibold text-white sm:text-3xl">
                        <Counter value={stat.value} />
                      </dt>
                      <dd className="mt-1 text-sm text-white/70">{stat.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
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
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
                Looking for a different service?
              </p>
              <h2 className="text-balance mt-3 text-2xl font-bold tracking-tight text-black sm:text-4xl">
                Explore the other <span className="text-primary">corporate services</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {others.map((o, i) => (
                <Reveal key={o.slug} delay={i * 100}>
                  <Link
                    href={o.href}
                    className="group flex items-center gap-4 overflow-hidden rounded-2xl border border-surface-border bg-white p-4 text-left shadow-sm transition hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={o.image}
                        alt={o.title}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-ink">{o.title}</p>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                        Explore <span aria-hidden>&rarr;</span>
                      </span>
                    </div>
                  </Link>
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
