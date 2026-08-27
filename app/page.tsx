import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puma Business Services | Accountancy & Business Support",
  description:
    "Accountancy, tax, bookkeeping, payroll, management reporting and practical business support for businesses and individuals in Buxton and beyond.",
};

const serviceCategories = [
  {
    number: "01",
    title: "Accounts & Tax",
    desc: "Year-end accounts, corporation tax, self-assessment and ongoing tax support for limited companies, sole traders and individuals.",
  },
  {
    number: "02",
    title: "Bookkeeping & Cloud Accounting",
    desc: "Accurate, up-to-date bookkeeping with practical support across Xero, Sage and FreeAgent.",
  },
  {
    number: "03",
    title: "VAT & CIS",
    desc: "VAT returns, registrations, Making Tax Digital and CIS support to help keep your business compliant.",
  },
  {
    number: "04",
    title: "Payroll & Pensions",
    desc: "Payroll processing, RTI submissions, starters and leavers, workplace pensions and auto-enrolment support.",
  },
  {
    number: "05",
    title: "Management Reporting & Insight",
    desc: "Management accounts, dashboards, KPIs, forecasting and financial analysis that help you understand what is happening in your business.",
  },
  {
    number: "06",
    title: "Business Advisory & Support",
    desc: "Practical financial guidance for business owners, from starting out and improving processes to planning for what comes next.",
  },
];

