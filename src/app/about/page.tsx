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
    name: "Nate Ollestad",
    role: "Founder & CEO",
    image: "/images/logos/nate-headshot-TALNT-team.jpg",
    linkedin: "https://www.linkedin.com/in/nathanollestad/",
    bio: "Nate founded Data Center TALNT after years of building recruiting teams and talent acquisition operations across the tech industry, including leadership roles at Duo Security. Known for his ability to build deep relationships and identify exceptional talent, he launched DC TALNT to bring that same precision to the data center and mission critical construction space — an industry where the wrong hire costs six figures in schedule delays.",
  },
  {
    name: "Ramiro Barrientos",
    role: "Senior Account Executive & Talent Acquisition Partner",
    image: "/images/logos/ramiro-headshot-TALNT-team.png",
    linkedin: "https://www.linkedin.com/in/ramiro-barrientos/",
    bio: "Ramiro brings deep technical recruiting experience from Apple, Rackspace Technology, and Aerotek, where he managed full-cycle recruiting across enterprise sales, software engineering, and skilled trades. At DC TALNT, he leads business development and client partnerships, combining his technical screening expertise with hands-on knowledge of construction and infrastructure staffing to deliver candidates who can contribute from day one.",
  },
  {
    name: "Robert Putt",
    role: "Advisor",
    image: "/images/logos/robert-putt.jpg",
    linkedin: "https://www.linkedin.com/in/robert-putt-leadership/",
    bio: "Robert is a proven business leader with experience at Amazon and in AI technology, known for his calm, level-headed leadership style and ability to drive results in high-pressure environments. As an advisor to DC TALNT, he provides strategic guidance on scaling operations, technology-driven recruiting, and navigating the intersection of data center infrastructure and the rapidly evolving AI economy.",
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
                key={person.name}
                className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm"
              >
                {/* Headshot */}
                <div className="relative aspect-[4/5] bg-gray-100">
                  <Image
                    src={person.image}
                    alt={`${person.name} — ${person.role} at Data Center TALNT`}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-navy">
                    {person.name}
                  </h3>
                  <p className="text-sm font-medium text-blue">{person.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {person.bio}
                  </p>
                  {/* LinkedIn */}
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue hover:text-blue-dark transition-colors"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
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
