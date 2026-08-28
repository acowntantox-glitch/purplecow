const STEPS = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "We understand your zone selection, regulatory setup steps, and precise structural tax impacts before you spend a dirham.",
  },
  {
    step: "02",
    title: "Documentation",
    description:
      "Our expert managers compile, structure, and pre-vet every required setup file so nothing bounces back from the authority.",
  },
  {
    step: "03",
    title: "Registration & Setup",
    description:
      "Official incorporation and licensing, run directly through government agencies — no unnecessary middlemen.",
  },
  {
    step: "04",
    title: "Ongoing Growth",
    description:
      "Hand off recurring VAT filings, bookkeeping, and visa tracking seamlessly to your dedicated account manager.",
  },
];

export default function Process() {
  return (
    <section className="bg-white/85 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            From first call to your first VAT filing — one continuous process.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((item, index) => (
            <div key={item.step} className="relative">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-semibold text-primary/25">
                  {item.step}
                </span>
                {index < STEPS.length - 1 && (
                  <span className="hidden h-px flex-1 bg-surface-border lg:block" />
                )}
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
