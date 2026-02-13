import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.datacentertalnt.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  /* ------------------------------------------------------------------ */
  /*  Static pages                                                       */
  /* ------------------------------------------------------------------ */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/employers`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/candidates`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/jobs`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/speed`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/veteran-recruiters`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/talent-network`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/technology`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/industries`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/roles`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  /* ------------------------------------------------------------------ */
  /*  Industry pages                                                     */
  /* ------------------------------------------------------------------ */
  const industries = [
    'data-center-staffing',
    'mission-critical-facilities',
    'construction-staffing',
    'utilities-staffing',
    'hyperscalers',
  ]

  const industryPages: MetadataRoute.Sitemap = industries.map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  /* ------------------------------------------------------------------ */
  /*  Role pages                                                         */
  /* ------------------------------------------------------------------ */
  const roles = [
    'project-managers',
    'construction-managers',
    'schedulers',
    'mep-engineers',
    'qa-qc-inspectors',
    'commissioning-agents',
  ]

  const rolePages: MetadataRoute.Sitemap = roles.map((slug) => ({
    url: `${BASE_URL}/roles/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  /* ------------------------------------------------------------------ */
  /*  Location pages                                                     */
  /* ------------------------------------------------------------------ */
  const locations = [
    'northern-virginia',
    'dallas-fort-worth',
    'phoenix',
    'atlanta',
    'chicago',
    'denver',
    'silicon-valley',
    'portland',
    'salt-lake-city',
    'columbus',
    'kansas-city',
    'nashville',
    'reno',
    'des-moines',
    'richmond',
    'san-antonio',
    'minneapolis',
    'houston',
    'los-angeles',
    'new-york-metro',
  ]

  const locationPages: MetadataRoute.Sitemap = locations.map((slug) => ({
    url: `${BASE_URL}/locations/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  /* ------------------------------------------------------------------ */
  /*  Blog posts                                                         */
  /* ------------------------------------------------------------------ */
  const blogSlugs = [
    'why-companies-use-staffing-agencies-data-center-hiring',
    'data-center-construction-382-billion-market-2026',
    'skilled-trades-shortage-data-center-construction',
    'professional-workforce-shortage-data-center-engineers',
    'top-10-universities-producing-data-center-talent',
    '2026-data-center-construction-salary-guide',
    'top-10-data-center-markets-construction-jobs',
    'mep-engineering-trends-mission-critical-facilities',
    'how-to-hire-data-center-construction-manager',
    'future-of-hyperscale-data-center-construction',
    'commissioning-agent-vs-commissioning-engineer',
    'data-center-construction-workforce-challenges-2026',
    'negotiating-your-data-center-construction-salary',
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...industryPages, ...rolePages, ...locationPages, ...blogPages]
}
