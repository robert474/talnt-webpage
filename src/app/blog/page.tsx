import Image from "next/image";
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
  "Workforce Development",
];

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    slug: "why-companies-use-staffing-agencies-data-center-hiring",
    title: "Why Smart Companies Use Staffing Agencies for Data Center Hiring",
    excerpt:
      "You have an HR department. You have job boards. So why are the most successful data center builders outsourcing their recruiting? Because the math works. We break down the real ROI of staffing partnerships — faster hires, better retention, and access to candidates you'll never find on Indeed.",
    date: "February 6, 2026",
    category: "Career Advice",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "data-center-construction-382-billion-market-2026",
    title: "Data Center Construction Is Now a $382 Billion Market. Here's What That Means for Hiring.",
    excerpt:
      "The numbers are staggering: $88 billion in U.S. data center starts tracked for just the first half of 2026, hyperscalers committing $400 billion this year alone, and 82% of firms struggling to fill roles. We unpack the growth, who's building, and why every GC in America is fighting for the same 50 superintendents.",
    date: "February 4, 2026",
    category: "Market Reports",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "skilled-trades-shortage-data-center-construction",
    title: "The Skilled Trades Crisis Hitting Data Center Construction",
    excerpt:
      "The BLS projects 400,000 more construction workers needed by 2033 — and the biggest gaps are in exactly the trades data centers need: electricians, HVAC techs, and plumbers. With 58% of data center operators already struggling to source talent, the trades pipeline is the industry's most urgent problem.",
    date: "January 28, 2026",
    category: "Industry Trends",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "professional-workforce-shortage-data-center-engineers",
    title: "Where Are All the Data Center Engineers? Inside the Professional Talent Shortage",
    excerpt:
      "The data center industry added 4.7 million jobs to the U.S. economy — a 60% jump since 2017. But engineering programs can't keep up. From commissioning agents to power systems designers, we examine why the professional talent pool is running dry and what community colleges, universities, and employers are doing about it.",
    date: "January 22, 2026",
    category: "Workforce Development",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "top-10-universities-producing-data-center-talent",
    title: "Top 10 Universities Producing Data Center Talent in 2026",
    excerpt:
      "From SMU's one-of-a-kind MS in Datacenter Systems Engineering to Georgia Tech's powerhouse electrical engineering program, we ranked the 10 universities whose graduates are most likely to end up designing, building, or operating the facilities that power the AI economy. Plus: the community college programs quietly filling the trades gap.",
    date: "January 18, 2026",
    category: "Workforce Development",
    readTime: "11 min read",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "2026-data-center-construction-salary-guide",
    title: "2026 Data Center Construction Salary Guide",
    excerpt:
      "We pulled comp data from over 1,200 placements to build the most comprehensive salary guide in the industry. See how PMs, supers, CxAs, and MEP engineers are being paid across every major market — and where the biggest jumps happened this year.",
    date: "January 15, 2026",
    category: "Salary Guides",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "top-10-data-center-markets-construction-jobs",
    title: "Top 10 Data Center Markets for Construction Jobs in 2026",
    excerpt:
      "Ashburn is still king, but Phoenix is closing the gap fast and Columbus came out of nowhere. We ranked the top markets by active projects, salary premiums, and long-term growth potential for construction professionals.",
    date: "January 8, 2026",
    category: "Market Reports",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "mep-engineering-trends-mission-critical-facilities",
    title: "MEP Engineering Trends in Mission Critical Facilities",
    excerpt:
      "Liquid cooling, high-density power distribution, and AI-driven BMS — the MEP landscape is shifting fast. Here's what engineers need to know to stay relevant and what employers should be looking for in their next hire.",
    date: "December 20, 2025",
    category: "Industry Trends",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "how-to-hire-data-center-construction-manager",
    title: "How to Hire a Data Center Construction Manager",
    excerpt:
      "Finding a CM with genuine data center experience is one of the hardest hires in the industry. We break down what to look for, where to find candidates, comp benchmarks, and interview questions that separate the real deal from the resume puffers.",
    date: "December 12, 2025",
    category: "Career Advice",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "future-of-hyperscale-data-center-construction",
    title: "The Future of Hyperscale Data Center Construction",
    excerpt:
      "AI workloads are driving unprecedented demand for hyperscale capacity. We look at the pipeline of announced projects, the labor shortages threatening timelines, and how modular construction is starting to change the game.",
    date: "December 5, 2025",
    category: "Industry Trends",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "commissioning-agent-vs-commissioning-engineer",
    title: "Commissioning Agent vs. Commissioning Engineer: What's the Difference?",
    excerpt:
      "The titles get used interchangeably, but they're not the same role. We break down the responsibilities, qualifications, salary expectations, and career paths for each — and explain why it matters for your hiring process.",
    date: "November 28, 2025",
    category: "Career Advice",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "data-center-construction-workforce-challenges-2026",
    title: "Workforce Challenges Facing Data Center Construction in 2026",
    excerpt:
      "With over 5GW of new capacity under construction, the talent shortage isn't theoretical anymore. We analyze the bottleneck roles, geographic hot spots, and strategies employers are using to attract and retain skilled workers.",
    date: "November 20, 2025",
    category: "Market Reports",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "negotiating-your-data-center-construction-salary",
    title: "How to Negotiate Your Data Center Construction Salary",
    excerpt:
      "You're in demand. Use it. We walk through how to benchmark your market value, time your ask, and negotiate total comp — salary, per diem, bonus, relocation — not just base pay.",
    date: "November 12, 2025",
    category: "Salary Guides",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
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
            Insights from the Field
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            Salary data, market analysis, and career advice written by people
            who actually work in data center and construction staffing — not a
            content team that Googled it.
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
                    {/* Post Image */}
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      />
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
                  Stay in the Loop
                </h2>
                <p className="mt-2 text-sm text-gray-300">
                  Get salary data, market updates, and hiring insights delivered
                  straight to your inbox. No fluff.
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
