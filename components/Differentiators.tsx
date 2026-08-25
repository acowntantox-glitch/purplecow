import Reveal from "./Reveal";

const ITEMS = [
  {
    title: "Technology-Driven",
    description:
      "A client portal that replaces email threads and lost paperwork — track filings, documents, and deadlines in one place.",
  },
  {
    title: "Dedicated Account Managers",
    description:
      "Your single point of contact for personalized support and corporate continuity, not a rotating support queue.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden administrative fees or surprise costs. Predictable monthly and flat setup charges, shown before you commit.",
  },
  {
    title: "WhatsApp-First Support",
    description:
      "Reach a real person where you already are — typically within 5 minutes during business hours.",
  },
];

export default function Differentiators() {
  return (
    <section id="differentiators" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Why leading businesses choose Purple Cow
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            We treat accounting as the core of the business, not an upsell after formation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 100} className="h-full">
              <div className="h-full rounded-2xl border border-surface-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
