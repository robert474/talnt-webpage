import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { SchemaScript, generateBreadcrumbSchema, generateFAQSchema, generateSpeakableSchema } from "@/lib/schema";
import Button from "@/components/ui/Button";

export const metadata = genMeta({
  title: "Exclusive Talent Network | Proprietary Candidate Database | Data Center TALNT",
  description:
    "DC TALNT's proprietary talent database spans 10+ years of data center and construction recruiting. Detailed interview notes on every candidate means we find people others can't — before they ever hit a job board.",
  path: "/talent-network",
  keywords: [
    "proprietary talent database",
    "exclusive candidate network",
    "data center talent pipeline",
    "construction candidate database",
    "passive candidate recruiting",
    "pre-screened construction talent",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const databaseAdvantages = [
  {
    stat: "10+",
    unit: "years",
    title: "A Decade of Intelligence",
    description:
      "Every interview, every placement, every reference call — logged, indexed, and searchable. When you need a commissioning agent who's led IST on Tier IV facilities in the Southwest, we don't search for one. We pull up the three we already know.",
  },
  {
    stat: "100%",
    unit: "",
    title: "Every Candidate, Documented",
    description:
      "We don't just collect resumes. Every candidate in our system has detailed interview notes, technical assessments, project history verification, and performance feedback from previous placements. We know who they are before they apply to your role.",
  },
  {
    stat: "70%",
    unit: "",
    title: "Passive Candidates",
    description:
      "The best data center construction professionals aren't on job boards — they're on a job site. Our database gives us direct access to passive candidates who aren't actively looking but will take the right call from a recruiter they already trust.",
  },
  {
    stat: "40+",
    unit: "markets",
    title: "Nationwide Depth",
    description:
      "Ashburn, Phoenix, Dallas, Chicago, Columbus, Portland — our database has deep candidate coverage in every top data center market and most of the emerging ones. When a new campus breaks ground, we already have talent mapped to that geography.",
  },
];

const whatWeTrack = [
  "Technical certifications and licenses (PMP, CxA, PE, NETA, OSHA)",
  "Specific data center tier and MW experience",
  "Project history with verified references",
  "Detailed interview notes from our recruiting team",
  "Compensation history and expectations",
  "Geographic preferences and relocation flexibility",
  "Performance feedback from previous placements",
  "Availability timeline and notice period",
];

const networkFaqs = [
  {
    question: "What is DC TALNT's talent database?",
    answer:
      "DC TALNT's proprietary talent database is a decade-long intelligence system containing detailed records on thousands of data center and construction professionals. Unlike resume databases that go stale, every candidate has logged interview notes, technical assessments, verified project history, and performance feedback from previous placements.",
  },
  {
    question: "How many candidates are in DC TALNT's network?",
    answer:
      "Our database spans 10+ years of specialized recruiting across 40+ U.S. markets. We have deep coverage in every top data center market including Northern Virginia, Phoenix, Dallas-Fort Worth, Chicago, Columbus, Atlanta, and Salt Lake City.",
  },
  {
    question: "What percentage of DC TALNT's candidates are passive candidates?",
    answer:
      "Approximately 70% of the candidates in our database are passive — meaning they're currently employed and not actively searching job boards. These professionals are reachable because our recruiters have built trusted relationships over years of working in the industry.",
  },
  {
    question: "What information does DC TALNT track on each candidate?",
    answer:
      "We track technical certifications and licenses (PMP, CxA, PE, NETA, OSHA), specific data center tier and MW experience, verified project history with references, detailed interview notes, compensation history and expectations, geographic preferences, performance feedback from placements, and availability timelines.",
  },
  {
    question: "How does DC TALNT find candidates that other agencies can't?",
    answer:
      "Most agencies search LinkedIn and job boards — the same pool everyone else is fishing in. Our 10+ year database gives us direct access to professionals who've been interviewed, assessed, and relationship-managed by our recruiters over time. When we need a senior superintendent with hyperscale experience, we're pulling up people we already know.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function TalentNetworkPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Talent Network", url: "/talent-network" },
  ];

  return (
    <>
      <SchemaScript schema={[generateBreadcrumbSchema(breadcrumbs), generateFAQSchema(networkFaqs), generateSpeakableSchema("/talent-network", ["[aria-labelledby]", ".prose-custom"])]} />

      {/* Hero */}
      <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-light">
            Our Talent Network
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            We Know About Candidates Before They Apply
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            10+ years of specialized data center and construction recruiting
            has built something you can&rsquo;t buy off the shelf — a
            proprietary database with detailed records on thousands of
            professionals, most of whom you&rsquo;ll never find on a job board.
          </p>
        </div>
      </section>

      {/* The Database Advantage */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              The Database Advantage
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Other staffing firms start each search from scratch. We start with
              a decade of intelligence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {databaseAdvantages.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
              >
                <p className="text-3xl font-bold text-blue">
                  {item.stat}
                  {item.unit && (
                    <span className="ml-1 text-base font-medium text-gray-400">
                      {item.unit}
                    </span>
                  )}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Side by Side */}
      <section className="bg-sky-50 py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Not a Resume Database. A Talent Intelligence System.
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Most staffing agencies maintain a pile of resumes that go stale
                in six months. Our system is different — it&rsquo;s a living
                record of every interaction our recruiters have had with every
                candidate over the past decade.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                That means when you call us looking for a senior superintendent
                with hyperscale experience in the Phoenix market, we&rsquo;re
                not running a keyword search. We&rsquo;re pulling up profiles
                with detailed interview notes, verified project histories, and
                real performance data from previous placements.
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-navy">
                  What We Track on Every Candidate
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {whatWeTrack.map((item) => (
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
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Data analytics and intelligence dashboard"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Hidden Talent */}
      <section className="bg-navy py-16 sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Finding Candidates Others Can&rsquo;t
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            The best project managers, commissioning agents, and MEP engineers
            in data center construction aren&rsquo;t scrolling job boards.
            They&rsquo;re on site, running a project, heads down. The only way
            to reach them is through a recruiter they already know and trust.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Our 10+ year database means we have existing relationships with
            thousands of these passive candidates. When the right opportunity
            comes along, they take our call — because we&rsquo;ve been a
            trusted partner throughout their career.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-10 divide-y divide-gray-200">
              {networkFaqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <h3 className="text-lg font-semibold text-navy">
                    {faq.question}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-16 sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tap Into Our Network
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Get access to candidates you won&rsquo;t find on job boards,
            LinkedIn, or with any other staffing agency. Our decade of
            recruiting intelligence is your competitive advantage.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Submit a Job Order
            </Button>
            <Button
              href="/employers"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue"
            >
              How We Work With Employers
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
