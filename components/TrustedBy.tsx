const FACTS = [
  {
    text: "Licensed setup across Mainland, Free Zone & Offshore",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    text: "In-house accounting & tax — not outsourced",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <line x1="8" y1="7" x2="16" y2="7" />
        <line x1="8" y1="11" x2="10.5" y2="11" />
        <line x1="13.5" y1="11" x2="16" y2="11" />
        <line x1="8" y1="14.5" x2="10.5" y2="14.5" />
        <line x1="13.5" y1="14.5" x2="16" y2="14.5" />
        <line x1="8" y1="18" x2="10.5" y2="18" />
        <line x1="13.5" y1="18" x2="16" y2="18" />
      </svg>
    ),
  },
  {
    text: "Pricing shown up front, never gated behind a form",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3h7a1 1 0 011 1v7a1 1 0 01-.3.7l-8.6 8.6a1 1 0 01-1.4 0l-7.7-7.7a1 1 0 010-1.4L10.6 3.3A1 1 0 0112 3z" />
        <circle cx="16.5" cy="7.5" r="1.25" />
      </svg>
    ),
  },
  {
    text: "20+ nationalities served",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <line x1="3" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
];

function FactCard({ fact }: { fact: (typeof FACTS)[number] }) {
  return (
    <div className="flex w-28 shrink-0 items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-2 py-1.5 shadow-lg shadow-black/10 backdrop-blur-md sm:w-96 sm:gap-3 sm:rounded-xl sm:px-5 sm:py-4">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-primary-light sm:h-9 sm:w-9">
        <span className="h-3 w-3 sm:h-5 sm:w-5">{fact.icon}</span>
      </span>
      <p className="text-[8px] font-medium leading-tight text-white/90 sm:text-sm sm:leading-normal">{fact.text}</p>
    </div>
  );
}

export default function TrustedBy() {
  const track = [...FACTS, ...FACTS];

  return (
    <section className="relative py-8 sm:py-10">
      <div className="animate-marquee relative flex w-max gap-3 sm:gap-4">
        {track.map((fact, index) => (
          <FactCard key={`${fact.text}-${index}`} fact={fact} />
        ))}
      </div>
    </section>
  );
}
