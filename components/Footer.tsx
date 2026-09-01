import Image from "next/image";
import Link from "next/link";

const COLUMNS = [
  {
    heading: "Services",
    links: [
      { label: "Mainland Setup", href: "/business-setup/mainland" },
      { label: "Free Zone Setup", href: "/business-setup/free-zone" },
      { label: "Offshore Setup", href: "/business-setup/offshore" },
      { label: "Accounting & Tax", href: "/accounting-tax" },
      { label: "PRO Services", href: "/corporate-services#pro" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/insights/dubai-company-setup-cost-2026" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "VAT Guide", href: "/insights/vat-registration-uae-guide" },
      { label: "Corporate Tax Guide", href: "/insights/uae-corporate-tax-small-business" },
      { label: "FAQs", href: "/business-setup#faq" },
      { label: "Contact", href: "/#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-hero-deep">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Image
              src="/images/logo-transparent-white.png"
              alt="Purple Cow"
              width={280}
              height={180}
              className="h-14 w-auto sm:h-20"
            />
            <p className="mt-4 max-w-xs text-sm text-white/60">
              The clear-headed way to set up and run a company in the UAE.
            </p>
            <div className="mt-6 flex flex-col gap-1 text-sm text-white/60">
              <a href="mailto:hello@purplecow.ae" className="hover:text-white">
                hello@purplecow.ae
              </a>
              <a href="https://wa.me/" className="hover:text-white">
                WhatsApp
              </a>
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold text-white">{column.heading}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:mt-16 sm:flex-row sm:pt-8">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Purple Cow. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
