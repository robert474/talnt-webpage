import Link from "next/link";
import Image from "next/image";

// ----------------------------------------------------------------
// Footer link data
// ----------------------------------------------------------------

interface FooterLink {
  label: string;
  href: string;
}

const industriesLinks: FooterLink[] = [
  { label: "Data Centers", href: "/industries/data-centers" },
  { label: "Mission Critical", href: "/industries/mission-critical" },
  { label: "Construction", href: "/industries/construction" },
  { label: "Utilities & Power", href: "/industries/utilities" },
];

const rolesLinks: FooterLink[] = [
  { label: "Project Managers", href: "/roles/project-managers" },
  { label: "Engineers", href: "/roles/engineers" },
  { label: "Superintendents", href: "/roles/superintendents" },
  { label: "Commissioning Agents", href: "/roles/commissioning-agents" },
  { label: "Technicians", href: "/roles/technicians" },
  { label: "Estimators", href: "/roles/estimators" },
];

const locationsLinks: FooterLink[] = [
  { label: "Northern Virginia", href: "/locations/northern-virginia" },
  { label: "Dallas-Fort Worth", href: "/locations/dallas-fort-worth" },
  { label: "Phoenix", href: "/locations/phoenix" },
  { label: "Chicago", href: "/locations/chicago" },
  { label: "Atlanta", href: "/locations/atlanta" },
  { label: "All Locations", href: "/locations" },
];

const companyLinks: FooterLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

// ----------------------------------------------------------------
// Footer link column
// ----------------------------------------------------------------

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
        {title}
      </h3>
      <ul className="mt-4 space-y-3" role="list">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ----------------------------------------------------------------
// Social icon (placeholder SVG paths)
// ----------------------------------------------------------------

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors duration-200 hover:bg-white/10 hover:text-white"
    >
      {children}
    </a>
  );
}

// ----------------------------------------------------------------
// Footer component
// ----------------------------------------------------------------

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-gray-300" role="contentinfo">
      {/* Main footer */}
      <div className="container-page py-12 md:py-16">
        {/* Brand + description */}
        <div className="mb-10 max-w-2xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xl font-bold text-white"
            aria-label="Data Center TALNT - Home"
          >
            {/* Hex icon matching brand */}
            <svg width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
              <path d="M16 0L30.5 8.5V27.5L16 36L1.5 27.5V8.5L16 0Z" className="fill-blue" />
              <path d="M8 14h16M8 18h16M8 22h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>
              DATA CENTER <span className="text-blue">TALNT</span>
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Data Center TALNT is a specialized staffing and recruitment firm
            connecting top-tier talent with data center, mission critical,
            construction, and utilities employers nationwide. From project
            managers and MEP engineers to commissioning agents and
            superintendents, we deliver the skilled workforce that powers
            modern critical infrastructure.
          </p>
        </div>

        {/* 4-column link grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <FooterColumn title="Industries" links={industriesLinks} />
          <FooterColumn title="Roles" links={rolesLinks} />
          <FooterColumn title="Top Locations" links={locationsLinks} />
          <FooterColumn title="Company" links={companyLinks} />
        </div>

        {/* Contact info (schema-friendly) */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div
            className="grid gap-6 sm:grid-cols-3 text-sm text-gray-400"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <meta itemProp="name" content="Data Center TALNT" />
            <meta itemProp="url" content="https://www.datacentertalnt.com" />
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <p className="font-medium text-gray-300">Address</p>
              <p itemProp="streetAddress">123 Main Street, Suite 400</p>
              <p>
                <span itemProp="addressLocality">Dallas</span>,{" "}
                <span itemProp="addressRegion">TX</span>{" "}
                <span itemProp="postalCode">75201</span>
              </p>
            </div>
            <div>
              <p className="font-medium text-gray-300">Phone</p>
              <a
                href="tel:+15551234567"
                itemProp="telephone"
                className="hover:text-white transition-colors duration-200"
              >
                (555) 123-4567
              </a>
            </div>
            <div>
              <p className="font-medium text-gray-300">Email</p>
              <a
                href="mailto:info@datacentertalnt.com"
                itemProp="email"
                className="hover:text-white transition-colors duration-200"
              >
                info@datacentertalnt.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Data Center TALNT. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-2" aria-label="Social media links">
            <SocialLink href="https://linkedin.com/company/datacentertalnt" label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialLink>
            <SocialLink href="https://twitter.com/datacentertalnt" label="X (Twitter)">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialLink>
            <SocialLink href="https://facebook.com/datacentertalnt" label="Facebook">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </SocialLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
