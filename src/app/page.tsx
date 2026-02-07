import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/metadata";
import {
  generateOrganizationSchema,
  generateFAQSchema,
  SchemaScript,
  type FAQItem,
} from "@/lib/schema";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

/* -------------------------------------------------------------------------- */
/*  SEO Metadata                                                              */
/* -------------------------------------------------------------------------- */

export const metadata = genMeta({
  title:
    "Data Center TALNT | Data Center & Mission Critical Staffing Experts",
  description:
    "Data Center TALNT is a nationwide staffing and recruitment firm specializing in data center construction, mission critical facilities, MEP engineering, and utilities talent. We place project managers, superintendents, commissioning agents, and more across all 50 states.",
  path: "/",
  keywords: [
    "data center staffing agency",
    "mission critical staffing",
    "data center construction recruitment",
    "MEP engineer staffing",
    "commissioning agent recruitment",
    "data center project manager jobs",
    "construction superintendent staffing",
    "utilities staffing agency",
    "critical infrastructure talent",
    "nationwide construction staffing",
  ],
});

/* -------------------------------------------------------------------------- */
/*  Static Data                                                               */
/* -------------------------------------------------------------------------- */

const industries = [
  {
    slug: "data-center-staffing",
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
    title: "Data Center Construction & Staffing",
    description:
      "Specialized recruitment for hyperscale, colocation, and enterprise data center construction projects. We source electricians, MEP engineers, project managers, and commissioning agents who understand Tier III and Tier IV requirements.",
  },
  {
    slug: "mission-critical-facilities",
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
    title: "Mission Critical Facilities",
    description:
      "Talent acquisition for facilities where uptime is non-negotiable: financial trading floors, hospital infrastructure, telecom hubs, and government installations requiring 99.999% availability.",
  },
  {
    slug: "construction-staffing",
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
    title: "Commercial & Industrial Construction",
    description:
      "Experienced project managers, superintendents, schedulers, and safety professionals for ground-up construction, tenant improvement, and large-scale renovation projects nationwide.",
  },
  {
    slug: "utilities-staffing",
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
    title: "Utilities & Power Infrastructure",
    description:
      "Recruitment for power generation, transmission and distribution, substation construction, renewable energy, and grid modernization projects across the United States.",
  },
];

const roles = [
  {
    slug: "project-managers",
    title: "Project Managers",
    description:
      "Lead data center and mission critical construction projects from pre-construction through closeout. PMP and LEED credentials preferred.",
    salary: "$110K \u2013 $180K",
  },
  {
    slug: "construction-managers",
    title: "Construction Managers",
    description:
      "Oversee daily field operations, subcontractor coordination, and quality control on large-scale data center builds.",
    salary: "$120K \u2013 $190K",
  },
  {
    slug: "mep-engineers",
    title: "MEP Engineers",
    description:
      "Design, review, and commission mechanical, electrical, and plumbing systems in critical facility environments.",
    salary: "$100K \u2013 $165K",
  },
  {
    slug: "schedulers",
    title: "Schedulers & Planners",
    description:
      "Develop and maintain CPM schedules using Primavera P6 or Microsoft Project for complex construction programs.",
    salary: "$90K \u2013 $140K",
  },
  {
    slug: "superintendents",
    title: "Superintendents",
    description:
      "Direct on-site construction activities, enforce safety protocols, and ensure milestone delivery on mission critical projects.",
    salary: "$115K \u2013 $175K",
  },
  {
    slug: "commissioning-agents",
    title: "Commissioning Agents",
    description:
      "Verify and document that data center MEP systems perform per design intent. CxA and NETA certifications valued.",
    salary: "$105K \u2013 $160K",
  },
] as const;

const whyChoose = [
  {
    title: "Industry Expertise",
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
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
    description:
      "Our recruiters have deep, hands-on knowledge of mission critical and data center construction. We understand Tier classifications, commissioning workflows, and the technical vocabulary your hiring managers expect.",
  },
  {
    title: "Speed to Hire",
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
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    description:
      "We deliver qualified, pre-vetted candidate submittals within 24 to 48 hours. Our proprietary talent network means your open requisition gets filled faster, with less back-and-forth.",
  },
  {
    title: "Nationwide Coverage",
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
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
    description:
      "We place talent across all 50 states, with concentrated expertise in top data center markets like Northern Virginia, Dallas, Phoenix, Chicago, and Silicon Valley.",
  },
  {
    title: "Verified Talent",
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
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
    description:
      "Every candidate is pre-screened, reference-checked, and background-verified before submittal. We confirm certifications, project history, and cultural fit so you can hire with confidence.",
  },
] as const;

