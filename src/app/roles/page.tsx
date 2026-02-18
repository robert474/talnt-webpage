import type { Metadata } from "next";
import Image from "next/image";
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
    "Explore the specialized data center, mission critical, and construction roles Data Center TALNT recruits for. From project managers and MEP engineers to commissioning agents, we connect employers with proven talent nationwide.",
  alternates: {
    canonical: "https://www.datacentertalnt.com/roles",
  },
  openGraph: {
    title: "Roles We Place | Data Center & Construction Staffing | Data Center TALNT",
    description:
      "Explore the specialized data center, mission critical, and construction roles Data Center TALNT recruits for. From project managers and MEP engineers to commissioning agents, we connect employers with proven talent nationwide.",
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
  image: string;
}

const roles: RoleCard[] = [
  {
    title: "Project Managers",
    slug: "project-managers",
    salaryRange: "$110,000 - $185,000",
    description:
      "The person who keeps a $300M data center build from going sideways. We place PMs who've delivered hyperscale campuses and know what IST means before you have to explain it.",
    industries: ["Data Centers", "Mission Critical", "Construction"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Construction Managers",
    slug: "construction-managers",
    salaryRange: "$120,000 - $190,000",
    description:
      "First on site, last to leave. Our CMs manage 20+ trades at once and know how to keep a data center build moving without cutting corners on safety or quality.",
    industries: ["Data Centers", "Construction", "Utilities"],
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "MEP Engineers",
    slug: "mep-engineers",
    salaryRange: "$100,000 - $165,000",
    description:
      "The people who design the guts of the building — power distribution, cooling plants, fire suppression. If the PUE target matters to you, these hires matter more.",
    industries: ["Data Centers", "Mission Critical", "Construction", "Utilities"],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Schedulers & Planners",
    slug: "schedulers",
    salaryRange: "$90,000 - $140,000",
    description:
      "Primavera P6 experts who actually understand data center construction sequences. They'll tell you where your schedule is going to slip before it does.",
    industries: ["Data Centers", "Construction", "Utilities"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "QA/QC Inspectors",
    slug: "qa-qc-inspectors",
    salaryRange: "$80,000 - $140,000",
    description:
      "The quality gatekeepers who catch deficiencies before systems get energized. CWI, NETA, and ACI-certified professionals who know what 'zero defect' actually means on a data center build.",
    industries: ["Data Centers", "Mission Critical", "Construction"],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Commissioning Agents",
    slug: "commissioning-agents",
    salaryRange: "$105,000 - $160,000",
    description:
      "The last line of defense before your facility goes live. CxA-certified professionals who've led IST events on Tier III and Tier IV data centers.",
    industries: ["Data Centers", "Mission Critical", "Utilities"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
];

/* -------------------------------------------------------------------------- */
/*  Salary Badge Component                                                    */
/* -------------------------------------------------------------------------- */

function SalaryBadge({ range }: { range: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">
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

      {/* Hero */}
      <section className="relative bg-navy py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative container-page text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            The Roles That Build Critical Infrastructure
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Data center and mission critical construction runs on specialized
            talent. Whether you need a single commissioning agent or an entire
            project delivery team, we recruit the professionals who&rsquo;ve
            done this work before — not people who are still figuring it out.
          </p>
        </div>
      </section>

      {/* Role Cards Grid */}
      <section className="bg-sky-50 py-16 sm:py-20 lg:py-24" aria-labelledby="roles-grid-heading">
        <div className="container-page">
          <SectionHeading
            title="Data Center & Construction Staffing Specialties"
            subtitle="Every role we recruit for is grounded in real-world project experience. We evaluate candidates on technical ability, safety culture, and leadership — not just resumes."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <article
                key={role.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                {/* Image */}
                <div className="relative aspect-[16/9]">
                  <Image
                    src={role.image}
                    alt={role.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-navy group-hover:text-blue transition-colors duration-200">
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
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-blue hover:text-blue-dark transition-colors duration-200"
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

      {/* Why Data Center TALNT */}
      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="why-dctalnt-heading">
        <div className="container-page">
          <SectionHeading
            title="Why Employers and Candidates Choose Data Center TALNT"
            subtitle="We're not a generalist staffing agency. Our recruiters have direct experience in data center, mission critical, and construction — and every placement reflects it."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                heading: "Industry-Focused Recruiters",
                text: "Our team knows the difference between a Tier II and Tier IV facility, understands commissioning protocols, and can evaluate MEP system knowledge in candidates before they reach your desk.",
              },
              {
                heading: "Pre-Vetted Talent Pipeline",
                text: "Every candidate undergoes technical screening, reference verification, and certification validation. We present only professionals ready to contribute on day one — no warm bodies.",
              },
              {
                heading: "National Reach, Local Knowledge",
                text: "From Northern Virginia's Data Center Alley to Phoenix's expanding hyperscale corridor, we maintain active relationships with top talent in every major data center market.",
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

      {/* Bottom CTA */}
      <section className="bg-navy py-16 sm:py-20" aria-labelledby="roles-cta-heading">
        <div className="container-page text-center">
          <h2
            id="roles-cta-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl text-balance"
          >
            Ready to Build Your Team or Find Your Next Role?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
            Whether you&rsquo;re an employer looking for experienced data
            center and construction professionals, or a candidate ready for
            your next career-defining project, Data Center TALNT is your partner.
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
