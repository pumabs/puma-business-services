"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function UpdatesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const amount = container.clientWidth * 0.72;

    container.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });

    setTimeout(() => {
      setHasScrolled(container.scrollLeft > 20);
    }, 400);
  };

  return (
    <div className="relative mt-10">
      <div
        ref={scrollRef}
        onScroll={(e) => setHasScrolled(e.currentTarget.scrollLeft > 20)}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* PEAK PRECISION - NEWEST */}
        <article className="flex-none overflow-hidden bg-brand-cream rounded-[1.75rem] w-[88%] sm:w-[65%] lg:w-[39%]">
          <div className="relative aspect-[16/10]">
            <Image
              src="/peak-precision-sponsorship.jpg"
              alt="Puma Business Services sponsoring Peak Precision Football"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 88vw, (max-width: 1024px) 65vw, 39vw"
            />
          </div>

          <div className="p-6">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center bg-brand-purple-soft text-brand-purple-dark font-semibold px-3 py-1.5 rounded-full">
                Sponsorship
              </span>

              <span className="text-brand-slate">
                14 September 2026
              </span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-brand-purple-dark leading-tight">
              Supporting Peak Precision Football
            </h3>

            <p className="mt-3 text-brand-slate leading-relaxed text-sm sm:text-base">
              Puma Business Services is proud to support Peak Precision Football
              with the sponsorship of new training equipment.
            </p>

            <p className="mt-3 text-brand-slate leading-relaxed text-sm sm:text-base">
              It&apos;s great to support a local business that we already work
              closely with and to play a small part in helping them continue to
              grow.
            </p>

            <a
              href="https://www.facebook.com/permalink.php?story_fbid=pfbid02zeRrxzQAJkPko3eo8z1rhkZsdfxUgdKc86DVwZU154j8KDfZcG4U5rQ1kkWS8HBql&id=61578176484448&locale=en_GB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-5 font-semibold text-brand-purple hover:text-brand-purple-dark transition-colors text-sm"
            >
              View on Facebook
              <span className="ml-2">→</span>
            </a>
          </div>
        </article>

        {/* WEBSITE LAUNCH */}
        <article className="flex-none overflow-hidden bg-brand-cream rounded-[1.75rem] w-[88%] sm:w-[65%] lg:w-[39%]">
          <div className="relative aspect-[16/10] bg-brand-purple-dark flex items-center justify-center p-8 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brand-purple opacity-30" />
            <div className="absolute -bottom-20 -left-16 w-48 h-48 rounded-full bg-brand-purple-mid opacity-20 blur-3xl" />

            <div className="relative text-center text-white">
              <div className="w-24 h-24 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg">
                <Image
                  src="/puma-icon.png"
                  alt="Puma Business Services"
                  width={100}
                  height={100}
                  className="w-20 h-auto"
                />
              </div>

              <p className="mt-5 text-brand-purple-soft font-semibold uppercase tracking-[0.18em] text-[10px]">
                Puma Business Services
              </p>

              <p className="mt-2 text-xl sm:text-2xl font-bold">
                Accountancy • Tax • Reporting • Business Support
              </p>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center bg-brand-purple-soft text-brand-purple-dark font-semibold px-3 py-1.5 rounded-full">
                Business
              </span>

              <span className="text-brand-slate">
                1 September 2026
              </span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-brand-purple-dark leading-tight">
              Puma Business Services is now online!
            </h3>

            <p className="mt-3 text-brand-slate leading-relaxed text-sm sm:text-base">
              We&apos;re pleased to launch the new Puma Business Services
              website, bringing together our accountancy, tax, management
              reporting and practical business support services in one place.
            </p>

            <p className="mt-3 text-brand-slate leading-relaxed text-sm sm:text-base">
              The new website also explains more about our approach to working
              with businesses throughout the year, rather than simply looking
              backwards once the year-end has passed.
            </p>

            <a
              href="https://www.linkedin.com/posts/puma-business-services-ltd_puma-business-services-accountancy-business-activity-7500470518781808642-lPOd?utm_source=share&utm_medium=member_desktop&rcm=ACoAABaP47cBB7z4AzqzhJpkp5U2NI2MQp1hMdY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-5 font-semibold text-brand-purple hover:text-brand-purple-dark transition-colors text-sm"
            >
              View on LinkedIn
              <span className="ml-2">→</span>
            </a>
          </div>
        </article>

        {/* LOCAL SCHOOL - OLDEST */}
        <article className="flex-none overflow-hidden bg-brand-cream rounded-[1.75rem] w-[88%] sm:w-[65%] lg:w-[39%]">
          <div className="relative aspect-[16/10]">
            <Image
              src="/school-community-support.jpg"
              alt="Puma Business Services supporting a local school fundraising event"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 88vw, (max-width: 1024px) 65vw, 39vw"
            />
          </div>

          <div className="p-6">
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
              <span className="inline-flex items-center bg-brand-purple-soft text-brand-purple-dark font-semibold px-3 py-1.5 rounded-full">
                Community
              </span>

              <span className="text-brand-slate">
                25 June 2026
              </span>
            </div>

            <h3 className="mt-4 text-xl sm:text-2xl font-bold text-brand-purple-dark leading-tight">
              Supporting one of our local schools
            </h3>

            <p className="mt-3 text-brand-slate leading-relaxed text-sm sm:text-base">
              Puma Business Services was pleased to support a local school
              fundraising event, alongside other local businesses who kindly
              contributed prizes and donations.
            </p>

            <p className="mt-3 text-brand-slate leading-relaxed text-sm sm:text-base">
              It&apos;s always great to be able to support organisations in our
              local community.
            </p>

            <a
              href="https://www.facebook.com/permalink.php?story_fbid=pfbid07PBFkM8HmN6yNNKTLXL8tBxEJUoFLAuhab4QD62QKoXQU9VyYQZBoRpULAKcG91Al&id=61578176484448&locale=en_GB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-5 font-semibold text-brand-purple hover:text-brand-purple-dark transition-colors text-sm"
            >
              View on Facebook
              <span className="ml-2">→</span>
            </a>
          </div>
        </article>
      </div>

      {/* LEFT ARROW */}
      {hasScrolled && (
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="View newer updates"
          className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg items-center justify-center text-brand-purple text-3xl font-light hover:bg-brand-lilac transition-colors z-10"
        >
          ‹
        </button>
      )}

      {/* RIGHT ARROW */}
      <button
        type="button"
        onClick={() => scroll("right")}
        aria-label="View older updates"
        className="hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg items-center justify-center text-brand-purple text-3xl font-light hover:bg-brand-lilac transition-colors z-10"
      >
        ›
      </button>
    </div>
  );
}
