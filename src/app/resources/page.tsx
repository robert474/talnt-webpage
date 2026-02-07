import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { SchemaScript, generateBreadcrumbSchema } from "@/lib/schema";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata = genMeta({
  title: "Data Center Staffing Resources | Salary Guides & Reports | Data Center TALNT",
  description:
    "Download free data center staffing resources including salary guides, market reports, and industry whitepapers. Stay informed on hiring trends, compensation benchmarks, and workforce planning strategies.",
  path: "/resources",
  keywords: [
    "data center salary guide",
    "construction staffing report",
    "data center market report",
    "mission critical staffing whitepaper",
    "MEP engineer salary data",
    "construction workforce planning",
    "data center hiring trends",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const salaryGuides = [
  {
    title: "2026 Data Center Construction Salary Guide",
    description:
      "Comprehensive compensation data for 25+ data center construction roles across all major US markets. Includes base salary, per diem, bonus structures, and benefits benchmarks.",
    format: "PDF",
    pages: "32 pages",
  },
  {
    title: "MEP Engineering Compensation Report",
    description:
      "Salary ranges, certification premiums, and career progression data for mechanical, electrical, and plumbing engineers in mission critical environments.",
    format: "PDF",
    pages: "18 pages",
  },
  {
    title: "Commissioning Agent Rate Guide",
    description:
      "Hourly and salary benchmarks for commissioning agents and commissioning engineers across Tier II, III, and IV data center classifications.",
    format: "PDF",
    pages: "12 pages",
  },
];

const marketReports = [
  {
    title: "Q1 2026 Data Center Construction Market Overview",
    description:
      "Analysis of active and planned data center projects, labor supply and demand dynamics, and regional market conditions across the top 20 US data center markets.",
    format: "PDF",
    pages: "24 pages",
  },
  {
    title: "Top Data Center Markets Talent Availability Index",
    description:
      "Ranking of the top US data center markets by talent availability, competitive intensity, and compensation premiums for key construction roles.",
    format: "PDF",
    pages: "16 pages",
  },
  {
    title: "Data Center Workforce Demand Forecast 2026-2028",
    description:
      "Projections for labor demand driven by the hyperscale and AI data center construction pipeline, with implications for hiring strategy and workforce planning.",
    format: "PDF",
    pages: "20 pages",
  },
];

const whitepapers = [
  {
    title: "Building a World-Class Data Center Construction Team",
    description:
      "Best practices for assembling project leadership teams for hyperscale data center builds, including organizational structures, role definitions, and staffing timelines.",
    format: "PDF",
    pages: "14 pages",
  },
  {
    title: "Retention Strategies for Mission Critical Talent",
    description:
      "How leading employers reduce turnover and retain top performers in a competitive market. Covers compensation strategies, career development, and culture-building techniques.",
    format: "PDF",
    pages: "10 pages",
  },
  {
    title: "The Case for Specialized Staffing in Critical Infrastructure",
    description:
      "Why generalist staffing firms underperform in data center and mission critical environments, and how specialized partners deliver better speed, quality, and retention.",
    format: "PDF",
    pages: "8 pages",
  },
];

/* ------------------------------------------------------------------ */
/*  Resource Card Component                                            */
/* ------------------------------------------------------------------ */

function ResourceCard({
  title,
  description,
  format,
  pages,
}: {
  title: string;
  description: string;
  format: string;
  pages: string;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-blue"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z"
            clipRule="evenodd"
          />
          <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
        </svg>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
        {description}
      </p>

      {/* Meta */}
      <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
        <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 font-medium">
          {format}
        </span>
        <span>{pages}</span>
      </div>

      {/* Download CTA */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-blue px-4 py-2 text-sm font-semibold text-blue transition-colors duration-200 hover:bg-blue hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
            <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
          </svg>
          Download
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function ResourcesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Resources", url: "/resources" },
  ];

  return (
    <>
      <SchemaScript schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Data Center Staffing Resources
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Salary guides, market reports, and whitepapers — all free, all based
            on real placement data. Use them to benchmark compensation, plan
            hiring, or prep for your next negotiation.
          </p>
        </div>
      </section>

      {/* Salary Guides */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Salary Guides"
            subtitle="Comprehensive compensation data across every major data center and construction role."
            align="left"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {salaryGuides.map((guide) => (
              <ResourceCard key={guide.title} {...guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Market Reports */}
      <section className="bg-sky-50 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Market Reports"
            subtitle="Data-driven analysis of hiring trends, talent availability, and workforce demand across key markets."
            align="left"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marketReports.map((report) => (
              <ResourceCard key={report.title} {...report} />
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Industry Whitepapers"
            subtitle="In-depth research on staffing strategies, retention best practices, and industry workforce challenges."
            align="left"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whitepapers.map((paper) => (
              <ResourceCard key={paper.title} {...paper} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get New Resources Delivered to Your Inbox
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Subscribe to our newsletter for the latest salary data, market
              insights, and staffing best practices. No spam, just actionable
              intelligence for data center and construction professionals.
            </p>
            <form
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
              action="#"
              method="POST"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="newsletter-email"
                name="email"
                placeholder="you@company.com"
                required
                className="rounded-lg border border-gray-600 bg-navy-light px-5 py-3 text-white placeholder:text-gray-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30 sm:min-w-[320px]"
              />
              <Button type="submit" variant="primary" size="lg">
                Subscribe
              </Button>
            </form>
            <p className="mt-4 text-sm text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
