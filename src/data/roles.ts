export interface RoleFAQ {
  question: string;
  answer: string;
}

export interface Role {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  salaryRange: {
    min: number;
    max: number;
    currency: string;
    period: "year" | "hour";
  };
  description: string;
  responsibilities: string[];
  qualifications: string[];
  industries: string[];
  faqs: RoleFAQ[];
}

export const roles: Role[] = [
  /* ---------------------------------------------------------------------- */
  /*  Project Managers                                                       */
  /* ---------------------------------------------------------------------- */
  {
    slug: "project-managers",
    title: "Project Managers",
    metaTitle:
      "Data Center & Construction Project Manager Staffing | Hire PMs Fast",
    metaDescription:
      "Hire experienced project managers for data center, mission critical, and commercial construction projects. Pre-vetted PMs with $50M-$500M+ project track records. Average 14-day fill time.",
    salaryRange: {
      min: 105000,
      max: 185000,
      currency: "USD",
      period: "year",
    },
    description:
      "Project managers are the backbone of successful data center and construction projects. They own the schedule, the budget, and the client relationship, translating complex technical requirements into actionable plans and holding every stakeholder accountable to delivery commitments. In data center construction, where a single day of delay can cost hundreds of thousands of dollars in deferred revenue, the quality of your project manager directly determines project outcomes.\n\nData Center TALNT specializes in placing project managers who have managed $50 million to $500 million+ in critical facility construction. Our PM candidates understand owner-direct and GC delivery models, design-build and design-bid-build procurement, and the unique phasing requirements of mission critical construction. They bring proficiency in Procore, Primavera P6, Bluebeam, and other industry-standard tools, paired with the soft skills needed to lead cross-functional teams of 50-200+ people across complex, fast-tracked schedules.\n\nThe demand for qualified construction project managers has never been higher. According to the Project Management Institute, the global economy will need 25 million new project professionals by 2030. In the data center and mission critical sector, PMs with relevant experience command premium compensation and are typically off the market within 10-15 days of beginning a search. Our pre-built candidate pipeline and specialized screening process allow us to present qualified PM candidates within 7-10 business days of engagement.",
    responsibilities: [
      "Manage project budgets ranging from $10 million to $500 million+, including cost forecasting, change order management, and monthly financial reporting",
      "Develop and maintain master project schedules in Primavera P6 or Microsoft Project, tracking critical path activities and milestone dates",
      "Lead owner-architect-contractor (OAC) meetings and coordinate between all project stakeholders including owners, designers, subcontractors, and commissioning agents",
      "Oversee procurement and buyout processes for major mechanical, electrical, and specialty equipment packages",
      "Manage the RFI, submittal, and change order processes to maintain design intent and project scope integrity",
      "Coordinate with commissioning agents and quality assurance teams to ensure systems are installed per specification and tested to standard",
      "Develop and enforce project-specific safety plans in compliance with OSHA regulations and owner requirements",
      "Manage project closeout including substantial completion, punch list resolution, warranty coordination, and owner turnover documentation",
      "Report project status to senior leadership and ownership groups, providing transparent updates on budget, schedule, and risk",
      "Mentor and develop assistant project managers, project engineers, and other junior team members",
    ],
    qualifications: [
      "Bachelor's degree in Construction Management, Engineering, Architecture, or related field",
      "8-15+ years of progressive construction project management experience",
      "Demonstrated experience managing $50M+ projects in data center, mission critical, healthcare, or complex commercial construction",
      "Proficiency in Procore, Primavera P6, Bluebeam Revu, and Microsoft Office Suite",
      "PMP (Project Management Professional) certification preferred",
      "OSHA 30-Hour certification required",
      "Strong understanding of MEP systems, critical power distribution, and cooling architectures",
      "Experience with design-build, CM-at-Risk, and IPD delivery methods",
      "Proven ability to manage multi-trade coordination on fast-tracked schedules",
      "Excellent communication, negotiation, and conflict resolution skills",
    ],
    industries: [
      "Data Center Construction",
      "Mission Critical Facilities",
      "Commercial Construction",
      "Healthcare Construction",
      "Industrial Construction",
      "Utilities & Power Generation",
    ],
    faqs: [
      {
        question:
          "What is the average salary for a data center project manager?",
        answer:
          "Data center project managers typically earn between $105,000 and $185,000 annually, depending on experience, project size, and geographic market. Senior PMs managing hyperscale programs ($200M+) in high-demand markets like Northern Virginia or Dallas-Fort Worth can earn $170,000-$200,000+ with bonuses. Most positions also include benefits packages valued at $15,000-$30,000 including health insurance, 401(k) match, vehicle allowance, and performance bonuses.",
      },
      {
        question:
          "What certifications should a construction project manager have?",
        answer:
          "The most valued certifications for construction project managers include PMP (Project Management Professional) from PMI, CCM (Certified Construction Manager) from CMAA, LEED AP for sustainable construction, and OSHA 30-Hour for safety compliance. For data center projects specifically, familiarity with Uptime Institute Tier Standards and ASHRAE TC 9.9 guidelines is highly valued. Many employers also prefer candidates with a Professional Engineer (PE) license, particularly for engineer-procure-construct (EPC) delivery models.",
      },
      {
        question: "How quickly can you place a project manager?",
        answer:
          "Our average time-to-present qualified PM candidates is 7-10 business days from engagement, with overall time-to-fill averaging 14-18 business days. For urgent needs we maintain a bench of pre-vetted project managers in key markets who can mobilize within one week. Our specialized focus on data center and construction means we are not searching from scratch. We are reaching into an established network of over 5,000 project management professionals we have already screened and built relationships with.",
      },
      {
        question:
          "What size projects should a PM candidate have managed?",
        answer:
          "The appropriate project size depends on the role. For data center construction, we typically look for PMs who have managed individual projects of $50 million or more, as this indicates experience with the complexity, multi-trade coordination, and stakeholder management that data center builds demand. For senior or program-level PM roles, we seek candidates with cumulative project experience exceeding $500 million. For assistant PM or junior PM placements, we look for candidates who have served in a supporting role on projects of $25 million or more.",
      },
      {
        question:
          "Do you place project managers for both owners and contractors?",
        answer:
          "Yes. We place project managers on both the owner/developer side and the general contractor/construction management side. Owner-side PMs typically focus on program management, vendor oversight, budget control, and alignment with business objectives. Contractor-side PMs focus on day-to-day field execution, subcontractor management, and construction delivery. We help candidates understand the cultural and operational differences between these environments and match them to the right opportunity based on their background and career goals.",
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /*  Construction Managers                                                  */
  /* ---------------------------------------------------------------------- */
  {
    slug: "construction-managers",
    title: "Construction Managers",
    metaTitle:
      "Construction Manager Staffing | Senior CM Recruitment for Critical Projects",
    metaDescription:
      "Recruit experienced construction managers for data center builds, mission critical facilities, and large-scale commercial projects. Senior CMs with proven delivery track records.",
    salaryRange: {
      min: 120000,
      max: 200000,
      currency: "USD",
      period: "year",
    },
    description:
      "Construction managers are senior leaders who oversee the complete execution of building projects from preconstruction through turnover. Unlike project managers who may focus primarily on administrative and contractual aspects, construction managers maintain direct authority over field operations, trade coordination, schedule sequencing, and quality execution. In data center and mission critical construction, where systems interdependencies are extraordinarily complex and the cost of rework can be catastrophic, an experienced construction manager is often the difference between a successful project and a costly failure.\n\nData Center TALNT places construction managers who have led $100 million to $1 billion+ programs across data centers, hospitals, financial facilities, and complex commercial projects. Our CM candidates bring deep field experience combined with the strategic vision to manage multi-phase, fast-tracked construction programs. They understand how to sequence critical power installation with mechanical system rough-in, how to coordinate BIM clash detection across 15+ trade contractors, and how to manage the transition from base building construction to systems commissioning without losing a day of schedule.\n\nThe construction manager role is one of the most difficult positions to fill in the industry. According to the Bureau of Labor Statistics, employment of construction managers is projected to grow 8% through 2032, faster than the average for all occupations. The talent gap is especially pronounced for CMs with data center and mission critical experience, where the pool of truly qualified candidates is measured in the hundreds rather than thousands. Our focused recruitment practice and deep industry relationships allow us to reach these passive candidates and present them within a competitive timeframe.",
    responsibilities: [
      "Provide overall leadership and strategic direction for construction projects valued at $100M-$1B+",
      "Manage multiple concurrent projects or a single large-scale program with multiple phases",
      "Oversee all field operations including trade contractor coordination, schedule management, and quality assurance",
      "Lead preconstruction activities including constructability reviews, value engineering, and master schedule development",
      "Direct site logistics, phasing plans, and sequencing strategies for complex occupied-facility or fast-tracked construction",
      "Establish and maintain project safety culture, ensuring zero-incident performance targets are met",
      "Manage client relationships at the executive level, serving as the primary point of contact for project delivery",
      "Lead BIM coordination and clash detection processes across all trades",
      "Oversee commissioning coordination, ensuring all systems are installed, tested, and turned over per specification",
      "Build and develop project teams, including hiring, mentoring, and succession planning for key roles",
      "Drive continuous improvement in construction processes, technology adoption, and lean construction practices",
    ],
    qualifications: [
      "Bachelor's degree in Construction Management, Civil Engineering, or related field; Master's degree or MBA preferred",
      "15-25+ years of progressive construction experience with at least 10 years in a senior management role",
      "Demonstrated track record managing $100M+ projects in data center, mission critical, healthcare, or complex commercial construction",
      "CCM (Certified Construction Manager) certification preferred",
      "PMP (Project Management Professional) certification a plus",
      "OSHA 30-Hour certification required; OSHA 500/510 instructor certification a plus",
      "Expert-level proficiency in Primavera P6, Procore, BIM 360, and Bluebeam",
      "Deep understanding of MEP systems, critical infrastructure, and commissioning processes",
      "Proven ability to manage fast-tracked, design-build, and CM-at-Risk delivery models",
      "Executive presence with strong communication, negotiation, and leadership abilities",
      "Experience with LEED, sustainable construction practices, and energy-efficient building systems",
    ],
    industries: [
      "Data Center Construction",
      "Mission Critical Facilities",
      "Healthcare Construction",
      "Commercial Construction",
      "Industrial & Manufacturing",
      "Government & Institutional",
    ],
    faqs: [
      {
        question:
          "What is the difference between a construction manager and a project manager?",
        answer:
          "While the titles are sometimes used interchangeably, construction managers typically hold broader operational authority and more senior responsibility than project managers. A construction manager oversees the full execution strategy, field operations, and multi-project coordination, often managing multiple project managers. Project managers typically focus on a single project's budget, schedule, contracts, and stakeholder communication. In practice, a construction manager is more field-oriented and operationally focused, while a project manager handles more administrative, contractual, and financial functions. On large data center programs, both roles work in tandem with the CM providing strategic and operational leadership.",
      },
      {
        question:
          "What salary range should I expect for a data center construction manager?",
        answer:
          "Data center construction managers typically earn between $120,000 and $200,000 in base salary, with total compensation often reaching $175,000-$250,000+ when including performance bonuses, vehicle allowances, and profit-sharing. Senior construction managers overseeing hyperscale programs in top markets can command $200,000-$250,000+ in base salary. Geographic market, project size, and employer type (owner vs. GC vs. CM firm) all influence compensation. The overall trend is upward, with data center CM salaries increasing 12-15% over the past three years due to intense competition for experienced talent.",
      },
      {
        question:
          "How many years of experience does a construction manager need?",
        answer:
          "Most construction manager roles require 15-25+ years of progressive construction experience, with at least 8-10 years in a supervisory or management capacity. For data center construction specifically, employers typically look for candidates with a minimum of 5-7 years of direct data center or mission critical project experience. However, exceptional candidates with 12-15 years of total experience who have strong critical facility backgrounds may qualify for CM roles on smaller-scale projects. The key differentiator is not just years of experience but demonstrated ability to lead complex, multi-trade projects to successful completion.",
      },
      {
        question:
          "What makes a great construction manager for data center projects?",
        answer:
          "Exceptional data center construction managers combine deep technical knowledge with strong leadership abilities. They understand critical power systems (generators, UPS, switchgear, PDUs), precision cooling architectures (CRAH, chilled water plants, liquid cooling), fire suppression systems, and BMS/EPMS controls. Beyond technical knowledge, they demonstrate expertise in managing fast-tracked schedules with concurrent design and construction, coordinating 15-25+ trade contractors simultaneously, and executing live facility work without disrupting operations. They also possess the soft skills to manage relationships with demanding technology company owners who expect hyperscale-speed delivery with zero-defect quality.",
      },
      {
        question:
          "Do you recruit construction managers for both owner and contractor roles?",
        answer:
          "Yes. We recruit construction managers for owner/developer organizations (such as hyperscale cloud providers, colocation companies, and real estate developers), general contractors, construction management firms, and EPC contractors. Owner-side CMs typically focus on program oversight, vendor management, and standards enforcement across a portfolio of projects. Contractor-side CMs focus on field execution, trade coordination, and project delivery. We help our clients find the right match by understanding the specific leadership style, technical depth, and stakeholder management approach each environment requires.",
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /*  Schedulers                                                             */
  /* ---------------------------------------------------------------------- */
  {
    slug: "schedulers",
    title: "Schedulers",
    metaTitle:
      "Construction Scheduler Staffing | Primavera P6 Planners & CPM Experts",
    metaDescription:
      "Hire experienced construction schedulers and planners proficient in Primavera P6, critical path method scheduling, and resource-loaded schedules for data center and construction projects.",
    salaryRange: {
      min: 85000,
      max: 145000,
      currency: "USD",
      period: "year",
    },
    description:
      "Construction schedulers and planners are among the most strategically important yet underappreciated roles on any project. A skilled scheduler transforms thousands of individual activities into a coherent, resource-loaded critical path schedule that becomes the operational roadmap for the entire project team. In data center construction, where build timelines are compressed, trade interdependencies are extreme, and owners measure schedule performance in days rather than weeks, the scheduler's ability to model, analyze, and optimize the construction sequence can save millions in avoided delays.\n\nData Center TALNT recruits schedulers who combine deep Primavera P6 expertise with real construction knowledge. Our candidates are not software operators who simply enter data into a scheduling tool. They are construction professionals who understand sequencing logic, can build schedules from a set of drawings and specifications, know how to identify and manage float, and can communicate schedule impacts to project leadership in clear, actionable terms. They have created and maintained schedules for $50 million to $500 million+ projects and understand the unique scheduling challenges of critical facility construction.\n\nThe market for experienced construction schedulers is extremely competitive. Primavera P6-proficient schedulers with data center or mission critical experience are among the most sought-after professionals in the industry, with many receiving multiple offers simultaneously. Our specialized focus and proactive candidate relationship management allow us to consistently deliver qualified scheduler candidates when generalist agencies cannot.",
    responsibilities: [
      "Develop and maintain CPM (Critical Path Method) schedules using Primavera P6 for projects valued at $50M-$500M+",
      "Build resource-loaded and cost-loaded schedules that integrate with project budgets and workforce planning",
      "Perform monthly schedule updates, progress analysis, and critical path identification",
      "Generate schedule narratives and executive-level reports for owner and stakeholder communication",
      "Conduct what-if scenario analysis and schedule risk assessments to evaluate potential impacts of delays or changes",
      "Manage schedule fragnet development for change orders, recovery plans, and acceleration scenarios",
      "Coordinate with project managers, superintendents, and trade contractors to collect progress data and validate logic",
      "Support claims analysis and forensic scheduling for delay disputes and time extension requests",
      "Develop look-ahead schedules (2-week, 6-week, 90-day) for field coordination and procurement planning",
      "Maintain schedule coding structures for activities, WBS, and resource/cost assignment",
    ],
    qualifications: [
      "Bachelor's degree in Construction Management, Engineering, or related field preferred",
      "5-12+ years of construction scheduling experience",
      "Expert proficiency in Oracle Primavera P6 Professional (required)",
      "Working knowledge of Microsoft Project, Asta Powerproject, or other scheduling platforms",
      "PSP (Planning & Scheduling Professional) certification from AACE preferred",
      "PMI-SP (Scheduling Professional) certification a plus",
      "Strong understanding of CPM scheduling methodology, earned value analysis, and schedule risk assessment",
      "Experience scheduling data center, mission critical, healthcare, or complex commercial construction projects",
      "Proficiency in Bluebeam, Excel (advanced), and project management platforms (Procore, e-Builder)",
      "Ability to read and interpret construction drawings and specifications across all trades",
      "Strong analytical, communication, and presentation skills",
    ],
    industries: [
      "Data Center Construction",
      "Mission Critical Facilities",
      "Commercial Construction",
      "Healthcare Construction",
      "Industrial & Manufacturing",
      "Utilities & Infrastructure",
    ],
    faqs: [
      {
        question: "What software should a construction scheduler know?",
        answer:
          "Oracle Primavera P6 Professional is the industry standard for large-scale construction scheduling and is a non-negotiable requirement for most scheduler roles in data center and mission critical construction. Beyond P6, schedulers should be proficient in Microsoft Project (for smaller projects and client reporting), Bluebeam Revu (for plan review and quantity takeoff), and advanced Microsoft Excel (for data analysis and custom reporting). Familiarity with scheduling analytics tools like Acumen Fuse and DCMA 14-point assessment methodology is increasingly valued. Some firms also use Asta Powerproject, Phoenix Project Manager, or Smartsheet for supplementary scheduling and reporting needs.",
      },
      {
        question: "What is the salary range for a construction scheduler?",
        answer:
          "Construction scheduler salaries typically range from $85,000 to $145,000 annually, depending on experience level, project complexity, and geographic market. Entry-level schedulers with 3-5 years of experience typically earn $75,000-$95,000. Mid-level schedulers with 5-10 years and Primavera P6 expertise earn $95,000-$125,000. Senior schedulers and planning managers with 10+ years of experience on complex projects command $125,000-$155,000+. Data center and mission critical experience commands a 10-15% premium over general commercial construction scheduling roles.",
      },
      {
        question:
          "What certifications are valuable for construction schedulers?",
        answer:
          "The most recognized certification for construction schedulers is the PSP (Planning & Scheduling Professional) from AACE International, which demonstrates expertise in schedule planning, development, monitoring, and analysis. The PMI-SP (Scheduling Professional) from the Project Management Institute is also valued. Additional certifications that strengthen a scheduler's profile include PMP (Project Management Professional), CCP (Certified Cost Professional) from AACE, and Oracle Primavera P6 certification. For schedulers working in claims and forensic analysis, the CFCC (Certified Forensic Claims Consultant) from AACE is highly regarded.",
      },
      {
        question:
          "Why is scheduling particularly important in data center construction?",
        answer:
          "Data center construction operates under extraordinary schedule pressure because every day of delay represents deferred revenue for the owner, often measured in hundreds of thousands of dollars per day for hyperscale facilities. Data center builds also involve extreme trade interdependencies: critical power must be installed before generator testing, mechanical systems must be operational before IT equipment can be energized, and commissioning must be completed before the facility can go live. A skilled scheduler models all of these interdependencies, identifies the true critical path, and enables the project team to make informed decisions about sequencing, resource allocation, and risk mitigation.",
      },
      {
        question:
          "Do you place schedulers for both owner and contractor organizations?",
        answer:
          "Yes. We place schedulers on both the owner/developer side and the general contractor/construction management side. Owner-side schedulers typically focus on program-level scheduling, master schedule oversight, and contractor schedule review and validation. Contractor-side schedulers build and maintain detailed execution schedules, coordinate with trade contractors, and manage day-to-day schedule updates and reporting. We also place schedulers with scheduling consulting firms that provide third-party schedule review, forensic analysis, and claims support services.",
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /*  MEP Engineers                                                          */
  /* ---------------------------------------------------------------------- */
  {
    slug: "mep-engineers",
    title: "MEP Engineers",
    metaTitle:
      "MEP Engineer Staffing | Mechanical, Electrical & Plumbing Engineer Recruitment",
    metaDescription:
      "Hire MEP engineers specialized in data center and mission critical facility design and construction. Mechanical, electrical, and plumbing engineers with critical infrastructure expertise.",
    salaryRange: {
      min: 95000,
      max: 170000,
      currency: "USD",
      period: "year",
    },
    description:
      "MEP engineers, encompassing mechanical, electrical, and plumbing disciplines, are the technical core of any data center or mission critical facility project. These professionals design, review, and oversee the installation of the systems that keep critical facilities operational: redundant power distribution from utility feed to server rack, precision cooling systems that maintain temperature and humidity within tight tolerances, fire suppression systems that protect billions of dollars in equipment, and plumbing systems that support cooling towers, humidification, and building services. In data center construction, MEP systems represent 60-70% of total project cost, making MEP engineering talent the single most impactful technical resource on any build.\n\nData Center TALNT recruits MEP engineers across the full spectrum of critical facility work. On the electrical side we place power systems engineers, critical power designers, medium-voltage specialists, and controls engineers who understand 2N and N+1 redundancy architectures, generator paralleling switchgear, static transfer switches, UPS systems, and busway distribution. On the mechanical side we source HVAC engineers, chilled water plant designers, air-side and liquid cooling specialists, and controls engineers who understand CRAH/CRAC systems, economizer strategies, and PUE optimization. On the plumbing side we recruit fire protection engineers, piping designers, and process engineers for cooling tower systems, condensate recovery, and water treatment.\n\nThe shortage of MEP engineers with data center experience is one of the most critical talent bottlenecks in the industry. The American Society of Heating, Refrigerating, and Air-Conditioning Engineers (ASHRAE) estimates that the HVAC industry alone will need 43,000 additional engineers by 2030. When you narrow the pool to engineers with specific data center or mission critical experience, the shortage is even more acute. Our focused recruitment practice gives our clients access to this scarce talent through deep industry networks built over years of specialized placement.",
    responsibilities: [
      "Design and engineer mechanical, electrical, or plumbing systems for data center and mission critical facility projects",
      "Perform load calculations, equipment sizing, and system modeling for critical power, cooling, and fire protection systems",
      "Develop construction documents including plans, specifications, and details that comply with applicable codes and standards",
      "Review shop drawings, submittals, and RFIs during construction to ensure design intent is maintained",
      "Conduct site inspections and field observation to verify systems are installed per design specifications",
      "Coordinate with architects, structural engineers, and other disciplines to resolve design conflicts and optimize system layouts",
      "Perform energy modeling and PUE analysis to optimize facility efficiency and operational cost",
      "Support commissioning activities by reviewing test procedures, witnessing functional performance tests, and resolving deficiencies",
      "Evaluate existing facilities for expansion, retrofit, or upgrade potential including capacity analysis and system assessment",
      "Stay current with evolving codes, standards, and technologies including ASHRAE, NEC, NFPA, and Uptime Institute Tier Standards",
    ],
    qualifications: [
      "Bachelor's degree in Mechanical Engineering, Electrical Engineering, or related field (Master's degree a plus)",
      "5-15+ years of MEP engineering experience with focus on data center, mission critical, or complex commercial projects",
      "Professional Engineer (PE) license required for senior roles; EIT/FE acceptable for mid-level positions",
      "Proficiency in relevant design software: AutoCAD, Revit MEP, ETAP (electrical), Trane TRACE / Carrier HAP (mechanical)",
      "Strong knowledge of applicable codes: NEC, NFPA 70/72/75/76, ASHRAE 90.1/62.1, IMC, IPC, UMC, UPC",
      "Experience with critical power systems (generators, UPS, ATS/STS, PDUs) or precision cooling systems (CRAH, chilled water, liquid cooling)",
      "Understanding of data center design standards including Uptime Institute Tier Classifications and ASHRAE TC 9.9",
      "LEED AP, CEM, CxA, or other relevant certifications preferred",
      "Strong analytical, problem-solving, and communication skills",
      "Ability to work on fast-tracked projects with concurrent design and construction phases",
    ],
    industries: [
      "Data Center Design & Construction",
      "Mission Critical Facilities",
      "Healthcare Engineering",
      "Commercial MEP Engineering",
      "Industrial Facility Design",
      "Utilities & Power Systems",
    ],
    faqs: [
      {
        question: "What is an MEP engineer?",
        answer:
          "MEP stands for Mechanical, Electrical, and Plumbing, the three core building systems disciplines in construction. MEP engineers design and oversee the installation of HVAC systems (heating, ventilation, and air conditioning), electrical power distribution systems, lighting systems, fire alarm and suppression systems, plumbing and piping systems, and related building infrastructure. In data center construction, MEP engineers are responsible for the most critical and costly building systems including redundant power distribution, precision cooling, fire suppression, and building management systems. MEP systems typically account for 60-70% of a data center's total construction cost.",
      },
      {
        question: "What is the salary range for MEP engineers in data centers?",
        answer:
          "MEP engineers working in data center and mission critical projects typically earn between $95,000 and $170,000 annually, depending on discipline, experience level, licensure, and market. Electrical engineers tend to command slightly higher salaries than mechanical or plumbing engineers in the data center sector. A mid-level engineer with PE license and 7-10 years of experience typically earns $110,000-$140,000. Senior engineers and engineering managers with 15+ years of experience earn $145,000-$180,000+. Engineers at top consulting firms or working directly for hyperscale owners may earn at the higher end of these ranges.",
      },
      {
        question:
          "What is the difference between a data center MEP engineer and a commercial MEP engineer?",
        answer:
          "While the fundamental engineering principles are the same, data center MEP engineering requires deep specialization in redundant and fault-tolerant system design that commercial projects do not. Data center electrical engineers must understand 2N redundancy, static transfer switches, generator paralleling, and critical power distribution architectures. Mechanical engineers must understand precision cooling with tight temperature and humidity control (per ASHRAE TC 9.9), high-density cooling strategies, and PUE optimization. The quality standards, testing requirements, and commissioning protocols for data center MEP systems are significantly more rigorous than those for standard commercial construction.",
      },
      {
        question: "Do MEP engineers need a PE license?",
        answer:
          "A Professional Engineer (PE) license is strongly preferred and often required for senior MEP engineering roles, particularly those involving stamping construction documents, leading design teams, or serving as engineer of record. For mid-level and field roles such as MEP construction coordinators or field engineers, a PE is preferred but not always required. Engineers in Training (EIT) who hold a Fundamentals of Engineering (FE) certificate and are working toward their PE are well-positioned for career advancement. In consulting engineering firms, a PE license is typically required for advancement to principal or associate level.",
      },
      {
        question:
          "What specific MEP skills are most in demand for data center construction?",
        answer:
          "The most in-demand MEP skills in data center construction include: electrical critical power design (medium-voltage distribution, generators, UPS, STS, PDU), precision cooling system design and optimization (CRAH, chilled water plants, liquid cooling, rear-door heat exchangers), BMS/EPMS integration and controls programming, fire protection engineering (clean agent suppression, VESDA early detection), energy efficiency analysis and PUE optimization, and commissioning support. Emerging areas of demand include liquid cooling design for AI/GPU clusters, on-site power generation (fuel cells, microgrids), and sustainability engineering for net-zero data center initiatives.",
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /*  Superintendents                                                        */
  /* ---------------------------------------------------------------------- */
  {
    slug: "superintendents",
    title: "Superintendents",
    metaTitle:
      "Construction Superintendent Staffing | Data Center & Mission Critical Field Leaders",
    metaDescription:
      "Hire experienced superintendents for data center, mission critical, and commercial construction projects. Field-proven leaders managing complex, multi-trade construction operations.",
    salaryRange: {
      min: 95000,
      max: 165000,
      currency: "USD",
      period: "year",
    },
    description:
      "Superintendents are the field generals of construction. They are the first on site and the last to leave, owning day-to-day field operations, trade contractor coordination, quality control, and safety enforcement. In data center construction, where mechanical and electrical systems are extraordinarily complex and installation tolerances leave zero margin for error, the superintendent's ability to manage the building sequence, resolve field conflicts in real time, and hold trade contractors to exacting quality standards is absolutely essential to project success.\n\nData Center TALNT places superintendents who have run $25 million to $300 million+ critical facility projects. Our candidates understand the specific construction sequences of data center builds: foundation and structural work, building envelope, overhead mechanical rough-in, electrical duct bank and switchgear installation, raised floor systems, overhead bus duct and cable tray, precision cooling equipment, generator yards, and the complex startup and commissioning sequence that brings a data center to life. They know how to manage 200+ trade workers across 15-20+ subcontractors on a single site, maintaining safety, quality, and schedule simultaneously.\n\nThe demand for experienced construction superintendents significantly outpaces supply. The National Center for Construction Education and Research (NCCER) reports that the construction industry needs to attract an estimated 546,000 additional workers in 2024 alone. At the superintendent level, the shortage is even more pronounced because these roles require 10-20+ years of field experience that cannot be fast-tracked. Our proactive recruitment approach and extensive network of field leaders allow us to identify and engage qualified superintendent candidates, including passive candidates not actively searching, in timelines that keep our clients' projects on track.",
    responsibilities: [
      "Manage all day-to-day field construction operations for projects valued at $25M-$300M+",
      "Coordinate and schedule 10-25+ subcontractor trades working simultaneously on site",
      "Develop and manage 2-week and 6-week look-ahead schedules in coordination with the project scheduler",
      "Enforce project quality standards through daily inspections, punch list management, and trade work verification",
      "Lead daily safety briefings (toolbox talks), conduct site safety audits, and maintain zero-incident safety targets",
      "Manage site logistics including material deliveries, crane operations, equipment staging, and temporary utilities",
      "Conduct and lead weekly subcontractor coordination meetings",
      "Resolve field conflicts and coordination issues in real time using BIM models and field collaboration tools",
      "Document daily construction activities through detailed daily reports, photographs, and progress tracking",
      "Coordinate with inspectors, commissioning agents, and code officials for system inspections and approvals",
      "Manage building turnover process including punch list closeout, system demonstrations, and owner training",
    ],
    qualifications: [
      "10-20+ years of progressive construction field experience with at least 5 years as a superintendent",
      "Demonstrated experience running $25M+ projects in data center, mission critical, healthcare, or complex commercial construction",
      "Strong knowledge of mechanical and electrical systems including HVAC, critical power distribution, fire protection, and controls",
      "Ability to read and interpret construction drawings, specifications, and BIM models across all trades",
      "OSHA 30-Hour certification required; OSHA 500 instructor certification preferred",
      "Current first aid, CPR, and AED certification",
      "Proficiency in Procore, Bluebeam, BIM 360, and field management software",
      "Experience managing fast-tracked and design-build projects with concurrent design and construction",
      "Strong leadership, communication, and conflict resolution skills",
      "Bachelor's degree in Construction Management or related field preferred; equivalent field experience accepted",
    ],
    industries: [
      "Data Center Construction",
      "Mission Critical Facilities",
      "Commercial Construction",
      "Healthcare Construction",
      "Industrial Construction",
      "Tenant Improvement / Renovation",
    ],
    faqs: [
      {
        question: "What does a construction superintendent do?",
        answer:
          "A construction superintendent is the on-site field leader responsible for managing all daily construction activities. Their core responsibilities include coordinating subcontractor trades, maintaining the construction schedule, enforcing quality standards, managing site safety, overseeing material deliveries and logistics, resolving field conflicts, conducting inspections, and ensuring that work is performed in accordance with plans and specifications. They are typically the most experienced construction professional on site and serve as the primary point of contact for trade contractors, inspectors, and field engineers.",
      },
      {
        question:
          "What is the salary range for a data center superintendent?",
        answer:
          "Data center superintendents typically earn between $95,000 and $165,000 annually in base salary. Senior superintendents and general superintendents on hyperscale projects can earn $150,000-$185,000+ in base salary plus project completion bonuses. Total compensation packages often include vehicle allowance ($500-$1,000/month), per diem for travel assignments ($100-$175/day), health and retirement benefits, and performance bonuses that can add $10,000-$30,000+ annually. Markets with the highest demand, such as Northern Virginia, Dallas-Fort Worth, and Phoenix, tend to offer compensation at the higher end of these ranges.",
      },
      {
        question:
          "What is the difference between a superintendent and a general superintendent?",
        answer:
          "A superintendent manages a single project or a defined scope within a larger project. A general superintendent oversees multiple superintendents and coordinates field operations across an entire program, campus, or portfolio of projects. On a hyperscale data center campus, for example, a general superintendent might oversee 3-5 individual building superintendents, managing the sequencing and resource sharing between multiple concurrent builds. General superintendents typically have 15-25+ years of experience and serve as the senior field authority on large-scale construction programs.",
      },
      {
        question:
          "What makes data center superintendent experience different from general construction?",
        answer:
          "Data center superintendents must understand the highly specific construction sequences and quality requirements of critical facilities. This includes managing the installation of raised floor systems with precise levelness tolerances, overhead bus duct and cable tray routing in congested ceiling spaces, generator paralleling switchgear and fuel systems, precision HVAC equipment with tight temperature and humidity specifications, and the complex startup and commissioning sequence. They must also understand the concept of concurrent maintainability, ensuring that the facility is built in a way that allows individual systems to be serviced without taking the entire facility offline. This specialized knowledge base is distinct from general commercial construction experience.",
      },
      {
        question: "How quickly can you fill a superintendent position?",
        answer:
          "Our average time-to-fill for superintendent roles is 14-21 business days, with pre-vetted candidates available for presentation within 7-10 business days. For urgent needs, we maintain relationships with experienced superintendents between projects who can mobilize within 5-7 business days. Our speed advantage comes from maintaining a focused network of over 3,000 construction superintendents specifically in the data center, mission critical, and complex commercial sectors. We proactively engage these professionals on an ongoing basis so that when a client need arises, we are not starting from scratch.",
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /*  Commissioning Agents                                                   */
  /* ---------------------------------------------------------------------- */
  {
    slug: "commissioning-agents",
    title: "Commissioning Agents",
    metaTitle:
      "Commissioning Agent Staffing | Cx Professionals for Data Centers & Critical Facilities",
    metaDescription:
      "Recruit experienced commissioning agents and Cx authorities for data center, mission critical, and MEP system commissioning. CxA-certified professionals for Tier III and IV facilities.",
    salaryRange: {
      min: 100000,
      max: 175000,
      currency: "USD",
      period: "year",
    },
    description:
      "Commissioning agents are the final line of defense between construction completion and facility operations. They design, execute, and document the systematic testing process that verifies every system in a building performs as designed under normal, emergency, and failure conditions. In data center construction, where a power transfer failure during commissioning can delay facility turnover by weeks and where undetected cooling deficiencies can cause catastrophic equipment damage post-occupancy, the commissioning agent's role is not supplementary but essential. It is the process that transforms a construction project into an operational facility.\n\nData Center TALNT places commissioning agents and commissioning authorities who have commissioned Tier II through Tier IV data centers, mission critical facilities, and complex MEP systems. Our Cx candidates understand the difference between Level 1 (component verification), Level 2 (subsystem testing), Level 3 (system testing), Level 4 (integrated systems testing), and Level 5 (facility performance testing). They have written commissioning plans and specifications, developed test scripts for complex failure scenarios, witnessed thousands of functional performance tests, and managed the issue resolution process that ensures every deficiency is corrected before facility turnover.\n\nThe demand for qualified commissioning agents has exploded alongside the data center construction boom. The Building Commissioning Association estimates that commissioning adds 1-3% to project cost but delivers 8-20x return through avoided operational failures, reduced energy consumption, and extended equipment life. Despite this proven value, the pool of commissioning professionals with data center and critical facility experience remains limited. Our targeted recruitment in this niche discipline allows us to connect our clients with the Cx talent they need, when they need it.",
    responsibilities: [
      "Develop comprehensive commissioning plans and specifications for data center and mission critical facility projects",
      "Write detailed test scripts and procedures for mechanical, electrical, plumbing, fire protection, and controls systems",
      "Execute Level 1 through Level 5 commissioning testing including component verification, subsystem testing, integrated systems testing, and facility performance testing",
      "Witness and document functional performance testing of critical systems including generators, UPS, ATS/STS, chillers, CRAH units, fire suppression, and BMS/EPMS",
      "Manage the commissioning issues log, tracking all deficiencies from identification through resolution and retest",
      "Coordinate commissioning schedules with construction teams, ensuring testing windows align with construction milestones",
      "Review design documents, shop drawings, and submittals to identify potential commissioning issues during the design and construction phases",
      "Conduct factory witness testing (FAT) for major equipment including generators, switchgear, UPS, and cooling equipment",
      "Prepare commissioning reports documenting all test results, findings, and recommendations",
      "Support owner training and facility turnover by providing operational documentation and system performance baselines",
      "Perform seasonal commissioning and post-occupancy performance verification",
    ],
    qualifications: [
      "Bachelor's degree in Mechanical Engineering, Electrical Engineering, or related technical field",
      "7-15+ years of commissioning experience with focus on data center, mission critical, or complex MEP systems",
      "CxA (Certified Commissioning Authority) from ACG or BCxA certification required for senior roles",
      "Professional Engineer (PE) license preferred",
      "Deep knowledge of data center infrastructure including critical power (generators, UPS, STS, PDUs), precision cooling (CRAH, chilled water, liquid cooling), fire suppression (clean agent, pre-action sprinkler, VESDA), and BMS/EPMS controls",
      "Experience with Uptime Institute Tier III and Tier IV commissioning requirements",
      "Proficiency in commissioning software and documentation tools",
      "Strong understanding of ASHRAE Guideline 0 and ASHRAE Standard 202 commissioning processes",
      "Excellent technical writing skills for commissioning plans, test procedures, and reports",
      "Ability to work flexible hours during intensive testing phases including nights and weekends",
      "NETA certification for electrical testing a plus",
    ],
    industries: [
      "Data Center Commissioning",
      "Mission Critical Facilities",
      "Healthcare Facility Commissioning",
      "Commercial Building Commissioning",
      "Industrial Commissioning",
      "Utilities & Power Plant Commissioning",
    ],
    faqs: [
      {
        question: "What is a commissioning agent?",
        answer:
          "A commissioning agent (CxA), also called a commissioning authority or commissioning provider, is a qualified professional who plans and executes the systematic process of verifying that all building systems perform according to the design intent and the owner's operational requirements. In data center construction, the commissioning agent tests every critical system, including power distribution, cooling, fire suppression, and building controls, under normal operating conditions as well as simulated failure scenarios such as utility power loss, generator failure, and cooling system malfunction. The commissioning process ensures that the facility will operate reliably before it is loaded with IT equipment.",
      },
      {
        question:
          "What is the salary range for a data center commissioning agent?",
        answer:
          "Data center commissioning agents typically earn between $100,000 and $175,000 annually, with significant variation based on experience, certification, and market. Entry-level commissioning engineers with 3-5 years of experience earn $85,000-$110,000. Mid-level CxA-certified agents with 7-10 years of data center experience earn $115,000-$145,000. Senior commissioning authorities and Cx managers with 12+ years of experience and PE licensure command $145,000-$185,000+. Travel assignments often include per diem ($125-$175/day) and travel expenses that can add $25,000-$40,000+ in annual compensation.",
      },
      {
        question:
          "What certifications should a commissioning agent have?",
        answer:
          "The primary certification for commissioning agents is the CxA (Certified Commissioning Authority) offered by the AABC Commissioning Group (ACG) or the Building Commissioning Association (BCxA). This certification requires documented commissioning experience, passing a comprehensive exam, and ongoing continuing education. Other valuable certifications include Professional Engineer (PE) license, NETA (InterNational Electrical Testing Association) certification for electrical testing, CEM (Certified Energy Manager), and LEED AP with a Building Design + Construction specialty. For data center commissioning specifically, familiarity with Uptime Institute Tier Standards and their commissioning requirements is essential.",
      },
      {
        question: "What are the levels of data center commissioning?",
        answer:
          "Data center commissioning is typically organized into five levels. Level 1 (Factory Witness Testing / Installation Verification) confirms equipment is manufactured correctly and installed per specifications. Level 2 (Component / Subsystem Testing) verifies individual equipment operates correctly in isolation. Level 3 (System Testing) tests complete systems such as the entire generator plant or chilled water loop under load. Level 4 (Integrated Systems Testing or IST) tests the interaction between systems under simulated failure conditions, such as utility power loss triggering generator start and UPS transfer. Level 5 (Facility Performance Testing) validates the entire facility operates as designed under full IT load conditions. Each level builds on the previous and is essential for risk mitigation.",
      },
      {
        question:
          "Why is commissioning particularly important for data centers?",
        answer:
          "Commissioning is critical for data centers because these facilities have zero tolerance for system failure once operational. A single undetected deficiency in a power transfer scheme or cooling failover sequence can cause an outage that costs the owner millions of dollars in lost revenue, SLA penalties, and reputational damage. The Uptime Institute reports that human error and MEP system failure are the leading causes of data center outages, and that facilities that undergo rigorous commissioning experience significantly fewer operational incidents. Commissioning also validates that redundancy systems (N+1, 2N) actually function as designed, which can only be verified through systematic testing under simulated failure conditions.",
      },
    ],
  },
];

/**
 * Look up a role by its URL slug.
 */
export function getRoleBySlug(slug: string): Role | undefined {
  return roles.find((r) => r.slug === slug);
}

/**
 * Return all role slugs (useful for generateStaticParams).
 */
export function getAllRoleSlugs(): string[] {
  return roles.map((r) => r.slug);
}
