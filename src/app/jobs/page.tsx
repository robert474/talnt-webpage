import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/metadata";
import {
  SchemaScript,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import Button from "@/components/ui/Button";

export const metadata = genMeta({
  title: "Open Positions | Data Center & Construction Jobs | Data Center TALNT",
  description:
    "Browse current data center, mission critical, construction, and utilities job openings. Find project manager, MEP engineer, QA/QC inspector, and commissioning agent positions nationwide.",
  path: "/jobs",
  keywords: [
    "data center jobs",
    "construction jobs near me",
    "MEP engineer positions",
    "project manager data center",
    "commissioning agent jobs",
    "QA/QC inspector jobs",
    "mission critical facility careers",
    "data center construction careers",
  ],
});

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function JobsPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Jobs", url: "/jobs" },
  ];

  return (
    <>
      <SchemaScript
        schema={generateBreadcrumbSchema(breadcrumbs)}
      />

      {/* Hero */}
      <section className="relative bg-navy py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
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
            Current Open Positions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Data center, mission critical, construction, and utilities jobs
            across the country. New positions added daily — and many are filled
            before they ever hit a job board.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 sm:py-28">
        <div className="container-page text-center">
          <div className="mx-auto max-w-lg">
            <p className="text-6xl font-bold text-blue sm:text-7xl">Coming Soon</p>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              We&rsquo;re building out our job board. In the meantime, reach out
              directly and our recruiters will match you with open positions that
              fit your experience.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-sky-50 py-16 sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Don&apos;t See the Right Role?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            We add new positions daily and many roles are filled before they
            get posted. Send us your resume and our recruiters will proactively
            match you with opportunities that fit your experience.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Submit Your Resume
            </Button>
            <Button href="/candidates" variant="outline" size="lg">
              Learn About Working With Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
