import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { SchemaScript, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import Button from "@/components/ui/Button";

export const metadata = genMeta({
  title: "15+ Year Industry Veterans | Our Recruiters | Data Center TALNT",
  description:
    "DC TALNT recruiters average 15+ years in data center and construction staffing. Their deep networks and hands-on industry knowledge mean faster placements with candidates who actually fit.",
  path: "/veteran-recruiters",
  keywords: [
    "experienced construction recruiters",
    "data center staffing experts",
    "veteran industry recruiters",
    "construction hiring specialists",
    "mission critical recruiting team",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const recruiterEdge = [
  {
    title: "They've Walked the Job Sites",
    description:
      "Our recruiters haven't just read about data center construction — they've been on the ground. They've attended OAC meetings, observed commissioning events, and toured facilities mid-build. When a candidate says they've managed phased energization on a Tier IV facility, our team knows what questions to ask next.",
  },
  {
    title: "15+ Years of Relationships",
    description:
      "You can't fake a network that took 15 years to build. Our recruiters have placed hundreds of professionals across every major data center market. That means when we need a senior PM in Ashburn or a CxA lead in Phoenix, we're calling people we've worked with before — not cold-searching LinkedIn.",
  },
  {
    title: "They Know What Good Looks Like",
    description:
      "After thousands of placements, pattern recognition kicks in. Our team can spot the difference between a candidate who padded their resume and one who actually delivered a 60MW campus on schedule. That instinct saves you weeks of interviewing the wrong people.",
  },
  {
    title: "Trusted by Hiring Managers",
    description:
      "When our recruiters call a VP of Construction, that call gets returned — because there's a track record behind it. Years of delivering quality candidates builds the kind of trust that opens doors generalist agencies can't touch.",
  },
];

const stats = [
  { value: "15+", label: "Years Avg. Experience" },
  { value: "2,500+", label: "Placements Made" },
  { value: "96%", label: "Retention Rate" },
  { value: "40+", label: "States Covered" },
];

const recruiterFaqs = [
  {
    question: "How experienced are DC TALNT recruiters?",
    answer:
      "Every recruiter at DC TALNT averages more than 15 years of specialized experience in data center, mission critical, and construction staffing. They've made over 2,500 combined placements across 40+ states.",
  },
  {
    question: "Why does recruiter experience matter for data center hiring?",
    answer:
      "Data center construction requires specialized knowledge — Tier III/IV classifications, concurrent maintainability, IST protocols, and MEP coordination. Experienced recruiters can vet candidates' technical claims in a single call, saving weeks of interviewing unqualified candidates. They also have networks of passive candidates who won't respond to generic recruiters.",
  },
  {
    question: "What is DC TALNT's candidate retention rate?",
    answer:
      "Our first-year retention rate is 96%. This is because our experienced recruiters don't just match resumes to job descriptions — they assess cultural fit, project scope alignment, and long-term career goals to ensure placements that last.",
  },
  {
    question: "How is DC TALNT different from generalist staffing agencies?",
    answer:
      "Generalist agencies staff across every industry from admin to warehouse. DC TALNT exclusively focuses on data center, mission critical, and construction roles. Our recruiters understand ASHRAE standards, NCCER certifications, and the difference between a commissioning agent and a commissioning engineer — knowledge that generalist recruiters simply don't have.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function VeteranRecruitersPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Veteran Recruiters", url: "/veteran-recruiters" },
  ];

  return (
    <>
      <SchemaScript schema={[generateBreadcrumbSchema(breadcrumbs), generateFAQSchema(recruiterFaqs)]} />

      {/* Hero */}
      <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-light">
            Our Recruiters
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            15+ Year Veterans. Not Junior Sourcers.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Most staffing agencies hand your account to someone two years out of
            college with a LinkedIn Recruiter license. We hand it to someone
            who&rsquo;s been placing data center professionals since before
            hyperscale was a word.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue py-10 sm:py-12">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Experience You Can&rsquo;t Shortcut
              </h2>
              <div className="mt-6 space-y-5 text-gray-600 leading-relaxed">
                <p>
                  In data center construction, the difference between a good hire
                  and a bad one shows up on the schedule in week two. A PM who
                  doesn&rsquo;t understand clean build protocols costs you three
                  months. A commissioning agent who&rsquo;s never run IST on a
                  real Tier IV facility costs you a failed test and a delayed
                  turnover.
                </p>
                <p>
                  That&rsquo;s why our recruiting team isn&rsquo;t staffed with
                  generalists learning on the job. Every recruiter at DC TALNT
                  averages more than 15 years of specialized experience in data
                  center, mission critical, and construction staffing. They know
                  the technical language, the project lifecycle, the
                  certifications that matter, and — most importantly — the people.
                </p>
                <p>
                  When you work with us, your recruiter already has a shortlist
                  in their head before they hang up the phone. That&rsquo;s what
                  15 years of building relationships in a niche industry gets you.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Construction professionals reviewing plans on a job site"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Recruiter Edge */}
      <section className="bg-sky-50 py-16 sm:py-24">
        <div className="container-page">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy sm:text-3xl">
              The Veteran Advantage
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Here&rsquo;s what changes when your recruiter has actually spent
              time in the industry they&rsquo;re hiring for.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {recruiterEdge.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-navy">
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

      {/* Image Break */}
      <section className="relative h-56 overflow-hidden sm:h-72 lg:h-80">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80"
          alt="Aerial view of a large construction project"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container-page">
            <p className="max-w-lg text-2xl font-bold leading-tight text-white sm:text-3xl drop-shadow-lg">
              Your recruiter already has a shortlist in their head before they
              hang up the phone.
            </p>
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
              {recruiterFaqs.map((faq) => (
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
            Work With Recruiters Who Know Your Industry
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Stop explaining your projects to recruiters who&rsquo;ve never set
            foot on a job site. Talk to someone who already speaks your language.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get in Touch
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
