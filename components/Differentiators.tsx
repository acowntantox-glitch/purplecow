import Reveal from "./Reveal";
import DifferentiatorsShowcase from "./DifferentiatorsShowcase";

export default function Differentiators() {
  return (
    <section id="differentiators" className="bg-white py-16 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-balance ml-auto max-w-4xl text-right text-4x1 font-bold tracking-tight text-black sm:text-2xl">
            Company formation is easy. Staying compliant afterwards is where
            most businesses struggle —{" "}
            <span className="text-primary">it&apos;s where we come in.</span>
          </p>
        </Reveal>

        <div className="relative mt-10 overflow-hidden rounded-[1rem] hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div
            className="stripe-corner pointer-events-none absolute right-0 top-0 h-24 w-24 sm:h-32 sm:w-32"
            aria-hidden
          />

          <div className="relative grid grid-cols-1 items-center gap-12 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
            {/* Left: heading & copy */}
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                Why Purple Cow
              </span>
              <h2 className="text-balance mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Why leading businesses{" "}
                <span className="text-primary-light">choose Purple Cow</span>
              </h2>
              <p className="mt-6 max-w-md text-lg text-white/70">
                We treat accounting as the core of the business, not an upsell
                after formation.
              </p>
            </Reveal>

            {/* Right: small mockup container — scenes animate in one by one */}
            <Reveal delay={150}>
              <DifferentiatorsShowcase />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
