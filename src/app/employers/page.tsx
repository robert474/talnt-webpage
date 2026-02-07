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
  title: "Hire Data Center & Construction Talent | Employers | Data Center TALNT",
  description:
    "Find pre-vetted data center, mission critical, and construction professionals fast. Contract, contract-to-hire, and direct placement staffing solutions from Data Center TALNT.",
  path: "/employers",
  keywords: [
    "hire data center workers",
    "construction staffing services",
    "find MEP engineers",
    "data center recruitment",
    "mission critical staffing for employers",
    "contract staffing data center",
    "direct placement construction",
    "managed staffing solutions",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const steps = [
  {
    number: "01",
    title: "Submit Requirements",
    description:
      "Tell us about your project, timeline, and the roles you need to fill. Our industry-specialized recruiters will consult with you to refine the ideal candidate profile.",
  },
  {
    number: "02",
    title: "Review Candidates",
    description:
      "Within 48 hours, we present a curated shortlist of pre-vetted professionals. Every candidate has been screened for technical skills, experience, and culture fit.",
  },
  {
    number: "03",
    title: "Hire & Deploy",
    description:
      "Select your top candidates and we handle onboarding, compliance, and payroll. Your new team members hit the ground running from day one.",
  },
];

const serviceModels = [
  {
    title: "Contract Staffing",
    description:
      "Scale your workforce up or down to match project demands. Ideal for hyperscale builds, shutdowns, and seasonal peaks. We handle payroll, benefits, and workers comp.",
    features: [
      "Rapid deployment within days",
      "Flexible engagement lengths",
      "Full employer-of-record services",
    ],
  },
  {
    title: "Contract-to-Hire",
    description:
      "Evaluate talent on the job before making a permanent commitment. Reduce hiring risk while maintaining project momentum during the evaluation period.",
    features: [
      "Try before you buy",
      "Typically 90-day evaluation",
      "Seamless conversion process",
    ],
  },
  {
    title: "Direct Placement",
    description:
      "We source, screen, and present permanent hires for your most critical leadership and technical roles. Pay a one-time placement fee with a guarantee period.",
    features: [
      "Deep candidate vetting",
      "Replacement guarantee",
      "Executive and senior-level focus",
    ],
  },
  {
    title: "Managed Staffing",
    description:
      "Outsource an entire staffing function for large-scale programs. We embed a dedicated team to manage recruiting, onboarding, and workforce planning end to end.",
    features: [
      "Dedicated account team",
      "Custom KPIs and reporting",
      "Volume hiring programs",
    ],
  },
];

const industries = [
  {
    title: "Data Center Construction",
    href: "/industries/data-center-staffing",
    description: "Hyperscale, colocation, and edge data center builds.",
  },
  {
    title: "Mission Critical Facilities",
    href: "/industries/mission-critical-facilities",
    description: "Hospitals, telecom, financial, and government facilities.",
  },
  {
    title: "Commercial Construction",
    href: "/industries/construction-staffing",
    description: "Ground-up, renovation, and tenant improvement projects.",
  },
  {
    title: "Utilities & Energy",
    href: "/industries/utilities-staffing",
    description: "Power generation, T&D, and renewable energy projects.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function EmployersPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Employers", url: "/employers" },
  ];

  const serviceSchema = generateServiceSchema({
    name: "Data Center & Construction Staffing for Employers",
    description:
      "Specialized staffing solutions for data center, mission critical, construction, and utilities employers. Contract, contract-to-hire, direct placement, and managed staffing services.",
    url: "/employers",
    serviceType: "Staffing and Recruitment",
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
            Staffing Solutions for Data Center &amp; Construction Employers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Find pre-vetted project managers, MEP engineers, superintendents, and
            commissioning agents who are ready to deliver on your most critical
            projects.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Submit a Job Order
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="How It Works"
            subtitle="Three simple steps from job order to deployment."
          />
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue/10">
                  <span className="text-xl font-bold text-blue">
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

      {/* Service Models */}
      <section className="bg-sky-50 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Flexible Staffing Models"
            subtitle="Choose the engagement model that fits your project and budget."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {serviceModels.map((model) => (
              <div
                key={model.title}
                className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-navy">
                  {model.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {model.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {model.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Deep expertise across every sector of critical infrastructure."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <Link
                key={ind.title}
                href={ind.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-navy group-hover:text-blue transition-colors duration-200">
                  {ind.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {ind.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-sky-50 py-16 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote>
              <p className="text-xl leading-relaxed text-gray-700 italic sm:text-2xl">
                &ldquo;Data Center TALNT understood our project from day one.
                They placed six commissioning agents on our hyperscale build
                within two weeks, and every single one exceeded expectations.
                They are our go-to staffing partner for mission critical
                work.&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-semibold text-navy">
                  &mdash; VP of Construction, National General Contractor
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-16 sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Submit a Job Order
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Tell us what you need and we will start sourcing qualified candidates
            immediately. Most clients receive their first shortlist within 48
            hours.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="secondary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
