"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Business Setup",
    href: "/business-setup",
    children: [
      { label: "Mainland", href: "/business-setup/mainland" },
      { label: "Free Zone", href: "/business-setup/free-zone" },
      { label: "Offshore", href: "/business-setup/offshore" },
    ],
  },
  {
    label: "Corporate Services",
    href: "/corporate-services",
    children: [
      { label: "PRO & Visa Services", href: "/corporate-services#pro" },
      { label: "Corporate Banking", href: "/corporate-services#banking" },
      { label: "Renewals & Compliance", href: "/corporate-services#renewals" },
    ],
  },
  {
    label: "Accounting & Tax",
    href: "/accounting-tax",
    children: [
      { label: "Bookkeeping", href: "/accounting-tax#bookkeeping" },
      { label: "VAT Filing", href: "/accounting-tax#vat" },
      { label: "Corporate Tax", href: "/accounting-tax#corptax" },
    ],
  },
  { label: "About", href: "/#differentiators" },
  { label: "Blog", href: "/#insights" },
];

const CHEVRON = (
  <svg
    viewBox="0 0 24 24"
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-200 group-hover:rotate-180"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solidBg = scrolled || mobileOpen;

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solidBg
          ? "border-b border-white/10 bg-hero/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/logo-transparent-white.png"
            alt="Purple Cow"
            width={260}
            height={130}
            className="h-16 w-auto md:h-20 lg:h-24"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white"
                >
                  {link.label}
                  {CHEVRON}
                </Link>

                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="w-64 overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-2xl shadow-black/20 backdrop-blur-xl">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block border-b border-white/30 px-5 py-3 text-sm font-medium text-ink transition-colors last:border-b-0 hover:bg-white/40 hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-white/80 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 after:content-[''] hover:text-white hover:after:w-full"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/"
            className="text-sm font-medium text-white/80 transition hover:text-white"
          >
            WhatsApp Us
          </a>
          <a
            href="/#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light"
          >
            Book Free Consultation
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white"
          >
            Book Call
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-hero/95 px-6 py-5 backdrop-blur lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
            <a
              href="https://wa.me/"
              onClick={() => setMobileOpen(false)}
              className="text-center text-sm font-medium text-white/80 transition hover:text-white"
            >
              WhatsApp Us
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
