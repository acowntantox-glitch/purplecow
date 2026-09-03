import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import { faqPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";

const TITLE = "Contact Us | Purple Cow Business Setup & Accounting";
const DESCRIPTION =
  "Get in touch with Purple Cow for UAE company formation, PRO services, or accounting and tax support. Reach us by WhatsApp, email, or the form below — typically within five minutes during business hours.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contact",
    images: [{ url: "/images/dubai-skyline.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/dubai-skyline.png"],
  },
};

const BREADCRUMB_ITEMS = [{ label: "Home", href: "/" }, { label: "Contact" }];

const CONTACT_METHODS = [
  {
    title: "WhatsApp",
    description: "Typically within 5 minutes during business hours.",
    action: "Chat on WhatsApp",
    href: "https://wa.me/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.4A7.96 7.96 0 0 1 4 12z" />
      </svg>
    ),
  },
  {
    title: "Email",
    description: "For documents, quotes, or anything in writing.",
    action: "hello@purplecow.ae",
    href: "mailto:hello@purplecow.ae",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "Office",
    description: "Dubai, United Arab Emirates.",
    action: "Get directions",
    href: "https://maps.google.com/?q=Dubai,United+Arab+Emirates",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
];

const FAQS = [
  {
    q: "How quickly will I hear back?",
    a: "WhatsApp messages are typically answered within five minutes during business hours. Form and email enquiries usually get a response within one business day.",
  },
  {
    q: "Is the initial consultation free?",
    a: "Yes. The first consultation is free and comes with a clear, upfront answer on jurisdiction, timeline, and cost — no sales pressure.",
  },
  {
    q: "Can I reach you outside UAE business hours?",
    a: "You can send a WhatsApp message or email anytime — we'll pick it up as soon as the team is back online, usually the next business morning.",
  },
  {
    q: "Do I need to visit your Dubai office in person?",
    a: "No. Most of the process, including document submission, can be handled remotely. Some steps, like visa biometrics or opening a bank account, typically require an in-person visit.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(BREADCRUMB_ITEMS)} />
      <JsonLd data={faqPageJsonLd(FAQS)} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-24">
            <Breadcrumb items={BREADCRUMB_ITEMS} />
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                Contact Us
              </span>
              <h1 className="animate-fade-up text-balance mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-white [animation-delay:60ms] sm:text-5xl lg:text-[3.25rem]">
                Let&apos;s talk about{" "}
                <span className="text-primary-light">your business in the UAE</span>
              </h1>
              <p className="animate-fade-up text-balance mx-auto mt-6 max-w-2xl text-base text-white/70 [animation-delay:120ms] sm:text-lg">
                Whether you&apos;re forming a new company or need a second opinion on
                your books, send us a message. A real person on the team replies —
                not a support queue.
              </p>
            </div>
          </div>
        </section>

        {/* Contact methods */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {CONTACT_METHODS.map((m, i) => (
                <Reveal key={m.title} delay={i * 80}>
                  <a
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex h-full flex-col rounded-2xl border border-surface-border bg-white p-6 shadow-sm transition hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary [&_svg]:h-5 [&_svg]:w-5">
                      {m.icon}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {m.action} <span aria-hidden>&rarr;</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Form + details */}
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
                  Send a message
                </span>
                <h2 className="text-balance mt-6 text-2xl font-bold tracking-tight text-black sm:text-4xl">
                  Tell us what you need
                </h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
                  Share a few details and we&apos;ll come back with a clear answer —
                  not a generic sales pitch.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="rounded-2xl border border-surface-border bg-white p-8 shadow-sm">
                  <h3 className="text-lg font-semibold text-ink">Business hours</h3>
                  <dl className="mt-4 space-y-2 text-sm text-ink-soft">
                    <div className="flex items-center justify-between">
                      <dt>Sunday – Thursday</dt>
                      <dd className="font-medium text-ink">9:00 AM – 6:00 PM</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt>Friday – Saturday</dt>
                      <dd className="font-medium text-ink">Closed</dd>
                    </div>
                  </dl>

                  <div className="mt-8 border-t border-surface-border pt-6">
                    <h3 className="text-lg font-semibold text-ink">Head office</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      Dubai, United Arab Emirates
                    </p>
                  </div>

                  <div className="mt-8 border-t border-surface-border pt-6">
                    <h3 className="text-lg font-semibold text-ink">Prefer to talk now?</h3>
                    <a
                      href="https://wa.me/"
                      className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-20 sm:py-24">
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
      </main>
      <Footer />
    </>
  );
}
