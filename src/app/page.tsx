import Link from "next/link";
import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/metadata";
import {
  generateOrganizationSchema,
  generateFAQSchema,
  generateItemListSchema,
  generateClaimSchema,
  generateSpeakableSchema,
  SchemaScript,
  type FAQItem,
} from "@/lib/schema";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimatedHero from "@/components/ui/AnimatedHero";
import USMarketMap from "@/components/ui/USMarketMap";

/* -------------------------------------------------------------------------- */
/*  SEO Metadata                                                              */
/* -------------------------------------------------------------------------- */

export const metadata = genMeta({
  title:
    "Data Center TALNT | Data Center & Mission Critical Staffing Experts",
  description:
    "Data Center TALNT is a nationwide staffing and recruitment firm specializing in data center construction, mission critical facilities, MEP engineering, and utilities talent. We place project managers, QA/QC inspectors, commissioning agents, and more across all 50 states.",
  path: "/",
  keywords: [
    "data center staffing agency",
    "mission critical staffing",
    "data center construction recruitment",
    "MEP engineer staffing",
    "commissioning agent recruitment",
    "data center project manager jobs",
    "construction QA/QC inspector staffing",
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
      "The crews pouring foundations in Ashburn this morning need a PM who's delivered 60MW before. We find that person — along with the electricians, commissioning agents, and MEP leads who keep hyperscale builds on schedule.",
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
      "When a hospital can't lose power and a trading floor can't afford a blink, the people maintaining those systems had better know what they're doing. We make sure they do.",
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
      "Ground-up builds don't wait for candidates to update their resumes. We keep a bench of QA/QC inspectors, schedulers, and safety pros ready to mobilize when you need boots on the ground.",
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
      "Substations, T&D lines, solar farms, battery storage — the grid is getting a massive upgrade. We recruit the relay techs, lineworkers, and power engineers making it happen.",
  },
];

const roles = [
  {
    slug: "project-managers",
    title: "Project Managers",
    description:
      "The person who keeps a $300M build from going sideways. We place PMs who've delivered hyperscale campuses, not ones still learning what IST means.",
    salary: "$110K \u2013 $180K",
  },
  {
    slug: "construction-managers",
    title: "Construction Managers",
    description:
      "First on site, last to leave. Our CMs manage 20+ trades at once and know how to keep a data center build moving without cutting corners.",
    salary: "$120K \u2013 $190K",
  },
  {
    slug: "mep-engineers",
    title: "MEP Engineers",
    description:
      "The people who design the guts of the building — power distribution, cooling plants, fire suppression. If the PUE target matters to you, these hires matter more.",
    salary: "$100K \u2013 $165K",
  },
  {
    slug: "schedulers",
    title: "Schedulers & Planners",
    description:
      "Primavera P6 experts who actually understand data center construction sequences. They'll tell you where your schedule is going to slip before it does.",
    salary: "$90K \u2013 $140K",
  },
  {
    slug: "qa-qc-inspectors",
    title: "QA/QC Inspectors",
    description:
      "The quality gatekeepers who catch deficiencies before systems get energized. CWI, NETA, and ACI-certified pros who know what zero-defect means on a data center build.",
    salary: "$80K \u2013 $140K",
  },
  {
    slug: "commissioning-agents",
    title: "Commissioning Agents",
    description:
      "The last line of defense before your facility goes live. CxA-certified professionals who've led IST events on Tier III and Tier IV data centers.",
    salary: "$105K \u2013 $160K",
  },
] as const;

const topMarkets = [
  {
    slug: "northern-virginia",
    city: "Northern Virginia",
    state: "Virginia",
    stat: "Largest data center market globally",
  },
  {
    slug: "dallas-fort-worth",
    city: "Dallas-Fort Worth",
    state: "Texas",
    stat: "Fastest-growing capacity in the South",
  },
  {
    slug: "phoenix",
    city: "Phoenix",
    state: "Arizona",
    stat: "Major hyperscale expansion hub",
  },
  {
    slug: "chicago",
    city: "Chicago",
    state: "Illinois",
    stat: "Central U.S. network interconnection hub",
  },
  {
    slug: "silicon-valley",
    city: "Silicon Valley",
    state: "California",
    stat: "Heart of tech-driven data demand",
  },
  {
    slug: "atlanta",
    city: "Atlanta",
    state: "Georgia",
    stat: "Southeast\u2019s premier connectivity market",
  },
  {
    slug: "portland-oregon",
    city: "Portland",
    state: "Oregon",
    stat: "Low-cost power and fiber-rich region",
  },
  {
    slug: "columbus-ohio",
    city: "Columbus",
    state: "Ohio",
    stat: "Emerging Midwest data center corridor",
  },
  {
    slug: "reno",
    city: "Reno",
    state: "Nevada",
    stat: "Growing hyperscale destination",
  },
  {
    slug: "salt-lake-city",
    city: "Salt Lake City",
    state: "Utah",
    stat: "Mountain West expansion market",
  },
] as const;

const INDUSTRY_AVG = 126;

const faqs: FAQItem[] = [
  {
    question: "What types of data center roles do you staff?",
    answer:
      "Data Center TALNT staffs a comprehensive range of data center and mission critical roles including project managers, construction managers, MEP engineers (mechanical, electrical, and plumbing), QA/QC inspectors, commissioning agents, schedulers, safety managers, and BIM coordinators. We cover every phase from pre-construction and design through commissioning and turnover for Tier I through Tier IV facilities.",
  },
  {
    question: "How quickly can you fill a data center construction position?",
    answer:
      "We target delivering pre-vetted, qualified candidate submittals within 48 hours of receiving a job order. Our growing talent network of data center and mission critical professionals enables faster response times than generalist agencies. For contract positions, candidates can often mobilize within days to two weeks. Direct-hire searches typically close in three to six weeks depending on role seniority and location.",
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
      "We serve clients across all 50 United States with concentrated expertise in the top data center markets: Northern Virginia (Ashburn), Dallas-Fort Worth, Phoenix, Chicago, Silicon Valley, Atlanta, Portland, Columbus, Reno, and Salt Lake City. Whether your project is in a major metro or a rural bluefield site, our nationwide network ensures talent availability where you need it.",
  },
  {
    question:
      "What makes Data Center TALNT different from other staffing agencies?",
    answer:
      "Unlike generalist staffing firms, Data Center TALNT focuses exclusively on data center, mission critical, construction, and utilities sectors. Our recruiters come from deep backgrounds in technical recruiting at companies like Apple, Rackspace, and Aerotek, and they understand the certifications, project types, and safety standards that matter in this industry. This focused expertise means shorter time-to-fill and higher candidate quality.",
  },
  {
    question: "How do you vet and qualify candidates?",
    answer:
      "Every candidate we submit undergoes a thorough screening process that includes technical interviews with experienced recruiters, verification of certifications and licenses (PMP, CxA, PE, OSHA, NETA, LEED), reference checks with previous supervisors, and a review of their project history. We confirm hands-on experience with the specific facility types, systems, and tools your projects require.",
  },
];

const rolesItemList = {
  name: "Data Center Construction Roles We Place",
  description: "Specialized data center and mission critical facility roles staffed by Data Center TALNT.",
  items: roles.map((r) => ({
    name: r.title,
    url: `/roles/${r.slug}`,
    description: r.description,
  })),
};

const marketsItemList = {
  name: "Top Data Center Markets in the United States",
  description: "The top 10 U.S. markets for data center construction activity and talent demand.",
  items: topMarkets.map((m) => ({
    name: `${m.city}, ${m.state}`,
    url: `/locations/${m.slug}`,
    description: m.stat,
  })),
};

const homeClaims = [
  { claimText: "DC TALNT targets first candidate shortlists within 48 hours of receiving a job order.", source: "Data Center TALNT" },
  { claimText: "The data center construction industry averages 126 days to fill a role.", source: "The Birm Group", sourceUrl: "https://thebirmgroup.com/the-data-center-construction-boom-hiring-surge-in-2026/" },
  { claimText: "DC TALNT offers contract, contract-to-hire, and direct placement staffing for data center construction roles.", source: "Data Center TALNT" },
];

/* -------------------------------------------------------------------------- */
/*  Page Component                                                            */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <SchemaScript
        schema={[
          generateOrganizationSchema(),
          generateFAQSchema(faqs),
          generateItemListSchema(rolesItemList),
          generateItemListSchema(marketsItemList),
          ...generateClaimSchema(homeClaims),
          generateSpeakableSchema("/", ["[aria-labelledby='why-heading']", "[aria-labelledby='roles-heading']", "[aria-labelledby='faq-heading']"]),
        ]}
      />

      {/* ------------------------------------------------------------------ */}
      {/*  Hero Section — Animated Drone Shot                                 */}
      {/* ------------------------------------------------------------------ */}
      <AnimatedHero
        imageUrl="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80"
        title={
          <>
            We Staff the Teams That Build{" "}
            <span className="text-blue-light">America&rsquo;s Data Centers</span>
          </>
        }
        subtitle="Your next hyperscale campus needs people who've done it before. DC TALNT places project managers, MEP engineers, QA/QC inspectors, and commissioning agents on mission critical builds from Ashburn to Phoenix — and everywhere the concrete is still curing."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="/employers" variant="primary" size="lg">
            Hire for Your Next Build
          </Button>
          <Button
            href="/jobs"
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:border-white hover:bg-white/10 hover:text-white"
          >
            Browse Open Roles
          </Button>
        </div>

        {/* Stats Bar */}
        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4">
          {[
            { value: "50+", label: "Yrs Combined Experience" },
            { value: "20+", label: "Markets Covered" },
            { value: "48hr", label: "First Shortlist Target" },
            { value: "4", label: "Industry Verticals" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-blue-light md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-gray-300/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </AnimatedHero>

      {/* ------------------------------------------------------------------ */}
      {/*  Hyperscaler Logo Bar                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-12 sm:py-16 border-b border-gray-100">
        <div className="container-page">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            Our Talent Builds for the World&rsquo;s Leading Hyperscalers
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-10 sm:gap-x-20 lg:gap-x-28">
            {[
              { name: "Amazon Web Services", src: "/images/logos/aws.svg", width: 160, height: 80 },
              { name: "OpenAI", src: "/images/logos/OpenAI_Wordmark_Gif.webp", width: 260, height: 80 },
              { name: "Oracle", src: "/images/logos/Oracle_ideA555_no_0.svg", width: 240, height: 80 },
            ].map((logo) => (
              <Link key={logo.name} href="/industries/hyperscalers" className="transition-opacity hover:opacity-70">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-14 w-auto sm:h-16 lg:h-20 object-contain"
                />
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/industries/hyperscalers"
              className="inline-flex items-center gap-1 text-sm font-semibold text-blue hover:text-blue-dark transition-colors"
            >
              See How We Staff Hyperscale Projects <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Three Differentiators — Why DC TALNT                               */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-labelledby="why-heading"
        className="bg-gray-50 py-20 md:py-28"
      >
        <div className="container-page">
          <div className="text-center mb-10 md:mb-14">
            <h2
              id="why-heading"
              className="text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl text-balance"
            >
              Why Data Center TALNT
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              Three things separate us from every other staffing agency in this
              space. And they&rsquo;re not things you can spin up overnight.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Card 1 — Veteran Recruiters */}
            <Link
              href="/veteran-recruiters"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80"
                  alt="Experienced professionals on a construction site"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue">
                  Our Recruiters
                </p>
                <h3 className="mt-2 text-2xl font-bold text-navy">Veteran Recruiters</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  Our team brings decades of combined recruiting experience from
                  companies like Apple, Rackspace, Aerotek, and Duo Security.
                  They know how to screen for real project experience — not just
                  keywords on a resume.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue group-hover:gap-2 transition-all">
                  Learn More <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>

            {/* Card 2 — Talent Network */}
            <Link
              href="/talent-network"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
                  alt="Server room representing data and intelligence"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue">
                  Our Database
                </p>
                <h3 className="mt-2 text-2xl font-bold text-navy">Data-Driven Recruiting</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  Every interview, every screening call, every reference —
                  logged and searchable. Our growing database of candidate
                  intelligence helps us find people that other agencies
                  can&rsquo;t.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue group-hover:gap-2 transition-all">
                  Learn More <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>

            {/* Card 3 — Technology */}
            <Link
              href="/technology"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80"
                  alt="Advanced industrial systems and technology"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue">
                  Our Systems
                </p>
                <h3 className="mt-2 text-2xl font-bold text-navy">Built for Speed</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  Job posts in minutes. Candidate shortlists in hours. Our tech
                  stack eliminates the bottlenecks that make traditional staffing
                  agencies slow — whether you need a contract hire this week or a
                  direct placement next month.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue group-hover:gap-2 transition-all">
                  Learn More <span aria-hidden="true">&rarr;</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Image Break — "The Right People"                                   */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative h-64 overflow-hidden sm:h-80 lg:h-96">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80"
          alt="Construction crew working on a large-scale building project at sunrise"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container-page">
            <p className="max-w-lg text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl drop-shadow-lg">
              The right people make the difference between a project that
              delivers and one that doesn&rsquo;t.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Speed and Execution — Explanation + Chart                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            {/* Left — Explanation */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue">
                Speed and Execution
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
                <a
                  href="https://thebirmgroup.com/the-data-center-construction-boom-hiring-surge-in-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 line-through decoration-gray-400 hover:text-gray-500 transition-colors"
                >
                  126 days
                </a>
                {" "}
                <span className="text-blue">Weeks, not months.</span>
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-gray-600">
                The industry averages{" "}
                <a
                  href="https://thebirmgroup.com/the-data-center-construction-boom-hiring-surge-in-2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gray-400 hover:decoration-blue transition-colors"
                >
                  126 days
                </a>{" "}
                to fill a data center construction role. Our pre-screened pipeline
                and industry-focused recruiters cut that timeline dramatically —
                contract placements can mobilize in days, and direct-hire searches
                close in weeks instead of months.
              </p>

              {/* Quick stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "48hr", unit: "", label: "First Shortlist Target" },
                  { value: "Contract", unit: "", label: "Mobilize in Days" },
                  { value: "Direct", unit: "", label: "Weeks, Not Months" },
                  { value: "126", unit: "days", label: "Industry Average" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-navy sm:text-3xl">
                      {stat.value}
                      {stat.unit && (
                        <span className="ml-1 text-sm font-medium text-gray-400">
                          {stat.unit}
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button href="/speed" variant="primary" size="lg">
                  See the Full Breakdown
                </Button>
              </div>
            </div>

            {/* Right — Comparison Visual */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
              <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
                How We Cut the Timeline
              </h3>

              <div className="mt-8 space-y-8">
                {/* Industry Average Bar */}
                <div>
                  <div className="flex items-baseline justify-between">
                    <p className="text-sm font-medium text-gray-500">Industry Average</p>
                    <p className="text-2xl font-bold text-gray-400">126 days</p>
                  </div>
                  <div className="mt-2 h-10 w-full rounded-full bg-gray-100 overflow-hidden">
                    <div className="flex h-full items-center justify-end rounded-full bg-gray-300 pr-4" style={{ width: "100%" }}>
                      <span className="text-xs font-semibold text-gray-600">4.2 months</span>
                    </div>
                  </div>
                </div>

                {/* DC TALNT Contract Bar */}
                <div>
                  <div className="flex items-baseline justify-between">
                    <p className="text-sm font-semibold text-navy">DC TALNT — Contract</p>
                    <p className="text-2xl font-bold text-blue">Days to weeks</p>
                  </div>
                  <div className="mt-2 h-10 w-full rounded-full bg-gray-100 overflow-hidden">
                    <div className="flex h-full items-center justify-end rounded-full bg-blue pr-4" style={{ width: "12%" }}>
                    </div>
                  </div>
                </div>

                {/* DC TALNT Direct Hire Bar */}
                <div>
                  <div className="flex items-baseline justify-between">
                    <p className="text-sm font-semibold text-navy">DC TALNT — Direct Hire</p>
                    <p className="text-2xl font-bold text-blue">Weeks, not months</p>
                  </div>
                  <div className="mt-2 h-10 w-full rounded-full bg-gray-100 overflow-hidden">
                    <div className="flex h-full items-center justify-end rounded-full bg-blue-dark pr-4" style={{ width: "35%" }}>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout */}
              <div className="mt-8 rounded-xl border border-blue/20 bg-blue/5 p-4 text-center">
                <p className="text-sm text-gray-600">
                  Contract roles mobilize fast. Direct-hire searches close in weeks.
                  Either way, you&rsquo;re months ahead of the{" "}
                  <a
                    href="https://thebirmgroup.com/the-data-center-construction-boom-hiring-surge-in-2026/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue underline"
                  >
                    126-day industry average
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Industries We Serve                                                */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-labelledby="industries-heading"
        className="bg-navy py-20 md:py-28"
      >
        <div className="container-page">
          <div className="text-center mb-10 md:mb-14">
            <h2
              id="industries-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Industries We Serve
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Every sector we staff has one thing in common: there&rsquo;s no room
              for error. Here&rsquo;s where we focus our recruiting muscle.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <article
                key={industry.slug}
                className="group relative flex flex-col rounded-xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
              >
                <div className="mb-4 flex size-14 items-center justify-center rounded-xl bg-blue/20 text-blue-light">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {industry.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-300">
                  {industry.description}
                </p>
                <div className="mt-6">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-light transition-colors group-hover:text-white"
                  >
                    Learn More <span aria-hidden="true">&rarr;</span>
                    <span className="absolute inset-0" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Top Markets — Interactive Map                                      */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-labelledby="markets-heading"
        className="bg-white py-20 md:py-28"
      >
        <div className="container-page">
          <SectionHeading
            title="Top Data Center Markets"
            subtitle="We maintain active talent pipelines in the markets experiencing the highest data center construction demand. Hover over a pin to learn more."
          />

          <USMarketMap />

          {/* Quick-link grid below the map */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-5">
            {topMarkets.map((market) => (
              <Link
                key={market.slug}
                href={`/locations/${market.slug}`}
                className="group rounded-lg border border-gray-200 bg-white px-4 py-3 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-sm font-semibold text-navy group-hover:text-blue transition-colors duration-200">
                  {market.city}
                </h3>
                <p className="text-xs text-gray-500">{market.state}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Roles We Place                                                     */}
      {/* ------------------------------------------------------------------ */}
      <section
        aria-labelledby="roles-heading"
        className="bg-sky-50 py-20 md:py-28"
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
                <h3 className="text-lg font-semibold text-navy group-hover:text-blue transition-colors duration-200">
                  {role.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {role.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-dark">
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
      {/*  CTA Section                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section aria-label="Call to action" className="bg-blue py-20 md:py-28">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
            Your Next Project Won&rsquo;t Staff Itself
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            One commissioning agent or a full project team — tell us what you
            need and we&rsquo;ll get to work immediately. No long intake meetings.
            No generic resumes. Just people who&rsquo;ve built exactly what
            you&rsquo;re building.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
            <Button
              href="/employers"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue"
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
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-lg font-semibold text-navy transition-colors hover:text-blue">
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
