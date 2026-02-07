import React from "react";
import { siteConfig } from "./metadata";

/* -------------------------------------------------------------------------- */
/*  Shared Types                                                              */
/* -------------------------------------------------------------------------- */

export interface LocationData {
  name: string;
  city: string;
  state: string;
  stateCode: string;
  streetAddress?: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  telephone?: string;
  description?: string;
}

export interface JobPostingData {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType:
    | "FULL_TIME"
    | "PART_TIME"
    | "CONTRACTOR"
    | "TEMPORARY"
    | "INTERN";
  salary?: {
    minValue: number;
    maxValue: number;
    currency?: string;
    unitText?: "YEAR" | "MONTH" | "HOUR";
  };
  location: {
    city: string;
    state: string;
    stateCode: string;
    streetAddress?: string;
    postalCode?: string;
    remote?: boolean;
  };
  industry?: string;
  qualifications?: string[];
  responsibilities?: string[];
  experienceRequirements?: string;
  identifier?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface ServiceData {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/* -------------------------------------------------------------------------- */
/*  Schema Generators                                                         */
/* -------------------------------------------------------------------------- */

/**
 * Generates JSON-LD for the Organization (EmploymentAgency subtype).
 * Includes staffing and recruitment-specific properties.
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/images/logo.png`,
    image: `${siteConfig.siteUrl}${siteConfig.defaultOGImage}`,
    description: siteConfig.description,
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 10,
      maxValue: 50,
    },
    sameAs: [
      "https://www.linkedin.com/company/datacentertalnt",
      "https://twitter.com/datacentertalnt",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: "English",
        url: `${siteConfig.siteUrl}/contact`,
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        availableLanguage: "English",
        url: `${siteConfig.siteUrl}/employers`,
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "Data Center Staffing",
      "Mission Critical Facility Recruitment",
      "Construction Staffing",
      "Utilities Staffing",
      "MEP Engineering Recruitment",
      "Commissioning Agent Placement",
      "Critical Infrastructure Talent Acquisition",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Staffing Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Data Center Staffing",
          description:
            "Specialized recruitment for data center construction, operations, and maintenance roles.",
        },
        {
          "@type": "OfferCatalog",
          name: "Mission Critical Staffing",
          description:
            "Talent acquisition for mission critical facilities including hospitals, financial institutions, and telecom centers.",
        },
        {
          "@type": "OfferCatalog",
          name: "Construction Staffing",
          description:
            "Recruitment for ground-up construction, renovation, and tenant improvement projects.",
        },
        {
          "@type": "OfferCatalog",
          name: "Utilities Staffing",
          description:
            "Specialized placement for power generation, transmission, distribution, and renewable energy roles.",
        },
      ],
    },
  };
}

/**
 * Generates JSON-LD for a LocalBusiness at a specific geographic location.
 * Use this on geo-targeted landing pages.
 */
export function generateLocalBusinessSchema(location: LocationData) {
  return {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "@id": `${siteConfig.siteUrl}/locations/${location.city.toLowerCase().replace(/\s+/g, "-")}-${location.stateCode.toLowerCase()}/#localbusiness`,
    name: `${siteConfig.siteName} - ${location.city}, ${location.stateCode}`,
    description:
      location.description ??
      `${siteConfig.siteName} provides specialized data center, mission critical, construction, and utilities staffing services in ${location.city}, ${location.state}.`,
    url: `${siteConfig.siteUrl}/locations/${location.city.toLowerCase().replace(/\s+/g, "-")}-${location.stateCode.toLowerCase()}`,
    image: `${siteConfig.siteUrl}${siteConfig.defaultOGImage}`,
    parentOrganization: {
      "@type": "Organization",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: siteConfig.siteName,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: location.city,
      addressRegion: location.stateCode,
      addressCountry: "US",
      ...(location.streetAddress && {
        streetAddress: location.streetAddress,
      }),
      ...(location.postalCode && { postalCode: location.postalCode }),
    },
    ...(location.latitude &&
      location.longitude && {
        geo: {
          "@type": "GeoCoordinates",
          latitude: location.latitude,
          longitude: location.longitude,
        },
      }),
    ...(location.telephone && { telephone: location.telephone }),
    areaServed: {
      "@type": "City",
      name: location.city,
      containedInPlace: {
        "@type": "State",
        name: location.state,
      },
    },
    priceRange: "$$",
  };
}

/**
 * Generates JSON-LD for a JobPosting.
 * Conforms to Google for Jobs structured data requirements.
 */
export function generateJobPostingSchema(job: JobPostingData) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    ...(job.validThrough && { validThrough: job.validThrough }),
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "EmploymentAgency",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: siteConfig.siteName,
      sameAs: siteConfig.siteUrl,
      logo: `${siteConfig.siteUrl}/images/logo.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location.city,
        addressRegion: job.location.stateCode,
        addressCountry: "US",
        ...(job.location.streetAddress && {
          streetAddress: job.location.streetAddress,
        }),
        ...(job.location.postalCode && {
          postalCode: job.location.postalCode,
        }),
      },
    },
    ...(job.location.remote && {
      jobLocationType: "TELECOMMUTE",
      applicantLocationRequirements: {
        "@type": "Country",
        name: "United States",
      },
    }),
    ...(job.salary && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: job.salary.currency ?? "USD",
        value: {
          "@type": "QuantitativeValue",
          minValue: job.salary.minValue,
          maxValue: job.salary.maxValue,
          unitText: job.salary.unitText ?? "YEAR",
        },
      },
    }),
    ...(job.industry && { industry: job.industry }),
    ...(job.qualifications && {
      qualifications: job.qualifications.join("; "),
    }),
    ...(job.responsibilities && {
      responsibilities: job.responsibilities.join("; "),
    }),
    ...(job.experienceRequirements && {
      experienceRequirements: job.experienceRequirements,
    }),
    ...(job.identifier && {
      identifier: {
        "@type": "PropertyValue",
        name: siteConfig.siteName,
        value: job.identifier,
      },
    }),
  };
}

/**
 * Generates JSON-LD for BreadcrumbList navigation.
 * Helps search engines understand site hierarchy.
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${siteConfig.siteUrl}${item.url}`,
    })),
  };
}

