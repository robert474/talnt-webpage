export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface Industry {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  keyRoles: string[];
  marketStats: Record<string, string>;
  faqs: IndustryFAQ[];
  icon: string;
}

export const industries: Industry[] = [
  /* ---------------------------------------------------------------------- */
  /*  Data Center Staffing                                                   */
  /* ---------------------------------------------------------------------- */
  {
    slug: "data-center-staffing",
    title: "Data Center Staffing",
    metaTitle:
      "Data Center Staffing & Recruitment | Specialized Talent for Critical Facilities",
    metaDescription:
      "Data Center TALNT delivers pre-vetted project managers, MEP engineers, commissioning agents, and QA/QC inspectors for hyperscale, colocation, and enterprise data center builds across the US.",
    heroTitle: "Data Center Staffing Solutions Built for Scale",
    heroSubtitle:
      "From hyperscale campuses to edge deployments, we connect data center owners and contractors with the specialized talent that keeps builds on schedule and within budget.",
    description:
      "The data center construction market is experiencing unprecedented demand. With global data center capital expenditure projected to surpass $400 billion annually by 2027, owners, general contractors, and engineering firms face an acute talent shortage across every discipline. Data Center TALNT was founded to solve this exact problem. We specialize exclusively in sourcing, vetting, and placing professionals who understand the unique requirements of Tier III and Tier IV facility construction, from initial site selection through commissioning and turnover.\n\nOur recruiters maintain deep networks within the hyperscale, colocation, and enterprise data center ecosystems. We understand the difference between a standard commercial electrician and one who has pulled critical power through an A/B redundant distribution architecture. We know that a commissioning agent for a 100 MW campus needs fundamentally different experience than one working a 5 MW enterprise build. This specialization allows us to deliver candidates who can contribute from day one, reducing ramp-up time and project risk.\n\nWhether you are building a new hyperscale campus in Northern Virginia, expanding a colocation facility in Dallas, or retrofitting an enterprise data center in Chicago, our team delivers qualified professionals at every level. We support direct-hire, contract, and contract-to-hire engagements with typical fill times 40% faster than generalist staffing agencies. Our high placement retention rate reflects the precision of our screening process and our commitment to long-term fit over quick placement.",
    keyRoles: [
      "Data Center Project Manager",
      "MEP Engineer (Mechanical, Electrical, Plumbing)",
      "Commissioning Agent / Cx Authority",
      "Data Center QA/QC Inspector",
      "Electrical QA/QC Inspector",
      "Mechanical QA/QC Inspector",
      "Controls & BMS Engineer",
      "Preconstruction Manager",
      "Critical Power Engineer",
      "Fire Protection Engineer",
      "Quality Assurance / Quality Control Manager",
      "Safety Manager",
      "BIM Coordinator",
      "Scheduler / Planner",
      "Estimator",
    ],
    marketStats: {
      "Global Market Size (2025)": "$342 billion",
      "Projected CAGR (2025-2030)": "10.9%",
      "US Data Center Construction Spending (2025)": "$78 billion",
      "Average Hyperscale Build Duration": "18-24 months",
      "Industry Talent Gap": "Estimated 30% shortage of qualified professionals",
      "Northern Virginia Market Share": "35%+ of US capacity",
    },
    faqs: [
      {
        question: "What types of data center roles do you staff?",
        answer:
          "We staff the full spectrum of data center construction and operations roles, including project managers, MEP engineers (mechanical, electrical, and plumbing), commissioning agents, QA/QC inspectors, BMS/controls engineers, preconstruction managers, estimators, schedulers, safety managers, QA/QC managers, BIM coordinators, fire protection engineers, and critical power engineers. Our candidates have direct experience with Tier III and Tier IV facilities, hyperscale campuses, colocation facilities, and enterprise data centers.",
      },
      {
        question:
          "How is data center staffing different from general construction staffing?",
        answer:
          "Data center construction demands specialized knowledge that general construction staffing firms typically cannot assess. Professionals must understand critical power systems and redundancy configurations, precision cooling systems, raised floor and hot/cold aisle containment, generator paralleling switchgear, UPS systems, and commissioning protocols unique to critical facilities. Our recruiters have industry-specific expertise that allows us to accurately evaluate these technical competencies during the screening process.",
      },
      {
        question:
          "What is the current demand for data center construction talent?",
        answer:
          "Demand is at an all-time high. US data center construction spending is expected to exceed $78 billion in 2025, driven by AI workload growth, cloud migration, and enterprise digital transformation. The industry faces an estimated 30% talent shortage across key disciplines, particularly in electrical and mechanical trades, commissioning, and senior project management. Markets like Northern Virginia, Dallas-Fort Worth, and Phoenix are experiencing especially intense competition for qualified professionals.",
      },
      {
        question: "How quickly can you fill data center staffing positions?",
        answer:
          "Our average time-to-fill for data center roles is 12-18 business days, approximately 40% faster than generalist staffing agencies. For urgent needs we maintain a bench of pre-vetted candidates in high-demand markets who can mobilize within 5-7 business days. Our speed comes from maintaining a specialized candidate database of data center professionals and leveraging deep industry relationships built over years of focused recruitment.",
      },
      {
        question:
          "Do you provide staffing for both data center construction and operations?",
        answer:
          "Yes. While our primary focus is on construction-phase staffing, including new builds, expansions, and retrofits, we also place professionals in critical facility operations and maintenance roles. This includes chief engineers, facility managers, critical environment technicians, and operations directors. Many of our candidates transition from construction to operations, giving them a comprehensive understanding of the facilities they will manage.",
      },
      {
        question: "What engagement models do you offer for data center staffing?",
        answer:
          "We offer three primary engagement models: direct hire (permanent placement), contract staffing (project-based assignments typically 6-24 months), and contract-to-hire (trial period before permanent conversion). For large-scale hyperscale programs we also support managed team deployments where we source, vet, and manage an entire project team. Each model includes our comprehensive vetting process covering technical skills assessment, reference verification, background checks, and drug screening.",
      },
    ],
    icon: "server",
  },

  /* ---------------------------------------------------------------------- */
  /*  Mission Critical Facilities                                            */
  /* ---------------------------------------------------------------------- */
  {
    slug: "mission-critical-facilities",
    title: "Mission Critical Facilities Staffing",
    metaTitle:
      "Mission Critical Facilities Staffing | Healthcare, Financial & Telecom Recruitment",
    metaDescription:
      "Expert staffing for mission critical environments including hospitals, financial trading floors, telecom central offices, government facilities, and pharmaceutical cleanrooms.",
    heroTitle: "Staffing for Facilities Where Failure Is Not an Option",
    heroSubtitle:
      "We place engineers, project managers, and commissioning professionals in environments where uptime requirements are measured in nines and downtime costs millions per minute.",
    description:
      "Mission critical facilities operate under a simple mandate: they cannot fail. Whether it is a Level I trauma center, a financial trading floor processing billions in daily transactions, a Tier IV telecom central office, or a pharmaceutical manufacturing cleanroom, these environments demand professionals who understand that every system, every connection, and every procedure exists to protect continuous operation. Data Center TALNT provides the specialized talent these facilities require, professionals who bring both the technical expertise and the operational mindset that mission critical environments demand.\n\nThe mission critical sector encompasses a broad range of facility types, each with unique regulatory frameworks, redundancy requirements, and operational protocols. Healthcare facilities must comply with Joint Commission standards, ASHRAE 170, and FGI Guidelines. Financial institutions operate under SEC and FINRA infrastructure mandates. Telecommunications facilities follow TIA-942 and Telcordia standards. Government and defense installations require security clearances and must meet SCIF specifications. Our recruiters understand these distinctions and screen candidates against the specific compliance and technical requirements of each subsector.\n\nStaffing these environments requires more than matching resumes to job descriptions. It requires understanding that a mechanical engineer for a hospital central plant needs expertise in medical gas systems, steam sterilization, and redundant chiller plants that a commercial HVAC engineer simply does not possess. It means knowing that a QA/QC inspector for a pharmaceutical cleanroom must understand ISO 14644 classification, differential pressurization, and FDA validation protocols. This depth of screening is what sets Data Center TALNT apart and why our mission critical clients achieve strong placement success rates.",
    keyRoles: [
      "Mission Critical Project Manager",
      "Critical Facility MEP Engineer",
      "Commissioning Agent (Healthcare/Financial)",
      "Critical Systems QA/QC Inspector",
      "Controls & Automation Engineer",
      "Fire Protection / Life Safety Engineer",
      "Reliability Engineer",
      "Critical Environment Technician",
      "Facility Operations Director",
      "Compliance & Regulatory Specialist",
      "Emergency Power Systems Engineer",
      "Cleanroom Validation Specialist",
      "Security Systems Engineer",
      "Infrastructure Program Manager",
    ],
    marketStats: {
      "US Healthcare Construction Market (2025)": "$65 billion",
      "Financial Sector IT Infrastructure Spend": "$580 billion globally",
      "Telecom Infrastructure Investment (2025)": "$42 billion US",
      "Average Downtime Cost (Financial)": "$9,000+ per minute",
      "Average Downtime Cost (Healthcare)": "$8,662 per minute",
      "Mission Critical Talent Demand Growth": "18% year-over-year",
    },
    faqs: [
      {
        question: "What qualifies as a mission critical facility?",
        answer:
          "A mission critical facility is any building or environment where system failure would result in significant financial loss, safety hazards, regulatory violations, or disruption to essential services. Common examples include hospital surgical suites and ICUs, financial trading floors and data processing centers, telecom central offices and network operations centers, government command and control facilities, pharmaceutical manufacturing cleanrooms, broadcast studios, and military installations. These facilities typically require 99.999% or greater uptime and feature redundant mechanical, electrical, and plumbing systems.",
      },
      {
        question:
          "How do you vet candidates for mission critical facility roles?",
        answer:
          "Our vetting process for mission critical candidates goes beyond standard background checks and reference calls. We conduct technical competency interviews focused on redundant system design, failure mode analysis, and regulatory compliance knowledge specific to the facility type. We verify relevant certifications such as CxA, PE, LEED, CHFM, and NFPA. For government and defense work, we confirm active security clearances. We also assess cultural fit for high-stakes environments, including decision-making under pressure and adherence to strict operational protocols.",
      },
      {
        question:
          "Do you staff for both new construction and renovation of mission critical facilities?",
        answer:
          "Yes. We provide staffing for greenfield construction, major renovations, system upgrades, and tenant improvement projects in mission critical environments. Renovation and upgrade work in occupied mission critical facilities is particularly challenging because it requires maintaining continuous operations during construction. We specialize in placing professionals who have demonstrated experience with phased construction, hot cutovers, and maintaining system redundancy during active renovation work.",
      },
      {
        question:
          "What certifications do your mission critical candidates typically hold?",
        answer:
          "Our mission critical candidates commonly hold certifications including Professional Engineer (PE), Certified Commissioning Authority (CxA), ASHRAE certifications (BEAP, BEMP, HFDP), Certified Healthcare Facility Manager (CHFM), LEED AP, NFPA Certified Fire Protection Specialist, Certified Energy Manager (CEM), and various manufacturer-specific certifications for critical power and cooling equipment. For government work, many hold active Secret or Top Secret security clearances.",
      },
      {
        question:
          "What industries do your mission critical staffing services cover?",
        answer:
          "Our mission critical staffing services cover healthcare (hospitals, surgical centers, laboratory facilities), financial services (trading floors, data centers, operations centers), telecommunications (central offices, network operations centers, cell tower infrastructure), government and defense (command centers, SCIFs, military bases), pharmaceutical and biotech (cleanrooms, research labs, manufacturing), media and broadcast (studios, transmission facilities), and higher education (research facilities, medical schools). Each sector has unique requirements that our specialized recruiters understand and screen for.",
      },
    ],
    icon: "shield",
  },

  /* ---------------------------------------------------------------------- */
  /*  Construction Staffing                                                  */
  /* ---------------------------------------------------------------------- */
  {
    slug: "construction-staffing",
    title: "Construction Staffing",
    metaTitle:
      "Construction Staffing Agency | Project Managers, QA/QC Inspectors & Engineers",
    metaDescription:
      "Specialized construction staffing for ground-up builds, renovations, and tenant improvements. We place project managers, QA/QC inspectors, estimators, and engineers on commercial and industrial projects.",
    heroTitle: "Construction Talent That Delivers Projects on Time and on Budget",
    heroSubtitle:
      "From preconstruction through punch list, we source experienced construction professionals who bring the leadership and technical skills your projects demand.",
    description:
      "The US construction industry put $2.2 trillion of work in place in 2024, yet the sector faces a workforce shortage of roughly 500,000 skilled workers according to Associated Builders and Contractors. This gap is most acute at the supervisory and management level, where experienced project managers, QA/QC inspectors, and engineers are in fierce demand across commercial, industrial, and institutional sectors. Data Center TALNT bridges this gap by connecting construction firms with pre-vetted professionals who have the track record, certifications, and leadership capabilities to drive project success.\n\nOur construction staffing practice covers the full project lifecycle. During preconstruction we place estimators, preconstruction managers, and VDC/BIM coordinators who set projects up for success from day one. During active construction we deliver project managers, QA/QC inspectors, assistant QA/QC inspectors, MEP coordinators, safety managers, and quality control professionals. For closeout we provide commissioning agents, punch list managers, and turnover coordinators. This lifecycle approach means we understand not just the role in isolation but how it connects to every other function on the project.\n\nWe serve general contractors, specialty subcontractors, construction management firms, and owner-direct organizations across ground-up new construction, major renovation, tenant improvement, and infrastructure projects. Our recruiters have construction industry backgrounds and understand the difference between a QA/QC inspector who has run a $200 million healthcare project and one who has managed $20 million retail build-outs. This nuance in evaluation is what allows us to deliver candidates who match the specific scope, complexity, and culture of your projects.",
    keyRoles: [
      "Construction Project Manager",
      "Senior QA/QC Inspector",
      "Assistant QA/QC Inspector",
      "General QA/QC Inspector",
      "Preconstruction Manager",
      "Senior Estimator",
      "MEP Coordinator",
      "VDC / BIM Manager",
      "Construction Scheduler",
      "Safety Director / Manager",
      "Quality Control Manager",
      "Project Engineer",
      "Field Engineer",
      "Director of Construction",
      "Construction Manager",
    ],
    marketStats: {
      "US Construction Spending (2024)": "$2.2 trillion",
      "Industry Workforce Shortage": "~500,000 workers (ABC estimate)",
      "Avg. PM Salary (Commercial)": "$105,000-$165,000",
      "Avg. QA/QC Inspector Salary": "$80,000-$140,000",
      "Projected Industry Growth (2024-2034)": "4.7% (BLS)",
      "Time to Fill Senior Roles (Industry Avg.)": "45-60 days",
    },
    faqs: [
      {
        question: "What types of construction projects do you staff?",
        answer:
          "We staff professionals for a wide range of construction project types including commercial office buildings, industrial and manufacturing facilities, healthcare and hospital construction, data centers and mission critical facilities, educational institutions, retail and mixed-use developments, government and institutional buildings, infrastructure and heavy civil projects, and tenant improvement / interior build-outs. Our candidates have experience with projects ranging from $5 million tenant improvements to $1 billion+ hyperscale campuses.",
      },
      {
        question:
          "How do you differentiate from other construction staffing agencies?",
        answer:
          "Three key factors set us apart. First, specialization: our recruiters have construction industry backgrounds and understand the technical and operational nuances of different project types and roles. Second, vetting depth: we go beyond resume review with structured technical interviews, project reference verification, and safety record checks. Third, speed without compromise: our specialized candidate database and industry network allow us to present qualified candidates in 10-15 business days while maintaining our rigorous screening standards. We consistently achieve strong placement retention rates at the 12-month mark.",
      },
      {
        question: "Do you provide both temporary and permanent construction staffing?",
        answer:
          "Yes. We offer direct hire (permanent placement), contract staffing (project-duration assignments), and contract-to-hire engagements. Many of our clients use contract staffing to bring on senior leadership for specific project phases, such as a QA/QC inspector for the duration of a 14-month build, while others use our direct hire service to fill permanent positions on their core team. We also support surge staffing for firms that have won multiple projects simultaneously and need to scale their team rapidly.",
      },
      {
        question:
          "What experience level do your construction candidates typically have?",
        answer:
          "We primarily focus on mid-career to senior-level construction professionals. Our typical project manager candidate has 8-15 years of experience and has managed $50 million to $500 million+ in project value. Our QA/QC inspector candidates typically have 10-20 years of field experience and have run projects across multiple sectors. For estimating and preconstruction roles, we source candidates with 5-15 years of experience and demonstrated accuracy in competitive bid and negotiated environments. We also place earlier-career project engineers and assistant QA/QC inspectors with 3-7 years of experience.",
      },
      {
        question: "What regions do you cover for construction staffing?",
        answer:
          "We provide construction staffing services nationwide across the United States, with particularly strong networks in high-growth markets including the Sun Belt (Texas, Arizona, Florida, Georgia, the Carolinas), the Mid-Atlantic (Virginia, Maryland, DC metro), the West Coast (California, Oregon, Washington), and major metros across the Midwest and Mountain West. Many of our candidates are open to relocation or travel, which expands our reach into secondary and emerging markets.",
      },
      {
        question: "How do you ensure construction candidates are safety-qualified?",
        answer:
          "Safety is a non-negotiable component of our screening process. We verify OSHA 30-Hour certification (required for all supervisory candidates), check for OSHA violation history, confirm current first aid and CPR certifications, and review each candidate's personal safety record including EMR (Experience Modification Rate) history for QA/QC inspector and safety roles. We also assess safety culture alignment during interviews, ensuring candidates prioritize proactive safety management rather than reactive compliance.",
      },
    ],
    icon: "hardhat",
  },

  /* ---------------------------------------------------------------------- */
  /*  Utilities Staffing                                                     */
  /* ---------------------------------------------------------------------- */
  {
    slug: "utilities-staffing",
    title: "Utilities Staffing",
    metaTitle:
      "Utilities Staffing & Recruitment | Power Generation, T&D, and Renewable Energy Talent",
    metaDescription:
      "Specialized staffing for the utilities sector including power generation, transmission & distribution, renewable energy, natural gas, water/wastewater, and grid modernization projects.",
    heroTitle: "Powering the Workforce Behind America's Energy Infrastructure",
    heroSubtitle:
      "We recruit engineers, project managers, lineworkers, and technical specialists for utilities building, maintaining, and modernizing the nation's critical energy infrastructure.",
    description:
      "The US utilities sector is in the midst of a generational transformation. An estimated 50% of the current utility workforce is eligible for retirement within the next decade, according to the American Public Power Association. Simultaneously, the industry is navigating the largest infrastructure buildout in its history, driven by grid modernization, renewable energy integration, electric vehicle charging infrastructure, and the massive power demands of new data center construction. The Bipartisan Infrastructure Law alone allocated $65 billion to power infrastructure and clean energy. Data Center TALNT provides the specialized talent this transformation requires.\n\nOur utilities staffing practice spans the entire energy value chain. In power generation we place engineers, plant managers, and operations specialists across natural gas, nuclear, coal, solar, wind, battery storage, and hydrogen facilities. In transmission and distribution we source line engineers, substation designers, relay protection engineers, project managers, and field supervisors for both new construction and system upgrades. In renewable energy we recruit for utility-scale solar farms, onshore and offshore wind projects, battery energy storage systems, and distributed generation programs. We also serve the water and wastewater utility sector with process engineers, plant operators, and capital project managers.\n\nWhat distinguishes our utilities recruitment is our understanding of the regulatory and operational complexity these professionals navigate daily. Utility workers operate under NERC reliability standards, FERC regulations, state public utility commission oversight, EPA environmental mandates, and OSHA safety requirements. They must understand load flow analysis, relay coordination, SCADA systems, and grid interconnection protocols. Our recruiters have the technical literacy to evaluate these competencies, ensuring that every candidate we present is not just experienced but properly qualified for the specific utility environment and regulatory framework they will enter.",
    keyRoles: [
      "Utility Project Manager",
      "Power Systems Engineer",
      "Transmission Line Engineer",
      "Substation Design Engineer",
      "Relay Protection Engineer",
      "Distribution Engineer",
      "Renewable Energy Project Manager",
      "Solar Engineer / Designer",
      "Wind Turbine Engineer",
      "BESS (Battery Storage) Engineer",
      "Grid Modernization Specialist",
      "Utility Construction QA/QC Inspector",
      "SCADA / Controls Engineer",
      "Environmental Compliance Manager",
      "Right-of-Way Agent",
      "Utility Estimator",
      "GIS Analyst (Utility)",
      "Plant Manager / Operations Director",
    ],
    marketStats: {
      "US Utility Infrastructure Investment (2025)": "$175 billion annually",
      "Bipartisan Infrastructure Law (Power/Clean Energy)": "$65 billion allocated",
      "Workforce Retirement Risk": "50% eligible within 10 years",
      "Renewable Energy Growth Rate": "Solar +23% / Wind +12% annually",
      "Transmission Line Miles Needed by 2035": "47,000+ miles (DOE estimate)",
      "Avg. Utility Engineer Salary": "$95,000-$145,000",
      "EV Charging Infrastructure Target": "500,000 stations by 2030",
    },
    faqs: [
      {
        question: "What segments of the utilities industry do you staff?",
        answer:
          "We staff across all major utility segments including electric power generation (natural gas, nuclear, coal, hydroelectric), renewable energy (utility-scale solar, onshore and offshore wind, battery energy storage systems), transmission and distribution (high-voltage transmission lines, substations, distribution systems), natural gas utilities (pipelines, compressor stations, LNG facilities), water and wastewater utilities (treatment plants, distribution systems, collection systems), and emerging sectors like grid modernization, EV charging infrastructure, hydrogen production, and microgrids. We serve investor-owned utilities, municipal utilities, rural electric cooperatives, independent power producers, and EPC contractors.",
      },
      {
        question:
          "How is the energy transition affecting demand for utility workers?",
        answer:
          "The energy transition is creating unprecedented demand across the utilities sector. The shift to renewable generation requires thousands of new solar engineers, wind technicians, and battery storage specialists. Grid modernization demands experienced transmission engineers, substation designers, and SCADA/controls professionals. Simultaneously, conventional generation plants still require skilled operators and maintenance personnel during the transition period. The net effect is a significant expansion of total utility workforce demand at a time when baby boomer retirements are already creating acute shortages. Industry analysts estimate the sector needs to hire 100,000+ workers annually just to maintain current operations and meet infrastructure buildout targets.",
      },
      {
        question: "Do you staff for renewable energy projects specifically?",
        answer:
          "Yes, renewable energy staffing is one of our fastest-growing practice areas. We place professionals across the full renewable energy project lifecycle including development (site assessors, environmental consultants, permitting specialists), engineering (solar designers, wind resource analysts, electrical engineers, interconnection specialists), construction (project managers, QA/QC inspectors, commissioning agents), and operations (plant managers, O&M technicians, performance analysts, asset managers). We staff for utility-scale solar (100+ MW), distributed generation, onshore wind farms, emerging offshore wind projects, and battery energy storage systems (BESS).",
      },
      {
        question:
          "What certifications and clearances do utility candidates typically need?",
        answer:
          "Certification requirements vary by role and utility segment. Common certifications include Professional Engineer (PE) license, NERC System Operator certification, Project Management Professional (PMP), Certified Energy Manager (CEM), NABCEP (solar), GWO (wind), OSHA 30-Hour, CDL (for field roles), and various manufacturer certifications for specific equipment (transformers, switchgear, turbines, inverters). For nuclear facilities, NRC security clearances are required. For government utility work, standard background investigations and sometimes security clearances are necessary. Our recruiters verify all required certifications and clearances as part of our screening process.",
      },
      {
        question:
          "How does data center growth affect the utilities staffing market?",
        answer:
          "Data center growth is one of the most significant demand drivers in the utilities sector today. A single hyperscale data center campus can require 200-500 MW of power, equivalent to the consumption of a small city. This drives massive investment in new generation capacity (particularly natural gas and renewables), high-voltage transmission lines, and substation construction to serve data center clusters. Markets like Northern Virginia, Dallas-Fort Worth, and Phoenix are seeing billions of dollars in utility infrastructure investment directly linked to data center demand. This creates intense competition for utility engineers, line workers, and project managers in these markets, which is where our combined expertise in both data center and utilities staffing provides a unique advantage.",
      },
    ],
    icon: "zap",
  },
];

/**
 * Look up an industry by its URL slug.
 */
export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

/**
 * Return all industry slugs (useful for generateStaticParams).
 */
export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
