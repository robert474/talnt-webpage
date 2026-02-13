import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import {
  SchemaScript,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { siteConfig } from "@/lib/metadata";

/* ========================================================================== */
/*  LOCATION DATA                                                             */
/*  Each entry contains genuinely unique content tailored to the market.      */
/* ========================================================================== */

interface FAQEntry {
  question: string;
  answer: string;
}

interface LocationData {
  slug: string;
  city: string;
  state: string;
  stateCode: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string[];
  marketHighlights: string[];
  majorEmployers: string[];
  keyStats: {
    datacenters: number;
    megawatts: number;
    growthRate: string;
  };
  topRoles: string[];
  nearbyLocations: { city: string; slug: string }[];
  faqs: FAQEntry[];
  latitude: number;
  longitude: number;
}

const locations: LocationData[] = [
  /* ------------------------------------------------------------------------ */
  /*  Northern Virginia                                                       */
  /* ------------------------------------------------------------------------ */
  {
    slug: "northern-virginia",
    city: "Northern Virginia",
    state: "Virginia",
    stateCode: "VA",
    metaTitle:
      "Data Center Staffing in Northern Virginia | Ashburn & Loudoun County",
    metaDescription:
      "Hire skilled data center professionals in Northern Virginia's Data Center Alley. DC TALNT specializes in staffing for Ashburn, Loudoun County, and the world's largest data center market.",
    heroTitle: "Data Center Staffing in Northern Virginia",
    heroSubtitle:
      "Serving the world's largest data center market across Ashburn, Loudoun County, and the greater NoVA corridor",
    description: [
      "Northern Virginia is the undisputed epicenter of the global data center industry. Centered around Ashburn and the broader Loudoun County corridor, this market accounts for roughly 35 percent of all known hyperscale data center capacity in the United States. What began as a strategic hub along the original MAE-East internet exchange point in the 1990s has grown into a sprawling ecosystem where billions of dollars in infrastructure investment arrive each year.",
      "Loudoun County alone hosts more data center capacity than most entire countries. The concentration of fiber routes, the proximity to major submarine cable landing stations, and favorable local policies have created an unmatched environment for operators such as AWS, Microsoft, Google, Equinix, QTS, and Digital Realty. Prince William County has also emerged as a secondary growth corridor, with massive new campuses breaking ground regularly.",
      "The talent demands in Northern Virginia are immense and constant. With dozens of facilities under construction at any given time and hundreds more in operation, the competition for qualified commissioning agents, critical facility engineers, project managers, and electrical technicians is among the fiercest in the world. Data Center TALNT maintains deep relationships with hiring managers across this market and delivers professionals who understand the pace and precision required in Data Center Alley.",
    ],
    marketHighlights: [
      "Home to Data Center Alley -- the single largest concentration of data centers on Earth, spanning Ashburn, Sterling, and Manassas",
      "Over 35% of all U.S. hyperscale data center capacity is located within a 30-mile radius of Ashburn",
      "Loudoun County generates more than $500 million annually in data center tax revenue, creating strong public-sector support for continued growth",
      "Major fiber backbone convergence point with direct connectivity to transatlantic submarine cable systems",
    ],
    majorEmployers: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud",
      "Equinix",
      "QTS Realty Trust",
      "Digital Realty",
      "CoreSite",
      "CloudHQ",
      "Vantage Data Centers",
    ],
    keyStats: { datacenters: 300, megawatts: 2500, growthRate: "15% YoY" },
    topRoles: [
      "Critical Facility Engineer",
      "Commissioning Agent",
      "Electrical QA/QC Inspector",
      "Data Center Project Manager",
      "MEP Engineer",
      "Controls Technician",
      "Construction Manager",
      "Safety Manager",
    ],
    nearbyLocations: [
      { city: "Charlotte", slug: "charlotte" },
      { city: "New York Metro", slug: "new-york-metro" },
      { city: "Atlanta", slug: "atlanta" },
      { city: "Columbus", slug: "columbus-ohio" },
    ],
    faqs: [
      {
        question:
          "How many data centers are in Northern Virginia?",
        answer:
          "Northern Virginia hosts over 300 data center facilities, primarily concentrated in Loudoun County's Ashburn corridor. This makes it the largest data center market in the world by total capacity, with more than 2,500 MW of commissioned power.",
      },
      {
        question:
          "What is the average salary for data center jobs in Northern Virginia?",
        answer:
          "Data center salaries in Northern Virginia are among the highest in the nation due to intense competition for talent. Critical facility engineers typically earn between $90,000 and $130,000 annually, while project managers and commissioning agents can command $120,000 to $180,000 or more depending on experience.",
      },
      {
        question: "Why is Ashburn called Data Center Alley?",
        answer:
          "Ashburn earned the nickname 'Data Center Alley' because of the extraordinary density of data centers along the Loudoun County Technology Corridor. The area became a data center hub in the late 1990s when MAE-East, one of the earliest major internet exchange points, was located nearby, attracting carriers and colocation providers that eventually drew hyperscale operators.",
      },
      {
        question:
          "What types of data center roles are most in demand in Northern Virginia?",
        answer:
          "The most in-demand roles in Northern Virginia include critical facility engineers, electrical and mechanical technicians, commissioning agents, MEP engineers, project managers, and construction QA/QC inspectors. The constant pace of new construction and the need to staff operational facilities simultaneously creates persistent demand across all skill levels.",
      },
    ],
    latitude: 39.0438,
    longitude: -77.4874,
  },

  /* ------------------------------------------------------------------------ */
  /*  Dallas-Fort Worth                                                       */
  /* ------------------------------------------------------------------------ */
  {
    slug: "dallas-fort-worth",
    city: "Dallas-Fort Worth",
    state: "Texas",
    stateCode: "TX",
    metaTitle:
      "Data Center Staffing in Dallas-Fort Worth | Garland & Richardson Corridor",
    metaDescription:
      "Expert data center staffing in Dallas-Fort Worth. DC TALNT connects employers with skilled technicians, engineers, and project managers across the DFW data center corridor.",
    heroTitle: "Data Center Staffing in Dallas-Fort Worth",
    heroSubtitle:
      "Powering talent pipelines across the second-largest U.S. data center market",
    description: [
      "Dallas-Fort Worth has firmly established itself as the second-largest data center market in the United States, driven by its central geographic position, robust power infrastructure, and business-friendly tax environment. The Garland and Richardson corridor forms the traditional heart of DFW's data center ecosystem, with dense clusters of colocation and enterprise facilities that have operated for decades alongside newer hyperscale campuses spreading into suburban communities.",
      "Texas offers no state income tax and competitive electricity rates powered by the deregulated ERCOT grid, making DFW exceptionally attractive for operators seeking to control long-term costs. Major hyperscale players including Meta, Google, and AWS have invested billions in new campuses across the metroplex, while established colocation providers like Equinix, CyrusOne (now part of KKR), and DataBank continue to expand their DFW footprints.",
      "The rapid pace of construction across DFW has created a deep need for experienced data center professionals at every level. From ground-up construction teams building multi-hundred-megawatt campuses to operations staff maintaining 24/7 uptime in mission-critical facilities, Data Center TALNT provides DFW employers with vetted, qualified talent who understand the unique demands of the Texas market.",
    ],
    marketHighlights: [
      "Second-largest data center market in the U.S. with over 800 MW of commissioned capacity and aggressive expansion underway",
      "Garland-Richardson corridor is the traditional data center hub, complemented by new hyperscale campuses in Fort Worth, Midlothian, and Red Oak",
      "Texas's deregulated energy market and zero state income tax create a compelling cost profile for operators and employees alike",
      "Central U.S. location provides sub-40ms latency to over 90% of the North American population",
    ],
    majorEmployers: [
      "Meta (Facebook)",
      "Google Cloud",
      "Amazon Web Services (AWS)",
      "Equinix",
      "CyrusOne",
      "DataBank",
      "Digital Realty",
      "Aligned Data Centers",
      "Stream Data Centers",
    ],
    keyStats: { datacenters: 150, megawatts: 850, growthRate: "18% YoY" },
    topRoles: [
      "Data Center Construction Manager",
      "Electrical Foreman",
      "Commissioning Technician",
      "Critical Facility Engineer",
      "MEP Project Manager",
      "BMS/Controls Specialist",
      "Safety Coordinator",
      "Mechanical QA/QC Inspector",
    ],
    nearbyLocations: [
      { city: "Houston", slug: "houston" },
      { city: "San Antonio", slug: "san-antonio" },
      { city: "Phoenix", slug: "phoenix" },
      { city: "Atlanta", slug: "atlanta" },
    ],
    faqs: [
      {
        question:
          "How many data centers are in Dallas-Fort Worth?",
        answer:
          "The Dallas-Fort Worth metroplex hosts approximately 150 data center facilities, ranging from single-building colocation sites in the Garland-Richardson corridor to massive hyperscale campuses under development in southern Dallas County. The region has over 850 MW of total data center capacity.",
      },
      {
        question:
          "What is the average salary for data center jobs in Dallas-Fort Worth?",
        answer:
          "Data center professionals in DFW typically earn competitive salaries thanks to strong demand and Texas's cost-of-living advantages. Critical facility engineers earn $80,000 to $120,000, project managers earn $100,000 to $160,000, and construction QA/QC inspectors can earn $80,000 to $140,000 annually.",
      },
      {
        question:
          "Why is Dallas-Fort Worth a top data center market?",
        answer:
          "DFW benefits from a central U.S. location offering low-latency connectivity nationwide, a deregulated energy market with competitive electricity rates, no state income tax, pro-business state policies, and abundant available land for large-scale campus development. The market also has a deep existing fiber network and strong workforce.",
      },
    ],
    latitude: 32.7767,
    longitude: -96.797,
  },

  /* ------------------------------------------------------------------------ */
  /*  Phoenix                                                                 */
  /* ------------------------------------------------------------------------ */
  {
    slug: "phoenix",
    city: "Phoenix",
    state: "Arizona",
    stateCode: "AZ",
    metaTitle: "Data Center Staffing in Phoenix | Mesa & Goodyear Corridor",
    metaDescription:
      "Data center staffing in Phoenix, AZ. DC TALNT places engineers, technicians, and construction professionals across Phoenix's rapidly growing data center market.",
    heroTitle: "Data Center Staffing in Phoenix",
    heroSubtitle:
      "Staffing the fastest-growing data center market in the American Southwest",
    description: [
      "Phoenix has surged to become one of the fastest-growing data center markets in the United States, propelled by its dry desert climate, abundant solar energy potential, and vast tracts of available land. The metropolitan area's arid conditions mean lower cooling costs and reduced risk of humidity-related equipment damage -- a critical operational advantage that has attracted billions in hyperscale investment to the Mesa, Goodyear, and Chandler corridors.",
      "The arrival of Taiwan Semiconductor Manufacturing Company (TSMC) in north Phoenix has further catalyzed the region's growth as a technology hub, drawing adjacent semiconductor and cloud computing investments. Microsoft, Google, Meta, and Apple have all announced or expanded data center campuses in the greater Phoenix area, with some individual projects exceeding 300 MW of planned capacity. The city's proximity to Southern California markets provides a cost-effective alternative with significantly cheaper land and power.",
      "Phoenix's data center construction boom has created an acute need for skilled tradespeople and technical professionals. The desert climate introduces unique challenges around cooling system design, water conservation, and high-temperature construction conditions that require experienced talent. Data Center TALNT specializes in placing professionals who understand these Southwest-specific requirements and can deliver results in this high-growth environment.",
    ],
    marketHighlights: [
      "Dry desert climate reduces cooling costs by up to 30% compared to humid markets and minimizes corrosion risk to sensitive equipment",
      "Over 500 MW of new data center capacity in the construction pipeline, with Mesa and Goodyear as primary growth corridors",
      "TSMC's $40B+ semiconductor fab investment has catalyzed a broader tech ecosystem attracting adjacent data center and cloud investments",
      "Abundant solar energy resources support sustainability goals for operators targeting carbon-neutral operations",
    ],
    majorEmployers: [
      "Microsoft Azure",
      "Google Cloud",
      "Meta (Facebook)",
      "Apple",
      "CyrusOne",
      "Stream Data Centers",
      "Aligned Data Centers",
      "EdgeCore Internet Real Estate",
      "Iron Mountain Data Centers",
    ],
    keyStats: { datacenters: 80, megawatts: 600, growthRate: "25% YoY" },
    topRoles: [
      "Data Center Construction QA/QC Inspector",
      "Mechanical Engineer",
      "Electrical Technician",
      "Project Controls Specialist",
      "Commissioning Agent",
      "Critical Facility Engineer",
      "General QA/QC Inspector",
      "Quality Control Manager",
    ],
    nearbyLocations: [
      { city: "Las Vegas", slug: "las-vegas" },
      { city: "Denver", slug: "denver" },
      { city: "Dallas-Fort Worth", slug: "dallas-fort-worth" },
      { city: "Salt Lake City", slug: "salt-lake-city" },
    ],
    faqs: [
      {
        question: "How many data centers are in Phoenix?",
        answer:
          "Phoenix has approximately 80 operational data center facilities with over 600 MW of total capacity. The market has more than 500 MW of additional capacity in active construction or planning stages, making it one of the fastest-growing data center markets in the country.",
      },
      {
        question:
          "What is the average salary for data center jobs in Phoenix?",
        answer:
          "Data center salaries in Phoenix are rising rapidly due to strong demand. Critical facility engineers typically earn $75,000 to $115,000 annually, while construction QA/QC inspectors earn $80,000 to $140,000. Project managers overseeing hyperscale builds can command $110,000 to $170,000.",
      },
      {
        question:
          "Why are data centers being built in the Phoenix desert?",
        answer:
          "Phoenix's dry, arid climate is actually ideal for data centers because low humidity reduces cooling energy costs by up to 30% and minimizes corrosion risk. Combined with abundant land, competitive power costs, strong solar energy potential, and proximity to California markets, Phoenix offers a compelling combination of operational and economic advantages.",
      },
    ],
    latitude: 33.4484,
    longitude: -112.074,
  },

  /* ------------------------------------------------------------------------ */
  /*  Atlanta                                                                 */
  /* ------------------------------------------------------------------------ */
  {
    slug: "atlanta",
    city: "Atlanta",
    state: "Georgia",
    stateCode: "GA",
    metaTitle: "Data Center Staffing in Atlanta | Southeast Data Center Hub",
    metaDescription:
      "Data center staffing in Atlanta, GA. DC TALNT serves the Southeast's premier connectivity hub, placing engineers, technicians, and project managers across metro Atlanta.",
    heroTitle: "Data Center Staffing in Atlanta",
    heroSubtitle:
      "Serving the Southeast's largest and most connected data center market",
    description: [
      "Atlanta stands as the undisputed data center capital of the American Southeast, anchored by its position as a major network interconnection hub with over 50 carrier facilities and the 56 Marietta Street gateway -- one of the most connected buildings in the world. The metro area's deep fiber infrastructure, originally built to serve CNN and the telecommunications industry, now supports a thriving ecosystem of colocation, enterprise, and hyperscale data centers.",
      "The market has expanded well beyond its Midtown and Downtown roots, with significant new capacity coming online in Douglas County, Lithia Springs, and along the I-20 corridor west of the city. Georgia's favorable tax incentives for data center investments, reliable power from Georgia Power, and the metro's role as a Southeast logistics and business hub continue to attract operators. Switch, QTS, Equinix, and DataBank all maintain significant Atlanta footprints.",
      "Atlanta's data center workforce benefits from the region's strong technical education pipeline, including Georgia Tech and multiple community college programs focused on critical infrastructure trades. Data Center TALNT leverages its Southeast network to source professionals ranging from entry-level technicians to senior construction managers, ensuring Atlanta's data center operators have the talent they need to maintain uptime and deliver new capacity on schedule.",
    ],
    marketHighlights: [
      "56 Marietta Street is one of the most network-dense buildings in the world, serving as a critical interconnection point for Southeast data traffic",
      "Over 50 carrier facilities and a deep fiber backbone make Atlanta the connectivity gateway for the entire Southeast region",
      "Georgia offers sales tax exemptions on data center equipment and electricity, significantly reducing total cost of ownership",
      "Expansion along the I-20 corridor in Douglas County provides large-footprint campus opportunities with competitive land costs",
    ],
    majorEmployers: [
      "Switch",
      "QTS Realty Trust",
      "Equinix",
      "DataBank",
      "Google Cloud",
      "Microsoft Azure",
      "Digital Realty",
      "Flexential",
      "T5 Data Centers",
    ],
    keyStats: { datacenters: 65, megawatts: 400, growthRate: "14% YoY" },
    topRoles: [
      "Data Center Technician",
      "Facility Engineer",
      "Electrical QA/QC Inspector",
      "Network Infrastructure Specialist",
      "Project Manager",
      "MEP Coordinator",
      "Commissioning Agent",
      "Construction Manager",
    ],
    nearbyLocations: [
      { city: "Charlotte", slug: "charlotte" },
      { city: "Northern Virginia", slug: "northern-virginia" },
      { city: "Dallas-Fort Worth", slug: "dallas-fort-worth" },
      { city: "Houston", slug: "houston" },
    ],
    faqs: [
      {
        question: "How many data centers are in Atlanta?",
        answer:
          "Metro Atlanta hosts approximately 65 data center facilities with a combined capacity of over 400 MW. The market continues to grow, particularly along the I-20 corridor in Douglas County and surrounding suburbs.",
      },
      {
        question:
          "What is the average salary for data center jobs in Atlanta?",
        answer:
          "Data center professionals in Atlanta earn competitive salaries for the Southeast market. Technicians typically earn $55,000 to $85,000, facility engineers earn $80,000 to $120,000, and project managers earn $95,000 to $150,000 annually.",
      },
      {
        question:
          "Why is Atlanta important for data centers?",
        answer:
          "Atlanta is the Southeast's primary network interconnection hub, with 56 Marietta Street serving as one of the most connected buildings globally. The city's deep fiber infrastructure, favorable state tax incentives, reliable Georgia Power grid, and central Southeast location make it essential for any operator requiring regional connectivity and redundancy.",
      },
    ],
    latitude: 33.749,
    longitude: -84.388,
  },

  /* ------------------------------------------------------------------------ */
  /*  Chicago                                                                 */
  /* ------------------------------------------------------------------------ */
  {
    slug: "chicago",
    city: "Chicago",
    state: "Illinois",
    stateCode: "IL",
    metaTitle:
      "Data Center Staffing in Chicago | Midwest Data Center Hub",
    metaDescription:
      "Data center staffing in Chicago, IL. DC TALNT provides skilled engineers, technicians, and construction managers for the Midwest's largest data center market.",
    heroTitle: "Data Center Staffing in Chicago",
    heroSubtitle:
      "Delivering talent to the Midwest's largest data center and interconnection market",
    description: [
      "Chicago serves as the critical interconnection point for the entire Midwest and is one of the most important network hubs in North America. The 350 East Cermak building, operated by Digital Realty, is one of the largest carrier hotels in the world, housing hundreds of network providers and serving as a nexus for east-west data traffic across the continent. This deep network infrastructure has made downtown Chicago and its surrounding suburbs a magnet for data center investment.",
      "The market extends well beyond the Loop, with significant clusters in Elk Grove Village, Franklin Park, Aurora, and the western suburbs along the I-88 corridor. Illinois has worked to improve its data center tax incentive programs to remain competitive with neighboring states, and the combination of dense network connectivity, a large and skilled workforce, and proximity to major financial markets keeps Chicago among the top-tier data center metros.",
      "Chicago's data center workforce is drawn from a strong base of technical trades, electrical unions, and engineering programs at regional universities. However, the pace of new construction -- particularly hyperscale builds in the suburbs -- has outpaced local talent supply, creating significant opportunities for experienced professionals. Data Center TALNT helps bridge this gap by sourcing qualified data center construction and operations talent for Chicago-area employers.",
    ],
    marketHighlights: [
      "350 East Cermak is one of the world's largest carrier hotels, housing 50+ network providers and serving as a Midwest interconnection nexus",
      "Central U.S. position provides low-latency connectivity to both coasts and serves as a key junction for transcontinental fiber routes",
      "Strong union labor market provides a deep pool of skilled electrical and mechanical tradespeople experienced in critical infrastructure",
      "Expanding hyperscale footprint in western suburbs along the I-88 corridor and Elk Grove Village industrial area",
    ],
    majorEmployers: [
      "Digital Realty",
      "Equinix",
      "QTS Realty Trust",
      "CyrusOne",
      "DataBank",
      "TierPoint",
      "Flexential",
      "Meta (Facebook)",
      "Microsoft Azure",
    ],
    keyStats: { datacenters: 100, megawatts: 500, growthRate: "12% YoY" },
    topRoles: [
      "Critical Facility Engineer",
      "Union Electrician",
      "Data Center Project Manager",
      "Mechanical QA/QC Inspector",
      "Commissioning Agent",
      "BMS Technician",
      "Fire Protection Engineer",
      "Site Safety Manager",
    ],
    nearbyLocations: [
      { city: "Columbus", slug: "columbus-ohio" },
      { city: "Minneapolis", slug: "minneapolis" },
      { city: "Northern Virginia", slug: "northern-virginia" },
      { city: "Dallas-Fort Worth", slug: "dallas-fort-worth" },
    ],
    faqs: [
      {
        question: "How many data centers are in Chicago?",
        answer:
          "The greater Chicago metro area hosts approximately 100 data center facilities with a combined capacity of over 500 MW. Major concentrations are found downtown around the Cermak Road corridor and in western suburbs like Elk Grove Village and Aurora.",
      },
      {
        question:
          "What is the average salary for data center jobs in Chicago?",
        answer:
          "Data center professionals in Chicago earn strong salaries bolstered by union wage scales for construction trades. Critical facility engineers earn $85,000 to $125,000, union electricians earn $80,000 to $120,000, and project managers earn $105,000 to $165,000 annually.",
      },
      {
        question:
          "Why is Chicago a major data center market?",
        answer:
          "Chicago is a top-tier data center market because of its position as the Midwest's primary network interconnection hub, with 350 East Cermak serving as one of the world's largest carrier hotels. The city's central U.S. location provides low-latency access to major financial exchanges, a deep skilled workforce, and robust power infrastructure.",
      },
    ],
    latitude: 41.8781,
    longitude: -87.6298,
  },

  /* ------------------------------------------------------------------------ */
  /*  Silicon Valley                                                          */
  /* ------------------------------------------------------------------------ */
  {
    slug: "silicon-valley",
    city: "Silicon Valley",
    state: "California",
    stateCode: "CA",
    metaTitle:
      "Data Center Staffing in Silicon Valley | Santa Clara & San Jose",
    metaDescription:
      "Data center staffing in Silicon Valley. DC TALNT places engineers, technicians, and project managers in the heart of the tech industry's data center ecosystem.",
    heroTitle: "Data Center Staffing in Silicon Valley",
    heroSubtitle:
      "Staffing the technology industry's home base for data center operations and innovation",
    description: [
      "Silicon Valley remains the beating heart of the global technology industry, and its data center market reflects that status. The Santa Clara and San Jose corridor hosts a dense concentration of enterprise, colocation, and cloud data centers serving the world's most demanding tech companies. Unlike markets built primarily for hyperscale, Silicon Valley's data center ecosystem is characterized by enterprise campuses, high-density deployments, and edge facilities that support real-time applications for companies headquartered nearby.",
      "Space constraints and some of the highest real estate costs in the country have pushed new large-scale construction outward to markets like Sacramento and Reno, but Silicon Valley's existing facilities remain among the most valuable data center assets in the world. Equinix's SV campus, CoreSite's Santa Clara complex, and numerous enterprise-operated facilities ensure that mission-critical workloads continue to run close to the companies that depend on them. The area also serves as a proving ground for cutting-edge cooling technologies, AI-optimized infrastructure, and sustainable data center design.",
      "The talent market in Silicon Valley is intensely competitive, with data center professionals commanding premium compensation packages. The proximity to tech headquarters means that data center operations teams often work closely with engineering and product teams, requiring a blend of technical skill and collaborative ability. Data Center TALNT serves this market by sourcing professionals who combine deep data center expertise with the adaptability required to thrive in the Bay Area's fast-paced technology ecosystem.",
    ],
    marketHighlights: [
      "Home to the global headquarters of numerous Fortune 500 tech companies that operate large-scale data center portfolios worldwide",
      "Dense concentration of colocation and enterprise data centers in Santa Clara, San Jose, and Milpitas serving latency-sensitive applications",
      "Leading testbed for next-generation data center technologies including liquid cooling, AI-optimized power distribution, and sustainable design",
      "Intense talent competition drives premium compensation packages, often 20-30% above national data center salary averages",
    ],
    majorEmployers: [
      "Equinix",
      "CoreSite",
      "Digital Realty",
      "Vantage Data Centers",
      "Apple",
      "Google",
      "Meta (Facebook)",
      "NVIDIA",
      "Cisco Systems",
    ],
    keyStats: { datacenters: 85, megawatts: 420, growthRate: "8% YoY" },
    topRoles: [
      "Data Center Operations Manager",
      "Critical Facility Engineer",
      "Infrastructure Project Manager",
      "Electrical Engineer",
      "Cooling Systems Specialist",
      "Site Reliability Engineer",
      "Commissioning Agent",
      "Data Center Design Engineer",
    ],
    nearbyLocations: [
      { city: "Sacramento", slug: "sacramento" },
      { city: "Portland", slug: "portland-oregon" },
      { city: "Seattle", slug: "seattle" },
      { city: "Las Vegas", slug: "las-vegas" },
    ],
    faqs: [
      {
        question: "How many data centers are in Silicon Valley?",
        answer:
          "Silicon Valley hosts approximately 85 data center facilities with over 420 MW of total capacity. The market is concentrated in Santa Clara, San Jose, and Milpitas, serving major tech companies headquartered in the Bay Area.",
      },
      {
        question:
          "What is the average salary for data center jobs in Silicon Valley?",
        answer:
          "Silicon Valley data center professionals earn the highest salaries in the nation. Critical facility engineers earn $110,000 to $155,000, project managers earn $130,000 to $195,000, and operations managers earn $140,000 to $200,000+ annually, reflecting the region's high cost of living and intense talent competition.",
      },
      {
        question:
          "Is Silicon Valley still building data centers?",
        answer:
          "While available land is limited and expensive, Silicon Valley continues to see investment in high-density retrofits, edge facilities, and AI-optimized infrastructure. New large-scale construction has shifted to nearby markets like Sacramento, but existing Silicon Valley facilities are being upgraded and expanded to handle next-generation workloads.",
      },
    ],
    latitude: 37.3875,
    longitude: -122.0575,
  },

  /* ------------------------------------------------------------------------ */
  /*  Columbus, Ohio                                                          */
  /* ------------------------------------------------------------------------ */
  {
    slug: "columbus-ohio",
    city: "Columbus",
    state: "Ohio",
    stateCode: "OH",
    metaTitle:
      "Data Center Staffing in Columbus, Ohio | New Albany & Licking County",
    metaDescription:
      "Data center staffing in Columbus, OH. DC TALNT serves the Midwest's fastest-growing data center market with skilled technicians, engineers, and construction talent.",
    heroTitle: "Data Center Staffing in Columbus, Ohio",
    heroSubtitle:
      "Serving the Midwest's fastest-growing data center market in New Albany and beyond",
    description: [
      "Columbus, Ohio has emerged as one of the most dynamic data center markets in the United States, experiencing explosive growth that has caught the attention of every major hyperscale operator. The New Albany International Business Park, located northeast of the city, has become a preferred destination for massive data center campuses, with Google, Amazon, Meta, and Microsoft all committing to multi-billion-dollar investments in the region. Licking County and adjacent areas are rapidly transforming from agricultural land into one of America's newest data center corridors.",
      "Ohio's appeal as a data center market extends beyond land availability. The state offers competitive electricity rates through American Electric Power and Ohio Power, access to abundant water resources from the Great Lakes watershed, and a central geographic position that provides low-latency connectivity to major East Coast and Midwest population centers. Ohio has also implemented generous tax incentives specifically designed to attract and retain data center investments.",
      "The unprecedented pace of data center construction in Columbus has created a significant talent shortage, particularly for experienced construction managers, electrical QA/QC inspectors, and commissioning agents. With multiple billion-dollar projects running simultaneously, the demand for skilled professionals has far outpaced the local labor supply. Data Center TALNT helps Columbus-area employers tap into a broader national talent pool while also developing local workforce pipelines to sustain long-term growth.",
    ],
    marketHighlights: [
      "Fastest-growing data center market in the Midwest, with over 600 MW of new capacity in active development across New Albany and Licking County",
      "Google, Amazon, Meta, and Microsoft have each committed multi-billion-dollar investments in Columbus-area campuses",
      "Competitive electricity rates and abundant water resources from the Great Lakes watershed support efficient operations",
      "Ohio's data center tax incentive program offers 15-year property tax exemptions for qualifying projects",
    ],
    majorEmployers: [
      "Google Cloud",
      "Amazon Web Services (AWS)",
      "Meta (Facebook)",
      "Microsoft Azure",
      "QTS Realty Trust",
      "Cologix",
      "Flexential",
      "EdgeCore Internet Real Estate",
    ],
    keyStats: { datacenters: 45, megawatts: 350, growthRate: "30% YoY" },
    topRoles: [
      "Construction QA/QC Inspector",
      "Electrical Foreman",
      "Data Center Project Manager",
      "Commissioning Technician",
      "MEP Coordinator",
      "Quality Control Inspector",
      "Safety Manager",
      "Critical Facility Engineer",
    ],
    nearbyLocations: [
      { city: "Chicago", slug: "chicago" },
      { city: "Northern Virginia", slug: "northern-virginia" },
      { city: "Charlotte", slug: "charlotte" },
      { city: "Minneapolis", slug: "minneapolis" },
    ],
    faqs: [
      {
        question: "How many data centers are in Columbus, Ohio?",
        answer:
          "Columbus currently hosts approximately 45 operational data center facilities, but the market is experiencing unprecedented growth. Over 600 MW of new capacity is in active development, with New Albany and Licking County serving as the primary growth corridors.",
      },
      {
        question:
          "What is the average salary for data center jobs in Columbus?",
        answer:
          "Data center salaries in Columbus have risen sharply due to the construction boom. Technicians earn $55,000 to $80,000, construction QA/QC inspectors earn $80,000 to $140,000, and project managers earn $100,000 to $155,000 annually. The region's lower cost of living compared to coastal markets makes these salaries highly competitive.",
      },
      {
        question:
          "Why is Columbus becoming a major data center market?",
        answer:
          "Columbus offers a compelling combination of affordable land, competitive power costs from Ohio utilities, abundant water resources, central geographic position, and strong state tax incentives. The New Albany International Business Park provided shovel-ready sites that attracted initial hyperscale investment, creating a snowball effect that continues to draw new operators.",
      },
    ],
    latitude: 39.9612,
    longitude: -82.9988,
  },

  /* ------------------------------------------------------------------------ */
  /*  Portland, Oregon                                                        */
  /* ------------------------------------------------------------------------ */
  {
    slug: "portland-oregon",
    city: "Portland",
    state: "Oregon",
    stateCode: "OR",
    metaTitle:
      "Data Center Staffing in Portland, Oregon | Pacific Northwest Hub",
    metaDescription:
      "Data center staffing in Portland, OR. DC TALNT connects employers with engineers, technicians, and project managers in the Pacific Northwest data center market.",
    heroTitle: "Data Center Staffing in Portland, Oregon",
    heroSubtitle:
      "Staffing the Pacific Northwest's hydroelectric-powered data center corridor",
    description: [
      "Portland and the broader Oregon data center market benefit from one of the most compelling power advantages in the country: access to low-cost, renewable hydroelectric energy from the Bonneville Power Administration and the Columbia River basin. This clean, affordable power has attracted major operators seeking to meet ambitious sustainability goals while keeping energy costs well below national averages. Oregon's data center ecosystem spans from Portland's urban core to the suburban campuses of Hillsboro and The Dalles, where Google has operated a massive facility since 2006.",
      "Oregon's enterprise zone program offers significant property tax exemptions for qualifying data center projects, and the state's mild Pacific Northwest climate provides excellent conditions for free-air cooling during much of the year. Portland's position along major fiber routes connecting the West Coast creates strong connectivity to both domestic and transpacific markets, making it an ideal location for cloud providers and content delivery networks.",
      "The data center workforce in Portland draws from the region's strong tradition of electrical trades and engineering programs at Oregon State and Portland State universities. Data Center TALNT supports both established operators expanding their Oregon footprint and new entrants building their first Pacific Northwest facilities, providing construction and operations talent that understands the region's unique advantages and requirements.",
    ],
    marketHighlights: [
      "Access to low-cost, renewable hydroelectric power from the Bonneville Power Administration keeps electricity costs 30-40% below national averages",
      "Oregon's enterprise zone program provides 3-15 year property tax exemptions for qualifying data center investments",
      "Mild Pacific Northwest climate enables extensive free-air cooling, reducing mechanical cooling costs and environmental impact",
      "Strategic position on major West Coast fiber routes with connectivity to transpacific submarine cable systems",
    ],
    majorEmployers: [
      "Google (The Dalles)",
      "Amazon Web Services (AWS)",
      "Digital Realty",
      "Flexential",
      "EdgeConneX",
      "Stack Infrastructure",
      "T5 Data Centers",
      "Vantage Data Centers",
    ],
    keyStats: { datacenters: 40, megawatts: 250, growthRate: "16% YoY" },
    topRoles: [
      "Critical Facility Engineer",
      "Electrical Technician",
      "Data Center Construction Manager",
      "Commissioning Agent",
      "Mechanical Engineer",
      "Project Manager",
      "Controls Systems Technician",
      "Environmental Health & Safety Manager",
    ],
    nearbyLocations: [
      { city: "Hillsboro", slug: "hillsboro-oregon" },
      { city: "Seattle", slug: "seattle" },
      { city: "Silicon Valley", slug: "silicon-valley" },
      { city: "Sacramento", slug: "sacramento" },
    ],
    faqs: [
      {
        question: "How many data centers are in Portland, Oregon?",
        answer:
          "The Portland metro area and broader Oregon market host approximately 40 data center facilities with around 250 MW of total capacity. Key locations include Portland proper, Hillsboro, and The Dalles along the Columbia River.",
      },
      {
        question:
          "What is the average salary for data center jobs in Portland?",
        answer:
          "Data center professionals in Portland earn competitive Pacific Northwest salaries. Technicians earn $60,000 to $90,000, critical facility engineers earn $85,000 to $125,000, and project managers earn $100,000 to $155,000 annually.",
      },
      {
        question:
          "Why do data center companies choose Portland?",
        answer:
          "Portland's primary advantage is access to low-cost, renewable hydroelectric power from the Bonneville Power Administration, which keeps electricity costs significantly below national averages. Combined with Oregon's generous tax incentive programs, a mild climate ideal for free-air cooling, and strong West Coast fiber connectivity, Portland offers a compelling total cost of ownership.",
      },
    ],
    latitude: 45.5152,
    longitude: -122.6784,
  },

  /* ------------------------------------------------------------------------ */
  /*  Salt Lake City                                                          */
  /* ------------------------------------------------------------------------ */
  {
    slug: "salt-lake-city",
    city: "Salt Lake City",
    state: "Utah",
    stateCode: "UT",
    metaTitle:
      "Data Center Staffing in Salt Lake City | Wasatch Front Corridor",
    metaDescription:
      "Data center staffing in Salt Lake City, UT. DC TALNT places engineers, technicians, and construction professionals in the growing Wasatch Front data center corridor.",
    heroTitle: "Data Center Staffing in Salt Lake City",
    heroSubtitle:
      "Powering talent in the Mountain West's emerging data center corridor",
    description: [
      "Salt Lake City and the Wasatch Front have steadily built a reputation as a reliable, cost-effective data center market with unique advantages that set it apart from larger metros. The region benefits from Utah's low-cost power from Rocky Mountain Power, a dry continental climate that supports efficient free-air cooling, and strategic positioning as a midpoint between West Coast and central U.S. population centers. The NSA's massive data center at Camp Williams underscored the region's suitability for mission-critical infrastructure and drew broader industry attention.",
      "The data center corridor along the Wasatch Front stretches from Ogden through Salt Lake City to Provo, with particular concentration in West Jordan and Bluffdale. Operators including Aligned Data Centers, Novva Data Centers, and C7 Data Centers have established significant campuses, while major cloud providers continue evaluating the region for expansion. Utah's tech-friendly business environment, known locally as the 'Silicon Slopes' for its growing startup ecosystem, creates additional demand for local data center capacity.",
      "Utah's growing data center market requires a specialized workforce that can navigate the unique considerations of Mountain West construction and operations, from high-altitude HVAC design to seismic engineering requirements. Data Center TALNT supplies qualified professionals who understand these regional factors and helps employers in the Salt Lake City area build strong, reliable teams for both new construction and ongoing facility operations.",
    ],
    marketHighlights: [
      "Dry continental climate enables year-round free-air cooling with minimal humidity challenges, reducing energy consumption",
      "Strategic midpoint location between West Coast and central U.S. markets provides balanced latency across the western half of the country",
      "Utah's 'Silicon Slopes' tech ecosystem generates substantial local demand for colocation and cloud data center services",
      "Competitive electricity rates from Rocky Mountain Power and growing renewable energy portfolio support long-term cost control",
    ],
    majorEmployers: [
      "Aligned Data Centers",
      "Novva Data Centers",
      "C7 Data Centers",
      "DataBank",
      "Flexential",
      "Cyxtera Technologies",
      "Amazon Web Services (AWS)",
      "Facebook (Meta)",
    ],
    keyStats: { datacenters: 30, megawatts: 180, growthRate: "20% YoY" },
    topRoles: [
      "Data Center Technician",
      "Electrical Engineer",
      "Mechanical QA/QC Inspector",
      "Commissioning Agent",
      "Project Manager",
      "Critical Facility Engineer",
      "HVAC Specialist",
      "Construction Safety Manager",
    ],
    nearbyLocations: [
      { city: "Denver", slug: "denver" },
      { city: "Reno", slug: "reno" },
      { city: "Phoenix", slug: "phoenix" },
      { city: "Las Vegas", slug: "las-vegas" },
    ],
    faqs: [
      {
        question:
          "How many data centers are in Salt Lake City?",
        answer:
          "The Salt Lake City metro area and Wasatch Front corridor host approximately 30 data center facilities with around 180 MW of total capacity. Growth is concentrated in West Jordan, Bluffdale, and along the I-15 corridor.",
      },
      {
        question:
          "What is the average salary for data center jobs in Salt Lake City?",
        answer:
          "Data center salaries in Salt Lake City reflect Utah's competitive but lower cost of living. Technicians earn $50,000 to $75,000, facility engineers earn $75,000 to $110,000, and project managers earn $90,000 to $140,000 annually.",
      },
      {
        question:
          "What makes Salt Lake City attractive for data centers?",
        answer:
          "Salt Lake City offers a dry climate ideal for free-air cooling, competitive power costs from Rocky Mountain Power, a strategic location between West Coast and central U.S. markets, and Utah's pro-business regulatory environment. The growing Silicon Slopes tech ecosystem also generates significant local demand for data center services.",
      },
    ],
    latitude: 40.7608,
    longitude: -111.891,
  },

  /* ------------------------------------------------------------------------ */
  /*  Charlotte                                                               */
  /* ------------------------------------------------------------------------ */
  {
    slug: "charlotte",
    city: "Charlotte",
    state: "North Carolina",
    stateCode: "NC",
    metaTitle:
      "Data Center Staffing in Charlotte | Southeast Financial Hub",
    metaDescription:
      "Data center staffing in Charlotte, NC. DC TALNT provides skilled data center professionals to the Southeast's financial services and enterprise data center hub.",
    heroTitle: "Data Center Staffing in Charlotte",
    heroSubtitle:
      "Staffing the Southeast's financial services data center corridor",
    description: [
      "Charlotte has carved a distinctive niche in the data center landscape as the financial services capital of the Southeast. As headquarters to Bank of America, Wells Fargo's East Coast operations, and Truist Financial, the city has developed a robust ecosystem of enterprise data centers designed to meet the stringent uptime, security, and compliance requirements of the financial sector. These mission-critical facilities demand the highest caliber of operational talent and the most rigorous construction standards in the industry.",
      "Beyond financial services, Charlotte's data center market has diversified rapidly. The city's position along major Southeast fiber routes, Duke Energy's reliable power grid, and North Carolina's competitive operating costs have attracted a growing number of colocation and hyperscale operators. The Research Triangle area to the northeast adds further depth to the broader North Carolina data center ecosystem, creating a corridor of critical infrastructure development stretching across the Piedmont region.",
      "Charlotte's financial sector roots mean that data center professionals in this market must often navigate specialized requirements around SOC 2 compliance, PCI DSS standards, and financial regulatory frameworks. Data Center TALNT understands these nuances and sources professionals who bring not just technical expertise, but also the compliance awareness and attention to detail that Charlotte's demanding employers require.",
    ],
    marketHighlights: [
      "Second-largest financial center in the U.S. after New York, driving demand for highly secure, compliant data center facilities",
      "Duke Energy provides reliable, competitively priced power with a growing renewable energy portfolio",
      "North Carolina's data center tax incentives include sales tax exemptions on equipment and electricity for qualifying facilities",
      "Proximity to the Research Triangle creates a broader data center corridor across the state's Piedmont region",
    ],
    majorEmployers: [
      "Bank of America",
      "Wells Fargo",
      "Truist Financial",
      "Compass Datacenters",
      "QTS Realty Trust",
      "Flexential",
      "Expedient",
      "Peak 10 / TierPoint",
    ],
    keyStats: { datacenters: 35, megawatts: 200, growthRate: "17% YoY" },
    topRoles: [
      "Critical Facility Engineer",
      "Data Center Compliance Specialist",
      "Electrical QA/QC Inspector",
      "Project Manager",
      "Commissioning Agent",
      "Security Systems Technician",
      "MEP Engineer",
      "Facility Operations Manager",
    ],
    nearbyLocations: [
      { city: "Atlanta", slug: "atlanta" },
      { city: "Northern Virginia", slug: "northern-virginia" },
      { city: "Columbus", slug: "columbus-ohio" },
      { city: "Dallas-Fort Worth", slug: "dallas-fort-worth" },
    ],
    faqs: [
      {
        question: "How many data centers are in Charlotte?",
        answer:
          "Charlotte hosts approximately 35 data center facilities with around 200 MW of total capacity. The market is characterized by a mix of enterprise financial services facilities and growing colocation and hyperscale deployments.",
      },
      {
        question:
          "What is the average salary for data center jobs in Charlotte?",
        answer:
          "Data center professionals in Charlotte earn competitive Southeast salaries. Technicians earn $55,000 to $80,000, critical facility engineers earn $80,000 to $118,000, and project managers earn $95,000 to $150,000 annually. Financial sector facilities often pay premiums for compliance expertise.",
      },
      {
        question:
          "Why is Charlotte important for financial data centers?",
        answer:
          "Charlotte is the second-largest banking center in the United States, home to Bank of America, Truist, and major Wells Fargo operations. These institutions require highly secure, redundant data center facilities that meet strict financial regulatory requirements, creating a concentration of mission-critical infrastructure and specialized staffing needs.",
      },
    ],
    latitude: 35.2271,
    longitude: -80.8431,
  },

  /* ------------------------------------------------------------------------ */
  /*  Denver                                                                  */
  /* ------------------------------------------------------------------------ */
  {
    slug: "denver",
    city: "Denver",
    state: "Colorado",
    stateCode: "CO",
    metaTitle:
      "Data Center Staffing in Denver | Front Range Data Center Corridor",
    metaDescription:
      "Data center staffing in Denver, CO. DC TALNT places skilled data center professionals across the Front Range corridor from Boulder to Colorado Springs.",
    heroTitle: "Data Center Staffing in Denver",
    heroSubtitle:
      "Staffing the Front Range's growing data center and cloud computing corridor",
    description: [
      "Denver's Front Range corridor has emerged as a significant data center market, leveraging Colorado's favorable business climate, growing renewable energy portfolio, and strategic position as a bridge between West Coast tech hubs and Midwest population centers. The metro area stretches from Boulder to Colorado Springs, with data center activity concentrated in Denver proper, Aurora, and the Denver Tech Center. The city's high altitude and dry climate contribute to naturally efficient cooling, while Colorado's commitment to renewable energy aligns with operators' sustainability mandates.",
      "The Denver market has seen accelerating investment from both hyperscale and colocation operators. Comcast and CenturyLink (now Lumen Technologies) have long maintained significant network infrastructure in the region, and newer entrants including Vantage, Stack Infrastructure, and EdgeCore have built substantial campuses. The city's growing reputation as a remote-work-friendly tech hub has also driven demand for local data center capacity to support distributed enterprise workloads and content delivery.",
      "Colorado's skilled workforce, fed by strong engineering programs at the University of Colorado, Colorado State, and the Colorado School of Mines, provides a solid foundation for data center staffing. However, the rapid pace of construction and the competitive broader tech labor market mean that experienced data center professionals are in high demand. Data Center TALNT helps Denver employers access qualified talent for both construction projects and ongoing operational roles.",
    ],
    marketHighlights: [
      "High altitude and dry Front Range climate enable highly efficient free-air cooling with minimal humidity concerns",
      "Colorado's aggressive renewable energy portfolio standard supports operators seeking carbon-neutral or low-emission operations",
      "Strategic position connecting West Coast and Midwest markets provides balanced coast-to-coast latency",
      "Strong engineering talent pipeline from University of Colorado, Colorado State, and Colorado School of Mines",
    ],
    majorEmployers: [
      "Vantage Data Centers",
      "Stack Infrastructure",
      "EdgeCore Internet Real Estate",
      "Flexential",
      "CoreSite",
      "Lumen Technologies",
      "Comcast",
      "Amazon Web Services (AWS)",
    ],
    keyStats: { datacenters: 45, megawatts: 280, growthRate: "19% YoY" },
    topRoles: [
      "Critical Facility Engineer",
      "Construction Project Manager",
      "Electrical QA/QC Inspector",
      "Commissioning Agent",
      "MEP Engineer",
      "Data Center Technician",
      "Environmental Compliance Specialist",
      "Mechanical Systems Engineer",
    ],
    nearbyLocations: [
      { city: "Salt Lake City", slug: "salt-lake-city" },
      { city: "Phoenix", slug: "phoenix" },
      { city: "Dallas-Fort Worth", slug: "dallas-fort-worth" },
      { city: "Minneapolis", slug: "minneapolis" },
    ],
    faqs: [
      {
        question: "How many data centers are in Denver?",
        answer:
          "The Denver metro area hosts approximately 45 data center facilities with around 280 MW of total capacity. Data centers are concentrated in Denver proper, Aurora, and along the I-25 corridor through the Denver Tech Center.",
      },
      {
        question:
          "What is the average salary for data center jobs in Denver?",
        answer:
          "Data center salaries in Denver reflect the city's competitive tech labor market. Technicians earn $60,000 to $90,000, critical facility engineers earn $85,000 to $125,000, and project managers earn $100,000 to $160,000 annually.",
      },
      {
        question:
          "What advantages does Denver offer for data centers?",
        answer:
          "Denver's high altitude and dry climate enable very efficient free-air cooling, reducing energy costs. Colorado's growing renewable energy portfolio supports sustainability goals, and the city's central position between the coasts provides balanced latency. A strong local engineering talent pool and pro-business state policies round out Denver's advantages.",
      },
    ],
    latitude: 39.7392,
    longitude: -104.9903,
  },

  /* ------------------------------------------------------------------------ */
  /*  Houston                                                                 */
  /* ------------------------------------------------------------------------ */
  {
    slug: "houston",
    city: "Houston",
    state: "Texas",
    stateCode: "TX",
    metaTitle:
      "Data Center Staffing in Houston | Energy Corridor Data Center Market",
    metaDescription:
      "Data center staffing in Houston, TX. DC TALNT connects data center employers with engineers, technicians, and construction professionals in the Energy Capital of the World.",
    heroTitle: "Data Center Staffing in Houston",
    heroSubtitle:
      "Staffing data centers in the Energy Capital of the World",
    description: [
      "Houston's data center market occupies a unique position at the intersection of energy infrastructure and digital infrastructure. As the Energy Capital of the World, Houston has long hosted enterprise data centers for oil and gas majors, energy trading platforms, and pipeline operators that require ultra-reliable, low-latency computing for real-time operations. This legacy of mission-critical infrastructure has created a workforce deeply experienced in high-availability systems and 24/7 operational excellence.",
      "The city's data center market has expanded significantly beyond energy sector facilities, driven by Houston's position as the fourth-largest U.S. metro area and a major port city. The availability of abundant, competitively priced power from the deregulated ERCOT grid, combined with no state income tax and large tracts of available land, has attracted colocation and hyperscale investment. CyrusOne, DataBank, and Skybox Datacenters have all expanded their Houston footprints, while international operators view the city as a gateway connecting North American and Latin American markets.",
      "Houston's data center professionals often bring crossover experience from the energy sector, including expertise in power generation, industrial electrical systems, and large-scale mechanical installations. Data Center TALNT capitalizes on this unique talent pool, sourcing professionals who combine energy industry rigor with data center operational knowledge to deliver exceptional results for Houston-area employers.",
    ],
    marketHighlights: [
      "Energy sector legacy creates a deep pool of professionals experienced in mission-critical power, industrial electrical, and mechanical systems",
      "Strategic gateway position connecting North American and Latin American digital markets via submarine cable access in the Gulf",
      "Texas's deregulated ERCOT grid, zero state income tax, and abundant land create favorable operating economics",
      "Fourth-largest U.S. metro area provides a robust local talent market across all data center disciplines",
    ],
    majorEmployers: [
      "CyrusOne",
      "DataBank",
      "Skybox Datacenters",
      "Digital Realty",
      "Equinix",
      "T5 Data Centers",
      "QTS Realty Trust",
      "Stream Data Centers",
    ],
    keyStats: { datacenters: 55, megawatts: 300, growthRate: "15% YoY" },
    topRoles: [
      "Critical Facility Engineer",
      "Electrical Technician",
      "Data Center Construction Manager",
      "Power Systems Specialist",
      "MEP Project Manager",
      "Commissioning Agent",
      "Safety Coordinator",
      "Mechanical QA/QC Inspector",
    ],
    nearbyLocations: [
      { city: "Dallas-Fort Worth", slug: "dallas-fort-worth" },
      { city: "San Antonio", slug: "san-antonio" },
      { city: "Atlanta", slug: "atlanta" },
      { city: "Phoenix", slug: "phoenix" },
    ],
    faqs: [
      {
        question: "How many data centers are in Houston?",
        answer:
          "Houston hosts approximately 55 data center facilities with around 300 MW of total capacity. The market includes a mix of enterprise energy sector facilities, colocation providers, and growing hyperscale investment.",
      },
      {
        question:
          "What is the average salary for data center jobs in Houston?",
        answer:
          "Data center professionals in Houston earn competitive salaries enhanced by the region's energy sector pay scales. Technicians earn $55,000 to $85,000, facility engineers earn $80,000 to $120,000, and project managers earn $100,000 to $155,000 annually.",
      },
      {
        question:
          "How does Houston's energy industry benefit data center careers?",
        answer:
          "Houston's energy sector has created a workforce deeply experienced in mission-critical power systems, industrial electrical and mechanical infrastructure, and 24/7 operational environments. These skills transfer directly to data center roles, and many Houston data center professionals bring crossover expertise from oil and gas, power generation, and pipeline operations.",
      },
    ],
    latitude: 29.7604,
    longitude: -95.3698,
  },

  /* ------------------------------------------------------------------------ */
  /*  New York Metro                                                          */
  /* ------------------------------------------------------------------------ */
  {
    slug: "new-york-metro",
    city: "New York Metro",
    state: "New Jersey / New York",
    stateCode: "NJ",
    metaTitle:
      "Data Center Staffing in New York Metro | Northern NJ & Manhattan",
    metaDescription:
      "Data center staffing in the New York Metro area. DC TALNT places skilled professionals in Northern New Jersey and Manhattan data center facilities serving global financial markets.",
    heroTitle: "Data Center Staffing in New York Metro",
    heroSubtitle:
      "Staffing mission-critical facilities in the financial capital of the world",
    description: [
      "The New York Metro data center market is one of the most demanding and specialized in the world, driven by the requirements of Wall Street, global financial exchanges, and the dense concentration of Fortune 500 headquarters. Northern New Jersey -- particularly the corridor from Secaucus through Piscataway to Carteret -- hosts the majority of the region's data center capacity, with facilities purpose-built to support low-latency trading, financial data processing, and enterprise colocation. Manhattan itself maintains several significant facilities, though space and power constraints have increasingly pushed new development across the Hudson.",
      "This market is defined by its extreme reliability requirements. Financial sector tenants demand concurrent maintainability at minimum and often require Tier III or Tier IV design standards with redundant utility feeds and on-site generation capacity. The regulatory environment is complex, with data centers navigating New Jersey tax incentive programs, New York City energy regulations, and stringent financial compliance frameworks. Operators like Equinix, Digital Realty, CyrusOne, and CoreSite have built substantial campuses to serve these demanding workloads.",
      "The data center workforce in the New York Metro area commands premium compensation, reflecting both the high cost of living and the specialized skills required to operate in this market. Professionals must often hold specific clearances, understand financial regulatory requirements, and maintain expertise in high-density power and cooling systems. Data Center TALNT serves this market by sourcing elite-level talent who can meet the exacting standards of the world's financial capital.",
    ],
    marketHighlights: [
      "Primary data center market for global financial exchanges including NYSE and NASDAQ, requiring ultra-low-latency infrastructure",
      "Northern New Jersey corridor from Secaucus to Carteret hosts the majority of metro capacity, with robust fiber connectivity to Manhattan",
      "New Jersey's data center tax incentive program offers sales tax exemptions and other benefits for qualifying investments",
      "Extreme reliability requirements drive demand for Tier III/IV facilities with concurrent maintainability and redundant utility feeds",
    ],
    majorEmployers: [
      "Equinix",
      "Digital Realty",
      "CyrusOne",
      "CoreSite",
      "QTS Realty Trust",
      "Aligned Data Centers",
      "Vantage Data Centers",
      "Princeton Digital Group",
    ],
    keyStats: { datacenters: 90, megawatts: 450, growthRate: "10% YoY" },
    topRoles: [
      "Critical Facility Engineer",
      "Electrical Technician",
      "Data Center Operations Manager",
      "MEP Project Manager",
      "Commissioning Agent",
      "Fire & Life Safety Specialist",
      "Compliance Coordinator",
      "Construction QA/QC Inspector",
    ],
    nearbyLocations: [
      { city: "Northern Virginia", slug: "northern-virginia" },
      { city: "Columbus", slug: "columbus-ohio" },
      { city: "Chicago", slug: "chicago" },
      { city: "Charlotte", slug: "charlotte" },
    ],
    faqs: [
      {
        question: "How many data centers are in the New York Metro area?",
        answer:
          "The New York Metro area hosts approximately 90 data center facilities with around 450 MW of total capacity, spanning Northern New Jersey (Secaucus, Piscataway, Carteret) and select Manhattan locations.",
      },
      {
        question:
          "What is the average salary for data center jobs in New York Metro?",
        answer:
          "New York Metro data center salaries are among the highest in the country. Technicians earn $70,000 to $100,000, critical facility engineers earn $95,000 to $145,000, and operations managers earn $130,000 to $190,000 annually, reflecting the high cost of living and specialized financial sector requirements.",
      },
      {
        question:
          "Why are data centers concentrated in Northern New Jersey?",
        answer:
          "Northern New Jersey offers proximity to Manhattan's financial markets with significantly lower real estate costs, access to multiple fiber routes and carrier interconnection points, and a more favorable power and tax environment than New York City. The NJ data center tax incentive program provides additional financial benefits for qualifying investments.",
      },
    ],
    latitude: 40.7128,
    longitude: -74.006,
  },

  /* ------------------------------------------------------------------------ */
  /*  Seattle                                                                 */
  /* ------------------------------------------------------------------------ */
  {
    slug: "seattle",
    city: "Seattle",
    state: "Washington",
    stateCode: "WA",
    metaTitle:
      "Data Center Staffing in Seattle | Pacific Northwest Cloud Hub",
    metaDescription:
      "Data center staffing in Seattle, WA. DC TALNT provides skilled engineers, technicians, and project managers near Amazon, Microsoft, and major cloud provider headquarters.",
    heroTitle: "Data Center Staffing in Seattle",
    heroSubtitle:
      "Staffing data center talent near the headquarters of the world's largest cloud providers",
    description: [
      "Seattle occupies a unique position in the data center industry as the home base for two of the three largest cloud computing companies in the world -- Amazon Web Services and Microsoft Azure. While the massive hyperscale data center campuses for these companies are primarily located in Eastern Washington, Central Oregon, and other markets, Seattle and the Puget Sound region maintain significant data center operations focused on edge computing, disaster recovery, network interconnection, and proximity to corporate engineering teams.",
      "The greater Seattle market benefits from Washington State's abundant hydroelectric power, which provides some of the lowest and cleanest electricity in the nation. Quincy, Moses Lake, and other Eastern Washington locations host enormous data center campuses, but the Seattle metro itself -- including Tukwila, Renton, and Westin Building Exchange -- serves as a critical interconnection and peering hub for the Pacific Northwest. The Westin Building is one of the premier carrier hotels on the West Coast, connecting dozens of networks and enabling efficient data exchange across the region.",
      "Seattle's data center workforce is among the most technically sophisticated in the country, drawing from the broader tech talent ecosystem that supports Amazon, Microsoft, Google, and thousands of technology startups. However, the operational talent needed to maintain physical infrastructure -- electricians, mechanical technicians, commissioning agents, and construction managers -- is in especially short supply due to competition from these same tech employers. Data Center TALNT specializes in sourcing these critical operational and construction roles for Seattle-area employers.",
    ],
    marketHighlights: [
      "Home base for AWS and Microsoft Azure, the world's two largest cloud computing platforms, creating deep demand for data center operational talent",
      "Westin Building Exchange in downtown Seattle is a premier West Coast carrier hotel connecting 200+ networks",
      "Washington State's abundant hydroelectric power provides some of the lowest and cleanest electricity rates nationally",
      "Eastern Washington hosts massive hyperscale campuses in Quincy and Moses Lake, extending the broader Seattle market footprint",
    ],
    majorEmployers: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud",
      "Sabey Data Centers",
      "Digital Realty",
      "Equinix",
      "CyrusOne",
      "Iron Mountain Data Centers",
    ],
    keyStats: { datacenters: 50, megawatts: 300, growthRate: "14% YoY" },
    topRoles: [
      "Critical Facility Engineer",
      "Data Center Operations Manager",
      "Electrical QA/QC Inspector",
      "Project Manager",
      "Commissioning Agent",
      "Network Infrastructure Technician",
      "MEP Engineer",
      "Construction Manager",
    ],
    nearbyLocations: [
      { city: "Portland", slug: "portland-oregon" },
      { city: "Hillsboro", slug: "hillsboro-oregon" },
      { city: "Silicon Valley", slug: "silicon-valley" },
      { city: "Sacramento", slug: "sacramento" },
    ],
    faqs: [
      {
        question: "How many data centers are in Seattle?",
        answer:
          "The Seattle-Puget Sound region hosts approximately 50 data center facilities with around 300 MW of capacity. Including the broader Washington State market (Quincy, Moses Lake), the state's total data center footprint is substantially larger.",
      },
      {
        question:
          "What is the average salary for data center jobs in Seattle?",
        answer:
          "Seattle's data center salaries are among the highest nationally due to competition from major tech employers. Critical facility engineers earn $95,000 to $140,000, operations managers earn $120,000 to $175,000, and project managers earn $115,000 to $175,000 annually.",
      },
      {
        question:
          "Why is Seattle important for data centers?",
        answer:
          "Seattle is the headquarters city for AWS and Microsoft Azure, the world's two largest cloud platforms. The Westin Building serves as a premier West Coast interconnection hub, and Washington State's hydroelectric power provides clean, affordable energy. This combination makes Seattle a strategic center for both cloud operations and data center talent development.",
      },
    ],
    latitude: 47.6062,
    longitude: -122.3321,
  },

  /* ------------------------------------------------------------------------ */
  /*  Las Vegas                                                               */
  /* ------------------------------------------------------------------------ */
  {
    slug: "las-vegas",
    city: "Las Vegas",
    state: "Nevada",
    stateCode: "NV",
    metaTitle:
      "Data Center Staffing in Las Vegas | Southwest Data Center Market",
    metaDescription:
      "Data center staffing in Las Vegas, NV. DC TALNT connects employers with skilled data center professionals in Nevada's growing Southwest data center market.",
    heroTitle: "Data Center Staffing in Las Vegas",
    heroSubtitle:
      "Staffing the Southwest's strategic data center alternative to West Coast markets",
    description: [
      "Las Vegas has developed into a compelling data center market by offering West Coast-caliber connectivity at significantly lower costs than California. The city's proximity to Los Angeles -- just 270 miles away via dense fiber routes -- allows operators to serve Southern California workloads without paying California real estate, energy, or tax premiums. Nevada's zero state income tax, zero corporate income tax, and business-friendly regulatory environment have attracted operators seeking to optimize total cost of ownership while maintaining performance.",
      "The Las Vegas data center ecosystem is concentrated along a corridor stretching from the city center to Henderson and North Las Vegas, with Switch's SuperNAP complex serving as the market's anchor tenant. SuperNAP remains one of the largest and most advanced data center campuses in the world, setting a standard for power density and connectivity that has drawn other operators to establish nearby facilities. NV Energy provides reliable power with a growing renewable energy portfolio, including major solar installations in the surrounding desert.",
      "Las Vegas's unique position creates staffing dynamics that blend West Coast technical expectations with more attainable compensation levels. Many data center professionals are drawn to the region by the combination of competitive salaries, no state income tax, and significantly lower cost of living compared to Silicon Valley or Los Angeles. Data Center TALNT helps Las Vegas employers recruit experienced professionals from both the local market and neighboring states.",
    ],
    marketHighlights: [
      "Switch's SuperNAP campus is one of the largest and most advanced data center complexes in the world, anchoring the Southern Nevada market",
      "Just 270 miles from Los Angeles via dense fiber, providing West Coast connectivity at 30-40% lower operating costs",
      "Nevada's zero state income tax and zero corporate income tax create compelling economic advantages for operators and employees",
      "Growing solar energy capacity in the Mojave Desert supports carbon-neutral operations and long-term cost stability",
    ],
    majorEmployers: [
      "Switch (SuperNAP)",
      "Flexential",
      "Digital Realty",
      "LV Data Center",
      "Cyxtera Technologies",
      "365 Data Centers",
      "Amazon Web Services (AWS)",
      "Fortress Data Centers",
    ],
    keyStats: { datacenters: 35, megawatts: 250, growthRate: "16% YoY" },
    topRoles: [
      "Critical Facility Engineer",
      "Electrical Technician",
      "Data Center Construction QA/QC Inspector",
      "Project Manager",
      "Commissioning Agent",
      "Cooling Systems Specialist",
      "Safety Manager",
      "Data Center Technician",
    ],
    nearbyLocations: [
      { city: "Phoenix", slug: "phoenix" },
      { city: "Reno", slug: "reno" },
      { city: "Salt Lake City", slug: "salt-lake-city" },
      { city: "Silicon Valley", slug: "silicon-valley" },
    ],
    faqs: [
      {
        question: "How many data centers are in Las Vegas?",
        answer:
          "Las Vegas hosts approximately 35 data center facilities with around 250 MW of total capacity, anchored by Switch's SuperNAP campus. The market continues to expand with new construction in Henderson and North Las Vegas.",
      },
      {
        question:
          "What is the average salary for data center jobs in Las Vegas?",
        answer:
          "Data center professionals in Las Vegas earn competitive salaries enhanced by Nevada's zero state income tax. Technicians earn $55,000 to $85,000, critical facility engineers earn $80,000 to $120,000, and project managers earn $95,000 to $150,000 annually.",
      },
      {
        question:
          "Why do companies build data centers in Las Vegas instead of California?",
        answer:
          "Las Vegas offers proximity to Southern California markets via dense fiber routes at 30-40% lower operating costs. Nevada has no state income or corporate income tax, real estate is significantly cheaper, and NV Energy provides reliable power with growing renewable capacity. These economics make Las Vegas a strategic alternative for companies that need West Coast connectivity without West Coast costs.",
      },
    ],
    latitude: 36.1699,
    longitude: -115.1398,
  },

  /* ------------------------------------------------------------------------ */
  /*  Sacramento                                                              */
  /* ------------------------------------------------------------------------ */
  {
    slug: "sacramento",
    city: "Sacramento",
    state: "California",
    stateCode: "CA",
    metaTitle:
      "Data Center Staffing in Sacramento | Northern California Growth Market",
    metaDescription:
      "Data center staffing in Sacramento, CA. DC TALNT places engineers, technicians, and construction talent in Northern California's emerging data center growth market.",
    heroTitle: "Data Center Staffing in Sacramento",
    heroSubtitle:
      "Staffing Northern California's emerging alternative to Silicon Valley",
    description: [
      "Sacramento has emerged as Northern California's primary data center growth market, attracting operators priced out of Silicon Valley and the Bay Area who still require California-based infrastructure. The state capital offers significantly more available land, lower real estate costs, and access to the same major fiber routes that serve the Bay Area, making it an increasingly popular choice for hyperscale and colocation operators building next-generation facilities. The city's position at the intersection of multiple long-haul fiber networks provides robust connectivity to both domestic and transpacific destinations.",
      "The Sacramento market has seen particular growth in the Rancho Cordova and Elk Grove areas, where large parcels of industrial and formerly agricultural land are being converted into data center campuses. SMUD (Sacramento Municipal Utility District) provides competitive electricity rates and has committed to 100% carbon-free power by 2030, aligning with operators' sustainability targets. The utility's proactive approach to data center customer service -- including dedicated account teams for large power users -- has been a key differentiator in attracting investment.",
      "As Sacramento's data center sector expands, the competition for qualified technical talent has intensified. The market draws from a smaller local labor pool than the Bay Area, creating particular demand for experienced construction managers, commissioning agents, and critical facility engineers willing to relocate or commute from the broader Northern California region. Data Center TALNT helps Sacramento employers access talent from across the state and beyond.",
    ],
    marketHighlights: [
      "SMUD offers competitive electricity rates and is committed to 100% carbon-free power by 2030, making Sacramento a leader in sustainable data center operations",
      "60-90% lower real estate costs compared to Silicon Valley while maintaining access to the same Northern California fiber backbone",
      "Rancho Cordova and Elk Grove corridors provide large, shovel-ready parcels for hyperscale campus development",
      "Hot, dry summers enable efficient evaporative and free-air cooling strategies for much of the year",
    ],
    majorEmployers: [
      "CyrusOne",
      "CoreSite",
      "Digital Realty",
      "Equinix",
      "Hivelocity",
      "Cyxtera Technologies",
      "Amazon Web Services (AWS)",
      "Aligned Data Centers",
    ],
    keyStats: { datacenters: 30, megawatts: 180, growthRate: "22% YoY" },
    topRoles: [
      "Data Center Construction Manager",
      "Critical Facility Engineer",
      "Electrical QA/QC Inspector",
      "Commissioning Agent",
      "MEP Engineer",
      "Project Manager",
      "Data Center Technician",
      "Mechanical Systems Specialist",
    ],
    nearbyLocations: [
      { city: "Silicon Valley", slug: "silicon-valley" },
      { city: "Reno", slug: "reno" },
      { city: "Portland", slug: "portland-oregon" },
      { city: "Las Vegas", slug: "las-vegas" },
    ],
    faqs: [
      {
        question: "How many data centers are in Sacramento?",
        answer:
          "Sacramento hosts approximately 30 data center facilities with around 180 MW of total capacity. The market is experiencing rapid growth, particularly in Rancho Cordova and Elk Grove where new campuses are under development.",
      },
      {
        question:
          "What is the average salary for data center jobs in Sacramento?",
        answer:
          "Sacramento data center salaries are lower than Silicon Valley but competitive for the broader industry. Technicians earn $60,000 to $90,000, critical facility engineers earn $85,000 to $125,000, and project managers earn $100,000 to $155,000 annually.",
      },
      {
        question:
          "Why are data centers moving to Sacramento from Silicon Valley?",
        answer:
          "Sacramento offers 60-90% lower real estate costs than Silicon Valley while providing access to the same Northern California fiber infrastructure. SMUD's competitive and increasingly carbon-free power supply, abundant available land for large campuses, and a hot, dry climate suitable for efficient cooling make Sacramento a compelling alternative for operators who need Northern California presence without Bay Area costs.",
      },
    ],
    latitude: 38.5816,
    longitude: -121.4944,
  },

  /* ------------------------------------------------------------------------ */
  /*  Reno                                                                    */
  /* ------------------------------------------------------------------------ */
  {
    slug: "reno",
    city: "Reno",
    state: "Nevada",
    stateCode: "NV",
    metaTitle:
      "Data Center Staffing in Reno | Tahoe Reno Industrial Center",
    metaDescription:
      "Data center staffing in Reno, NV. DC TALNT provides data center construction and operations talent for the Tahoe Reno Industrial Center and greater Reno corridor.",
    heroTitle: "Data Center Staffing in Reno",
    heroSubtitle:
      "Staffing the Tahoe Reno Industrial Center and Northern Nevada's hyperscale corridor",
    description: [
      "Reno and the surrounding Northern Nevada region have attracted massive data center investments anchored by the Tahoe Reno Industrial Center (TRIC), one of the largest industrial parks in the world. Apple, Google, Switch, and other major operators have committed billions of dollars to hyperscale campuses in the TRIC and Storey County area, transforming a former desert corridor into one of America's newest major data center markets. The region's high desert climate provides excellent conditions for free-air cooling, while proximity to the California border offers low-latency connectivity to Bay Area markets.",
      "Nevada's business-friendly tax structure -- including no state income tax, no corporate income tax, and generous abatement programs for large-scale data center investments -- has been the primary economic driver of Reno's data center boom. NV Energy is investing heavily in renewable energy resources, including large-scale solar installations and geothermal projects, to meet the growing power demands of data center customers while supporting their sustainability commitments. The region's water resources, drawn from the Truckee River and Sierra Nevada snowmelt, support cooling requirements for large-scale operations.",
      "Reno's rapid data center growth has created a significant talent challenge, as the local workforce was not historically large enough to support major construction and operations hiring surges. Data Center TALNT plays a critical role in this market by sourcing experienced professionals from across the western United States and helping them transition to Northern Nevada, where the combination of competitive salaries, zero state income tax, and outdoor recreation lifestyle creates an attractive relocation proposition.",
    ],
    marketHighlights: [
      "Tahoe Reno Industrial Center (TRIC) is one of the largest industrial parks globally, hosting Apple, Google, and Switch hyperscale campuses",
      "Nevada offers no state income tax, no corporate income tax, and generous tax abatement programs for qualifying data center investments",
      "High desert climate at 4,500+ feet elevation enables year-round free-air cooling with minimal humidity",
      "Low-latency fiber connectivity to Silicon Valley and Bay Area markets via multiple diverse routes across the Sierra Nevada",
    ],
    majorEmployers: [
      "Apple",
      "Google Cloud",
      "Switch (The Citadel)",
      "Microsoft Azure",
      "Flexential",
      "Blockchains LLC",
      "IntNXT",
      "NV Energy",
    ],
    keyStats: { datacenters: 20, megawatts: 200, growthRate: "28% YoY" },
    topRoles: [
      "Data Center Construction QA/QC Inspector",
      "Electrical Foreman",
      "Commissioning Agent",
      "Critical Facility Engineer",
      "Project Manager",
      "Mechanical Engineer",
      "Quality Control Manager",
      "Safety Coordinator",
    ],
    nearbyLocations: [
      { city: "Sacramento", slug: "sacramento" },
      { city: "Las Vegas", slug: "las-vegas" },
      { city: "Salt Lake City", slug: "salt-lake-city" },
      { city: "Silicon Valley", slug: "silicon-valley" },
    ],
    faqs: [
      {
        question: "How many data centers are in Reno?",
        answer:
          "The Reno-Sparks area and Tahoe Reno Industrial Center host approximately 20 data center facilities with around 200 MW of total capacity. The market is growing at roughly 28% year-over-year, driven by hyperscale investments from Apple, Google, and Switch.",
      },
      {
        question:
          "What is the average salary for data center jobs in Reno?",
        answer:
          "Reno data center salaries have risen sharply due to the construction boom and limited local talent. Technicians earn $55,000 to $85,000, construction QA/QC inspectors earn $80,000 to $140,000, and project managers earn $95,000 to $150,000 annually. Nevada's zero state income tax effectively boosts take-home pay by 5-10% compared to neighboring California.",
      },
      {
        question:
          "Why are tech companies building data centers in Reno?",
        answer:
          "Reno offers a compelling combination of Nevada's zero-tax business environment, proximity to Silicon Valley via low-latency fiber, large available land parcels at the Tahoe Reno Industrial Center, a dry high-desert climate ideal for free-air cooling, and access to growing renewable energy resources. These factors create significant operational and economic advantages compared to California-based alternatives.",
      },
    ],
    latitude: 39.5296,
    longitude: -119.8138,
  },

  /* ------------------------------------------------------------------------ */
  /*  San Antonio                                                             */
  /* ------------------------------------------------------------------------ */
  {
    slug: "san-antonio",
    city: "San Antonio",
    state: "Texas",
    stateCode: "TX",
    metaTitle:
      "Data Center Staffing in San Antonio | Emerging Texas Data Center Hub",
    metaDescription:
      "Data center staffing in San Antonio, TX. DC TALNT places data center professionals in one of the most rapidly emerging data center markets in the southern United States.",
    heroTitle: "Data Center Staffing in San Antonio",
    heroSubtitle:
      "Staffing one of the fastest-emerging data center markets in Texas",
    description: [
      "San Antonio has rapidly ascended as a significant data center market, distinguished by its exceptionally low power costs courtesy of CPS Energy -- the nation's largest municipally owned electric utility. CPS Energy's competitive rates, often among the lowest of any major U.S. metro, have attracted hyperscale operators seeking to minimize one of their largest operating expenses. Microsoft has made San Antonio one of its largest data center hubs globally, with multiple massive campuses spread across the south and west sides of the city, while other operators including Rackspace, CyrusOne, and Data Foundry have established deep roots.",
      "The city's data center history is intertwined with its military heritage. Former Air Force bases, including Brooks City-Base, have been repurposed for data center use, providing large, secure, infrastructure-ready sites with existing power and fiber connectivity. Rackspace Technology, which grew from a San Antonio startup into a global managed cloud provider, anchored the local data center ecosystem and cultivated a workforce experienced in large-scale facility operations. This legacy gives San Antonio a talent base that punches above its weight for a market of its size.",
      "San Antonio's continued growth is fueled by Texas's zero state income tax, a lower cost of living compared to Austin and Dallas, and CPS Energy's willingness to invest in infrastructure upgrades to support data center load. Data Center TALNT serves this market by connecting employers with construction and operations professionals who can help deliver and maintain the next wave of data center capacity in one of Texas's most promising markets.",
    ],
    marketHighlights: [
      "CPS Energy, the nation's largest municipally owned utility, provides some of the lowest electricity rates of any major U.S. data center market",
      "Microsoft has invested billions in San Antonio, operating multiple hyperscale campuses that represent one of its largest global data center concentrations",
      "Former military bases provide large, secure, infrastructure-ready sites with existing power and fiber connectivity",
      "Rackspace Technology's San Antonio headquarters cultivated a deep local talent pool experienced in large-scale facility management",
    ],
    majorEmployers: [
      "Microsoft Azure",
      "Rackspace Technology",
      "CyrusOne",
      "Data Foundry",
      "Lumen Technologies",
      "Weston Urban",
      "Digital Realty",
      "Stream Data Centers",
    ],
    keyStats: { datacenters: 30, megawatts: 250, growthRate: "21% YoY" },
    topRoles: [
      "Critical Facility Engineer",
      "Data Center Construction Manager",
      "Electrical Technician",
      "Commissioning Agent",
      "Mechanical QA/QC Inspector",
      "Project Manager",
      "Controls Technician",
      "Data Center Technician",
    ],
    nearbyLocations: [
      { city: "Dallas-Fort Worth", slug: "dallas-fort-worth" },
      { city: "Houston", slug: "houston" },
      { city: "Phoenix", slug: "phoenix" },
      { city: "Austin", slug: "dallas-fort-worth" },
    ],
    faqs: [
      {
        question: "How many data centers are in San Antonio?",
        answer:
          "San Antonio hosts approximately 30 data center facilities with around 250 MW of total capacity. The market is anchored by Microsoft's massive multi-campus presence and complemented by Rackspace, CyrusOne, and other operators.",
      },
      {
        question:
          "What is the average salary for data center jobs in San Antonio?",
        answer:
          "San Antonio's lower cost of living combined with competitive data center salaries makes it attractive for professionals. Technicians earn $50,000 to $75,000, critical facility engineers earn $75,000 to $110,000, and project managers earn $90,000 to $140,000 annually.",
      },
      {
        question:
          "Why is San Antonio attractive for data centers?",
        answer:
          "San Antonio's primary advantage is CPS Energy, which provides among the lowest electricity rates of any major U.S. metro. Combined with Texas's zero state income tax, available land from repurposed military installations, and a workforce cultivated by Rackspace and Microsoft, the city offers a compelling value proposition for data center operators.",
      },
    ],
    latitude: 29.4241,
    longitude: -98.4936,
  },

  /* ------------------------------------------------------------------------ */
  /*  Minneapolis                                                             */
  /* ------------------------------------------------------------------------ */
  {
    slug: "minneapolis",
    city: "Minneapolis",
    state: "Minnesota",
    stateCode: "MN",
    metaTitle:
      "Data Center Staffing in Minneapolis | Cold Climate Data Center Market",
    metaDescription:
      "Data center staffing in Minneapolis, MN. DC TALNT connects employers with skilled data center professionals in Minnesota's cold-climate-advantaged data center market.",
    heroTitle: "Data Center Staffing in Minneapolis",
    heroSubtitle:
      "Staffing data centers in the Midwest's cold-climate-advantaged market",
    description: [
      "Minneapolis-St. Paul leverages one of the most distinctive natural advantages in the data center industry: its cold climate. With average annual temperatures significantly below the national mean, Minneapolis-area data centers can employ free-air cooling for the majority of the year, dramatically reducing energy consumption and operating costs associated with mechanical cooling. This inherent efficiency advantage has attracted operators seeking to maximize their Power Usage Effectiveness (PUE) ratings and meet aggressive sustainability targets.",
      "The Twin Cities market is anchored by a strong enterprise data center base built by Fortune 500 companies headquartered in the region, including Target, UnitedHealth Group, U.S. Bancorp, and Best Buy. These organizations maintain substantial on-premises and colocation data center footprints that require continuous staffing for operations, maintenance, and periodic expansion. Colocation providers including Cologix, DataBank, and Flexential have built significant Minneapolis campuses to serve both local enterprises and national customers seeking Midwest geographic diversity.",
      "Minnesota's data center market benefits from a well-educated workforce, reliable utilities, and a state government that has worked to maintain competitive tax treatment for data center investments. The challenge for employers is that Minneapolis's smaller overall market size compared to metros like Chicago or Northern Virginia means that experienced data center professionals are especially scarce. Data Center TALNT helps Minneapolis employers recruit from the broader Midwest and national talent pools to fill critical operational and construction roles.",
    ],
    marketHighlights: [
      "Cold climate enables free-air cooling for 8-10 months annually, delivering industry-leading PUE ratings and significantly reduced energy costs",
      "Home to multiple Fortune 500 headquarters (Target, UnitedHealth, U.S. Bancorp, Best Buy) driving enterprise data center demand",
      "Strong fiber connectivity along major Midwest routes connecting to Chicago and both coasts via northern transcontinental pathways",
      "Well-educated workforce with strong technical trade programs and university engineering departments supporting talent development",
    ],
    majorEmployers: [
      "Cologix",
      "DataBank",
      "Flexential",
      "CyrusOne",
      "Target Corporation",
      "UnitedHealth Group",
      "U.S. Bancorp",
      "TierPoint",
    ],
    keyStats: { datacenters: 30, megawatts: 160, growthRate: "13% YoY" },
    topRoles: [
      "Critical Facility Engineer",
      "Data Center Technician",
      "Electrical QA/QC Inspector",
      "Project Manager",
      "Commissioning Agent",
      "HVAC Controls Specialist",
      "MEP Coordinator",
      "Facility Operations Manager",
    ],
    nearbyLocations: [
      { city: "Chicago", slug: "chicago" },
      { city: "Columbus", slug: "columbus-ohio" },
      { city: "Denver", slug: "denver" },
      { city: "Dallas-Fort Worth", slug: "dallas-fort-worth" },
    ],
    faqs: [
      {
        question: "How many data centers are in Minneapolis?",
        answer:
          "The Minneapolis-St. Paul metro area hosts approximately 30 data center facilities with around 160 MW of total capacity. The market is characterized by a strong enterprise base from Fortune 500 headquarters and a growing colocation segment.",
      },
      {
        question:
          "What is the average salary for data center jobs in Minneapolis?",
        answer:
          "Data center professionals in Minneapolis earn competitive Midwest salaries. Technicians earn $55,000 to $80,000, critical facility engineers earn $80,000 to $118,000, and project managers earn $95,000 to $148,000 annually.",
      },
      {
        question:
          "How does Minneapolis's cold climate benefit data centers?",
        answer:
          "Minneapolis's cold climate allows data centers to use free-air cooling for 8-10 months per year, dramatically reducing the energy consumed by mechanical cooling systems. This natural advantage can lower overall energy costs by 20-30% compared to warmer markets and helps operators achieve industry-leading PUE (Power Usage Effectiveness) ratings, often below 1.2.",
      },
    ],
    latitude: 44.9778,
    longitude: -93.265,
  },

  /* ------------------------------------------------------------------------ */
  /*  Hillsboro, Oregon                                                       */
  /* ------------------------------------------------------------------------ */
  {
    slug: "hillsboro-oregon",
    city: "Hillsboro",
    state: "Oregon",
    stateCode: "OR",
    metaTitle:
      "Data Center Staffing in Hillsboro, Oregon | Silicon Forest Hub",
    metaDescription:
      "Data center staffing in Hillsboro, OR. DC TALNT connects employers with data center construction and operations talent in Oregon's Silicon Forest technology corridor.",
    heroTitle: "Data Center Staffing in Hillsboro, Oregon",
    heroSubtitle:
      "Staffing the Silicon Forest's thriving data center and semiconductor corridor",
    description: [
      "Hillsboro sits at the center of Oregon's 'Silicon Forest,' a technology corridor west of Portland that has been home to Intel's largest global manufacturing complex for decades. This semiconductor heritage has created a natural ecosystem for data centers, with established power infrastructure, technical talent, and a culture of precision manufacturing that aligns perfectly with mission-critical facility operations. Major data center operators including Flexential, Stack Infrastructure, and T5 Data Centers have built substantial campuses in the Hillsboro area to serve hyperscale, enterprise, and government customers.",
      "The Hillsboro market shares Portland's advantages of low-cost hydroelectric power from the Bonneville Power Administration and Oregon's enterprise zone tax incentives, while offering the suburban land availability and industrial zoning that large data center campuses require. Washington County's proactive approach to data center permitting and utility coordination has streamlined the development process, enabling faster time-to-market compared to more congested metropolitan areas.",
      "Hillsboro's data center workforce benefits from significant crossover with the semiconductor industry, where professionals develop skills in cleanroom environments, precision electrical systems, and demanding quality control processes that translate directly to data center construction and operations. Data Center TALNT helps Hillsboro employers recruit professionals who may be transitioning from semiconductor manufacturing roles or coming from other data center markets, building teams that combine local knowledge with industry-specific expertise.",
    ],
    marketHighlights: [
      "Heart of Oregon's Silicon Forest, with Intel's largest global manufacturing complex and a deep pool of semiconductor-experienced technical talent",
      "Low-cost hydroelectric power from BPA and Oregon's enterprise zone tax exemptions create compelling economics for data center operators",
      "Washington County's streamlined permitting and utility coordination processes accelerate data center development timelines",
      "Semiconductor industry crossover provides a workforce experienced in precision electrical, mechanical, and quality control disciplines",
    ],
    majorEmployers: [
      "Flexential",
      "Stack Infrastructure",
      "T5 Data Centers",
      "EdgeConneX",
      "Vantage Data Centers",
      "Intel Corporation",
      "Digital Realty",
      "Amazon Web Services (AWS)",
    ],
    keyStats: { datacenters: 25, megawatts: 200, growthRate: "18% YoY" },
    topRoles: [
      "Critical Facility Engineer",
      "Electrical Technician",
      "Data Center Construction Manager",
      "Commissioning Agent",
      "Mechanical Engineer",
      "Quality Control Inspector",
      "Project Manager",
      "Controls Systems Specialist",
    ],
    nearbyLocations: [
      { city: "Portland", slug: "portland-oregon" },
      { city: "Seattle", slug: "seattle" },
      { city: "Sacramento", slug: "sacramento" },
      { city: "Silicon Valley", slug: "silicon-valley" },
    ],
    faqs: [
      {
        question: "How many data centers are in Hillsboro, Oregon?",
        answer:
          "Hillsboro and the surrounding Washington County area host approximately 25 data center facilities with around 200 MW of total capacity. The market is growing rapidly as operators capitalize on the region's power, tax, and workforce advantages.",
      },
      {
        question:
          "What is the average salary for data center jobs in Hillsboro?",
        answer:
          "Data center salaries in Hillsboro are competitive with the broader Portland metro market. Technicians earn $58,000 to $88,000, critical facility engineers earn $85,000 to $125,000, and construction managers earn $100,000 to $155,000 annually.",
      },
      {
        question:
          "What is the Silicon Forest?",
        answer:
          "The 'Silicon Forest' is the technology corridor in Washington County, Oregon, centered around Hillsboro. Named for its concentration of semiconductor and technology companies -- most notably Intel's largest global manufacturing complex -- the Silicon Forest has evolved to include a thriving data center ecosystem that benefits from the region's technical talent, power infrastructure, and favorable business environment.",
      },
    ],
    latitude: 45.523,
    longitude: -122.989,
  },
];

