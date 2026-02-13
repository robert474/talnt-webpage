import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { SchemaScript } from "@/lib/schema";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/metadata";
import USMarketMap from "@/components/ui/USMarketMap";

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                  */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title:
    "Data Center Staffing Locations | Nationwide Coverage | Data Center TALNT",
  description:
    "Data Center TALNT provides specialized data center staffing across 20+ major U.S. markets. Find skilled technicians, engineers, and project managers in Northern Virginia, Dallas, Phoenix, Chicago, and beyond.",
  keywords: [
    "data center staffing locations",
    "nationwide data center recruitment",
    "data center jobs near me",
    "data center staffing Northern Virginia",
    "data center staffing Dallas",
    "data center staffing Phoenix",
    "data center staffing Chicago",
    "local data center recruiters",
  ],
  alternates: {
    canonical: `${siteConfig.siteUrl}/locations`,
  },
  openGraph: {
    title:
      "Data Center Staffing Locations | Nationwide Coverage | Data Center TALNT",
    description:
      "Specialized data center staffing across 20+ major U.S. markets. Northern Virginia, Dallas, Phoenix, Chicago, and beyond.",
    url: `${siteConfig.siteUrl}/locations`,
    siteName: siteConfig.siteName,
    type: "website",
  },
};

/* -------------------------------------------------------------------------- */
/*  Location Data                                                             */
/* -------------------------------------------------------------------------- */

interface LocationCard {
  city: string;
  state: string;
  slug: string;
  stat: string;
}

interface Region {
  name: string;
  locations: LocationCard[];
}

