export type Section = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  badge: string;
  dek: string;
  heroImage: string;
  readTime: string;
  updated: string;
  updatedISO: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
};

export const ARTICLES: Record<string, Article> = {
  "mainland-freezone-offshore": {
    slug: "mainland-freezone-offshore",
    title: "Mainland, Free Zone, or Offshore — how to actually choose",
    badge: "Business Setup",
    dek: "Every UAE setup company will tell you which structure to pick. Here's the honest breakdown of what each one actually does, so you can tell when their advice is right for your business — not just easiest for them to sell.",
    heroImage: "/images/service/business setup.jpg",
    readTime: "7 min read",
    updated: "Updated August 2026",
    updatedISO: "2026-08-31",
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
    updatedISO: "2026-08-31",
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
    updatedISO: "2026-08-31",
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
    updatedISO: "2026-08-31",
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

  "uae-corporate-bank-account-guide": {
    slug: "uae-corporate-bank-account-guide",
    title: "Opening a UAE corporate bank account, without the runaround",
    badge: "Business Setup",
    dek: "Banks reject more UAE company accounts than founders expect — almost never because the business is a bad fit, but because the application was. Here's what compliance teams actually look for.",
    heroImage: "/images/service/business 1.jpg",
    readTime: "6 min read",
    updated: "Updated September 2026",
    updatedISO: "2026-09-01",
    sections: [
      {
        heading: "Why banks say no more often than people expect",
        paragraphs: [
          "A freshly licensed company is, from a bank's point of view, an unknown risk with no transaction history. UAE banks run every application through AML and KYC screening that looks at the shareholders' nationality and source of funds, the business activity, where customers and suppliers are based, and whether the company's story is coherent — a Free Zone consultancy with no UAE clients and a licensed activity that doesn't match the stated business model raises questions before a human even reviews the file.",
          "None of that means the account is unbankable. It means the application has to answer the bank's questions before they're asked, rather than leaving compliance to guess and default to a rejection.",
        ],
      },
      {
        heading: "The documents that actually move the decision",
        paragraphs: [
          "Every bank asks for the basics — trade license, MOA, Emirates ID and passport copies for shareholders and signatories, and proof of a UAE address. The applications that get approved faster go further than that minimum.",
        ],
        bullets: [
          "A clear business plan or activity description — what you sell, to whom, and roughly what volumes look like in year one.",
          "Proof of source of funds for the initial deposit and for shareholders with significant capital — bank statements, prior business sale documents, or salary history.",
          "Evidence of substance where relevant — a signed office lease (not just a flexi-desk certificate), and for Free Zone companies, anything that shows real activity in the zone.",
          "A few sample invoices, contracts, or supplier/customer details if the business is already trading, even informally.",
        ],
      },
      {
        heading: "Free Zone accounts vs Mainland accounts",
        paragraphs: [
          "Mainland companies generally have an easier time — a physical, Ejari-registered office and a licensed activity that matches visible local trade gives compliance teams less to question. Free Zone companies aren't disadvantaged by default, but a Free Zone entity with no UAE office, no local invoices, and shareholders who've never visited the UAE will get more scrutiny, particularly if the shareholders' nationality falls into a bank's higher-risk category.",
          "This isn't a Free Zone problem specifically — it's a substance problem. The banks that specialize in Free Zone and international-trading clients (several digital-first and mid-tier banks position themselves exactly for this) tend to have faster, more predictable processes for this profile than the largest retail banks, whose compliance teams are more used to Mainland-style applicants.",
        ],
      },
      {
        heading: "Realistic timeline",
        paragraphs: [
          "With a complete file, account opening typically takes 2–4 weeks from application to an active account, though this stretches considerably if compliance comes back with follow-up questions — which is the single biggest driver of delay, not the bank's internal processing speed. Some banks offer a faster provisional account for smaller local-trading businesses, but international or higher-risk profiles should plan for the longer end of that range.",
        ],
      },
      {
        heading: "The mistake we see most often",
        paragraphs: [
          "Founders apply to one bank, get rejected without a clear reason, and reapply to another bank with the exact same file — repeating the same gap that caused the first rejection. Banks share more risk signals across the market than people assume, and a string of rejections on the same weak application makes each subsequent one harder, not easier.",
          "The better move is to diagnose the actual gap — usually source-of-funds evidence, a mismatched business narrative, or insufficient substance — fix it, and then apply, ideally to a bank whose typical client profile actually matches the business.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I open a UAE business account before my company is fully licensed?",
        a: "No — banks require the issued trade license and, usually, the company's establishment card before opening an account. Some banks will start pre-screening in parallel with the final stages of licensing, but the account itself can't be activated until the license is issued.",
      },
      {
        q: "Do I need to be physically present in the UAE to open the account?",
        a: "Most banks require at least one in-person meeting with a signatory, though a few digital-first banks now offer largely remote onboarding for certain profiles. Assume an in-person visit will be needed unless your bank confirms otherwise.",
      },
      {
        q: "What's the minimum balance for a UAE corporate account?",
        a: "It varies significantly by bank and account tier — anywhere from AED 0 for some digital-first accounts to AED 50,000 or more for traditional bank business accounts, with fees if the balance drops below the minimum. Confirm this before choosing a bank, not after.",
      },
      {
        q: "If one bank rejects my application, does that hurt my chances elsewhere?",
        a: "It can — UAE banks share certain risk-flagging information, and a pattern of rejections on an unchanged application makes each new attempt harder. Fix the underlying gap before reapplying rather than simply trying a different bank with the same file.",
      },
    ],
  },

  "vat-registration-uae-guide": {
    slug: "vat-registration-uae-guide",
    title: "VAT registration and filing for UAE businesses: what actually matters",
    badge: "Accounting & Tax",
    dek: "5% sounds simple until you hit the threshold rules, the input tax details, and the filing deadlines that catch growing businesses off guard. Here's what actually matters, without the FTA jargon.",
    heroImage: "/images/service/tax 3.jpeg",
    readTime: "6 min read",
    updated: "Updated September 2026",
    updatedISO: "2026-09-01",
    sections: [
      {
        heading: "The thresholds that decide whether you register",
        paragraphs: [
          "VAT registration becomes mandatory once your taxable supplies and imports exceed AED 375,000 over the previous 12 months, or if you expect to cross that threshold in the next 30 days alone. Below that, there's a voluntary registration threshold of AED 187,500 — useful for a new business that wants to reclaim input VAT on setup costs before revenue ramps up.",
          "Miss the mandatory threshold without registering and the FTA can apply late-registration penalties dating back to when you should have registered, not from when they caught it — which is why tracking rolling 12-month turnover matters more than checking it once a year.",
        ],
        bullets: [
          "Mandatory registration: taxable supplies over AED 375,000 in the past 12 months, or expected in the next 30 days.",
          "Voluntary registration: taxable supplies or expenses over AED 187,500.",
          "Below AED 187,500: registration isn't available, and isn't required.",
        ],
      },
      {
        heading: "What actually counts as \"taxable supplies\"",
        paragraphs: [
          "This is where businesses most often miscalculate. Taxable supplies include standard-rated (5%) and zero-rated supplies, but the threshold calculation also needs to include imports of goods and services that would be taxable if supplied in the UAE. Exempt supplies — certain financial services, residential real estate leasing, and bare land, among others — don't count toward the threshold at all, which can mean a business with high revenue in an exempt category never needs to register.",
          "Getting this wrong in either direction causes real problems: under-counting delays a mandatory registration you actually needed; over-counting can lead a business to register and take on filing obligations for revenue that was never taxable in the first place.",
        ],
      },
      {
        heading: "Filing: what it actually involves each period",
        paragraphs: [
          "Most businesses file VAT returns quarterly through EmaraTax, though the FTA can assign a monthly cycle to larger businesses. Each return reports output VAT (charged on sales) and input VAT (paid on business expenses), with the difference either paid to the FTA or, if input exceeds output, carried forward or reclaimed.",
          "The return itself is only as accurate as the underlying bookkeeping — every sales invoice needs the correct VAT treatment applied at the point of issue, and every expense needs a valid tax invoice to support the input VAT claim. Reconstructing this at quarter-end from bank statements alone is the most common source of filing errors we see.",
        ],
        bullets: [
          "Standard filing cycle: quarterly, due within 28 days of the period end.",
          "Some large or specific businesses are moved to monthly filing by the FTA.",
          "Every input VAT claim needs a valid tax invoice — a bank statement line isn't sufficient support on its own.",
          "Zero-rated and exempt supplies still need to be reported correctly, even though no VAT is charged.",
        ],
      },
      {
        heading: "Input VAT: what you can and can't reclaim",
        paragraphs: [
          "Input VAT on genuine business expenses — office rent, professional services, most business purchases — is generally reclaimable against output VAT. A few categories are specifically blocked or restricted regardless of business purpose, most notably VAT on entertainment expenses for anyone other than employees, and VAT on most motor vehicles available for personal use.",
          "Free Zone and Designated Zone businesses have additional nuance here — supplies between Designated Zones can be outside the scope of VAT in some cases, which affects both what you charge and what you can reclaim. This is one area worth getting specific advice on rather than assuming standard mainland VAT logic applies unchanged.",
        ],
      },
      {
        heading: "The mistake we see most often",
        paragraphs: [
          "Businesses register for VAT, then treat it as a quarterly task rather than something that affects every invoice issued in between. The result is invoices raised with the wrong VAT treatment, corrected months later, and a return that takes far longer to prepare than it should because the underlying records don't match what should have been charged.",
          "The businesses that handle VAT smoothly build the correct treatment into their invoicing from day one — so the quarterly return is a matter of reviewing and submitting clean numbers, not reconstructing three months of transactions under deadline pressure.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to register for VAT if I'm below the mandatory threshold?",
        a: "Not unless you choose voluntary registration above AED 187,500 in taxable supplies or expenses. Below that, registration isn't available at all. Many new businesses register voluntarily anyway to reclaim input VAT on setup costs.",
      },
      {
        q: "Is VAT the same as Corporate Tax?",
        a: "No — they're entirely separate taxes with different thresholds, rates, and filing cycles. VAT is a 5% tax on supplies of goods and services; Corporate Tax is a tax on annual profit. A business can owe one, both, or neither.",
      },
      {
        q: "What happens if I file my VAT return late?",
        a: "The FTA applies fixed and percentage-based penalties for late filing and late payment, and they escalate for repeated lateness. There's no grace period for a first offense, so treat the filing deadline as fixed rather than flexible.",
      },
      {
        q: "Can Free Zone companies avoid charging VAT entirely?",
        a: "No — Free Zone status affects Corporate Tax eligibility, not VAT by default. Some transactions between Designated Zones have special VAT treatment, but a Free Zone company generally still needs to register and charge VAT the same way a Mainland company does once it crosses the threshold.",
      },
    ],
  },
};

export function getAllArticles(): Article[] {
  return Object.values(ARTICLES).sort((a, b) => (a.updatedISO < b.updatedISO ? 1 : -1));
}

export function getArticle(slug: string): Article | undefined {
  return ARTICLES[slug];
}
