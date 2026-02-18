import Image from "next/image";
import { generateMetadata as genMeta } from "@/lib/metadata";
import {
  SchemaScript,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata = genMeta({
  title: "Contact Us | Data Center TALNT | Get Staffing Solutions",
  description:
    "Contact Data Center TALNT for data center, mission critical, construction, and utilities staffing solutions. Reach our team to discuss your hiring needs or explore career opportunities.",
  path: "/contact",
  keywords: [
    "contact data center staffing",
    "staffing agency contact",
    "hire data center workers",
    "construction staffing inquiry",
    "staffing solutions contact form",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const industries = [
  "Data Center Construction",
  "Mission Critical Facilities",
  "Commercial Construction",
  "Utilities & Energy",
  "Other",
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "@id": "https://www.datacentertalnt.com/#organization",
    name: "Data Center TALNT",
    url: "https://www.datacentertalnt.com",
    logo: "https://www.datacentertalnt.com/images/logo.png",
    description:
      "Specialized staffing and recruitment firm for data center, mission critical, construction, and utilities industries.",
    telephone: "+1-206-755-0724",
    email: "info@datacentertalnt.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1801 Red Bud Ln, Ste B-182",
      addressLocality: "Round Rock",
      addressRegion: "TX",
      postalCode: "78664",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    priceRange: "$$",
  };

  return (
    <>
      <SchemaScript
        schema={[localBusinessSchema, generateBreadcrumbSchema(breadcrumbs)]}
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
            Let&rsquo;s Talk
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Whether you need to staff a hyperscale build or you&rsquo;re a PM
            looking for your next project, fill out the form and someone on our
            team will get back to you within one business day.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-navy sm:text-3xl">
                Send Us a Message
              </h2>
              <p className="mt-2 text-gray-600">
                Tell us about your staffing needs or career goals and we will
                connect you with the right team member.
              </p>

              <form className="mt-8 space-y-6" action="#" method="POST">
                {/* Name & Email */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                {/* Phone & Company */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30"
                      placeholder="Acme Construction"
                    />
                  </div>
                </div>

                {/* Dropdowns */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="looking-to"
                      className="block text-sm font-medium text-gray-700"
                    >
                      I&apos;m Looking To <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="looking-to"
                      name="looking-to"
                      required
                      className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-800 shadow-sm focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select one...
                      </option>
                      <option value="hire">Hire Talent</option>
                      <option value="find-job">Find a Job</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Industry Interest
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-800 shadow-sm focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select an industry...
                      </option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind.toLowerCase().replace(/\s+/g, "-")}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30"
                    placeholder="Tell us about your staffing needs or the role you are looking for..."
                  />
                </div>

                {/* Submit */}
                <div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <aside className="lg:col-span-2">
              <div className="rounded-xl border border-gray-200 bg-sky-50 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-navy">
                  Contact Information
                </h2>

                {/* Address */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Office Address
                  </h3>
                  <address className="mt-2 not-italic leading-relaxed text-gray-700">
                    1801 Red Bud Ln, Ste B-182
                    <br />
                    Round Rock, TX 78664
                  </address>
                </div>

                {/* Phone */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Phone
                  </h3>
                  <p className="mt-2">
                    <a
                      href="tel:+12067550724"
                      className="text-blue font-medium hover:underline"
                    >
                      (206) 755-0724
                    </a>
                  </p>
                </div>

                {/* Email */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Email
                  </h3>
                  <p className="mt-2">
                    <a
                      href="mailto:info@datacentertalnt.com"
                      className="text-blue font-medium hover:underline"
                    >
                      info@datacentertalnt.com
                    </a>
                  </p>
                </div>

                {/* Office Hours */}
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Office Hours
                  </h3>
                  <p className="mt-2 text-gray-700 italic">
                    What are office hours? Data Centers don&rsquo;t sleep and
                    neither do we.
                  </p>
                </div>

                {/* Quick Links */}
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                    Quick Links
                  </h3>
                  <ul className="mt-3 space-y-2">
                    <li>
                      <a
                        href="/employers"
                        className="text-sm font-medium text-blue hover:underline"
                      >
                        For Employers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/candidates"
                        className="text-sm font-medium text-blue hover:underline"
                      >
                        For Job Seekers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/jobs"
                        className="text-sm font-medium text-blue hover:underline"
                      >
                        View Open Positions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
