export function GET() {
  const content = `# Data Center TALNT

> Data Center TALNT is a specialized staffing and recruitment firm placing top-tier talent in data center, mission critical, construction, and utilities roles nationwide.

## About

Data Center TALNT connects experienced project managers, MEP engineers, superintendents, commissioning agents, schedulers, and construction managers with employers building and operating America's critical infrastructure. We serve all 50 U.S. states with concentrated expertise in the top data center markets: Northern Virginia (Ashburn), Dallas-Fort Worth, Phoenix, Chicago, Silicon Valley, Atlanta, Portland, Columbus, Reno, and Salt Lake City.

## Key Differentiators

- **15+ Year Veteran Recruiters**: Our recruiters average over 15 years of experience in data center and construction staffing.
- **Exclusive Talent Database**: 10+ years of recruiting data with every interview on every candidate logged, indexed, and searchable.
- **Speed**: Average 40-day time-to-fill vs. the industry average of 126 days (68% faster).

## Services

- Contract Staffing
- Contract-to-Hire
- Direct Placement
- Managed Staffing Programs

## Industries

- Data Center Construction
- Mission Critical Facilities
- Commercial & Industrial Construction
- Utilities & Power Infrastructure

## Roles We Place

- Project Managers ($110K–$180K)
- Construction Managers ($120K–$190K)
- MEP Engineers ($100K–$165K)
- Schedulers & Planners ($90K–$140K)
- Superintendents ($115K–$175K)
- Commissioning Agents ($105K–$160K)

## Contact

- Website: https://www.datacentertalnt.com
- Contact Page: https://www.datacentertalnt.com/contact

## Pages

- Home: https://www.datacentertalnt.com/
- About: https://www.datacentertalnt.com/about
- Employers: https://www.datacentertalnt.com/employers
- Candidates: https://www.datacentertalnt.com/candidates
- Jobs: https://www.datacentertalnt.com/jobs
- Industries: https://www.datacentertalnt.com/industries
- Roles: https://www.datacentertalnt.com/roles
- Locations: https://www.datacentertalnt.com/locations
- Speed & Execution: https://www.datacentertalnt.com/speed
- Veteran Recruiters: https://www.datacentertalnt.com/veteran-recruiters
- Talent Network: https://www.datacentertalnt.com/talent-network
- Technology: https://www.datacentertalnt.com/technology
- Blog: https://www.datacentertalnt.com/blog
- Resources: https://www.datacentertalnt.com/resources
- Contact: https://www.datacentertalnt.com/contact
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
