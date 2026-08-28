import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Puma Business Services",
  description:
    "Accountancy, tax, bookkeeping, VAT, CIS, payroll, management reporting, Virtual Finance Department and practical business support from Puma Business Services.",
};

const services = [
  {
    number: "01",
    title: "Accounts & Tax",
    intro:
      "Reliable year-end compliance and ongoing tax support for limited companies, sole traders, directors and individuals.",
    items: [
      "Limited company accounts",
      "Sole trader accounts",
      "Corporation tax returns",
      "Self-Assessment tax returns",
      "Director tax planning",
      "Dividend and remuneration planning",
      "Companies House filings",
      "Confirmation statements",
      "HMRC correspondence",
      "Tax payment planning",
    ],
  },
  {
    number: "02",
    title: "Bookkeeping & Cloud Accounting",
    intro:
      "Accurate, up-to-date records with practical support across the systems your business uses day to day.",
    items: [
      "Bookkeeping",
      "Bank reconciliations",
      "Sales ledger support",
      "Purchase ledger support",
      "Receipt and invoice processing",
      "Cloud accounting setup",
      "Xero support",
      "Sage Accounting support",
      "Sage 50 support",
      "FreeAgent support",
      "Software clean-up and correction work",
      "Process improvements and reporting automation",
    ],
  },
  {
    number: "03",
    title: "VAT & CIS",
    intro:
      "Support with registrations, submissions and the practical compliance issues that sit behind VAT and CIS.",
    items: [
      "VAT registration",
      "VAT returns",
      "Making Tax Digital support",
      "VAT treatment queries",
      "Domestic reverse charge support",
      "CIS registrations",
      "CIS monthly returns",
      "Subcontractor verification support",
      "CIS correction work",
      "CIS suffered and reclaim support",
    ],
  },
  {
    number: "04",
    title: "Payroll & Pensions",
    intro:
      "Day-to-day payroll and workplace pension support for businesses employing staff or paying directors through PAYE.",
    items: [
      "Payroll setup",
      "Weekly and monthly payroll processing",
      "RTI submissions",
      "FPS and EPS submissions",
      "Starters and leavers",
      "P45s and P60s",
      "Director payroll",
      "Workplace pension support",
      "Auto-enrolment administration",
      "NEST support",
      "Payroll corrections and clean-up work",
    ],
  },
  {
    number: "05",
    title: "Management Reporting & Business Insight",
    intro:
      "More detailed reporting for businesses that want to understand performance rather than only review the year once it has finished.",
    items: [
      "Monthly management accounts",
      "Management reporting packs",
      "Board and director reporting",
      "Power BI dashboards",
      "Budgeting",
      "Forecasting",
      "Cash flow forecasting",
      "KPI reporting",
      "Variance analysis",
      "Sales analysis",
      "Gross margin analysis",
      "Cost control reviews",
      "Pricing analysis",
      "Balance sheet analysis",
      "Working capital analysis",
      "Stock, WIP and raw material reporting",
      "Trend and period comparison reporting",
      "Financial commentary and performance explanations",
    ],
  },
  {
    number: "06",
    title: "Business Advisory & Support",
    intro:
      "Practical support when a business is starting, changing, investing, funding growth or simply trying to make a better financial decision.",
    items: [
      "Business start-up support",
      "Company formation",
      "Director advice",
      "Profit reviews",
      "Cash flow planning",
      "Business performance reviews",
      "Finance process reviews",
      "Financial controls",
      "Systems improvement",
      "Support with asset purchases",
      "Support with finance decisions",
      "Pricing and profitability reviews",
      "Invoice discounting and finance facility support",
      "Property and business finance discussions",
      "Support with business structure and remuneration decisions",
      "HMRC enquiry and investigation support",
      "Support for in-house finance teams and business owners",
    ],
  },
];

