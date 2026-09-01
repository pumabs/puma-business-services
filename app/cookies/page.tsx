import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie Policy for Puma Business Services Limited, explaining how cookies and analytics are used on our website.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="bg-brand-purple-dark py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-purple-soft">
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Cookie Policy
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-purple-soft">
            This policy explains how Puma Business Services Limited uses
            cookies and similar technologies on this website.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-10 text-brand-slate">
            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                What are cookies?
              </h2>

              <p className="mt-4 leading-7">
                Cookies are small pieces of information stored on your device
                when you visit a website. They can be used for a variety of
                purposes, including remembering preferences and understanding
                how a website is used.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                How we use cookies
              </h2>

              <p className="mt-4 leading-7">
                We currently use cookies and similar technologies for two
                purposes: to remember your cookie preference and, where you
                choose to allow it, to measure how our website is used through
                Google Analytics.
              </p>

              <p className="mt-4 leading-7">
                We do not use advertising cookies, remarketing cookies or
                social media tracking pixels on this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Essential preference storage
              </h2>

              <p className="mt-4 leading-7">
                When you choose to accept or reject analytics, your browser
                stores that choice so that we do not need to ask you again on
                every page.
              </p>

              <p className="mt-4 leading-7">
                This preference is used only to remember your cookie choice and
                is not used for advertising or profiling.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Google Analytics
              </h2>

              <p className="mt-4 leading-7">
                If you choose to accept analytics, we use Google Analytics 4 to
                understand how visitors use the Puma Business Services website.
              </p>

              <p className="mt-4 leading-7">
                Google Analytics can collect information such as pages viewed,
                approximate location, device and browser information, traffic
                source, time spent on pages and interactions such as scrolling
                or outbound link clicks.
              </p>

              <p className="mt-4 leading-7">
                We use this information to understand website performance and
                improve the content and experience we provide.
              </p>

              <p className="mt-4 leading-7">
                Google Analytics is not loaded unless you choose to accept
                analytics through our cookie banner.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Analytics cookies
              </h2>

              <p className="mt-4 leading-7">
                Where analytics is accepted, Google Analytics may place
                first-party cookies such as <strong>_ga</strong> and related
                cookies on your device. These are used to distinguish users,
                sessions and website interactions for analytics purposes.
              </p>

              <p className="mt-4 leading-7">
                The exact cookies used and their duration can vary depending on
                Google's current Analytics configuration.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Your choice
              </h2>

              <p className="mt-4 leading-7">
                When you first visit the website, you can choose either
                <strong> Accept analytics</strong> or
                <strong> Reject analytics</strong>.
              </p>

              <p className="mt-4 leading-7">
                If you reject analytics, Google Analytics will not be loaded by
                our website.
              </p>

              <p className="mt-4 leading-7">
                You can also remove your saved website data or cookie
                preferences through your browser settings. If you do this, the
                website may ask for your analytics preference again the next
                time you visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Google and your information
              </h2>

              <p className="mt-4 leading-7">
                Google Analytics is provided by Google. Where analytics is
                enabled, information may be processed by Google in accordance
                with Google's own privacy and data-processing terms.
              </p>

              <p className="mt-4 leading-7">
                You can find further information about how Google uses
                information from websites and services that use Google
                technologies on Google's privacy and business data pages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Changes to this policy
              </h2>

              <p className="mt-4 leading-7">
                We may update this Cookie Policy if the technologies or services
                used on our website change.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Contact us
              </h2>

              <p className="mt-4 leading-7">
                If you have any questions about our use of cookies or analytics,
                please contact:
              </p>

              <div className="mt-4 space-y-1 leading-7">
                <p className="font-semibold text-brand-purple-dark">
                  Puma Business Services Limited
                </p>
                <p>29 Lansdowne Road</p>
                <p>Buxton</p>
                <p>Derbyshire</p>
                <p>SK17 6RR</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:daniel@puma-bs.co.uk"
                    className="font-semibold text-brand-purple underline underline-offset-2 hover:text-brand-purple-dark"
                  >
                    daniel@puma-bs.co.uk
                  </a>
                </p>
              </div>
            </div>

            <div className="border-t border-brand-purple-soft pt-8">
              <p className="text-sm">
                Last updated: September 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
