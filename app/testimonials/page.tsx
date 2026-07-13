import type { Metadata } from "next";
import Link from "next/link";
import { testimonials } from "../data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials | Puma Business Services",
  description: "See what clients say about Puma Business Services — honest reviews from sole traders and businesses we have helped.",
};

export default function TestimonialsPage() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-brand-gold font-semibold uppercase tracking-wide text-sm">
            Client Stories
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3">
            What Our Clients Say
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-300">
            We let our clients do the talking. Here&apos;s what some of them
            have shared about working with Puma Business Services.
          </p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        {testimonials.length === 0 ? (
          <p className="text-center text-gray-500">
            Testimonials coming soon.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-brand-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="font-semibold text-brand-navy text-sm">
                    {t.name}
                  </p>
                  {(t.role || t.company) && (
                    <p className="text-xs text-gray-500 mt-0.5">
                      {t.role && t.company
                        ? `${t.role}: ${t.company}`
                        : t.role || t.company}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-brand-navy">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white">
            Ready to experience the Puma difference?
          </h2>
          <p className="text-gray-300 mt-3 max-w-lg mx-auto">
            Join our clients and take the stress out of your accounts.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-brand-red hover:bg-brand-orange transition-colors text-white font-medium px-6 py-3 rounded-md"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  );
}