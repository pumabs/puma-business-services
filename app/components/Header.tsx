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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-purple-soft/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between min-h-[92px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/pbs_logo.jpg"
              alt="Puma Business Services Limited"
              width={260}
              height={100}
              priority
              className="w-[210px] sm:w-[240px] h-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-semibold text-brand-purple-dark transition-colors hover:text-brand-purple group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <Link
              href="/contact"
              className="bg-brand-purple text-white hover:bg-brand-purple-mid transition-colors px-6 py-3 rounded-full text-sm font-semibold shadow-sm"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-brand-lilac text-brand-purple-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <nav className="md:hidden border-t border-brand-purple-soft/40 py-5">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 rounded-xl text-brand-purple-dark font-semibold hover:bg-brand-lilac transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="mt-2 bg-brand-purple text-white px-5 py-3.5 rounded-full text-center font-semibold hover:bg-brand-purple-mid transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
