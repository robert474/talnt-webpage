import { generateMetadata as genMeta } from "@/lib/metadata";
import {
  SchemaScript,
  generateBreadcrumbSchema,
  generateJobPostingSchema,
  type JobPostingData,
} from "@/lib/schema";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata = genMeta({
  title: "Open Positions | Data Center & Construction Jobs | Data Center TALNT",
  description:
    "Browse current data center, mission critical, construction, and utilities job openings. Find project manager, MEP engineer, superintendent, and commissioning agent positions nationwide.",
  path: "/jobs",
  keywords: [
    "data center jobs",
    "construction jobs near me",
    "MEP engineer positions",
    "project manager data center",
    "commissioning agent jobs",
    "superintendent jobs",
    "mission critical facility careers",
    "data center construction careers",
  ],
});

/* ------------------------------------------------------------------ */
/*  Sample Job Data                                                    */
/* ------------------------------------------------------------------ */

const jobs: (JobPostingData & { id: string; salaryDisplay: string })[] = [
  {
    id: "dc-pm-nova",
    title: "Senior Project Manager - Hyperscale Data Center",
    description:
      "Lead a 60MW hyperscale data center build from shell completion through commissioning. Manage subcontractors, coordinate with the owner's representative, and drive the critical path schedule to achieve on-time delivery. Requires 8+ years of data center construction experience and proficiency with P6 scheduling.",
    datePosted: "2026-01-15",
    validThrough: "2026-04-15",
    employmentType: "FULL_TIME",
    salary: { minValue: 145000, maxValue: 185000, currency: "USD", unitText: "YEAR" },
    salaryDisplay: "$145,000 - $185,000/yr",
    location: { city: "Ashburn", state: "Virginia", stateCode: "VA" },
    industry: "Data Center Construction",
    identifier: "DC-PM-NOVA-001",
  },
  {
    id: "mep-eng-dfw",
    title: "MEP Engineer - Mission Critical",
    description:
      "Design and coordinate mechanical, electrical, and plumbing systems for a portfolio of Tier III+ data center projects. Review submittals, resolve clashes in BIM coordination, and support commissioning efforts. PE license preferred. 5+ years of mission critical MEP experience required.",
    datePosted: "2026-01-20",
    validThrough: "2026-04-20",
    employmentType: "FULL_TIME",
    salary: { minValue: 120000, maxValue: 155000, currency: "USD", unitText: "YEAR" },
    salaryDisplay: "$120,000 - $155,000/yr",
    location: { city: "Dallas", state: "Texas", stateCode: "TX" },
    industry: "Data Center Construction",
    identifier: "MEP-ENG-DFW-002",
  },
  {
    id: "cx-agent-phx",
    title: "Commissioning Agent - Data Center",
    description:
      "Execute Level 1 through Level 5 commissioning on a new hyperscale campus. Develop and implement commissioning plans, coordinate with MEP trades, and document test results. NETA or CxA certification preferred. Must have 3+ years of data center commissioning experience.",
    datePosted: "2026-01-22",
    validThrough: "2026-04-22",
    employmentType: "CONTRACTOR",
    salary: { minValue: 65, maxValue: 85, currency: "USD", unitText: "HOUR" },
    salaryDisplay: "$65 - $85/hr",
    location: { city: "Phoenix", state: "Arizona", stateCode: "AZ" },
    industry: "Data Center Construction",
    identifier: "CX-AGT-PHX-003",
  },
  {
    id: "super-atl",
    title: "General Superintendent - Ground-Up Construction",
    description:
      "Oversee all field operations for a multi-building data center campus. Manage a team of 6+ area superintendents, enforce safety protocols, and coordinate with the project management team on schedule and budget. 10+ years of commercial or industrial construction experience required.",
    datePosted: "2026-01-25",
    validThrough: "2026-04-25",
    employmentType: "FULL_TIME",
    salary: { minValue: 160000, maxValue: 200000, currency: "USD", unitText: "YEAR" },
    salaryDisplay: "$160,000 - $200,000/yr",
    location: { city: "Atlanta", state: "Georgia", stateCode: "GA" },
    industry: "Commercial Construction",
    identifier: "SUPT-ATL-004",
  },
  {
    id: "sched-chi",
    title: "Project Scheduler - Data Center Program",
    description:
      "Develop and maintain P6 CPM schedules for a multi-phase data center program totaling 200MW+. Conduct schedule risk analyses, produce monthly narrative reports, and facilitate pull planning sessions with subcontractors. Requires advanced P6 skills and 5+ years of scheduling experience.",
    datePosted: "2026-01-28",
    validThrough: "2026-04-28",
    employmentType: "FULL_TIME",
    salary: { minValue: 110000, maxValue: 140000, currency: "USD", unitText: "YEAR" },
    salaryDisplay: "$110,000 - $140,000/yr",
    location: { city: "Chicago", state: "Illinois", stateCode: "IL" },
    industry: "Data Center Construction",
    identifier: "SCHED-CHI-005",
  },
  {
    id: "cm-den",
    title: "Construction Manager - Utilities Infrastructure",
    description:
      "Manage construction of a high-voltage electrical substation and distribution infrastructure supporting a new data center campus. Coordinate with the utility provider, oversee civil and electrical subcontractors, and ensure compliance with utility interconnection requirements.",
    datePosted: "2026-02-01",
    validThrough: "2026-05-01",
    employmentType: "FULL_TIME",
    salary: { minValue: 135000, maxValue: 170000, currency: "USD", unitText: "YEAR" },
    salaryDisplay: "$135,000 - $170,000/yr",
    location: { city: "Denver", state: "Colorado", stateCode: "CO" },
    industry: "Utilities & Energy",
    identifier: "CM-DEN-006",
  },
  {
    id: "pm-slc",
    title: "Project Manager - Mission Critical Renovation",
    description:
      "Lead a mission critical renovation of an existing financial data center without disrupting live operations. Manage phased construction, hot work permits, and Method of Procedure (MOP) execution. Requires experience with occupied mission critical environments and strong stakeholder communication skills.",
    datePosted: "2026-02-03",
    validThrough: "2026-05-03",
    employmentType: "FULL_TIME",
    salary: { minValue: 125000, maxValue: 160000, currency: "USD", unitText: "YEAR" },
    salaryDisplay: "$125,000 - $160,000/yr",
    location: { city: "Salt Lake City", state: "Utah", stateCode: "UT" },
    industry: "Mission Critical Facilities",
    identifier: "PM-SLC-007",
  },
  {
    id: "safety-mgr-reno",
    title: "Site Safety Manager - Data Center Construction",
    description:
      "Develop and enforce the site-specific safety program for a 400,000 SF data center build. Conduct daily inspections, lead toolbox talks, manage incident investigations, and ensure OSHA compliance. CHST or CSP certification required. 5+ years of construction safety experience required.",
    datePosted: "2026-02-05",
    validThrough: "2026-05-05",
    employmentType: "FULL_TIME",
    salary: { minValue: 100000, maxValue: 130000, currency: "USD", unitText: "YEAR" },
    salaryDisplay: "$100,000 - $130,000/yr",
    location: { city: "Reno", state: "Nevada", stateCode: "NV" },
    industry: "Data Center Construction",
    identifier: "SAFE-RNO-008",
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function employmentTypeLabel(type: string) {
  const map: Record<string, string> = {
    FULL_TIME: "Full-Time",
    CONTRACTOR: "Contract",
    TEMPORARY: "Temporary",
    PART_TIME: "Part-Time",
    INTERN: "Internship",
  };
  return map[type] ?? type;
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function JobsPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Jobs", url: "/jobs" },
  ];

  const jobSchemas = jobs.map((job) => {
    const { id, salaryDisplay, ...jobData } = job;
    return generateJobPostingSchema(jobData);
  });

  return (
    <>
      <SchemaScript
        schema={[generateBreadcrumbSchema(breadcrumbs), ...jobSchemas]}
      />

      {/* Hero */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Current Open Positions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Browse data center, mission critical, construction, and utilities
            jobs across the country. New positions are added daily.
          </p>
        </div>
      </section>

      {/* Filter Bar (placeholder) */}
      <section className="border-b border-gray-200 bg-white py-4">
        <div className="container-page">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="filter-industry" className="sr-only">
                Filter by industry
              </label>
              <select
                id="filter-industry"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-green focus:outline-none focus:ring-2 focus:ring-green/30"
                defaultValue=""
              >
                <option value="">All Industries</option>
                <option value="data-center">Data Center Construction</option>
                <option value="mission-critical">Mission Critical Facilities</option>
                <option value="commercial">Commercial Construction</option>
                <option value="utilities">Utilities &amp; Energy</option>
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="filter-role" className="sr-only">
                Filter by role type
              </label>
              <select
                id="filter-role"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-green focus:outline-none focus:ring-2 focus:ring-green/30"
                defaultValue=""
              >
                <option value="">All Role Types</option>
                <option value="project-manager">Project Manager</option>
                <option value="construction-manager">Construction Manager</option>
                <option value="superintendent">Superintendent</option>
                <option value="mep-engineer">MEP Engineer</option>
                <option value="scheduler">Scheduler</option>
                <option value="commissioning-agent">Commissioning Agent</option>
                <option value="safety-manager">Safety Manager</option>
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="filter-location" className="sr-only">
                Filter by location
              </label>
              <select
                id="filter-location"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-green focus:outline-none focus:ring-2 focus:ring-green/30"
                defaultValue=""
              >
                <option value="">All Locations</option>
                <option value="va">Virginia</option>
                <option value="tx">Texas</option>
                <option value="az">Arizona</option>
                <option value="ga">Georgia</option>
                <option value="il">Illinois</option>
                <option value="co">Colorado</option>
                <option value="ut">Utah</option>
                <option value="nv">Nevada</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 sm:py-16">
        <div className="container-page">
          <p className="mb-8 text-sm text-gray-500">
            Showing {jobs.length} open positions
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {jobs.map((job) => (
              <article
                key={job.id}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-navy">
                      {job.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {job.location.city}, {job.location.stateCode}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-green/10 px-3 py-1 text-xs font-medium text-green whitespace-nowrap">
                    {employmentTypeLabel(job.employmentType)}
                  </span>
                </div>

                {/* Salary */}
                <p className="mt-3 text-sm font-medium text-navy">
                  {job.salaryDisplay}
                </p>

                {/* Description excerpt */}
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
                  {job.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.industry && (
                    <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-700">
                      {job.industry}
                    </span>
                  )}
                </div>

                {/* Apply CTA */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Button href="/contact" size="sm" className="w-full">
                    Apply Now
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Don&apos;t See the Right Role?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            We add new positions daily and many roles are filled before they are
            posted. Submit your resume and our recruiters will proactively match
            you with opportunities that fit your experience.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Submit Your Resume
            </Button>
            <Button href="/candidates" variant="outline" size="lg">
              Learn About Working With Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
