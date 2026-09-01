export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden hero-glow">
      <div className="absolute inset-0 grid-fade" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:py-24 lg:px-8">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to launch your business in the UAE?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-balance text-[9px] text-white/70 sm:mt-4 sm:text-lg">
          Book a free consultation and get a clear, upfront answer on jurisdiction,
          timeline, and cost — no sales pressure, no hidden fees.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
          <a
            href="/book-consultation"
            className="w-fit rounded-full bg-primary px-4 py-2 text-center text-xs font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
          >
            Book Free Consultation
          </a>
          <a
            href="https://wa.me/"
            className="w-fit rounded-full border border-white/20 bg-white/5 px-4 py-2 text-center text-xs font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
