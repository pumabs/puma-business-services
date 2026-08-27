import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puma Business Services | Accountancy & Business Support",
  description:
    "Puma Business Services provides accountancy, bookkeeping, tax, payroll and business advisory support for businesses and individuals.",
};

const serviceCategories = [
  {
    number: "01",
    title: "Accounts & Tax",
    desc: "Limited company and sole trader accounts, corporation tax, self-assessment and tax planning.",
  },
  {
    number: "02",
    title: "Bookkeeping & Cloud Accounting",
    desc: "Day-to-day bookkeeping, reconciliations and support across Xero, Sage and FreeAgent.",
  },
  {
    number: "03",
    title: "VAT & CIS",
    desc: "VAT returns, registrations, Making Tax Digital support and CIS compliance.",
  },
  {
    number: "04",
    title: "Payroll & Pensions",
    desc: "Payroll processing, RTI submissions, workplace pensions and auto enrolment support.",
  },
  {
    number: "05",
    title: "Business Advisory",
    desc: "Practical financial support, planning and advice to help businesses move forward.",
  },
  {
    number: "06",
    title: "Management Reporting",
    desc: "Management accounts, forecasting, KPI reporting and financial insight.",
  },
];

const trustPoints = [
  {
    title: "Personal",
    text: "Straightforward support with a direct point of contact.",
  },
  {
    title: "Clear",
    text: "Plain-English explanations without unnecessary jargon.",
  },
  {
    title: "Proactive",
    text: "Support that looks ahead rather than simply reporting the past.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-purple-dark text-white">
        <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full bg-brand-purple opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand-purple-mid opacity-20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 lg:py-36 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.25em] text-sm">
              Puma Business Services
            </p>

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Accountancy built around
              <span className="block text-brand-purple-soft">
                your business.
              </span>
            </h1>

            <p className="mt-7 text-lg text-white/70 max-w-xl leading-relaxed">
              Clear financial support, practical advice and better visibility
              over your numbers — without the jargon.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">
              <Link
                href="/contact"
                className="bg-white text-brand-purple-dark hover:bg-brand-purple-soft transition-colors font-semibold px-7 py-3.5 rounded-full"
              >
                Get in Touch
              </Link>

              <Link
                href="/services"
                className="border border-white/30 hover:border-white text-white transition-colors font-semibold px-7 py-3.5 rounded-full"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-[2rem] p-8 shadow-2xl">
              <p className="text-sm text-brand-purple-soft uppercase tracking-widest">
                Better Financial Visibility
              </p>

              <div className="mt-8 space-y-5">
                <div className="bg-white rounded-2xl p-6 text-brand-purple-dark">
                  <p className="text-sm text-brand-slate">Revenue overview</p>
                  <p className="text-4xl font-bold mt-2">£428k</p>
                  <p className="text-sm text-brand-purple mt-2">
                    +12.4% year on year
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-brand-lilac rounded-2xl p-5 text-brand-purple-dark">
                    <p className="text-sm text-brand-slate">Gross Margin</p>
                    <p className="text-3xl font-bold mt-2">34%</p>
                  </div>

                  <div className="bg-brand-purple text-white rounded-2xl p-5">
                    <p className="text-sm text-white/70">Forecast</p>
                    <p className="text-3xl font-bold mt-2">On Track</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.2em] text-sm">
                What We Do
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-purple-dark leading-tight">
                More than year-end accounts.
              </h2>
            </div>

            <div>
              <p className="text-xl text-brand-slate leading-relaxed">
                Puma provides practical financial support throughout the year,
                helping businesses stay compliant while also giving owners a
                clearer understanding of how their business is performing.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center mt-8 font-semibold text-brand-purple hover:text-brand-purple-dark"
              >
                Learn more about Puma
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-brand-purple font-semibold uppercase tracking-[0.2em] text-sm">
              Services
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-purple-dark">
              Support across your finances.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service) => (
              <div
                key={service.title}
                className="group bg-brand-cream hover:bg-brand-purple-dark rounded-3xl p-8 transition-all duration-300 min-h-[260px] flex flex-col"
              >
                <p className="text-brand-purple group-hover:text-brand-purple-soft font-semibold">
                  {service.number}
                </p>

                <h3 className="mt-8 text-2xl font-bold text-brand-purple-dark group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-brand-slate group-hover:text-white/70 leading-relaxed">
                  {service.desc}
                </p>

                <span className="mt-auto pt-8 text-brand-purple group-hover:text-brand-purple-soft font-semibold">
                  Learn more →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORTING FEATURE */}
      <section className="bg-brand-purple-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.2em] text-sm">
              Management Reporting
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
              Know what your numbers are telling you.
            </h2>

            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
              Go beyond historic accounts with management reporting,
              forecasting and financial insight designed to help business
              owners understand performance and make better decisions.
            </p>

            <Link
              href="/services"
              className="inline-block mt-8 bg-brand-purple text-white hover:bg-brand-purple-mid transition-colors px-7 py-3.5 rounded-full font-semibold"
            >
              Explore Reporting
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {[
              ["Monthly Reporting", "Clear performance updates"],
              ["Forecasting", "See what lies ahead"],
              ["KPIs", "Track what matters"],
              ["Business Insight", "Turn data into decisions"],
            ].map(([title, text]) => (
              <div
                key={title}
                className="bg-white/10 border border-white/10 rounded-3xl p-6"
              >
                <div className="w-10 h-10 bg-brand-purple rounded-xl mb-8" />
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="text-white/60 mt-2 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PUMA */}
      <section className="bg-brand-lilac">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-brand-purple font-semibold uppercase tracking-[0.2em] text-sm">
              Why Puma
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-purple-dark">
              Straightforward support.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {trustPoints.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-brand-purple-soft" />

                <h3 className="mt-8 text-2xl font-bold text-brand-purple-dark">
                  {item.title}
                </h3>

                <p className="mt-3 text-brand-slate leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="relative overflow-hidden bg-brand-purple rounded-[2.5rem] px-8 py-16 sm:px-14 sm:py-20 text-white">
            <div className="absolute -right-20 -bottom-24 w-80 h-80 bg-brand-purple-soft/20 rounded-full" />

            <div className="relative max-w-3xl">
              <p className="text-brand-purple-soft uppercase tracking-[0.2em] font-semibold text-sm">
                Let&apos;s Talk
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                Looking for more from your accountant?
              </h2>

              <p className="mt-5 text-lg text-white/75 max-w-xl">
                Get in touch for a straightforward conversation about how Puma
                can support you and your business.
              </p>

              <Link
                href="/contact"
                className="inline-block mt-8 bg-white text-brand-purple-dark hover:bg-brand-purple-soft transition-colors px-7 py-3.5 rounded-full font-semibold"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
}
