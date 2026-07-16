import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Advisory Services | Puma Business Services",
  description:
    "Business start-up support, company formation, director advice, profit reviews, cash flow planning, budgeting and more. Strategic business advisory from Puma Business Services.",
};

const services = [
  {
    title: "Business Start-Up Support",
    body: "Starting a business is exciting — but the financial and compliance decisions you make at the beginning have long-lasting consequences. We guide you through the choices that matter: business structure, VAT registration, record-keeping, cash flow planning, and understanding your tax obligations — so you start on a solid footing rather than learning by expensive trial and error.",
  },
  {
    title: "Company Formation",
    body: "We handle company formation with Companies House, advise on the right share structure for your circumstances, set up your statutory records, and make sure your company is correctly registered with HMRC for corporation tax and PAYE. A new company set up correctly from the start saves significant time and cost later.",
  },
  {
    title: "Director Advice",
    body: "Being a company director comes with legal and financial responsibilities that many people aren't fully aware of when they start. We advise directors on their duties, obligations, and options — including the most tax-efficient way to draw income, how to manage the relationship between personal and company finances, and what to consider when making major business decisions.",
  },
  {
    title: "Profit Reviews",
    body: "Understanding where your profit comes from — and where it goes — is essential for running a sustainable business. We review your profitability at a detailed level, identifying which products, services, or customers are most profitable, where margins are being squeezed, and what changes would have the most impact on your bottom line.",
  },
  {
    title: "Cash Flow Planning",
    body: "Many profitable businesses fail due to poor cash flow management. We build clear cash flow projections based on your trading patterns, upcoming commitments, and growth plans — helping you anticipate shortfalls before they become crises and giving you the confidence to make investment decisions when the timing is right.",
  },
  {
    title: "Budgeting",
    body: "A well-constructed budget gives your business a financial roadmap for the year ahead — and a benchmark against which to measure actual performance. We work with you to build a realistic, detailed budget based on your business model and objectives, and we review it with you regularly to keep you on track.",
  },
  {
    title: "Finance Process Reviews",
    body: "Inefficient finance processes waste time and create risk. We review how your business handles invoicing, payments, expense management, and financial reporting, and identify practical improvements — whether that means better use of your accounting software, clearer internal processes, or a different approach to credit control.",
  },
  {
    title: "Business Performance Reviews",
    body: "Regular performance reviews give you an objective view of how your business is doing against its goals. We combine financial and operational data to produce a clear picture of performance, highlight areas of concern before they become serious, and help you make informed decisions about where to focus your time and resources.",
  },
  {
    title: "Support with Asset Purchases and Finance Decisions",
    body: "Whether you're considering buying a vehicle, equipment, property, or another business, the financial and tax implications vary significantly depending on how the purchase is structured. We model the options, explain the tax treatment of each, and help you make the decision that works best for your business and personal circumstances.",
  },
  {
    title: "Support with Pricing, Margins and Profitability",
    body: "Pricing is one of the most impactful — and most neglected — levers in any business. We help you understand your true cost base, calculate the margins you need to be profitable, and think through how your pricing compares to the market and what changes would make the most difference to your overall profitability.",
  },
  {
    title: "Invoice Discounting Facility Support",
    body: "Invoice discounting can provide valuable working capital for businesses with long payment terms or rapid growth. We help you understand whether an invoice discounting facility is right for your business, prepare the financial information lenders will need, and support the application process — making sure you get the best terms available.",
  },
  {
    title: "HMRC Investigation Lead",
    body: "An HMRC investigation is stressful and time-consuming even when your affairs are completely in order. We act as your representative throughout the process — dealing with HMRC directly, responding to information requests, attending meetings on your behalf, and working to resolve the investigation as quickly and favourably as possible.",
  },
];

const startupSteps = [
  {
    step: "1",
    title: "Choose your structure",
    desc: "Sole trader, partnership, or limited company — we advise on the right choice for your situation.",
  },
  {
    step: "2",
    title: "Register correctly",
    desc: "Companies House, HMRC for corporation tax, VAT registration if needed, PAYE if employing staff.",
  },
  {
    step: "3",
    title: "Set up your finances",
    desc: "Business bank account, accounting software, bookkeeping processes, and expense records.",
  },
  {
    step: "4",
    title: "Understand your obligations",
    desc: "Tax deadlines, filing requirements, and the key dates that affect your business from day one.",
  },
  {
    step: "5",
    title: "Plan for tax",
    desc: "Set aside the right amount for tax each month so there are no surprises when payment is due.",
  },
  {
    step: "6",
    title: "Build a financial baseline",
    desc: "A simple budget and cash flow forecast to give your business a financial foundation from the start.",
  },
];

