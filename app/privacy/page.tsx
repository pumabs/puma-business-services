import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Puma Business Services",
  description:
    "Privacy policy for Puma Business Services Limited, explaining how we collect, use and protect personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-brand-purple-dark text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 lg:py-20">
          <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.18em] text-sm">
            Privacy
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-3xl leading-relaxed">
            How Puma Business Services Limited collects, uses and protects
            personal information.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-20">
          <div className="space-y-10 text-brand-charcoal leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Who We Are
              </h2>
              <p className="mt-4">
                Puma Business Services Limited is an accountancy and business
                support practice registered in England and Wales under company
                number 16289091. Our registered office is 29 Lansdowne Road,
                Buxton, Derbyshire, SK17 6RR.
              </p>
              <p className="mt-4">
                For data protection purposes, Puma Business Services Limited is
                the controller of personal information that we collect and use
                in connection with our own business activities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Information We May Collect
              </h2>
              <p className="mt-4">
                Depending on your relationship with us, we may collect
                information such as your name, contact details, business
                information, financial information and other information that
                you provide to us when making an enquiry or engaging us to
                provide services.
              </p>
              <p className="mt-4">
                Where we provide accountancy, tax, payroll or other professional
                services, we may need to process additional personal and
                financial information in order to carry out that work.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                How We Use Your Information
              </h2>
              <p className="mt-4">
                We use personal information where necessary to respond to
                enquiries, provide our services, administer our relationship
                with clients, meet our legal and regulatory obligations,
                maintain our business records and operate Puma Business
                Services Limited.
              </p>
              <p className="mt-4">
                The lawful basis we rely on will depend on the circumstances
                and may include performance of a contract, compliance with a
                legal obligation, our legitimate interests or your consent
                where consent is appropriate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Sharing Your Information
              </h2>
              <p className="mt-4">
                We do not sell personal information. We may share information
                where necessary with organisations involved in providing our
                services or operating our business, including HM Revenue &amp;
                Customs, Companies House, payroll or pension providers,
                professional software providers and other relevant third
                parties.
              </p>
              <p className="mt-4">
                We may also disclose information where required by law,
                regulation or a professional obligation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Keeping Your Information Secure
              </h2>
              <p className="mt-4">
                We take appropriate steps to protect personal information
                against unauthorised access, loss, misuse or disclosure.
                Information is only retained for as long as reasonably
                necessary for the purpose for which it was collected and to
                meet applicable legal, regulatory and professional
                requirements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Your Rights
              </h2>
              <p className="mt-4">
                UK data protection law provides individuals with a number of
                rights in relation to their personal information. Depending on
                the circumstances, these may include the right to access,
                correct, erase or restrict the use of your information, object
                to certain processing and request the transfer of information.
              </p>
              <p className="mt-4">
                You also have the right to raise a concern with the
                Information Commissioner&apos;s Office if you are unhappy with
                the way your personal information has been handled.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Website and Cookies
              </h2>
              <p className="mt-4">
                This website may use cookies or similar technologies that are
                necessary for the website to function correctly. If we
                introduce optional analytics, advertising or other
                non-essential tracking technologies, we will update our
                approach to cookies and consent as appropriate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-brand-purple-dark">
                Contact Us
              </h2>
              <p className="mt-4">
                If you have a question about this privacy policy or how we
                handle personal information, please contact:
              </p>

              <p className="mt-4">
                <strong>Puma Business Services Limited</strong>
                <br />
                29 Lansdowne Road
                <br />
                Buxton
                <br />
                Derbyshire
                <br />
                SK17 6RR
              </p>

              <a
                href="mailto:daniel@puma-bs.co.uk"
                className="inline-block mt-4 font-semibold text-brand-purple hover:text-brand-purple-mid transition-colors"
              >
                daniel@puma-bs.co.uk
              </a>
            </div>

            <div className="pt-8 border-t border-brand-purple-soft/50">
              <p className="text-sm text-brand-slate">
                Last updated: August 2026
              </p>

              <Link
                href="/contact"
                className="inline-block mt-5 bg-brand-purple hover:bg-brand-purple-mid transition-colors text-white font-semibold px-6 py-3 rounded-full"
              >
                Contact Puma
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
