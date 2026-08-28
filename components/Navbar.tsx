"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Business Setup", href: "#services" },
  { label: "Accounting & Tax", href: "#services" },
  { label: "Corporate Services", href: "#services" },
  { label: "About", href: "#differentiators" },
  { label: "Pricing", href: "#faq" },
  { label: "Blog", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-hero/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-transparent-white.png"
            alt="Purple Cow"
            width={200}
            height={100}
            className="h-14 w-auto lg:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-white/80 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 after:content-[''] hover:text-white hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/"
            className="text-sm font-medium text-white/80 transition hover:text-white"
          >
            WhatsApp Us
          </a>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light"
          >
            Book Free Consultation
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white lg:hidden"
        >
          Book Call
        </a>
      </div>
    </header>
  );
}
