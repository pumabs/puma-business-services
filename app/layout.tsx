import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.puma-bs.co.uk"),

  title: {
    default:
      "Puma Business Services | Accountancy & Business Support in Buxton",
    template: "%s | Puma Business Services",
  },

  description:
    "Accountancy, tax, bookkeeping, payroll, management reporting and practical business support for businesses and individuals in Buxton, Derbyshire and beyond.",

  applicationName: "Puma Business Services",

  authors: [
    {
      name: "Puma Business Services Limited",
    },
  ],

  creator: "Puma Business Services Limited",
  publisher: "Puma Business Services Limited",

  keywords: [
    "accountant Buxton",
    "accountants Buxton",
    "accountancy Buxton",
    "business accountant Buxton",
    "tax accountant Buxton",
    "bookkeeper Buxton",
    "bookkeeping Buxton",
    "payroll Buxton",
    "VAT accountant",
    "CIS accountant",
    "management accounts",
    "management reporting",
    "Power BI reporting",
    "business advisory",
    "Xero accountant",
    "Sage accountant",
    "FreeAgent accountant",
    "accountant Derbyshire",
    "Puma Business Services",
  ],

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.puma-bs.co.uk",
    siteName: "Puma Business Services",
    title:
      "Puma Business Services | Accountancy & Business Support in Buxton",
    description:
      "Accountancy, tax, bookkeeping, payroll, management reporting and practical business support in Buxton, Derbyshire and beyond.",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Puma Business Services | Accountancy & Business Support in Buxton",
    description:
      "Accountancy, tax, bookkeeping, payroll, management reporting and practical business support in Buxton, Derbyshire and beyond.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "accountancy",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": "https://www.puma-bs.co.uk/#business",
  name: "Puma Business Services Limited",
  alternateName: "Puma Business Services",
  url: "https://www.puma-bs.co.uk",
  telephone: "+447891703489",
  email: "daniel@puma-bs.co.uk",
  description:
    "Accountancy, tax, bookkeeping, payroll, management reporting and practical business support for businesses and individuals in Buxton, Derbyshire and beyond.",
  areaServed: [
    {
      "@type": "City",
      name: "Buxton",
    },
    {
      "@type": "AdministrativeArea",
      name: "Derbyshire",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61578176484448&locale=en_GB",
    "https://www.linkedin.com/company/puma-business-services-ltd/",
  ],
  knowsAbout: [
    "Accountancy",
    "Tax",
    "Bookkeeping",
    "Payroll",
    "VAT",
    "CIS",
    "Management Reporting",
    "Power BI Reporting",
    "Business Advisory",
    "Xero",
    "Sage",
    "FreeAgent",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
