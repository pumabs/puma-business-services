import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accounts & Tax Services | Puma Business Services",
  description:
    "Limited company accounts, sole trader accounts, corporation tax, self-assessment, director tax planning and more. Professional accounts and tax services from Puma Business Services.",
};

const services = [
  {
    title: "Limited Company Accounts",
    body: "We prepare and file your annual statutory accounts in line with Companies House and HMRC requirements. Whether you're a small owner-managed business or a growing limited company, we ensure your accounts are accurate, compliant, and submitted on time — with a clear explanation of what they mean for your business.",
  },
  {
    title: "Sole Trader Accounts",
    body: "Running your own business shouldn't mean drowning in paperwork. We prepare your sole trader accounts from your records, making sure your income and expenses are correctly recorded and that you're only paying the tax you owe — nothing more.",
  },
  {
    title: "Corporation Tax Returns",
    body: "We handle your corporation tax return from start to finish — calculating your liability, identifying any available reliefs, and submitting to HMRC ahead of your deadline. We also advise on tax payment planning so there are no nasty surprises when your bill is due.",
  },
  {
    title: "Self-Assessment Tax Returns",
    body: "Whether you're a director, sole trader, landlord, or high earner with untaxed income, we take the stress out of self-assessment. We gather your information, prepare the return accurately, and submit it to HMRC — making sure you claim every allowance and relief you're entitled to.",
  },
  {
    title: "Director Tax Planning",
    body: "As a company director, how you extract money from your business matters enormously. We advise on the most tax-efficient combination of salary, dividends, and pension contributions to minimise your overall tax bill — legally and sustainably.",
  },
  {
    title: "Dividend Planning",
    body: "Getting your dividend strategy right can save you thousands each year. We help you understand the most efficient way to draw dividends, when to take them, and how to stay within your available allowances — keeping more money in your pocket and out of HMRC's.",
  },
  {
    title: "Companies House Filings",
    body: "Missing a Companies House deadline can result in automatic penalties and, ultimately, compulsory strike-off. We manage your statutory filings calendar, prepare your accounts in the correct format, and submit on time — so you never have to worry about a missed deadline.",
  },
  {
    title: "Confirmation Statements",
    body: "Your annual confirmation statement is a legal requirement, confirming that Companies House has up-to-date information about your company. We prepare and file this on your behalf, making sure your registered details, SIC codes, and share structure are all accurately recorded.",
  },
  {
    title: "HMRC Correspondence",
    body: "Receiving a letter from HMRC can be daunting. We act on your behalf, responding to queries, handling compliance checks, and communicating directly with HMRC so you don't have to. Whether it's a routine query or something more serious, we deal with it professionally and promptly.",
  },
  {
    title: "Tax Payment Planning",
    body: "Knowing your tax liability in advance means you can plan your cash flow around it. We work with you throughout the year to give you an accurate picture of what you'll owe and when — so you're never caught short when a payment deadline arrives.",
  },
];

const reasons = [
  "All filings submitted accurately and on time",
  "Proactive advice — not just compliance",
  "Clear explanations in plain English",
  "Fixed fees agreed upfront",
  "Direct access to your accountant",
  "Making Tax Digital ready",
];