const topMarkets = [
  {
    slug: "ashburn-va",
    city: "Ashburn",
    state: "Virginia",
    stat: "Largest data center market globally",
  },
  {
    slug: "dallas-tx",
    city: "Dallas",
    state: "Texas",
    stat: "Fastest-growing capacity in the South",
  },
  {
    slug: "phoenix-az",
    city: "Phoenix",
    state: "Arizona",
    stat: "Major hyperscale expansion hub",
  },
  {
    slug: "chicago-il",
    city: "Chicago",
    state: "Illinois",
    stat: "Central U.S. network interconnection hub",
  },
  {
    slug: "silicon-valley-ca",
    city: "Silicon Valley",
    state: "California",
    stat: "Heart of tech-driven data demand",
  },
  {
    slug: "atlanta-ga",
    city: "Atlanta",
    state: "Georgia",
    stat: "Southeast\u2019s premier connectivity market",
  },
  {
    slug: "portland-or",
    city: "Portland",
    state: "Oregon",
    stat: "Low-cost power and fiber-rich region",
  },
  {
    slug: "columbus-oh",
    city: "Columbus",
    state: "Ohio",
    stat: "Emerging Midwest data center corridor",
  },
  {
    slug: "reno-nv",
    city: "Reno",
    state: "Nevada",
    stat: "Growing hyperscale destination",
  },
  {
    slug: "salt-lake-city-ut",
    city: "Salt Lake City",
    state: "Utah",
    stat: "Mountain West expansion market",
  },
] as const;

