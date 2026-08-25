const STATS = [
  { value: "500+", label: "Companies formed" },
  { value: "100%", label: "Transparent pricing" },
  { value: "<5 min", label: "WhatsApp response" },
  { value: "10+", label: "Years combined expertise" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-glow">
      <div className="absolute inset-0 grid-fade" aria-hidden />
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-90"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-hero via-hero/70 to-hero/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-40 pb-24 lg:px-8 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-5xl text-center">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
            Business Setup &middot; Accounting &middot; Tax &middot; Corporate Services
          </span>

          <h1 className="animate-fade-up mt-6 font-display text-3xl leading-[1.15] font-medium tracking-tight text-white [animation-delay:120ms] sm:text-4xl lg:text-5xl">
            <span className="block">The clear-headed way to set up and run </span>
            <span className="block lg:whitespace-nowrap">a company in the UAE</span>
          </h1>

          <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-balance text-lg text-white/70 [animation-delay:240ms]">
            Purple Cow replaces confusion with clarity — combining company formation
            with genuine accounting and tax expertise
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* <a
              href="#contact"
              className="w-full rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light sm:w-auto"
            >
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/"
              className="w-full rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Chat on WhatsApp
            </a> */}
          </div>
        </div>

        <dl className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="text-2xl font-semibold text-white sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
