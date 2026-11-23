import Link from "next/link";
import type { Metadata } from "next";
import UpdatesCarousel from "./UpdatesCarousel";

export const metadata: Metadata = {
  title: "Latest from Puma | Puma Business Services",
  description:
    "Latest news, business updates, community involvement and sponsorship stories from Puma Business Services.",
};

export default function UpdatesPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-purple-dark text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-purple opacity-30" />
        <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-brand-purple-mid opacity-15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-purple-soft sm:text-sm">
              Updates
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Latest from
              <span className="block text-brand-purple-soft">Puma.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Business updates, community involvement, sponsorship news and
              useful insights from Puma Business Services.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple sm:text-sm">
                Puma Updates
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-purple-dark sm:text-4xl">
                More than just accounting updates.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-brand-slate sm:text-lg">
              <p>
                This is where we share what&apos;s happening at Puma Business
                Services, from business developments and useful financial
                insights to local sponsorships and community involvement.
              </p>

              <p>
                We&apos;ll also use this space to share some of the work going
                on behind the scenes and the things we think may be useful or
                interesting to the businesses we work with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST UPDATES */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple sm:text-sm">
              Latest
            </p>

            <h2 className="mt-3 text-3xl font-bold text-brand-purple-dark sm:text-4xl">
              Latest updates.
            </h2>
          </div>

          <UpdatesCarousel />
        </div>
      </section>

      {/* WHAT WE SHARE */}
      <section className="bg-brand-lilac">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple sm:text-sm">
              What You&apos;ll Find Here
            </p>

            <h2 className="mt-3 text-3xl font-bold text-brand-purple-dark sm:text-4xl">
              News, insights and life at Puma.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Business",
                "Updates from Puma and developments in the services we provide.",
              ],
              [
                "Insights",
                "Practical financial and accounting topics that may be useful to business owners.",
              ],
              [
                "Community",
                "Local involvement and the businesses, organisations and people we support.",
              ],
              [
                "Sponsorship",
                "Updates from Puma sponsorships and the difference that support is helping to make.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-7 shadow-sm"
              >
                <div
                  aria-hidden="true"
                  className="h-10 w-10 rounded-2xl bg-brand-purple-soft"
                />

                <h3 className="mt-6 text-xl font-bold text-brand-purple-dark">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple sm:text-sm">
                Follow Puma
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-brand-purple-dark sm:text-4xl">
                Keep up with Puma on social media.
              </h2>
            </div>

            <div>
              <p className="text-base leading-relaxed text-brand-slate sm:text-lg">
                Follow Puma Business Services on LinkedIn, Facebook and
                Instagram for the latest business, community and company
                updates.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/company/puma-business-services-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-purple px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-purple-mid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                >
                  Follow on LinkedIn
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61578176484448&locale=en_GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-brand-purple-soft px-6 py-3 text-sm font-semibold text-brand-purple-dark transition-colors hover:bg-brand-lilac focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                >
                  Follow on Facebook
                </a>

                <a
                  href="https://www.instagram.com/__puma_bs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-brand-purple-soft px-6 py-3 text-sm font-semibold text-brand-purple-dark transition-colors hover:bg-brand-lilac focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-purple px-7 py-12 text-white sm:px-10 sm:py-14">
            <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-brand-purple-soft/20" />
            <div className="absolute -left-20 -top-24 h-60 w-60 rounded-full bg-brand-purple-dark/20" />

            <div className="relative max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple-soft sm:text-sm">
                Let&apos;s Talk
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Looking for more from your accountant?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                If you&apos;d like to find out more about Puma and how we could
                support your business, get in touch for a conversation.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-purple-dark transition-colors hover:bg-brand-purple-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
