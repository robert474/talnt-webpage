import type { Metadata } from "next";

/**
 * Site-wide configuration for SEO metadata generation.
 */
export const siteConfig = {
  siteName: "Data Center TALNT",
  siteUrl: "https://www.datacentertalnt.com",
  description:
    "Data Center TALNT is a specialized staffing and recruitment firm connecting top-tier talent with data center, mission critical, construction, and utilities employers nationwide. We deliver experienced project managers, engineers, superintendents, and commissioning agents to the industries that power modern infrastructure.",
  defaultOGImage: "/images/og-default.jpg",
  twitterHandle: "@datacentertalnt",
  locale: "en_US",
  themeColor: "#0F172A",
  keywords: [
    "data center staffing",
    "mission critical recruitment",
    "construction staffing agency",
    "utilities staffing",
    "data center jobs",
    "MEP engineer staffing",
    "commissioning agent recruitment",
    "critical infrastructure talent",
    "project manager staffing",
    "superintendent recruitment",
  ],
} as const;

/**
 * Parameters accepted by the generateMetadata utility.
 */
export interface MetadataParams {
  /** Page-specific title. Will be combined with the site name via template. */
  title: string;
  /** Page-specific meta description (recommended 150-160 characters). */
  description?: string;
  /** Canonical path relative to the site root, e.g. "/industries/data-center-staffing". */
  path?: string;
  /** Open Graph image path or full URL. Falls back to siteConfig.defaultOGImage. */
  ogImage?: string;
  /** Additional keywords to merge with defaults. */
  keywords?: string[];
  /** Whether search engines should index this page. Defaults to true. */
  noIndex?: boolean;
  /** Publish date for article-type pages (ISO 8601). */
  publishedTime?: string;
  /** Last modified date for article-type pages (ISO 8601). */
  modifiedTime?: string;
  /** The type of Open Graph object. Defaults to "website". */
  ogType?: "website" | "article" | "profile";
}

/**
 * Generates a fully-formed Next.js Metadata object with Open Graph, Twitter
 * Card, canonical URL, robots directives, and alternate language links.
 *
 * @example
 * ```ts
 * export const metadata = generateMetadata({
 *   title: "Data Center Staffing",
 *   description: "Find top data center talent...",
 *   path: "/industries/data-center-staffing",
 * });
 * ```
 */
export function generateMetadata({
  title,
  description,
  path,
  ogImage,
  keywords,
  noIndex = false,
  publishedTime,
  modifiedTime,
  ogType = "website",
}: MetadataParams): Metadata {
  const metaDescription = description ?? siteConfig.description;
  const canonicalUrl = path
    ? `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`
    : siteConfig.siteUrl;
  const ogImageUrl = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${siteConfig.siteUrl}${ogImage}`
    : `${siteConfig.siteUrl}${siteConfig.defaultOGImage}`;

  const mergedKeywords = keywords
    ? [...new Set([...siteConfig.keywords, ...keywords])]
    : [...siteConfig.keywords];

  const metadata: Metadata = {
    title: {
      default: title,
      template: `%s | ${siteConfig.siteName}`,
    },
    description: metaDescription,
    keywords: mergedKeywords,
    authors: [{ name: siteConfig.siteName, url: siteConfig.siteUrl }],
    creator: siteConfig.siteName,
    publisher: siteConfig.siteName,
    metadataBase: new URL(siteConfig.siteUrl),

    openGraph: {
      type: ogType,
      locale: siteConfig.locale,
      url: canonicalUrl,
      siteName: siteConfig.siteName,
      title,
      description: metaDescription,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${siteConfig.siteName}`,
          type: "image/jpeg",
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      title,
      description: metaDescription,
      images: [ogImageUrl],
    },

    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": canonicalUrl,
      },
    },

    other: {
      "theme-color": siteConfig.themeColor,
    },
  };

  return metadata;
}
