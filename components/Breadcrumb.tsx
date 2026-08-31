import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  const backHref = items.length > 1 ? items[items.length - 2].href ?? "/" : "/";

  return (
    <div className="animate-fade-up flex flex-col items-start gap-3 text-left">
      <Link
        href={backHref}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 transition hover:text-white"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Back
      </Link>
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center justify-start gap-x-2 gap-y-1 text-xs font-medium text-white/50 sm:text-sm"
      >
        {items.map((item, i) => (
          <span key={item.label} className="flex items-center gap-2">
            {i > 0 && (
              <span aria-hidden className="text-white/30">
                &gt;
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className="transition hover:text-white/80">
                {item.label}
              </Link>
            ) : (
              <span className="text-white/80">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
