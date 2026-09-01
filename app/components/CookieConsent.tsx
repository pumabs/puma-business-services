"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "rejected" | null;

const CONSENT_KEY = "puma-analytics-consent";
const MEASUREMENT_ID = "G-0JG24BV3WV";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGoogleAnalytics() {
  if (typeof window === "undefined") return;

  // Always initialise the Google data layer first.
  window.dataLayer = window.dataLayer || [];

  // Use Google's expected gtag dataLayer format.
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  // Queue the Google Analytics configuration.
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID);

  // Do not add the Google script more than once.
  if (document.getElementById("puma-google-analytics")) {
    return;
  }

  const script = document.createElement("script");
  script.id = "puma-google-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;

  document.head.appendChild(script);
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY);

    if (savedConsent === "accepted") {
      setConsent("accepted");
      loadGoogleAnalytics();
    } else if (savedConsent === "rejected") {
      setConsent("rejected");
    }

    setReady(true);
  }, []);

  const acceptAnalytics = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    loadGoogleAnalytics();
  };

  const rejectAnalytics = () => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setConsent("rejected");
  };

  if (!ready || consent !== null) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-4xl rounded-2xl border border-brand-purple-soft bg-white p-5 shadow-2xl sm:p-6"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-lg font-bold text-brand-purple-dark">
            Cookies & analytics
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-brand-slate">
            We use optional analytics cookies to understand how people use our
            website and help us improve it. We won&apos;t use analytics cookies
            unless you choose to accept them.{" "}
            <Link
              href="/cookies"
              className="font-semibold text-brand-purple underline underline-offset-2 hover:text-brand-purple-dark"
            >
              Read our Cookie Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={rejectAnalytics}
            className="rounded-full border border-brand-purple px-5 py-3 text-sm font-semibold text-brand-purple transition-colors hover:bg-brand-lilac"
          >
            Reject analytics
          </button>

          <button
            type="button"
            onClick={acceptAnalytics}
            className="rounded-full bg-brand-purple px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-purple-dark"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
