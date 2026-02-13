import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  generateBreadcrumbSchema,
  SchemaScript,
} from "@/lib/schema";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

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
/*  Industry Data                                                             */
/* -------------------------------------------------------------------------- */

const industries = [
  {
    slug: "data-center-staffing",
    title: "Data Center Construction & Staffing",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    description:
      "From hyperscale campuses to edge deployments, we place the PMs, commissioning agents, MEP engineers, and field leaders who keep data center builds on schedule and on budget. If you're pouring foundations in Ashburn or pulling wire in Phoenix, these are the people you need on your team.",
    highlights: [
      "Hyperscale, colocation, and enterprise builds",
      "Tier II through Tier IV facility experience",
      "Full lifecycle: pre-con through IST and turnover",
    ],
  },
  {
    slug: "mission-critical-facilities",
    title: "Mission Critical Facilities",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description:
      "When a hospital can't lose power and a trading floor can't afford a blink, the people maintaining those systems better know what they're doing. We recruit the specialists who design, build, and maintain environments where a single failure costs millions.",
    highlights: [
      "Healthcare, financial, and telecom facilities",
      "Government and defense installations",
      "Redundant power and cooling systems expertise",
    ],
  },
  {
    slug: "construction-staffing",
    title: "Commercial & Industrial Construction",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    description:
      "Ground-up builds don't wait for candidates to update their resumes. We keep a bench of QA/QC inspectors, schedulers, safety pros, and project engineers ready to mobilize when you need boots on the ground — this week, not next month.",
    highlights: [
      "Ground-up, renovation, and tenant improvements",
      "Multi-trade coordination and field leadership",
      "Safety managers, estimators, and QC professionals",
    ],
  },
  {
    slug: "utilities-staffing",
    title: "Utilities & Power Infrastructure",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Substations, T&D lines, solar farms, battery storage — the grid is getting a massive upgrade and every data center needs power to the site before it needs anything else. We recruit the relay technicians, lineworkers, and power engineers making it happen.",
    highlights: [
      "Substations, transmission, and distribution",
      "Solar, wind, and battery storage projects",
      "Utility interconnection and power delivery",
    ],
  },
];

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

      {/* Hero */}
      <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative container-page">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Industries We Serve
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300">
            We don&rsquo;t recruit for every industry under the sun — just the
            ones where failure isn&rsquo;t an option. Our four core verticals
            share one thing in common: they build, power, and protect the
            infrastructure that keeps everything else running.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-16 sm:py-24">
        <div className="container-page space-y-16">
          {industries.map((industry, idx) => (
            <article
              key={industry.slug}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                idx % 2 === 1 ? "lg:[direction:rtl] lg:[&>*]:[direction:ltr]" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                  {industry.title}
                </h2>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {industry.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {industry.highlights.map((item) => (
                    <li
                      key={item}
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
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:text-blue-dark transition-colors"
                  >
                    Learn more about {industry.title} &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-navy py-14 sm:py-16">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "500+", label: "Professionals Placed" },
              { value: "4", label: "Industry Verticals" },
              { value: "40+", label: "States Covered" },
              { value: "48hr", label: "Avg. First Shortlist" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-blue-light sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-16 sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Build Your Team?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Whether you need a single commissioning agent or an entire project
            team, DC TALNT has the network, the expertise, and the speed to
            deliver qualified candidates within days.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/employers" variant="secondary" size="lg">
              Hire Talent
            </Button>
            <Button
              href="/candidates"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue"
            >
              Find a Job
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
