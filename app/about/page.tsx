import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Puma Business Services",
  description:
    "Learn more about Puma Business Services and our approach to accountancy, financial reporting and practical business support.",
};

const values = [
  {
    number: "01",
    title: "Clear",
    text: "Accountancy and financial matters explained in straightforward language, so you understand what the numbers actually mean.",
  },
  {
    number: "02",
    title: "Personal",
    text: "A direct relationship with someone who gets to know you, your business and the circumstances behind the figures.",
  },
  {
    number: "03",
    title: "Practical",
    text: "Advice that considers how your business actually operates, rather than simply providing a textbook answer.",
  },
  {
    number: "04",
    title: "Forward-Looking",
    text: "Support that looks beyond the next filing deadline and helps you think about performance, planning and what comes next.",
  },
];

const supportAreas = [
  "Accounts & Tax",
  "Bookkeeping & Cloud Accounting",
  "VAT & CIS",
  "Payroll & Pensions",
  "Management Reporting & Business Insight",
  "Business Advisory & Support",
];

export default function AboutPage() {
  return (
    <div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-purple-dark text-white">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-purple opacity-30" />
        <div className="absolute -bottom-28 left-1/3 w-72 h-72 rounded-full bg-brand-purple-mid opacity-15 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="max-w-3xl">

            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.22em] text-xs sm:text-sm">
              About Puma
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
              Accountancy built around
              <span className="block text-brand-purple-soft">
                the business behind the numbers.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
              Puma Business Services combines the essential accountancy work
              businesses need with practical support, clear communication and
              a greater focus on understanding the numbers.
            </p>

          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">

            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
                Our Approach
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark leading-tight">
                More than producing accounts and filing returns.
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-brand-slate leading-relaxed">

              <p>
                Puma Business Services was built around a straightforward idea:
                accountancy should be useful to the person running the
                business, not simply something completed because it has to be.
              </p>

              <p>
                Compliance remains an important part of that. Accounts need to
                be accurate, returns need to be submitted and deadlines need to
                be managed properly.
              </p>

              <p>
                But there is often much more value in the information behind
                those accounts. Understanding profitability, cash flow, costs,
                margins and financial trends can help business owners make
                better-informed decisions throughout the year.
              </p>

              <p>
                That is where Puma aims to be different: combining reliable
                accountancy with practical financial support that can develop
                alongside the business.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">

          <div className="max-w-3xl">
            <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
              What Matters
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark">
              A straightforward way of working.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
              The service is built around a few simple principles.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {values.map((value) => (
              <div
                key={value.title}
                className="bg-brand-cream rounded-2xl p-7"
              >
                <p className="text-brand-purple font-semibold text-sm">
                  {value.number}
                </p>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-brand-purple-dark">
                  {value.title}
                </h3>

                <p className="mt-3 text-brand-slate leading-relaxed text-sm sm:text-base">
                  {value.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PERSONAL SERVICE */}
      <section className="bg-brand-purple-dark text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
                Personal Service
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
                Know who you&apos;re dealing with.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
                Building a good working relationship makes accountancy easier.
                The more your accountant understands about the business, its
                owners and what they are trying to achieve, the more useful
                that support can become.
              </p>

              <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
                Puma takes a hands-on approach, with direct communication and
                support that reflects the circumstances of the individual
                client rather than forcing everyone into the same process.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">

              {[
                ["Direct Contact", "Speak directly with the person looking after your accounts and financial matters."],
                ["Clear Answers", "Questions explained in straightforward language without unnecessary jargon."],
                ["Business Context", "Advice that takes account of what is actually happening within your business."],
                ["Ongoing Support", "Help available throughout the year rather than only when a deadline approaches."],
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
        </div>
      </section>

      {/* WHAT WE SUPPORT */}
      <section className="bg-brand-lilac">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
                What We Support
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark leading-tight">
                From the essentials to deeper financial insight.
              </h2>

              <p className="mt-5 text-base sm:text-lg text-brand-slate leading-relaxed max-w-xl">
                Support can range from individual compliance services through
                to a much broader role across the financial side of a
                business.
              </p>

              <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed max-w-xl">
                The level of involvement depends on what is useful for the
                client and can change as the business develops.
              </p>

              <Link
                href="/services"
                className="inline-block mt-6 bg-brand-purple text-white hover:bg-brand-purple-dark transition-colors px-6 py-3 rounded-full font-semibold text-sm"
              >
                Explore Our Services
              </Link>
            </div>

            <div className="bg-white rounded-[2rem] p-7 sm:p-9">

              <div className="space-y-3">
                {supportAreas.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 py-3 border-b border-brand-purple-soft last:border-0"
                  >
                    <span className="text-brand-purple font-semibold text-sm w-7">
                      0{index + 1}
                    </span>

                    <span className="font-semibold text-brand-purple-dark">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
              Who We Work With
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark">
              Support that can grow with you.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-brand-slate leading-relaxed">
              Puma works with individuals, sole traders, limited companies,
              directors and growing businesses across a range of industries.
              Whether you need help with one area or wider financial support,
              the starting point is understanding what your circumstances
              actually require.
            </p>

          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {[
              ["Individuals", "Tax and financial matters that need clear, practical support."],
              ["Sole Traders", "Accounts, tax, bookkeeping and support as the business develops."],
              ["Limited Companies", "Compliance, payroll, VAT, reporting and director support."],
              ["Growing Businesses", "Deeper reporting, forecasting, analysis and wider financial support."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="border border-brand-purple-soft rounded-2xl p-6"
              >
                <h3 className="font-bold text-brand-purple-dark text-lg">
                  {title}
                </h3>

                <p className="mt-3 text-brand-slate text-sm leading-relaxed">
                  {text}
                </p>
              </div>
            ))}

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
                Get in Touch
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
                Looking for an accountant who understands the bigger picture?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
                Tell us a little about you or your business and what you are
                looking for. We can then discuss where Puma may be able to
                help.
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
