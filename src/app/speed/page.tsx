import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/metadata";
import {
  SchemaScript,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateHowToSchema,
  generateClaimSchema,
  generateSpeakableSchema,
} from "@/lib/schema";
import type { ClaimData, HowToData } from "@/lib/schema";
import Button from "@/components/ui/Button";

export const metadata = genMeta({
  title: "Speed and Execution | 40-Day Placements | Data Center TALNT",
  description:
    "The data center industry averages 126 days to fill a role. DC TALNT does it in 40. See how our pre-vetted talent pipeline and industry-focused recruiters cut hiring timelines by 68% without sacrificing quality.",
  path: "/speed",
  keywords: [
    "fast data center hiring",
    "speed to hire staffing",
    "reduce time to fill construction",
    "data center recruitment speed",
    "40 day placement staffing",
    "fast construction staffing",
    "quick MEP engineer hiring",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const painPoints = [
  {
    stat: "$15,000+",
    label: "per week",
    description:
      "That's what an unfilled project manager position costs in schedule delays, idle crews, and contractor penalties. Multiply that by 126 days and you're looking at a quarter-million-dollar problem.",
  },
  {
    stat: "340,000",
    label: "unfilled positions",
    description:
      "The BLS projects 340,000 unfilled construction positions by end of 2026. Every open req is competing with thousands of others for the same shrinking talent pool.",
  },
  {
    stat: "82%",
    label: "of firms struggling",
    description:
      "According to the AGC, 82% of construction firms report difficulty filling positions — the highest level in three years. The old playbook of posting and praying doesn't work anymore.",
  },
  {
    stat: "23,000",
    label: "retiring annually",
    description:
      "Experienced workers are leaving the industry faster than new ones are entering. Every year, 23,000 seasoned professionals retire, taking decades of institutional knowledge with them.",
  },
];

const monthlyData = [
  { month: "Jan '25", days: 67 },
  { month: "Feb", days: 58 },
  { month: "Mar", days: 62 },
  { month: "Apr", days: 53 },
  { month: "May", days: 55 },
  { month: "Jun", days: 57 },
  { month: "Jul", days: 38 },
  { month: "Aug", days: 41 },
  { month: "Sep", days: 45 },
  { month: "Oct", days: 51 },
  { month: "Nov", days: 43 },
  { month: "Dec", days: 49 },
  { month: "Jan '26", days: 51 },
];

const INDUSTRY_AVG = 126;
const CHART_MAX = 140; // ceiling for bar scaling

const howWeDoIt = [
  {
    title: "Live Talent Pipeline",
    description:
      "We don't start recruiting when you call. We maintain an active, pre-screened pipeline of data center and construction professionals across every major market. When you need someone, we already know who's available.",
  },
  {
    title: "Industry-Specialist Recruiters",
    description:
      "Our recruiters have direct experience in data center construction. They can vet a commissioning agent's technical skills in a 15-minute call — saving you weeks of screening candidates who look good on paper but can't perform on site.",
  },
  {
    title: "48-Hour First Shortlist",
    description:
      "Within two business days of receiving your job order, you have a shortlist of technically screened, reference-checked candidates matched to your specific project requirements. No filler resumes.",
  },
  {
    title: "Streamlined Hiring Process",
    description:
      "We handle the heavy lifting — scheduling interviews, coordinating feedback, managing counteroffers, processing onboarding paperwork. Your hiring manager spends 30 minutes reviewing candidates, not 30 hours managing a search.",
  },
];

const speedHowTo: HowToData = {
  name: "How DC TALNT Fills Data Center Roles in 40 Days",
  description:
    "Our four-step process for filling data center construction positions 68% faster than the industry average.",
  totalTime: "P40D",
  steps: [
    {
      name: "Receive Job Order and Post Immediately",
      text: "We receive your job order and post it across targeted channels within hours, not days. Our existing talent database is searched simultaneously for pre-qualified matches.",
    },
    {
      name: "Screen and Submit Qualified Candidates",
      text: "Within 24-48 hours, our industry-veteran recruiters screen candidates against your specific requirements — Tier level experience, certifications, market knowledge — and submit a shortlist.",
    },
    {
      name: "Coordinate Interviews and Negotiate Offers",
      text: "We handle all scheduling, prep candidates on your project specifics, gather feedback in real time, and negotiate competitive offers that close.",
    },
    {
      name: "Onboard and Ensure Retention",
      text: "Post-placement, we check in at 30, 60, and 90 days to ensure fit and address any issues early, achieving a 96% first-year retention rate.",
    },
  ],
};

const speedClaims: ClaimData[] = [
  {
    claimText:
      "The data center construction industry averages 126 days to fill a role.",
    source: "The Birm Group",
    sourceUrl:
      "https://thebirmgroup.com/the-data-center-construction-boom-hiring-surge-in-2026/",
    datePublished: "2026-01-15",
  },
  {
    claimText:
      "DC TALNT achieves an average time-to-fill of 40 days, 68% faster than industry average.",
    source: "Data Center TALNT Internal Data",
  },
  {
    claimText:
      "Each week a data center construction role goes unfilled costs employers $15,000 or more in project delays.",
    source: "Data Center TALNT Analysis",
  },
];

const speedFaqs = [
  {
    question: "How fast can DC TALNT fill a data center construction role?",
    answer:
      "Our average time to fill is 40 days — 68% faster than the industry average of 126 days. Most clients receive their first shortlist of technically screened, reference-checked candidates within 48 hours of submitting a job order.",
  },
  {
    question: "What is the industry average time to hire for data center construction?",
    answer:
      "According to The Birm Group's 2026 analysis, the average time to fill a data center construction role is 126 days (over 4 months). This accounts for the highly specialized skills, limited talent pool, and intense market competition for qualified professionals.",
  },
  {
    question: "How much does an unfilled construction role cost per week?",
    answer:
      "An unfilled project manager or QA/QC inspector position costs approximately $15,000+ per week in schedule delays, idle crew costs, and contractor penalties. Over the 126-day industry average, that totals over $250,000 in lost productivity per vacancy.",
  },
  {
    question: "Why is hiring for data center construction so slow?",
    answer:
      "Three factors drive slow hiring: 82% of construction firms report difficulty filling positions (AGC data), the BLS projects 340,000 unfilled construction positions by end of 2026, and 23,000 experienced workers retire annually. The specialized skills required for data center construction further limit the candidate pool.",
  },
  {
    question: "How does DC TALNT achieve faster placements?",
    answer:
      "We maintain a pre-vetted, active pipeline of data center and construction professionals. Our 15+ year veteran recruiters have deep industry networks, our proprietary database spans 10+ years of candidate intelligence, and our technology stack eliminates manual bottlenecks in job posting, screening, and scheduling.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function SpeedPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Speed and Execution", url: "/speed" },
  ];

  return (
    <>
      <SchemaScript
        schema={[
          generateBreadcrumbSchema(breadcrumbs),
          generateFAQSchema(speedFaqs),
          generateHowToSchema(speedHowTo),
          ...generateClaimSchema(speedClaims),
          generateSpeakableSchema("/speed", ["[aria-labelledby='speed-heading']", ".prose-custom"]),
        ]}
      />

      {/* Hero — The Big Number */}
      <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
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
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-light">
            Speed and Execution
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            The Industry Takes{" "}
            <a
              href="https://thebirmgroup.com/the-data-center-construction-boom-hiring-surge-in-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-500 hover:decoration-blue-light transition-colors"
            >
              126 Days
            </a>{" "}
            to Fill a Role.
            <br />
            <span className="text-blue-light">We Take 40.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            While your competitors wait four months for a qualified
            commissioning agent or project manager, your project is already
            staffed and moving. That&rsquo;s a 68% faster time-to-fill — and
            it&rsquo;s not a best case. It&rsquo;s our average.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500">
            Source:{" "}
            <a
              href="https://thebirmgroup.com/the-data-center-construction-boom-hiring-surge-in-2026/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-light transition-colors"
            >
              The Birm Group — Data Center Construction Boom &amp; Hiring Surge in 2026
            </a>
          </p>
        </div>
      </section>

      {/* Visual Comparison */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-navy sm:text-3xl">
              See the Difference
            </h2>
            <p className="mt-3 text-center text-gray-600">
              Average days from job order to accepted offer, based on industry
              data and our placement records.
            </p>

            {/* Industry Average Bar */}
            <div className="mt-12 space-y-8">
              <div>
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-medium text-gray-500">
                    Industry Average
                  </p>
                  <p className="text-2xl font-bold text-gray-400">126 days</p>
                </div>
                <div className="mt-2 h-10 w-full rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="flex h-full items-center justify-end rounded-full bg-gray-300 pr-4"
                    style={{ width: "100%" }}
                  >
                    <span className="text-xs font-semibold text-gray-600">
                      4.2 months
                    </span>
                  </div>
                </div>
              </div>

              {/* DC TALNT Bar */}
              <div>
                <div className="flex items-baseline justify-between">
                  <p className="text-sm font-semibold text-navy">
                    Data Center TALNT
                  </p>
                  <p className="text-3xl font-bold text-blue">40 days</p>
                </div>
                <div className="mt-2 h-10 w-full rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="flex h-full items-center justify-end rounded-full bg-blue pr-4"
                    style={{ width: "31.7%" }}
                  >
                    <span className="text-xs font-semibold text-white">
                      40d
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Savings callout */}
            <div className="mt-10 rounded-xl border-2 border-blue/20 bg-blue/5 p-6 text-center">
              <p className="text-4xl font-bold text-blue sm:text-5xl">
                86 days saved
              </p>
              <p className="mt-2 text-gray-600">
                That&rsquo;s nearly three months of schedule risk, cost overruns,
                and lost productivity eliminated from every hire.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Bar Chart */}
      <section className="bg-sky-50 py-16 sm:py-24">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              Our Track Record — Month by Month
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Average days to fill across the past 13 months. The red line is
              the industry average. The blue bars are us.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            {/* Chart container */}
            <div className="relative">
              {/* Y-axis labels */}
              <div className="absolute -left-2 top-0 bottom-8 flex flex-col justify-between text-right sm:-left-8">
                {[140, 126, 100, 75, 50, 25, 0].map((val) => (
                  <span
                    key={val}
                    className={`text-[10px] sm:text-xs ${
                      val === 126 ? "font-bold text-red-500" : "text-gray-400"
                    }`}
                  >
                    {val === 126 ? "126" : val}
                  </span>
                ))}
              </div>

              {/* Chart area */}
              <div className="ml-6 sm:ml-10">
                {/* Industry average line */}
                <div
                  className="absolute left-6 right-0 sm:left-10 border-t-2 border-dashed border-red-400 z-10"
                  style={{ top: `${((CHART_MAX - INDUSTRY_AVG) / CHART_MAX) * 100}%` }}
                >
                  <span className="absolute -top-5 right-0 rounded bg-red-500 px-2 py-0.5 text-[10px] font-bold text-white sm:text-xs">
                    Industry Avg: 126 days
                  </span>
                </div>

                {/* Bars */}
                <div className="relative flex items-end gap-1.5 sm:gap-2" style={{ height: "320px" }}>
                  {monthlyData.map((item) => {
                    const heightPct = (item.days / CHART_MAX) * 100;
                    return (
                      <div
                        key={item.month}
                        className="group relative flex flex-1 flex-col items-center"
                        style={{ height: "100%" }}
                      >
                        {/* Tooltip */}
                        <div className="pointer-events-none absolute bottom-full mb-2 rounded bg-navy px-2 py-1 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 whitespace-nowrap z-20">
                          {item.days} days
                        </div>

                        {/* Bar wrapper - full height, bar grows from bottom */}
                        <div className="flex h-full w-full items-end">
                          <div
                            className="w-full rounded-t bg-blue transition-all duration-300 hover:bg-blue-dark"
                            style={{ height: `${heightPct}%` }}
                          />
                        </div>

                        {/* Day count on bar */}
                        <span
                          className="absolute text-[9px] font-bold text-white sm:text-[10px]"
                          style={{ bottom: `${heightPct - 5}%` }}
                        >
                          {item.days}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* X-axis labels */}
                <div className="mt-2 flex gap-1.5 sm:gap-2">
                  {monthlyData.map((item) => (
                    <div key={item.month} className="flex-1 text-center">
                      <span className="text-[8px] leading-tight text-gray-500 sm:text-[10px]">
                        {item.month}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-6 rounded bg-blue" />
                <span className="text-gray-600">DC TALNT Days to Fill</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-6 border-t-2 border-dashed border-red-400" />
                <span className="text-gray-600">Industry Average (126 days)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Cost of Waiting */}
      <section className="bg-navy py-16 sm:py-24">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              The Cost of Waiting
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-300">
              Every day a critical role sits open, your project absorbs the hit.
              Here&rsquo;s what the numbers look like in 2026.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((point) => (
              <div
                key={point.label}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-3xl font-bold text-blue-light">
                  {point.stat}
                </p>
                <p className="text-sm font-medium text-gray-400">
                  {point.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-56 overflow-hidden sm:h-72 lg:h-80">
        <Image
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2400&q=80"
          alt="Electrical infrastructure inside a data center facility"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container-page">
            <p className="max-w-lg text-2xl font-bold leading-tight text-white sm:text-3xl drop-shadow-lg">
              127 new hyperscale facilities planned for 2026. Each one needs
              850+ construction workers. The talent war is real.
            </p>
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              How We Move This Fast
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Speed without quality is just a faster way to make a bad hire.
              Here&rsquo;s how we deliver both.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {howWeDoIt.map((item, idx) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue/10">
                  <span className="text-lg font-bold text-blue">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Points */}
      <section className="bg-sky-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "40", unit: "days", label: "Avg. Time to Fill" },
              { value: "48", unit: "hrs", label: "First Shortlist" },
              { value: "96%", unit: "", label: "Retention Rate" },
              { value: "68%", unit: "", label: "Faster Than Average" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-navy sm:text-5xl">
                  {stat.value}
                  {stat.unit && (
                    <span className="ml-1 text-lg font-medium text-blue">
                      {stat.unit}
                    </span>
                  )}
                </p>
                <p className="mt-2 text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
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
              {speedFaqs.map((faq) => (
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
            Stop Losing Time. Start Building.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Tell us what you need. Most clients have their first vetted
            shortlist within 48 hours — and a hired candidate on site within
            40 days.
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
