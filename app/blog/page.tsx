import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { getAllArticles } from "@/lib/insights";

const TITLE = "Blog | UAE Business Setup, Tax & Compliance Insights | Purple Cow";
const DESCRIPTION =
  "Company formation, Corporate Tax, VAT, banking, and PRO services in the UAE, explained plainly by the team that files it — not summarized from someone else's blog.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/blog",
    images: [{ url: "/images/dubai-skyline.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/dubai-skyline.png"],
  },
};

const BREADCRUMB_ITEMS = [{ label: "Home", href: "/" }, { label: "Blog" }];

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(BREADCRUMB_ITEMS)} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-24">
            <Breadcrumb items={BREADCRUMB_ITEMS} />
            <div className="mx-auto mt-10 max-w-2xl text-center">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                Blog
              </span>
              <h1 className="animate-fade-up text-balance mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-white [animation-delay:60ms] sm:text-5xl">
                UAE business setup, tax &{" "}
                <span className="text-primary-light">compliance, explained plainly</span>
              </h1>
              <p className="animate-fade-up text-balance mx-auto mt-6 max-w-xl text-base text-white/70 [animation-delay:120ms] sm:text-lg">
                Company formation, Corporate Tax, VAT, banking, and PRO services —
                written by the team that files it, not summarized from someone
                else&apos;s blog.
              </p>
            </div>
          </div>
        </section>

        {/* Articles grid */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <Reveal key={article.slug} delay={(index % 3) * 100}>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-surface-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                      <Image
                        src={article.heroImage}
                        alt={article.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {article.badge}
                      </span>
                      <h2 className="mt-4 text-lg font-semibold leading-snug text-ink">
                        {article.title}
                      </h2>
                      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">
                        {article.dek}
                      </p>
                      <div className="mt-5 flex items-center gap-3 text-xs font-medium text-ink-soft/70">
                        <span>{article.updated}</span>
                        <span aria-hidden>&middot;</span>
                        <span>{article.readTime}</span>
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-primary">
                        Read more
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          »
                        </span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
