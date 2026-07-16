import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Additional Finance Support | Puma Business Services",
  description:
    "Monthly management accounts, board packs, budgeting and forecasting, KPI reporting, variance analysis and more. Detailed financial insight and support from Puma Business Services.",
};

const services = [
  {
    title: "Monthly Management Accounts",
    body: "Monthly management accounts give you a clear, timely view of your business performance — typically including a profit and loss account, balance sheet, and cash flow statement, produced within a few weeks of month end. Unlike your annual accounts, management accounts are designed to inform decisions rather than satisfy compliance requirements, and we present them in a format that's genuinely readable rather than just technically correct.",
  },
  {
    title: "Board Packs and Reporting Packs",
    body: "If you have investors, shareholders, or a board of directors, a well-structured monthly or quarterly reporting pack is essential. We produce professional board packs that bring together financial performance, KPIs, variance analysis, and forward-looking commentary — giving your stakeholders the information they need to provide meaningful oversight and support.",
  },
  {
    title: "Budgeting and Forecasting",
    body: "A budget without a forecast is just a number from the past. We build integrated financial models that combine your annual budget with rolling forecasts — updated as actual results come in — so you always have an accurate picture of where the business is headed, not just where it was when you set the budget.",
  },
  {
    title: "Cash Flow Forecasting",
    body: "Cash flow forecasting at this level goes beyond a simple monthly in-and-out summary. We build detailed, week-by-week or month-by-month cash flow models that take account of your trading patterns, payment terms, upcoming capital expenditure, loan repayments, and tax liabilities — giving you genuine visibility over your liquidity position for months ahead.",
  },
  {
    title: "KPI Reporting",
    body: "The right KPIs depend entirely on your business model. We work with you to identify the metrics that actually drive performance in your business, build a reporting framework around them, and produce a clear dashboard each month that tells you whether you're moving in the right direction — and highlights where intervention is needed.",
  },
  {
    title: "Variance Analysis",
    body: "Understanding why your numbers differ from budget or prior year is as important as knowing that they do. We produce detailed variance analysis that explains the drivers behind the numbers — separating volume effects from price effects, one-off items from underlying trends, and controllable variances from external factors — giving you the insight to respond appropriately.",
  },
  {
    title: "Cost Control Reviews",
    body: "As businesses grow, costs have a tendency to creep upward in ways that aren't always visible until a cost control review shines a light on them. We conduct detailed reviews of your overhead and operating cost base — benchmarking where possible, challenging spending that isn't delivering value, and identifying savings that go straight to your bottom line.",
  },
  {
    title: "Sales and Margin Analysis",
    body: "Gross margin is one of the most important numbers in your business — but it's rarely uniform across all products, services, customers, or channels. We analyse your sales and margin data at a granular level, identifying where your best and worst margin is generated and giving you the information you need to focus resources on the most profitable parts of your business.",
  },
  {
    title: "Pricing Analysis",
    body: "Pricing decisions are often made based on gut feel or competitive pressure rather than a rigorous understanding of costs and margins. We provide detailed pricing analysis that connects your cost base to your pricing strategy — modelling the impact of price changes on volume, revenue, and profit, and helping you find the pricing approach that maximises profitability without sacrificing competitiveness.",
  },
  {
    title: "Stock, WIP and Raw Material Reporting",
    body: "For product businesses, manufacturing companies, and businesses with work in progress, inventory management has a direct impact on cash flow and profit measurement. We build reporting frameworks that give you accurate, timely visibility over your stock levels, WIP valuations, and raw material costs — and flag issues like slow-moving stock, write-offs, or margin erosion from material cost increases.",
  },
  {
    title: "Financial Controls and Process Improvements",
    body: "Strong financial controls reduce the risk of error, fraud, and inefficiency. We review your existing controls and approval processes, identify weaknesses, and recommend practical improvements that are proportionate to your business size — protecting your business without creating unnecessary bureaucracy.",
  },
  {
    title: "Systems Improvement and Reporting Automation",
    body: "Many finance teams spend significant time producing reports that could be automated. We review your current systems and reporting processes, identify opportunities to automate routine reporting, and help you get more from your existing software — reducing the time spent on manual data gathering and giving your team more capacity for analysis and decision support.",
  },
  {
    title: "Support for Finance Teams and Business Owners",
    body: "Sometimes you don't need a full outsourced finance function — you need experienced support alongside an existing team or owner-manager. We provide flexible, senior-level finance support on a part-time or project basis, covering skills gaps, supporting your team through busy periods, or providing an experienced second opinion on significant financial decisions.",
  },
];

const reasons = [
  "Senior-level financial insight without the overhead of a full-time FD",
  "Reporting tailored to your business — not a generic template",
  "Genuinely readable management information",
  "Support for businesses with investors, boards, or lenders",
  "Flexible engagement — project-based or ongoing",
  "Fixed fees agreed upfront",
];

