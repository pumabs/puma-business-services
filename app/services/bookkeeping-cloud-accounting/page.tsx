import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bookkeeping & Cloud Accounting Services | Puma Business Services",
  description:
    "Professional bookkeeping, bank reconciliations, cloud accounting setup and support for Xero, Sage and FreeAgent. Keep your finances accurate and up to date with Puma Business Services.",
};

const services = [
  {
    title: "Bookkeeping",
    body: "Accurate, up-to-date books are the foundation of a well-run business. We handle your day-to-day bookkeeping — recording income and expenditure, categorising transactions correctly, and keeping your accounts in order so you always have a clear picture of where your business stands financially.",
  },
  {
    title: "Bank Reconciliations",
    body: "Unreconciled bank accounts are one of the most common sources of financial errors in small businesses. We reconcile your bank statements against your accounting records on a regular basis, catching discrepancies early and ensuring your books reflect reality — not just what should have happened.",
  },
  {
    title: "Sales and Purchase Ledger Support",
    body: "We manage your sales ledger (what customers owe you) and purchase ledger (what you owe suppliers) so nothing slips through the cracks. This includes posting invoices and credit notes, allocating payments, and helping you stay on top of aged debtors and creditors.",
  },
  {
    title: "Receipt and Invoice Processing",
    body: "Chasing and filing paper receipts wastes time and creates risk. We process your receipts and invoices — whether you send them digitally, via a scanning app, or through your cloud accounting software — making sure every transaction is captured, coded correctly, and ready for VAT purposes.",
  },
  {
    title: "Cloud Accounting Setup",
    body: "Moving to cloud accounting is one of the best decisions a growing business can make — but only if it's set up correctly from the start. We configure your chosen platform to match your business structure, chart of accounts, VAT settings, and reporting needs, so you get accurate information from day one rather than spending months unpicking errors.",
  },
  {
    title: "Xero, Sage Accounting, Sage 50 and FreeAgent Support",
    body: "We work across all the major cloud accounting platforms — Xero, Sage Accounting, Sage 50, and FreeAgent. Whether you already use one of these or are choosing for the first time, we can advise on the right platform for your business, get you set up, train you and your team to use it effectively, and provide ongoing support when you need it.",
  },
  {
    title: "Management Reports",
    body: "Your accounts shouldn't just satisfy HMRC — they should help you run your business better. We produce clear, readable management reports (profit and loss, balance sheet, aged debtors and creditors) on a monthly or quarterly basis, with commentary that explains what the numbers mean and what you should be paying attention to.",
  },
  {
    title: "Software Clean-Up and Correction Work",
    body: "If your accounting software has got into a mess — through DIY bookkeeping errors, duplicate entries, miscoded transactions, or incorrect VAT treatment — we can fix it. We audit your records, identify what's wrong, correct the errors, and get your books into a clean, accurate state so you can move forward with confidence.",
  },
];

const platforms = [
  {
    name: "Xero",
    desc: "Market-leading cloud platform ideal for growing businesses. Excellent bank feeds, strong reporting, and a large ecosystem of add-ons.",
  },
  {
    name: "Sage Accounting",
    desc: "Simple, reliable cloud software well suited to small businesses and sole traders looking for a straightforward bookkeeping solution.",
  },
  {
    name: "Sage 50",
    desc: "Desktop-based software with robust features for more established businesses that need stronger stock management and departmental reporting.",
  },
  {
    name: "FreeAgent",
    desc: "Popular with freelancers and sole traders. Clean interface, good invoicing tools, and built-in self-assessment support.",
  },
];

const reasons = [
  "Regular, accurate bookkeeping — not a last-minute year-end scramble",
  "Support across Xero, Sage and FreeAgent",
  "Making Tax Digital (MTD) compliant processes",
  "Clear management reports you can actually read",
  "Fixed fees with no surprise charges",
  "Direct access to your bookkeeper",
];

