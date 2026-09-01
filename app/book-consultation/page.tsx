import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import ConsultationForm from "@/components/ConsultationForm";
import { breadcrumbJsonLd } from "@/lib/seo";

const TITLE = "Book a Free Consultation | Purple Cow";
const DESCRIPTION =
  "Book a free consultation with Purple Cow for UAE company formation, PRO services, or accounting and tax support — a clear, upfront answer, no sales pressure.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/book-consultation" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/book-consultation",
    images: [{ url: "/images/dubai-skyline.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/dubai-skyline.png"],
  },
};

const BREADCRUMB_ITEMS = [{ label: "Home", href: "/" }, { label: "Book Free Consultation" }];

export default function BookConsultationPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(BREADCRUMB_ITEMS)} />
      <Navbar />
      <main>
        {/* Intro */}
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-14 lg:px-8 lg:pt-40 lg:pb-16">
            <Breadcrumb items={BREADCRUMB_ITEMS} />
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                Book Free Consultation
              </span>
              <h1 className="animate-fade-up text-balance mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-white [animation-delay:120ms] sm:text-5xl lg:text-[3.25rem]">
                It&apos;s time to <span className="text-primary-light">connect</span>
              </h1>
              <p className="animate-fade-up text-balance mx-auto mt-6 max-w-2xl text-lg text-white/70 [animation-delay:240ms]">
                Fill in the form with a few essential details and a dedicated
                account manager will get back to you — usually within a business
                day. All information stays private with us.
              </p>
            </div>
          </div>
        </section>

        {/* Split panel */}
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative overflow-hidden bg-hero-deep px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
            <div className="absolute inset-0 grid-fade opacity-60" aria-hidden />
            <div className="relative">
              <p className="text-sm font-medium text-white/60">WhatsApp Us</p>
              <a
                href="https://wa.me/"
                className="mt-2 inline-block text-3xl font-bold text-white transition hover:text-primary-light sm:text-4xl"
              >
                Chat instantly
              </a>

              <p className="mt-10 text-sm font-medium text-white/60">Mail Us</p>
              <a
                href="mailto:hello@purplecow.ae"
                className="mt-2 inline-block text-3xl font-bold text-white transition hover:text-primary-light sm:text-4xl"
              >
                hello@purplecow.ae
              </a>

              <div className="mt-14 rounded-2xl border border-white/15 bg-white/[0.03] p-8">
                <h2 className="text-xl font-semibold text-primary-light">Our Presence</h2>
                <div className="mt-4 border-t border-white/10 pt-4">
                  <p className="text-white/70">Dubai, United Arab Emirates</p>
                  <p className="mt-2 text-sm text-white/50">
                    Most of the process, including document submission, can be
                    handled remotely — some steps, like visa biometrics, typically
                    require a visit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s get your consultation booked
            </h2>
            <p className="mt-4 max-w-xl text-white/80">
              Tell us a bit about your business so that our expert team can
              prepare before we speak — no sales pressure, no hidden fees.
            </p>

            <div className="mt-8">
              <ConsultationForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
