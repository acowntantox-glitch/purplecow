"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "Mainland, Free Zone, or Offshore — which do I need?",
    answer:
      "It depends on where you plan to trade, whether you need a physical office, and your ownership structure. We map this out for free in your first consultation before recommending a jurisdiction.",
  },
  {
    question: "How long does company formation actually take?",
    answer:
      "Most Free Zone setups complete in 3–7 working days once documents are submitted. Mainland licenses can take slightly longer depending on activity approvals. We give you a realistic timeline up front, not a marketing number.",
  },
  {
    question: "Do you handle VAT and Corporate Tax, or just formation?",
    answer:
      "Accounting and tax are core to what we do, not an add-on. Bookkeeping, VAT registration and filing, and Corporate Tax services are handled in-house by our accounting team.",
  },
  {
    question: "Is your pricing really shown up front?",
    answer:
      "Yes. Setup packages and service bundles are published with clear inclusions and exclusions — we don't gate pricing behind a contact form.",
  },
  {
    question: "What if I already have a company and just need accounting?",
    answer:
      "That's a common starting point. We can take over bookkeeping, VAT, payroll, and PRO services for an existing company without touching your license.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <dl className="mt-12 divide-y divide-surface-border">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="py-5">
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between text-left text-base font-semibold text-ink"
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    <svg
                      className={`ml-4 h-5 w-5 shrink-0 text-primary transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M10 4a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 0110 4z" />
                    </svg>
                  </button>
                </dt>
                {isOpen && (
                  <dd className="mt-3 pr-8 text-sm leading-relaxed text-ink-soft">
                    {faq.answer}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