export default function AccountsTaxPage() {
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
              Accounts &amp; Tax
            </h1>
            <p className="mt-5 text-lg text-gray-300 leading-relaxed">
              Accurate accounts and smart tax planning are the foundation of
              every healthy business. We handle the compliance so you can focus
              on running your business — and we make sure you never pay more tax
              than you need to.
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

      {/* Intro */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12 grid gap-4 sm:grid-cols-3 text-center">
          {[
            { stat: "On Time", label: "Every Filing, Every Time" },
            { stat: "Fixed", label: "Transparent Fees" },
            { stat: "Proactive", label: "Year-Round Tax Advice" },
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
            From straightforward sole trader accounts to complex director tax
            planning, here&apos;s a full breakdown of what we offer under
            Accounts &amp; Tax.
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

      {/* Why choose us for this */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
                Why Puma?
              </p>
              <h2 className="text-3xl font-bold text-brand-navy mt-2">
                Accounts &amp; Tax Done Properly
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                A lot of accountants will file your accounts and leave it at
                that. We take a more proactive approach — flagging tax saving
                opportunities throughout the year, not just at filing time, and
                making sure you fully understand your financial position at
                every stage.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We work with sole traders, limited companies, directors, and
                individuals who need self-assessment returns — and we tailor
                our advice to your specific circumstances rather than applying
                a one-size-fits-all approach.
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
                Key Deadlines We Manage For You
              </h3>
              <ul className="mt-6 space-y-5 text-sm text-gray-300">
                {[
                  {
                    event: "Company accounts filing",
                    detail:
                      "9 months after your company year end for HMRC; 9 months after for Companies House",
                  },
                  {
                    event: "Corporation tax payment",
                    detail:
                      "9 months and 1 day after your company accounting period ends",
                  },
                  {
                    event: "Self-Assessment return",
                    detail:
                      "31 January following the end of the tax year (5 April)",
                  },
                  {
                    event: "Self-Assessment payment",
                    detail:
                      "31 January (balancing payment) and 31 July (payment on account)",
                  },
                  {
                    event: "Confirmation statement",
                    detail:
                      "Within 14 days of the due date (12 months from your last filing)",
                  },
                ].map((item) => (
                  <li key={item.event} className="flex gap-3 items-start">
                    <span className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0 mt-1.5" />
                    <span>
                      <span className="text-white font-medium">
                        {item.event}
                      </span>{" "}
                      — {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
            Common Questions
          </p>
          <h2 className="text-3xl font-bold text-brand-navy mt-2">
            Accounts &amp; Tax FAQs
          </h2>
        </div>
        <div className="space-y-6">
          {[
            {
              q: "Do I need an accountant for my limited company?",
              a: "Technically no — but practically, yes. Limited companies have a range of statutory obligations (annual accounts, corporation tax returns, confirmation statements, payroll) that carry automatic penalties if missed or filed incorrectly. An accountant pays for itself many times over in saved time, avoided penalties, and legitimate tax savings.",
            },
            {
              q: "What records do I need to keep as a sole trader?",
              a: "You need to keep records of all your business income and expenses, including receipts, invoices, and bank statements. HMRC requires you to keep these for at least 5 years after the 31 January submission deadline for the relevant tax year. We can help you set up a simple system to make this straightforward.",
            },
            {
              q: "How much corporation tax will my company pay?",
              a: "Since April 2023, the main rate of corporation tax is 25% for profits over £250,000, with a small profits rate of 19% for profits under £50,000. Companies with profits between £50,000 and £250,000 pay a tapered rate. We calculate your exact liability and advise on any available reliefs to reduce it.",
            },
            {
              q: "What is the most tax-efficient way to pay myself as a director?",
              a: "For most directors, the most tax-efficient approach is a combination of a low salary (typically set around the National Insurance threshold) and dividends from company profits. The exact split depends on your circumstances, and we advise on this as part of our director tax planning service.",
            },
            {
              q: "What happens if I miss a filing deadline?",
              a: "HMRC and Companies House both issue automatic penalties for late filings, which increase the longer the delay. Companies House penalties for late accounts start at £150 and rise to £1,500 for accounts more than 6 months late. HMRC penalties for self-assessment start at £100 immediately and escalate from there. We manage your deadlines proactively so this never happens.",
            },
          ].map((faq) => (
            <div
              key={faq.q}
              className="border border-gray-200 rounded-xl p-6"
            >
              <h3 className="font-semibold text-brand-navy">{faq.q}</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to get your accounts and tax sorted?
          </h2>
          <p className="text-gray-300 mt-3 max-w-lg mx-auto">
            Get in touch for a free, no-obligation conversation. We&apos;ll
            explain exactly what we can do for you and what it will cost —
            no jargon, no surprises.
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