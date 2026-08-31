import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import Breadcrumb from "@/components/Breadcrumb";

type Section = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type Article = {
  slug: string;
  title: string;
  badge: string;
  dek: string;
  heroImage: string;
  readTime: string;
  updated: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
};

const ARTICLES: Record<string, Article> = {
  "mainland-freezone-offshore": {
    slug: "mainland-freezone-offshore",
    title: "Mainland, Free Zone, or Offshore — how to actually choose",
    badge: "Business Setup",
    dek: "Every UAE setup company will tell you which structure to pick. Here's the honest breakdown of what each one actually does, so you can tell when their advice is right for your business — not just easiest for them to sell.",
    heroImage: "/images/service/business setup.jpg",
    readTime: "7 min read",
    updated: "Updated August 2026",
    sections: [
      {
        heading: "It's not \"which is best\" — it's \"which matches how you trade\"",
        paragraphs: [
          "Mainland, Free Zone, and Offshore aren't tiers of a good/better/best ladder. They're three different legal structures built for three different ways of doing business. A company that's perfect for a Dubai retail shop would be the wrong choice for a Cayman-style holding entity, and vice versa.",
          "The fastest way to pick correctly is to work backwards from one question: where does your revenue actually come from — the UAE market, international clients, or neither (you're just holding assets)?",
        ],
      },
      {
        heading: "Mainland: unrestricted access to the UAE market",
        paragraphs: [
          "A Mainland company is licensed by the Department of Economic Development (DED) in your emirate. It can trade with anyone, anywhere in the UAE, take on government and semi-government contracts, and open branches across all seven emirates without re-licensing.",
          "Since the 2021 ownership reforms, most commercial and professional activities allow 100% foreign ownership on Mainland too — the old requirement for a 51% local sponsor is now the exception, not the rule, and mostly applies to a short list of \"strategically important\" sectors.",
          "The trade-off is overhead: Mainland companies generally need a physical, Ejari-registered office (a flexi-desk rarely qualifies for every activity), and profits above AED 375,000 are taxed at the standard 9% Corporate Tax rate with no special exemption route.",
        ],
        bullets: [
          "Best for: retail, F&B, clinics, contractors bidding on government work, and any business that needs a walk-in presence or multiple UAE locations.",
          "Ownership: 100% foreign ownership on most activities.",
          "Tax position: standard 9% Corporate Tax above AED 375,000 in profit.",
        ],
      },
      {
        heading: "Free Zone: built for international and zone-based business",
        paragraphs: [
          "Free Zones are self-contained economic areas — over 40 of them across the UAE, several purpose-built around an industry (media, tech, commodities, logistics). A Free Zone company gets 100% foreign ownership by default, fast, digital-first licensing, and a visa quota tied to your office package.",
          "The catch that catches people out: a standard Free Zone license cannot trade directly with the UAE mainland market. If your customers are outside the UAE, or you're a consultancy, e-commerce brand, or holding company, that's rarely a problem. If you're planning to sell to walk-in customers in Dubai, it is — you'd need a distributor, a dual license, or a Mainland entity alongside it.",
          "On tax, Free Zone companies can qualify for 0% Corporate Tax as a \"Qualifying Free Zone Person,\" but that status has real conditions attached — adequate substance in the zone, income that meets the FTA's definition of \"qualifying,\" and audited financials. It's an earned status, not an automatic perk of the license.",
        ],
        bullets: [
          "Best for: international trading, consultancy, e-commerce, tech, and holding companies with no need to sell directly onshore.",
          "Ownership: 100% foreign ownership, always.",
          "Tax position: 0% possible if you qualify as a Qualifying Free Zone Person — otherwise the standard 9% applies.",
        ],
      },
      {
        heading: "Offshore: structuring, not trading",
        paragraphs: [
          "Offshore companies (registered through jurisdictions like JAFZA Offshore or RAK ICC) aren't licensed to trade or invoice within the UAE at all. They exist to hold assets, own property or shares in other companies, open international bank accounts, and structure ownership with confidentiality — with no requirement for a physical UAE office and, typically, no attached UAE residence visa.",
          "If someone suggests an Offshore company so you can \"run your UAE business\" through it, that's a red flag. It's the right tool for holding structures and international asset protection, not for day-to-day operating businesses.",
        ],
        bullets: [
          "Best for: holding companies, asset protection, international structuring, owning UAE real estate or shares in other entities.",
          "Ownership: 100% foreign ownership, full confidentiality.",
          "Tax position: not licensed to earn UAE-sourced trading income, so standard onshore Corporate Tax mechanics don't apply the same way — get specific advice before assuming any exemption.",
        ],
      },
      {
        heading: "A five-question decision framework",
        paragraphs: [
          "Before comparing price lists, answer these — they'll point you to the right structure faster than any sales call will.",
        ],
        bullets: [
          "Will you sell directly to customers physically inside the UAE? If yes, lean Mainland.",
          "Is every client international, remote, or B2B? Free Zone is usually cheaper and faster to set up.",
          "Do you need to bid on government or semi-government contracts? Only Mainland qualifies.",
          "Are you holding assets, property, or shares rather than trading? Offshore is built for exactly this.",
          "Will you need employee visas quickly, and how many? Free Zone visa quotas are simpler to scale early; Mainland has no hard cap but ties visas to office size.",
        ],
      },
      {
        heading: "The mistake we see most often",
        paragraphs: [
          "Founders pick Free Zone purely because it's cheaper upfront, then discover six months in that their biggest opportunity is a Dubai-based client who needs a Mainland-issued invoice. It's not a dead end — you can add a Mainland entity or a dual license — but it costs more in total than choosing correctly the first time.",
          "The reverse also happens: businesses that will only ever serve international clients pay for a Mainland office and the higher compliance overhead that comes with it, for market access they never use.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I convert a Free Zone company to Mainland later?",
        a: "Not as a simple conversion — you'd typically form a new Mainland entity (or add a dual license through certain free zones that now offer it) rather than change your existing license type. It's straightforward to do, but it's a new setup, not an amendment.",
      },
      {
        q: "Do I need to live in the UAE to own any of these?",
        a: "No. All three structures allow 100% foreign ownership without a UAE residency requirement for shareholders. A UAE residence visa becomes relevant only if you want to live and work here yourself.",
      },
      {
        q: "Is Free Zone always cheaper than Mainland?",
        a: "Usually for year one, yes — mainly because Mainland's office requirement adds a lease and Ejari cost that most Free Zone packages don't. But run the comparison against what your business actually needs, not just the headline license fee.",
      },
      {
        q: "Can an Offshore company get me a UAE visa?",
        a: "Generally no — most Offshore jurisdictions don't come with a UAE residence visa. If you need to live in the UAE, you'll want a Mainland or Free Zone company instead, or alongside it.",
      },
    ],
  },

  "uae-corporate-tax-small-business": {
    slug: "uae-corporate-tax-small-business",
    title: "UAE Corporate Tax for small businesses, explained simply",
    badge: "Accounting & Tax",
    dek: "No jargon, no 40-page guide — just what a small UAE business actually needs to know about Corporate Tax, Small Business Relief, and the deadline that changes things in 2027.",
    heroImage: "/images/service/tax.jpg",
    readTime: "6 min read",
    updated: "Updated August 2026",
    sections: [
      {
        heading: "The headline numbers",
        paragraphs: [
          "UAE Corporate Tax applies at 0% on the first AED 375,000 of annual taxable profit, and 9% on everything above that. It's a tax on profit, not revenue — so a business with high turnover but thin margins can still owe very little.",
          "It's separate from VAT, which is a 5% tax on most goods and services once a business crosses the mandatory VAT registration threshold (AED 375,000 in taxable supplies over 12 months). Plenty of small businesses deal with both taxes at once, and they're filed and paid completely independently of each other.",
        ],
      },
      {
        heading: "Small Business Relief — while it still exists",
        paragraphs: [
          "If your business's revenue is AED 3 million or less in a tax period, you can elect for Small Business Relief and be treated as having no taxable income for that period — effectively 0% Corporate Tax, regardless of profit margin.",
          "Two details trip people up. First, it's revenue-based, not profit-based — a low-margin business with AED 2.8 million in revenue and a bad year can still qualify. Second, it is not automatic: you have to actively elect it in your Corporate Tax return through the EmaraTax portal, every eligible tax period.",
          "The relief currently runs for tax periods ending on or before 31 December 2026. Unless the Ministry of Finance extends it, most qualifying small businesses will move into the standard Corporate Tax regime from 2027 — which makes 2026 the year to get your bookkeeping and tax registration properly in order, before the relief that's been covering for gaps disappears.",
        ],
        bullets: [
          "Threshold: AED 3 million or less in revenue for the tax period.",
          "Effect: taxed as having zero taxable income — no 9% liability.",
          "Action required: elected annually via your Corporate Tax return, not automatic.",
          "Expiry: applies to tax periods ending on or before 31 December 2026.",
        ],
      },
      {
        heading: "Free Zone companies: 0% is possible, but it's earned",
        paragraphs: [
          "A Free Zone company doesn't get 0% Corporate Tax simply for having a Free Zone license. It has to qualify as a \"Qualifying Free Zone Person\" — meaning it maintains adequate substance in the zone, earns income the FTA classifies as \"qualifying income,\" keeps audited financial statements, and doesn't fall foul of the de minimis rules on non-qualifying revenue.",
          "Get this wrong — say, by earning too much non-qualifying income, or not maintaining real substance — and the FTA can disqualify the entity from the 0% rate for that period and the following four, applying the standard 9% instead. This is one area where cutting corners on setup advice costs real money later.",
        ],
      },
      {
        heading: "What every business needs to do, regardless of size",
        paragraphs: [
          "Corporate Tax registration in the UAE is mandatory for virtually every business, including ones that expect to owe nothing under Small Business Relief. Not registering, or registering late, carries its own penalties — separate from whatever tax you actually end up owing.",
        ],
        bullets: [
          "Register for Corporate Tax through EmaraTax as soon as you're licensed — don't wait until you think you owe money.",
          "Keep proper, ongoing bookkeeping. \"I'll reconstruct it at year-end\" is the single most common cause of late or incorrect filings.",
          "Know your tax period and filing deadline — generally nine months after your financial year-end.",
          "If you're claiming Small Business Relief, elect it explicitly in the return each eligible period.",
          "If you're a Free Zone entity aiming for 0%, review your income mix regularly, not just once a year.",
        ],
      },
      {
        heading: "Planning ahead of the 2027 shift",
        paragraphs: [
          "Because Small Business Relief is scheduled to end for periods after 31 December 2026, many small businesses that have paid effectively nothing in Corporate Tax so far are about to face the standard 9% regime for the first time. The businesses that handle this smoothly are the ones that already have clean, real-time books, a clear picture of their actual margins, and an accountant who's been tracking this deadline — not the ones scrambling to reconstruct a year of transactions in early 2027.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I owe Corporate Tax if my business made a loss?",
        a: "No — Corporate Tax is charged on taxable profit. A loss-making period generally means no Corporate Tax liability, though you may still need to register and file, and losses can often be carried forward to offset future profits.",
      },
      {
        q: "Is VAT the same thing as Corporate Tax?",
        a: "No, they're entirely separate taxes with separate registration, thresholds, and filing cycles. VAT is a 5% tax on supplies of goods and services; Corporate Tax is a tax on annual profit. A business can be liable for one, both, or neither depending on its revenue and profit.",
      },
      {
        q: "What happens when Small Business Relief ends?",
        a: "For tax periods after 31 December 2026 (unless extended), eligible small businesses will file under the standard regime: 0% up to AED 375,000 in profit, 9% above it — the same rules that already apply to larger companies.",
      },
      {
        q: "Can a Free Zone company just assume it pays 0% tax?",
        a: "No — 0% only applies to income that qualifies under the Qualifying Free Zone Person rules, and the status has to be actively maintained. Non-qualifying income is taxed at the standard 9% rate even inside a Free Zone entity.",
      },
    ],
  },

  "dubai-company-setup-cost-2026": {
    slug: "dubai-company-setup-cost-2026",
    title: "What a Dubai company setup really costs in 2026",
    badge: "Business Setup",
    dek: "\"Company formation from AED 5,750\" ads are technically true and practically useless. Here's what a Dubai setup actually costs once you add the pieces those headlines leave out.",
    heroImage: "/images/dubai-skyline.png",
    readTime: "8 min read",
    updated: "Updated August 2026",
    sections: [
      {
        heading: "Why the advertised price is never the real price",
        paragraphs: [
          "Most \"starting from AED 5,750\" offers describe a bare license with zero visas — no residence visa for you, no Emirates ID, no employee visas, often no dedicated office. The moment you add even one visa, the real first-year number moves several thousand dirhams higher. That's not a hidden fee — it's just a different product to the one advertised.",
          "The honest way to budget a Dubai setup is to price four things separately: the license itself, the office or facility requirement, visas (including your own), and ongoing PRO and compliance costs. Add them up before you compare providers, not after you've signed.",
        ],
      },
      {
        heading: "Free Zone: typically AED 12,000–30,000 for year one",
        paragraphs: [
          "Free Zone packages scale mainly with the visa quota you choose. A zero-visa package can start around AED 5,750–18,000 depending on the zone and activity; add residency and a realistic visa allowance and most founders land between AED 12,000 and AED 30,000 for a complete first-year setup — license, registration, and one or two visas included.",
        ],
        bullets: [
          "License and registration fee — varies by zone and business activity.",
          "Flexi-desk or office package — bundled into most Free Zone license fees.",
          "Visa allocation — each additional visa beyond the included quota adds cost.",
          "Establishment card and immigration file — a one-time setup cost, separate from the license.",
        ],
      },
      {
        heading: "Mainland: typically AED 30,000–50,000 for year one",
        paragraphs: [
          "Mainland costs more because of two things a Free Zone package usually doesn't require: a physical, Ejari-registered office lease, and — for regulated activities — external approvals from other government bodies before the DED will issue your license. A basic Mainland license can start around AED 12,000–25,000, but by the time office rent and approvals are added, most first-year totals land between AED 30,000 and AED 50,000, sometimes more for regulated or capital-intensive activities.",
        ],
        bullets: [
          "DED trade license fee — activity-dependent.",
          "Office lease and Ejari registration — often the single biggest line item.",
          "External approvals — required for regulated activities (health, education, F&B, and others).",
          "Initial approval and MOA drafting fees.",
        ],
      },
      {
        heading: "Visas and PRO: the recurring cost people forget to budget",
        paragraphs: [
          "A standard employment visa — work permit, residence visa, medical test, and Emirates ID — generally runs AED 3,000 to AED 8,000+ per person, whether the entity is Mainland or Free Zone. The Emirates ID itself is priced at roughly AED 100 per year of visa validity, so a standard two-year visa carries an AED 200 Emirates ID fee on top.",
          "PRO services — the liaison work with GDRFA, MOHRE, and the ICP that actually gets these applications through — are usually priced either per transaction (roughly AED 500–2,000 per visa handled) or as a monthly retainer (commonly AED 1,000–5,000, depending on company size and how many transactions you run). Either way, budget it as an ongoing line item, not a one-off.",
        ],
      },
      {
        heading: "The renewal year people don't plan for",
        paragraphs: [
          "Year one gets all the attention, but license renewal, visa renewals, and office lease renewal all land again in year two — and none of them are free just because you've already paid once. A realistic annual run-rate from year two onward is typically 60–80% of your first-year total, once you strip out one-off setup costs like initial approvals and establishment cards.",
        ],
      },
      {
        heading: "A rough real-world example",
        paragraphs: [
          "A two-person consultancy choosing a Free Zone with one visa each might land around AED 20,000–26,000 for year one: license and registration, two visas with medical and Emirates ID, and a small PRO package to handle it. A retail business choosing Mainland with a small office and three staff visas is a different scale entirely — often AED 45,000–65,000 once rent, approvals, and visas are all in, before any inventory or fit-out cost. These are illustrative ranges, not quotes — get a written breakdown for your specific activity before committing.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Free Zone always the cheaper option?",
        a: "Usually for a low-visa, no-office setup, yes. But once you need several employee visas or a physical retail/office presence a Free Zone doesn't include by default, the gap to Mainland narrows quickly — sometimes Mainland ends up cheaper once approvals and shared office solutions are factored in.",
      },
      {
        q: "What's the single biggest cost people underestimate?",
        a: "Visas and PRO fees. Founders budget carefully for the license, then treat visas as an afterthought — but for a team of four or five, visa and PRO costs can equal or exceed the license fee itself.",
      },
      {
        q: "Do renewal costs really drop after year one?",
        a: "Yes, generally — one-off setup items like initial approvals, MOA drafting, and establishment cards don't recur. But license renewal, office rent, and visa renewals do, so budget a meaningful ongoing cost, not close to zero.",
      },
      {
        q: "Can I get an exact quote before committing to anything?",
        a: "You should insist on one. A specific, written cost breakdown for your exact business activity, visa count, and office requirement takes a few minutes to produce and removes almost all the guesswork in this article.",
      },
    ],
  },

  "employment-visas-pro-services": {
    slug: "employment-visas-pro-services",
    title: "Employment visas and PRO services, without the queueing",
    badge: "Corporate Services",
    dek: "What a PRO actually does, what the employment visa process really involves step by step, and where DIY applications quietly go wrong.",
    heroImage: "/images/service/corporate service.jpg",
    readTime: "6 min read",
    updated: "Updated August 2026",
    sections: [
      {
        heading: "What \"PRO services\" actually means",
        paragraphs: [
          "PRO stands for Public Relations Officer — in practice, it's the person or service handling your company's paperwork with the UAE's government entities: GDRFA (immigration), MOHRE (labor), and the ICP (Identity and Citizenship). Visa processing, labor card issuance, Emirates ID applications, and license and establishment card renewals all run through a PRO in one form or another.",
          "It's not a legal requirement to outsource this — any company can process its own visas — but the process runs through multiple government portals and physical counters, and small procedural mistakes are what actually cause delays, not the process itself being complicated.",
        ],
      },
      {
        heading: "The employment visa process, step by step",
        paragraphs: [
          "The exact sequence varies slightly between Mainland and Free Zone entities, but the shape is the same:",
        ],
        bullets: [
          "Entry permit — an initial approval allowing the employee to enter the UAE (or change status if already inside) for the purpose of employment.",
          "Status change or entry — the employee enters the UAE or changes status from a visit visa, if already in-country.",
          "Medical fitness test — a mandatory health screening at an approved center; results typically take a few days.",
          "Emirates ID biometrics — fingerprints and photo captured for the national ID card.",
          "Visa stamping — the residence visa is stamped into the employee's passport, completing the process.",
        ],
      },
      {
        heading: "Realistic cost and timeline",
        paragraphs: [
          "End to end, a standard employment visa typically takes 7–15 working days once documents are ready, though this stretches if any approval bounces back for correction. All-in cost — work permit, entry permit, medical, Emirates ID, and visa stamping — generally lands between AED 3,000 and AED 8,000 per employee, with Emirates ID alone priced at roughly AED 100 per year of visa validity (AED 200 for a standard two-year visa).",
          "PRO handling on top of the government fees is usually priced per transaction (roughly AED 500–2,000 per visa) or as a monthly retainer (commonly AED 1,000–5,000) for companies processing visas regularly.",
        ],
      },
      {
        heading: "Where DIY applications usually go wrong",
        paragraphs: [
          "It's rarely the big things that cause delays — it's small, avoidable errors: a medical test booked before the entry permit is fully issued, a document translation that's technically incorrect, an application submitted under the wrong labor category for the role, or a company's own establishment card or quota lapsing without anyone noticing until an application bounces.",
          "Each of these adds days or weeks, not because the process is genuinely slow, but because the correction has to queue behind the original mistake. A PRO who processes these applications constantly catches this class of error before submission, which is the actual value — not some special access DIY applicants don't have.",
        ],
      },
      {
        heading: "What good PRO service looks like in practice",
        paragraphs: [
          "It's not just \"someone who submits the forms.\" A properly run PRO function tracks every employee's visa and Emirates ID expiry proactively (so renewals never lapse into a fine), keeps your company's own establishment card and immigration file in good standing, and gives you a clear, upfront timeline for each application instead of a vague \"we'll follow up.\"",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I sponsor my employee's family on the same visa process?",
        a: "Not on the same visa — but once an employee's residence visa and salary meet the relevant threshold, they can separately sponsor family members through their own residence visa, using a similar entry-permit-to-stamping process.",
      },
      {
        q: "What happens if a visa or Emirates ID expires before renewal?",
        a: "It triggers fines that accrue per day of overstay or expiry, and can affect the employee's ability to work or exit/re-enter the UAE smoothly. This is exactly what proactive PRO tracking is meant to prevent.",
      },
      {
        q: "Is the process different for Free Zone employees?",
        a: "The broad steps — entry permit, medical, Emirates ID, stamping — are the same, but Free Zone visas are processed through that zone's own immigration department rather than GDRFA directly, and visa quotas are tied to your Free Zone office package.",
      },
      {
        q: "How far in advance should visa renewal start?",
        a: "Ideally 30 days before expiry. Starting earlier gives enough buffer to fix any document issue without risking a lapse, which is far more expensive and disruptive than the renewal itself.",
      },
    ],
  },
};

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

  return {
    title: `${article.title} | Purple Cow`,
    description: article.dek,
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

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden hero-glow">
          <div className="absolute inset-0 grid-fade" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-24">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Insights", href: "/#insights" },
                { label: article.title },
              ]}
            />
            <div className="mt-10">
              <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80">
                {article.badge}
              </span>
              <h1 className="animate-fade-up text-balance mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-white [animation-delay:120ms] sm:text-4xl lg:text-[2.75rem]">
                {article.title}
              </h1>
              <p className="animate-fade-up text-balance mt-6 max-w-2xl text-lg text-white/70 [animation-delay:240ms]">
                {article.dek}
              </p>
              <div className="animate-fade-up mt-6 flex items-center gap-3 text-xs font-medium text-white/50 [animation-delay:300ms]">
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
                <h2 className="text-balance text-3xl font-bold tracking-tight text-black sm:text-4xl">
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

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((a, index) => (
                <Reveal key={a.slug} delay={index * 80}>
                  <Link
                    href={`/insights/${a.slug}`}
                    className="group block h-full overflow-hidden rounded-2xl border border-surface-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={a.heroImage}
                        alt={a.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-semibold leading-snug text-ink">{a.title}</h3>
                      <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-primary">
                        Read more
                        <span className="transition-transform duration-300 group-hover:translate-x-1">»</span>
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