const trustPoints = [
  {
    title: "Personal",
    text: "A direct relationship with someone who gets to know you, your business and how you prefer to work.",
  },
  {
    title: "Straightforward",
    text: "Clear explanations and practical advice, without making accountancy more complicated than it needs to be.",
  },
  {
    title: "Proactive",
    text: "Support that goes beyond deadlines and looks at what your numbers mean for the business going forward.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-purple-dark text-white">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-purple opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-brand-purple-mid opacity-15 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div>
            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.22em] text-xs sm:text-sm">
              Accountancy • Reporting • Business Support
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
              More than just
              <span className="block text-brand-purple-soft">
                your accountant.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/70 max-w-xl leading-relaxed">
              Puma Business Services combines reliable accountancy and
              compliance with practical business support and financial insight,
              helping you understand your numbers and make better-informed
              decisions.
            </p>

            <div className="flex flex-wrap gap-4 mt-7">
              <Link
                href="/contact"
                className="bg-white text-brand-purple-dark hover:bg-brand-purple-soft transition-colors font-semibold px-6 py-3 rounded-full text-sm"
              >
                Get in Touch
              </Link>

              <Link
                href="/services"
                className="border border-white/30 hover:border-white text-white transition-colors font-semibold px-6 py-3 rounded-full text-sm"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Financial dashboard visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-[2rem] p-6 sm:p-7 shadow-2xl">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-brand-purple-soft uppercase tracking-widest">
                    Business Performance
                  </p>
                  <p className="text-white/50 text-sm mt-1">
                    Clearer numbers. Better visibility.
                  </p>
                </div>

                <div className="w-3 h-3 rounded-full bg-brand-purple-soft" />
              </div>

              <div className="mt-6 space-y-4">

                <div className="bg-white rounded-2xl p-5 text-brand-purple-dark">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-brand-slate">
                        Revenue
                      </p>
                      <p className="text-3xl font-bold mt-2">
                        £428k
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-brand-purple">
                      +12.4%
                    </p>
                  </div>

                  <div className="mt-5 flex items-end gap-2 h-14">
                    <div className="w-full bg-brand-purple-soft rounded-t-md h-[35%]" />
                    <div className="w-full bg-brand-purple-soft rounded-t-md h-[48%]" />
                    <div className="w-full bg-brand-purple-mid rounded-t-md h-[42%]" />
                    <div className="w-full bg-brand-purple-mid rounded-t-md h-[62%]" />
                    <div className="w-full bg-brand-purple rounded-t-md h-[75%]" />
                    <div className="w-full bg-brand-purple rounded-t-md h-[88%]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-brand-lilac rounded-2xl p-4 text-brand-purple-dark">
                    <p className="text-sm text-brand-slate">
                      Gross Margin
                    </p>
                    <p className="text-2xl font-bold mt-2">
                      34%
                    </p>
                    <p className="text-xs text-brand-slate mt-2">
                      Performance at a glance
                    </p>
                  </div>

                  <div className="bg-brand-purple text-white rounded-2xl p-4">
                    <p className="text-sm text-white/70">
                      Forecast
                    </p>
                    <p className="text-2xl font-bold mt-2">
                      On Track
                    </p>
                    <p className="text-xs text-white/60 mt-2">
                      Plan with better information
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INTRO */}
      <section className="bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
                A Different Approach
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark leading-tight">
                Your accounts should do more than keep you compliant.
              </h2>
            </div>

            <div>
              <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
                Keeping on top of tax, accounts and deadlines matters, but
                understanding the numbers behind your business matters too.
                Puma combines the essential accountancy work with practical,
                ongoing support to give you a clearer picture of where your
                business stands and where it could go next.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center mt-6 font-semibold text-brand-purple hover:text-brand-purple-dark text-sm"
              >
                Find out more about Puma
                <span className="ml-2">→</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">

          <div className="max-w-3xl">
            <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
              What We Do
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark">
              Support for the numbers behind your business.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed max-w-2xl">
              From keeping the books up to date and meeting statutory
              obligations to understanding performance and planning ahead,
              support can be tailored around what your business actually needs.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {serviceCategories.map((service) => (
              <div
                key={service.title}
                className="group bg-brand-cream hover:bg-brand-purple-dark rounded-2xl p-7 transition-all duration-300 min-h-[250px] flex flex-col"
              >
                <p className="text-brand-purple group-hover:text-brand-purple-soft font-semibold text-sm">
                  {service.number}
                </p>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-brand-purple-dark group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-brand-slate group-hover:text-white/70 leading-relaxed text-sm sm:text-base">
                  {service.desc}
                </p>

                <Link
                  href="/services"
                  className="mt-auto pt-6 text-brand-purple group-hover:text-brand-purple-soft font-semibold text-sm"
                >
                  Find out more →
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* REPORTING FEATURE */}
      <section className="bg-brand-purple-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div>
            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
              Management Reporting & Business Insight
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
              Know what your numbers are telling you.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
              Annual accounts tell you what happened. Good management
              information helps you understand what is happening now.
            </p>

            <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
              Through tailored reporting, dashboards, forecasting and
              financial analysis, Puma can turn accounting data into useful
              information that helps you spot trends, understand performance
              and plan with greater confidence.
            </p>

            <Link
              href="/services"
              className="inline-block mt-6 bg-brand-purple text-white hover:bg-brand-purple-mid transition-colors px-6 py-3 rounded-full font-semibold text-sm"
            >
              Discover Management Reporting
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">

            {[
              [
                "Management Accounts",
                "Regular reporting that gives you a clearer view of business performance.",
              ],
              [
                "Forecasting",
                "Use current information to look ahead and understand where the business may be heading.",
              ],
              [
                "KPIs & Dashboards",
                "Focus on the numbers that matter with clear, visual performance reporting.",
              ],
              [
                "Financial Analysis",
                "Dig deeper into movements, trends and the story behind the headline figures.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="bg-white/10 border border-white/10 rounded-2xl p-5"
              >
                <div className="w-9 h-9 bg-brand-purple rounded-xl mb-6" />

                <h3 className="font-bold text-lg">
                  {title}
                </h3>

                <p className="text-white/60 mt-2 text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY PUMA */}
      <section className="bg-brand-lilac">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
              Why Puma?
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark">
              Accountancy without the unnecessary complication.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
              The aim is simple: provide reliable financial support, explain
              things clearly and be there when you need help.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">

            {trustPoints.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-7 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-brand-purple-soft flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-brand-purple" />
                </div>

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

      {/* TESTIMONIAL */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">

          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16 items-start">

            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
                Client Feedback
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark leading-tight">
                Built on good relationships.
              </h2>

              <p className="mt-4 text-brand-slate leading-relaxed text-base sm:text-lg">
                Good accountancy is about more than producing the right
                numbers. It is about being approachable, reliable and giving
                clients the confidence to ask when they need help.
              </p>

              <Link
                href="/testimonials"
                className="inline-flex items-center mt-6 font-semibold text-brand-purple hover:text-brand-purple-dark text-sm"
              >
                Client testimonials
                <span className="ml-2">→</span>
              </Link>
            </div>

            <div className="bg-brand-cream rounded-[2rem] p-7 sm:p-9 lg:p-10 relative">

              <span className="text-6xl leading-none text-brand-purple-soft font-serif">
                “
              </span>

              <blockquote className="text-lg sm:text-xl text-brand-purple-dark font-medium leading-relaxed -mt-2">
                We have had a great experience with Puma Business Services.
                Dan is reliable, knowledgeable and always happy to help. He
                helped us set up our limited company and explained everything
                in a simple way that was easy to understand.
              </blockquote>

              <p className="mt-5 text-brand-slate leading-relaxed text-sm sm:text-base">
                Any questions we had were answered clearly and nothing ever
                felt too much trouble. The service has been amazing from start
                to finish. We would highly recommend Puma Business Services to
                anyone looking for business support. Dan is definitely the
                best in Buxton and the surrounding areas.
              </p>

              <div className="mt-6 pt-5 border-t border-brand-purple-soft">
                <p className="font-bold text-brand-purple-dark">
                  Cav
                </p>
                <p className="text-sm text-brand-slate mt-1">
                  Owner, Peak Precision Football
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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
                Looking for more from your accountant?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
                Whether you need help staying on top of the essentials or want
                a better understanding of your business finances, get in touch
                for an initial conversation about how Puma could help.
              </p>

              <Link
                href="/contact"
                className="inline-block mt-6 bg-white text-brand-purple-dark hover:bg-brand-purple-soft transition-colors px-6 py-3 rounded-full font-semibold text-sm"
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
