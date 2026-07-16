import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VAT & CIS Services | Puma Business Services",
  description:
    "VAT registration, VAT returns, Making Tax Digital support, CIS registrations and CIS returns. Expert VAT and Construction Industry Scheme support from Puma Business Services.",
};

const services = [
  {
    title: "VAT Registration",
    body: "If your taxable turnover exceeds the VAT registration threshold (currently £90,000), you are legally required to register for VAT. We handle the registration process with HMRC on your behalf, advise on the most appropriate VAT scheme for your business, and make sure you understand your obligations from day one.",
  },
  {
    title: "VAT Returns",
    body: "We prepare and submit your VAT returns accurately and on time, whether you file monthly, quarterly, or annually. We review your transactions, apply the correct VAT treatment to each one, reconcile your VAT account, and submit directly to HMRC — minimising your liability and eliminating the risk of errors or late filing penalties.",
  },
  {
    title: "Making Tax Digital Support",
    body: "MTD for VAT is now mandatory for all VAT-registered businesses. This means you must keep digital VAT records and submit returns through MTD-compatible software. We help you get set up with compliant software, migrate your existing records, and ensure your processes meet HMRC's digital requirements — so you stay compliant without the stress.",
  },
  {
    title: "VAT Advice",
    body: "VAT is one of the most complex areas of UK tax — the rules around exempt, zero-rated, and partially exempt supplies catch many businesses out. We provide clear, practical VAT advice tailored to your business, whether you need help understanding the right VAT treatment for your income streams, planning around a change in circumstances, or dealing with a VAT query from HMRC.",
  },
  {
    title: "CIS Registrations",
    body: "If you work in the construction industry as a contractor or subcontractor, you need to be registered under the Construction Industry Scheme. We handle your CIS registration with HMRC, advise on whether you should register as a contractor, subcontractor, or both, and make sure you understand your obligations under the scheme from the outset.",
  },
  {
    title: "CIS Returns",
    body: "Contractors under CIS must submit monthly returns to HMRC detailing payments made to subcontractors and the deductions applied. We prepare and submit your monthly CIS returns, verify subcontractor status, ensure the correct deduction rates are applied, and produce the payment and deduction statements your subcontractors need.",
  },
];

const vatSchemes = [
  {
    name: "Standard VAT Accounting",
    desc: "VAT is accounted for when invoices are issued and received. Suitable for most businesses.",
  },
  {
    name: "Cash Accounting",
    desc: "VAT is accounted for when payment is received or made — helpful for businesses with cash flow pressures or slow-paying customers.",
  },
  {
    name: "Flat Rate Scheme",
    desc: "Pay a fixed percentage of turnover to HMRC instead of calculating input and output VAT. Can be beneficial for some service businesses.",
  },
  {
    name: "Annual Accounting",
    desc: "Submit one VAT return per year with advance payments. Reduces admin but requires careful cash flow management.",
  },
];

const reasons = [
  "Accurate VAT returns submitted on time, every time",
  "MTD-compliant processes and software support",
  "Advice on the most beneficial VAT scheme for your business",
  "Full CIS contractor and subcontractor support",
  "Fixed fees — no surprises",
  "Proactive flagging of VAT issues before they become problems",
];

