import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | Purple Cow",
  description:
    "How Purple Cow collects, uses, and protects your personal data when you use our website and services.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "31 August 2026";

const SECTIONS = [
  {
    heading: "1. Who we are",
    body: [
      "Purple Cow (\"we\", \"us\", \"our\") provides company formation, accounting, and corporate services in the United Arab Emirates. This policy explains how we handle personal data collected through purplecow.ae and in the course of providing our services.",
    ],
  },
  {
    heading: "2. Information we collect",
    body: [
      "We collect information you provide directly — for example, when you book a consultation, email us, or message us on WhatsApp. This may include your name, email address, phone number, and details about your business.",
      "We also collect limited technical information automatically when you visit our website, such as pages viewed and general usage patterns, typically through analytics tools.",
    ],
  },
  {
    heading: "3. How we use your information",
    body: [
      "We use the information we collect to respond to enquiries, provide company formation and accounting services, communicate with you about your engagement with us, and improve our website and services.",
      "We do not sell your personal data to third parties.",
    ],
  },
  {
    heading: "4. Sharing your information",
    body: [
      "We may share information with government authorities (such as the Department of Economic Development, free zone authorities, or the Federal Tax Authority) where necessary to complete a licensing, visa, or tax filing you've engaged us to handle, and with service providers who support our operations (such as hosting or communication tools), under appropriate confidentiality terms.",
    ],
  },
  {
    heading: "5. Data retention",
    body: [
      "We retain personal data for as long as necessary to provide our services and to meet legal, regulatory, and accounting record-keeping obligations under UAE law.",
    ],
  },
  {
    heading: "6. Your rights",
    body: [
      "Depending on applicable law, including the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021), you may have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us using the details below.",
    ],
  },
  {
    heading: "7. Contact us",
    body: [
      "If you have questions about this Privacy Policy or how your data is handled, contact us at hello@purplecow.ae.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-16 lg:px-8 lg:pt-40">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
            <h1 className="animate-fade-up text-balance mt-8 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="animate-fade-up mt-3 text-sm text-white/50">Last updated {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-10 px-6 lg:px-8">
            {SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold tracking-tight text-ink">{section.heading}</h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((p, i) => (
                    <p key={i} className="text-base leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
