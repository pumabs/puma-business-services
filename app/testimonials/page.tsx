import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials | Puma Business Services",
  description:
    "Client feedback on working with Puma Business Services for accountancy and business support.",
};

export default function TestimonialsPage() {
  return (
    <div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-purple-dark text-white">
        <div className="absolute -top-28 -right-28 w-96 h-96 rounded-full bg-brand-purple opacity-35" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full bg-brand-purple-mid opacity-15 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.25em] text-sm">
              Client Feedback
            </p>

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              What it&apos;s like
              <span className="block text-brand-purple-soft">
                working with Puma.
              </span>
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
              Good relationships matter. Here&apos;s what one client had to say
              about the support they received from Puma Business Services.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIAL */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-12 lg:gap-20 items-start">

            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.2em] text-sm">
                Peak Precision Football
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-purple-dark leading-tight">
                Clear advice. Reliable support. Easy to work with.
              </h2>

              <p className="mt-6 text-lg text-brand-slate leading-relaxed">
                Peak Precision Football came to Puma for support with setting
                up their limited company and ongoing business matters.
              </p>

              <p className="mt-4 text-lg text-brand-slate leading-relaxed">
                Their feedback captures the kind of relationship Puma aims to
                build with every client: approachable, practical and easy to
                understand.
              </p>
            </div>

            <div className="bg-brand-cream rounded-[2rem] p-8 sm:p-10 lg:p-12">
              <span className="text-7xl leading-none text-brand-purple-soft font-serif">
                “
              </span>

              <blockquote className="text-xl sm:text-2xl text-brand-purple-dark font-medium leading-relaxed -mt-3">
                We have had a great experience with Puma Business Services.
                Dan is reliable, knowledgeable and always happy to help. He
                helped us set up our limited company and explained everything
                in a simple way that was easy to understand.
              </blockquote>

              <p className="mt-6 text-brand-slate leading-relaxed">
                Any questions we had were answered clearly and nothing ever
                felt too much trouble. The service has been amazing from start
                to finish. We would highly recommend Puma Business Services to
                anyone looking for business support. Dan is definitely the best
                in Buxton and the surrounding areas.
              </p>

              <div className="mt-8 pt-6 border-t border-brand-purple-soft">
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

      {/* WHAT CLIENTS CAN EXPECT */}
      <section className="bg-brand-lilac">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-brand-purple font-semibold uppercase tracking-[0.2em] text-sm">
              The Puma Approach
            </p>

            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-brand-purple-dark">
              The kind of service we aim to provide.
            </h2>

            <p className="mt-5 text-lg text-brand-slate leading-relaxed">
              Every client is different, but the principles behind the service
              remain the same.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Clear Communication",
                text: "Financial and tax matters explained in a way that makes sense, without unnecessary jargon.",
              },
              {
                title: "Practical Support",
                text: "Advice based on the real circumstances of the business, rather than generic answers.",
              },
              {
                title: "A Personal Relationship",
                text: "A direct point of contact who gets to know the business and understands the context behind the numbers.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-8 shadow-sm"
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

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="relative overflow-hidden bg-brand-purple rounded-[2.5rem] px-8 py-16 sm:px-14 sm:py-20 text-white">

            <div className="absolute -right-20 -bottom-24 w-80 h-80 bg-brand-purple-soft/20 rounded-full" />
            <div className="absolute -left-24 -top-32 w-72 h-72 bg-brand-purple-dark/20 rounded-full" />

            <div className="relative max-w-3xl">
              <p className="text-brand-purple-soft uppercase tracking-[0.2em] font-semibold text-sm">
                Let&apos;s Talk
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                Looking for a more personal approach to your accounts?
              </h2>

              <p className="mt-5 text-lg text-white/75 max-w-2xl leading-relaxed">
                Get in touch for an initial conversation about what you need
                and whether Puma could be the right fit.
              </p>

              <Link
                href="/contact"
                className="inline-block mt-8 bg-white text-brand-purple-dark hover:bg-brand-purple-soft transition-colors px-7 py-3.5 rounded-full font-semibold"
              >
                Get in Touch
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
