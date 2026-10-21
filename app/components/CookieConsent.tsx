"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "rejected" | null;

const CONSENT_KEY = "puma-analytics-consent";
const MEASUREMENT_ID = "G-0JG24BV3WV";
const GTM_ID = "GTM-58RSBK2B";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGoogleAnalytics() {
  if (typeof window === "undefined") return;

  // Prevent duplicate loading and configuration.
  if (document.getElementById("puma-google-analytics")) {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }

  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID);

  const script = document.createElement("script");
  script.id = "puma-google-analytics";
  script.async = true;
  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;

  document.head.appendChild(script);
}

function loadGoogleTagManager() {
  if (typeof window === "undefined") return;

  if (document.getElementById("puma-google-tag-manager")) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    "gtm.start": Date.now(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.id = "puma-google-tag-manager";
  script.async = true;
  script.src =
    `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;

  document.head.appendChild(script);
}

function loadAnalytics() {
  loadGoogleAnalytics();
  loadGoogleTagManager();
}

function saveConsent(choice: Exclude<ConsentChoice, null>) {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // The current choice still works if browser storage is unavailable.
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentChoice>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let savedConsent: string | null = null;

    try {
      savedConsent = localStorage.getItem(CONSENT_KEY);
    } catch {
      // Show the banner if browser storage is unavailable.
    }

    if (savedConsent === "accepted") {
      setConsent("accepted");
      loadAnalytics();
    } else if (savedConsent === "rejected") {
      setConsent("rejected");
    }

    setReady(true);
  }, []);

  const acceptAnalytics = () => {
    saveConsent("accepted");
    setConsent("accepted");
    loadAnalytics();
  };

  const rejectAnalytics = () => {
    saveConsent("rejected");
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
            We use optional analytics to understand how people use our
            website and help us improve it. These tools may use cookies.
            We won&apos;t load analytics unless you choose to accept
            them.{" "}
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
