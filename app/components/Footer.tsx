import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <Image
            src="/pbs_logo.jpg"
            alt="Puma Business Services Limited"
            width={400}
            height={100}
          />
          <p className="text-sm text-gray-600 mt-3">
            Professional accountancy services you can trust.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-brand-navy">
          <Link href="/about" className="hover:text-brand-red transition-colors">
            About Us
          </Link>
          <Link href="/services" className="hover:text-brand-red transition-colors">
            Services
          </Link>
          <Link href="/testimonials" className="hover:text-brand-red transition-colors">
            Testimonials
          </Link>
          <Link href="/contact" className="hover:text-brand-red transition-colors">
            Contact Us
          </Link>
        </div>

        <div className="text-sm text-gray-600">
<p>
            Email:{" "}
            <a href="mailto:daniel@puma-bs.co.uk" className="hover:text-brand-red transition-colors">
              daniel@puma-bs.co.uk
            </a>
          </p>
          <p>Phone: 0000 000 0000</p>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center text-xs text-gray-500 py-4">
        © {year} Puma Business Services. All rights reserved.
      </div>
    </footer>
  );
}