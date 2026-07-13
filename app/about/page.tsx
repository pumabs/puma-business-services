import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Puma Business Services",
  description: "Learn about Puma Business Services, a modern accountancy firm built on personal service, transparent pricing, and proactive financial advice.",
};

const values = [
  {
    title: "Transparency",
    body: "Fixed fees agreed upfront. No surprise invoices, no ambiguous hourly rates, just a clear price for clear work.",
  },
  {
    title: "Accessibility",
    body: "We speak plain English. If you don't understand something, we'll explain it until you do.",
  },
  {
    title: "Proactivity",
    body: "We don't wait for you to ask the right questions. We flag opportunities and risks before they become problems.",
  },
  {
    title: "Reliability",
    body: "Deadlines met, calls returned, promises kept. You can count on us to be there when it matters.",
  },
];

const offerings = [
  "Accounts & Tax",
  "Bookkeeping & Cloud Accounting",
  "VAT & CIS",
  "Payroll & Pensions",
  "Business Advisory",
  "Additional Finance Support",
];

export default function AboutPage() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-brand-gold font-semibold uppercase tracking-wide text-sm">
            Who We Are
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            About Puma Business Services
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-300">
            A modern accountancy firm built on personal service, honest
            pricing, and a genuine interest in helping your business grow.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center">
          <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
            Our Story
          </p>
          <h2 className="text-3xl font-bold text-brand-navy mt-2">
            Built Around You, Not Around Red Tape
          </h2>
        </div>
        <div className="mt-8 text-gray-600 leading-relaxed space-y-5 text-center max-w-2xl mx-auto">
          <p>
            Puma Business Services was founded with a simple belief: that
            small and medium-sized businesses deserve the same quality of
            financial advice as larger companies, without the corporate
            price tag or the feeling of being just another client number.
          </p>
          <p>
            We work with sole traders, limited companies, directors, and
            growing businesses across a wide range of industries, offering
            everything from day-to-day bookkeeping to strategic business
            planning.
          </p>
          <p>
            Our approach is hands-on and personal. When you contact us, you
            speak to your accountant, not a receptionist, not a junior, and
            not an automated system.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
              What We Stand For
            </p>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">
              Our Values
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-1 bg-brand-red rounded mb-4" />
                <h3 className="font-semibold text-brand-navy text-lg">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we cover */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
              What We Cover
            </p>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">
              A Full Range of Accountancy Services
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you need help with a single task or want us to take
              care of your entire financial operation, we have the expertise
              to help. Our services span six core areas:
            </p>
            <ul className="mt-6 space-y-3">
              {offerings.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="inline-block mt-8 bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-6 py-3 rounded-md"
            >
              See Full Service List
            </Link>
          </div>
          <div className="bg-brand-navy rounded-2xl p-8 text-white">
            <p className="text-brand-gold font-semibold uppercase tracking-wide text-sm">
              Why Clients Choose Us
            </p>
            <ul className="mt-6 space-y-4 text-gray-300 text-sm leading-relaxed">
              {[
                "Fixed, transparent fees with no hidden charges",
                "Direct access to your own accountant",
                "Cloud accounting support, Xero, Sage and FreeAgent",
                "Making Tax Digital (MTD) ready",
                "Prompt responses - we aim to reply within one working day",
                "Support for businesses at every stage, from start-up to scale-up",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0 mt-1.5" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white">
            Want to find out if we&apos;re the right fit?
          </h2>
          <p className="text-gray-300 mt-3 max-w-lg mx-auto">
            Get in touch for a free, no-obligation chat about your needs.
            No hard sell, just an honest conversation.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-6 py-3 rounded-md"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}