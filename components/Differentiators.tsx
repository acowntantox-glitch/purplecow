import Link from "next/link";
import Reveal from "./Reveal";
import DifferentiatorsShowcase from "./DifferentiatorsShowcase";

export default function Differentiators() {
  return (
    <section id="differentiators" className="bg-white pt-5 pb-8 sm:pt-10 sm:pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-balance ml-auto max-w-4x1 text-right text-sm font-bold tracking-tight text-black sm:text-2xl">
            Company formation is easy. Staying compliant afterwards is where
            most businesses struggle —{" "}
            <span className="text-primary">it&apos;s where we come in.</span>
          </p>
        </Reveal>

        <div className="relative -mx-6 mt-4 overflow-hidden rounded-none hero-glow sm:mt-6 lg:-mx-8">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div
            className="stripe-corner pointer-events-none absolute right-0 top-0 h-24 w-24 sm:h-32 sm:w-32"
            aria-hidden
          />

          <div className="relative grid grid-cols-1 items-center gap-5 p-5 sm:gap-12 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
            {/* Left: heading & copy */}
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/80 sm:px-4 sm:py-1.5 sm:text-xs">
                Why Purple Cow
              </span>
              <h2 className="text-balance mt-4 font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-[2.75rem]">
                Why leading businesses{" "}
                <span className="text-primary-light">choose Purple Cow</span>
              </h2>
              <p className="mt-3 max-w-md text-sm text-white/70 sm:mt-6 sm:text-lg">
                We treat accounting as the core of the business, not an upsell
                after formation.
              </p>
              <Link
                href="/why-purple-cow"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-light sm:mt-6"
              >
                See the full comparison <span aria-hidden>&rarr;</span>
              </Link>
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
