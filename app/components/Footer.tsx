import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-brand-purple-dark text-white">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid gap-8 md:grid-cols-3 items-start">

          {/* Brand */}
          <div>
            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.18em] text-xs">
              Puma Business Services
            </p>

            <p className="mt-3 text-lg font-bold">
              Clear financial support.
            </p>

            <p className="mt-2 text-sm text-white/55 max-w-sm leading-relaxed">
              Accountancy, tax, reporting and practical business support.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.18em] text-xs">
              Explore
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-3 text-sm">
              <Link href="/" className="text-white/65 hover:text-white transition-colors">
                Home
              </Link>

              <Link href="/about" className="text-white/65 hover:text-white transition-colors">
                About Us
              </Link>

              <Link href="/services" className="text-white/65 hover:text-white transition-colors">
                Services
              </Link>

              <Link href="/testimonials" className="text-white/65 hover:text-white transition-colors">
                Testimonials
              </Link>

              <Link href="/contact" className="text-white/65 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.18em] text-xs">
              Get in Touch
            </p>

            <a
              href="mailto:daniel@puma-bs.co.uk"
              className="block mt-3 text-sm text-white/70 hover:text-white transition-colors"
            >
              daniel@puma-bs.co.uk
            </a>

            <a
  href="tel:07891703489"
  className="block mt-2 text-sm text-white/70 hover:text-white transition-colors"
>
  07891 703489
</a>

            <Link
              href="/contact"
              className="inline-block mt-4 bg-brand-purple hover:bg-brand-purple-mid transition-colors text-white font-semibold px-5 py-2.5 rounded-full text-sm"
            >
              Contact Puma
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
<div className="border-t border-white/10 bg-[#180d20]">
  <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-white/40">
    <div className="flex flex-col lg:flex-row gap-2 lg:justify-between">
      <p>© {year} Puma Business Services Limited. All rights reserved.</p>

      <div className="flex flex-wrap gap-x-4 gap-y-1">
        <p>Accountancy • Tax • Reporting • Business Support</p>
        <Link
          href="/privacy"
          className="hover:text-white transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </div>

    <p className="mt-3 leading-relaxed">
      Puma Business Services Limited is registered in England and Wales.
      Company No. 16289091. Registered Office: 29 Lansdowne Road, Buxton,
      Derbyshire, SK17 6RR.
    </p>
  </div>
</div>

    </footer>
  );
}
