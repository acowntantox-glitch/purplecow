import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pt-40 pb-32 text-center lg:px-8">
            <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
              404
            </span>
            <h1 className="animate-fade-up text-balance mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-white [animation-delay:60ms] sm:text-5xl">
              This page didn&apos;t make it through customs
            </h1>
            <p className="animate-fade-up text-balance mx-auto mt-6 max-w-xl text-lg text-white/70 [animation-delay:120ms]">
              The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back
              on track.
            </p>
            <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row [animation-delay:160ms]">
              <Link
                href="/"
                className="w-full rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light sm:w-auto"
              >
                Back to homepage
              </Link>
              <Link
                href="/#insights"
                className="w-full rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Browse insights
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