const faqs: FAQItem[] = [
  {
    question: "What types of data center roles do you staff?",
    answer:
      "Data Center TALNT staffs a comprehensive range of data center and mission critical roles including project managers, construction managers, MEP engineers (mechanical, electrical, and plumbing), superintendents, commissioning agents, schedulers, safety managers, quality control professionals, and BIM coordinators. We cover every phase from pre-construction and design through commissioning and turnover for Tier I through Tier IV facilities.",
  },
  {
    question: "How quickly can you fill a data center construction position?",
    answer:
      "In most cases we deliver pre-vetted, qualified candidate submittals within 24 to 48 hours of receiving a job order. Our maintained talent network of data center and mission critical professionals enables rapid response times that outpace traditional recruiting agencies. For contract positions, many placements start within one to two weeks. Direct-hire searches typically close in three to six weeks depending on role seniority and location.",
  },
  {
    question:
      "Do you provide contract, contract-to-hire, and direct hire staffing?",
    answer:
      "Yes. Data Center TALNT offers all three engagement models: contract (temporary) placements for project-based needs, contract-to-hire arrangements that let you evaluate talent before committing, and direct-hire (permanent) searches for long-term team building. We tailor our approach to your project timeline, budget, and hiring strategy.",
  },
  {
    question: "What geographic areas does Data Center TALNT cover?",
    answer:
      "We serve clients across all 50 United States with concentrated expertise in the top data center markets: Northern Virginia (Ashburn), Dallas-Fort Worth, Phoenix, Chicago, Silicon Valley, Atlanta, Portland, Columbus, Reno, and Salt Lake City. Whether your project is in a major metro or a rural greenfield site, our nationwide network ensures talent availability where you need it.",
  },
  {
    question:
      "What makes Data Center TALNT different from other staffing agencies?",
    answer:
      "Unlike generalist staffing firms, Data Center TALNT focuses exclusively on data center, mission critical, construction, and utilities sectors. Our recruiters understand Tier classifications, commissioning protocols, MEP system design, and the safety standards that govern critical facility construction. This deep domain expertise means shorter time-to-fill, higher candidate quality, and better retention rates\u2014our placed professionals have a 98% retention rate through their first year.",
  },
  {
    question: "How do you vet and qualify candidates?",
    answer:
      "Every candidate in our network undergoes a rigorous screening process that includes technical interviews with industry-experienced recruiters, verification of certifications and licenses (PMP, CxA, PE, OSHA, NETA, LEED), reference checks with previous supervisors, background checks, and a review of their project portfolio. We confirm hands-on experience with the specific facility types, systems, and tools your projects require.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page Component                                                            */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <SchemaScript
        schema={[generateOrganizationSchema(), generateFAQSchema(faqs)]}
      />

      {/* ------------------------------------------------------------------ */}
      {/*  Hero Section                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section aria-label="Hero" className="bg-navy text-white">
        <div className="container-page py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl text-balance">
              Data Center &amp; Mission Critical Staffing Experts
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl lg:max-w-2xl">
              Data Center TALNT is a specialized staffing and recruitment firm
              that connects top-tier talent with the companies building and
              operating America&rsquo;s critical infrastructure. From data center
              construction and MEP engineering to project management and
              commissioning, we deliver pre-vetted professionals who keep mission
              critical projects on schedule and on budget.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/employers" variant="primary" size="lg">
                Find Talent
              </Button>
              <Button
                href="/jobs"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:border-white hover:bg-white/10 hover:text-white"
              >
                View Open Roles
              </Button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/15 pt-10 sm:grid-cols-4">
            {[
              { value: "500+", label: "Placements" },
              { value: "50 States", label: "Nationwide Coverage" },
              { value: "24hr", label: "Response Time" },
              { value: "98%", label: "Retention Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-green-light md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Industries We Serve                                                */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-labelledby="industries-heading"
        className="bg-gray-50 py-20 md:py-28"
      >
        <div className="container-page">
          <SectionHeading
            title="Industries We Serve"
            subtitle="We specialize in staffing for the sectors that keep critical infrastructure running. Our recruiters understand the unique demands of each industry."
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <article
                key={industry.slug}
                className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-green/10 text-green">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy">
                  {industry.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {industry.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-green transition-colors group-hover:text-green-dark"
                  >
                    Learn More <span aria-hidden="true">&rarr;</span>
                    {/* Stretch link to cover entire card */}
                    <span className="absolute inset-0" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Roles We Place                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-labelledby="roles-heading"
        className="bg-white py-20 md:py-28"
      >
        <div className="container-page">
          <SectionHeading
            title="Roles We Place"
            subtitle="From field leadership to technical specialists, we recruit the professionals that data center and mission critical projects depend on."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <Link
                key={role.slug}
                href={`/roles/${role.slug}`}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-navy group-hover:text-green transition-colors duration-200">
                  {role.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {role.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-dark">
                  <span aria-label="Salary range">{role.salary}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Why Choose DC TALNT                                                */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-labelledby="why-heading"
        className="bg-navy text-white py-20 md:py-28"
      >
        <div className="container-page">
          <div className="text-center mb-10 md:mb-14">
            <h2
              id="why-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance"
            >
              Why Choose Data Center TALNT
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              We are not a generalist agency. Our entire operation is built
              around the data center, mission critical, construction, and
              utilities sectors.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-xl bg-white/10 text-green-light">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Top Markets                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-labelledby="markets-heading"
        className="bg-gray-50 py-20 md:py-28"
      >
        <div className="container-page">
          <SectionHeading
            title="Top Data Center Markets"
            subtitle="We maintain active talent pipelines in the markets experiencing the highest data center construction demand."
          />

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {topMarkets.map((market) => (
              <Link
                key={market.slug}
                href={`/locations/${market.slug}`}
                className="group rounded-lg border border-gray-200 bg-white px-5 py-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-navy group-hover:text-green transition-colors duration-200">
                  {market.city}
                </h3>
                <p className="text-sm text-gray-500">{market.state}</p>
                <p className="mt-2 text-xs leading-snug text-gray-400">
                  {market.stat}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  CTA Section                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section aria-label="Call to action" className="bg-green py-20 md:py-28">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Ready to Build Your Team?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Whether you need a single commissioning agent or an entire project
            team, Data Center TALNT delivers qualified, pre-vetted professionals
            fast. Tell us about your staffing needs and we&rsquo;ll have
            candidates in your inbox within 24 hours.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
            <Button
              href="/employers"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green"
            >
              Submit a Job Order
            </Button>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  FAQ Section                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-labelledby="faq-heading"
        className="bg-white py-20 md:py-28"
      >
        <div className="container-page">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about our data center and mission critical staffing services."
          />

          <div className="mx-auto max-w-3xl divide-y divide-gray-200">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-lg font-semibold text-navy transition-colors hover:text-green">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-gray-400 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
