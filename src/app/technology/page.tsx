import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { SchemaScript, generateBreadcrumbSchema, generateFAQSchema, generateSpeakableSchema } from "@/lib/schema";
import Button from "@/components/ui/Button";

export const metadata = genMeta({
  title: "Speed Through Technology | Our Systems | Data Center TALNT",
  description:
    "Data Center TALNT's technology stack posts jobs in minutes, schedules interviews in hours, and accelerates placements dramatically. See how our systems eliminate the bottlenecks that slow traditional staffing agencies down.",
  path: "/technology",
  keywords: [
    "fast staffing technology",
    "recruiting technology platform",
    "speed to hire systems",
    "staffing automation",
    "fast candidate placement",
    "recruiting tech stack",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const timeline = [
  {
    time: "Minutes",
    title: "Job Posted and Distributed",
    description:
      "The moment we receive your job order, our system generates a targeted posting, pushes it to the right channels, and simultaneously searches our internal database for matching candidates. No manual data entry. No waiting for an account manager to circle back next week.",
  },
  {
    time: "Hours",
    title: "Candidates Screened and Scheduled",
    description:
      "Our recruiters get instant alerts when high-match candidates are identified. Technical screenings happen the same day. Interview scheduling is coordinated directly — no back-and-forth email chains dragging out over a week.",
  },
  {
    time: "Days",
    title: "Contract Placements Mobilized",
    description:
      "For contract roles, pre-vetted candidates with verified credentials mean the path from first call to boots on the ground takes days, not weeks. For direct-hire searches, our streamlined feedback loops close positions in weeks, not the months most firms take. We handle comp negotiation, counteroffer management, and onboarding paperwork so nothing stalls.",
  },
];

const bottlenecks = [
  {
    problem: "Manual job posting across multiple boards",
    solution: "Automated distribution in minutes",
  },
  {
    problem: "Searching for candidates from scratch every time",
    solution: "Instant matching against our growing database",
  },
  {
    problem: "Days of email tag to schedule one interview",
    solution: "Same-day scheduling and coordination",
  },
  {
    problem: "Waiting weeks for reference checks",
    solution: "Pre-verified candidates with references on file",
  },
  {
    problem: "Lost candidates during slow offer processes",
    solution: "Streamlined approvals and same-week offers",
  },
  {
    problem: "Onboarding paperwork bottlenecks",
    solution: "Digital onboarding ready before day one",
  },
];

const techFaqs = [
  {
    question: "How quickly does Data Center TALNT post and distribute job orders?",
    answer:
      "Within minutes. The moment we receive your job order, our system generates a targeted posting, pushes it to relevant channels, and simultaneously searches our internal database for matching candidates. There's no manual data entry or waiting for an account manager.",
  },
  {
    question: "How long does candidate screening take at Data Center TALNT?",
    answer:
      "Technical screenings happen within hours — the same day we identify matching candidates. Our recruiters get instant alerts when high-match candidates are identified, and interview scheduling is coordinated directly without email back-and-forth.",
  },
  {
    question: "What bottlenecks does Data Center TALNT's technology eliminate?",
    answer:
      "Our tech stack eliminates six common bottlenecks: manual job posting across multiple boards (automated in minutes), searching for candidates from scratch (instant matching against our growing database), days of email tag for scheduling (same-day coordination), weeks for reference checks (pre-verified candidates), slow offer processes (same-week offers), and onboarding paperwork delays (digital onboarding ready before day one).",
  },
  {
    question: "What is Data Center TALNT's average time from job order to hire?",
    answer:
      "We dramatically beat the industry average of 126 days to fill a role. Contract placements can mobilize in days, while direct-hire searches close in weeks, not months. The first shortlist of qualified candidates is typically delivered within 48 hours.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function TechnologyPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Technology", url: "/technology" },
  ];

  return (
    <>
      <SchemaScript schema={[generateBreadcrumbSchema(breadcrumbs), generateFAQSchema(techFaqs), generateSpeakableSchema("/technology", ["[aria-labelledby]", ".prose-custom"])]} />

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
        <div className="relative container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-light">
            Our Technology
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Jobs in Minutes. Interviews in Hours. Offers in Days.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Most staffing agencies are still running on spreadsheets and email
            chains. Our systems and tech stack are purpose-built to eliminate
            every bottleneck between your job order and a hired candidate on site.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              How Fast We Actually Move
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              From the moment you submit a job order to the day your new hire
              shows up on site — here&rsquo;s the timeline.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <div className="space-y-0">
              {timeline.map((step, idx) => (
                <div key={step.time} className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Vertical line */}
                  {idx < timeline.length - 1 && (
                    <div className="absolute left-[27px] top-14 bottom-0 w-0.5 bg-gray-200" />
                  )}

                  {/* Time badge */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue text-white">
                    <span className="text-xs font-bold uppercase">
                      {step.time}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-xl font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottlenecks We Eliminate */}
      <section className="bg-sky-50 py-16 sm:py-24">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Bottlenecks We Eliminate
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Traditional staffing is full of friction that adds days and weeks
              to every hire. Here&rsquo;s what our tech stack fixes.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bottlenecks.map((item) => (
              <div
                key={item.problem}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm text-gray-400 line-through">
                  {item.problem}
                </p>
                <p className="mt-2 font-semibold text-navy">
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-navy py-14 sm:py-16">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "Days", unit: "", label: "Contract Placement" },
              { value: "48", unit: "hrs", label: "First Shortlist" },
              { value: "Weeks", unit: "", label: "Direct-Hire Fill" },
              { value: "126", unit: "days", label: "Industry Average" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-blue-light sm:text-4xl">
                  {stat.value}
                  {stat.unit && (
                    <span className="ml-1 text-base font-medium text-gray-400">
                      {stat.unit}
                    </span>
                  )}
                </p>
                <p className="mt-1 text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-56 overflow-hidden sm:h-72 lg:h-80">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80"
          alt="Construction site with modern equipment"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container-page">
            <p className="max-w-lg text-2xl font-bold leading-tight text-white sm:text-3xl drop-shadow-lg">
              While other agencies are still writing job descriptions, your
              candidates are already interviewing.
            </p>
          </div>
        </div>
      </section>

      {/* Speed Page Link */}
      <section className="py-16 sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">
            The Result: Days and Weeks vs. 126
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            All of this technology and process adds up to dramatically
            faster hiring, compared to the industry
            average of{" "}
            <a
              href="https://thebirmgroup.com/the-data-center-construction-boom-hiring-surge-in-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-blue/30 hover:decoration-blue transition-colors"
            >
              126 days
            </a>
            . Contract placements mobilize in days. Direct-hire searches
            close in weeks. That&rsquo;s months of schedule risk
            eliminated on every hire.
          </p>
          <div className="mt-6">
            <Button href="/speed" variant="outline" size="lg">
              See the Full Speed Breakdown
            </Button>
          </div>
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
              {techFaqs.map((faq) => (
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
            Ready to Hire at a Different Speed?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Submit a job order and see what happens when your staffing partner
            has the systems to actually move. First shortlist in 48 hours.
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
              Learn How We Work
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
