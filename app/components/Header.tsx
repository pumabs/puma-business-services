"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4">
        {/* Logo row */}
        <div className="flex items-center justify-between md:justify-start">
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Image
              src="/pbs_logo.jpg"
              alt="Puma Business Services Limited"
              width={250}
              height={100}
              priority
            />
          </Link>

          {/* Mobile burger button — sits in this same row, right-aligned, next to logo */}
          <button
            className="md:hidden text-brand-navy"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-brand-navy">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brand-red transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-brand-red hover:bg-brand-orange text-white px-4 py-2 rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile dropdown menu — appears below the logo row */}
        {isOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 text-sm font-bold text-brand-navy border-t border-gray-200 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-brand-red hover:bg-brand-orange text-white px-4 py-2 rounded-md text-center transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}