const reasons = [
  "Advice tailored to your specific business and circumstances",
  "Practical guidance, not just theory",
  "Start-up to scale-up — we support businesses at every stage",
  "Proactive rather than reactive — we flag issues early",
  "Fixed fees agreed upfront",
  "Direct access to an experienced adviser",
];

export default function BusinessAdvisoryPage() {
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
              Business Advisory
            </h1>
            <p className="mt-5 text-lg text-gray-300 leading-relaxed">
              A good accountant does more than file your tax return — they help
              you understand your business, make better decisions, and plan for
              the future. Our business advisory services give you the financial
              insight and practical guidance to move your business forward with
              confidence.
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
            { stat: "Start-Up", label: "To Scale-Up Support" },
            { stat: "Proactive", label: "Year-Round Business Advice" },
            { stat: "Fixed", label: "Transparent Advisory Fees" },
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
            From helping you start your business correctly to supporting
            complex finance decisions as you grow — here&apos;s what our
            business advisory service covers.
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

      {/* Start-up steps */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
              Starting a Business?
            </p>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">
              The Six Financial Steps to Starting Right
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              The decisions you make when starting a business set the tone for
              everything that follows. We guide you through each of these steps
              and make sure you have the right foundations in place.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {startupSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-semibold text-brand-navy">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {step.desc}
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
              Advisory That Makes a Real Difference
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Business advisory from Puma isn&apos;t a vague add-on to your
              accounts package. It&apos;s practical, grounded advice based on
              a thorough understanding of your numbers — delivered by someone
              who takes a genuine interest in how your business is doing.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you&apos;re making a major investment decision, worried
              about cash flow, planning how to grow, or dealing with an HMRC
              investigation, we give you clear, honest guidance and work through
              the options with you rather than just telling you what you want
              to hear.
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
              Sole Trader vs Limited Company
            </h3>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              One of the most common questions we get from new business owners
              is whether to operate as a sole trader or set up a limited company.
              There&apos;s no single right answer — it depends on your profit
              level, risk appetite, plans for growth, and personal circumstances.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              {[
                "Sole trader: simpler to set up and run, but personally liable for business debts",
                "Limited company: more tax-efficient at higher profit levels, limited liability, more administrative overhead",
                "The tax saving from incorporating is typically most significant above £30,000–£40,000 profit",
                "There are other factors beyond tax — we explore all of them with you",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0 mt-1.5" />
                  {point}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-brand-red hover:bg-brand-orange transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-md"
            >
              Discuss Your Options
            </Link>
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
              Business Advisory FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "When should I think about incorporating my business?",
                a: "There is no single threshold, but for most sole traders the financial benefits of incorporation become meaningful at around £30,000–£40,000 of profit. At that level, the tax savings from paying yourself a combination of salary and dividends can outweigh the additional administrative costs of running a limited company. We model the numbers for your specific situation so you can make an informed decision.",
              },
              {
                q: "What is an HMRC investigation and what triggers one?",
                a: "HMRC can open an investigation into any individual or business, though they are more likely to do so where returns show inconsistencies, significant changes in income or expenses, or figures that look out of line with comparable businesses in the same industry. Most investigations are resolved without any additional tax being owed, but they require careful handling. We represent you throughout the process.",
              },
              {
                q: "How do I improve my business cash flow?",
                a: "Cash flow problems usually stem from a combination of slow-paying customers, rapid growth outpacing working capital, or seasonal trading patterns that aren't planned for. We start by building a detailed cash flow forecast so you can see exactly where the pressure points are, then work through practical solutions — which might include tightening credit terms, invoice discounting, better supplier payment negotiation, or timing of major purchases.",
              },
              {
                q: "How often should I review my business finances?",
                a: "For most businesses, a monthly management accounts pack is the minimum needed to stay on top of performance. For smaller businesses, a quarterly review may be sufficient. We recommend at least an annual strategic review — looking at profitability, pricing, overhead structure, and the year ahead — in addition to the regular numbers review.",
              },
              {
                q: "Can you help me buy another business or prepare for a sale?",
                a: "Yes — we can support both acquisition and sale processes. For acquisitions, we review the target business's financials and flag risks. For sales, we help you prepare your accounts and financial records in the best possible shape, advise on deal structure and tax implications, and support you through the process. Get in touch to discuss your specific situation.",
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
            Looking for an accountant who goes beyond the numbers?
          </h2>
          <p className="text-gray-300 mt-3 max-w-lg mx-auto">
            Get in touch for a free, no-obligation conversation about your
            business. We&apos;ll listen first, then tell you honestly how
            we can help.
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