export default function BookkeepingPage() {
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
              Bookkeeping &amp; Cloud Accounting
            </h1>
            <p className="mt-5 text-lg text-gray-300 leading-relaxed">
              Good bookkeeping isn&apos;t just about keeping HMRC happy — it
              gives you the financial clarity to make better decisions, plan
              ahead, and grow with confidence. We keep your books accurate,
              current, and working for you.
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
            { stat: "4", label: "Cloud Platforms Supported" },
            { stat: "MTD", label: "Making Tax Digital Ready" },
            { stat: "Fixed", label: "Transparent Monthly Fees" },
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
            From day-to-day transaction recording through to full cloud
            accounting setup and management reporting, here&apos;s a breakdown
            of our bookkeeping and cloud accounting services.
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

      {/* Cloud platforms */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
              Platform Support
            </p>
            <h2 className="text-3xl font-bold text-brand-navy mt-2">
              Cloud Accounting Platforms We Work With
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Not sure which platform is right for your business? We can advise
              based on your size, industry, and how you work — and then get you
              set up and running properly.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-1 bg-brand-red rounded mb-4" />
                <h3 className="font-bold text-brand-navy text-lg">
                  {platform.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {platform.desc}
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
              Bookkeeping That Actually Helps Your Business
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Many businesses treat bookkeeping as a chore — something done
              reluctantly at year end to satisfy the accountant. We take a
              different view. Timely, accurate books give you real visibility
              over your finances, making it easier to chase debtors, manage
              cash flow, and make confident decisions.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We work with you to find a routine that fits — whether that&apos;s
              weekly, monthly, or quarterly bookkeeping — and we use cloud
              accounting tools to make the process as efficient and painless
              as possible.
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
              What is Making Tax Digital?
            </h3>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              Making Tax Digital (MTD) is HMRC&apos;s programme to move tax
              record-keeping and submissions online. MTD for VAT is already
              mandatory for all VAT-registered businesses. MTD for Income Tax
              Self Assessment (MTD for ITSA) is being introduced for sole
              traders and landlords with income over £50,000 from April 2026,
              and from April 2027 for those earning over £30,000.
            </p>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              This means that if you&apos;re self-employed or a landlord, you
              will soon be legally required to use MTD-compatible software to
              keep digital records and submit quarterly updates to HMRC.
            </p>
            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              All of the cloud platforms we support — Xero, Sage and FreeAgent
              — are MTD compatible. We can get you set up and compliant well
              ahead of your deadline.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 bg-brand-red hover:bg-brand-orange transition-colors text-white text-sm font-medium px-5 py-2.5 rounded-md"
            >
              Ask Us About MTD
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
              Bookkeeping FAQs
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "How often should I be doing my bookkeeping?",
                a: "Ideally, bookkeeping should be done at least monthly — weekly if your transaction volume is high. Leaving it until year end creates a significant risk of errors, missed VAT, and an inaccurate picture of your business finances throughout the year. We help you find a frequency that works for your business.",
              },
              {
                q: "Which cloud accounting software is best for my business?",
                a: "It depends on your business size, how you work, and what you need from your software. Xero is our most commonly recommended platform for small to medium businesses — it has excellent bank feeds, strong reporting, and a huge range of integrations. FreeAgent works well for freelancers and sole traders. Sage is a good fit for businesses that need more traditional desktop functionality alongside cloud access. We&apos;ll advise based on your specific situation.",
              },
              {
                q: "Can you take over my bookkeeping from another accountant or from me?",
                a: "Yes — we handle this regularly. We&apos;ll review your existing records, identify any issues, and take over from whatever point makes sense. If your books need cleaning up first, we&apos;ll do that as part of the onboarding process so we&apos;re working from a clean starting point.",
              },
              {
                q: "Do I still need to keep paper receipts?",
                a: "Not necessarily. HMRC accepts digital copies of receipts as long as they&apos;re legible and complete. Most cloud accounting platforms (and companion apps like Hubdoc or Dext) allow you to photograph receipts on your phone and attach them directly to transactions. We can advise on the best receipt capture method for your business.",
              },
              {
                q: "What if my accounting software is a mess?",
                a: "It&apos;s more common than you might think — especially when bookkeeping has been done in-house without specialist knowledge. We offer a software clean-up and correction service where we audit your records, identify errors, and get everything back to an accurate, reliable state. We&apos;ll give you an honest assessment of the work involved and a fixed price before we start.",
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
            Want accurate books without the headache?
          </h2>
          <p className="text-gray-300 mt-3 max-w-lg mx-auto">
            Get in touch for a free, no-obligation conversation about your
            bookkeeping needs. We&apos;ll tell you exactly what we can do and
            what it will cost — upfront, no surprises.
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