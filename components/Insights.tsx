import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

const INSIGHTS = [
  {
    title: "Mainland, Free Zone, or Offshore — how to actually choose",
    image: "/images/service/business setup.jpg",
    slug: "mainland-freezone-offshore",
  },
  {
    title: "UAE Corporate Tax for small businesses, explained simply",
    image: "/images/service/tax.jpg",
    slug: "uae-corporate-tax-small-business",
  },
  {
    title: "What a Dubai company setup really costs in 2026",
    image: "/images/dubai-skyline.png",
    slug: "dubai-company-setup-cost-2026",
  },
  {
    title: "Employment visas and PRO services, without the queueing",
    image: "/images/service/corporate service.jpg",
    slug: "employment-visas-pro-services",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="bg-white/85 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance flex items-center justify-center gap-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              <Image
                src="/images/logo-mark.png"
                alt=""
                width={775}
                height={721}
                className="h-8 w-auto shrink-0 sm:h-10"
              />
              Business Setup in Dubai Insights
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              Keep up with UAE company formation, tax, and compliance — explained
              by the team that files it.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INSIGHTS.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <Link
                href={`/insights/${item.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-surface-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold leading-snug text-ink">
                    {item.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-primary">
                    Read more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      »
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
