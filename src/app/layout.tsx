import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaScript from "@/components/seo/SchemaScript";
import { siteConfig } from "@/lib/metadata";
import "./globals.css";

// ----------------------------------------------------------------
// Default metadata (SEO)
// ----------------------------------------------------------------

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.siteName} | Data Center Staffing & Recruitment`,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.siteName, url: siteConfig.siteUrl }],
  creator: siteConfig.siteName,
  publisher: siteConfig.siteName,

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: `${siteConfig.siteName} | Data Center Staffing & Recruitment`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.defaultOGImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.siteName} - Data Center Staffing & Recruitment`,
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: `${siteConfig.siteName} | Data Center Staffing & Recruitment`,
    description: siteConfig.description,
    images: [siteConfig.defaultOGImage],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteConfig.siteUrl,
    languages: {
      "en-US": siteConfig.siteUrl,
    },
  },

  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  //   other: { "msvalidate.01": "YOUR_BING_VERIFICATION_TOKEN" },
  // },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  other: {
    "theme-color": siteConfig.themeColor,
  },
};

// ----------------------------------------------------------------
// Organization schema (JSON-LD)
// ----------------------------------------------------------------

const organizationSchema: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/images/logo.png`,
  description: siteConfig.description,
  sameAs: [
    "https://linkedin.com/company/datacentertalnt",
    "https://twitter.com/datacentertalnt",
    "https://facebook.com/datacentertalnt",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-206-755-0724",
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1801 Red Bud Ln, Ste B-182",
    addressLocality: "Round Rock",
    addressRegion: "TX",
    postalCode: "78664",
    addressCountry: "US",
  },
};

// ----------------------------------------------------------------
// Root layout
// ----------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaScript data={organizationSchema} />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
