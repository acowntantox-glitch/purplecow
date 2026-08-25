import Image from "next/image";
import Reveal from "./Reveal";

const PILLARS = [
  {
    title: "Business Setup",
    description:
      "Mainland, Free Zone, or Offshore — we structure your company around your business, not the other way around.",
    items: ["Mainland company formation", "Free Zone company formation", "Offshore company formation"],
  },
  {
    title: "Accounting & Tax",
    description:
      "Real accountants, not a form-filling service. Your books and your filings, handled by people who understand UAE compliance.",
    items: ["Bookkeeping", "VAT registration & filing", "Corporate Tax services", "Payroll"],
  },
  {
    title: "Corporate Services",
    description:
      "Everything that keeps a company running day to day, so you can focus on running the business.",
    items: [
      "PRO services",
      "Visa processing",
      "Bank account assistance",
      "Business consulting",
      "Document attestation & legal translation",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/dubai.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Everything your business needs to thrive
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            One partner for formation, compliance, and the corporate admin in between.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 120} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-surface-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <h3 className="text-xl font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm text-ink-soft">{pillar.description}</p>
                <ul className="mt-6 space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 text-sm font-semibold text-primary transition hover:text-primary-light"
                >
                  Learn more &rarr;
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
