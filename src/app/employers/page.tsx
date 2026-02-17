import Image from "next/image";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/metadata";
import {
  SchemaScript,
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/lib/schema";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata = genMeta({
  title: "Hire Data Center & Construction Talent | Employers | Data Center TALNT",
  description:
    "Find pre-vetted data center, mission critical, and construction professionals fast. Contract, contract-to-hire, and direct placement staffing solutions from Data Center TALNT.",
  path: "/employers",
  keywords: [
    "hire data center workers",
    "construction staffing services",
    "find MEP engineers",
    "data center recruitment",
    "mission critical staffing for employers",
    "contract staffing data center",
    "direct placement construction",
    "managed staffing solutions",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Call, email, or fill out a quick form. Tell us the role, the market, the timeline, and any deal-breakers. Our recruiters will ask the right questions because they've staffed these projects before.",
  },
  {
    number: "02",
    title: "Review Your Shortlist",
    description:
      "Within 48 hours — sometimes faster — you'll have a shortlist of candidates who've been technically screened, reference-checked, and matched to your specific project requirements. No filler resumes.",
  },
  {
    number: "03",
    title: "Hire and Get to Work",
    description:
      "Pick your top choice and we handle the rest — onboarding paperwork, compliance, payroll if it's a contract role. Your new team member shows up ready to contribute, not ready to learn.",
  },
];

const serviceModels = [
  {
    title: "Contract Staffing",
    description:
      "Ramp up for a hyperscale build, cover a shutdown, or fill a gap while your internal team catches up. We carry the payroll, benefits, and workers' comp so you can focus on the project.",
    features: [
      "Candidates mobilized within days",
      "Flexible durations — weeks to years",
      "Full employer-of-record services",
    ],
  },
  {
    title: "Contract-to-Hire",
    description:
      "Not sure if someone's the right long-term fit? Try them on your project first. If they deliver, convert them to your payroll. If not, we'll find someone who does.",
    features: [
      "90-day evaluation period (typical)",
      "Reduced hiring risk",
      "Smooth conversion to permanent",
    ],
  },
  {
    title: "Direct Placement",
    description:
      "When you need a senior PM, a CxA lead, or a VP of Construction and can't afford a miss, we source deep and screen hard. One-time placement fee with a guarantee period.",
    features: [
      "Executive and leadership roles",
      "Replacement guarantee included",
      "Thorough reference and cert verification",
    ],
  },
  {
    title: "Managed Staffing",
    description:
      "Running a multi-phase program with dozens of open roles? We embed a dedicated team to manage recruiting, onboarding, and workforce planning across the entire program lifecycle.",
    features: [
      "Dedicated account management",
      "Custom KPIs and weekly reporting",
      "Volume hiring for large programs",
    ],
  },
];

const industries = [
  {
    title: "Data Center Construction",
    href: "/industries/data-center-staffing",
    description: "Hyperscale, colocation, and edge — every tier, every phase.",
  },
  {
    title: "Mission Critical Facilities",
    href: "/industries/mission-critical-facilities",
    description: "Hospitals, telecom, finance, and government — zero downtime.",
  },
  {
    title: "Commercial Construction",
    href: "/industries/construction-staffing",
    description: "Ground-up, renovation, and TI projects — all trades covered.",
  },
  {
    title: "Utilities & Energy",
    href: "/industries/utilities-staffing",
    description: "Power gen, T&D, solar, and battery — grid-scale talent.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function EmployersPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Employers", url: "/employers" },
  ];

  const serviceSchema = generateServiceSchema({
    name: "Data Center & Construction Staffing for Employers",
    description:
      "Specialized staffing solutions for data center, mission critical, construction, and utilities employers. Contract, contract-to-hire, direct placement, and managed staffing services.",
    url: "/employers",
    serviceType: "Staffing and Recruitment",
  });

  return (
    <>
      <SchemaScript
        schema={[serviceSchema, generateBreadcrumbSchema(breadcrumbs)]}
      />

      {/* Hero */}
      <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
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
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Stop Waiting on Resumes. Start Building.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            You need a commissioning agent in Phoenix by Monday or a full PM
            team for a hyperscale campus breaking ground next quarter. Either
            way, we&rsquo;ve got pre-vetted candidates ready to go.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Submit a Job Order
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="How It Works"
            subtitle="Three steps. No 90-minute intake calls."
          />
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue/10">
                  <span className="text-xl font-bold text-blue">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  {step.description}
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
          alt="Electrical engineers inspecting industrial equipment inside a facility"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container-page">
            <p className="max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl drop-shadow-lg">
              We target 48-hour turnaround on vetted candidate shortlists —
              for both contract and direct-hire roles.
            </p>
          </div>
        </div>
      </section>

      {/* Service Models */}
      <section className="bg-sky-50 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Staffing Models That Fit Your Project"
            subtitle="One size doesn't fit a 5MW colo and a 200MW hyperscale campus. Pick the engagement model that works for you."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {serviceModels.map((model) => (
              <div
                key={model.title}
                className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-navy">
                  {model.title}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">
                  {model.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {model.features.map((feat) => (
                    <li
                      key={feat}
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
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Industries We Staff"
            subtitle="We don't dabble. These are the only sectors we recruit for — and we know them cold."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <Link
                key={ind.title}
                href={ind.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-navy group-hover:text-blue transition-colors duration-200">
                  {ind.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {ind.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-sky-50 py-16 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <div className="rounded-xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-bold text-navy sm:text-2xl">
                Built for the Way You Actually Hire
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Whether you need one commissioning agent or a full project
                team, we tailor the engagement model to your timeline and
                budget. Contract, contract-to-hire, or direct placement —
                we&rsquo;ll find the right fit for both the role and the
                project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue py-16 sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Staff Your Next Build?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Tell us what you need. Most clients have their first shortlist in
            hand within 48 hours — no long intake process, no generic resumes.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="secondary" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
