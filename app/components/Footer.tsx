import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">

      {/* Main footer */}
      <div className="bg-brand-purple-dark text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="lg:col-span-2">
              <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.2em] text-sm">
                Puma Business Services
              </p>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold max-w-md leading-tight">
                Clear financial support.
                <span className="block text-brand-purple-soft">
                  Built around your business.
                </span>
              </h2>

              <p className="mt-5 text-white/60 max-w-md leading-relaxed">
                Accountancy, tax, bookkeeping and business support for
                individuals and businesses.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-sm font-semibold text-brand-purple-soft uppercase tracking-widest">
                Explore
              </p>

              <div className="flex flex-col gap-3 mt-5">
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </Link>

                <Link
                  href="/services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Services
                </Link>

                <Link
                  href="/testimonials"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Testimonials
                </Link>

                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm font-semibold text-brand-purple-soft uppercase tracking-widest">
                Get in Touch
              </p>

              <div className="mt-5 space-y-3 text-white/70">
                <p>
                  <a
                    href="mailto:daniel@puma-bs.co.uk"
                    className="hover:text-white transition-colors"
                  >
                    daniel@puma-bs.co.uk
                  </a>
                </p>

                <p>Phone: 0000 000 0000</p>
              </div>

              <Link
                href="/contact"
                className="inline-block mt-6 bg-brand-purple hover:bg-brand-purple-mid transition-colors text-white font-semibold px-6 py-3 rounded-full"
              >
                Contact Puma
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#180d20] text-white/45">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-xs">
          <p>
            © {year} Puma Business Services Limited. All rights reserved.
          </p>

          <p>
            Accountancy • Tax • Reporting • Business Support
          </p>
        </div>
      </div>

    </footer>
  );
}
