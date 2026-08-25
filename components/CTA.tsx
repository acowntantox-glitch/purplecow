export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden hero-glow">
      <div className="absolute inset-0 grid-fade" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to launch your business in the UAE?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-lg text-white/70">
          Book a free consultation and get a clear, upfront answer on jurisdiction,
          timeline, and cost — no sales pressure, no hidden fees.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@purplecow.ae"
            className="w-full rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light sm:w-auto"
          >
            Book Free Consultation
          </a>
          <a
            href="https://wa.me/"
            className="w-full rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
