import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Puma | Puma Business Services",
  description:
    "Find out more about Puma Business Services and our practical, personal approach to accountancy, reporting and business support.",
};

const values = [
  {
    number: "01",
    title: "Personal",
    body: "Good advice starts with understanding the business behind the numbers. Puma takes the time to understand how you operate, what matters to you and where you want to go.",
  },
  {
    number: "02",
    title: "Straightforward",
    body: "Accountancy can be complicated. The explanation does not need to be. The aim is to make financial matters clear, practical and easy to act on.",
  },
  {
    number: "03",
    title: "Proactive",
    body: "The job should not begin and end with filing deadlines. Where the numbers highlight something worth discussing, Puma will help you understand it and consider what to do next.",
  },
  {
    number: "04",
    title: "Practical",
    body: "Advice needs to work in the real world. Recommendations are considered in the context of your business, your circumstances and what is realistically achievable.",
  },
];

const services = [
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
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-brand-purple opacity-35" />
        <div className="absolute -bottom-36 left-1/3 w-80 h-80 rounded-full bg-brand-purple-mid opacity-15 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">

            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.25em] text-sm">
              About Puma
            </p>

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Accountancy with a
              <span className="block text-brand-purple-soft">
                more personal approach.
              </span>
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
              Puma Business Services was created to provide business owners
              with clear, practical financial support and a relationship that
              goes beyond simply dealing with the next deadline.
            </p>

          </div>
        </div>
      </section>

      {/* INTRO / STORY */}
      <section className="bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-24 items-start">

            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.2em] text-sm">
                The Approach
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-purple-dark leading-tight">
                Understanding the business, not just the accounts.
              </h2>
            </div>

            <div className="space-y-6 text-lg text-brand-slate leading-relaxed">

              <p>
                Puma Business Services is built around a simple idea:
                accountancy should be useful.
              </p>

              <p>
                Of course, getting the fundamentals right matters. Accounts
                need preparing, tax returns need filing, payroll needs running
                and businesses need to stay compliant. But those tasks are
                only part of the picture.
              </p>

              <p>
                The numbers within a business can also tell you what is
                working, where pressure is building, how performance is
                changing and what may lie ahead. Puma aims to help clients
                make use of that information rather than only looking at it
                after the year has finished.
              </p>

              <p>
                That means combining reliable accountancy work with ongoing
                conversations, practical advice and, where useful, more
                detailed management information and financial analysis.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* DAN / PERSONAL SERVICE */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Visual card */}
            <div className="relative">
              <div className="bg-brand-purple-dark rounded-[2rem] p-8 sm:p-10 min-h-[430px] flex flex-col justify-between overflow-hidden relative">

                <div className="absolute -right-24 -top-24 w-72 h-72 bg-brand-purple rounded-full opacity-40" />
                <div className="absolute -left-20 -bottom-24 w-64 h-64 bg-brand-purple-mid rounded-full opacity-20" />

                <div className="relative">
                  <p className="text-brand-purple-soft uppercase tracking-[0.2em] font-semibold text-sm">
                    Puma Business Services
                  </p>

                  <p className="mt-5 text-4xl sm:text-5xl font-bold text-white leading-tight">
                    Small enough to
                    <span className="block text-brand-purple-soft">
                      know your business.
                    </span>
                  </p>
                </div>

                <div className="relative grid grid-cols-2 gap-4 mt-14">
                  <div className="bg-white/10 border border-white/10 rounded-2xl p-5">
                    <p className="text-white font-semibold">
                      Direct
                    </p>
                    <p className="text-white/60 text-sm mt-2">
                      A personal point of contact
                    </p>
                  </div>

                  <div className="bg-white/10 border border-white/10 rounded-2xl p-5">
                    <p className="text-white font-semibold">
                      Flexible
                    </p>
                    <p className="text-white/60 text-sm mt-2">
                      Support built around your needs
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Copy */}
            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.2em] text-sm">
                Meet Dan
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-purple-dark leading-tight">
                One relationship. A broad range of support.
              </h2>

              <div className="mt-7 space-y-5 text-brand-slate text-lg leading-relaxed">

                <p>
                  Puma is run by Dan, providing accountancy and financial
                  support to businesses and individuals from Buxton and the
                  surrounding area, as well as clients further afield.
                </p>

                <p>
                  The advantage of working with a smaller practice is that the
                  person you speak to is also the person who understands the
                  work. There is no need to repeatedly explain your business
                  to different departments or work through layers of people.
                </p>

                <p>
                  Over time, that relationship makes it easier to understand
                  the context behind the figures, spot unusual movements and
                  have more useful conversations about the decisions facing
                  the business.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-brand-lilac">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="max-w-3xl">
            <p className="text-brand-purple font-semibold uppercase tracking-[0.2em] text-sm">
              How Puma Works
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-purple-dark">
              The principles behind the service.
            </h2>

            <p className="mt-5 text-lg text-brand-slate leading-relaxed">
              Different clients need different levels of support, but the
              approach to providing it should remain consistent.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-3xl p-8 min-h-[310px] flex flex-col shadow-sm"
              >
                <p className="text-brand-purple font-semibold">
                  {value.number}
                </p>

                <h3 className="mt-8 text-2xl font-bold text-brand-purple-dark">
                  {value.title}
                </h3>

                <p className="mt-4 text-brand-slate leading-relaxed">
                  {value.body}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.2em] text-sm">
                What We Can Help With
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-purple-dark leading-tight">
                Support that can grow with your business.
              </h2>

              <p className="mt-6 text-lg text-brand-slate leading-relaxed max-w-xl">
                Some clients need support with a specific area. Others want
                Puma involved across much more of their finance function.
                The level of involvement can develop as the needs of the
                business change.
              </p>

              <Link
                href="/services"
                className="inline-block mt-8 bg-brand-purple hover:bg-brand-purple-mid transition-colors text-white px-7 py-3.5 rounded-full font-semibold"
              >
                Explore All Services
              </Link>
            </div>

            <div className="bg-brand-cream rounded-[2rem] p-7 sm:p-9">

              <div className="divide-y divide-brand-purple-soft">

                {services.map((service, index) => (
                  <div
                    key={service}
                    className="flex items-center gap-5 py-5 first:pt-0 last:pb-0"
                  >
                    <span className="w-9 h-9 rounded-full bg-brand-purple text-white flex items-center justify-center text-sm font-semibold flex-shrink-0">
                      {index + 1}
                    </span>

                    <p className="text-brand-purple-dark font-semibold text-lg">
                      {service}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* DIFFERENCE */}
      <section className="bg-brand-purple-dark text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">

            <div>
              <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.2em] text-sm">
                More Than Compliance
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                The right level of support at the right time.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              {[
                [
                  "The Essentials",
                  "Accounts, tax, VAT, payroll, bookkeeping and the recurring work needed to keep things running properly.",
                ],
                [
                  "The Bigger Picture",
                  "Reporting, forecasting and analysis for businesses that want greater visibility over performance.",
                ],
                [
                  "When Things Change",
                  "Practical support when the business grows, restructures, takes on staff or faces a new financial decision.",
                ],
                [
                  "Someone to Ask",
                  "A point of contact when something comes up and you need to understand the accounting or financial implications.",
                ],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="bg-white/10 border border-white/10 rounded-3xl p-7"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-purple mb-7" />

                  <h3 className="text-xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 text-white/65 leading-relaxed text-sm">
                    {text}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="bg-brand-purple rounded-[2.5rem] px-8 py-16 sm:px-14 sm:py-20 text-white text-center relative overflow-hidden">

            <div className="absolute -right-20 -bottom-24 w-80 h-80 bg-brand-purple-soft/20 rounded-full" />
            <div className="absolute -left-24 -top-32 w-72 h-72 bg-brand-purple-dark/20 rounded-full" />

            <div className="relative max-w-3xl mx-auto">

              <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.2em] text-sm">
                Get in Touch
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                See if Puma is the right fit for your business.
              </h2>

              <p className="mt-5 text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
                If you are looking for accountancy support or simply want to
                discuss where Puma may be able to help, get in touch for an
                initial conversation.
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
