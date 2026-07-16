import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services We Offer | Puma Business Services",
  description: "From accounts and tax to payroll, VAT, bookkeeping and business advisory, Puma Business Services covers every aspect of your financial needs.",
};

const services = [
  {
    title: "Accounts & Tax",
    href: "/services/accounts-tax",
    items: [
      "Limited company accounts",
      "Sole trader accounts",
      "Corporation tax returns",
      "Self-Assessment tax returns",
      "Director tax planning",
      "Dividend planning",
      "Companies House filings",
      "Confirmation statements",
      "HMRC correspondence",
      "Tax payment planning",
    ],
  },
  {
    title: "Bookkeeping & Cloud Accounting",
    href: "/services/bookkeeping-cloud-accounting",
    items: [
      "Bookkeeping",
      "Bank reconciliations",
      "Sales and purchase ledger support",
      "Receipt and invoice processing",
      "Cloud accounting setup",
      "Xero, Sage Accounting, Sage 50 and FreeAgent support",
      "Management reports",
      "Software clean-up and correction work",
    ],
  },
  {
    title: "VAT & CIS",
    href: "/services/vat-cis",
    items: [
      "VAT registration",
      "VAT returns",
      "Making Tax Digital support",
      "VAT advice",
      "CIS registrations",
      "CIS returns",
    ],
  },
  {
    title: "Payroll & Pensions",
    href: "/services/payroll-pensions",
    items: [
      "Payroll setup and processing",
      "RTI submissions",
      "P45s and P60s",
      "Workplace pension support",
      "Auto enrolment administration",
    ],
  },
  {
    title: "Business Advisory",
    href: "/services/business-advisory",
    items: [
      "Business start-up support",
      "Company formation",
      "Director advice",
      "Profit reviews",
      "Cash flow planning",
      "Budgeting",
      "Finance process reviews",
      "Business performance reviews",
      "Support with asset purchases and finance decisions",
      "Support with pricing, margins and profitability",
      "Invoice discounting facility support",
      "HMRC investigation lead",
    ],
  },
  {
    title: "Additional Finance Support",
    href: "/services/additional-finance-support",
    items: [
      "Monthly management accounts",
      "Board packs and reporting packs",
      "Budgeting and forecasting",
      "Cash flow forecasting",
      "KPI reporting",
      "Variance analysis",
      "Cost control reviews",
      "Sales and margin analysis",
      "Pricing analysis",
      "Stock, WIP and raw material reporting",
      "Financial controls and process improvements",
      "Systems improvement and reporting automation",
      "Support for finance teams and business owners",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-brand-gold font-semibold uppercase tracking-wide text-sm">
            What We Offer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            Our Services
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-300">
            From compliance and bookkeeping to business planning and finance
            support, we offer everything your business needs in one place.
          </p>
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 sm:grid-cols-3 text-center">
          {[
            { stat: "6", label: "Service Areas" },
            { stat: "Fixed", label: "Transparent Fees" },
            { stat: "MTD", label: "Making Tax Digital Ready" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold text-brand-red">{item.stat}</p>
              <p className="text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-brand-red transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-8 bg-brand-red rounded" />
                <h2 className="text-xl font-bold text-brand-navy">
                  {service.title}
                </h2>
              </div>
              <ul className="space-y-2 flex-1">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-gray-100">
                <Link
                  href={service.href}
                  className="inline-block bg-brand-red hover:bg-brand-orange transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-md"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional finance support callout */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
            Need More?
          </p>
          <h2 className="text-2xl font-bold text-brand-navy mt-2">
            Deeper Financial Support Available
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Through our wider finance experience, Puma Business Services can
            support businesses that need more detailed financial insight,
            including management accounts, board packs, KPI reporting, and
            finance team support. If you need something not listed above,
            get in touch and we&apos;ll let you know if we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-6 py-3 rounded-md"
          >
            Discuss Your Needs
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white">
            Not sure which service you need?
          </h2>
          <p className="text-gray-300 mt-3 max-w-lg mx-auto">
            Drop us an email and we&apos;ll point you in the right direction — no obligation, no sales pitch.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-6 py-3 rounded-md"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}