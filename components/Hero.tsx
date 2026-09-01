import Counter from "./Counter";

const STATS = [
  { value: "500+", label: "Companies formed", shortLabel: "Companies" },
  { value: "100%", label: "Transparent pricing", shortLabel: "Transparent" },
  { value: "<5 min", label: "WhatsApp response", shortLabel: "Response" },
  { value: "10+", label: "Years combined expertise", shortLabel: "Experience" },
];

export default function Hero() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-8 sm:pt-40 sm:pb-24 lg:px-8 lg:pt-48 lg:pb-32">
      <div className="max-w-xl text-right sm:mx-auto sm:max-w-5xl sm:text-center">
        <span className="animate-fade-up mx-auto flex w-fit items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-0.5 py-0.5 text-[9px] font-medium text-white/80 sm:mx-0 sm:inline-flex sm:w-auto sm:gap-2 sm:px-4 sm:py-1.5 sm:text-xs">
          Business Setup &middot; Corporate Services
        </span>

        <h1 className="animate-fade-up mt-8 text-center text-balance font-display text-xl leading-[1.25] font-medium tracking-tight text-white/70 [animation-delay:120ms] [text-shadow:0_4px_24px_rgba(0,0,0,0.45)] sm:mt-6 sm:text-4xl sm:leading-[1.15] lg:text-5xl">
          <span className="sm:block">The Clear-Headed Way To Set Up And Run </span>
          <span className="sm:block lg:whitespace-nowrap">A company in the UAE</span>
        </h1>

        <p className="animate-fade-up mt-6 text-center text-balance text-xs text-white/40 [animation-delay:240ms] sm:mx-auto sm:mt-6 sm:max-w-2xl sm:text-lg">
          Purple Cow replaces confusion with clarity — combining company formation
          with genuine accounting and tax expertise
        </p>

        <div className="sm:mt-10" />
      </div>

      <dl className="mt-16 grid max-w-2xl grid-cols-4 gap-2 border-t border-white/10 pt-4 sm:mx-auto sm:mt-20 sm:max-w-4xl sm:gap-8 sm:pt-10">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <dt className="text-sm font-semibold whitespace-nowrap text-white sm:text-3xl">
              <Counter value={stat.value} />
            </dt>
            <dd className="mt-1 text-[9px] whitespace-nowrap text-white/60 sm:hidden">
              {stat.shortLabel}
            </dd>
            <dd className="mt-1 hidden text-sm text-white/60 sm:block">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
