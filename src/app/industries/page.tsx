import type { Metadata } from "next";
import Link from "next/link";
import {
  generateBreadcrumbSchema,
  SchemaScript,
} from "@/lib/schema";

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Industries We Staff | Data Center TALNT",
  description:
    "DC TALNT provides specialized staffing solutions across data centers, mission critical facilities, construction, and utilities. Connect with pre-vetted engineers, project managers, and skilled tradespeople nationwide.",
  alternates: {
    canonical: "https://www.datacentertalnt.com/industries",
  },
  openGraph: {
    title: "Industries We Staff | Data Center TALNT",
    description:
      "DC TALNT provides specialized staffing solutions across data centers, mission critical facilities, construction, and utilities.",
    url: "https://www.datacentertalnt.com/industries",
    type: "website",
  },
};

/* -------------------------------------------------------------------------- */
/*  Industry Card Data                                                        */
/* -------------------------------------------------------------------------- */

const industries = [
  {
    slug: "data-center-staffing",
    title: "Data Center Staffing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-13.5 0a3 3 0 0 1-3-3m3 3h13.5m-13.5 0a3 3 0 0 1-3-3m3-3h13.5a3 3 0 0 1 3 3m-16.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0-6h13.5a3 3 0 1 0 0 6m-13.5-6a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H6.75a3 3 0 0 0-3 3m16.5 0v.354a3 3 0 0 1-.879 2.122L18.75 8.25"
        />
      </svg>
    ),
    description:
      "From hyperscale builds to colocation operations, we place commissioning agents, MEP engineers, project managers, and operations staff who keep the world's digital infrastructure running.",
  },
  {
    slug: "mission-critical-facilities",
    title: "Mission Critical Facilities",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
    description:
      "Hospitals, financial trading floors, government facilities, and telecom hubs demand zero downtime. We recruit specialists who understand the unique requirements of mission critical environments.",
  },
  {
    slug: "construction-staffing",
    title: "Construction Staffing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.194-.14 1.743"
        />
      </svg>
    ),
    description:
      "Ground-up builds, tenant improvements, and large-scale renovations all require experienced superintendents, safety managers, estimators, and skilled tradespeople we deliver on demand.",
  },
  {
    slug: "utilities-staffing",
    title: "Utilities & Power",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
    description:
      "Power generation, transmission, distribution, and renewable energy projects need specialized talent. We connect utilities employers with lineworkers, relay technicians, and power engineers.",
  },
] as const;

/* -------------------------------------------------------------------------- */
/*  Page Component                                                            */
/* -------------------------------------------------------------------------- */

export default function IndustriesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      {/* ---- Breadcrumb ---- */}
      <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-slate-600">
            <li>
              <Link href="/" className="hover:text-sky-700 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">/</li>
            <li aria-current="page" className="font-medium text-slate-900">
              Industries
            </li>
          </ol>
        </div>
      </nav>

      {/* ---- Hero / Intro ---- */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Industries We Serve
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Data Center TALNT is a specialized staffing and recruitment firm
            built for the industries that power modern infrastructure. Whether
            you are constructing a hyperscale data center campus, maintaining
            mission critical hospital systems, managing a large-scale
            construction project, or expanding the nation&apos;s power grid, our
            recruiters understand the technical demands, safety requirements, and
            urgency that define your workforce needs. We deliver pre-vetted
            engineers, project managers, superintendents, commissioning agents,
            and skilled tradespeople across four core verticals.
          </p>
        </div>
      </section>

      {/* ---- Industry Cards Grid ---- */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">Our Industry Verticals</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {industries.map((industry) => (
              <article
                key={industry.slug}
                className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-sky-50 text-sky-700">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {industry.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-slate-600">
                  {industry.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-1 font-medium text-sky-700 transition-colors hover:text-sky-900"
                  >
                    Explore {industry.title} <span aria-hidden="true">&rarr;</span>
                    {/* Stretch link to cover entire card */}
                    <span className="absolute inset-0" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Bottom CTA ---- */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Build Your Team?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Whether you need a single commissioning agent or an entire project
            team, DC TALNT has the network, expertise, and speed to deliver
            qualified candidates within days, not weeks.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/employers"
              className="inline-flex items-center rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              Hire Talent
            </Link>
            <Link
              href="/candidates"
              className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Find a Job
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
