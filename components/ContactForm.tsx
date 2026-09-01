"use client";

import { useState } from "react";

const SERVICES = [
  "Business Setup (Mainland)",
  "Business Setup (Free Zone)",
  "Business Setup (Offshore)",
  "Accounting & Tax",
  "PRO & Visa Services",
  "Corporate Banking",
  "Something else",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name")?.toString().trim() ?? "";
    const email = data.get("email")?.toString().trim() ?? "";
    const phone = data.get("phone")?.toString().trim() ?? "";
    const service = data.get("service")?.toString().trim() ?? "";
    const message = data.get("message")?.toString().trim() ?? "";

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      `Interested in: ${service}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:hello@purplecow.ae?subject=${encodeURIComponent(
      `New enquiry from ${name || "website"}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-xl border border-surface-border bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Jane Founder"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-surface-border bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Phone <span className="text-ink-soft">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-xl border border-surface-border bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="+971 5x xxx xxxx"
          />
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium text-ink">
            I&apos;m interested in
          </label>
          <select
            id="service"
            name="service"
            defaultValue={SERVICES[0]}
            className="mt-2 w-full rounded-xl border border-surface-border bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-xl border border-surface-border bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder="Tell us a bit about your business and what you need help with."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-primary px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-light sm:w-auto"
      >
        Send Message
      </button>

      {sent && (
        <p className="text-sm text-ink-soft">
          Opening your email app to send this — if nothing happens, email us
          directly at{" "}
          <a href="mailto:hello@purplecow.ae" className="font-medium text-primary">
            hello@purplecow.ae
          </a>
          .
        </p>
      )}
    </form>
  );
}
