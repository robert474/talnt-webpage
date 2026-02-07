import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/metadata";
import {
  SchemaScript,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
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
      "Our recruiters don't just read resumes — they've walked job sites, attended commissioning events, and know the difference between a 2N and 2N+1 power architecture. That depth lets us spot the right candidate in a stack of 200.",
  },
  {
    title: "Speed to Hire",
    description:
      "When a GC calls on Tuesday, they see resumes by Wednesday. We maintain a live pipeline of pre-screened professionals so that when your project timeline gets squeezed, your recruiting timeline doesn't.",
  },
  {
    title: "Quality Over Quantity",
    description:
      "Three vetted candidates beat thirty random resumes every time. We confirm certifications, call references, and review project histories before your team ever sees a name. If someone doesn't pass our screen, they don't pass go.",
  },
  {
    title: "Nationwide Coverage",
    description:
      "Ashburn, Phoenix, Dallas, Chicago, Portland — we have active candidate relationships in every top-tier data center market and most of the emerging ones too. When a new campus breaks ground somewhere unexpected, we're usually already there.",
  },
];

const expertise = [
  {
    title: "Data Center Construction",
    description:
      "Hyperscale campuses, colocation expansions, edge deployments — from site prep to IST, we staff every phase.",
    href: "/industries/data-center-staffing",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mission Critical Facilities",
    description:
      "Hospitals, trading floors, telecom hubs, and government installations where a single power blip costs millions.",
    href: "/industries/mission-critical-facilities",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Commercial Construction",
    description:
      "Ground-up builds, tenant improvements, and large-scale renovations that need skilled field leadership yesterday.",
    href: "/industries/construction-staffing",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Utilities & Energy",
    description:
      "Substations, T&D lines, solar fields, and battery storage — the power infrastructure behind every data center.",
    href: "/industries/utilities-staffing",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  },
];

const leadership = [
  {
    name: "Robert Carter",
    role: "Founder & CEO",
    bio: "Spent 15 years on the employer side of data center construction before deciding the industry needed a staffing partner that actually understood the work. Launched DC TALNT to fill that gap.",
  },
  {
    name: "Michelle Torres",
    role: "VP of Recruiting",
    bio: "Former MEP project engineer turned recruiter. Michelle's technical background means she can vet a controls engineer's skillset in 15 minutes — saving clients weeks of guesswork.",
  },
  {
    name: "James Whitfield",
    role: "Director of Business Development",
    bio: "Built his career managing subcontractor relationships on data center programs from coast to coast. Now he uses that network to connect GCs and owners with the talent they can't find on their own.",
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
      <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            The Staffing Partner Built for Critical Infrastructure
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            We didn&rsquo;t start as a staffing agency that wandered into data
            centers. We started in the industry and built a recruiting firm
            around what we know.
          </p>
        </div>
      </section>

      {/* Mission / Story */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="Born from the job site, not a corporate playbook."
                align="left"
              />
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Data Center TALNT was founded because we kept watching the same
                  problem play out on project after project: a general contractor
                  needs a commissioning agent who&rsquo;s actually led IST events
                  on Tier IV facilities, but the staffing agency sends someone
                  who once toured a data center on a vendor visit.
                </p>
                <p>
                  That disconnect costs real money — blown schedules, failed
                  tests, crews standing around while someone gets up to speed.
                  We decided there had to be a better way. So we built a
                  recruiting operation staffed by people who&rsquo;ve managed
                  data center builds, coordinated MEP systems, and sat through
                  enough OAC meetings to know exactly what a project team needs.
                </p>
                <p>
                  Today, DC TALNT places professionals across every phase of
                  data center and critical infrastructure construction — from
                  the site superintendent running daily standups to the
                  commissioning authority signing off on Level 5 integrated
                  testing. Every placement starts with the same question: has
                  this person actually done this work before?
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=80"
                alt="Construction professionals reviewing blueprints on a data center job site"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
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
                <p className="text-3xl font-bold text-blue-light sm:text-4xl lg:text-5xl">
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
            title="Where We Focus"
            subtitle="Four verticals. Zero generalist guesswork."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-navy group-hover:text-blue transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Values / Differentiators */}
      <section className="bg-sky-50 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="What Makes Us Different"
            subtitle="Here's the honest version — no marketing fluff."
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

      {/* Image Break */}
      <section className="relative h-64 overflow-hidden sm:h-80 lg:h-96">
        <Image
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=80"
          alt="Aerial view of a large-scale construction project"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/30 to-transparent" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container-page">
            <p className="max-w-lg text-2xl font-bold leading-tight text-white sm:text-3xl drop-shadow-lg">
              We&rsquo;ve placed over 2,500 professionals on data center and
              critical infrastructure projects nationwide.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="The People Behind the Placements"
            subtitle="Our leadership team brings direct experience from the industries we serve."
          />
          <div className="grid gap-8 sm:grid-cols-3">
            {leadership.map((person) => (
              <div
                key={person.role}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-navy/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-10 w-10 text-navy/50"
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
            Let&rsquo;s Talk About Your Next Project
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Whether you need to fill one critical role or staff an entire
            program, we&rsquo;d rather show you what we can do than tell you
            about it.
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
              I&rsquo;m Looking for Work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
