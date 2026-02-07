import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import SchemaScript from "@/components/seo/SchemaScript";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { siteConfig } from "@/lib/metadata";

/* ========================================================================== */
/*  Role Data Types                                                           */
/* ========================================================================== */

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedRole {
  title: string;
  slug: string;
  brief: string;
}

interface RoleData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  salaryRange: string;
  salaryMin: number;
  salaryMax: number;
  heroTitle: string;
  description: string[];
  responsibilities: string[];
  qualifications: string[];
  certifications: string[];
  industries: { name: string; slug: string }[];
  relatedRoles: RelatedRole[];
  faqs: FAQItem[];
  demandTrend: string;
}

/* ========================================================================== */
/*  Comprehensive Role Data                                                   */
/* ========================================================================== */

const rolesData: Record<string, RoleData> = {
  /* ---------------------------------------------------------------------- */
  /*  Project Managers                                                       */
  /* ---------------------------------------------------------------------- */
  "project-managers": {
    slug: "project-managers",
    title: "Project Managers",
    metaTitle:
      "Data Center Project Manager Staffing | Hire PMs | Data Center TALNT",
    metaDescription:
      "Hire experienced data center and construction project managers through DC TALNT. We recruit PMP-certified PMs with mission critical facility, hyperscale, and ground-up construction expertise nationwide.",
    salaryRange: "$95,000 - $165,000",
    salaryMin: 95000,
    salaryMax: 165000,
    heroTitle: "Data Center Project Manager Staffing",
    description: [
      "Data center project managers orchestrate every phase of mission critical construction, from initial feasibility studies and design coordination through procurement, construction, commissioning, and turnover. Unlike general commercial construction PMs, data center project managers must navigate the rigorous uptime requirements, redundancy standards, and concurrent maintainability demands that define Tier III and Tier IV facilities. They coordinate closely with MEP engineers, commissioning agents, general contractors, and owner representatives to ensure that complex electrical, mechanical, and fire protection systems integrate seamlessly within aggressive timelines.",
      "At DC TALNT, we recruit project managers who have delivered hyperscale campuses for colocation providers, enterprise data centers for Fortune 500 companies, and edge facilities for telecommunications carriers. Our candidates bring fluency in critical path scheduling, risk management, change order negotiation, and stakeholder communication at the executive level. Many hold PMP certification from the Project Management Institute alongside industry-specific credentials in OSHA safety, LEED sustainability, and lean construction methods.",
      "The demand for experienced data center PMs continues to accelerate as cloud providers, AI infrastructure developers, and enterprise organizations invest billions in new capacity across North America. DC TALNT helps employers reduce time-to-hire and candidates find roles that match their expertise and career trajectory in this high-growth market.",
    ],
    responsibilities: [
      "Manage full project lifecycle for data center construction from pre-construction planning through substantial completion and turnover",
      "Develop and maintain detailed project schedules using CPM methodology in Primavera P6 or Microsoft Project",
      "Coordinate design teams, general contractors, MEP subcontractors, and commissioning agents across concurrent work streams",
      "Prepare and manage project budgets ranging from $10M to $500M+ for hyperscale and colocation builds",
      "Conduct regular progress meetings, prepare executive status reports, and manage owner communication cadence",
      "Oversee procurement of long-lead electrical and mechanical equipment including generators, switchgear, UPS systems, and chillers",
      "Implement and enforce site safety programs aligned with OSHA regulations and owner-specific safety standards",
      "Manage change order processes, contract negotiations, and vendor performance evaluations",
      "Coordinate Integrated Systems Testing (IST) and Level 5 commissioning activities with the commissioning authority",
      "Ensure compliance with local building codes, AHJ requirements, and industry standards such as ASHRAE, NFPA, and TIA-942",
    ],
    qualifications: [
      "Bachelor's degree in Construction Management, Engineering, Architecture, or related field",
      "7-15+ years of project management experience with at least 3 years focused on data center or mission critical construction",
      "Demonstrated experience managing projects valued at $25M or more through full lifecycle delivery",
      "Proficiency in scheduling software (Primavera P6, MS Project) and project management platforms (Procore, Bluebeam)",
      "Strong understanding of critical power distribution, cooling architectures, and redundancy configurations (N+1, 2N, 2N+1)",
      "Experience with design-build, CM at Risk, and integrated project delivery methods",
      "Excellent written and verbal communication skills with ability to present to C-suite stakeholders",
      "Willingness to travel to project sites as needed, with some roles requiring on-site presence five days per week",
    ],
    certifications: [
      "PMP (Project Management Professional)",
      "OSHA 30-Hour Construction Safety",
      "LEED AP (Leadership in Energy and Environmental Design)",
      "CCM (Certified Construction Manager)",
      "DBIA (Design-Build Institute of America Certification)",
      "Lean Construction Institute Credentials",
    ],
    industries: [
      { name: "Data Centers", slug: "data-center-staffing" },
      { name: "Mission Critical Facilities", slug: "mission-critical-facilities" },
      { name: "Construction", slug: "construction-staffing" },
    ],
    relatedRoles: [
      {
        title: "Construction Managers",
        slug: "construction-managers",
        brief:
          "Construction managers provide on-site leadership and multi-trade coordination on large-scale data center and infrastructure builds.",
      },
      {
        title: "Schedulers & Planners",
        slug: "schedulers",
        brief:
          "Schedulers build and maintain the CPM schedules that project managers rely on to track milestones and critical path activities.",
      },
      {
        title: "Superintendents",
        slug: "superintendents",
        brief:
          "Superintendents manage daily field operations and serve as the project manager's primary on-site representative.",
      },
    ],
    faqs: [
      {
        question:
          "What qualifications do data center project managers need?",
        answer:
          "Most data center project managers hold a bachelor's degree in construction management, engineering, or a related field, paired with 7-15+ years of progressive project management experience. PMP certification is strongly preferred by most employers, and direct experience with mission critical or data center construction is typically required. Familiarity with critical power systems, cooling architectures, and commissioning processes distinguishes top candidates from general construction PMs.",
      },
      {
        question:
          "What is the average salary for a data center project manager?",
        answer:
          "Data center project managers in the United States typically earn between $95,000 and $165,000 annually, depending on experience, project scale, geographic market, and employer type. Senior PMs managing hyperscale campus programs for major cloud providers or colocation companies may command total compensation packages exceeding $200,000 when bonuses and equity are included. Markets like Northern Virginia, Dallas-Fort Worth, and Phoenix tend to offer premium compensation due to high demand.",
      },
      {
        question:
          "How is a data center PM different from a commercial construction PM?",
        answer:
          "Data center project managers must understand mission critical infrastructure requirements that commercial construction PMs rarely encounter, including redundant power and cooling architectures (N+1, 2N, 2N+1), Integrated Systems Testing protocols, Tier classification standards from the Uptime Institute, and the stringent quality assurance processes required for facilities that must achieve 99.995% or higher availability. The consequences of commissioning failures or construction defects in data centers are measured in millions of dollars of downtime per hour, creating a fundamentally different risk profile than standard commercial construction.",
      },
      {
        question:
          "How quickly can DC TALNT place a data center project manager?",
        answer:
          "Our typical time-to-present for qualified data center PM candidates is 5 to 10 business days. Because we maintain an active pipeline of pre-vetted project management professionals with mission critical experience, we can often present shortlisted candidates faster than internal recruiting teams or generalist staffing agencies. For urgent backfill or program ramp-up needs, we offer expedited search processes.",
      },
      {
        question:
          "Do you place project managers for both owners and contractors?",
        answer:
          "Yes. DC TALNT places project managers on both the owner/developer side and the general contractor/CM side. Owner-side PMs typically focus on program management, vendor oversight, and schedule governance, while contractor-side PMs manage trade coordination, field execution, and subcontractor performance. We understand the distinct skill sets each role demands and match candidates accordingly.",
      },
    ],
    demandTrend:
      "Project manager demand in data center construction has grown over 40% year-over-year, driven by hyperscale expansion from cloud providers, AI infrastructure buildouts, and enterprise colocation growth. Northern Virginia, Dallas, Phoenix, and Atlanta remain the highest-demand markets, with emerging opportunities in Columbus, Salt Lake City, and the Pacific Northwest.",
  },

  /* ---------------------------------------------------------------------- */
  /*  Construction Managers                                                   */
  /* ---------------------------------------------------------------------- */
  "construction-managers": {
    slug: "construction-managers",
    title: "Construction Managers",
    metaTitle:
      "Data Center Construction Manager Staffing | Hire CMs | Data Center TALNT",
    metaDescription:
      "Find experienced data center construction managers through DC TALNT. We recruit CMs with ground-up hyperscale, mission critical, and heavy commercial construction expertise for projects nationwide.",
    salaryRange: "$105,000 - $175,000",
    salaryMin: 105000,
    salaryMax: 175000,
    heroTitle: "Data Center Construction Manager Staffing",
    description: [
      "Construction managers in the data center sector are the linchpins of on-site execution. They bridge the gap between the project management office and the field workforce, translating blueprints, specifications, and schedules into the coordinated activities of dozens of subcontractor crews working simultaneously. In mission critical construction, where even minor sequencing errors can cascade into costly rework and commissioning delays, the construction manager's ability to plan, communicate, and adapt in real time is what separates successful projects from troubled ones.",
      "DC TALNT specializes in recruiting construction managers who have delivered ground-up data center campuses, critical facility expansions, and complex retrofit projects for colocation providers, hyperscale operators, and enterprise end-users. Our candidates have hands-on experience coordinating structural, mechanical, electrical, plumbing, and fire protection trades in environments where active IT loads may be operating in adjacent spaces. They understand the phased energization sequences, clean protocol requirements, and vibration limitations that make data center construction uniquely demanding.",
      "As the data center construction pipeline continues to grow, experienced construction managers are among the most sought-after professionals in the industry. DC TALNT helps employers hire faster by providing pre-screened CM candidates who are ready to step onto a site and deliver results from day one.",
    ],
    responsibilities: [
      "Direct daily construction operations on data center sites, ensuring adherence to project schedules, quality standards, and safety protocols",
      "Coordinate multi-trade work sequences for structural, mechanical, electrical, plumbing, and fire protection subcontractors",
      "Manage three-week and six-week look-ahead schedules in coordination with project schedulers and the project management team",
      "Conduct daily site walks, document progress through photographs and field reports, and identify issues requiring corrective action",
      "Chair weekly subcontractor coordination meetings, resolve field conflicts, and manage RFI and submittal workflows",
      "Enforce site safety programs including OSHA compliance, JHA reviews, and contractor safety orientations",
      "Oversee material deliveries, laydown area management, and long-lead equipment installation sequences",
      "Monitor subcontractor manpower loading against schedule requirements and escalate resource shortfalls proactively",
      "Coordinate with commissioning agents during pre-functional testing, functional performance testing, and IST phases",
      "Prepare punch lists, manage closeout documentation, and support turnover processes to the operations team",
    ],
    qualifications: [
      "Bachelor's degree in Construction Management, Civil Engineering, or related discipline preferred",
      "8-15+ years of construction management experience with a minimum of 4 years on data center or mission critical projects",
      "Direct experience managing projects with construction values of $50M or more",
      "Strong understanding of MEP systems in critical environments including redundant power distribution, precision cooling, and fire suppression",
      "Proficiency with construction management software such as Procore, PlanGrid, Bluebeam Revu, and BIM 360",
      "Demonstrated ability to manage 20+ subcontractor teams simultaneously in a fast-paced environment",
      "Working knowledge of NFPA, NEC, ASHRAE, and Uptime Institute Tier standards as applied to construction",
      "Strong leadership presence with the ability to command respect from trades while maintaining collaborative relationships",
    ],
    certifications: [
      "CCM (Certified Construction Manager)",
      "OSHA 30-Hour Construction Safety",
      "CHST (Construction Health & Safety Technician)",
      "First Aid / CPR / AED Certification",
      "LEED AP (optional but valued)",
      "Lean Construction Certification",
    ],
    industries: [
      { name: "Data Centers", slug: "data-center-staffing" },
      { name: "Mission Critical Facilities", slug: "mission-critical-facilities" },
      { name: "Construction", slug: "construction-staffing" },
      { name: "Utilities & Power", slug: "utilities-staffing" },
    ],
    relatedRoles: [
      {
        title: "Project Managers",
        slug: "project-managers",
        brief:
          "Project managers oversee the full lifecycle from pre-construction through turnover, with the CM executing the field operations.",
      },
      {
        title: "Superintendents",
        slug: "superintendents",
        brief:
          "Superintendents work alongside construction managers, focusing on specific building areas or trade scopes within larger programs.",
      },
      {
        title: "MEP Engineers",
        slug: "mep-engineers",
        brief:
          "MEP engineers design the systems that construction managers coordinate the installation of in the field.",
      },
    ],
    faqs: [
      {
        question:
          "What does a construction manager do on a data center project?",
        answer:
          "A construction manager on a data center project oversees the day-to-day execution of construction activities on site. This includes coordinating multiple subcontractor trades (structural, mechanical, electrical, plumbing, fire protection), managing look-ahead schedules, conducting quality inspections, enforcing safety protocols, and resolving field conflicts in real time. In data center construction specifically, they must also manage clean build protocols, phased energization sequences, and coordination with commissioning teams during systems testing phases.",
      },
      {
        question:
          "What is the difference between a construction manager and a project manager?",
        answer:
          "While both roles are critical to data center construction, they operate at different levels. The project manager focuses on overall project governance—budgets, contracts, stakeholder communication, risk management, and schedule oversight. The construction manager is field-focused, managing the actual building activities, subcontractor crews, material logistics, and quality control on site. On large data center programs, the PM and CM work in tandem, with the CM reporting field progress to the PM and the PM providing contractual and financial direction to the CM.",
      },
      {
        question:
          "What salary can data center construction managers expect?",
        answer:
          "Data center construction managers typically earn between $105,000 and $175,000 annually in base salary, with total compensation (including bonuses and per diem for travel assignments) often reaching $180,000 to $220,000. Compensation varies based on project scale, geographic market, employer type, and the candidate's experience level. Construction managers with hyperscale data center experience in high-demand markets like Northern Virginia, Phoenix, or Dallas tend to command the highest compensation packages.",
      },
      {
        question:
          "How does DC TALNT vet construction manager candidates?",
        answer:
          "Our vetting process for construction managers includes detailed technical interviews covering MEP systems knowledge, scheduling methodology, safety program experience, and subcontractor management capabilities. We verify certifications, conduct reference checks with former project managers and superintendents, and validate project histories against publicly available information. For data center-specific roles, we assess candidates' understanding of redundancy configurations, commissioning processes, and clean build protocols.",
      },
      {
        question:
          "Can you staff construction managers for remote or travel-based projects?",
        answer:
          "Yes. Many data center construction projects require managers who are willing to travel or relocate temporarily. DC TALNT maintains a national pipeline of construction managers open to travel assignments, rotational schedules, and permanent relocation. We match candidates' travel preferences and personal circumstances with project requirements to ensure retention and performance throughout the project lifecycle.",
      },
    ],
    demandTrend:
      "Construction manager demand in the data center sector has surged in tandem with the unprecedented pipeline of hyperscale and colocation construction projects across North America. With an estimated $300B+ in data center projects planned or under construction through 2028, qualified CMs with mission critical experience remain in critically short supply, particularly in markets like Northern Virginia, Central Texas, and the Southwest.",
  },

  /* ---------------------------------------------------------------------- */
  /*  MEP Engineers (ESPECIALLY DETAILED)                                    */
  /* ---------------------------------------------------------------------- */
  "mep-engineers": {
    slug: "mep-engineers",
    title: "MEP Engineers",
    metaTitle:
      "MEP Engineer Staffing for Data Centers | Mechanical, Electrical & Plumbing | Data Center TALNT",
    metaDescription:
      "Hire MEP engineers with data center expertise through DC TALNT. We recruit mechanical engineers for HVAC and cooling, electrical engineers for power distribution, and plumbing engineers for fire protection. BIM coordination and commissioning specialists available.",
    salaryRange: "$90,000 - $160,000",
    salaryMin: 90000,
    salaryMax: 160000,
    heroTitle: "MEP Engineer Staffing for Data Centers & Critical Facilities",
    description: [
      "MEP engineers are the technical backbone of every data center and mission critical facility. The mechanical, electrical, and plumbing systems they design, specify, and oversee determine whether a facility can achieve and maintain the uptime, energy efficiency, and scalability that modern digital infrastructure demands. At DC TALNT, we understand that MEP engineering in the data center context is fundamentally different from conventional building design—these engineers must account for massive electrical loads measured in megawatts, precision cooling systems that maintain temperatures within fractions of a degree, fire suppression approaches that protect equipment without causing secondary damage, and redundancy architectures that allow full maintenance without service interruption.",
      "Our MEP engineering placements span the full lifecycle and all three core disciplines. On the mechanical side, we recruit HVAC and cooling system engineers who design and commission chilled water plants, computer room air handlers (CRAHs), direct expansion cooling systems, hot aisle/cold aisle containment strategies, rear-door heat exchangers, and emerging liquid cooling and immersion cooling architectures for high-density AI and HPC deployments. These mechanical engineers must balance thermal performance against Power Usage Effectiveness (PUE) targets, often achieving ratios below 1.3 in modern facilities through free cooling economizers, waterside economization, and advanced controls integration. They work closely with computational fluid dynamics (CFD) analysts to validate airflow models and with commissioning agents to verify that cooling systems perform under full load conditions.",
      "On the electrical side, we recruit power distribution engineers who design medium-voltage utility interconnections, main switchgear lineups, automatic transfer switches (ATS), uninterruptible power supply (UPS) systems, power distribution units (PDUs), remote power panels (RPPs), and busway distribution to individual server racks. These electrical engineers must be fluent in redundancy topologies—from basic N+1 configurations to fully fault-tolerant 2N and 2N+1 architectures—and must understand the arc flash hazard analysis, short circuit studies, and protective relay coordination that utility-scale power systems require. Generator sizing, fuel storage calculations, paralleling switchgear design, and battery energy storage system (BESS) integration are increasingly important as data center operators seek greater resilience and grid independence. Our electrical engineering candidates also bring expertise in power monitoring systems, DCIM platform integration, and energy metering to support real-time capacity management. For plumbing engineering, we place specialists in fire protection system design—including pre-action dry pipe, wet pipe, clean agent, and water mist suppression systems—as well as domestic water, sanitary, and storm drainage systems for large data center campuses. Plumbing engineers in the mission critical space must understand the unique requirements of protecting IT equipment while minimizing water exposure risk, coordinating closely with mechanical engineers on chilled water piping, condenser water loops, and cooling tower makeup water systems. In addition, we recruit BIM coordination specialists who use Revit, Navisworks, and other model coordination platforms to detect and resolve MEP clashes before construction begins. BIM coordination is essential in data center construction where mechanical ductwork, electrical conduit, cable tray, plumbing piping, and fire protection lines must share extremely tight ceiling plenums and underfloor distribution paths. Our BIM professionals bridge the gap between design engineering and field installation, producing coordinated construction models that reduce RFIs, minimize rework, and accelerate the construction schedule. Many of our MEP engineering candidates also bring commissioning experience, understanding functional performance testing protocols, Integrated Systems Testing (IST) procedures, and the documentation requirements that data center owners and authorities having jurisdiction (AHJ) demand before facilities go live.",
    ],
    responsibilities: [
      "Design mechanical (HVAC/cooling), electrical (power distribution), or plumbing (fire protection/piping) systems for data center and mission critical facilities",
      "Develop engineering calculations, equipment specifications, and construction documents in compliance with ASHRAE, NFPA, NEC, and local building codes",
      "Perform load calculations, short circuit studies, arc flash analyses, and thermal modeling for critical facility infrastructure",
      "Create and review BIM/Revit models for MEP systems, conduct clash detection using Navisworks, and coordinate with architectural and structural teams",
      "Specify and evaluate major mechanical equipment including chillers, cooling towers, CRAHs, pumps, and variable frequency drives",
      "Design redundant power distribution systems including medium-voltage switchgear, UPS systems, generators, ATS units, PDUs, and busway",
      "Engineer fire protection systems including pre-action, clean agent, and water mist suppression systems for IT white space and support areas",
      "Perform energy modeling and PUE analysis to optimize facility efficiency and support sustainability goals",
      "Support construction administration by reviewing submittals, responding to RFIs, and conducting site observations during installation",
      "Collaborate with commissioning agents during pre-functional checklists, functional performance testing, and integrated systems testing phases",
      "Evaluate and integrate emerging technologies including liquid cooling, immersion cooling, and battery energy storage systems",
      "Prepare operations and maintenance documentation, system narratives, and basis of design documents for facility operations teams",
    ],
    qualifications: [
      "Bachelor's degree in Mechanical Engineering, Electrical Engineering, Plumbing/Fire Protection Engineering, or Architectural Engineering",
      "5-15+ years of MEP engineering experience with at least 3 years focused on data center, mission critical, or high-reliability facility design",
      "Professional Engineer (PE) license strongly preferred; Engineer-in-Training (EIT/FE) acceptable for mid-career candidates",
      "Advanced proficiency in Revit MEP, AutoCAD, and BIM coordination tools such as Navisworks and BIM 360",
      "Deep understanding of data center power and cooling architectures including N+1, 2N, 2N+1, and Catcher/Catcher redundancy configurations",
      "Familiarity with Uptime Institute Tier Classification standards, ASHRAE TC 9.9 thermal guidelines, and BICSI data center design standards",
      "Experience with energy modeling software, computational fluid dynamics tools, and electrical analysis packages (SKM/ETAP)",
      "Strong communication skills with the ability to present technical concepts to non-technical stakeholders and collaborate across disciplines",
    ],
    certifications: [
      "PE (Professional Engineer License)",
      "EIT/FE (Engineer-in-Training / Fundamentals of Engineering)",
      "LEED AP BD+C (Building Design + Construction)",
      "CxA (Certified Commissioning Authority) - AABC/ACG or BCA",
      "RCDD (Registered Communications Distribution Designer)",
      "CFPS (Certified Fire Protection Specialist)",
      "NICET Fire Protection Certification",
      "Revit MEP Professional Certification",
      "ASHRAE Certifications (BEAP, BEMP, HBDP, OPMP)",
    ],
    industries: [
      { name: "Data Centers", slug: "data-center-staffing" },
      { name: "Mission Critical Facilities", slug: "mission-critical-facilities" },
      { name: "Construction", slug: "construction-staffing" },
      { name: "Utilities & Power", slug: "utilities-staffing" },
    ],
    relatedRoles: [
      {
        title: "Commissioning Agents",
        slug: "commissioning-agents",
        brief:
          "Commissioning agents verify that the MEP systems designed by engineers perform as specified through rigorous testing protocols.",
      },
      {
        title: "Project Managers",
        slug: "project-managers",
        brief:
          "Project managers coordinate the overall delivery including MEP design milestones, equipment procurement, and systems integration.",
      },
      {
        title: "Construction Managers",
        slug: "construction-managers",
        brief:
          "Construction managers oversee the field installation of MEP systems, ensuring work matches approved engineering documents.",
      },
    ],
    faqs: [
      {
        question:
          "What types of MEP engineers does DC TALNT recruit for data centers?",
        answer:
          "DC TALNT recruits across all three MEP disciplines for data center projects. On the mechanical side, we place HVAC and cooling system engineers specializing in chilled water plants, precision air handling, containment strategies, and emerging liquid and immersion cooling technologies. On the electrical side, we recruit power distribution engineers experienced in medium-voltage systems, UPS design, generator sizing, switchgear specification, and battery energy storage integration. For plumbing, we place fire protection engineers who design pre-action, clean agent, and water mist suppression systems, as well as engineers handling domestic water and chilled water piping systems. We also recruit BIM coordination specialists who work across all three disciplines to ensure clash-free designs.",
      },
      {
        question:
          "Why are MEP engineers so critical for data center construction?",
        answer:
          "Data centers are among the most MEP-intensive building types in existence. The mechanical systems alone can represent 30-40% of total construction cost, with electrical power distribution adding another 25-35%. Unlike conventional buildings where MEP systems provide occupant comfort, data center MEP systems must maintain precise environmental conditions for IT equipment—typically 64-80 degrees Fahrenheit and 20-80% relative humidity per ASHRAE guidelines—while delivering utility-grade power reliability at 99.9999% availability. A failure in any MEP system can result in equipment damage and service outages costing millions of dollars per hour. This is why experienced MEP engineers with data center expertise command premium compensation and are among the most difficult positions to fill in the construction industry.",
      },
      {
        question:
          "What is the salary range for data center MEP engineers?",
        answer:
          "Data center MEP engineers typically earn between $90,000 and $160,000 in base salary, depending on discipline, licensure, experience level, and geographic market. PE-licensed engineers with 10+ years of data center-specific experience often earn at the upper end of this range or above, particularly in high-demand markets. Mechanical engineers specializing in cooling system design and electrical engineers focused on critical power distribution tend to command the highest premiums. When factoring in bonuses, profit sharing, and benefits, total compensation for senior MEP engineers can exceed $180,000 annually.",
      },
      {
        question:
          "Do you place MEP engineers for design firms or for owners/operators?",
        answer:
          "We place MEP engineers in roles across the entire project ecosystem. This includes positions at MEP consulting and design engineering firms (such as those producing construction documents and performing design services), at general contractors and construction management firms (for construction administration, field engineering, and quality oversight), at data center owners and operators (for in-house engineering, standards development, and facility management), and at commissioning firms (for functional testing, systems analysis, and performance verification). Each context requires a different emphasis in engineering skills, and we match candidates accordingly.",
      },
      {
        question:
          "What is BIM coordination and why is it important for data center MEP?",
        answer:
          "BIM (Building Information Modeling) coordination is the process of using 3D digital models to plan, design, and coordinate the installation of building systems before physical construction begins. In data center construction, BIM coordination is especially critical because mechanical ductwork, chilled water piping, electrical conduit, cable tray, plumbing piping, and fire protection lines must share extremely constrained spaces—particularly in ceiling plenums, underfloor air distribution paths, and equipment corridors. BIM coordinators use tools like Revit and Navisworks to detect clashes between MEP systems and between MEP systems and structural elements, resolving conflicts digitally rather than through expensive field rework. Effective BIM coordination can reduce construction RFIs by 30-50% and cut MEP installation time significantly.",
      },
      {
        question:
          "How does commissioning overlap with MEP engineering in data centers?",
        answer:
          "Commissioning and MEP engineering are deeply intertwined in data center construction. MEP engineers establish the design intent, performance criteria, and system specifications that commissioning agents use as the basis for their testing protocols. During the commissioning process, MEP engineers often participate in pre-functional equipment checklists, witness functional performance tests, and help troubleshoot issues identified during Integrated Systems Testing (IST). Many experienced MEP engineers hold commissioning certifications (CxA) and transition between pure design roles and commissioning roles throughout their careers. At DC TALNT, we understand this overlap and recruit candidates who can contribute to both design engineering and commissioning activities.",
      },
      {
        question:
          "What emerging MEP technologies are impacting data center staffing needs?",
        answer:
          "Several emerging technologies are creating new MEP engineering specializations in data centers. Liquid cooling and immersion cooling for high-density AI/HPC racks require mechanical engineers with direct liquid cooling (DLC) expertise, a skill set still in short supply. Battery energy storage systems (BESS) are changing electrical design requirements as facilities move toward grid-independent and renewable-powered operations. Advanced controls and DCIM integration demand engineers comfortable with building automation systems, IoT sensors, and data analytics platforms. These emerging technologies are expanding the MEP talent requirements and increasing the premium for engineers who stay at the forefront of innovation.",
      },
    ],
    demandTrend:
      "MEP engineer demand in the data center sector has reached unprecedented levels, driven by the convergence of hyperscale expansion, AI infrastructure investment, and an aging engineering workforce approaching retirement. Mechanical engineers with cooling system expertise and electrical engineers with critical power distribution experience are consistently ranked among the top-three hardest-to-fill positions in data center construction. The emergence of liquid cooling technologies for AI workloads has created an entirely new sub-specialty with very few qualified practitioners, further intensifying competition for talent.",
  },

  /* ---------------------------------------------------------------------- */
  /*  Schedulers & Planners                                                  */
  /* ---------------------------------------------------------------------- */
  schedulers: {
    slug: "schedulers",
    title: "Schedulers & Planners",
    metaTitle:
      "Data Center Construction Scheduler Staffing | Primavera P6 | Data Center TALNT",
    metaDescription:
      "Hire expert construction schedulers and planners for data center and mission critical projects. DC TALNT recruits Primavera P6 and CPM scheduling professionals with critical path methodology expertise.",
    salaryRange: "$80,000 - $135,000",
    salaryMin: 80000,
    salaryMax: 135000,
    heroTitle: "Data Center Construction Scheduler & Planner Staffing",
    description: [
      "Construction schedulers and planners are essential to the successful delivery of data center and mission critical projects, where aggressive timelines and complex interdependencies between mechanical, electrical, plumbing, and IT systems make traditional scheduling approaches inadequate. Data center schedulers must account for long-lead equipment procurement timelines that can stretch 40-60 weeks for generators and switchgear, phased energization sequences that require precise coordination between electrical contractors and commissioning agents, and multi-building campus programs where parallel construction streams share resources and site logistics.",
      "DC TALNT recruits schedulers and planners who combine mastery of Critical Path Method (CPM) scheduling with deep knowledge of data center construction sequences. Our candidates are proficient in Primavera P6, Microsoft Project, and other enterprise scheduling platforms, and they understand how to build resource-loaded schedules, perform earned value analysis, develop recovery schedules when projects fall behind, and produce the schedule narratives and time impact analyses that construction disputes and claims often require.",
      "As data center construction programs grow in scale and complexity—with some hyperscale campuses involving ten or more concurrent building phases—the demand for specialized schedulers who understand mission critical construction has outpaced supply. DC TALNT helps employers find planners who can manage program-level master schedules while also drilling into the detailed activities that govern critical path and near-critical path work.",
    ],
    responsibilities: [
      "Develop and maintain CPM project schedules in Primavera P6 or Microsoft Project for data center construction programs",
      "Create resource-loaded schedules with manpower, equipment, and cost data to support project management decision-making",
      "Perform critical path analysis and identify near-critical activities requiring proactive management attention",
      "Prepare weekly and monthly schedule updates, including progress measurement, variance analysis, and forecast reporting",
      "Build and maintain look-ahead schedules (three-week, six-week, 90-day) for field coordination and subcontractor planning",
      "Conduct time impact analyses and prepare delay narratives for change order evaluation and dispute resolution",
      "Coordinate schedule logic with project managers, construction managers, and subcontractor schedulers to ensure accurate activity sequencing",
      "Support commissioning schedule integration, including pre-functional testing, functional performance testing, and IST milestones",
      "Perform earned value management (EVM) calculations and prepare performance indices (CPI, SPI) for executive reporting",
      "Manage program-level master schedules for multi-phase data center campus construction programs",
    ],
    qualifications: [
      "Bachelor's degree in Construction Management, Engineering, or related field preferred",
      "5-12+ years of construction scheduling experience with at least 2 years on data center, mission critical, or heavy MEP-intensive projects",
      "Expert-level proficiency in Oracle Primavera P6 Professional; Microsoft Project proficiency also valued",
      "Strong understanding of Critical Path Method (CPM) scheduling and resource-loaded schedule development",
      "Experience with earned value management, time impact analysis, and schedule delay claim support",
      "Familiarity with data center construction sequences including MEP rough-in, clean build protocols, and commissioning phases",
      "Ability to communicate schedule information effectively to project managers, executives, and subcontractor teams",
      "Experience with scheduling in BIM-integrated project delivery environments is a plus",
    ],
    certifications: [
      "PSP (Planning & Scheduling Professional) - AACE International",
      "PMI-SP (PMI Scheduling Professional)",
      "PMP (Project Management Professional)",
      "Oracle Primavera P6 Certification",
      "AACE Certified Estimating Professional (CEP)",
      "Lean Construction Certification",
    ],
    industries: [
      { name: "Data Centers", slug: "data-center-staffing" },
      { name: "Construction", slug: "construction-staffing" },
      { name: "Utilities & Power", slug: "utilities-staffing" },
    ],
    relatedRoles: [
      {
        title: "Project Managers",
        slug: "project-managers",
        brief:
          "Project managers depend on schedulers to provide the data-driven schedule intelligence that governs project decision-making.",
      },
      {
        title: "Construction Managers",
        slug: "construction-managers",
        brief:
          "Construction managers use scheduler-prepared look-ahead schedules to coordinate daily and weekly field operations.",
      },
      {
        title: "MEP Engineers",
        slug: "mep-engineers",
        brief:
          "MEP engineers provide the technical activity durations and sequencing logic that schedulers incorporate into project schedules.",
      },
    ],
    faqs: [
      {
        question:
          "What scheduling software do data center construction schedulers use?",
        answer:
          "The industry standard for data center construction scheduling is Oracle Primavera P6 Professional, which provides the CPM analysis, resource loading, and multi-project management capabilities that complex data center programs require. Many employers also use Microsoft Project for smaller projects or supplementary scheduling tasks. Some organizations integrate scheduling with BIM platforms like Synchro for 4D schedule visualization. Proficiency in Primavera P6 is essentially a prerequisite for scheduler roles in the data center construction sector.",
      },
      {
        question:
          "What is the salary range for data center construction schedulers?",
        answer:
          "Data center construction schedulers typically earn between $80,000 and $135,000 annually, depending on experience level, certification status, and geographic market. Senior schedulers and planning managers overseeing multi-phase data center campus programs can earn at the higher end of this range or above. PSP-certified schedulers and those with demonstrated experience in time impact analysis and claims support often command premium compensation.",
      },
      {
        question:
          "Why is scheduling different for data center projects?",
        answer:
          "Data center scheduling requires understanding of construction sequences unique to mission critical facilities. These include long-lead equipment procurement timelines (40-60 weeks for generators and switchgear), phased energization sequences, clean build protocol transitions, Integrated Systems Testing (IST) phases, and the complex interdependencies between mechanical cooling, electrical power, fire protection, and IT infrastructure systems. A data center scheduler must also account for live-load adjacencies when constructing new phases next to operational data halls, adding coordination constraints that standard commercial schedulers rarely encounter.",
      },
      {
        question:
          "Do you place schedulers for program-level or project-level roles?",
        answer:
          "DC TALNT places schedulers at both levels. Project-level schedulers manage individual building or phase schedules, while program-level schedulers oversee master schedules spanning multiple buildings, phases, and sometimes multiple campuses. Program-level roles typically require more experience and command higher compensation, as they involve coordinating shared resources, managing inter-project dependencies, and reporting to senior executives on overall program health.",
      },
      {
        question:
          "How quickly can DC TALNT provide qualified scheduler candidates?",
        answer:
          "We typically present shortlisted scheduler candidates within 7 to 14 business days, depending on the specialization required and the geographic market. Because data center scheduling is a niche skill set, we maintain targeted relationships with qualified professionals and can often accelerate the timeline for employers with urgent needs. Our pre-screening process validates Primavera P6 proficiency, CPM methodology knowledge, and data center construction sequence understanding before candidates are presented.",
      },
    ],
    demandTrend:
      "Scheduler demand in data center construction continues to climb as project complexity increases and program portfolios expand. The shift toward multi-phase campus construction programs—some spanning 5-10 years and involving billions of dollars in investment—has created persistent demand for both project-level and program-level scheduling professionals. Candidates with Primavera P6 expertise and data center construction sequence knowledge remain in short supply nationwide.",
  },

  /* ---------------------------------------------------------------------- */
  /*  Superintendents                                                        */
  /* ---------------------------------------------------------------------- */
  superintendents: {
    slug: "superintendents",
    title: "Superintendents",
    metaTitle:
      "Data Center Superintendent Staffing | Field Leadership | Data Center TALNT",
    metaDescription:
      "Hire experienced data center superintendents through DC TALNT. We recruit field-proven superintendents for ground-up hyperscale builds, mission critical construction, and complex MEP-intensive projects nationwide.",
    salaryRange: "$100,000 - $170,000",
    salaryMin: 100000,
    salaryMax: 170000,
    heroTitle: "Data Center Superintendent Staffing",
    description: [
      "Superintendents are the field leaders who translate project plans into physical reality on data center construction sites. They are typically the first people on site each morning and the last to leave, managing the daily coordination of subcontractor crews, enforcing safety standards, inspecting quality of work, and resolving the countless field-level issues that arise during complex mission critical construction. In data center builds, superintendents must manage the unique challenges of clean room construction protocols, phased energization around live IT equipment, vibration-sensitive installations, and the exacting tolerances required for precision MEP systems.",
      "DC TALNT recruits superintendents who have proven themselves on ground-up data center campuses, critical facility expansions, and high-reliability construction projects. Our candidates bring the leadership presence, technical knowledge, and field problem-solving abilities that distinguish outstanding superintendents from average ones. They understand how to sequence work across structural, mechanical, electrical, plumbing, and fire protection trades in the tight confines of a data center building, and they know how to maintain schedule momentum without compromising safety or quality.",
      "The shortage of experienced data center superintendents has become one of the most significant bottlenecks in the industry's growth. As construction pipelines expand across major markets, DC TALNT provides employers with access to superintendent talent that has been pre-vetted for mission critical construction experience, safety track records, and trade coordination capabilities.",
    ],
    responsibilities: [
      "Manage daily field construction operations on data center sites including subcontractor coordination, work sequencing, and resource allocation",
      "Enforce comprehensive site safety programs, conduct daily safety briefings, and ensure compliance with OSHA regulations and owner safety requirements",
      "Perform quality inspections at all construction phases, document deficiencies, and verify corrective actions before proceeding to subsequent activities",
      "Coordinate trade sequences across structural, mechanical, electrical, plumbing, and fire protection subcontractors in complex multi-trade environments",
      "Manage site logistics including material deliveries, crane operations, laydown areas, temporary utilities, and access control for active data center campuses",
      "Prepare daily construction reports documenting manpower, weather conditions, activities completed, issues encountered, and safety observations",
      "Lead subcontractor foreman meetings and resolve field conflicts arising from design discrepancies, space constraints, or scheduling misalignments",
      "Support clean build protocol implementation during data center white space construction phases, including dust control and contamination prevention",
      "Coordinate with commissioning agents during equipment start-up, testing, and commissioning activities that overlap with ongoing construction",
      "Manage punch list development, remediation tracking, and turnover documentation during project closeout phases",
    ],
    qualifications: [
      "10-20+ years of construction field experience with progressive advancement from foreman or assistant superintendent to superintendent",
      "Minimum 4 years of superintendent experience on data center, mission critical, or heavily MEP-intensive construction projects",
      "Demonstrated ability to manage sites with 100+ craft workers across multiple trades simultaneously",
      "Strong understanding of MEP systems installation sequences in critical environments, including clean build and energization protocols",
      "Proven safety leadership record with experience managing zero-incident safety programs on large-scale construction sites",
      "Proficiency with field technology including Procore, PlanGrid, Bluebeam, and daily reporting platforms",
      "Ability to read and interpret complex MEP drawings, structural plans, and architectural details",
      "Strong leadership and interpersonal skills with the ability to earn respect from trade foremen and communicate effectively with project management",
    ],
    certifications: [
      "OSHA 30-Hour Construction Safety",
      "OSHA 10-Hour Construction Safety",
      "First Aid / CPR / AED Certification",
      "CHST (Construction Health & Safety Technician)",
      "STSC (Safety Trained Supervisor Construction)",
      "NFPA 70E Electrical Safety Certification",
    ],
    industries: [
      { name: "Data Centers", slug: "data-center-staffing" },
      { name: "Mission Critical Facilities", slug: "mission-critical-facilities" },
      { name: "Construction", slug: "construction-staffing" },
    ],
    relatedRoles: [
      {
        title: "Construction Managers",
        slug: "construction-managers",
        brief:
          "Construction managers work alongside superintendents, focusing on overall site management while superintendents drive field execution.",
      },
      {
        title: "Project Managers",
        slug: "project-managers",
        brief:
          "Project managers provide the schedule, budget, and contractual framework within which superintendents execute field operations.",
      },
      {
        title: "Commissioning Agents",
        slug: "commissioning-agents",
        brief:
          "Commissioning agents coordinate with superintendents during the testing phases that bridge construction completion and facility turnover.",
      },
    ],
    faqs: [
      {
        question:
          "What does a data center superintendent do on a daily basis?",
        answer:
          "A data center superintendent's day typically begins with a site walk to assess overnight conditions and plan the day's activities. They conduct a morning safety briefing, coordinate with subcontractor foremen on daily work plans, manage material deliveries and crane operations, perform quality inspections, resolve field conflicts, and document progress through daily reports. Throughout the day, they move continuously across the site, ensuring that work progresses safely and according to the approved schedule and specifications. On data center projects specifically, they must also manage clean build protocols, coordinate energization sequences, and interface with commissioning teams.",
      },
      {
        question:
          "What is the salary range for data center superintendents?",
        answer:
          "Data center superintendents typically earn between $100,000 and $170,000 annually in base salary. Total compensation packages, including bonuses, per diem allowances for travel assignments, vehicle allowances, and benefits, can push total annual earnings to $180,000 to $220,000 for experienced professionals. Superintendents with hyperscale data center experience in high-demand markets command the highest compensation, reflecting the scarcity of qualified field leaders in this specialized sector.",
      },
      {
        question:
          "How is a data center superintendent different from a commercial construction superintendent?",
        answer:
          "Data center superintendents must manage several unique challenges beyond standard commercial construction. These include maintaining clean build protocols during white space construction to prevent contamination of IT equipment, coordinating phased energization sequences for mission critical electrical systems, managing construction activities adjacent to live data center operations, enforcing vibration and dust control measures to protect sensitive equipment, and coordinating with commissioning teams during extended testing phases. The precision and zero-tolerance-for-error mentality required in data center construction creates a higher performance bar than most commercial projects.",
      },
      {
        question:
          "What career path leads to a data center superintendent role?",
        answer:
          "Most data center superintendents follow a field-based career progression, starting as apprentices or journeymen in a specific trade (often electrical or mechanical), advancing to foreman, then assistant superintendent, and finally superintendent. This progression typically spans 10-20 years. Some superintendents come from military construction backgrounds. The transition from commercial or industrial superintendent to data center superintendent usually requires mentorship from experienced data center field leaders and a learning curve on mission critical systems, clean build protocols, and commissioning coordination.",
      },
      {
        question:
          "Can DC TALNT provide superintendents for multi-phase data center campus programs?",
        answer:
          "Yes. We regularly staff superintendents for multi-phase data center campus programs that span several years and involve multiple concurrent buildings. These assignments may require area superintendents (responsible for specific buildings or zones), MEP superintendents (focused on mechanical and electrical trade coordination), and general superintendents (overseeing the entire campus program). We match the superintendent's experience level and specialization to the specific demands of each role within the campus program structure.",
      },
    ],
    demandTrend:
      "Superintendent demand in data center construction has reached critical levels as the industry struggles to fill field leadership positions on an expanding number of concurrent projects. The shortage is compounded by an aging workforce—many experienced superintendents are approaching retirement—and the difficulty of rapidly training replacements for a role that requires years of on-site experience. Markets with heavy data center construction activity, including Northern Virginia, Phoenix, Dallas, and Atlanta, report the most acute shortages.",
  },

  /* ---------------------------------------------------------------------- */
  /*  Commissioning Agents                                                   */
  /* ---------------------------------------------------------------------- */
  "commissioning-agents": {
    slug: "commissioning-agents",
    title: "Commissioning Agents",
    metaTitle:
      "Data Center Commissioning Agent Staffing | CxA Recruitment | Data Center TALNT",
    metaDescription:
      "Hire certified commissioning agents for data center and mission critical projects through DC TALNT. We recruit CxA professionals experienced in IST, functional testing, and Tier III/IV commissioning standards.",
    salaryRange: "$85,000 - $150,000",
    salaryMin: 85000,
    salaryMax: 150000,
    heroTitle: "Data Center Commissioning Agent Staffing",
    description: [
      "Commissioning agents serve as the independent quality assurance authority that verifies data center and mission critical facility systems perform as designed before they are placed into service. In an industry where a single system failure can result in millions of dollars in downtime costs per hour, the commissioning agent's role is not merely procedural—it is the final line of defense between construction completion and operational readiness. DC TALNT recruits commissioning professionals who understand the full commissioning lifecycle, from developing the commissioning plan during the design phase through executing Integrated Systems Testing (IST) and supporting the facility's first year of operation.",
      "Our commissioning agent placements include professionals experienced in all levels of data center commissioning: Level 1 through Level 5 testing protocols, single-system functional performance testing, multi-system integration testing, and full-facility IST scenarios that simulate utility failure, generator transfer, and concurrent maintenance conditions. These professionals work across mechanical, electrical, plumbing, fire protection, and building automation systems, verifying that each system and the interactions between systems meet the owner's project requirements (OPR) and the basis of design (BOD).",
      "The commissioning profession has experienced rapid growth as data center owners increasingly recognize that rigorous commissioning reduces operational risk, accelerates time-to-revenue, and protects their multi-billion-dollar infrastructure investments. DC TALNT connects employers with commissioning agents who bring the technical depth, documentation rigor, and stakeholder communication skills that this high-stakes discipline demands.",
    ],
    responsibilities: [
      "Develop comprehensive commissioning plans, specifications, and testing protocols for data center mechanical, electrical, plumbing, and fire protection systems",
      "Execute pre-functional checklists to verify proper installation of MEP equipment before testing begins",
      "Conduct functional performance testing (FPT) on individual systems including generators, UPS, switchgear, chillers, CRAHs, and fire suppression systems",
      "Plan and execute Integrated Systems Testing (IST) scenarios simulating utility failure, generator transfer, UPS bypass, cooling failure, and concurrent maintenance conditions",
      "Verify redundancy configurations (N+1, 2N, 2N+1) perform as designed under simulated failure conditions",
      "Document all test results, deficiencies, and corrective actions in detailed commissioning reports for owner review",
      "Coordinate with MEP engineers, contractors, and equipment manufacturers to troubleshoot and resolve issues discovered during testing",
      "Review design documents, submittals, and shop drawings to validate compliance with the owner's project requirements",
      "Participate in design reviews and construction progress meetings to identify commissioning implications of design changes or field modifications",
      "Support seasonal testing, warranty-period commissioning, and ongoing commissioning programs for operational facilities",
    ],
    qualifications: [
      "Bachelor's degree in Mechanical Engineering, Electrical Engineering, or related technical field preferred",
      "5-15+ years of commissioning experience with at least 3 years focused on data center or mission critical facility commissioning",
      "Demonstrated experience leading Level 5 / IST commissioning events for Tier III or Tier IV equivalent facilities",
      "Deep technical understanding of critical power distribution systems, precision cooling systems, fire suppression systems, and building automation systems",
      "Strong documentation and technical writing skills for commissioning plans, test procedures, and deficiency reports",
      "Experience with commissioning management software and testing instrumentation (power analyzers, data loggers, thermal imaging)",
      "Ability to work collaboratively with engineers, contractors, and owner representatives in high-pressure testing environments",
      "Willingness to travel to project sites and work extended hours during IST events, which may run 24-72 hours continuously",
    ],
    certifications: [
      "CxA (Certified Commissioning Authority) - AABC Commissioning Group or BCA",
      "ACG Commissioning Process Management Professional (CPMP)",
      "NEBB Certified Commissioning Professional",
      "PE (Professional Engineer License)",
      "LEED AP BD+C",
      "OSHA 30-Hour Construction Safety",
      "NFPA 70E Electrical Safety",
      "Infrared Thermography Certification (Level I or II)",
    ],
    industries: [
      { name: "Data Centers", slug: "data-center-staffing" },
      { name: "Mission Critical Facilities", slug: "mission-critical-facilities" },
      { name: "Utilities & Power", slug: "utilities-staffing" },
    ],
    relatedRoles: [
      {
        title: "MEP Engineers",
        slug: "mep-engineers",
        brief:
          "MEP engineers establish the design intent and performance criteria that commissioning agents verify through testing protocols.",
      },
      {
        title: "Project Managers",
        slug: "project-managers",
        brief:
          "Project managers schedule and coordinate commissioning milestones within the overall project delivery timeline.",
      },
      {
        title: "Superintendents",
        slug: "superintendents",
        brief:
          "Superintendents coordinate field access, system readiness, and contractor support for commissioning testing events.",
      },
    ],
    faqs: [
      {
        question:
          "What does a commissioning agent do in data center construction?",
        answer:
          "A commissioning agent (CxA) independently verifies that all critical building systems—electrical, mechanical, plumbing, fire protection, and controls—perform as designed before the data center is placed into service. This involves developing test protocols, executing pre-functional checklists, conducting functional performance tests on individual systems, and leading Integrated Systems Testing (IST) events that simulate real-world failure scenarios such as utility outages, generator transfers, and concurrent maintenance conditions. The commissioning agent documents all results and ensures deficiencies are corrected before the facility goes live.",
      },
      {
        question:
          "What is Integrated Systems Testing (IST) in data centers?",
        answer:
          "Integrated Systems Testing, commonly called IST or Level 5 commissioning, is the final phase of data center commissioning where all building systems are tested together under simulated failure conditions. Unlike functional performance testing that verifies individual systems in isolation, IST evaluates how systems interact when failures occur—for example, testing that generators start, transfer switches operate, UPS systems bridge the gap, and cooling systems maintain temperature when utility power is lost. IST events typically run 24-72 hours and involve the entire project team, making them among the most complex and high-stakes activities in data center construction.",
      },
      {
        question:
          "What certifications do data center commissioning agents need?",
        answer:
          "The most recognized certification for commissioning agents is the Certified Commissioning Authority (CxA) credential from the AABC Commissioning Group (ACG) or the Building Commissioning Association (BCA). Many employers also value the NEBB Certified Commissioning Professional designation. Beyond commissioning-specific certifications, a Professional Engineer (PE) license demonstrates deep technical competence, and NFPA 70E electrical safety certification is often required for work around energized systems. Additional credentials like LEED AP and infrared thermography certification add value for candidates working on sustainable or operationally complex facilities.",
      },
      {
        question:
          "What is the salary range for data center commissioning agents?",
        answer:
          "Data center commissioning agents typically earn between $85,000 and $150,000 annually, depending on experience, certification level, and geographic market. Senior commissioning authorities and commissioning managers overseeing multiple projects or campus-level programs can earn above this range. The role often includes significant travel, and employers typically provide per diem, travel reimbursement, and project completion bonuses that can add $15,000 to $30,000 to annual compensation. CxA-certified professionals with Tier III/IV data center experience command the highest premiums.",
      },
      {
        question:
          "How is DC TALNT different from other staffing agencies for commissioning roles?",
        answer:
          "Most generalist staffing agencies lack the technical expertise to evaluate commissioning agent candidates meaningfully. DC TALNT's recruiters understand commissioning terminology, testing methodologies, and the difference between Level 3 and Level 5 commissioning protocols. We verify candidates' actual commissioning project experience—not just credentials—by asking detailed questions about specific IST scenarios they have led, systems they have tested, and deficiencies they have identified and resolved. This technical depth in our screening process means employers receive candidates who are genuinely qualified, not just keyword-matched.",
      },
    ],
    demandTrend:
      "Commissioning agent demand has grown steadily as data center owners increasingly mandate rigorous third-party commissioning for new builds, expansions, and even existing facility retro-commissioning programs. The push toward higher availability standards, combined with the complexity of modern MEP systems and the increasing value of the IT loads being protected, has made commissioning a non-negotiable phase of data center delivery. Qualified CxAs with data center IST experience are among the scarcest specializations in the mission critical construction workforce.",
  },
};

