/* -------------------------------------------------------------------------- */
/*  Shared blog post metadata                                                 */
/*  Used by both /blog (listing) and /blog/[slug] (detail) pages              */
/* -------------------------------------------------------------------------- */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  category: string;
  readTime: string;
  image: string;
  keywords: string[];
}

export const categories = [
  "Industry Trends",
  "Salary Guides",
  "Career Advice",
  "Market Reports",
  "Workforce Development",
] as const;

export const posts: BlogPost[] = [
  {
    slug: "why-companies-use-staffing-agencies-data-center-hiring",
    title:
      "Why Smart Companies Use Staffing Agencies for Data Center Hiring",
    excerpt:
      "You have an HR department. You have job boards. So why are the most successful data center builders outsourcing their recruiting? Because the math works. We break down the real ROI of staffing partnerships — faster hires, better retention, and access to candidates you'll never find on Indeed.",
    date: "February 6, 2026",
    isoDate: "2026-02-06",
    category: "Career Advice",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    keywords: [
      "staffing agency data center",
      "recruitment agency ROI",
      "data center hiring strategy",
      "construction staffing partnership",
    ],
  },
  {
    slug: "data-center-construction-382-billion-market-2026",
    title:
      "Data Center Construction Is Now a $382 Billion Market. Here's What That Means for Hiring.",
    excerpt:
      "The numbers are staggering: $88 billion in U.S. data center starts tracked for just the first half of 2026, hyperscalers committing $400 billion this year alone, and 82% of firms struggling to fill roles. We unpack the growth, who's building, and why every GC in America is fighting for the same 50 QA/QC inspectors.",
    date: "February 4, 2026",
    isoDate: "2026-02-04",
    category: "Market Reports",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    keywords: [
      "data center construction market",
      "382 billion data center",
      "hyperscale construction spending",
      "data center growth 2026",
    ],
  },
  {
    slug: "skilled-trades-shortage-data-center-construction",
    title: "The Skilled Trades Crisis Hitting Data Center Construction",
    excerpt:
      "The BLS projects 400,000 more construction workers needed by 2033 — and the biggest gaps are in exactly the trades data centers need: electricians, HVAC techs, and plumbers. With 58% of data center operators already struggling to source talent, the trades pipeline is the industry's most urgent problem.",
    date: "January 28, 2026",
    isoDate: "2026-01-28",
    category: "Industry Trends",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
    keywords: [
      "skilled trades shortage",
      "electrician shortage data center",
      "construction worker shortage",
      "trades pipeline crisis",
    ],
  },
  {
    slug: "professional-workforce-shortage-data-center-engineers",
    title:
      "Where Are All the Data Center Engineers? Inside the Professional Talent Shortage",
    excerpt:
      "The data center industry added 4.7 million jobs to the U.S. economy — a 60% jump since 2017. But engineering programs can't keep up. From commissioning agents to power systems designers, we examine why the professional talent pool is running dry and what community colleges, universities, and employers are doing about it.",
    date: "January 22, 2026",
    isoDate: "2026-01-22",
    category: "Workforce Development",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    keywords: [
      "data center engineer shortage",
      "professional workforce development",
      "commissioning agent talent gap",
      "engineering talent pipeline",
    ],
  },
  {
    slug: "top-10-universities-producing-data-center-talent",
    title: "Top 10 Universities Producing Data Center Talent in 2026",
    excerpt:
      "From SMU's one-of-a-kind MS in Datacenter Systems Engineering to Georgia Tech's powerhouse electrical engineering program, we ranked the 10 universities whose graduates are most likely to end up designing, building, or operating the facilities that power the AI economy. Plus: the community college programs quietly filling the trades gap.",
    date: "January 18, 2026",
    isoDate: "2026-01-18",
    category: "Workforce Development",
    readTime: "11 min read",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    keywords: [
      "data center university programs",
      "SMU datacenter engineering",
      "Georgia Tech engineering",
      "data center career education",
    ],
  },
  {
    slug: "2026-data-center-construction-salary-guide",
    title: "2026 Data Center Construction Salary Guide",
    excerpt:
      "We pulled comp data from over 1,200 placements to build the most comprehensive salary guide in the industry. See how PMs, supers, CxAs, and MEP engineers are being paid across every major market — and where the biggest jumps happened this year.",
    date: "January 15, 2026",
    isoDate: "2026-01-15",
    category: "Salary Guides",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    keywords: [
      "data center salary guide 2026",
      "construction manager salary",
      "MEP engineer compensation",
      "commissioning agent salary",
    ],
  },
  {
    slug: "top-10-data-center-markets-construction-jobs",
    title: "Top 10 Data Center Markets for Construction Jobs in 2026",
    excerpt:
      "Ashburn is still king, but Phoenix is closing the gap fast and Columbus came out of nowhere. We ranked the top markets by active projects, salary premiums, and long-term growth potential for construction professionals.",
    date: "January 8, 2026",
    isoDate: "2026-01-08",
    category: "Market Reports",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    keywords: [
      "top data center markets 2026",
      "Ashburn data center jobs",
      "Phoenix data center construction",
      "data center market rankings",
    ],
  },
  {
    slug: "mep-engineering-trends-mission-critical-facilities",
    title: "MEP Engineering Trends in Mission Critical Facilities",
    excerpt:
      "Liquid cooling, high-density power distribution, and AI-driven BMS — the MEP landscape is shifting fast. Here's what engineers need to know to stay relevant and what employers should be looking for in their next hire.",
    date: "December 20, 2025",
    isoDate: "2025-12-20",
    category: "Industry Trends",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
    keywords: [
      "MEP engineering trends",
      "liquid cooling data center",
      "mission critical MEP",
      "high density power distribution",
    ],
  },
  {
    slug: "how-to-hire-data-center-construction-manager",
    title: "How to Hire a Data Center Construction Manager",
    excerpt:
      "Finding a CM with genuine data center experience is one of the hardest hires in the industry. We break down what to look for, where to find candidates, comp benchmarks, and interview questions that separate the real deal from the resume puffers.",
    date: "December 12, 2025",
    isoDate: "2025-12-12",
    category: "Career Advice",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    keywords: [
      "hire construction manager data center",
      "construction manager interview questions",
      "data center CM salary",
      "construction management hiring",
    ],
  },
  {
    slug: "future-of-hyperscale-data-center-construction",
    title: "The Future of Hyperscale Data Center Construction",
    excerpt:
      "AI workloads are driving unprecedented demand for hyperscale capacity. We look at the pipeline of announced projects, the labor shortages threatening timelines, and how modular construction is starting to change the game.",
    date: "December 5, 2025",
    isoDate: "2025-12-05",
    category: "Industry Trends",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    keywords: [
      "hyperscale data center construction",
      "AI data center demand",
      "modular data center construction",
      "hyperscale building pipeline",
    ],
  },
  {
    slug: "commissioning-agent-vs-commissioning-engineer",
    title:
      "Commissioning Agent vs. Commissioning Engineer: What's the Difference?",
    excerpt:
      "The titles get used interchangeably, but they're not the same role. We break down the responsibilities, qualifications, salary expectations, and career paths for each — and explain why it matters for your hiring process.",
    date: "November 28, 2025",
    isoDate: "2025-11-28",
    category: "Career Advice",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    keywords: [
      "commissioning agent vs engineer",
      "CxA career path",
      "commissioning engineer salary",
      "building commissioning roles",
    ],
  },
  {
    slug: "data-center-construction-workforce-challenges-2026",
    title: "Workforce Challenges Facing Data Center Construction in 2026",
    excerpt:
      "With over 5GW of new capacity under construction, the talent shortage isn't theoretical anymore. We analyze the bottleneck roles, geographic hot spots, and strategies employers are using to attract and retain skilled workers.",
    date: "November 20, 2025",
    isoDate: "2025-11-20",
    category: "Market Reports",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    keywords: [
      "data center workforce challenges",
      "construction talent shortage 2026",
      "data center hiring strategy",
      "workforce retention construction",
    ],
  },
  {
    slug: "negotiating-your-data-center-construction-salary",
    title: "How to Negotiate Your Data Center Construction Salary",
    excerpt:
      "You're in demand. Use it. We walk through how to benchmark your market value, time your ask, and negotiate total comp — salary, per diem, bonus, relocation — not just base pay.",
    date: "November 12, 2025",
    isoDate: "2025-11-12",
    category: "Salary Guides",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    keywords: [
      "negotiate construction salary",
      "data center salary negotiation",
      "construction compensation package",
      "per diem negotiation tips",
    ],
  },
];