/* -------------------------------------------------------------------------- */
/*  Utility: lookup                                                           */
/* -------------------------------------------------------------------------- */

function getLocation(slug: string): LocationData | undefined {
  return locations.find((l) => l.slug === slug);
}

/* -------------------------------------------------------------------------- */
/*  Static Params & Dynamic Metadata                                          */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: "Location Not Found" };

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: [
      `data center staffing ${location.city}`,
      `data center jobs ${location.city}`,
      `${location.city} data center recruitment`,
      `data center technician ${location.city}`,
      `data center engineer ${location.city}`,
      `mission critical staffing ${location.stateCode}`,
    ],
    alternates: {
      canonical: `${siteConfig.siteUrl}/locations/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `${siteConfig.siteUrl}/locations/${location.slug}`,
      siteName: siteConfig.siteName,
      type: "website",
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  Page Component                                                            */
/* -------------------------------------------------------------------------- */

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  /* -- Structured Data ---------------------------------------------------- */

  const localBusinessSchema = generateLocalBusinessSchema({
    name: `${siteConfig.siteName} - ${location.city}`,
    city: location.city,
    state: location.state,
    stateCode: location.stateCode,
    latitude: location.latitude,
    longitude: location.longitude,
    description: location.description[0],
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Locations", url: "/locations" },
    { name: `${location.city}, ${location.stateCode}`, url: `/locations/${location.slug}` },
  ]);

  const faqSchema = generateFAQSchema(location.faqs);

  return (
    <>
      <SchemaScript schema={[localBusinessSchema, breadcrumbSchema, faqSchema]} />

      {/* ================================================================== */}
      {/*  Breadcrumb                                                        */}
      {/* ================================================================== */}
      <div className="bg-sky-50 border-b border-gray-200">
        <div className="container-page py-3">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
              <li>
                <Link href="/" className="transition-colors hover:text-blue">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/locations" className="transition-colors hover:text-blue">
                  Locations
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span className="font-medium text-navy">
                  {location.city}, {location.stateCode}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ================================================================== */}
      {/*  Hero                                                              */}
      {/* ================================================================== */}
      <section className="bg-navy pb-16 pt-14 text-white sm:pb-20 sm:pt-18">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-light">
              {location.state} Data Center Market
            </p>

            <h1 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {location.heroTitle}
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-gray-300">
              {location.heroSubtitle}
            </p>

            {/* Key stats badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-light"
                  aria-hidden="true"
                >
                  <rect x="2" y="6" width="3" height="8" rx="0.5" fill="currentColor" />
                  <rect x="6.5" y="3" width="3" height="11" rx="0.5" fill="currentColor" />
                  <rect x="11" y="1" width="3" height="13" rx="0.5" fill="currentColor" />
                </svg>
                {location.keyStats.datacenters}+ Data Centers
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-light"
                  aria-hidden="true"
                >
                  <path
                    d="M8 1L10 5.5L15 6.5L11.5 10L12.5 15L8 12.5L3.5 15L4.5 10L1 6.5L6 5.5L8 1Z"
                    fill="currentColor"
                  />
                </svg>
                {location.keyStats.megawatts} MW Capacity
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-light"
                  aria-hidden="true"
                >
                  <path
                    d="M8 1V15M8 1L4 5M8 1L12 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {location.keyStats.growthRate} Growth
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Market Overview                                                   */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              {location.city} Data Center Market Overview
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-gray-700">
              {location.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Key Market Highlights                                             */}
      {/* ================================================================== */}
      <section className="bg-sky-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Key Market Highlights
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              What makes {location.city} a standout data center market.
            </p>
            <ul className="mt-8 space-y-4">
              {location.marketHighlights.map((highlight, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue text-white">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 7l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Major Employers                                                   */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Major Employers in {location.city}
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Leading data center operators and technology companies hiring in
              the {location.city} market.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {location.majorEmployers.map((employer) => (
                <div
                  key={employer}
                  className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-5 text-center text-sm font-medium text-navy shadow-sm transition-shadow hover:shadow-md"
                >
                  {employer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  In-Demand Roles                                                   */}
      {/* ================================================================== */}
      <section className="bg-sky-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              In-Demand Data Center Roles in {location.city}
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              The most sought-after positions in the {location.city} data center
              market right now.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {location.topRoles.map((role) => (
                <div
                  key={role}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 text-blue">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 2a4 4 0 100 8 4 4 0 000-8zM4 18a6 6 0 0112 0H4z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-navy">{role}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Why DC TALNT in [City]                                            */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Why Data Center TALNT in {location.city}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our local market expertise and national reach deliver results that
              generalist staffing agencies cannot match.
            </p>

            <div className="mt-10 space-y-8">
              {[
                {
                  title: "Deep Market Knowledge",
                  text: `Our recruiters understand the ${location.city} data center landscape -- which operators are expanding, what roles are hardest to fill, and what compensation packages it takes to attract top talent in this market.`,
                },
                {
                  title: "Pre-Vetted Talent Pipeline",
                  text: `We maintain an active network of data center professionals with experience in ${location.state} and the surrounding region, ready to deploy for both construction projects and operational roles.`,
                },
                {
                  title: "Speed to Fill",
                  text: `In a market where open positions cost thousands per day in project delays, our average time-to-present qualified candidates is 48 hours or less for ${location.city}-area positions.`,
                },
                {
                  title: "Industry-Exclusive Focus",
                  text: `Unlike generalist agencies, every member of our team lives and breathes data center, mission critical, and construction staffing -- giving us the domain expertise to evaluate candidates accurately and place them in the right roles.`,
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue text-white">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8l4 4 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  FAQ Section                                                       */}
      {/* ================================================================== */}
      <section className="bg-sky-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Common questions about the {location.city} data center market and
              staffing.
            </p>

            <div className="mt-8 space-y-6">
              {location.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-navy">
                    {faq.question}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-700">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Nearby Markets                                                    */}
      {/* ================================================================== */}
      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Nearby Data Center Markets
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Explore other markets where Data Center TALNT delivers specialized
              staffing solutions.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {location.nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:border-blue/40 hover:shadow-md"
                >
                  <div>
                    <h3 className="font-semibold text-navy group-hover:text-blue">
                      {nearby.city}
                    </h3>
                    <p className="mt-0.5 text-sm text-gray-500">
                      View market details
                    </p>
                  </div>
                  <span
                    className="text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-blue"
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 4l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  CTA                                                               */}
      {/* ================================================================== */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl">
              Hiring in {location.city}?{" "}
              <span className="text-blue-light">Let&apos;s Talk.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Whether you need a single commissioning agent or an entire
              construction team, Data Center TALNT has the {location.city}{" "}
              market expertise and national reach to deliver the talent you
              need -- fast.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/employers" variant="primary" size="lg">
                Start Hiring Today
              </Button>
              <Button href="/candidates" variant="outline" size="lg">
                Looking for a Job?
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
