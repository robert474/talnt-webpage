import Link from "next/link";
import Button from "@/components/ui/Button";

const quickLinks = [
  { label: "Homepage", href: "/", description: "Return to the main page" },
  {
    label: "Industries",
    href: "/industries",
    description: "Data center, mission critical, construction & utilities staffing",
  },
  {
    label: "Roles",
    href: "/roles",
    description: "Project managers, engineers, superintendents & more",
  },
  {
    label: "Locations",
    href: "/locations",
    description: "Find staffing services in your market",
  },
  {
    label: "Open Positions",
    href: "/jobs",
    description: "Browse current job opportunities",
  },
  {
    label: "Contact Us",
    href: "/contact",
    description: "Get in touch with our team",
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        {/* Status indicator */}
        <p className="text-sm font-semibold uppercase tracking-widest text-green">
          404 Error
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-navy sm:text-5xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Sorry, we could not find the page you are looking for. It may have been
          moved, renamed, or no longer exists. Use the links below to find what
          you need.
        </p>

        {/* Primary CTA */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/" variant="primary" size="lg">
            Go to Homepage
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Quick links grid */}
      <section className="mx-auto mt-16 w-full max-w-4xl" aria-label="Helpful links">
        <h2 className="mb-6 text-center text-xl font-semibold text-navy">
          Helpful Links
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <h3 className="font-semibold text-navy group-hover:text-green transition-colors duration-200">
                {link.label}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{link.description}</p>
              <span
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-green"
                aria-hidden="true"
              >
                Visit page
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