const regions: Region[] = [
  {
    name: "Mid-Atlantic",
    locations: [
      {
        city: "Northern Virginia",
        state: "VA",
        slug: "northern-virginia",
        stat: "Largest data center market globally with 2,000+ MW capacity",
      },
      {
        city: "New York Metro",
        state: "NJ/NY",
        slug: "new-york-metro",
        stat: "Top financial services data center hub with 400+ MW",
      },
    ],
  },
  {
    name: "Southeast",
    locations: [
      {
        city: "Atlanta",
        state: "GA",
        slug: "atlanta",
        stat: "Southeast's premier connectivity hub with 50+ carrier facilities",
      },
      {
        city: "Charlotte",
        state: "NC",
        slug: "charlotte",
        stat: "Rapidly expanding market driven by financial services demand",
      },
    ],
  },
  {
    name: "South Central",
    locations: [
      {
        city: "Dallas-Fort Worth",
        state: "TX",
        slug: "dallas-fort-worth",
        stat: "Second-largest U.S. data center market with 800+ MW",
      },
      {
        city: "Houston",
        state: "TX",
        slug: "houston",
        stat: "Growing market with energy sector connectivity advantages",
      },
      {
        city: "San Antonio",
        state: "TX",
        slug: "san-antonio",
        stat: "Emerging hyperscale hub with affordable power and land",
      },
    ],
  },
  {
    name: "Southwest",
    locations: [
      {
        city: "Phoenix",
        state: "AZ",
        slug: "phoenix",
        stat: "Fastest-growing data center market with 500+ MW pipeline",
      },
      {
        city: "Las Vegas",
        state: "NV",
        slug: "las-vegas",
        stat: "Strategic West Coast alternative with competitive power costs",
      },
      {
        city: "Denver",
        state: "CO",
        slug: "denver",
        stat: "Mountain West hub with expanding hyperscale campuses",
      },
    ],
  },
  {
    name: "West Coast",
    locations: [
      {
        city: "Silicon Valley",
        state: "CA",
        slug: "silicon-valley",
        stat: "Global tech headquarters with 400+ MW of enterprise capacity",
      },
      {
        city: "Portland",
        state: "OR",
        slug: "portland-oregon",
        stat: "Pacific Northwest hub with low-cost hydroelectric power",
      },
      {
        city: "Hillsboro",
        state: "OR",
        slug: "hillsboro-oregon",
        stat: "Oregon's Silicon Forest with major semiconductor and cloud campuses",
      },
      {
        city: "Sacramento",
        state: "CA",
        slug: "sacramento",
        stat: "Emerging Northern California alternative with lower costs",
      },
      {
        city: "Seattle",
        state: "WA",
        slug: "seattle",
        stat: "Major cloud computing hub near hyperscale headquarters",
      },
    ],
  },
  {
    name: "Midwest",
    locations: [
      {
        city: "Chicago",
        state: "IL",
        slug: "chicago",
        stat: "Midwest's largest market and key network interconnection point",
      },
      {
        city: "Columbus",
        state: "OH",
        slug: "columbus-ohio",
        stat: "Fastest-growing Midwest market with 600+ MW in development",
      },
      {
        city: "Minneapolis",
        state: "MN",
        slug: "minneapolis",
        stat: "Cold-climate advantage market with growing hyperscale presence",
      },
    ],
  },
  {
    name: "Mountain West",
    locations: [
      {
        city: "Salt Lake City",
        state: "UT",
        slug: "salt-lake-city",
        stat: "Emerging data center corridor along the Wasatch Front",
      },
      {
        city: "Reno",
        state: "NV",
        slug: "reno",
        stat: "Strategic inland hub with major hyperscale investments",
      },
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  US Market Map (shared D3.js interactive component)                        */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  Page Component                                                            */
/* -------------------------------------------------------------------------- */

export default function LocationsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
  ]);

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      {/* ------------------------------------------------------------------ */}
      {/*  Hero Section                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-navy pb-16 pt-20 text-white sm:pb-20 sm:pt-24">
        <div className="container-page">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="transition-colors hover:text-blue-light">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="text-blue-light">Locations</span>
              </li>
            </ol>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Data Center Staffing Locations{" "}
              <span className="text-blue-light">Nationwide</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Data Center TALNT delivers specialized staffing solutions across
              America&apos;s top data center markets. From the hyperscale campuses
              of Northern Virginia to the rapidly expanding corridors of Phoenix
              and Dallas-Fort Worth, our local recruiters understand the unique
              demands of each market and connect employers with the skilled
              professionals who keep critical infrastructure running.
            </p>

            {/* Key Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "20+", label: "Markets Served" },
                { value: "7", label: "U.S. Regions" },
                { value: "1,000+", label: "Placements Made" },
                { value: "48hr", label: "Avg. Response Time" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="text-2xl font-bold text-blue-light sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-gray-400 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Interactive Map Section                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-sky-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Our Coverage Areas
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Strategically positioned in the markets that matter most for data
              center construction, operations, and maintenance staffing.
            </p>
          </div>

          <div className="mt-12">
            <USMarketMap />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Locations by Region                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Explore Our Markets
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Select a location to learn about the local data center landscape,
              in-demand roles, major employers, and how Data Center TALNT
              supports hiring in that market.
            </p>
          </div>

          <div className="mt-14 space-y-16">
            {regions.map((region) => (
              <div key={region.name}>
                {/* Region heading */}
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="text-xl font-bold text-navy sm:text-2xl">
                    {region.name}
                  </h3>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Location cards */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {region.locations.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/locations/${location.slug}`}
                      className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue/40 hover:shadow-md"
                    >
                      {/* City & State */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-navy group-hover:text-blue">
                            {location.city}
                          </h4>
                          <p className="mt-0.5 text-sm font-medium text-gray-500">
                            {location.state}
                          </p>
                        </div>
                        {/* Arrow icon */}
                        <span
                          className="mt-1 text-gray-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue"
                          aria-hidden="true"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 4l6 6-6 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>

                      {/* Market stat */}
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">
                        {location.stat}
                      </p>

                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-xl bg-blue transition-all duration-300 group-hover:w-full" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*  Bottom CTA Section                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Don&apos;t See Your Market?{" "}
              <span className="text-blue-light">We Still Cover It.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Our reach extends beyond the markets listed here. Whether
              you&apos;re building a hyperscale campus in a new corridor or need
              specialized talent in an emerging data center market, Data Center
              TALNT has the network and expertise to deliver.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/employers" variant="primary" size="lg">
                Hire Data Center Talent
              </Button>
              <Button href="/candidates" variant="outline" size="lg">
                Find Your Next Role
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
