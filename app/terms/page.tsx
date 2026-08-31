import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service | Purple Cow",
  description: "The terms that govern your use of purplecow.ae and Purple Cow's services.",
  alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "31 August 2026";

const SECTIONS = [
  {
    heading: "1. Acceptance of terms",
    body: [
      "By using purplecow.ae or engaging Purple Cow for company formation, accounting, or corporate services, you agree to these Terms of Service. If you don't agree, please don't use the site or our services.",
    ],
  },
  {
    heading: "2. Our services",
    body: [
      "Purple Cow provides UAE company formation, accounting, tax, and corporate administration services. The specific scope, deliverables, timeline, and fees for any engagement are agreed separately in a written proposal or engagement letter before work begins — content on this website is informational and doesn't itself constitute a service agreement.",
    ],
  },
  {
    heading: "3. Website content",
    body: [
      "Information on this website — including the Insights articles — is provided for general guidance only and does not constitute legal, tax, or financial advice. UAE regulations, fees, and thresholds change, and figures referenced on this site should be verified before you rely on them for a business decision.",
    ],
  },
  {
    heading: "4. Fees and payment",
    body: [
      "Fees for our services are set out in your engagement letter or proposal. Government fees (licensing, visas, approvals) are separate from our service fees and are payable in addition, as applicable to your specific setup.",
    ],
  },
  {
    heading: "5. Limitation of liability",
    body: [
      "While we take care to provide accurate and timely services, Purple Cow is not liable for delays or outcomes caused by third parties, including government authorities, banks, or free zone bodies, that are outside our reasonable control.",
    ],
  },
  {
    heading: "6. Intellectual property",
    body: [
      "All content on this website, including text, graphics, and logos, is the property of Purple Cow unless otherwise stated, and may not be reproduced without permission.",
    ],
  },
  {
    heading: "7. Governing law",
    body: [
      "These terms are governed by the laws of the United Arab Emirates.",
    ],
  },
  {
    heading: "8. Contact us",
    body: [
      "Questions about these terms can be sent to hello@purplecow.ae.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-16 lg:px-8 lg:pt-40">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
            <h1 className="animate-fade-up text-balance mt-8 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Terms of Service
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