/**
 * Generates JSON-LD for a Service offering.
 * Use on industry or service-specific landing pages.
 */
export function generateServiceSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url.startsWith("http")
      ? service.url
      : `${siteConfig.siteUrl}${service.url}`,
    provider: {
      "@type": "EmploymentAgency",
      "@id": `${siteConfig.siteUrl}/#organization`,
      name: service.provider ?? siteConfig.siteName,
    },
    areaServed: service.areaServed ?? "United States",
    ...(service.serviceType && { serviceType: service.serviceType }),
    ...(service.image && {
      image: service.image.startsWith("http")
        ? service.image
        : `${siteConfig.siteUrl}${service.image}`,
    }),
  };
}

/**
 * Generates JSON-LD for an FAQPage.
 * Critical for GEO / AI optimization and featured snippet eligibility.
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/* -------------------------------------------------------------------------- */
/*  SchemaScript Component                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Renders one or more JSON-LD structured data objects inside a `<script>` tag.
 *
 * @example
 * ```tsx
 * <SchemaScript schema={generateOrganizationSchema()} />
 * <SchemaScript schema={[generateOrganizationSchema(), generateFAQSchema(faqs)]} />
 * ```
 */
export function SchemaScript({
  schema,
}: {
  schema: Record<string, unknown> | Record<string, unknown>[];
}) {
  const jsonLd = Array.isArray(schema) ? schema : [schema];

  return React.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(jsonLd.length === 1 ? jsonLd[0] : jsonLd),
    },
  });
}
