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
  title: "Find Data Center & Construction Jobs | Candidates | Data Center TALNT",
  description:
    "Find your next data center, mission critical, or construction role. Browse open positions for project managers, MEP engineers, QA/QC inspectors, commissioning agents, and more.",
  path: "/candidates",
  keywords: [
    "data center jobs",
    "construction manager jobs",
    "MEP engineer careers",
    "data center career opportunities",
    "commissioning agent jobs",
    "QA/QC inspector jobs data center",
    "mission critical facility jobs",
    "construction staffing jobs",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const benefits = [
  {
    title: "Roles You Won't Find on Job Boards",
    description:
      "A lot of the best positions never get posted publicly. The hiring manager calls us, we call the right person. Working with DC TALNT puts you in that loop before everyone else.",
  },
  {
    title: "Recruiters Who Speak Your Language",
    description:
      "When you tell our team you've led Level 4 commissioning on a Tier III+ facility, they know exactly what that means. No explaining your resume to someone who's never set foot on a job site.",
  },
  {
    title: "Honest Career Guidance",
    description:
      "We'll tell you if a role isn't the right fit, help you negotiate comp, and give you a straight read on where the market is heading. We're not just filling a seat — we want you to land somewhere you'll stay.",
  },
  {
    title: "Top-of-Market Compensation",
    description:
      "We track comp data across every major data center market and know what your skills are worth. Our job is to get you the best possible package — salary, per diem, relocation, the whole picture.",
  },
  {
    title: "Fast Placement",
    description:
      "When you're ready to move, we move. Our existing relationships with hiring managers and a streamlined interview process mean less waiting and more working. Some placements happen in under a week.",
  },
  {
    title: "Coast-to-Coast Opportunities",
    description:
      "Ashburn, Dallas, Phoenix, Chicago, Portland, Columbus — wherever the builds are happening, we have roles. Want to stay local? We'll find something close. Open to travel? Even better.",
  },
];

const roleTypes = [
  {
    title: "Project Managers",
    href: "/roles/project-managers",
    description:
      "Lead data center and construction projects from pre-con through turnover.",
  },
  {
    title: "Construction Managers",
    href: "/roles/construction-managers",
    description:
      "Run daily field operations, manage trades, and keep the schedule honest.",
  },
  {
    title: "MEP Engineers",
    href: "/roles/mep-engineers",
    description:
      "Design and coordinate the mechanical, electrical, and plumbing systems that keep facilities running.",
  },
  {
    title: "QA/QC Inspectors",
    href: "/roles/qa-qc-inspectors",
    description:
      "Manage on-site crews, enforce safety, and drive quality from foundation to turnover.",
  },
  {
    title: "Schedulers",
    href: "/roles/schedulers",
    description:
      "Build and maintain CPM schedules in P6 — and know data center construction sequences cold.",
  },
  {
    title: "Commissioning Agents",
    href: "/roles/commissioning-agents",
    description:
      "Execute IST events, verify system performance, and sign off before the facility goes live.",
  },
];

const steps = [
  {
    number: "01",
    title: "Send Us Your Resume",
    description:
      "Share your background and what you're looking for — role type, location preference, salary range, whatever matters to you. No cover letter needed.",
  },
  {
    number: "02",
    title: "Talk to a Recruiter",
    description:
      "One of our industry-specialist recruiters will connect with you to dig into your project history, certifications, and career goals. It's a conversation, not an interrogation.",
  },
  {
    number: "03",
    title: "Get Matched and Hired",
    description:
      "We present you directly to hiring managers with a strong recommendation. When you accept an offer, we help with onboarding and make sure you're set up to succeed on day one.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function CandidatesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Candidates", url: "/candidates" },
  ];

  const serviceSchema = generateServiceSchema({
    name: "Career Placement for Data Center & Construction Professionals",
    description:
      "Free career placement services for data center, mission critical, construction, and utilities professionals. Access exclusive job openings with top employers nationwide.",
    url: "/candidates",
    serviceType: "Career Placement",
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
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2400&q=80"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Your Next Role Should Be Worth the Move
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            You&rsquo;ve delivered hyperscale campuses, commissioned Tier IV
            facilities, and kept multi-trade projects on schedule. Let us find
            the role that matches your experience — and pays like it.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Submit Your Resume
            </Button>
            <Button
              href="/jobs"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Browse Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Why Candidates Work With Us"
            subtitle="We're not just another staffing agency blasting your resume around. Here's what's actually different."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-navy">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-56 overflow-hidden sm:h-72 lg:h-80">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80"
          alt="Construction site with cranes and workers at golden hour"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/35 to-transparent" />
        <div className="relative z-10 flex h-full items-center">
          <div className="container-page">
            <p className="max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl drop-shadow-lg">
              Data center construction talent is in demand. Make sure
              you&rsquo;re getting what you&rsquo;re worth.
            </p>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-sky-50 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="Roles We Place"
            subtitle="These are the positions we fill every day. If your title is on this list, we should talk."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roleTypes.map((role) => (
              <Link
                key={role.title}
                href={role.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-navy group-hover:text-blue transition-colors duration-200">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {role.description}
                </p>
                <span
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue"
                  aria-hidden="true"
                >
                  View roles &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            title="How to Get Started"
            subtitle="Three steps. No 10-page application."
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

      {/* CTA */}
      <section className="bg-blue py-16 sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready for Your Next Move?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
            Send us your resume and tell us what matters to you. Our recruiters
            will connect you with roles that fit your experience, location, and
            career goals — often within the same week.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Submit Resume
            </Button>
            <Button
              href="/jobs"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue"
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
