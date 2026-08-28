import Image from "next/image";
import Reveal from "./Reveal";
import ServicesExpandPanels from "./ServicesExpandPanels";

const PILLARS = [
  {
    title: "Business Setup",
    eyebrow: "Launch Your UAE Business",
    description:
      "Mainland, Free Zone, or Offshore — we structure your company around your business, not the other way around.",
    cta: "Get Started",
    image: "/images/service/business setup.jpg",
    basis: 42,
  },
  {
    title: "Corporate Services",
    eyebrow: "Scale With Corporate Services",
    description:
      "Everything that keeps a company running day to day, so you can focus on running the business.",
    cta: "Get Started",
    image: "/images/service/corporate service.jpg",
    basis: 33,
  },
  {
    title: "Accounting & Tax",
    eyebrow: "Navigate Accounting & Tax",
    description:
      "Real accountants, not a form-filling service. Your books and your filings, handled by people who understand UAE compliance.",
    cta: "Get Started",
    image: "/images/service/tax.jpg",
    basis: 25,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-14">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-5xl">
              Everything your Business <span className="text-primary">needs to Thrive</span>
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              One partner for formation, compliance, and the corporate admin in between.
            </p>
          </div>
          <Image
            src="/images/logo-mark.png"
            alt="Purple Cow"
            width={775}
            height={721}
            className="h-24 w-auto shrink-0 sm:h-30 lg:h-34 opacity-85"
          />
        </div>

        <Reveal delay={1} className="mt-12">
          <ServicesExpandPanels pillars={PILLARS} />
        </Reveal>
      </div>
    </section>
  );
}
