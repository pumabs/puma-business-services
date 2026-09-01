import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

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
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-purple opacity-30" />
        <div className="absolute -bottom-28 left-1/3 w-72 h-72 rounded-full bg-brand-purple-mid opacity-15 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.22em] text-xs sm:text-sm">
              Updates
            </p>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">
              Latest from
              <span className="block text-brand-purple-soft">Puma.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl leading-relaxed">
              Business updates, community involvement, sponsorship news and
              useful insights from Puma Business Services.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
                Puma Updates
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark leading-tight">
                More than just accounting updates.
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-brand-slate leading-relaxed">
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
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div>
            <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
              Latest
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark">
              Latest updates.
            </h2>
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6">
            {/* COMMUNITY UPDATE */}
            <article className="overflow-hidden bg-brand-cream rounded-[2rem]">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/school-community-support.jpg"
                  alt="Puma Business Services supporting a local school fundraising event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="p-7 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                  <span className="inline-flex items-center bg-brand-purple-soft text-brand-purple-dark font-semibold px-3 py-1.5 rounded-full">
                    Community
                  </span>

                  <span className="text-brand-slate">
                    25 June 2026
                  </span>
                </div>

                <h3 className="mt-5 text-2xl sm:text-3xl font-bold text-brand-purple-dark leading-tight">
                  Supporting one of our local schools
                </h3>

                <p className="mt-4 text-brand-slate leading-relaxed">
                  Puma Business Services was pleased to support a local school
                  fundraising event, alongside other local businesses who
                  kindly contributed prizes and donations.
                </p>

                <p className="mt-3 text-brand-slate leading-relaxed">
                  It&apos;s always great to be able to support organisations in
                  our local community.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* WHAT WE SHARE */}
      <section className="bg-brand-lilac">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
              What You&apos;ll Find Here
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark">
              News, insights and life at Puma.
            </h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                className="bg-white rounded-2xl p-7 shadow-sm"
              >
                <div className="w-10 h-10 rounded-2xl bg-brand-purple-soft" />

                <h3 className="mt-6 text-xl font-bold text-brand-purple-dark">
                  {title}
                </h3>

                <p className="mt-3 text-brand-slate leading-relaxed text-sm">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-brand-purple font-semibold uppercase tracking-[0.18em] text-xs sm:text-sm">
                Follow Puma
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-brand-purple-dark leading-tight">
                Keep up with Puma on social media.
              </h2>
            </div>

            <div>
              <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
                You can also follow Puma Business Services on LinkedIn and
                Facebook for the latest business, community and company
                updates.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/company/puma-business-services-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-brand-purple text-white hover:bg-brand-purple-mid transition-colors px-6 py-3 rounded-full font-semibold text-sm"
                >
                  Follow on LinkedIn
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61578176484448&locale=en_GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-brand-purple-soft text-brand-purple-dark hover:bg-brand-lilac transition-colors px-6 py-3 rounded-full font-semibold text-sm"
                >
                  Follow on Facebook
                </a>
              </div>
            </div>
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
                Let&apos;s Talk
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
                Looking for more from your accountant?
              </h2>

              <p className="mt-4 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
                If you&apos;d like to find out more about Puma and how we could
                support your business, get in touch for a conversation.
              </p>

              <Link
                href="/contact"
                className="inline-block mt-6 bg-white text-brand-purple-dark hover:bg-brand-purple-soft transition-colors px-6 py-3 rounded-full font-semibold text-sm"
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
