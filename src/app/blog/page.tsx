import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { SchemaScript, generateBreadcrumbSchema } from "@/lib/schema";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = genMeta({
  title: "Data Center Staffing Insights & Industry News | Blog | Data Center TALNT",
  description:
    "Expert insights on data center staffing, construction salary guides, MEP engineering trends, hiring best practices, and mission critical industry news from Data Center TALNT.",
  path: "/blog",
  keywords: [
    "data center staffing blog",
    "construction salary guide",
    "data center industry news",
    "MEP engineering trends",
    "mission critical hiring",
    "construction staffing insights",
    "data center career advice",
  ],
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const categories = [
  "Industry Trends",
  "Salary Guides",
  "Career Advice",
  "Market Reports",
];

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    slug: "2026-data-center-construction-salary-guide",
    title: "2026 Data Center Construction Salary Guide",
    excerpt:
      "Comprehensive salary data for project managers, superintendents, MEP engineers, and commissioning agents across every major data center market. See how compensation has shifted as demand for hyperscale construction talent continues to outpace supply.",
    date: "January 15, 2026",
    category: "Salary Guides",
    readTime: "8 min read",
  },
  {
    slug: "top-10-data-center-markets-construction-jobs",
    title: "Top 10 Data Center Markets for Construction Jobs",
    excerpt:
      "From Northern Virginia's Data Center Alley to the booming Phoenix corridor, we rank the top markets for data center construction professionals based on active projects, salary premiums, and long-term growth potential.",
    date: "January 8, 2026",
    category: "Market Reports",
    readTime: "6 min read",
  },
  {
    slug: "mep-engineering-trends-mission-critical-facilities",
    title: "MEP Engineering Trends in Mission Critical Facilities",
    excerpt:
      "Liquid cooling, high-density power distribution, and AI-driven BMS systems are reshaping the MEP landscape. We explore the skills and certifications that matter most for engineers working in mission critical environments.",
    date: "December 20, 2025",
    category: "Industry Trends",
    readTime: "7 min read",
  },
  {
    slug: "how-to-hire-data-center-construction-manager",
    title: "How to Hire a Data Center Construction Manager",
    excerpt:
      "Finding a construction manager with genuine data center experience is one of the hardest hires in the industry. This guide covers what to look for, where to find candidates, compensation benchmarks, and interview questions that reveal real expertise.",
    date: "December 12, 2025",
    category: "Career Advice",
    readTime: "10 min read",
  },
  {
    slug: "future-of-hyperscale-data-center-construction",
    title: "The Future of Hyperscale Data Center Construction",
    excerpt:
      "AI workloads are driving unprecedented demand for hyperscale capacity. We examine the pipeline of announced projects, the labor shortages threatening timelines, and how modular construction and prefabrication are changing the game.",
    date: "December 5, 2025",
    category: "Industry Trends",
    readTime: "9 min read",
  },
  {
    slug: "commissioning-agent-vs-commissioning-engineer",
    title: "Commissioning Agent vs. Commissioning Engineer: What's the Difference?",
    excerpt:
      "The terms are often used interchangeably, but commissioning agents and commissioning engineers serve distinct roles on a data center project. We break down the responsibilities, qualifications, salary expectations, and career paths for each.",
    date: "November 28, 2025",
    category: "Career Advice",
    readTime: "5 min read",
  },
  {
    slug: "data-center-construction-workforce-challenges-2026",
    title: "Workforce Challenges Facing Data Center Construction in 2026",
    excerpt:
      "With over 5GW of new capacity under construction, the data center industry is facing a critical talent shortage. We analyze the bottleneck roles, geographic hot spots, and strategies employers are using to attract and retain skilled workers.",
    date: "November 20, 2025",
    category: "Market Reports",
    readTime: "7 min read",
  },
  {
    slug: "negotiating-your-data-center-construction-salary",
    title: "How to Negotiate Your Data Center Construction Salary",
    excerpt:
      "Data center construction professionals are in high demand, which gives you leverage in salary negotiations. Learn how to benchmark your market value, time your ask, and negotiate total compensation including per diem, bonuses, and relocation packages.",
    date: "November 12, 2025",
    category: "Salary Guides",
    readTime: "6 min read",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function BlogPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ];

  return (
    <>
      <SchemaScript schema={generateBreadcrumbSchema(breadcrumbs)} />

      {/* Hero */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="container-page text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Data Center Staffing Insights &amp; Industry News
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Expert analysis on hiring trends, salary benchmarks, and career
            advice for data center, mission critical, and construction
            professionals.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12 sm:py-20">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Main Content - Post Grid */}
            <div className="lg:col-span-3">
              <div className="grid gap-8 sm:grid-cols-2">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    className="group flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md overflow-hidden"
                  >
                    {/* Placeholder image area */}
                    <div className="aspect-[16/9] bg-gray-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      {/* Category & Date */}
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="inline-flex items-center rounded-full bg-blue/10 px-2.5 py-0.5 text-xs font-medium text-blue">
                          {post.category}
                        </span>
                        <time dateTime={post.date}>{post.date}</time>
                      </div>

                      {/* Title */}
                      <h2 className="mt-3 text-lg font-semibold text-navy group-hover:text-blue transition-colors duration-200">
                        <Link href={`/blog/${post.slug}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <div className="mt-4 flex items-center justify-between">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-blue hover:underline"
                        >
                          Read More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Link>
                        <span className="text-xs text-gray-400">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Categories */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-navy">Categories</h2>
                <ul className="mt-4 space-y-3">
                  {categories.map((cat) => {
                    const count = posts.filter((p) => p.category === cat).length;
                    return (
                      <li key={cat}>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-50 hover:text-blue"
                        >
                          <span>{cat}</span>
                          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-500">
                            {count}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Newsletter CTA */}
              <div className="mt-8 rounded-xl border border-gray-200 bg-navy p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-white">
                  Stay Informed
                </h2>
                <p className="mt-2 text-sm text-gray-300">
                  Get the latest data center staffing insights and salary data
                  delivered to your inbox.
                </p>
                <form className="mt-4 space-y-3" action="#" method="POST">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full rounded-lg border border-gray-600 bg-navy-light px-4 py-2 text-sm text-white placeholder:text-gray-400 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/30"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-dark"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Popular Topics */}
              <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-navy">
                  Popular Topics
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Data Center Salaries",
                    "Hyperscale Construction",
                    "MEP Engineering",
                    "Commissioning",
                    "Project Management",
                    "Northern Virginia",
                    "Hiring Trends",
                    "Career Growth",
                  ].map((topic) => (
                    <span
                      key={topic}
                      className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 hover:border-blue hover:text-blue transition-colors duration-200 cursor-pointer"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