const approachPoints = [
  {
    title: "Start with what you need",
    text: "Some clients need a specific service. Others want Puma involved across much more of the finance function. The starting point is understanding what would actually be useful.",
  },
  {
    title: "Keep the fundamentals right",
    text: "Good reporting and advice only work when the underlying records are accurate, so bookkeeping, reconciliations and compliance remain an important part of the service.",
  },
  {
    title: "Develop as the business grows",
    text: "The relationship can develop over time, adding reporting, forecasting, analysis and wider financial support when the business needs it.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-purple-dark text-white">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-purple opacity-30" />
        <div className="absolute -bottom-28 left-1/3 w-72 h-72 rounded-full bg-brand-purple-mid opacity-15 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.22em] text-xs sm:text-sm">
              Our Services
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
              From accountancy essentials
              <span className="block text-brand-purple-soft">
                to your Virtual Finance Department.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
              From bookkeeping, accounts, tax and payroll through to management
              reporting, forecasting and wider financial support, Puma can
              provide as much or as little involvement as your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
                How We Help
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark leading-tight">
                The essentials, the detail and the bigger picture.
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-brand-slate leading-relaxed">
              <p>
                Every business needs the fundamentals handled properly:
                accurate records, tax compliance, payroll, VAT and year-end
                accounts.
              </p>

              <p>
                But the support does not have to stop there. As a business
                develops, owners may want better reporting, clearer forecasts,
                more useful performance information or someone to help work
                through the financial impact of important decisions.
              </p>

              <p>
                Puma is designed to support both sides of that picture. You may
                need help with one specific area, a combination of services, or
                a much more involved financial partnership throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="max-w-3xl mb-10">
            <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
              Core Services
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark">
              Support where you need it.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
              Services can be provided individually or brought together as part
              of a wider ongoing relationship.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-brand-cream rounded-[2rem] p-7 sm:p-8 flex flex-col"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-brand-purple font-semibold text-sm">
                      {service.number}
                    </p>

                    <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-brand-purple-dark">
                      {service.title}
                    </h2>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-brand-purple-soft flex-shrink-0" />
                </div>

                <p className="mt-4 text-brand-slate leading-relaxed text-sm sm:text-base">
                  {service.intro}
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
                  {service.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-brand-slate"
                    >
                      <span className="w-2 h-2 rounded-full bg-brand-purple flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-brand-purple-soft">
                  <Link
                    href="/contact"
                    className="inline-flex items-center font-semibold text-brand-purple hover:text-brand-purple-dark transition-colors text-sm"
                  >
                    Discuss this service
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIRTUAL FINANCE DEPARTMENT */}
      <section className="relative overflow-hidden bg-brand-purple-dark text-white">
        <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-brand-purple opacity-20" />
        <div className="absolute -left-24 -bottom-32 w-80 h-80 rounded-full bg-brand-purple-mid opacity-10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
                Virtual Finance Department
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight max-w-2xl">
                Financial insight and support within your business, without
                building a finance department in-house.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
                For businesses that need more than traditional accountancy
                support, Puma can act as an outsourced Virtual Finance
                Department - working alongside you throughout the year and
                becoming an extension of your business.
              </p>

              <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
                Rather than simply looking backwards once the financial year has
                ended, the focus is on giving you useful financial information
                while there is still time to act on it - helping you understand
                performance, plan ahead and make better-informed decisions.
              </p>

              <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl">
                The level of involvement can be tailored to the business. For
                some clients that may mean regular management reporting and
                forecasting. For others it can extend into cash flow, finance,
                systems, tax planning and ongoing support around the financial
                decisions that arise throughout the year.
              </p>

              <Link
                href="/contact"
                className="inline-block mt-7 bg-white text-brand-purple-dark hover:bg-brand-purple-soft transition-colors px-6 py-3 rounded-full font-semibold text-sm"
              >
                Discuss Virtual Finance Support
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                [
                  "Understand",
                  "Clear reporting around revenue, costs, margins, profit, cash and the figures that matter to your business.",
                ],
                [
                  "Plan",
                  "Forecasting, budgeting, tax planning and financial information to help you look ahead.",
                ],
                [
                  "Decide",
                  "Financial input when considering investment, funding, pricing, costs or other business decisions.",
                ],
                [
                  "Develop",
                  "Ongoing support that can grow alongside the business as its financial needs become more complex.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="bg-white/10 border border-white/10 rounded-2xl p-6"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-purple mb-6" />

                  <h3 className="text-xl font-bold">{title}</h3>

                  <p className="mt-2 text-white/65 leading-relaxed text-sm">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-10 border-t border-white/10">
            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.16em] text-xs">
              Your Finance Function
            </p>

            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
              {[
                "Management accounts & reporting",
                "Cash flow & forecasting",
                "Profitability & margin analysis",
                "Budgets & KPI reporting",
                "Tax & remuneration planning",
                "Business & asset finance support",
                "Accounting systems & processes",
                "Ongoing financial guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-white/70 text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-purple-soft flex-shrink-0 mt-1.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-brand-lilac">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
              The Approach
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark">
              Support built around the business.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
              There is no need to force every client into the same package. The
              right level of involvement depends on the size, complexity and
              needs of the business.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {approachPoints.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 shadow-sm"
              >
                <p className="text-brand-purple font-semibold text-sm">
                  0{index + 1}
                </p>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-brand-purple-dark">
                  {item.title}
                </h3>

                <p className="mt-3 text-brand-slate leading-relaxed text-sm sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEXIBLE SUPPORT */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
                Flexible Support
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark leading-tight">
                Need help with something that is not listed?
              </h2>

              <p className="mt-5 text-base sm:text-lg text-brand-slate leading-relaxed max-w-xl">
                Business finance rarely fits neatly into a checklist. If a
                financial, accounting or reporting issue comes up that is not
                listed above, get in touch and we can discuss whether Puma is
                able to help.
              </p>
            </div>

            <div className="bg-brand-cream rounded-[2rem] p-7 sm:p-8">
              <p className="text-brand-purple-dark text-xl sm:text-2xl font-bold">
                Typical one-off support can include:
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Accounting software migrations and clean-up work",
                  "Historic bookkeeping and reconciliation corrections",
                  "HMRC correspondence and compliance issues",
                  "Finance facility and funding discussions",
                  "Asset purchase and finance considerations",
                  "Business performance reviews",
                  "Reporting system improvements",
                  "Support with unusual accounting or tax queries",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 text-brand-slate text-sm sm:text-base"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-purple flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden bg-brand-purple rounded-[2rem] px-7 py-12 sm:px-10 sm:py-14 text-white">
            <div className="absolute -right-16 -bottom-20 w-64 h-64 bg-brand-purple-soft/20 rounded-full" />
            <div className="absolute -left-20 -top-24 w-60 h-60 bg-brand-purple-dark/20 rounded-full" />

            <div className="relative max-w-3xl">
              <p className="text-brand-purple-soft uppercase tracking-[0.18em] font-semibold text-xs sm:text-sm">
                Let&apos;s Talk
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
                Not sure what level of support you need?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
                Get in touch and we can talk through what you are looking for,
                where the current pressure points are and which areas Puma may
                be able to support.
              </p>

              <Link
                href="/contact"
                className="inline-block mt-6 bg-white text-brand-purple-dark hover:bg-brand-purple-soft transition-colors px-6 py-3 rounded-full font-semibold text-sm"
              >
                Discuss Your Needs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
