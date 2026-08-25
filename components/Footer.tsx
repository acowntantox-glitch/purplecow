import Image from "next/image";

const COLUMNS = [
  {
    heading: "Services",
    links: ["Mainland Setup", "Free Zone Setup", "Offshore Setup", "Accounting & Tax", "PRO Services"],
  },
  {
    heading: "Company",
    links: ["About Us", "Pricing", "Blog", "Careers"],
  },
  {
    heading: "Resources",
    links: ["VAT Guide", "Corporate Tax Guide", "FAQs", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-hero-deep">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <Image
              src="/images/logo-transparent-white.png"
              alt="Purple Cow"
              width={200}
              height={100}
              className="h-14 w-auto"
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
                  <li key={link}>
                    <a href="#" className="text-sm text-white/60 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Purple Cow. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
