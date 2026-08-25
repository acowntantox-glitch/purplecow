import Reveal from "./Reveal";

// Placeholder quotes — swap in real client testimonials before launch.
const QUOTES = [
  {
    quote:
      "We compared four setup agencies. Purple Cow was the only one that could actually explain our VAT position before we signed anything.",
    name: "[Client name]",
    role: "Founder, E-commerce SME",
  },
  {
    quote:
      "The account manager model made the difference. One person knew our whole file, from licensing through to our first Corporate Tax filing.",
    name: "[Client name]",
    role: "Managing Partner, Consulting Firm",
  },
  {
    quote:
      "Pricing was on the page, not behind a form. That alone put them ahead of everyone else we called.",
    name: "[Client name]",
    role: "Co-founder, Tech Startup",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Trusted by founders & CEOs
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {QUOTES.map((item, index) => (
            <Reveal key={item.role} delay={index * 120} className="h-full">
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-surface-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <blockquote className="text-sm leading-relaxed text-ink">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm">
                  <span className="font-semibold text-ink">{item.name}</span>
                  <span className="block text-ink-soft">{item.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
