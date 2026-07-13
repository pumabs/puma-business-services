import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puma Business Services | Accountants You Can Trust",
  description: "Puma Business Services offers accountancy, bookkeeping, VAT, payroll, and business advisory services for sole traders and limited companies. Fixed fees, personal service.",
};

const serviceCategories = [
  {
    title: "Accounts & Tax",
    desc: "Limited company and sole trader accounts, corporation tax, self-assessment, director tax planning, and HMRC correspondence.",
  },
  {
    title: "Bookkeeping & Cloud Accounting",
    desc: "Full bookkeeping support, bank reconciliations, cloud accounting setup, and support for Xero, Sage and FreeAgent.",
  },
  {
    title: "VAT & CIS",
    desc: "VAT registration, returns, Making Tax Digital support, CIS registrations and returns.",
  },
  {
    title: "Payroll & Pensions",
    desc: "Payroll setup and processing, RTI submissions, P45s and P60s, and workplace pension and auto enrolment support.",
  },
  {
    title: "Business Advisory",
    desc: "Business start-up support, company formation, profit reviews, cash flow planning, and finance process reviews.",
  },
  {
    title: "Additional Finance Support",
    desc: "Management accounts, board packs, budgeting and forecasting, KPI reporting, and financial controls.",
  },
];

const trustPoints = [
  {
    heading: "Personal Service",
    body: "You work directly with an experienced accountant — not a call centre or a rotating team of strangers.",
  },
  {
    heading: "Clear Communication",
    body: "No jargon, no surprises. We explain what's happening with your finances in plain English.",
  },
  {
    heading: "Proactive Advice",
    body: "We don't just file your numbers — we help you understand them and plan ahead.",
  },
  {
    heading: "Fixed Fees",
    body: "Know exactly what you'll pay before we start. No hidden charges, no hourly billing anxiety.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">

      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 sm:text-left text-center">
          <p className="text-brand-gold font-semibold uppercase tracking-wide text-sm">
            Accountancy You Can Rely On
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mt-3">
            Trusted Accountancy,{" "}
            <span className="text-brand-orange">Simplified</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-300 sm:mx-0 mx-auto">
            Puma Business Services helps individuals and businesses stay
            compliant, save money, and plan for the future, with no jargon
            and no surprises.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 sm:justify-start justify-center">
            <Link
              href="/contact"
              className="bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-6 py-3 rounded-md"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="border border-white hover:border-brand-gold hover:text-brand-gold transition-colors text-white font-medium px-6 py-3 rounded-md"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
            What We Do
          </p>
          <h2 className="text-3xl font-bold text-brand-navy mt-2">
            Services We Offer
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            From day-to-day bookkeeping to strategic business advice, we cover
            every aspect of your financial needs.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {serviceCategories.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-brand-red transition-all"
            >
              <h3 className="text-lg font-semibold text-brand-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-block bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-6 py-3 rounded-md"
          >
            See Full Service List
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center">
            <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
              Why Puma?
            </p>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">
              A Different Kind of Accountant
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              We believe accountancy should feel straightforward, not stressful.
              Here&apos;s what sets us apart.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.heading} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto">
                  <div className="w-4 h-4 rounded-full bg-brand-red" />
                </div>
                <h3 className="font-semibold text-brand-navy mt-4">
                  {point.heading}
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

 {/* About teaser */}
<section className="max-w-6xl mx-auto px-6 py-20">
  <div className="bg-brand-navy rounded-2xl px-8 py-14 grid gap-8 md:grid-cols-2 items-center">
    <div>
      <p className="text-brand-gold font-semibold uppercase tracking-wide text-sm">
        About Us
      </p>
      <h2 className="text-3xl font-bold text-white mt-2">
        Real Accountants. Real Relationships.
      </h2>
      <p className="mt-4 text-gray-300 leading-relaxed">
        Puma Business Services was built on the belief that every
        business deserves clear, reliable financial support, whether
        you're a sole trader just starting out or an established
        limited company looking for more from your accountant.
      </p>
      <Link
        href="/about"
        className="inline-block mt-6 bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-6 py-3 rounded-md"
      >
        Learn More About Us
      </Link>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 gap-4 text-center">
      {[
        { stat: "6+", label: "Service Areas" },
        { stat: "100%", label: "Transparent Pricing" },
        { stat: "MTD", label: "Ready" },
        { stat: "1 Day", label: "Response Time" },
      ].map((item) => (
        <div
          key={item.label}
          className="bg-black rounded-lg px-4 py-6"
        >
          <p className="text-3xl font-bold text-white">
            {item.stat}
          </p>
          <p className="text-sm text-gray-300 mt-1">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA banner */}
      <section className="bg-brand-navy">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to take the stress out of your accounts?
          </h2>
          <p className="text-gray-300 mt-3 max-w-lg mx-auto">
            Get in touch today for a free, no-obligation conversation about
            what Puma Business Services can do for you.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-6 py-3 rounded-md"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

    </div>
  );
}