export default function AdditionalFinanceSupportPage() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-brand-gold font-semibold uppercase tracking-wide text-sm">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mt-3">
              Additional Finance Support
            </h1>
            <p className="mt-5 text-lg text-gray-300 leading-relaxed">
              For businesses that need more than standard accountancy — whether
              that&apos;s detailed management reporting, financial planning
              support, or a part-time finance function — we provide
              senior-level financial expertise on a flexible basis.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-6 py-3 rounded-md"
              >
                Discuss Your Needs
              </Link>
              <Link
                href="/services"
                className="border border-white hover:border-brand-gold hover:text-brand-gold transition-colors text-white font-medium px-6 py-3 rounded-md"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-4 sm:grid-cols-3 text-center">
          {[
            { stat: "FD-Level", label: "Finance Expertise" },
            { stat: "Flexible", label: "Project or Ongoing Basis" },
            { stat: "Tailored", label: "Reporting to Your Needs" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-bold text-brand-red">{item.stat}</p>
              <p className="text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services detail */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
            What&apos;s Included
          </p>
          <h2 className="text-3xl font-bold text-brand-navy mt-2">
            Everything We Cover
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Our additional finance support services are designed for businesses
            that need more detailed financial insight and management information
            than standard compliance accounting provides.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-brand-red transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-1 h-7 bg-brand-red rounded flex-shrink-0" />
                <h3 className="text-lg font-semibold text-brand-navy">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Who this is for */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
              Who This Is For
            </p>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">
              Is This Service Right for Your Business?
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Additional finance support is typically most valuable for
              businesses at a stage where the numbers are getting complex but
              a full-time finance director isn&apos;t yet justified.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                title: "Growing businesses",
                desc: "Revenue is scaling, headcount is increasing, and the financial complexity is outgrowing what a basic bookkeeper or annual accounts service can handle.",
              },
              {
                title: "Investor-backed businesses",
                desc: "You have investors or shareholders who expect regular, professional reporting — board packs, KPI dashboards, and variance analysis rather than just a P&L.",
              },
              {
                title: "Owner-managers who want clarity",
                desc: "You're running a successful business but don't fully understand the financial picture or feel confident making data-driven decisions.",
              },
              {
                title: "Businesses with lenders",
                desc: "You have bank facilities or asset finance in place and need to produce regular financial information to satisfy lender covenants.",
              },
              {
                title: "Teams that need support",
                desc: "You have an in-house finance function but need senior-level expertise to cover a gap, support a busy period, or provide an experienced second opinion.",
              },
              {
                title: "Businesses planning for exit",
                desc: "You're preparing for a sale or investment and need your financial records, reporting, and processes to be in the best possible shape.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-1 bg-brand-red rounded mb-4" />
                <h3 className="font-bold text-brand-navy">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
              Why Puma?
            </p>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">
              Finance Expertise Without the Full-Time Cost
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A finance director with the experience to produce meaningful
              management accounts, lead budgeting processes, and advise on
              financial strategy costs upwards of £80,000 per year as a
              full-time hire. For most growing businesses, that&apos;s not
              justified — but the expertise is still needed.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our additional finance support services give you access to that
              level of expertise on a flexible, cost-effective basis — whether
              that&apos;s a few days a month producing management accounts, or
              a more involved engagement supporting a finance team through a
              period of change.
            </p>
            <ul className="mt-6 space-y-3">
              {reasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-center gap-3 text-gray-700 text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-navy rounded-2xl p-8 text-white">
            <p className="text-brand-gold font-semibold uppercase tracking-wide text-sm">
              Good to Know
            </p>
            <h3 className="text-xl font-bold mt-3">
              What Makes Good Management Accounts?
            </h3>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Many businesses receive management accounts that are technically
              accurate but practically useless — pages of numbers with no
              commentary, no comparison to budget or prior year, and no
              narrative that explains what&apos;s actually happening.
            </p>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Good management accounts should be produced within two to three
              weeks of month end, presented in a format the reader can
              understand, and accompanied by clear commentary on performance,
              variances, and any issues requiring attention.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              {[
                "Profit and loss with prior year and budget comparison",
                "Balance sheet — assets, liabilities, net position",
                "Cash flow statement and forward forecast",
                "KPI dashboard relevant to your business",
                "Written commentary on performance and outlook",
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

      {/* FAQ */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
              Common Questions
            </p>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">
              Additional Finance Support FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How is this different from your standard accountancy services?",
                a: "Our standard accountancy services cover the compliance requirements every business needs — annual accounts, tax returns, payroll, VAT. Additional finance support goes beyond compliance to provide the management information and financial insight that helps you run and grow your business day-to-day. The two services complement each other — many of our clients use both.",
              },
              {
                q: "How quickly can management accounts be produced?",
                a: "For businesses with well-maintained bookkeeping and a clear month-end close process, management accounts can typically be produced within two to three weeks of month end. The exact timeline depends on your business complexity and how quickly transaction data is available. We work with you to establish a month-end close process that makes timely reporting achievable.",
              },
              {
                q: "We already have an in-house finance team. Can you still help?",
                a: "Yes — we work alongside in-house finance teams regularly. This might involve providing senior-level review and sign-off, supporting the team through a busy period, covering a skills gap, or taking on specific project work such as building a new budgeting model or restructuring the reporting pack. We fit around what you already have in place.",
              },
              {
                q: "What does a typical engagement look like?",
                a: "Every engagement is different, but a typical arrangement might involve us producing monthly management accounts, attending a monthly review meeting to walk through the numbers, maintaining the rolling budget and forecast, and being available for ad hoc financial questions as they arise. We agree the scope and a fixed monthly fee upfront so there are no surprises.",
              },
              {
                q: "Can you help us prepare for a bank facility or investment round?",
                a: "Yes — this is an area where strong financial reporting and forecasting makes a significant difference. Lenders and investors want to see well-structured historic accounts, a credible financial model, and clear management information. We help you prepare all of this, make sure your numbers tell the right story, and support you through the due diligence process.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="border border-gray-200 rounded-xl p-6 bg-white"
              >
                <h3 className="font-semibold text-brand-navy">{faq.q}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white">
            Need more from your finance function?
          </h2>
          <p className="text-gray-300 mt-3 max-w-lg mx-auto">
            Tell us about your business and what you need. We&apos;ll have
            an honest conversation about whether we&apos;re the right fit
            and what a practical engagement would look like.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
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
              View All Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}