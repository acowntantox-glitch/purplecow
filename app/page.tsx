import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import Differentiators from "@/components/Differentiators";
import Insights from "@/components/Insights";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
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
            <div
              className="absolute inset-0"
              style={{
                background:
                 "linear-gradient(to bottom, rgba(11,10,31,0.2) 0%, rgba(11,10,31,0.55) 55%, rgba(11,10,31,0.92) 100%)"
              }}
              aria-hidden
            />
          </div>

          <Hero />
          <TrustedBy />
        </section>
        <Services />
        <Differentiators />
        <Insights />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
