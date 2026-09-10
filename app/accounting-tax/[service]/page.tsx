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

type AccountingService = {
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

const ICON_RECONCILE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7a8 8 0 0 1 13-6l2 2M20 17a8 8 0 0 1-13 6l-2-2" />
    <path d="M17 1v4h-4M7 23v-4h4" />
  </svg>
);
const ICON_RECEIPT = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2h9l3 3v17l-2.5-1.5L13 22l-2.5-1.5L8 22l-2.5-1.5L3 22V5a3 3 0 0 1 3-3z" />
    <path d="M7.5 8h7M7.5 12h7M7.5 16h4" />
  </svg>
);
const ICON_BARCHART = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21V10M12 21V4M20 21v-7" />
    <path d="M2 21h20" />
  </svg>
);
const ICON_BADGE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="9" r="6" />
    <path d="M8.5 14 7 22l5-3 5 3-1.5-8" />
  </svg>
);
const ICON_CHAIN_LINK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 15l6-6M8 7l1.5-1.5a3.5 3.5 0 0 1 5 5L13 12M16 17l-1.5 1.5a3.5 3.5 0 0 1-5-5L11 12" />
  </svg>
);
const ICON_CALENDAR_DOC = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4M9 14h6M9 17h4" />
  </svg>
);
const ICON_SEARCH_CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M8 10.5l1.8 1.8L14 8.5M20 20l-4.5-4.5" />
  </svg>
);
const ICON_SEND = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);
const ICON_STAMP = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 14a4 4 0 1 1 8 0v3H8v-3z" />
    <path d="M4 21h16M9 17V9a3 3 0 0 1 6 0v8" />
  </svg>
);
const ICON_MINUS_CIRCLE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12h8" />
  </svg>
);
const ICON_BUILDING_CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21h16M6 21V9l6-5 6 5v12M9 21v-6h6v6" />
  </svg>
);
const ICON_CALCULATOR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M8 6h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01" />
  </svg>
);
const ICON_DOC_SEND = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M8 13l3-2 3 2M11 11v7" />
  </svg>
);
const ICON_SHIELD_PERCENT = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    <path d="M9.5 9.5h.01M14.5 14.5h.01M14.5 9.5l-5 5" />
  </svg>
);
const ICON_PIN_CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z" />
    <path d="M9.5 9.5l1.8 1.8L14.5 8" />
  </svg>
);

