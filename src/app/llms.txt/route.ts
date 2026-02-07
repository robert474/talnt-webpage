export function GET() {
  const content = `# Data Center TALNT

> Data Center TALNT is a specialized staffing and recruitment firm placing top-tier talent in data center, mission critical, construction, and utilities roles nationwide.

## About

Data Center TALNT connects experienced project managers, MEP engineers, superintendents, commissioning agents, schedulers, and construction managers with employers building and operating America's critical infrastructure. We serve all 50 U.S. states with concentrated expertise in the top data center markets: Northern Virginia (Ashburn), Dallas-Fort Worth, Phoenix, Chicago, Silicon Valley, Atlanta, Portland, Columbus, Reno, and Salt Lake City.

## Key Differentiators

### 1. Veteran Recruiters (The Veteran Advantage)
- Our recruiters average 15+ years in data center and construction staffing
- 2,500+ combined career placements across 40+ states
- They've walked job sites, attended OAC meetings, and observed commissioning events
- They can vet a commissioning agent's technical skills in a 15-minute call
- When they call a VP of Construction, that call gets returned — because there's a track record behind it

### 2. Exclusive Talent Database (The Database Advantage)
- 10+ years of recruiting data with every interview on every candidate logged, indexed, and searchable
- 70% of candidates in our network are passive — not on job boards
- Every candidate has detailed interview notes, technical assessments, verified project history, and performance feedback
- We track: certifications (PMP, CxA, PE, NETA, OSHA), tier/MW experience, compensation history, geographic preferences, availability timelines
- Deep candidate coverage in every top data center market

### 3. Speed & Execution (How We Move Fast)
- Average 40-day time-to-fill vs. the industry average of 126 days (68% faster)
- Source: The Birm Group — Data Center Construction Boom & Hiring Surge in 2026
- Step 1: Live Talent Pipeline — pre-screened professionals ready before you call
- Step 2: Industry-Specialist Recruiters — technical vetting in 15 minutes, not weeks
- Step 3: 48-Hour First Shortlist — screened and reference-checked candidates in 2 business days
- Step 4: Streamlined Hiring Process — we handle scheduling, feedback, counteroffers, and onboarding
- Result: 86 fewer days of schedule risk on every hire

### 4. Technology
- Jobs posted and distributed in minutes (automated, not manual)
- Instant candidate matching against our 10+ year database
- Same-day screening and interview scheduling
- Pre-verified candidates with references on file
- Streamlined offers and digital onboarding

## The Cost of Slow Hiring
- $15,000+ per week cost of an unfilled PM or superintendent position
- 340,000 unfilled construction positions projected by BLS for end of 2026
- 82% of construction firms report difficulty filling positions (AGC data)
- 23,000 experienced workers retiring annually from the industry

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

- Project Managers ($130K–$175K base + 10-20% bonus)
- Senior Superintendents ($140K–$185K base + $150-$200/day per diem)
- Commissioning Agents ($110K–$155K base)
- MEP Engineers ($105K–$145K base)
- Controls Engineers ($95K–$135K base)
- Estimators ($100K–$140K base)
- Safety Managers ($90K–$120K base)
- BIM Coordinators ($85K–$115K base)

## Top Data Center Markets We Serve

1. Northern Virginia (Ashburn) — largest market globally, 70%+ of internet traffic
2. Phoenix, AZ — fastest growing, cheap power, tax incentives
3. Dallas-Fort Worth, TX — robust utility infrastructure, no state income tax
4. Columbus, OH — Intel investment, Midwest fiber hub
5. Chicago, IL — financial sector demand, redundant power
6. Atlanta, GA — Southeast connectivity hub
7. Salt Lake City, UT — low cost, fiber backbone proximity
8. Portland/Hillsboro, OR — Intel, renewable energy
9. Reno/Las Vegas, NV — tax benefits, solar potential
10. San Antonio, TX — military/cybersecurity talent pipeline

## Contact

- Website: https://www.datacentertalnt.com
- Contact Page: https://www.datacentertalnt.com/contact
- Email: info@datacentertalnt.com

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

## Blog Topics

- 2026 Data Center Construction Salary Guide (salary ranges by role and market)
- Top 10 Data Center Markets for Construction Jobs
- The Skilled Trades Crisis Hitting Data Center Construction (BLS, IEEE Spectrum data)
- Where Are All the Data Center Engineers? (professional workforce shortage)
- Top 10 Universities Producing Data Center Talent (SMU, Georgia Tech, Virginia Tech, Stanford, Texas A&M, Penn State, Purdue, CU Boulder, NC State, ASU)
- Why Smart Companies Use Staffing Agencies for Data Center Hiring
- How to Hire a Data Center Construction Manager
- MEP Engineering Trends in Mission Critical Facilities
- The Future of Hyperscale Data Center Construction
- Commissioning Agent vs. Commissioning Engineer Explained
- Workforce Challenges Facing Data Center Construction in 2026
- How to Negotiate Your Data Center Construction Salary
- Data Center Construction Is Now a $382 Billion Market
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
