import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Puma Business Services",
  description:
    "Get in touch with Puma Business Services to discuss accountancy, tax, bookkeeping, payroll, management reporting or wider business support.",
};

const enquiryTypes = [
  {
    title: "Accountancy & Tax",
    text: "Year-end accounts, corporation tax, Self Assessment, director tax matters and HMRC correspondence.",
  },
  {
    title: "Bookkeeping & Compliance",
    text: "Bookkeeping, VAT, CIS, payroll, pensions and accounting software support.",
  },
  {
    title: "Management Reporting",
    text: "Management accounts, dashboards, forecasting, KPIs and financial analysis.",
  },
  {
    title: "Business Support",
    text: "Practical financial support when starting, growing, restructuring or making a significant business decision.",
  },
];

export default function ContactPage() {
  return (
    <div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-purple-dark text-white">
        <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full bg-brand-purple opacity-35" />
        <div className="absolute -bottom-36 left-1/3 w-80 h-80 rounded-full bg-brand-purple-mid opacity-15 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">

            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.25em] text-sm">
              Get in Touch
            </p>

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Start with a
              <span className="block text-brand-purple-soft">
                straightforward conversation.
              </span>
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
              Whether you need help with the day-to-day essentials or want
              better visibility over your business finances, get in touch and
              we can talk through what you need.
            </p>

          </div>
        </div>
      </section>

      {/* CONTACT CARD */}
      <section className="bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center">

            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.2em] text-sm">
                Contact Puma
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-purple-dark leading-tight">
                Tell us what you need help with.
              </h2>

              <p className="mt-6 text-lg text-brand-slate leading-relaxed max-w-xl">
                You do not need to know exactly which service you need before
                getting in touch. A brief outline of your circumstances is
                enough to start the conversation.
              </p>

              <p className="mt-4 text-lg text-brand-slate leading-relaxed max-w-xl">
                From there, we can discuss what is involved, what information
                may be needed and whether Puma is the right fit.
              </p>
            </div>

            <div className="bg-brand-purple-dark rounded-[2rem] p-8 sm:p-10 text-white relative overflow-hidden">

              <div className="absolute -right-24 -bottom-28 w-72 h-72 rounded-full bg-brand-purple opacity-40" />

              <div className="relative">

                <p className="text-brand-purple-soft uppercase tracking-[0.2em] font-semibold text-sm">
                  Email
                </p>

                <h2 className="mt-4 text-2xl sm:text-3xl font-bold break-words">
                  <a
                    href="mailto:daniel@puma-bs.co.uk"
                    className="hover:text-brand-purple-soft transition-colors"
                  >
                    daniel@puma-bs.co.uk
                  </a>
                </h2>

                <p className="mt-5 text-white/65 leading-relaxed max-w-md">
                  Send a brief outline of what you would like to discuss and
                  any relevant deadlines or background information.
                </p>

                <a
                  href="mailto:daniel@puma-bs.co.uk"
                  className="inline-block mt-8 bg-white text-brand-purple-dark hover:bg-brand-purple-soft transition-colors px-7 py-3.5 rounded-full font-semibold"
                >
                  Send an Email
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE CAN DISCUSS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="max-w-3xl">
            <p className="text-brand-purple font-semibold uppercase tracking-[0.2em] text-sm">
              What Can We Discuss?
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-purple-dark leading-tight">
              A wide range of financial and business matters.
            </h2>

            <p className="mt-5 text-lg text-brand-slate leading-relaxed max-w-2xl">
              These are some of the areas clients commonly get in touch about.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">

            {enquiryTypes.map((item, index) => (
              <div
                key={item.title}
                className="bg-brand-cream rounded-3xl p-8"
              >
                <p className="text-brand-purple font-semibold">
                  0{index + 1}
                </p>

                <h3 className="mt-7 text-2xl font-bold text-brand-purple-dark">
                  {item.title}
                </h3>

                <p className="mt-4 text-brand-slate leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHAT HELPS */}
      <section className="bg-brand-lilac">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.2em] text-sm">
                Helpful Information
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-purple-dark leading-tight">
                A little context helps us understand where to start.
              </h2>

              <p className="mt-6 text-lg text-brand-slate leading-relaxed max-w-xl">
                There is no need to prepare anything formal before getting in
                touch, but including a few basic details can make the first
                conversation more useful.
              </p>
            </div>

            <div className="space-y-4">

              {[
                {
                  title: "Your circumstances",
                  text: "For example, whether you are an individual, sole trader, limited company or part of a wider group.",
                },
                {
                  title: "What you need help with",
                  text: "A short summary of the issue, service or financial decision you would like to discuss.",
                },
                {
                  title: "Any important deadlines",
                  text: "If there is a filing date, HMRC deadline or other time-sensitive issue, mention it in your first message.",
                },
                {
                  title: "Your current setup",
                  text: "If relevant, let us know which accounting software you use and whether another accountant or bookkeeper is currently involved.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 flex gap-5"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-bold text-brand-purple-dark text-lg">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-brand-slate leading-relaxed text-sm">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="relative overflow-hidden bg-brand-purple rounded-[2.5rem] px-8 py-16 sm:px-14 sm:py-20 text-white">

            <div className="absolute -right-20 -bottom-24 w-80 h-80 bg-brand-purple-soft/20 rounded-full" />
            <div className="absolute -left-24 -top-32 w-72 h-72 bg-brand-purple-dark/20 rounded-full" />

            <div className="relative max-w-3xl">

              <p className="text-brand-purple-soft uppercase tracking-[0.2em] font-semibold text-sm">
                Ready When You Are
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                Get in touch and tell us what&apos;s going on.
              </h2>

              <p className="mt-5 text-lg text-white/75 max-w-2xl leading-relaxed">
                If Puma can help, we&apos;ll explain what the next steps could
                look like. If it is not something we are best placed to deal
                with, we&apos;ll be clear about that too.
              </p>

              <a
                href="mailto:daniel@puma-bs.co.uk"
                className="inline-block mt-8 bg-white text-brand-purple-dark hover:bg-brand-purple-soft transition-colors px-7 py-3.5 rounded-full font-semibold"
              >
                Email Puma
              </a>

              <Link
                href="/services"
                className="inline-flex items-center mt-8 sm:ml-6 font-semibold text-white/80 hover:text-white transition-colors"
              >
                Browse Services
                <span className="ml-2">→</span>
              </Link>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
