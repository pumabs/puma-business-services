import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Puma Business Services",
  description: "Get in touch with Puma Business Services. Email daniel@puma-bs.co.uk for a free, no-obligation conversation about your accountancy needs.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      {/* Heading */}
      <div className="text-center">
        <p className="text-brand-red font-semibold uppercase tracking-wide text-sm">
          We&apos;d Love to Hear From You
        </p>
        <h1 className="text-4xl font-bold text-brand-navy mt-2">Contact Us</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Have a question about your accounts, tax, or business finances?
          Drop us an email and we&apos;ll get back to you personally, no call
          centres, no automated replies.
        </p>
      </div>

{/* Email card */}
<div className="mt-12 bg-brand-navy rounded-2xl px-8 py-12 text-center">
  <p className="text-brand-gold font-semibold uppercase tracking-wide text-sm">
    Get in Touch
  </p>
  <h2 className="text-white text-2xl sm:text-3xl font-bold mt-2">
    <a href="mailto:daniel@puma-bs.co.uk" className="hover:text-brand-gold transition-colors">
      daniel@puma-bs.co.uk
    </a>
  </h2>
  <p className="text-gray-300 text-sm mt-3 max-w-md mx-auto">
    Click the address above or the button below to open your email client directly.
  </p>

  <a
    href="mailto:daniel@puma-bs.co.uk"
    className="inline-block mt-6 bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-8 py-3 rounded-md"
  >
    Send an Email
  </a>
</div>


      {/* Supporting info */}
      <div className="mt-16 grid gap-8 sm:grid-cols-3 text-center">
        <div>
          <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto">
            <span className="text-brand-navy font-bold">1</span>
          </div>
          <h3 className="font-semibold text-brand-navy mt-4">Quick Response</h3>
          <p className="text-sm text-gray-600 mt-2">
            We aim to reply to all enquiries within one working day.
          </p>
        </div>
        <div>
          <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto">
            <span className="text-brand-navy font-bold">2</span>
          </div>
          <h3 className="font-semibold text-brand-navy mt-4">Personal Service</h3>
          <p className="text-sm text-gray-600 mt-2">
            Your email goes straight to our team, real people, real answers.
          </p>
        </div>
        <div>
          <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center mx-auto">
            <span className="text-brand-navy font-bold">3</span>
          </div>
          <h3 className="font-semibold text-brand-navy mt-4">No Obligation</h3>
          <p className="text-sm text-gray-600 mt-2">
            Get in touch for a free, no-pressure conversation about your needs.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 border-t border-gray-200" />

      {/* What to include */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-brand-navy text-center">
          What to Include in Your Email
        </h2>
        <p className="text-gray-600 text-center mt-2 max-w-xl mx-auto">
          To help us respond as usefully as possible on the first reply, it&apos;s
          worth letting us know:
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-brand-navy">Who you are</h3>
            <p className="text-sm text-gray-600 mt-1">
              Whether you&apos;re an individual, sole trader, or running a limited company.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-brand-navy">What you need help with</h3>
            <p className="text-sm text-gray-600 mt-1">
              Bookkeeping, tax returns, payroll, or general advice, the more detail, the better.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-brand-navy">Your timeline</h3>
            <p className="text-sm text-gray-600 mt-1">
              Let us know if there&apos;s a deadline (e.g. a tax filing date) so we can prioritise accordingly.
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg p-5">
            <h3 className="font-semibold text-brand-navy">Best way to reach you</h3>
            <p className="text-sm text-gray-600 mt-1">
              A reply email address or phone number so we can follow up smoothly.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-600">Prefer to browse first?</p>
        <Link
          href="/services"
          className="text-brand-red hover:text-brand-orange font-medium transition-colors"
        >
          See everything we offer →
        </Link>
      </div>

    </div>
  );
}