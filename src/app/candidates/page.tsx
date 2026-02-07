import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/metadata";
import {
  SchemaScript,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/schema";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata = genMeta({
  title: "Find Data Center & Construction Jobs | Candidates | Data Center TALNT",
  description:
    "Find your next data center, mission critical, or construction role. Browse open positions for project managers, MEP engineers, superintendents, commissioning agents, and more.",
  path: "/candidates",
  keywords: [
    "data center jobs",
    "construction manager jobs",
    "MEP engineer careers",
    "data center career opportunities",
    "commissioning agent jobs",
    "superintendent jobs data center",
    "mission critical facility jobs",
    "construction staffing jobs",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const benefits = [
  {
    title: "Access to Exclusive Roles",
    description:
      "Many of our positions are not posted publicly. By working with Data Center TALNT, you gain access to opportunities with top general contractors, owners, and operators before they hit the job boards.",
  },
  {
    title: "Industry-Expert Recruiters",
    description:
      "Our recruiters understand the difference between a Tier III and Tier IV facility, between LEED and WELL certifications, between a critical path schedule and a lookahead. That expertise means better matches for you.",
  },
  {
    title: "Career Guidance",
    description:
      "We do not just place you in a job. We help you navigate salary negotiations, evaluate project opportunities, and build a career trajectory in the data center and construction industries.",
  },
  {
    title: "Competitive Compensation",
    description:
      "We advocate for market-leading pay rates and benefits packages. Our deep knowledge of compensation trends across every data center market ensures you get what you are worth.",
  },
  {
    title: "Fast Placement",
    description:
      "When you are ready to make a move, we move fast. Our pre-existing relationships with hiring managers and streamlined process means less time waiting and more time working.",
  },
  {
    title: "Nationwide Opportunities",
    description:
      "Whether you want to work in Northern Virginia, Dallas, Phoenix, or any of the 40+ markets we serve, we have opportunities ready for experienced professionals.",
  },
];

const roleTypes = [
  {
    title: "Project Managers",
    href: "/roles/project-managers",
    description: "Lead data center and construction projects from planning through turnover.",
  },
  {
    title: "Construction Managers",
    href: "/roles/construction-managers",
    description: "Oversee field operations, subcontractors, and daily construction activities.",
  },
  {
    title: "MEP Engineers",
    href: "/roles/mep-engineers",
    description: "Design and coordinate mechanical, electrical, and plumbing systems.",
  },
  {
    title: "Superintendents",
    href: "/roles/superintendents",
    description: "Manage on-site crews, safety, quality, and schedule compliance.",
  },
  {
    title: "Schedulers",
    href: "/roles/schedulers",
    description: "Develop and maintain critical path schedules using P6 and MS Project.",
  },
  {
    title: "Commissioning Agents",
    href: "/roles/commissioning-agents",
    description: "Verify systems performance from IST through Level 5 integrated testing.",
  },
];

const steps = [
  {
    number: "01",
    title: "Submit Your Resume",
    description:
      "Share your resume and career preferences with our team. We will review your background and match you to relevant opportunities.",
  },
  {
    number: "02",
    title: "Recruiter Consultation",
    description:
      "A specialist recruiter will connect with you to understand your experience, skills, salary expectations, and ideal project types.",
  },
  {
    number: "03",
    title: "Get Matched & Hired",
    description:
      "We present you to hiring managers with a strong recommendation. Once you accept an offer, we support your onboarding and first day.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function CandidatesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Candidates", url: "/candidates" },
  ];

  const serviceSchema = generateServiceSchema({
    name: "Career Placement for Data Center & Construction Professionals",
    description:
      "Free career placement services for data center, mission critical, construction, and utilities professionals. Access exclusive job openings with top employers nationwide.",
    url: "/candidates",
    serviceType: "Career Placement",
  });

  return (
    <>
      <SchemaScript
        schema={[serviceSchema, generateBreadcrumbSchema(breadcrumbs)]}
      />

      {/* Hero */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Find Your Next Data Center or Construction Role
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Whether you are a project manager, MEP engineer, superintendent, or
            commissioning agent, we connect you with the best employers and
            projects in the industry.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Submit Your Resume
            </Button>
            <Button href="/jobs" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
              Browse Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Why Work with Data Center TALNT"
            subtitle="We are more than a staffing agency. We are your career partner in critical infrastructure."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-navy">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Types of Roles We Place"
            subtitle="We specialize in the roles that build and operate critical infrastructure."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roleTypes.map((role) => (
              <Link
                key={role.title}
                href={role.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-navy group-hover:text-green transition-colors duration-200">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {role.description}
                </p>
                <span
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-green"
                  aria-hidden="true"
                >
                  View roles
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="How to Get Started"
            subtitle="Three simple steps to your next career move."
          />
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green/10">
                  <span className="text-xl font-bold text-green">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green py-16 sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Submit Your Resume
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-green-100">
            Take the first step toward your next opportunity. Our recruiting
            team will review your background and connect you with roles that
            match your skills and career goals.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Submit Resume
            </Button>
            <Button
              href="/jobs"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
