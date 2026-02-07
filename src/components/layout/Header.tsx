"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

// ----------------------------------------------------------------
// Navigation data
// ----------------------------------------------------------------

interface NavItem {
  label: string;
  href: string;
}

interface NavGroup {
  label: string;
  href: string;
  children?: NavItem[];
}

const industries: NavItem[] = [
  { label: "Data Centers", href: "/industries/data-centers" },
  { label: "Mission Critical", href: "/industries/mission-critical" },
  { label: "Construction", href: "/industries/construction" },
  { label: "Utilities & Power", href: "/industries/utilities" },
];

const roles: NavItem[] = [
  { label: "Project Managers", href: "/roles/project-managers" },
  { label: "Engineers", href: "/roles/engineers" },
  { label: "Superintendents", href: "/roles/superintendents" },
  { label: "Commissioning Agents", href: "/roles/commissioning-agents" },
  { label: "Technicians", href: "/roles/technicians" },
  { label: "Estimators", href: "/roles/estimators" },
];

const navigation: NavGroup[] = [
  { label: "Industries", href: "/industries", children: industries },
  { label: "Roles", href: "/roles", children: roles },
  { label: "Locations", href: "/locations" },
  { label: "Jobs", href: "/jobs" },
  { label: "About", href: "/about" },
];

// ----------------------------------------------------------------
// Dropdown sub-component
// ----------------------------------------------------------------

function DesktopDropdown({
  group,
  isOpen,
  onToggle,
  id,
}: {
  group: NavGroup;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (isOpen) onToggle();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-blue transition-colors duration-200 cursor-pointer"
      >
        {group.label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id={id}
          role="menu"
          className="absolute left-0 top-full z-50 mt-1 w-56 origin-top-left rounded-lg border border-gray-200 bg-white py-2 shadow-lg"
        >
          <Link
            href={group.href}
            role="menuitem"
            className="block px-4 py-2 text-sm font-semibold text-navy hover:bg-gray-50 hover:text-blue transition-colors duration-150"
          >
            All {group.label}
          </Link>
          <div className="my-1 border-t border-gray-100" role="separator" />
          {group.children!.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue transition-colors duration-150"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------
// Mobile menu sub-component
// ----------------------------------------------------------------

function MobileMenu({ onClose }: { onClose: () => void }) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <nav
      id="mobile-menu"
      role="navigation"
      aria-label="Mobile navigation"
      className="fixed inset-0 top-16 z-40 overflow-y-auto bg-white pb-6 lg:hidden"
    >
      <ul className="divide-y divide-gray-100 px-4">
        {navigation.map((group) => (
          <li key={group.label}>
            {group.children ? (
              <div>
                <button
                  type="button"
                  onClick={() =>
                    setOpenGroup(openGroup === group.label ? null : group.label)
                  }
                  aria-expanded={openGroup === group.label}
                  className="flex w-full items-center justify-between py-3 text-base font-medium text-gray-800 cursor-pointer"
                >
                  {group.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`h-5 w-5 transition-transform duration-200 ${
                      openGroup === group.label ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {openGroup === group.label && (
                  <ul className="mb-2 ml-4 space-y-1">
                    <li>
                      <Link
                        href={group.href}
                        onClick={onClose}
                        className="block rounded-md py-2 text-sm font-semibold text-navy hover:text-blue"
                      >
                        All {group.label}
                      </Link>
                    </li>
                    {group.children.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="block rounded-md py-2 text-sm text-gray-600 hover:text-blue"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link
                href={group.href}
                onClick={onClose}
                className="block py-3 text-base font-medium text-gray-800 hover:text-blue"
              >
                {group.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-col gap-3 px-4">
        <Button variant="outline" size="md" href="/employers" className="w-full">
          For Employers
        </Button>
        <Button variant="primary" size="md" href="/candidates" className="w-full">
          Find Talent
        </Button>
      </div>
    </nav>
  );
}

// ----------------------------------------------------------------
// Header component
// ----------------------------------------------------------------

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = useCallback(
    (label: string) => {
      setOpenDropdown(openDropdown === label ? null : label);
    },
    [openDropdown],
  );

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
      <div className="container-page flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-navy"
          aria-label="Data Center TALNT - Home"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue text-sm font-black text-white">
            DC
          </span>
          <span>
            <span className="text-navy">DC</span>{" "}
            <span className="text-blue">TALNT</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          {navigation.map((group) =>
            group.children ? (
              <DesktopDropdown
                key={group.label}
                group={group}
                isOpen={openDropdown === group.label}
                onToggle={() => toggleDropdown(group.label)}
                id={`dropdown-${group.label.toLowerCase()}`}
              />
            ) : (
              <Link
                key={group.label}
                href={group.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-blue transition-colors duration-200"
              >
                {group.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" href="/employers">
            For Employers
          </Button>
          <Button variant="primary" size="sm" href="/candidates">
            Find Talent
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100 lg:hidden cursor-pointer"
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && <MobileMenu onClose={() => setMobileMenuOpen(false)} />}
    </header>
  );
}