/* ========================================================================== */
/*  Static Params & Dynamic Metadata                                          */
/* ========================================================================== */

export function generateStaticParams() {
  return [
    { slug: "project-managers" },
    { slug: "construction-managers" },
    { slug: "schedulers" },
    { slug: "mep-engineers" },
    { slug: "superintendents" },
    { slug: "commissioning-agents" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = rolesData[slug];
  if (!role) return {};

  return {
    title: role.metaTitle,
    description: role.metaDescription,
    alternates: {
      canonical: `${siteConfig.siteUrl}/roles/${role.slug}`,
    },
    openGraph: {
      title: role.metaTitle,
      description: role.metaDescription,
      url: `${siteConfig.siteUrl}/roles/${role.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: role.metaTitle,
      description: role.metaDescription,
    },
  };
}

/* ========================================================================== */
/*  JSON-LD Helpers                                                           */
/* ========================================================================== */

function buildOccupationSchema(role: RoleData) {
  return {
    "@context": "https://schema.org",
    "@type": "Occupation",
    name: role.title,
    description: role.description[0],
    estimatedSalary: {
      "@type": "MonetaryAmountDistribution",
      name: "base",
      currency: "USD",
      median: Math.round((role.salaryMin + role.salaryMax) / 2),
      percentile10: role.salaryMin,
      percentile90: role.salaryMax,
      duration: "P1Y",
    },
    occupationLocation: {
      "@type": "Country",
      name: "United States",
    },
    qualifications: role.qualifications.join("; "),
    responsibilities: role.responsibilities.join("; "),
    skills: role.certifications.join(", "),
    industry: role.industries.map((i) => i.name).join(", "),
  };
}

/* ========================================================================== */
/*  Page Component                                                            */
/* ========================================================================== */

export default async function RolePage({ params }: PageProps) {
  const { slug } = await params;
  const role = rolesData[slug];

  if (!role) {
    notFound();
  }

  /* ----- Schema data ----- */
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Roles", url: "/roles" },
    { name: role.title, url: `/roles/${role.slug}` },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const faqSchema = generateFAQSchema(role.faqs);
  const occupationSchema = buildOccupationSchema(role);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <SchemaScript data={breadcrumbSchema} />
      <SchemaScript data={faqSchema} />
      <SchemaScript data={occupationSchema} />

      {/* ---------------------------------------------------------------- */}
      {/*  Breadcrumb Navigation                                           */}
      {/* ---------------------------------------------------------------- */}
      <nav aria-label="Breadcrumb" className="bg-sky-50 border-b border-gray-200">
        <div className="container-page py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.url} className="flex items-center gap-1.5">
                {index > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-3.5 w-3.5 text-gray-400"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="font-medium text-navy" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.url}
                    className="hover:text-blue transition-colors duration-150"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ---------------------------------------------------------------- */}
      {/*  Hero Section                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-navy py-16 sm:py-20 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            {/* Salary Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-blue/20 px-4 py-1.5 text-sm font-semibold text-blue-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M10.75 10.818a1.5 1.5 0 0 0-1.5-1.5 1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 0 1.5-1.5V3.25a.75.75 0 0 1 1.5 0v1.568a3 3 0 0 1 0 5.364v1.568a.75.75 0 0 1-1.5 0v-1.568a3.01 3.01 0 0 1 0-.364Z" />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
                  clipRule="evenodd"
                />
              </svg>
              Salary Range: {role.salaryRange}
            </span>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              {role.heroTitle}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
              DC TALNT connects employers with experienced {role.title.toLowerCase()} who
              specialize in data center, mission critical, and construction
              projects nationwide.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href="/employers">
                Hire {role.title === "Schedulers & Planners" ? "a Scheduler" : role.title === "MEP Engineers" ? "an MEP Engineer" : `a ${role.title.replace(/s$/, "")}`}
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/candidates"
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                Find {role.title} Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Role Overview                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section className="py-16 sm:py-20 lg:py-24" aria-labelledby="overview-heading">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <h2
              id="overview-heading"
              className="text-2xl font-bold tracking-tight text-navy sm:text-3xl"
            >
              What Do {role.title} Do in Data Center Construction?
            </h2>
            <div className="mt-6 space-y-5">
              {role.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-gray-700 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Key Responsibilities                                             */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="bg-sky-50 py-16 sm:py-20 lg:py-24"
        aria-labelledby="responsibilities-heading"
      >
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title={`Key Responsibilities of ${role.title}`}
              align="left"
            />
            <ul className="space-y-3" role="list">
              {role.responsibilities.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base leading-relaxed text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Qualifications & Certifications (Two-Column)                     */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="py-16 sm:py-20 lg:py-24"
        aria-labelledby="qualifications-heading"
      >
        <div className="container-page">
          <SectionHeading
            title="Required Qualifications & Certifications"
            subtitle={`What employers look for when hiring ${role.title.toLowerCase()} in the data center and mission critical construction sectors.`}
          />

          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {/* Qualifications Column */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-navy">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-blue"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
                  />
                </svg>
                Qualifications
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {role.qualifications.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-gray-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications Column */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="flex items-center gap-2 text-xl font-semibold text-navy">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-blue"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
                Certifications
              </h3>
              <ul className="mt-4 space-y-3" role="list">
                {role.certifications.map((cert, index) => (
                  <li key={index} className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-0.5 h-5 w-5 shrink-0 text-blue"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm leading-relaxed text-gray-700">
                      {cert}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Industries Hiring                                                */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="bg-sky-50 py-16 sm:py-20 lg:py-24"
        aria-labelledby="industries-heading"
      >
        <div className="container-page">
          <SectionHeading
            title={`Industries Hiring ${role.title}`}
            subtitle={`${role.title} are in demand across several infrastructure and construction sectors.`}
          />

          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-4">
            {role.industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm transition-all duration-200 hover:border-blue hover:shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-blue"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                  />
                </svg>
                <span className="text-base font-semibold text-navy group-hover:text-blue transition-colors duration-200">
                  {industry.name}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 text-gray-400 group-hover:text-blue transition-colors duration-200"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Salary & Market Data                                             */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="py-16 sm:py-20 lg:py-24"
        aria-labelledby="salary-heading"
      >
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <h2
              id="salary-heading"
              className="text-2xl font-bold tracking-tight text-navy sm:text-3xl"
            >
              Salary & Market Demand for {role.title}
            </h2>

            {/* Salary Visual */}
            <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                    National Salary Range
                  </p>
                  <p className="mt-1 text-3xl font-bold text-navy sm:text-4xl">
                    {role.salaryRange}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Annual base salary, United States
                  </p>
                </div>
                <div className="flex flex-col items-start gap-1 sm:items-end">
                  <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                    Median Salary
                  </p>
                  <p className="text-2xl font-bold text-blue">
                    ${Math.round((role.salaryMin + role.salaryMax) / 2).toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Salary bar visualization */}
              <div className="mt-6">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>${role.salaryMin.toLocaleString()}</span>
                  <span>${role.salaryMax.toLocaleString()}</span>
                </div>
                <div className="mt-1 h-3 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue to-blue-light"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>

            {/* Demand Trends */}
            <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-navy">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 text-blue"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
                Market Demand Trends
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-700">
                {role.demandTrend}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  FAQ Section                                                      */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="bg-sky-50 py-16 sm:py-20 lg:py-24"
        aria-labelledby="faq-heading"
      >
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              title={`Frequently Asked Questions About ${role.title}`}
              align="left"
            />

            <div className="space-y-4">
              {role.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 p-5 text-base font-semibold text-navy hover:text-blue transition-colors duration-200 sm:p-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </summary>
                  <div className="border-t border-gray-100 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                    <p className="text-base leading-relaxed text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Related Roles                                                    */}
      {/* ---------------------------------------------------------------- */}
      <section
        className="py-16 sm:py-20 lg:py-24"
        aria-labelledby="related-roles-heading"
      >
        <div className="container-page">
          <SectionHeading
            title="Related Roles"
            subtitle="Explore other specialized positions DC TALNT recruits for data center and construction projects."
          />

          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {role.relatedRoles.map((related) => (
              <Link
                key={related.slug}
                href={`/roles/${related.slug}`}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-navy group-hover:text-blue transition-colors duration-200">
                  {related.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {related.brief}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue"
                  aria-hidden="true"
                >
                  View Role Details
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
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/*  Bottom CTA                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-navy py-16 sm:py-20" aria-labelledby="role-cta-heading">
        <div className="container-page text-center">
          <h2
            id="role-cta-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl text-balance"
          >
            Find the Right {role.title} for Your Next Project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-gray-300">
            DC TALNT has the industry network, technical screening expertise, and
            track record to deliver {role.title.toLowerCase()} who perform
            from day one. Let us fill your next critical role.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" size="lg" href="/employers">
              Start Hiring
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
              className="border-white text-white hover:bg-white hover:text-navy"
            >
              Contact a Recruiter
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