export default function VatCisPage() {
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
              VAT &amp; CIS
            </h1>
            <p className="mt-5 text-lg text-gray-300 leading-relaxed">
              VAT and the Construction Industry Scheme are two of the most
              administration-heavy areas of running a business. We take both
              off your plate — handling registrations, returns, and compliance
              so you can focus on the work itself.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-6 py-3 rounded-md"
              >
                Get a Quote
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
            { stat: "£90k", label: "Current VAT Registration Threshold" },
            { stat: "MTD", label: "Making Tax Digital Compliant" },
            { stat: "Monthly", label: "CIS Returns Submitted On Time" },
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
            Whether you need help with VAT compliance, construction industry
            scheme obligations, or both, here&apos;s a full breakdown of what
            we offer.
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

      {/* VAT schemes */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
              VAT Schemes
            </p>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">
              Choosing the Right VAT Scheme
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Not all businesses should use the same VAT scheme. We advise on
              which approach suits your business model and cash flow — and
              switch you over if a different scheme would be more beneficial.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {vatSchemes.map((scheme) => (
              <div
                key={scheme.name}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-1 bg-brand-red rounded mb-4" />
                <h3 className="font-bold text-brand-navy">{scheme.name}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {scheme.desc}
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
              VAT &amp; CIS Handled Properly
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              VAT errors are expensive. Whether it&apos;s miscoding a
              transaction, applying the wrong rate, or missing a return
              deadline, the penalties add up quickly. We eliminate that risk
              by handling your VAT end-to-end — with a thorough review of
              every return before it&apos;s submitted.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              For construction businesses, CIS adds another layer of
              complexity on top of the usual accounting obligations. We
              understand the scheme inside out and make sure contractors and
              subcontractors alike are registered correctly, deducting at
              the right rate, and meeting their monthly reporting obligations.
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
              Key VAT &amp; CIS Deadlines
            </h3>
            <ul className="mt-6 space-y-5 text-sm text-gray-300">
              {[
                {
                  event: "Quarterly VAT return and payment",
                  detail:
                    "1 month and 7 days after the end of your VAT period",
                },
                {
                  event: "Monthly VAT return and payment",
                  detail:
                    "1 month and 7 days after the end of each monthly VAT period",
                },
                {
                  event: "VAT registration",
                  detail:
                    "Must register within 30 days of exceeding the £90,000 threshold",
                },
                {
                  event: "CIS monthly return",
                  detail:
                    "19th of the month following the tax month in which payments were made",
                },
                {
                  event: "CIS payment to HMRC",
                  detail:
                    "22nd of the month (or 19th if paying by post) following the tax month",
                },
              ].map((item) => (
                <li key={item.event} className="flex gap-3 items-start">
                  <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0 mt-1.5" />
                  <span>
                    <span className="text-white font-medium">{item.event}</span>{" "}
                    — {item.detail}
                  </span>
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
              VAT &amp; CIS FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Do I have to register for VAT?",
                a: "You must register for VAT if your taxable turnover exceeds £90,000 in any rolling 12-month period, or if you expect it to exceed that threshold in the next 30 days. You can also register voluntarily below that threshold, which may be beneficial if your customers are VAT-registered businesses or if you have significant VAT on your purchases.",
              },
              {
                q: "What is the Construction Industry Scheme?",
                a: "CIS is a tax deduction scheme for the construction industry. Contractors deduct money from subcontractor payments and pass it to HMRC as an advance payment towards the subcontractor's tax and National Insurance. The deduction rate is 20% for registered subcontractors, 30% for those not registered, and 0% for those with gross payment status.",
              },
              {
                q: "What is the VAT domestic reverse charge for construction?",
                a: "The domestic reverse charge means that for certain construction services, the customer (contractor) accounts for the VAT rather than the supplier (subcontractor). It applies to services within the scope of CIS where both parties are VAT-registered. This can be complicated to apply correctly, and we advise construction businesses on whether and how it applies to them.",
              },
              {
                q: "Can I reclaim VAT on purchases before I was VAT registered?",
                a: "Yes, in many cases. You can reclaim VAT on goods purchased in the four years before your VAT registration date, and on services purchased in the six months before registration, provided those goods and services were purchased for your business and you still have the goods at the time of registration.",
              },
              {
                q: "What happens if I submit a VAT return late?",
                a: "HMRC operates a points-based penalty system for late VAT returns. Each late submission earns a penalty point, and once you reach a threshold (4 points for quarterly filers), you receive a £200 penalty for that return and each subsequent late return. Late payment interest also accrues on unpaid VAT. We manage your VAT calendar proactively so this never happens.",
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
            Need help with VAT or CIS?
          </h2>
          <p className="text-gray-300 mt-3 max-w-lg mx-auto">
            Get in touch for a free, no-obligation conversation. We&apos;ll
            explain exactly what we can do and what it will cost — upfront,
            no surprises.
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