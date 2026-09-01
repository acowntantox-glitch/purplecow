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

const FIELD_CLASS =
  "mt-2 w-full rounded-xl border border-transparent bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/70 outline-none transition focus:border-white focus:ring-2 focus:ring-white/40";

export default function ConsultationForm() {
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
      `Free consultation request from ${name || "website"}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="text-sm font-semibold text-white">
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            className={FIELD_CLASS}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="text-sm font-semibold text-white">
            Email
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            className={FIELD_CLASS}
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-phone" className="text-sm font-semibold text-white">
            Contact Number
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            className={FIELD_CLASS}
            placeholder="Enter your contact number"
          />
        </div>
        <div>
          <label htmlFor="cf-service" className="text-sm font-semibold text-white">
            Subject
          </label>
          <select
            id="cf-service"
            name="service"
            defaultValue={SERVICES[0]}
            className={`${FIELD_CLASS} appearance-none`}
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
        <label htmlFor="cf-message" className="text-sm font-semibold text-white">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          className={`${FIELD_CLASS} resize-none`}
          placeholder="Enter your message"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition hover:bg-white/90"
      >
        Send Message
        <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
      </button>

      {sent && (
        <p className="text-sm text-white/80">
          Opening your email app to send this — if nothing happens, email us
          directly at{" "}
          <a href="mailto:hello@purplecow.ae" className="font-semibold text-white underline">
            hello@purplecow.ae
          </a>
          .
        </p>
      )}
    </form>
  );
}
