import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";
import JsonLd from "@/components/JsonLd";
import { articleJsonLd, faqPageJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { ARTICLES } from "@/lib/insights";

export function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return {};

  const title = `${article.title} | Purple Cow`;
  return {
    title,
    description: article.dek,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: "article",
      title,
      description: article.dek,
      url: `/insights/${article.slug}`,
      images: [{ url: article.heroImage }],
      modifiedTime: article.updatedISO,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: article.dek,
      images: [article.heroImage],
    },
  };
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) notFound();

  const related = Object.values(ARTICLES).filter((a) => a.slug !== article.slug);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: article.title },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbItems)} />
      <JsonLd data={faqPageJsonLd(article.faqs)} />
      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.dek,
          slug: article.slug,
          image: article.heroImage,
          datePublished: article.updatedISO,
          dateModified: article.updatedISO,
        })}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-24">
            <Breadcrumb items={breadcrumbItems} />
            <div className="mt-10">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                {article.badge}
              </span>
              <h1 className="animate-fade-up text-balance mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-white [animation-delay:60ms] sm:text-4xl lg:text-[2.75rem]">
                {article.title}
              </h1>
              <p className="animate-fade-up text-balance mt-6 max-w-2xl text-base text-white/70 [animation-delay:120ms] sm:text-lg">
                {article.dek}
              </p>
              <div className="animate-fade-up mt-6 flex items-center gap-3 text-xs font-medium text-white/50 [animation-delay:150ms]">
                <span>{article.updated}</span>
                <span aria-hidden>&middot;</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="bg-white">
          <div className="mx-auto -mt-10 max-w-4xl px-6 lg:px-8">
            <Reveal>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                <Image
                  src={article.heroImage}
                  alt={article.title}
                  fill
                  sizes="(min-width: 1024px) 60vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Article body */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="space-y-12">
              {article.sections.map((section, i) => (
                <Reveal key={section.heading} delay={i * 60}>
                  <div>
                    <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((p, pi) => (
                        <p key={pi} className="text-base leading-relaxed text-ink-soft">
                          {p}
                        </p>
                      ))}
                    </div>
                    {section.bullets && (
                      <ul className="mt-5 space-y-2.5">
                        {section.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2.5 text-base leading-relaxed text-ink-soft">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <Reveal>
              <div className="text-center">
                <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-4xl">
                  Frequently asked <span className="text-primary">questions</span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 space-y-3">
              {article.faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 60}>
                  <details className="group rounded-2xl border border-surface-border bg-white px-6 py-5 open:shadow-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                      {f.q}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-open:rotate-45">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Related insights */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <h2 className="text-balance text-2xl font-bold tracking-tight text-black sm:text-3xl">
                More <span className="text-primary">insights</span>
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <div className="-mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-hide sm:mx-0 sm:gap-6">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/insights/${a.slug}`}
                    className="group flex h-full w-44 shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-surface-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:w-80"
                  >
                    <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden sm:aspect-[4/3]">
                      <Image
                        src={a.heroImage}
                        alt={a.title}
                        fill
                        sizes="(min-width: 640px) 320px, 176px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4 sm:p-6">
                      <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-ink sm:text-base">{a.title}</h3>
                      <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-bold uppercase tracking-wide text-primary sm:pt-4">
                        Read more
                        <span className="transition-transform duration-300 group-hover:translate-x-1">»</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
