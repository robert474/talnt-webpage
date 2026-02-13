import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateServiceSchema,
  SchemaScript,
} from "@/lib/schema";

/* ========================================================================== */
/*  Hyperscaler Logos Component                                               */
/* ========================================================================== */

const hyperscalerLogos = [
  { name: "Amazon Web Services", src: "/images/logos/aws.svg", width: 200, height: 100 },
  { name: "OpenAI", src: "/images/logos/OpenAI_Wordmark_Gif.webp", width: 320, height: 100 },
  { name: "Oracle", src: "/images/logos/Oracle_ideA555_no_0.svg", width: 280, height: 100 },
];

function HyperscalerLogos() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          We Staff the Teams That Build For
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          Our talent is trusted on the biggest data center builds in the country — projects
          commissioned by the world&rsquo;s leading hyperscalers and AI companies.
        </p>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-20 gap-y-12 lg:gap-x-28">
          {hyperscalerLogos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-16 w-auto sm:h-20 lg:h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========================================================================== */
/*  Industry Data Types                                                       */
/* ========================================================================== */

interface RoleCard {
  name: string;
  description: string;
  href: string;
}

interface MarketStat {
  value: string;
  label: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface ValueProp {
  title: string;
  description: string;
}

interface IndustryData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string[];
  keyRoles: RoleCard[];
  marketStats: MarketStat[];
  faqs: FAQ[];
  valueProps: ValueProp[];
}

/* ========================================================================== */
/*  Comprehensive Industry Data                                               */
/* ========================================================================== */

const industriesData: Record<string, IndustryData> = {
  /* ---------------------------------------------------------------------- */
  /*  DATA CENTER STAFFING (primary keyword target -- richest content)       */
  /* ---------------------------------------------------------------------- */
  "data-center-staffing": {
    slug: "data-center-staffing",
    title: "Data Center Staffing",
    metaTitle:
      "Data Center Staffing & Recruitment | Data Center TALNT",
    metaDescription:
      "Data Center TALNT is a specialized data center staffing agency placing commissioning agents, MEP engineers, project managers, and operations staff for hyperscale, colocation, and enterprise data centers nationwide.",
    heroTitle: "Data Center Staffing Solutions",
    heroSubtitle:
      "From hyperscale campuses to edge deployments, we connect data center operators and general contractors with the engineers, commissioning agents, and project managers who build and maintain the world's digital infrastructure.",
    description: [
      "The data center industry is experiencing unprecedented growth driven by cloud computing, artificial intelligence workloads, and the global shift toward digital-first business models. The global data center market is projected to reach $945 billion by 2028, and construction spending alone exceeded $50 billion in 2024. Northern Virginia, the world's largest data center market, now boasts more than 2,000 MW of commissioned capacity with another 1,500 MW under construction. Markets like Dallas-Fort Worth, Phoenix, and Atlanta are scaling rapidly to meet demand from hyperscalers including AWS, Microsoft Azure, Google Cloud, and Meta.",
      "This explosive expansion has created a severe talent shortage across every phase of the data center lifecycle. Data Center TALNT was founded to address this gap. Our recruiters specialize exclusively in data center staffing, which means we understand the difference between a Tier III and Tier IV facility, we know why commissioning documentation matters, and we can evaluate whether a candidate's MEP experience translates to critical environment work. We have placed hundreds of professionals in roles spanning pre-construction, construction, commissioning, turnover, and steady-state operations.",
      "Whether you are a general contractor breaking ground on a 100 MW hyperscale campus, a colocation provider expanding into a new metro, or an enterprise IT team managing an on-premises data hall, DC TALNT delivers qualified candidates who can start contributing from day one. Our data center staffing services cover direct hire, contract, and contract-to-hire engagements across the entire United States, with particularly deep networks in Northern Virginia, Dallas-Fort Worth, Phoenix, Chicago, Hillsboro, and Atlanta.",
    ],
    keyRoles: [
      {
        name: "Commissioning Agent (CxA)",
        description:
          "Level 1 through Level 5 commissioning agents who execute functional performance testing, integrated systems testing, and turnover documentation for critical power and cooling infrastructure.",
        href: "/roles/commissioning-agent",
      },
      {
        name: "MEP Engineer",
        description:
          "Mechanical, electrical, and plumbing engineers experienced in critical facility design, power distribution architecture, and cooling plant optimization for data center environments.",
        href: "/roles/mep-engineer",
      },
      {
        name: "Data Center Project Manager",
        description:
          "Project managers with a track record of delivering data center construction and fit-out projects on schedule and within budget, from shell-and-core through commissioning.",
        href: "/roles/project-manager",
      },
      {
        name: "Superintendent",
        description:
          "Construction superintendents experienced in managing MEP subcontractors, coordinating with commissioning teams, and maintaining quality standards in mission critical environments.",
        href: "/roles/superintendent",
      },
      {
        name: "Controls / BMS Technician",
        description:
          "Building management system technicians who program, configure, and troubleshoot EPMS, BMS, and DCIM platforms to ensure real-time monitoring and automated failover.",
        href: "/roles/controls-technician",
      },
      {
        name: "Critical Facility Technician (CFT)",
        description:
          "Operations technicians responsible for day-to-day maintenance, emergency response, and preventive maintenance of UPS systems, generators, switchgear, and CRAC/CRAH units.",
        href: "/roles/critical-facility-technician",
      },
      {
        name: "Electrical Engineer",
        description:
          "Electrical engineers specializing in medium-voltage distribution, paralleling switchgear, automatic transfer switches, and power redundancy architectures (N+1, 2N, 2N+1).",
        href: "/roles/electrical-engineer",
      },
      {
        name: "Safety Manager",
        description:
          "Site safety managers enforcing OSHA, NFPA 70E, and owner-specific safety protocols across active construction and operational data center environments.",
        href: "/roles/safety-manager",
      },
    ],
    marketStats: [
      {
        value: "$945B",
        label: "Projected global data center market size by 2028",
      },
      {
        value: "2,000+ MW",
        label: "Commissioned data center capacity in Northern Virginia alone",
      },
      {
        value: "$50B+",
        label: "Data center construction spending in 2024",
      },
      {
        value: "35%",
        label: "Year-over-year growth in U.S. data center power demand",
      },
    ],
    faqs: [
      {
        question:
          "What types of data center staffing roles does DC TALNT fill?",
        answer:
          "DC TALNT places professionals across the entire data center lifecycle, including commissioning agents (Levels 1-5), MEP engineers, project managers, superintendents, controls/BMS technicians, critical facility technicians, electrical engineers, safety managers, estimators, and design engineers. We staff positions for pre-construction planning, ground-up construction, commissioning and turnover, and steady-state operations.",
      },
      {
        question:
          "How quickly can DC TALNT provide data center staffing candidates?",
        answer:
          "For most data center staffing requests, we present qualified candidates within 3 to 5 business days. For urgent needs such as commissioning surge support or emergency backfills, we can often deliver vetted candidates within 24 to 48 hours thanks to our pre-built talent pipelines in major data center markets.",
      },
      {
        question:
          "Which data center markets does DC TALNT serve?",
        answer:
          "We provide data center staffing services nationwide, with especially deep talent networks in Northern Virginia (Ashburn, Manassas, Prince William County), Dallas-Fort Worth, Phoenix (Mesa, Goodyear, Chandler), Chicago, Atlanta, Hillsboro (Oregon), Salt Lake City, Columbus (Ohio), and the Carolinas. We also support emerging markets wherever our clients build.",
      },
      {
        question:
          "Does DC TALNT staff both data center construction and operations roles?",
        answer:
          "Yes. Our data center staffing practice covers both the construction and operations sides of the industry. On the construction side, we place project managers, superintendents, commissioning agents, and MEP tradespeople. On the operations side, we fill critical facility technician, chief engineer, data center manager, and capacity planning roles.",
      },
      {
        question:
          "What makes DC TALNT different from other data center staffing agencies?",
        answer:
          "Unlike generalist staffing firms, DC TALNT focuses exclusively on data center, mission critical, and related infrastructure industries. Our recruiters have direct experience in or deep knowledge of critical environments, so we screen for the technical competencies, certifications, and safety culture that data center employers require. This specialization results in higher placement success rates and lower turnover.",
      },
      {
        question:
          "Can DC TALNT support large-scale data center commissioning projects?",
        answer:
          "Absolutely. We regularly provide commissioning surge teams of 10 to 50+ agents for hyperscale data center projects. Our commissioning staffing capabilities include Level 1 through Level 5 CxAs, commissioning managers, and documentation specialists who can integrate with your existing commissioning authority or general contractor workflows.",
      },
    ],
    valueProps: [
      {
        title: "Deep Industry Specialization",
        description:
          "Our recruiters focus exclusively on data center and critical infrastructure staffing. We understand Tier classifications, redundancy architectures, commissioning processes, and the specific certifications employers require, so every candidate we present is technically qualified.",
      },
      {
        title: "Pre-Built Talent Pipelines",
        description:
          "We maintain active candidate networks in every major U.S. data center market. When you need a commissioning agent in Ashburn or a project manager in Phoenix, we are not starting from scratch; we are reaching out to professionals we already know and have vetted.",
      },
      {
        title: "Flexible Engagement Models",
        description:
          "Whether you need a single direct-hire engineer, a contract commissioning team for a 6-month turnover, or an ongoing managed staffing program, DC TALNT structures engagements that align with your project timelines and budget.",
      },
      {
        title: "Speed Without Sacrifice",
        description:
          "Data center construction schedules do not wait. We deliver qualified candidates in days, not weeks, without cutting corners on background checks, reference verification, or technical screening.",
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /*  MISSION CRITICAL FACILITIES                                           */
  /* ---------------------------------------------------------------------- */
  "mission-critical-facilities": {
    slug: "mission-critical-facilities",
    title: "Mission Critical Facilities",
    metaTitle:
      "Mission Critical Facility Staffing & Recruitment | Data Center TALNT",
    metaDescription:
      "DC TALNT staffs mission critical facilities including hospitals, financial trading floors, government buildings, and telecom hubs with engineers, technicians, and project managers who ensure zero-downtime operations.",
    heroTitle: "Mission Critical Facility Staffing",
    heroSubtitle:
      "Hospitals, financial institutions, government facilities, and telecommunications hubs operate under zero-downtime mandates. We place the engineers, technicians, and managers who keep these environments running around the clock.",
    description: [
      "Mission critical facilities are environments where even a momentary power or systems failure can result in loss of life, massive financial damage, or national security risk. These include hospital surgical suites and imaging centers, financial trading floors, federal government data processing centers, 911 dispatch centers, broadcast studios, and pharmaceutical manufacturing cleanrooms. Each of these facilities demands specialized mechanical, electrical, and controls expertise paired with rigorous safety and compliance awareness.",
      "Data Center TALNT brings the same depth of knowledge we apply to data center staffing into the broader mission critical sector. Our recruiters understand the overlap between data center infrastructure and other critical environments, including redundant power systems, precision cooling, fire suppression, and continuous monitoring. We staff professionals who hold relevant certifications such as NFPA 70E, OSHA 30, and facility-specific security clearances where required.",
      "From new construction of Tier IV hospital power plants to retrofit projects at financial trading facilities, DC TALNT delivers project managers, commissioning agents, critical environment technicians, and MEP engineers who have the demonstrated ability to work in environments where failure is not an option.",
    ],
    keyRoles: [
      {
        name: "Critical Environment Technician",
        description:
          "Technicians maintaining UPS, generator, switchgear, and HVAC systems in facilities that demand 99.999% uptime, including hospitals and financial institutions.",
        href: "/roles/critical-facility-technician",
      },
      {
        name: "Commissioning Agent",
        description:
          "Commissioning professionals who validate that critical building systems perform as designed before handover to operations teams in healthcare, government, and financial facilities.",
        href: "/roles/commissioning-agent",
      },
      {
        name: "Facility Manager",
        description:
          "Experienced facility managers overseeing operations, maintenance programs, vendor management, and capital planning for mission critical properties.",
        href: "/roles/facility-manager",
      },
      {
        name: "MEP Project Engineer",
        description:
          "Engineers coordinating mechanical, electrical, and plumbing design and construction for facilities that require uninterrupted operation of life-safety and business-critical systems.",
        href: "/roles/mep-engineer",
      },
      {
        name: "Fire Protection Engineer",
        description:
          "Specialists in fire detection, suppression, and alarm systems designed to protect high-value mission critical environments without causing collateral damage from suppression agents.",
        href: "/roles/fire-protection-engineer",
      },
      {
        name: "Controls Programmer",
        description:
          "BMS and controls engineers who integrate building automation, power monitoring, and environmental control systems to enable real-time oversight and automated response protocols.",
        href: "/roles/controls-technician",
      },
    ],
    marketStats: [
      {
        value: "$28B",
        label:
          "Annual U.S. spending on mission critical facility construction and upgrades",
      },
      {
        value: "99.999%",
        label:
          "Uptime requirement for most mission critical operations (5.26 min downtime/year)",
      },
      {
        value: "6,000+",
        label: "Hospitals in the U.S. operating critical power infrastructure",
      },
      {
        value: "42%",
        label:
          "Of mission critical facility managers report difficulty hiring qualified technicians",
      },
    ],
    faqs: [
      {
        question:
          "What qualifies as a mission critical facility?",
        answer:
          "A mission critical facility is any building or environment where an interruption in power, cooling, or connectivity could lead to significant consequences such as loss of life, financial loss, data loss, or threats to public safety. Common examples include hospital operating rooms, financial trading floors, 911 call centers, government secure facilities, broadcast studios, and pharmaceutical manufacturing plants.",
      },
      {
        question:
          "How does mission critical staffing differ from general facility staffing?",
        answer:
          "Mission critical staffing requires candidates with specific experience in redundant power and cooling systems, compliance with stringent safety and regulatory standards (such as Joint Commission for healthcare or FISMA for government), and the ability to perform under high-stakes conditions. DC TALNT screens for these specialized competencies rather than general maintenance skills.",
      },
      {
        question:
          "Does DC TALNT provide staffing for government mission critical facilities?",
        answer:
          "Yes. We staff government mission critical facilities and understand the additional requirements including security clearance processing, FISMA compliance, and agency-specific onboarding procedures. We work with candidates who already hold or are eligible for the necessary clearances.",
      },
      {
        question:
          "What certifications do mission critical facility candidates typically hold?",
        answer:
          "Common certifications include NFPA 70E (electrical safety), OSHA 30-Hour, Universal EPA 608 (refrigerant handling), CFM (Certified Facility Manager), CEM (Certified Energy Manager), and various manufacturer-specific certifications for UPS, generator, and switchgear systems. Healthcare facility candidates may also hold CHFM (Certified Healthcare Facility Manager) credentials.",
      },
      {
        question:
          "Can DC TALNT staff 24/7 mission critical operations teams?",
        answer:
          "Absolutely. We regularly build out full shift-coverage teams for mission critical facilities that require around-the-clock staffing. This includes primary technicians, shift leads, and on-call engineers to ensure continuous coverage and rapid incident response.",
      },
    ],
    valueProps: [
      {
        title: "Cross-Sector Critical Environment Expertise",
        description:
          "Our experience spans data centers, healthcare, finance, government, and telecom, giving us a unique understanding of the shared and distinct requirements across mission critical facility types.",
      },
      {
        title: "Compliance-First Screening",
        description:
          "We verify certifications, clearances, and regulatory training before presenting any candidate, so your compliance posture is never at risk from a staffing decision.",
      },
      {
        title: "Emergency and Surge Staffing",
        description:
          "When critical systems need immediate attention or a project timeline accelerates, we deploy qualified technicians and engineers on short notice to keep your operations protected.",
      },
      {
        title: "Nationwide Coverage",
        description:
          "Mission critical facilities exist in every metro area. Our national recruiting footprint ensures we can source qualified talent regardless of your facility's location.",
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /*  CONSTRUCTION STAFFING                                                 */
  /* ---------------------------------------------------------------------- */
  "construction-staffing": {
    slug: "construction-staffing",
    title: "Construction Staffing",
    metaTitle:
      "Construction Staffing & Recruitment Agency | Data Center TALNT",
    metaDescription:
      "DC TALNT is a construction staffing agency placing project managers, superintendents, estimators, safety managers, and skilled tradespeople for ground-up builds, renovations, and tenant improvements nationwide.",
    heroTitle: "Construction Staffing Solutions",
    heroSubtitle:
      "Ground-up builds, large-scale renovations, and tenant improvements all require experienced leadership and skilled tradespeople. We place the project managers, superintendents, and specialists who deliver projects on time and on budget.",
    description: [
      "The U.S. construction industry generates over $2 trillion in annual spending, yet consistently faces a skilled labor shortage that threatens project timelines and budgets. The Associated General Contractors of America reports that more than 80% of construction firms struggle to find qualified workers, and the industry needs to attract an estimated 500,000 additional workers each year to meet demand. Data Center TALNT helps general contractors, owners, and developers bridge this gap by providing vetted construction professionals across commercial, industrial, and infrastructure sectors.",
      "Our construction staffing practice draws on the same rigorous screening methodology we use for data center and mission critical placements. Every candidate is evaluated not only for technical skill and relevant experience but also for safety awareness, communication ability, and cultural fit with your project team. We staff roles from the pre-construction phase through punch list and closeout, including estimators, project engineers, project managers, superintendents, safety managers, and quality control specialists.",
    ],
    keyRoles: [
      {
        name: "Construction Project Manager",
        description:
          "Project managers experienced in managing budgets, schedules, subcontractors, and owner relationships for commercial and industrial construction projects ranging from $10M to $500M+.",
        href: "/roles/project-manager",
      },
      {
        name: "Superintendent",
        description:
          "Field superintendents who coordinate daily construction activities, manage subcontractor crews, enforce safety protocols, and maintain project quality standards.",
        href: "/roles/superintendent",
      },
      {
        name: "Estimator / Preconstruction Manager",
        description:
          "Estimators and preconstruction professionals who develop accurate cost models, perform value engineering, and support competitive bid and negotiated project pursuits.",
        href: "/roles/estimator",
      },
      {
        name: "Safety Manager",
        description:
          "Construction safety managers implementing site-specific safety plans, conducting audits, managing incident investigations, and ensuring OSHA compliance across active job sites.",
        href: "/roles/safety-manager",
      },
      {
        name: "Quality Control Manager",
        description:
          "QC professionals overseeing inspection programs, materials testing, submittals review, and compliance with project specifications and building codes.",
        href: "/roles/quality-control-manager",
      },
      {
        name: "Project Engineer",
        description:
          "Early-career and mid-level project engineers supporting submittals, RFIs, change orders, scheduling, and field coordination on active construction sites.",
        href: "/roles/project-engineer",
      },
    ],
    marketStats: [
      {
        value: "$2T+",
        label: "Annual U.S. construction industry spending",
      },
      {
        value: "80%",
        label:
          "Of construction firms report difficulty finding qualified workers (AGC)",
      },
      {
        value: "500K",
        label:
          "Additional workers the industry needs to attract annually to meet demand",
      },
      {
        value: "7.7M",
        label: "Total U.S. construction industry employment",
      },
    ],
    faqs: [
      {
        question:
          "What types of construction staffing does DC TALNT provide?",
        answer:
          "DC TALNT provides construction staffing for commercial, industrial, and infrastructure projects. We place project managers, superintendents, estimators, project engineers, safety managers, quality control managers, and MEP coordinators. Our placements cover ground-up construction, renovations, tenant improvements, and specialty projects such as data center and mission critical facility builds.",
      },
      {
        question:
          "Does DC TALNT staff both direct hire and contract construction roles?",
        answer:
          "Yes. We offer direct hire, contract, and contract-to-hire staffing models for construction positions. Many of our clients use contract staffing to bring on superintendents or project managers for the duration of a specific project, then convert high performers to permanent roles.",
      },
      {
        question:
          "How does DC TALNT screen construction candidates?",
        answer:
          "Every construction candidate goes through a multi-step screening process that includes verification of relevant experience and project history, reference checks with prior supervisors, safety record evaluation, certification verification (OSHA 30, first aid/CPR, trade licenses), and a behavioral interview focused on leadership, communication, and problem-solving in the field.",
      },
      {
        question:
          "Can DC TALNT staff an entire project team?",
        answer:
          "Yes. We frequently assemble complete project teams including a project manager, superintendent, project engineer, safety manager, and QC manager for general contractors and owners who are ramping up for new projects or entering new geographic markets.",
      },
      {
        question:
          "Which construction sectors does DC TALNT specialize in?",
        answer:
          "While we staff across commercial and industrial construction, our deepest expertise is in data center construction, mission critical facility builds, healthcare construction, and MEP-heavy industrial projects. This focus gives our clients access to candidates with specific experience in the complex mechanical and electrical systems these project types demand.",
      },
    ],
    valueProps: [
      {
        title: "MEP and Critical Infrastructure Focus",
        description:
          "Our roots in data center and mission critical staffing give us a natural advantage in placing construction professionals who understand complex mechanical, electrical, and plumbing systems.",
      },
      {
        title: "Speed to Mobilize",
        description:
          "Construction schedules are unforgiving. We maintain ready-to-deploy candidate pools and can typically present qualified professionals within 3 to 5 business days of a staffing request.",
      },
      {
        title: "Safety-First Culture",
        description:
          "Every candidate we place has been evaluated for safety awareness and compliance history. We verify OSHA certifications, review EMR histories, and assess each candidate's commitment to jobsite safety.",
      },
      {
        title: "National Reach, Local Knowledge",
        description:
          "We recruit nationally but understand local labor markets, prevailing wage requirements, and regional licensing standards so your projects are staffed with compliant, qualified professionals.",
      },
    ],
  },

  /* ---------------------------------------------------------------------- */
  /*  UTILITIES & POWER STAFFING                                            */
  /* ---------------------------------------------------------------------- */
  "utilities-staffing": {
    slug: "utilities-staffing",
    title: "Utilities & Power",
    metaTitle:
      "Utilities & Power Staffing | Data Center TALNT",
    metaDescription:
      "DC TALNT provides utilities staffing for power generation, transmission, distribution, and renewable energy projects. We place lineworkers, relay technicians, substation engineers, and power plant operators nationwide.",
    heroTitle: "Utilities & Power Staffing",
    heroSubtitle:
      "Power generation, transmission, distribution, and renewable energy projects require highly specialized talent. We connect utilities employers with lineworkers, relay technicians, substation engineers, and power plant operators across the nation.",
    description: [
      "The U.S. utilities sector is undergoing a generational transformation driven by aging infrastructure, the energy transition toward renewables, grid modernization initiatives, and the massive power demands of new data center construction. The Department of Energy estimates that the nation must invest more than $2.5 trillion in grid infrastructure over the next decade to meet reliability and clean energy goals. At the same time, roughly 25% of the current utility workforce is eligible for retirement within five years, creating a critical need for skilled replacements.",
      "Data Center TALNT serves utilities employers, engineering firms, and EPC contractors who need experienced professionals for power generation, transmission, and distribution projects. Our recruiters understand the technical demands and safety requirements of high-voltage environments, and we screen every candidate for the certifications, training, and field experience that utilities work requires. From journeyman lineworkers building out new transmission corridors to relay protection engineers commissioning substation upgrades, DC TALNT delivers the specialized workforce your projects demand.",
    ],
    keyRoles: [
      {
        name: "Journeyman Lineworker",
        description:
          "Experienced lineworkers performing construction, maintenance, and emergency restoration on overhead and underground transmission and distribution systems up to 500 kV.",
        href: "/roles/lineworker",
      },
      {
        name: "Relay Protection Technician",
        description:
          "Technicians who test, calibrate, and commission protective relay systems, SCADA interfaces, and metering equipment at substations and generating facilities.",
        href: "/roles/relay-technician",
      },
      {
        name: "Substation Engineer",
        description:
          "Engineers designing and overseeing construction of high-voltage substations including transformer specification, bus configuration, protection coordination, and grounding systems.",
        href: "/roles/substation-engineer",
      },
      {
        name: "Power Plant Operator",
        description:
          "Licensed operators managing day-to-day control room operations at natural gas, coal, nuclear, and renewable generation facilities to ensure safe and efficient power production.",
        href: "/roles/power-plant-operator",
      },
      {
        name: "Transmission Line Engineer",
        description:
          "Engineers managing the design, permitting, and construction of high-voltage transmission lines, including route selection, structural analysis, and conductor specification.",
        href: "/roles/transmission-engineer",
      },
      {
        name: "Renewable Energy Technician",
        description:
          "Technicians installing, maintaining, and troubleshooting solar photovoltaic arrays, battery energy storage systems, and wind turbine generators.",
        href: "/roles/renewable-energy-technician",
      },
    ],
    marketStats: [
      {
        value: "$2.5T",
        label:
          "Estimated U.S. grid infrastructure investment needed over the next decade",
      },
      {
        value: "25%",
        label:
          "Of the current utility workforce eligible for retirement within 5 years",
      },
      {
        value: "70 GW",
        label: "New solar capacity installed in the U.S. in 2024",
      },
      {
        value: "160K+",
        label:
          "Miles of high-voltage transmission lines in the U.S. requiring maintenance and expansion",
      },
    ],
    faqs: [
      {
        question:
          "What utilities staffing roles does DC TALNT fill?",
        answer:
          "DC TALNT places professionals across the utilities sector including journeyman lineworkers, apprentice lineworkers, relay protection technicians, substation engineers, transmission line engineers, power plant operators, renewable energy technicians, utility project managers, and GIS/mapping specialists. We staff for investor-owned utilities, municipal utilities, rural electric cooperatives, and EPC contractors.",
      },
      {
        question:
          "Does DC TALNT staff renewable energy projects?",
        answer:
          "Yes. We provide staffing for solar, wind, and battery energy storage projects. This includes solar installers and technicians, wind turbine technicians, BESS commissioning specialists, and project managers with renewable energy development experience. The renewable energy sector is one of our fastest-growing practice areas.",
      },
      {
        question:
          "How does DC TALNT ensure utility worker safety qualifications?",
        answer:
          "Safety is paramount in utilities work. We verify OSHA certifications, first aid and CPR training, employer-specific safety orientations, and high-voltage work qualifications. For lineworkers, we confirm journeyman status, CDL licensing, and relevant hot-stick or live-line training. We also review each candidate's safety incident history with previous employers.",
      },
      {
        question:
          "Can DC TALNT support storm restoration and emergency utility staffing?",
        answer:
          "Yes. We maintain a network of experienced lineworkers and utility technicians who are available for emergency storm restoration deployments. When severe weather events damage transmission and distribution infrastructure, we can mobilize crews on 24 to 48 hours' notice to support mutual aid and restoration efforts.",
      },
      {
        question:
          "What geographic areas does DC TALNT cover for utilities staffing?",
        answer:
          "We provide utilities staffing services across the continental United States. Our strongest networks are in the Southeast, Mid-Atlantic, Texas, the Midwest, and the West, but we recruit nationally and can source qualified utility professionals for projects in any state.",
      },
    ],
    valueProps: [
      {
        title: "High-Voltage Expertise",
        description:
          "Our recruiters understand the technical and safety requirements of transmission, distribution, and generation work. We screen for certifications, field experience, and the safety mindset that utilities employers demand.",
      },
      {
        title: "Rapid Storm and Emergency Response",
        description:
          "When storms hit, we mobilize. Our pre-vetted lineworker network enables us to deploy qualified crews for mutual aid and restoration efforts on extremely short notice.",
      },
      {
        title: "Renewable Energy Capabilities",
        description:
          "As the energy transition accelerates, we are building deep talent pipelines for solar, wind, and battery storage projects, giving you access to the next generation of energy professionals.",
      },
      {
        title: "Union and Non-Union Flexibility",
        description:
          "We understand the nuances of both union and non-union utility labor markets and can source candidates who match your project's labor agreement and jurisdictional requirements.",
      },
    ],
  },
  /* ---------------------------------------------------------------------- */
  /*  HYPERSCALERS                                                          */
  /* ---------------------------------------------------------------------- */
  "hyperscalers": {
    slug: "hyperscalers",
    title: "Hyperscalers",
    metaTitle:
      "Hyperscaler Data Center Staffing | AWS, OpenAI, Oracle | Data Center TALNT",
    metaDescription:
      "DC TALNT provides specialized staffing for hyperscale data center construction projects built for AWS, OpenAI, Oracle, and other leading hyperscalers. We place project managers, commissioning agents, MEP engineers, and superintendents on the largest campus builds in the country.",
    heroTitle: "Hyperscaler Data Center Staffing",
    heroSubtitle:
      "The world's largest cloud and AI companies are building data center campuses at an unprecedented pace. DC TALNT places the project managers, commissioning agents, MEP engineers, and superintendents who deliver these mission critical builds on schedule.",
    description: [
      "Hyperscale data center construction represents the largest and most complex builds in the industry. Companies like Amazon Web Services (AWS), Microsoft Azure, Google Cloud, Meta, Oracle Cloud Infrastructure (OCI), and OpenAI are investing hundreds of billions of dollars in new data center campuses across the United States. These projects range from 50 MW single-building facilities to 500 MW+ multi-phase campuses that take years to complete and employ thousands of construction professionals at peak activity.",
      "The staffing demands of hyperscale projects are fundamentally different from standard commercial construction. These builds require professionals who understand concurrent maintainability, N+1 and 2N redundancy architectures, phased energization sequences, and the rigorous commissioning protocols that hyperscalers mandate before accepting a facility. A project manager who has delivered a 100 MW campus for AWS operates in a different league than one who has managed office buildings — and hyperscaler clients know the difference immediately.",
      "DC TALNT has built deep relationships across the hyperscaler ecosystem — with the general contractors, commissioning authorities, and owner's representatives who execute these projects. When a new campus breaks ground in Ashburn, Phoenix, Dallas, or Columbus, the teams managing those builds turn to us because our recruiters understand the specific requirements, certifications, and experience levels that hyperscale construction demands. We don't just fill seats — we place professionals who've been through the hyperscale process before and can contribute from day one.",
    ],
    keyRoles: [
      {
        name: "Hyperscale Project Manager",
        description:
          "Project managers with direct experience delivering 50 MW+ data center campuses for hyperscaler clients. They manage $100M+ budgets, coordinate dozens of subcontractors, and navigate the demanding owner approval processes that hyperscalers require.",
        href: "/roles/project-managers",
      },
      {
        name: "Commissioning Agent (CxA)",
        description:
          "Level 1 through Level 5 commissioning agents experienced in hyperscaler commissioning scripts, integrated systems testing (IST), and the documentation standards required by AWS, OpenAI, Oracle, and other hyperscalers for facility acceptance.",
        href: "/roles/commissioning-agents",
      },
      {
        name: "MEP Superintendent",
        description:
          "Field superintendents specializing in the mechanical, electrical, and plumbing systems that define hyperscale data centers — including medium-voltage switchgear, chilled water plants, and generator paralleling systems.",
        href: "/roles/superintendents",
      },
      {
        name: "MEP Engineer",
        description:
          "Mechanical and electrical engineers who design and oversee the critical power and cooling infrastructure for hyperscale facilities, including 2N power distribution, indirect evaporative cooling, and battery energy storage systems.",
        href: "/roles/mep-engineers",
      },
      {
        name: "Quality Control Manager",
        description:
          "QC professionals enforcing the stringent quality standards hyperscalers require across structural, mechanical, electrical, and fire protection systems throughout multi-phase campus builds.",
        href: "/roles/quality-control-manager",
      },
      {
        name: "Safety Manager",
        description:
          "Site safety managers implementing the elevated safety protocols required on hyperscaler projects, including owner-specific safety orientations, daily audits, and incident investigation procedures that go well beyond OSHA minimums.",
        href: "/roles/safety-manager",
      },
      {
        name: "Controls / BMS Engineer",
        description:
          "Engineers who program and commission the building management systems, EPMS platforms, and DCIM tools that hyperscalers rely on for real-time monitoring and automated failover of critical infrastructure.",
        href: "/roles/controls-technician",
      },
      {
        name: "Scheduler / Planner",
        description:
          "Primavera P6 experts who build and maintain the master schedules for multi-phase hyperscale campuses, tracking thousands of activities across concurrent construction and commissioning phases.",
        href: "/roles/schedulers",
      },
    ],
    marketStats: [
      {
        value: "$500B+",
        label: "Announced hyperscaler data center investment through 2030",
      },
      {
        value: "5 GW+",
        label: "New hyperscale data center capacity under construction in the U.S.",
      },
      {
        value: "300+",
        label: "Active hyperscale data center campuses in the United States",
      },
      {
        value: "60%",
        label: "Of all new U.S. data center construction driven by hyperscalers",
      },
    ],
    faqs: [
      {
        question:
          "What is a hyperscaler and why do they need specialized staffing?",
        answer:
          "Hyperscalers are companies that operate massive-scale cloud and computing infrastructure — including AWS, Microsoft Azure, Google Cloud, Meta, Oracle, and OpenAI. Their data center construction projects are significantly larger and more complex than typical builds, often spanning 50 MW to 500 MW+ across multi-building campuses. These projects require professionals with specific experience in hyperscale commissioning protocols, redundancy architectures, and the demanding quality and safety standards these companies enforce.",
      },
      {
        question:
          "Which hyperscaler projects does DC TALNT staff?",
        answer:
          "DC TALNT provides staffing for data center construction projects built for leading hyperscalers and AI companies, including Amazon Web Services (AWS), OpenAI, and Oracle Cloud Infrastructure (OCI). We work with the general contractors, commissioning authorities, and owner's representatives who execute these builds across the United States.",
      },
      {
        question:
          "What experience do DC TALNT candidates have with hyperscale construction?",
        answer:
          "Our candidates have direct, verified experience on hyperscale data center projects. This includes professionals who have managed phased energization on 100 MW+ campuses, led integrated systems testing (IST) events for hyperscaler acceptance, and coordinated MEP installations across concurrent construction phases. We verify project history and confirm hyperscaler-specific experience before presenting any candidate.",
      },
      {
        question:
          "How quickly can DC TALNT staff a hyperscale data center project?",
        answer:
          "For hyperscale projects, we typically present qualified candidates within 48 to 72 hours. For commissioning surge events or rapid ramp-ups, we can mobilize teams of 10 to 50+ professionals on short notice because we maintain active relationships with experienced hyperscale construction professionals across all major U.S. markets.",
      },
      {
        question:
          "What markets does DC TALNT cover for hyperscaler staffing?",
        answer:
          "We provide hyperscaler staffing in every major U.S. data center market, including Northern Virginia (Ashburn), Dallas-Fort Worth, Phoenix (Mesa, Goodyear), Chicago, Columbus (Ohio), Portland/Hillsboro (Oregon), Atlanta, Salt Lake City, Reno, and emerging markets wherever hyperscalers are breaking ground. Our national recruiting reach means we can source talent for any geography.",
      },
      {
        question:
          "Does DC TALNT work directly with hyperscalers or with their contractors?",
        answer:
          "We work across the hyperscaler ecosystem. Our clients include the general contractors building hyperscale campuses (Turner, Holder, Fortis, Rosendin, etc.), the commissioning authorities validating facility performance, the owner's representatives managing the build on behalf of the hyperscaler, and in some cases the hyperscalers' own internal construction teams.",
      },
    ],
    valueProps: [
      {
        title: "Hyperscale-Specific Expertise",
        description:
          "Our recruiters understand the difference between standard data center construction and hyperscale builds. We screen for experience with specific hyperscaler commissioning protocols, multi-phase campus logistics, and the elevated quality standards these clients demand.",
      },
      {
        title: "Deep Contractor Relationships",
        description:
          "We work with the general contractors, commissioning firms, and owner's reps who build for every major hyperscaler. This gives us visibility into upcoming projects and staffing needs before they hit the open market.",
      },
      {
        title: "Surge and Scale Capability",
        description:
          "Hyperscale projects ramp up fast. Whether you need 5 commissioning agents or 50, we maintain the bench depth and recruiting infrastructure to mobilize experienced professionals on compressed timelines.",
      },
      {
        title: "Verified Hyperscale Experience",
        description:
          "Every candidate we present for hyperscale roles has verified project history on similar builds. We confirm MW capacity delivered, specific hyperscaler experience, and the commissioning or construction phases they've led.",
      },
    ],
  },
};

/* ========================================================================== */
/*  Next.js Route Helpers                                                     */
/* ========================================================================== */

/** Pre-render all industry pages at build time. */
export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

/** Generate dynamic SEO metadata per industry. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `https://www.datacentertalnt.com/industries/${industry.slug}`,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://www.datacentertalnt.com/industries/${industry.slug}`,
      type: "website",
    },
  };
}

/* ========================================================================== */
/*  Page Component                                                            */
/* ========================================================================== */

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesData[slug];
  if (!industry) notFound();

  /* ---- Structured Data ---- */
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Industries", url: "/industries" },
    { name: industry.title, url: `/industries/${industry.slug}` },
  ]);

  const faqSchema = generateFAQSchema(
    industry.faqs.map((f) => ({
      question: f.question,
      answer: f.answer,
    })),
  );

  const serviceSchema = generateServiceSchema({
    name: `${industry.title} Staffing`,
    description: industry.metaDescription,
    url: `/industries/${industry.slug}`,
    serviceType: "Staffing and Recruitment",
  });

  return (
    <>
      {/* ---- JSON-LD Structured Data ---- */}
      <SchemaScript schema={[breadcrumbSchema, faqSchema, serviceSchema]} />

      {/* ---- Breadcrumb Navigation ---- */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 text-sm text-slate-600">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-sky-700"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">
              /
            </li>
            <li>
              <Link
                href="/industries"
                className="transition-colors hover:text-sky-700"
              >
                Industries
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">
              /
            </li>
            <li aria-current="page" className="font-medium text-slate-900">
              {industry.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* ================================================================== */}
      {/*  HERO SECTION                                                      */}
      {/* ================================================================== */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {industry.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            {industry.heroSubtitle}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/employers"
              className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-sky-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              Hire {industry.title} Talent
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  HYPERSCALER LOGOS (only on hyperscalers page)                     */}
      {/* ================================================================== */}
      {slug === "hyperscalers" && <HyperscalerLogos />}

      {/* ================================================================== */}
      {/*  ABOUT / DESCRIPTION SECTION                                       */}
      {/* ================================================================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            About {industry.title} Staffing
          </h2>
          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-relaxed text-slate-700">
            {industry.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  KEY ROLES WE PLACE                                                */}
      {/* ================================================================== */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Key Roles We Place
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            DC TALNT recruits across every function within the{" "}
            {industry.title.toLowerCase()} sector. Below are some of the most
            in-demand positions we fill.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industry.keyRoles.map((role) => (
              <article
                key={role.name}
                className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {role.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {role.description}
                </p>
                <div className="mt-4">
                  <Link
                    href={role.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-sky-700 transition-colors hover:text-sky-900"
                  >
                    Learn more <span aria-hidden="true">&rarr;</span>
                    <span className="absolute inset-0" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  MARKET OVERVIEW                                                   */}
      {/* ================================================================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Market Overview
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            The {industry.title.toLowerCase()} sector continues to grow, driving
            sustained demand for skilled professionals. Here are some key
            statistics shaping the market today.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industry.marketStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <p className="text-3xl font-bold text-sky-700 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  WHY CHOOSE DC TALNT                                               */}
      {/* ================================================================== */}
      <section className="bg-slate-900 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose DC TALNT for {industry.title}
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {industry.valueProps.map((prop) => (
              <div key={prop.title} className="rounded-xl bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-sky-400">
                  {prop.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-300">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  FAQ SECTION                                                       */}
      {/* ================================================================== */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 max-w-4xl divide-y divide-slate-200">
            {industry.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-medium text-slate-900 marker:content-none hover:text-sky-700">
                  <span>{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-5 shrink-0 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  BOTTOM CTA                                                        */}
      {/* ================================================================== */}
      <section className="bg-gradient-to-r from-sky-700 to-sky-600 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Need {industry.title} Talent?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-sky-100">
            Tell us about your staffing requirements and a DC TALNT recruiter
            specializing in {industry.title.toLowerCase()} will reach out within
            one business day.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition-colors hover:bg-sky-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us Today
            </Link>
            <Link
              href="/employers"
              className="inline-flex items-center rounded-lg border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Submit a Staffing Request
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
