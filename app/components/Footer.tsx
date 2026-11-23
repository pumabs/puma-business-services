"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const reopenCookieSettings = () => {
    localStorage.removeItem("puma-analytics-consent");
    window.location.reload();
  };

  const socialLinkClass =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

  return (
    <footer className="mt-auto bg-brand-purple-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid items-start gap-8 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple-soft">
              Puma Business Services
            </p>

            <p className="mt-3 text-lg font-bold">
              Clear financial support.
            </p>

            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/55">
              Accountancy, tax, reporting and practical business support.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple-soft">
              Explore
            </p>

            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <Link
                href="/"
                className="text-white/65 transition-colors hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-white/65 transition-colors hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/services"
                className="text-white/65 transition-colors hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/testimonials"
                className="text-white/65 transition-colors hover:text-white"
              >
                Testimonials
              </Link>

              <Link
                href="/updates"
                className="text-white/65 transition-colors hover:text-white"
              >
                Updates
              </Link>

              <Link
                href="/contact"
                className="text-white/65 transition-colors hover:text-white"
              >
                Contact
              </Link>

              <Link
                href="/privacy"
                className="text-white/65 transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/cookies"
                className="text-white/65 transition-colors hover:text-white"
              >
                Cookie Policy
              </Link>

              <button
                type="button"
                onClick={reopenCookieSettings}
                className="text-left text-white/65 transition-colors hover:text-white"
              >
                Cookie Settings
              </button>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple-soft">
              Get in Touch
            </p>

            <div className="mt-3 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between xl:gap-5">
              <div className="shrink-0">
                <a
                  href="mailto:daniel@puma-bs.co.uk"
                  className="block text-sm text-white/70 transition-colors hover:text-white"
                >
                  daniel@puma-bs.co.uk
                </a>

                <a
                  href="tel:07356015027"
                  className="mt-2 block text-sm text-white/70 transition-colors hover:text-white"
                >
                  07356 015027
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61578176484448&locale=en_GB"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Puma Business Services on Facebook"
                  className={socialLinkClass}
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
                  className={socialLinkClass}
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

                <a
                  href="https://www.instagram.com/__puma_bs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Puma Business Services on Instagram"
                  className={socialLinkClass}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="17"
                    height="17"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                <Link
                  href="/contact"
                  className="ml-1 whitespace-nowrap rounded-full bg-brand-purple px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-purple-mid"
                >
                  Contact Puma
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#180d20]">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-white/40">
          <div className="flex flex-col gap-2 lg:flex-row lg:justify-between">
            <p>
              © {year} Puma Business Services Limited. All rights reserved.
            </p>

            <p>Accountancy • Tax • Reporting • Business Support</p>
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
