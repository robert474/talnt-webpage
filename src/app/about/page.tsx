import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { SchemaScript, generateOrganizationSchema, generateBreadcrumbSchema } from "@/lib/schema";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata = genMeta({
  title: "About Data Center TALNT | Mission Critical Staffing Experts",
  description:
    "Data Center TALNT is a specialized staffing firm dedicated to connecting elite talent with data center, mission critical, construction, and utilities employers. Learn about our mission, values, and expertise.",
  path: "/about",
  keywords: [
    "about data center TALNT",
    "mission critical staffing company",
    "data center recruitment agency",
    "construction staffing experts",
    "staffing firm about us",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "2,500+", label: "Placements Made" },
  { value: "96%", label: "Retention Rate" },
  { value: "40+", label: "States Covered" },
  { value: "50+", label: "Years Combined Experience" },
];

const values = [
  {
    title: "Industry Knowledge",
    description:
      "Our recruiters live and breathe data center, mission critical, and construction staffing. We understand the technical requirements, certifications, and culture fit that matter for every role.",
  },
  {
    title: "Speed to Hire",
    description:
      "When a project timeline is at stake, every day counts. We maintain a pre-vetted talent pipeline so we can present qualified candidates within 48 hours of receiving a requirement.",
  },
  {
    title: "Quality Over Quantity",
    description:
      "We do not flood your inbox with unqualified resumes. Every candidate we present has been thoroughly screened for technical ability, experience, and reliability.",
  },
  {
    title: "Nationwide Coverage",
    description:
      "From Northern Virginia to Phoenix, Dallas to Chicago, we place talent in every major data center market across the United States.",
  },
];

const expertise = [
  {
    title: "Data Center Construction",
    description:
      "Hyperscale, colocation, and enterprise data center builds from ground-up construction through commissioning and turnover.",
    href: "/industries/data-center-staffing",
  },
  {
    title: "Mission Critical Facilities",
    description:
      "Hospitals, financial institutions, telecom centers, and any facility where downtime is not an option.",
    href: "/industries/mission-critical-facilities",
  },
  {
    title: "Commercial Construction",
    description:
      "General contracting, tenant improvements, and ground-up commercial construction requiring skilled project leadership.",
    href: "/industries/construction-staffing",
  },
  {
    title: "Utilities & Energy",
    description:
      "Power generation, transmission, distribution, and renewable energy projects that keep infrastructure running.",
    href: "/industries/utilities-staffing",
  },
];

const leadership = [
  {
    name: "Leadership Team Member",
    role: "Founder & CEO",
    bio: "Brings decades of experience in critical infrastructure staffing, having placed thousands of professionals in data center and construction roles nationwide.",
  },
  {
    name: "Leadership Team Member",
    role: "VP of Recruiting",
    bio: "Expert in sourcing hard-to-find technical talent for mission critical environments, with a background in MEP engineering recruitment.",
  },
  {
    name: "Leadership Team Member",
    role: "Director of Business Development",
    bio: "Builds lasting partnerships with general contractors, owners, and operators across every major data center market in the country.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ];

  return (
    <>
      <SchemaScript
        schema={[
          generateOrganizationSchema(),
          generateBreadcrumbSchema(breadcrumbs),
        ]}
      />

      {/* Hero */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            About Data Center TALNT
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            We are the staffing partner built exclusively for data center,
            mission critical, and construction industries. Our deep expertise
            means faster hires, better fits, and stronger project outcomes.
          </p>
        </div>
      </section>

      {/* Mission / Story */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              title="Our Mission"
              subtitle="Powering critical infrastructure with exceptional talent."
            />
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                Data Center TALNT was founded on a simple observation: the
                industries that build and operate the most critical
                infrastructure in the world deserve a staffing partner that truly
                understands their work. Generic recruiting firms cannot
                distinguish a commissioning agent from a controls engineer, or
                understand why a superintendent with hyperscale experience is
                fundamentally different from one who has only built commercial
                office space.
              </p>
              <p className="mt-4">
                We built Data Center TALNT to close that gap. Every member of
                our team has direct experience in the data center, mission
                critical, or construction sectors. We speak the language of
                critical path schedules, MEP coordination, and Tier III
                reliability. That domain expertise translates into faster
                placements, higher retention, and better project outcomes for our
                clients.
              </p>
              <p className="mt-4">
                Whether you are a general contractor ramping up a 100MW
                hyperscale campus, an owner-operator looking for a commissioning
                manager, or a skilled professional seeking your next career move,
                Data Center TALNT is the partner that delivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-blue sm:text-4xl lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-300 sm:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Our Expertise"
            subtitle="Deep specialization across the industries that power modern infrastructure."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-navy group-hover:text-blue transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values / Differentiators */}
      <section className="bg-sky-50 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Why Choose Data Center TALNT"
            subtitle="Four pillars that set us apart from generalist staffing agencies."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8"
              >
                <h3 className="text-xl font-semibold text-navy">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Our Leadership"
            subtitle="Experienced professionals who understand the industries we serve."
          />
          <div className="grid gap-8 sm:grid-cols-3">
            {leadership.map((person) => (
              <div
                key={person.role}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                {/* Placeholder avatar */}
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-10 w-10 text-gray-400"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-navy">
                  {person.name}
                </h3>
                <p className="text-sm font-medium text-blue">{person.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-16 sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Partner with Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Whether you need to hire top-tier talent or find your next career
            opportunity, Data Center TALNT is ready to help.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/employers" variant="secondary" size="lg">
              I Need to Hire
            </Button>
            <Button
              href="/candidates"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue"
            >
              I Am Looking for a Job
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
