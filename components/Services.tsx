"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import ServiceCards, { type ServiceCardData } from "./ServiceCards";
import BusinessSetupShowcase from "./BusinessSetupShowcase";
import CorporateServicesShowcase from "./CorporateServicesShowcase";
import AccountingTaxShowcase from "./AccountingTaxShowcase";
import ServicesExpandPanels, { type ServicePillar } from "./ServicesExpandPanels";

const CARDS: ServiceCardData[] = [
  {
    title: "Business Setup",
    photo: "/images/service/business set 3.jpeg",
    href: "/business-setup",
  },
  {
    title: "Corporate Services",
    photo: "/images/service/corporate 3.jpeg",
    href: "/corporate-services",
  },
  {
    title: "Accounting & Tax",
    photo: "/images/service/tax 3.jpeg",
    href: "/accounting-tax",
  },
];

const PANELS: ServicePillar[] = [
  {
    title: "Business Setup",
    eyebrow: "Launch Your UAE Business",
    description:
      "Mainland, Free Zone, or Offshore — we structure your company around your business, not the other way around.",
    cta: "Get Started",
    image: "/images/service/business setup illustraion.png",
    animateImageOnActive: true,
    imageContainerVariant: "glass",
    illustrationFullBleed: true,
    ctaHref: "/business-setup",
    customIllustration: (active) => <BusinessSetupShowcase active={active} />,
    basis: 42,
  },
  {
    title: "Corporate Services",
    eyebrow: "Scale With Corporate Services",
    description:
      "Everything that keeps a company running day to day, so you can focus on running the business.",
    cta: "Get Started",
    image: "/images/service/corporate service illustration.png",
    animateImageOnActive: true,
    illustrationFullBleed: true,
    ctaHref: "/corporate-services",
    customIllustration: (active) => <CorporateServicesShowcase active={active} />,
    basis: 33,
  },
  {
    title: "Accounting & Tax",
    eyebrow: "Navigate Accounting & Tax",
    description:
      "Real accountants, not a form-filling service. Your books and your filings, handled by people who understand UAE compliance.",
    cta: "Get Started",
    image: "/images/service/tax illustration.png",
    animateImageOnActive: true,
    illustrationFullBleed: true,
    ctaHref: "/accounting-tax",
    customIllustration: (active) => <AccountingTaxShowcase active={active} />,
    basis: 25,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-6 sm:py-10">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-start justify-between gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-5xl">
              Everything your Business <span className="text-primary">needs to Thrive</span>
            </h2>
            <p className="mt-3 text-sm text-ink-soft sm:mt-4 sm:text-lg">
              One partner for formation, compliance, and the corporate admin in between.
            </p>
          </div>
          <Image
            src="/images/logo-mark.png"
            alt="Purple Cow"
            width={775}
            height={721}
            className="hidden shrink-0 opacity-85 sm:block sm:h-30 sm:w-auto lg:h-34"
          />
        </div>

        {/* Mobile/tablet: static photo cards */}
        <Reveal delay={1} className="mt-8 lg:hidden">
          <ServiceCards cards={CARDS} />
        </Reveal>

        {/* Desktop: original hover-to-expand animated panels */}
        <Reveal delay={1} className="mt-12 hidden lg:block">
          <ServicesExpandPanels pillars={PANELS} />
        </Reveal>
      </div>
    </section>
  );
}
