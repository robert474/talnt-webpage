import Image from "next/image";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/metadata";
import { SchemaScript, generateBreadcrumbSchema } from "@/lib/schema";
import { posts, categories } from "@/lib/blog-data";

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