const SERVICES: Record<string, AccountingService> = {
  bookkeeping: {
    slug: "bookkeeping",
    title: "Bookkeeping",
    badge: "Accounting & Tax · Bookkeeping",
    heroTitle: (
      <>Books that are <span className="text-primary-light">always audit-ready</span></>
    ),
    heroSubcopy:
      "Every invoice and expense reconciled by a real accountant every month, not sorted out in a scramble at year end.",
    heroImage: "/images/stich/a5.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h9l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
        <path d="M9 12h6M9 16h6M9 8h3" />
      </svg>
    ),
    stats: [
      { value: "<5 min", label: "WhatsApp response" },
      { value: "100%", label: "Transactions reconciled monthly" },
      { value: "0", label: "Year-end scrambles" },
      { value: "1", label: "Dedicated accountant on your file" },
    ],
    overview:
      "Bookkeeping is the foundation everything else (VAT filing, Corporate Tax, and financial statements) depends on. We reconcile your invoices, expenses, and bank transactions every month, so your books are accurate and audit-ready year round, not assembled retroactively before a deadline.",
    overviewImage: "/images/stich/consulting 1.jpg",
    benefits: [
      {
        title: "Monthly reconciliation & bank matching",
        description: "Every transaction is matched against your bank statements each month, not batched at year end.",
        icon: ICON_RECONCILE,
      },
      {
        title: "Invoices and expenses logged and categorized",
        description: "Your income and costs are recorded and categorized as they happen, ready for reporting at any time.",
        icon: ICON_RECEIPT,
      },
      {
        title: "Financial statements ready on demand",
        description: "Profit & loss, balance sheet, and cash flow reports are available whenever you need them, for a bank, investor, or your own visibility.",
        icon: ICON_BARCHART,
      },
      {
        title: "IFRS-aligned bookkeeping standards",
        description: "Your books are kept to a standard that holds up to audit, investor due diligence, or bank review.",
        icon: ICON_BADGE,
      },
      {
        title: "Feeds directly into VAT and Corporate Tax filing",
        description: "Clean books mean your quarterly VAT and annual Corporate Tax filings are built on accurate numbers, not last-minute reconstruction.",
        icon: ICON_CHAIN_LINK,
      },
    ],
    whoFor: [
      "Companies that don't have an in-house bookkeeper or finance function",
      "Founders who want financial visibility without doing the books themselves",
      "Businesses preparing for a bank application or investor due diligence",
      "Companies switching from spreadsheets or a disengaged bookkeeper",
    ],
    requirements: [
      "Bank statements for the reconciliation period",
      "Sales invoices and purchase receipts",
      "Access to your accounting software, or we set one up",
      "Prior-period financials, if you're transferring from another provider",
    ],
    requirementsImage: "/images/stich/w3.jpg",
    process: [
      {
        step: "01",
        title: "Books onboarded",
        description: "We review your current records and bring any backlog up to date.",
      },
      {
        step: "02",
        title: "Monthly reconciliation",
        description: "Invoices, expenses, and bank transactions are matched every month.",
      },
      {
        step: "03",
        title: "Reports prepared",
        description: "Financial statements are compiled and reviewed for accuracy.",
      },
      {
        step: "04",
        title: "Ready on demand",
        description: "Clean, audit-ready books are available whenever you need them.",
      },
    ],
    breakImage: "/images/stich/m1.jpg",
    breakEyebrow: "Always Audit-Ready",
    breakHeading: <>Books that never <span className="text-primary-light">need a scramble</span></>,
    breakStats: [
      { value: "100%", label: "Transactions reconciled monthly" },
      { value: "0", label: "Year-end scrambles" },
    ],
    faqs: [
      {
        q: "Can you take over my bookkeeping mid-year?",
        a: "Yes. We can pick up your books wherever they currently stand, reconcile any backlog, and bring them fully up to date.",
      },
      {
        q: "What accounting software do you use?",
        a: "We work with standard cloud accounting platforms and can either use your existing setup or configure one for you as part of onboarding.",
      },
      {
        q: "How often will my books be updated?",
        a: "Monthly, as standard, so your financial position is always current rather than reconstructed once a year.",
      },
      {
        q: "Do you provide financial statements I can show a bank or investor?",
        a: "Yes. Profit & loss, balance sheet, and cash flow statements are available on request, prepared to a standard suitable for external review.",
      },
    ],
  },
  vat: {
    slug: "vat",
    title: "VAT Filing",
    badge: "Accounting & Tax · VAT Filing",
    heroTitle: (
      <>Quarterly VAT, <span className="text-primary-light">filed before the deadline</span></>
    ),
    heroSubcopy:
      "VAT returns prepared, checked, and submitted to the FTA, with input tax reviewed before anything is ever filed.",
    heroImage: "/images/stich/vat services.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.5 3H5a2 2 0 0 0-2 2v7.5a2 2 0 0 0 .586 1.414l8.5 8.5a2 2 0 0 0 2.828 0l7.5-7.5a2 2 0 0 0 0-2.828l-8.5-8.5A2 2 0 0 0 12.5 3z" />
        <circle cx="8" cy="8" r="1.25" fill="currentColor" stroke="none" />
      </svg>
    ),
    stats: [
      { value: "<5 min", label: "WhatsApp response" },
      { value: "100%", label: "Returns reviewed before filing" },
      { value: "0", label: "Late submissions" },
      { value: "AED 375k", label: "Mandatory VAT registration threshold" },
    ],
    overview:
      "UAE VAT returns are filed quarterly (or monthly for some businesses) with the Federal Tax Authority, covering output tax on sales and input tax on purchases. Missed deadlines or incorrect filings can trigger penalties, so we prepare, verify, and submit your returns on schedule, every quarter.",
    overviewImage: "/images/stich/s4.jpg",
    benefits: [
      {
        title: "Quarterly VAT return preparation & filing",
        description: "Returns are prepared from your reconciled books and submitted directly to the FTA before the deadline.",
        icon: ICON_CALENDAR_DOC,
      },
      {
        title: "Input tax verification",
        description: "Every input tax claim is checked against supporting invoices before it's included in your return.",
        icon: ICON_SEARCH_CHECK,
      },
      {
        title: "FTA submission & correspondence handled",
        description: "We manage the filing portal and respond to any FTA queries or clarification requests on your behalf.",
        icon: ICON_SEND,
      },
      {
        title: "VAT registration for new companies",
        description: "We assess whether registration is mandatory or voluntary for your business and handle the application.",
        icon: ICON_STAMP,
      },
      {
        title: "De-registration support when needed",
        description: "If your business no longer meets the VAT threshold, we manage the de-registration process too.",
        icon: ICON_MINUS_CIRCLE,
      },
    ],
    whoFor: [
      "VAT-registered companies that want returns filed correctly and on time",
      "New companies approaching or above the mandatory registration threshold",
      "Businesses that have received an FTA query or penalty notice",
      "Companies that want input tax reviewed before it's claimed, not after",
    ],
    requirements: [
      "Reconciled bookkeeping records for the filing period",
      "Sales and purchase invoices with valid tax details",
      "FTA portal access / TRN details",
      "Import/export documentation, if applicable",
    ],
    requirementsImage: "/images/stich/l4.jpg",
    process: [
      {
        step: "01",
        title: "Books reviewed",
        description: "We confirm your reconciled records are ready for the filing period.",
      },
      {
        step: "02",
        title: "Return prepared",
        description: "Output and input tax are calculated and checked against invoices.",
      },
      {
        step: "03",
        title: "Filed with the FTA",
        description: "Your return is submitted before the deadline through EmaraTax.",
      },
      {
        step: "04",
        title: "Confirmation received",
        description: "You get confirmation of filing, not just \"it's been sent.\"",
      },
    ],
    breakImage: "/images/stich/k3.jpg",
    breakEyebrow: "Quarterly Filing",
    breakHeading: <>Every VAT return, <span className="text-primary-light">filed on time</span></>,
    breakStats: [
      { value: "100%", label: "Returns reviewed before filing" },
      { value: "0", label: "Late submissions" },
    ],
    faqs: [
      {
        q: "Do I need to register for VAT?",
        a: "VAT registration is mandatory once your taxable turnover exceeds AED 375,000 in a 12-month period, and voluntary registration is available above AED 187,500. We'll confirm your exact position based on your business.",
      },
      {
        q: "How often do I need to file VAT?",
        a: "Most businesses file quarterly, though some are classified as monthly filers by the FTA depending on their turnover. We'll confirm your filing frequency during onboarding.",
      },
      {
        q: "What happens if a VAT return is filed late?",
        a: "The FTA applies fixed and daily penalties for late filing and late payment. We track your filing calendar specifically to prevent this.",
      },
      {
        q: "Can you help if I've already received an FTA penalty?",
        a: "Yes. We review the notice, correct any underlying filing issue, and manage the response or reconsideration request where applicable.",
      },
    ],
  },
  corptax: {
    slug: "corptax",
    title: "Corporate Tax",
    badge: "Accounting & Tax · Corporate Tax",
    heroTitle: (
      <>Corporate Tax, <span className="text-primary-light">handled by people who understand it</span></>
    ),
    heroSubcopy:
      "Registration, taxable income calculation, and CT return filing: handled by accountants who know UAE Corporate Tax law, not a generic checklist.",
    heroImage: "/images/stich/w2.jpg",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
    stats: [
      { value: "<5 min", label: "WhatsApp response" },
      { value: "9%", label: "Standard rate above AED 375k profit" },
      { value: "0%", label: "Rate on profits up to AED 375k" },
      { value: "100%", label: "Returns reviewed before filing" },
    ],
    overview:
      "UAE Corporate Tax applies to most businesses at 9% on profits above AED 375,000, with 0% on profits up to that threshold. We handle registration, calculate your taxable income with the correct adjustments, and prepare and file your Corporate Tax return, including assessing eligibility for exemptions or Small Business Relief.",
    overviewImage: "/images/stich/meeting stich 2.jpg",
    benefits: [
      {
        title: "Corporate Tax registration",
        description: "We register your company with the FTA for Corporate Tax within the required timeline.",
        icon: ICON_BUILDING_CHECK,
      },
      {
        title: "Taxable income calculation",
        description: "Your accounting profit is adjusted to arrive at the correct taxable income under UAE Corporate Tax law.",
        icon: ICON_CALCULATOR,
      },
      {
        title: "CT return preparation & filing",
        description: "Your annual return is prepared, reviewed, and filed with the FTA before the deadline.",
        icon: ICON_DOC_SEND,
      },
      {
        title: "Exemption & Small Business Relief assessment",
        description: "We assess whether your business qualifies for reliefs or exemptions before you pay tax you don't owe.",
        icon: ICON_SHIELD_PERCENT,
      },
      {
        title: "Free zone qualifying income review",
        description: "If you operate in a free zone, we assess whether your income qualifies for the 0% Corporate Tax rate.",
        icon: ICON_PIN_CHECK,
      },
    ],
    whoFor: [
      "Companies registering for Corporate Tax for the first time",
      "Free zone companies assessing qualifying income status",
      "Businesses that want taxable income calculated correctly, not estimated",
      "Companies that want CT and VAT handled by the same accountant",
    ],
    requirements: [
      "Financial statements for the tax period",
      "Trade license and corporate structure details",
      "FTA Corporate Tax registration number, if already registered",
      "Details of any related-party transactions",
    ],
    requirementsImage: "/images/stich/s6.jpg",
    process: [
      {
        step: "01",
        title: "Registration confirmed",
        description: "We register your company for Corporate Tax with the FTA.",
      },
      {
        step: "02",
        title: "Taxable income calculated",
        description: "Your accounting profit is adjusted under UAE Corporate Tax law.",
      },
      {
        step: "03",
        title: "Return prepared",
        description: "Your annual return is drafted and reviewed for accuracy.",
      },
      {
        step: "04",
        title: "Filed & confirmed",
        description: "Your CT return is submitted to the FTA ahead of the deadline.",
      },
    ],
    breakImage: "/images/stich/h1.jpg",
    breakEyebrow: "UAE Corporate Tax",
    breakHeading: <>Handled by people <span className="text-primary-light">who understand it</span></>,
    breakStats: [
      { value: "9%", label: "Standard rate above AED 375k" },
      { value: "0%", label: "Rate on profits up to AED 375k" },
    ],
    faqs: [
      {
        q: "What's the UAE Corporate Tax rate?",
        a: "0% on profits up to AED 375,000, and 9% on profits above that, for most businesses. Some qualifying free zone entities may be eligible for 0% on qualifying income. We'll assess your eligibility.",
      },
      {
        q: "Do all UAE companies need to register for Corporate Tax?",
        a: "Yes, registration is required for virtually all UAE businesses regardless of profit level, even if no tax is ultimately due. We handle the registration for you.",
      },
      {
        q: "What is Small Business Relief?",
        a: "It's an election available to businesses below a specified revenue threshold that can treat them as having no taxable income for the period. We assess your eligibility before applying it.",
      },
      {
        q: "Can free zone companies still pay 0% Corporate Tax?",
        a: "Qualifying free zone entities can benefit from 0% on qualifying income, with non-qualifying income taxed at the standard 9% rate. We review your income streams to confirm your position.",
      },
    ],
  },
};

const ALL_SERVICE_LINKS = [
  { slug: "bookkeeping", title: "Bookkeeping", href: "/accounting-tax/bookkeeping", image: "/images/stich/a5.jpg" },
  { slug: "vat", title: "VAT Filing", href: "/accounting-tax/vat", image: "/images/stich/vat services.jpg" },
  { slug: "corptax", title: "Corporate Tax", href: "/accounting-tax/corptax", image: "/images/stich/w2.jpg" },
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
    alternates: { canonical: `/accounting-tax/${data.slug}` },
    openGraph: {
      title,
      description: data.heroSubcopy,
      url: `/accounting-tax/${data.slug}`,
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

export default async function AccountingServicePage({
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
    { label: "Accounting & Tax", href: "/accounting-tax" },
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
                Explore the other <span className="text-primary">accounting & tax services</span>
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
