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
        <h1 className="animate-fade-up mt-8 text-left text-balance font-display text-xl leading-[1.25] font-medium tracking-tight text-white/70 [animation-delay:60ms] [text-shadow:0_4px_24px_rgba(0,0,0,0.45)] sm:mt-6 sm:text-4xl sm:leading-[1.15] lg:text-5xl">
          <span className="sm:block">The Clear-Headed Way To Set Up</span>
          <span className="sm:block lg:whitespace-nowrap"> And Run A company in the UAE</span>
        </h1>

        <p className="animate-fade-up mt-3 text-left text-[9px] text-white/40 [animation-delay:120ms] sm:mx-auto sm:mt-6 sm:max-w-2xl sm:text-balance sm:text-lg">
          <span className="sm:inline">Purple Cow replaces confusion with clarity —</span>
          <br className="sm:hidden" />
          <span className="sm:inline"> combining company formation with genuine accounting and tax expertise</span>
        </p>

        <div className="mt-16 flex justify-center sm:hidden" >
          <a
            href="/book-consultation"
            className="inline-flex items-center justify-center rounded-full border border-white/75 bg-white/10 px-2 py-1 text-xs font-semibold text-white opacity-50 "
          >
            Schedule a Call
          </a>
        </div>

        <div className="sm:mt-10" />
      </div>

      <dl className="mt-14 grid max-w-2xl grid-cols-4 gap-2 border-t border-white/10 pt-4 sm:mx-auto sm:mt-20 sm:max-w-4xl sm:gap-8 sm:pt-10">
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
