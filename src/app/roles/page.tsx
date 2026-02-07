import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import SchemaScript from "@/components/seo/SchemaScript";
import { generateBreadcrumbSchema } from "@/lib/schema";

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: "Roles We Place | Data Center & Construction Staffing | Data Center TALNT",
  description:
    "Explore the specialized data center, mission critical, and construction roles DC TALNT recruits for. From project managers and MEP engineers to commissioning agents, we connect employers with proven talent nationwide.",
  alternates: {
    canonical: "https://www.datacentertalnt.com/roles",
  },
  openGraph: {
    title: "Roles We Place | Data Center & Construction Staffing | Data Center TALNT",
    description:
      "Explore the specialized data center, mission critical, and construction roles DC TALNT recruits for. From project managers and MEP engineers to commissioning agents, we connect employers with proven talent nationwide.",
    url: "https://www.datacentertalnt.com/roles",
    type: "website",
  },
};

/* -------------------------------------------------------------------------- */
/*  Role Card Data                                                            */
/* -------------------------------------------------------------------------- */

interface RoleCard {
  title: string;
  slug: string;
  salaryRange: string;
  description: string;
  industries: string[];
}

const roles: RoleCard[] = [
  {
    title: "Project Managers",
    slug: "project-managers",
    salaryRange: "$95,000 - $165,000",
    description:
      "Seasoned project managers who drive data center builds, tenant improvements, and mission critical construction projects from pre-construction through turnover on time and within budget.",
    industries: ["Data Centers", "Mission Critical", "Construction"],
  },
  {
    title: "Construction Managers",
    slug: "construction-managers",
    salaryRange: "$105,000 - $175,000",
    description:
      "Hands-on construction managers experienced in ground-up data center builds, critical facility renovations, and large-scale commercial construction with multi-trade coordination expertise.",
    industries: ["Data Centers", "Construction", "Utilities"],
  },
  {
    title: "MEP Engineers",
    slug: "mep-engineers",
    salaryRange: "$90,000 - $160,000",
    description:
      "Mechanical, electrical, and plumbing engineers who design and oversee the complex building systems that keep data centers, hospitals, and critical facilities operating at peak performance.",
    industries: ["Data Centers", "Mission Critical", "Construction", "Utilities"],
  },
  {
    title: "Schedulers & Planners",
    slug: "schedulers",
    salaryRange: "$80,000 - $135,000",
    description:
      "Expert schedulers and planning professionals who build and maintain CPM schedules, manage resource allocation, and keep data center and construction programs on track across multiple phases.",
    industries: ["Data Centers", "Construction", "Utilities"],
  },
  {
    title: "Superintendents",
    slug: "superintendents",
    salaryRange: "$100,000 - $170,000",
    description:
      "Field-proven superintendents who manage day-to-day construction operations on data center sites, enforce safety standards, coordinate subcontractors, and ensure quality at every phase.",
    industries: ["Data Centers", "Mission Critical", "Construction"],
  },
  {
    title: "Commissioning Agents",
    slug: "commissioning-agents",
    salaryRange: "$85,000 - $150,000",
    description:
      "Certified commissioning authorities who verify that critical MEP systems perform as designed, ensuring data centers and mission critical facilities meet Tier III/IV reliability standards.",
    industries: ["Data Centers", "Mission Critical", "Utilities"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Salary Badge Component                                                    */
/* -------------------------------------------------------------------------- */

function SalaryBadge({ range }: { range: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <path d="M10.75 10.818a1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 0 1.5-1.5V3.25a.75.75 0 0 1 1.5 0v1.568a3 3 0 0 1 0 5.364v1.568a.75.75 0 0 1-1.5 0v-1.568a3.01 3.01 0 0 1 0-.364Z" />
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
          clipRule="evenodd"
        />
      </svg>
      {range}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page Component                                                            */
/* -------------------------------------------------------------------------- */

export default function RolesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Roles", url: "/roles" },
  ]);

  return (
    <>
      <SchemaScript data={breadcrumbSchema} />

      {/* ------------------------------------------------------------------ */}
      {/*  Hero / Intro                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-navy py-16 sm:py-20 lg:py-24">
        <div className="container-page text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Specialized Roles We Place
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Data Center TALNT recruits across the full spectrum of mission
            critical and heavy construction disciplines. Whether you need a
            single commissioning agent or an entire project delivery team, our
            deep industry network connects you with professionals who understand
            the unique demands of data center, critical facility, and
            infrastructure construction.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Role Cards Grid                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-24" aria-labelledby="roles-grid-heading">
        <div className="container-page">
          <SectionHeading
            title="Data Center & Construction Staffing Specialties"
            subtitle="Every role we recruit for is grounded in real-world project experience. We evaluate candidates on technical ability, safety culture, and leadership—not just resumes."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <article
                key={role.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="flex flex-1 flex-col p-6">
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green/10 text-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-navy group-hover:text-green transition-colors duration-200">
                    {role.title}
                  </h3>

                  {/* Salary Badge */}
                  <div className="mt-2">
                    <SalaryBadge range={role.salaryRange} />
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {role.description}
                  </p>

                  {/* Industries */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {role.industries.map((industry) => (
                      <span
                        key={industry}
                        className="rounded-full bg-navy/5 px-2.5 py-0.5 text-xs font-medium text-navy"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href={`/roles/${role.slug}`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-green hover:text-green-dark transition-colors duration-200"
                    aria-label={`View ${role.title} role details`}
                  >
                    View Role Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Why DC TALNT                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="why-dctalnt-heading">
        <div className="container-page">
          <SectionHeading
            title="Why Employers and Candidates Choose DC TALNT"
            subtitle="We are not a generalist staffing agency. Our recruiters have direct experience in the data center, mission critical, and construction sectors, and every placement reflects that expertise."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: "Industry-Focused Recruiters",
                text: "Our team knows the difference between a Tier II and Tier IV facility, understands commissioning protocols, and can evaluate MEP system knowledge in candidates before they reach your desk.",
              },
              {
                heading: "Pre-Vetted Talent Pipeline",
                text: "Every candidate undergoes technical screening, reference verification, and certification validation. We present only professionals ready to contribute on day one.",
              },
              {
                heading: "National Reach, Local Knowledge",
                text: "From Northern Virginia's Data Center Alley to Phoenix's expanding hyperscale corridor, we maintain relationships with top talent in every major data center market.",
              },
            ].map((item) => (
              <div key={item.heading} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-navy">{item.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Bottom CTA                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-navy py-16 sm:py-20" aria-labelledby="roles-cta-heading">
        <div className="container-page text-center">
          <h2
            id="roles-cta-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl text-balance"
          >
            Ready to Build Your Team or Find Your Next Role?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
            Whether you are an employer seeking experienced construction and
            data center professionals or a candidate looking for your next
            career-defining opportunity, DC TALNT is your partner.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" href="/employers">
              Hire Talent
            </Button>
            <Button variant="outline" size="lg" href="/candidates" className="border-white text-white hover:bg-white hover:text-navy">
              Find a Job
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
