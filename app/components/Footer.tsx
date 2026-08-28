import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-brand-purple-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid gap-8 md:grid-cols-3 items-start">

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

          <div>
            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.18em] text-xs">
              Explore
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-3 text-sm">
              <Link
                href="/"
                className="text-white/65 hover:text-white transition-colors"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-white/65 hover:text-white transition-colors"
              >
                About Us
              </Link>

              <Link
                href="/services"
                className="text-white/65 hover:text-white transition-colors"
              >
                Services
              </Link>

              <Link
                href="/testimonials"
                className="text-white/65 hover:text-white transition-colors"
              >
                Testimonials
              </Link>

              <Link
                href="/contact"
                className="text-white/65 hover:text-white transition-colors"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="text-white/65 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <p className="text-brand-purple-soft font-semibold uppercase tracking-[0.18em] text-xs">
              Get in Touch
            </p>

            <div className="mt-3 flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-6">

              <div className="shrink-0">
                <a
                  href="mailto:daniel@puma-bs.co.uk"
                  className="block text-sm text-white/70 hover:text-white transition-colors"
                >
                  daniel@puma-bs.co.uk
                </a>

                <a
                  href="tel:07891703489"
                  className="block mt-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  07891 703489
                </a>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61578176484448&locale=en_GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Puma Business Services on Facebook"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="17"
                    height="17"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M13.5 8.25V6.5c0-.84.56-1 1-1H17V2h-3c-3.33 0-4 2.5-4 4v2.25H8V12h2v10h3.5V12h2.75l.5-3.75H13.5Z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/puma-business-services-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Puma Business Services on LinkedIn"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="17"
                    height="17"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.34 3.5A2.34 2.34 0 1 1 5.34 8.18a2.34 2.34 0 0 1 0-4.68ZM3.32 9.75h4.04V21H3.32V9.75Zm6.6 0h3.87v1.54h.06c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.2V21H18.5v-4.97c0-1.19-.02-2.71-1.65-2.71-1.66 0-1.91 1.29-1.91 2.62V21H9.92V9.75Z" />
                  </svg>
                </a>

                <Link
                  href="/contact"
                  className="ml-1 bg-brand-purple hover:bg-brand-purple-mid transition-colors text-white font-semibold px-5 py-2.5 rounded-full text-sm whitespace-nowrap"
                >
                  Contact Puma
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 bg-[#180d20]">
        <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-white/40">
          <div className="flex flex-col lg:flex-row gap-2 lg:justify-between">
            <p>
              © {year} Puma Business Services Limited. All rights reserved.
            </p>

            <p>
              Accountancy • Tax • Reporting • Business Support
            </p>
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
