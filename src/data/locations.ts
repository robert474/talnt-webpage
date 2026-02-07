export interface LocationKeyStats {
  estimatedMWCapacity: string;
  numberOfFacilities: string;
  majorUtilityProvider: string;
  averagePUE?: string;
  yearOverYearGrowth?: string;
}

export interface Location {
  slug: string;
  city: string;
  state: string;
  stateCode: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  marketHighlights: string[];
  majorEmployers: string[];
  keyStats: LocationKeyStats;
}

export const locations: Location[] = [
  /* ---------------------------------------------------------------------- */
  /*  1. Northern Virginia (Ashburn / Loudoun County)                        */
  /* ---------------------------------------------------------------------- */
  {
    slug: "northern-virginia",
    city: "Northern Virginia",
    state: "Virginia",
    stateCode: "VA",
    metaTitle:
      "Data Center Staffing in Northern Virginia | Ashburn & Loudoun County Recruitment",
    metaDescription:
      "Data center staffing and recruitment in Northern Virginia, the world's largest data center market. We place project managers, MEP engineers, superintendents, and commissioning agents in Ashburn, Loudoun County, and the broader NoVA corridor.",
    description:
      "Northern Virginia, centered on Ashburn and Loudoun County, is the undisputed global capital of data centers. The region hosts more than 35% of all US data center capacity and processes an estimated 70% of global internet traffic through the MAE-East exchange point. With over 3,000 MW of commissioned IT load and a development pipeline exceeding 2,000 MW of additional capacity, Northern Virginia drives more data center construction activity than any other market on earth. Major hyperscalers, colocation providers, and enterprise operators continue to expand across Loudoun, Prince William, and Fairfax counties, creating extraordinary demand for skilled construction professionals at every level. Dominion Energy has committed billions to power infrastructure upgrades to serve this growth, and the talent competition for experienced data center builders is the most intense in the nation.",
    marketHighlights: [
      "World's largest data center market with 35%+ of US capacity",
      "Over 3,000 MW of commissioned IT load across Loudoun, Prince William, and Fairfax counties",
      "Development pipeline exceeding 2,000 MW of additional planned capacity",
      "Home to the MAE-East internet exchange, processing ~70% of global internet traffic",
      "Dominion Energy investing billions in power infrastructure to serve data center growth",
      "Loudoun County alone hosts 100+ data center facilities",
    ],
    majorEmployers: [
      "Amazon Web Services (AWS)",
      "Microsoft Azure",
      "Google Cloud",
      "Equinix",
      "Digital Realty",
      "QTS Realty Trust",
      "CyrusOne",
      "CloudHQ",
      "Aligned Data Centers",
      "COPT Data Center Solutions",
    ],
    keyStats: {
      estimatedMWCapacity: "3,000+ MW",
      numberOfFacilities: "100+ facilities",
      majorUtilityProvider: "Dominion Energy",
      averagePUE: "1.3-1.5",
      yearOverYearGrowth: "15-20%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  2. Dallas-Fort Worth, Texas                                            */
  /* ---------------------------------------------------------------------- */
  {
    slug: "dallas-fort-worth-texas",
    city: "Dallas-Fort Worth",
    state: "Texas",
    stateCode: "TX",
    metaTitle:
      "Data Center Staffing in Dallas-Fort Worth, TX | DFW Recruitment Agency",
    metaDescription:
      "Specialized data center staffing in Dallas-Fort Worth, Texas. We recruit project managers, engineers, and superintendents for DFW's rapidly expanding data center market.",
    description:
      "Dallas-Fort Worth has emerged as one of the fastest-growing data center markets in the United States, driven by abundant and affordable power, favorable tax incentives, central geographic location, and a robust fiber network. The DFW metroplex hosts over 800 MW of data center capacity with a rapidly expanding construction pipeline. Areas like Garland, Allen, and Red Oak have become hotspots for hyperscale development, while Richardson's Telecom Corridor continues to house significant enterprise and colocation operations. Texas's deregulated energy market provides competitive electricity pricing, and the absence of state income tax makes the region attractive for both employers and employees in the data center construction sector.",
    marketHighlights: [
      "Second-largest data center market in the US by capacity",
      "Over 800 MW of operational data center capacity across the metroplex",
      "Deregulated energy market provides competitive electricity pricing",
      "No state income tax attracts both employers and skilled workforce",
      "Central US location provides low-latency connectivity coast-to-coast",
      "Significant hyperscale development in Garland, Allen, and Red Oak",
    ],
    majorEmployers: [
      "Meta (Facebook)",
      "Google",
      "CyrusOne",
      "Digital Realty",
      "QTS Realty Trust",
      "DataBank",
      "Stream Data Centers",
      "Compass Datacenters",
      "Flexential",
      "T5 Data Centers",
    ],
    keyStats: {
      estimatedMWCapacity: "800+ MW",
      numberOfFacilities: "60+ facilities",
      majorUtilityProvider: "Oncor Electric Delivery (ERCOT grid)",
      averagePUE: "1.3-1.5",
      yearOverYearGrowth: "18-22%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  3. Phoenix, Arizona                                                    */
  /* ---------------------------------------------------------------------- */
  {
    slug: "phoenix-arizona",
    city: "Phoenix",
    state: "Arizona",
    stateCode: "AZ",
    metaTitle:
      "Data Center Staffing in Phoenix, AZ | Arizona Data Center Recruitment",
    metaDescription:
      "Data center staffing and recruitment in Phoenix, Arizona. We connect data center employers in Mesa, Goodyear, and Chandler with experienced construction talent.",
    description:
      "Phoenix has vaulted into the top tier of US data center markets, with massive developments transforming the landscape in Mesa, Goodyear, Chandler, and the West Valley. The metro area offers a compelling combination of abundant and relatively affordable power, low natural disaster risk, available land, and pro-business state and local government. Arizona's renewable energy resources, including significant solar generation capacity, appeal to hyperscalers pursuing sustainability targets. The region has attracted some of the largest single-site data center campuses in the country, with individual projects exceeding 300 MW. This rapid expansion has created intense demand for data center construction professionals across all disciplines.",
    marketHighlights: [
      "One of the fastest-growing data center markets globally",
      "Major campus-scale developments in Mesa, Goodyear, and Chandler",
      "Abundant solar energy resources support sustainability goals",
      "Low natural disaster risk profile (no hurricanes, minimal seismic activity)",
      "Pro-business environment with competitive tax incentives",
      "Multiple 100 MW+ hyperscale campuses under construction or planned",
    ],
    majorEmployers: [
      "Microsoft Azure",
      "Google Cloud",
      "Meta (Facebook)",
      "Apple",
      "CyrusOne",
      "QTS Realty Trust",
      "Stream Data Centers",
      "Digital Realty",
      "EdgeCore",
      "NTT Global Data Centers",
    ],
    keyStats: {
      estimatedMWCapacity: "700+ MW",
      numberOfFacilities: "50+ facilities",
      majorUtilityProvider: "Arizona Public Service (APS) / Salt River Project (SRP)",
      averagePUE: "1.25-1.45",
      yearOverYearGrowth: "25-30%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  4. Atlanta, Georgia                                                    */
  /* ---------------------------------------------------------------------- */
  {
    slug: "atlanta-georgia",
    city: "Atlanta",
    state: "Georgia",
    stateCode: "GA",
    metaTitle:
      "Data Center Staffing in Atlanta, GA | Georgia Data Center Recruitment",
    metaDescription:
      "Specialized data center staffing in Atlanta, Georgia. We recruit construction professionals for Atlanta's growing data center market spanning Fulton, Douglas, and Gwinnett counties.",
    description:
      "Atlanta serves as the Southeast's premier data center hub, leveraging its position as a major fiber interconnection point and business center. The metro area, spanning Fulton, Douglas, Gwinnett, and DeKalb counties, hosts a growing cluster of hyperscale, colocation, and enterprise facilities. Georgia's competitive cost of living, educated workforce from institutions like Georgia Tech, and state-level tax incentives for data center development have attracted significant investment. Atlanta's diverse economy, robust transportation infrastructure, and access to Georgia Power's reliable grid make it an increasingly attractive market for data center operators and the construction talent needed to build their facilities.",
    marketHighlights: [
      "Southeast's largest data center market and fiber hub",
      "State tax exemptions for data center equipment and electricity",
      "Access to Georgia Tech talent pipeline for engineering roles",
      "Growing hyperscale presence in Douglas and Gwinnett counties",
      "Major fiber interconnection hub with extensive carrier presence",
      "Competitive cost of living attracts and retains skilled workforce",
    ],
    majorEmployers: [
      "Google",
      "Microsoft",
      "Meta (Facebook)",
      "Equinix",
      "QTS Realty Trust",
      "Switch",
      "Digital Realty",
      "DataBank",
      "Flexential",
      "T5 Data Centers",
    ],
    keyStats: {
      estimatedMWCapacity: "500+ MW",
      numberOfFacilities: "40+ facilities",
      majorUtilityProvider: "Georgia Power",
      averagePUE: "1.3-1.5",
      yearOverYearGrowth: "15-18%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  5. Chicago, Illinois                                                   */
  /* ---------------------------------------------------------------------- */
  {
    slug: "chicago-illinois",
    city: "Chicago",
    state: "Illinois",
    stateCode: "IL",
    metaTitle:
      "Data Center Staffing in Chicago, IL | Illinois Data Center Recruitment",
    metaDescription:
      "Data center staffing and recruitment in Chicago, Illinois. We place experienced construction professionals in Chicago's established data center corridor.",
    description:
      "Chicago is one of the most established data center markets in the United States, anchored by the 725 S. Wells building, one of the most interconnected data center facilities in the world. The city's central location makes it a critical hub for financial services, commodities trading, and enterprise IT operations that require low-latency connectivity across the Midwest and to both coasts. The broader Chicagoland area, extending into the western suburbs and northwestern Indiana, has seen significant new hyperscale and colocation development driven by available power, competitive land costs, and Illinois's data center tax incentive program. The market's mature fiber infrastructure, cool climate favorable for free cooling, and deep labor pool make it a strong long-term data center market.",
    marketHighlights: [
      "One of the most interconnected data center markets globally",
      "725 S. Wells Street is among the world's most carrier-dense facilities",
      "Central US location provides low-latency financial and enterprise connectivity",
      "Illinois data center tax incentive program reduces operational costs",
      "Cool climate supports economizer-based free cooling strategies",
      "Expanding hyperscale development in western suburbs and NW Indiana",
    ],
    majorEmployers: [
      "Equinix",
      "Digital Realty",
      "CyrusOne",
      "QTS Realty Trust",
      "TeleCom Semiconductor",
      "DataBank",
      "Meta (Facebook)",
      "Microsoft",
      "Compass Datacenters",
      "Prime Data Centers",
    ],
    keyStats: {
      estimatedMWCapacity: "600+ MW",
      numberOfFacilities: "55+ facilities",
      majorUtilityProvider: "ComEd (Exelon)",
      averagePUE: "1.2-1.4",
      yearOverYearGrowth: "12-15%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  6. Silicon Valley, California                                          */
  /* ---------------------------------------------------------------------- */
  {
    slug: "silicon-valley-california",
    city: "Silicon Valley",
    state: "California",
    stateCode: "CA",
    metaTitle:
      "Data Center Staffing in Silicon Valley, CA | Bay Area Data Center Recruitment",
    metaDescription:
      "Data center staffing in Silicon Valley and the San Francisco Bay Area. We recruit construction professionals for the tech industry's original data center market.",
    description:
      "Silicon Valley remains a critical data center market despite the constraints of high real estate costs, expensive power, and stringent environmental regulations. The San Jose, Santa Clara, and Milpitas corridor hosts a dense concentration of data centers serving the world's leading technology companies. Proximity to corporate headquarters, access to the Palo Alto Internet Exchange (PAIX) and other interconnection facilities, and the need for ultra-low-latency connectivity to Silicon Valley enterprises ensure continued demand. While some growth has shifted to neighboring markets like Sacramento and Reno, the core Silicon Valley market continues to see investment in both new construction and retrofit/expansion of existing facilities. The talent market for data center construction professionals here is among the most competitive and highest-compensated in the nation.",
    marketHighlights: [
      "Birthplace of the modern data center industry",
      "Dense concentration of facilities in Santa Clara and San Jose",
      "Proximity to tech company headquarters drives connectivity demand",
      "Highest compensation market for data center construction professionals",
      "Home to major internet exchange points including PAIX",
      "Increasing focus on sustainability and zero-carbon operations",
    ],
    majorEmployers: [
      "Equinix",
      "Digital Realty",
      "CoreSite",
      "CyrusOne",
      "Vantage Data Centers",
      "Apple",
      "Google",
      "Meta (Facebook)",
      "Nvidia",
      "NTT Global Data Centers",
    ],
    keyStats: {
      estimatedMWCapacity: "450+ MW",
      numberOfFacilities: "50+ facilities",
      majorUtilityProvider: "Pacific Gas & Electric (PG&E) / Silicon Valley Power",
      averagePUE: "1.2-1.4",
      yearOverYearGrowth: "8-12%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  7. Columbus, Ohio                                                      */
  /* ---------------------------------------------------------------------- */
  {
    slug: "columbus-ohio",
    city: "Columbus",
    state: "Ohio",
    stateCode: "OH",
    metaTitle:
      "Data Center Staffing in Columbus, OH | Ohio Data Center Recruitment",
    metaDescription:
      "Data center staffing and recruitment in Columbus, Ohio. We place construction professionals in one of the Midwest's fastest-growing data center markets.",
    description:
      "Columbus, Ohio has rapidly ascended as a premier Midwest data center market, driven by abundant and affordable power from AEP Ohio, a central geographic location at the intersection of major fiber routes, Ohio's data center tax exemption program, and significant available land for campus-scale development. The New Albany area east of Columbus has become a major hyperscale hub, with Google, Meta, Amazon, and Microsoft all investing in large-scale campuses. The city's proximity to major financial institutions, insurance companies, and healthcare systems in the region provides a strong enterprise demand base. Columbus also benefits from The Ohio State University's engineering talent pipeline and a cost of living well below coastal markets, making it attractive for recruiting and retaining data center construction professionals.",
    marketHighlights: [
      "Fastest-growing data center market in the Midwest",
      "Ohio data center tax exemption on equipment and construction materials",
      "New Albany area is a hyperscale hotspot with Google, Meta, AWS, and Microsoft campuses",
      "Central location at intersection of major fiber routes",
      "Affordable power from AEP Ohio at rates below national average",
      "Access to Ohio State University engineering talent pipeline",
    ],
    majorEmployers: [
      "Google",
      "Meta (Facebook)",
      "Amazon Web Services (AWS)",
      "Microsoft",
      "QTS Realty Trust",
      "Cologix",
      "Expedient",
      "DataBank",
      "Flexential",
      "TerraScale",
    ],
    keyStats: {
      estimatedMWCapacity: "400+ MW",
      numberOfFacilities: "35+ facilities",
      majorUtilityProvider: "AEP Ohio",
      averagePUE: "1.25-1.45",
      yearOverYearGrowth: "20-25%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  8. Portland, Oregon                                                    */
  /* ---------------------------------------------------------------------- */
  {
    slug: "portland-oregon",
    city: "Portland",
    state: "Oregon",
    stateCode: "OR",
    metaTitle:
      "Data Center Staffing in Portland, OR | Oregon Data Center Recruitment",
    metaDescription:
      "Data center staffing in Portland, Oregon. We recruit construction professionals for the Pacific Northwest's growing data center corridor.",
    description:
      "Portland and the broader Oregon market have established a strong data center presence, leveraging the state's competitive power costs from hydroelectric generation, cool climate ideal for free cooling, and Oregon's enterprise zone tax abatement programs. The market extends along the I-5 corridor and into the Hillsboro/Beaverton area west of Portland, where proximity to fiber routes and Intel's major semiconductor facilities has created a technology infrastructure cluster. Oregon's lack of sales tax on data center equipment further improves the total cost of ownership for operators. The Pacific Northwest's clean energy profile also appeals to hyperscalers pursuing carbon-neutral operations. Demand for data center construction talent in the Portland market has increased significantly as new hyperscale and colocation projects break ground across the region.",
    marketHighlights: [
      "Low-cost hydroelectric power supports competitive operating costs",
      "No sales tax on data center equipment in Oregon",
      "Cool climate enables extensive free cooling and low PUE",
      "Enterprise zone tax abatement programs available",
      "Growing hyperscale presence along I-5 corridor",
      "Clean energy grid appeals to sustainability-focused operators",
    ],
    majorEmployers: [
      "Google",
      "Amazon Web Services (AWS)",
      "Meta (Facebook)",
      "Digital Realty",
      "Flexential",
      "Stackhouse",
      "EdgeConneX",
      "H5 Data Centers",
      "Vadata (Amazon subsidiary)",
      "PNW Data",
    ],
    keyStats: {
      estimatedMWCapacity: "300+ MW",
      numberOfFacilities: "30+ facilities",
      majorUtilityProvider: "Portland General Electric / PacifiCorp",
      averagePUE: "1.15-1.35",
      yearOverYearGrowth: "14-18%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  9. Salt Lake City, Utah                                                */
  /* ---------------------------------------------------------------------- */
  {
    slug: "salt-lake-city-utah",
    city: "Salt Lake City",
    state: "Utah",
    stateCode: "UT",
    metaTitle:
      "Data Center Staffing in Salt Lake City, UT | Utah Data Center Recruitment",
    metaDescription:
      "Data center staffing in Salt Lake City, Utah. We recruit construction professionals for Utah's expanding data center market including the NSA Data Center corridor.",
    description:
      "Salt Lake City and the broader Utah market have emerged as a growing data center destination, combining affordable power, low natural disaster risk, cold climate for free cooling, and a business-friendly regulatory environment. The market gained national attention with the opening of the NSA's Utah Data Center in Bluffdale, and has since attracted significant commercial investment. The West Jordan and Lehi areas along the Silicon Slopes tech corridor have become focal points for new development. Utah's growing technology sector, anchored by companies like Adobe, Pluralsight, and Qualtrics, provides a strong local demand base. The state's proximity to major West Coast and Mountain West markets ensures low-latency connectivity, while its relatively lower cost structure compared to California makes it attractive for operators and the construction professionals who build their facilities.",
    marketHighlights: [
      "Growing market along the Silicon Slopes tech corridor",
      "Cold climate supports extensive free cooling strategies",
      "Low natural disaster risk profile",
      "Business-friendly state government with competitive incentives",
      "Proximity to West Coast markets with lower cost structure",
      "NSA Utah Data Center brought national visibility to the market",
    ],
    majorEmployers: [
      "NSA (Utah Data Center)",
      "Meta (Facebook)",
      "Google",
      "Novva Data Centers",
      "Aligned Data Centers",
      "DataBank",
      "Flexential",
      "C7 Data Centers",
      "Cyxtera Technologies",
      "Viawest",
    ],
    keyStats: {
      estimatedMWCapacity: "200+ MW",
      numberOfFacilities: "20+ facilities",
      majorUtilityProvider: "Rocky Mountain Power (PacifiCorp)",
      averagePUE: "1.2-1.4",
      yearOverYearGrowth: "15-20%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  10. Charlotte, North Carolina                                          */
  /* ---------------------------------------------------------------------- */
  {
    slug: "charlotte-north-carolina",
    city: "Charlotte",
    state: "North Carolina",
    stateCode: "NC",
    metaTitle:
      "Data Center Staffing in Charlotte, NC | North Carolina Data Center Recruitment",
    metaDescription:
      "Data center staffing in Charlotte, North Carolina. We recruit construction professionals for the growing Southeast data center corridor across the Carolinas.",
    description:
      "Charlotte and the broader North Carolina market have become an increasingly important data center corridor in the Southeast. The region benefits from reliable power from Duke Energy, a robust fiber network, moderate climate, and North Carolina's competitive data center tax incentives. The Charlotte metro area, along with the Research Triangle (Raleigh-Durham) to the northeast, creates a dual-hub data center market within the state. Charlotte's strength as a financial services center, home to Bank of America, Truist, and other major financial institutions, drives significant enterprise data center demand. The region's lower cost of living and growing technology workforce make it attractive for both operators and the skilled construction professionals needed to build and expand data center capacity.",
    marketHighlights: [
      "Major financial services hub driving enterprise data center demand",
      "North Carolina data center tax incentives reduce operational costs",
      "Reliable power infrastructure from Duke Energy",
      "Dual-hub market with Charlotte and Research Triangle (Raleigh-Durham)",
      "Growing hyperscale investment in surrounding counties",
      "Competitive cost of living attracts and retains skilled workforce",
    ],
    majorEmployers: [
      "Google",
      "Apple",
      "Microsoft",
      "Meta (Facebook)",
      "Equinix",
      "Compass Datacenters",
      "Digital Realty",
      "Bank of America (enterprise)",
      "Duke Energy (enterprise)",
      "Iron Mountain",
    ],
    keyStats: {
      estimatedMWCapacity: "350+ MW",
      numberOfFacilities: "30+ facilities",
      majorUtilityProvider: "Duke Energy Carolinas",
      averagePUE: "1.3-1.5",
      yearOverYearGrowth: "18-22%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  11. Denver, Colorado                                                   */
  /* ---------------------------------------------------------------------- */
  {
    slug: "denver-colorado",
    city: "Denver",
    state: "Colorado",
    stateCode: "CO",
    metaTitle:
      "Data Center Staffing in Denver, CO | Colorado Data Center Recruitment",
    metaDescription:
      "Data center staffing in Denver, Colorado. We recruit construction professionals for Denver's expanding data center market and the Front Range corridor.",
    description:
      "Denver and the Colorado Front Range have built a solid data center market, leveraging the region's cool climate, abundant renewable energy resources, strong fiber connectivity, and a growing technology workforce. The metro area's data center activity spans from downtown Denver through the western suburbs and south along the I-25 corridor. Colorado's investment in wind and solar energy appeals to operators with sustainability mandates, while the state's educated workforce and high quality of life attract skilled professionals. The Denver market also serves as a strategic hub for the Mountain West region, providing connectivity to both coasts and serving the growing enterprise and government technology sectors in the area.",
    marketHighlights: [
      "Strategic Mountain West hub with coast-to-coast connectivity",
      "Cool, dry climate supports energy-efficient cooling",
      "Strong renewable energy resources (wind and solar)",
      "Growing technology workforce and high quality of life",
      "NOAA, NCAR, and federal agencies drive government data center demand",
      "I-25 corridor expansion with new hyperscale and colocation builds",
    ],
    majorEmployers: [
      "Equinix",
      "CoreSite",
      "CyrusOne",
      "Flexential",
      "DataBank",
      "QTS Realty Trust",
      "Viawest",
      "Digital Realty",
      "TierPoint",
      "Turing Intelligence (AI startup)",
    ],
    keyStats: {
      estimatedMWCapacity: "250+ MW",
      numberOfFacilities: "30+ facilities",
      majorUtilityProvider: "Xcel Energy",
      averagePUE: "1.2-1.4",
      yearOverYearGrowth: "12-16%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  12. Houston, Texas                                                     */
  /* ---------------------------------------------------------------------- */
  {
    slug: "houston-texas",
    city: "Houston",
    state: "Texas",
    stateCode: "TX",
    metaTitle:
      "Data Center Staffing in Houston, TX | Texas Data Center Recruitment",
    metaDescription:
      "Data center staffing in Houston, Texas. We recruit construction professionals for Houston's energy-sector-driven data center market.",
    description:
      "Houston has developed a distinct data center market shaped by the city's position as the energy capital of the world. The oil and gas industry, petrochemical sector, healthcare institutions (Texas Medical Center), and NASA's Johnson Space Center all drive significant enterprise data center demand. Houston's data center growth has accelerated in recent years as energy companies invest in digital transformation, AI-driven exploration analytics, and cloud migration. The ERCOT deregulated power market provides competitive electricity rates, and Texas's absence of state income tax remains a strong workforce recruitment advantage. The market is expanding from its traditional downtown and Galleria-area concentration into the western suburbs and along the Energy Corridor.",
    marketHighlights: [
      "Energy sector drives unique enterprise data center demand",
      "Texas Medical Center creates significant healthcare IT infrastructure needs",
      "ERCOT deregulated market provides competitive power pricing",
      "No state income tax attracts and retains skilled workforce",
      "Growing AI and cloud computing demand from energy industry",
      "NASA Johnson Space Center contributes to government IT demand",
    ],
    majorEmployers: [
      "CyrusOne",
      "Digital Realty",
      "DataBank",
      "Equinix",
      "QTS Realty Trust",
      "Stream Data Centers",
      "Element Critical",
      "T5 Data Centers",
      "Compass Datacenters",
      "Skybox Datacenters",
    ],
    keyStats: {
      estimatedMWCapacity: "300+ MW",
      numberOfFacilities: "35+ facilities",
      majorUtilityProvider: "CenterPoint Energy (ERCOT grid)",
      averagePUE: "1.3-1.5",
      yearOverYearGrowth: "14-18%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  13. New York Metro / New Jersey                                        */
  /* ---------------------------------------------------------------------- */
  {
    slug: "new-york-metro-new-jersey",
    city: "New York Metro / New Jersey",
    state: "New Jersey",
    stateCode: "NJ",
    metaTitle:
      "Data Center Staffing in New York / New Jersey | NYC Metro Recruitment",
    metaDescription:
      "Data center staffing in the New York metro and New Jersey corridor. We recruit construction professionals for one of the world's most interconnected data center markets.",
    description:
      "The New York metro area, with its primary concentration in northern New Jersey, is one of the most interconnected and strategically important data center markets globally. The financial services industry, media companies, and major enterprises headquartered in Manhattan drive enormous demand for low-latency data center capacity in the surrounding area. Northern New Jersey, particularly Bergen, Hudson, and Essex counties, hosts the densest concentration of facilities, with significant inventory also in central New Jersey and on Long Island. The market is characterized by high land and power costs offset by unparalleled connectivity and proximity to the world's largest concentration of financial institutions. Data center construction in this market demands professionals who can navigate complex urban and suburban building environments, stringent local permitting, and premium pricing for every input.",
    marketHighlights: [
      "One of the world's most interconnected data center markets",
      "Financial services sector drives premium, low-latency facility demand",
      "Dense carrier and fiber infrastructure across northern New Jersey",
      "Proximity to Manhattan financial district and media companies",
      "High barriers to entry create strong long-term asset values",
      "New Jersey offers tax incentives through the NJEDA for qualifying data center projects",
    ],
    majorEmployers: [
      "Equinix",
      "Digital Realty",
      "CoreSite",
      "CyrusOne",
      "QTS Realty Trust",
      "DataBank",
      "Vantage Data Centers",
      "STACK Infrastructure",
      "Switch",
      "Aligned Data Centers",
    ],
    keyStats: {
      estimatedMWCapacity: "500+ MW",
      numberOfFacilities: "50+ facilities",
      majorUtilityProvider: "PSE&G / ConEdison",
      averagePUE: "1.3-1.5",
      yearOverYearGrowth: "10-14%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  14. Seattle, Washington                                                */
  /* ---------------------------------------------------------------------- */
  {
    slug: "seattle-washington",
    city: "Seattle",
    state: "Washington",
    stateCode: "WA",
    metaTitle:
      "Data Center Staffing in Seattle, WA | Washington Data Center Recruitment",
    metaDescription:
      "Data center staffing in Seattle, Washington. We recruit construction professionals for the Pacific Northwest data center market serving major technology company headquarters.",
    description:
      "Seattle and the broader Washington state market benefit from some of the lowest electricity costs in the nation, powered primarily by hydroelectric generation from the Columbia River system. The Puget Sound region hosts significant data center capacity serving Amazon (headquartered in Seattle), Microsoft (headquartered in Redmond), and other major tech companies. Eastern Washington, particularly the Quincy and Moses Lake area served by the Grant County PUD, has become a major hyperscale destination offering wholesale power rates as low as $0.02/kWh. Washington's combination of cheap clean power, cool climate, strong fiber connectivity, and proximity to tech company headquarters creates a robust data center ecosystem and corresponding demand for experienced construction professionals.",
    marketHighlights: [
      "Among the lowest electricity costs in the US from hydroelectric power",
      "Headquarters of Amazon and Microsoft drive massive local demand",
      "Eastern Washington (Quincy/Moses Lake) offers some of the cheapest power nationally",
      "Clean energy grid supports carbon-neutral operations",
      "Cool Pacific Northwest climate enables extensive free cooling",
      "Strong fiber connectivity with trans-Pacific cable landings",
    ],
    majorEmployers: [
      "Microsoft",
      "Amazon Web Services (AWS)",
      "Google",
      "Meta (Facebook)",
      "Equinix",
      "Digital Realty",
      "Sabey Data Centers",
      "Vantage Data Centers",
      "STACK Infrastructure",
      "Yahoo (Quincy campus)",
    ],
    keyStats: {
      estimatedMWCapacity: "500+ MW",
      numberOfFacilities: "40+ facilities",
      majorUtilityProvider: "Puget Sound Energy / Grant County PUD",
      averagePUE: "1.1-1.3",
      yearOverYearGrowth: "14-18%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  15. Las Vegas, Nevada                                                  */
  /* ---------------------------------------------------------------------- */
  {
    slug: "las-vegas-nevada",
    city: "Las Vegas",
    state: "Nevada",
    stateCode: "NV",
    metaTitle:
      "Data Center Staffing in Las Vegas, NV | Nevada Data Center Recruitment",
    metaDescription:
      "Data center staffing in Las Vegas, Nevada. We recruit construction professionals for the growing Southern Nevada data center market.",
    description:
      "Las Vegas and the Southern Nevada market have attracted significant data center investment, highlighted by Switch's SuperNAP campus, one of the largest and most iconic data center facilities in the world. The market benefits from abundant solar energy resources, available land, Nevada's business-friendly tax structure (no corporate or personal income tax), and proximity to the Southern California market. Recent developments have expanded beyond the Switch-dominated landscape as additional operators recognize the advantages of the Las Vegas market. The growing convention technology sector and hospitality industry provide local enterprise demand, while connectivity to Los Angeles and the broader Southwest creates an attractive position for operators serving the Western US market.",
    marketHighlights: [
      "Home to Switch SuperNAP, one of the world's largest data center campuses",
      "No corporate or personal income tax in Nevada",
      "Abundant solar energy resources for renewable power procurement",
      "Proximity to Southern California market without California costs",
      "Available land for large-scale campus development",
      "Growing operator diversity beyond Switch's dominant presence",
    ],
    majorEmployers: [
      "Switch",
      "Digital Realty",
      "Flexential",
      "DataBank",
      "365 Data Centers",
      "CenturyLink (Lumen)",
      "Equinix",
      "Aligned Data Centers",
      "TerraScale",
      "Apple",
    ],
    keyStats: {
      estimatedMWCapacity: "350+ MW",
      numberOfFacilities: "25+ facilities",
      majorUtilityProvider: "NV Energy",
      averagePUE: "1.18-1.38",
      yearOverYearGrowth: "12-16%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  16. Sacramento, California                                             */
  /* ---------------------------------------------------------------------- */
  {
    slug: "sacramento-california",
    city: "Sacramento",
    state: "California",
    stateCode: "CA",
    metaTitle:
      "Data Center Staffing in Sacramento, CA | Northern California Data Center Recruitment",
    metaDescription:
      "Data center staffing in Sacramento, California. We recruit construction professionals for Northern California's cost-effective alternative to the Silicon Valley data center market.",
    description:
      "Sacramento has emerged as a cost-effective Northern California data center alternative to the constrained and expensive Silicon Valley market. Located approximately 90 miles northeast of San Jose, Sacramento provides connectivity to Bay Area networks while offering significantly lower land, construction, and power costs. The Sacramento Municipal Utility District (SMUD) provides competitive electricity rates well below PG&E pricing, and the region's inland location offers available land for campus-scale development. Several major operators have invested in Sacramento as an overflow and growth market for their Bay Area operations. The growing state government technology infrastructure and nearby UC Davis research campus provide additional local demand. This market presents opportunities for data center construction professionals looking for Northern California work with a more affordable cost of living.",
    marketHighlights: [
      "Cost-effective alternative to constrained Silicon Valley market",
      "SMUD provides competitive electricity rates below PG&E pricing",
      "Connectivity to Bay Area fiber networks within 90 miles",
      "Available land for campus-scale development",
      "Growing state government and UC Davis technology demand",
      "Lower cost of living compared to Bay Area for construction professionals",
    ],
    majorEmployers: [
      "Digital Realty",
      "Equinix",
      "CyrusOne",
      "DataBank",
      "SMUD (utility and enterprise)",
      "NTT Global Data Centers",
      "Vantage Data Centers",
      "Iron Mountain",
      "CoreSite",
      "State of California (enterprise)",
    ],
    keyStats: {
      estimatedMWCapacity: "150+ MW",
      numberOfFacilities: "20+ facilities",
      majorUtilityProvider: "Sacramento Municipal Utility District (SMUD)",
      averagePUE: "1.2-1.4",
      yearOverYearGrowth: "10-14%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  17. Reno, Nevada                                                       */
  /* ---------------------------------------------------------------------- */
  {
    slug: "reno-nevada",
    city: "Reno",
    state: "Nevada",
    stateCode: "NV",
    metaTitle:
      "Data Center Staffing in Reno, NV | Northern Nevada Data Center Recruitment",
    metaDescription:
      "Data center staffing in Reno, Nevada. We recruit construction professionals for Northern Nevada's growing data center market anchored by major hyperscale investments.",
    description:
      "Reno and the surrounding Northern Nevada region, including the Tahoe Reno Industrial Center (TRIC) in Storey County, have become a significant data center market driven by low power costs, generous state tax incentives, available land, and proximity to the California market. Apple, Google, and Switch have all made major investments in the area, with individual campuses exceeding 100 MW in planned capacity. The region's cool high-desert climate, low humidity, and seismically stable geology create favorable conditions for energy-efficient data center operations. Nevada's absence of corporate and personal income tax, combined with special tax abatements negotiated for large-scale projects, make Northern Nevada one of the most financially attractive data center markets in the Western US.",
    marketHighlights: [
      "Tahoe Reno Industrial Center (TRIC) hosts major hyperscale campuses",
      "No corporate or personal income tax in Nevada",
      "Cool, dry high-desert climate ideal for free cooling",
      "Proximity to Northern California without California regulatory burden",
      "Special tax abatement packages for large-scale data center investments",
      "Apple, Google, and Switch anchor major campus developments",
    ],
    majorEmployers: [
      "Apple",
      "Google",
      "Switch",
      "Microsoft",
      "Flexential",
      "365 Data Centers",
      "Digital Realty",
      "DataBank",
      "Blockchains LLC",
      "TRIC Industrial (various tenants)",
    ],
    keyStats: {
      estimatedMWCapacity: "200+ MW",
      numberOfFacilities: "15+ facilities",
      majorUtilityProvider: "NV Energy",
      averagePUE: "1.15-1.35",
      yearOverYearGrowth: "18-22%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  18. San Antonio, Texas                                                 */
  /* ---------------------------------------------------------------------- */
  {
    slug: "san-antonio-texas",
    city: "San Antonio",
    state: "Texas",
    stateCode: "TX",
    metaTitle:
      "Data Center Staffing in San Antonio, TX | South Texas Data Center Recruitment",
    metaDescription:
      "Data center staffing in San Antonio, Texas. We recruit construction professionals for San Antonio's established data center market serving military, government, and enterprise clients.",
    description:
      "San Antonio has built a strong data center market differentiated by its concentration of military and government IT operations combined with growing commercial demand. The city is home to multiple military installations including Joint Base San Antonio, which drives significant classified and unclassified data center requirements. CPS Energy, the nation's largest municipally owned electric and gas utility, provides competitive and reliable power. The Westover Hills and far northwest side of the city have become primary data center corridors, with operators like Microsoft, Rackspace (headquartered locally), and CyrusOne investing in major facilities. San Antonio's lower cost of living compared to Dallas and Houston, combined with no state income tax, makes it an attractive market for recruiting data center construction talent.",
    marketHighlights: [
      "Strong military and government data center presence (Joint Base San Antonio)",
      "CPS Energy provides competitive municipal utility power",
      "Rackspace Technology headquartered locally",
      "Lower cost of living than Dallas and Houston",
      "Growing commercial hyperscale and colocation investment",
      "Westover Hills corridor is primary data center development area",
    ],
    majorEmployers: [
      "Microsoft",
      "Rackspace Technology",
      "CyrusOne",
      "Digital Realty",
      "DataBank",
      "Lumen Technologies",
      "US Military (Joint Base San Antonio)",
      "QTS Realty Trust",
      "Prevara",
      "CPS Energy (enterprise)",
    ],
    keyStats: {
      estimatedMWCapacity: "250+ MW",
      numberOfFacilities: "25+ facilities",
      majorUtilityProvider: "CPS Energy",
      averagePUE: "1.3-1.5",
      yearOverYearGrowth: "12-16%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  19. Minneapolis, Minnesota                                             */
  /* ---------------------------------------------------------------------- */
  {
    slug: "minneapolis-minnesota",
    city: "Minneapolis",
    state: "Minnesota",
    stateCode: "MN",
    metaTitle:
      "Data Center Staffing in Minneapolis, MN | Minnesota Data Center Recruitment",
    metaDescription:
      "Data center staffing in Minneapolis, Minnesota. We recruit construction professionals for the Twin Cities data center market leveraging cold climate and fiber connectivity.",
    description:
      "Minneapolis-St. Paul has maintained a steady data center market, leveraging the Upper Midwest's cold climate for highly efficient free cooling, a central US location with strong fiber connectivity, and a deep pool of engineering talent from the University of Minnesota and regional technology companies. The Twin Cities metro hosts a mix of colocation, enterprise, and emerging hyperscale facilities, with concentrations in downtown Minneapolis, the I-494 corridor, and suburban areas like Chaska and Shakopee. Major local enterprises including UnitedHealth Group, Target, US Bancorp, and 3M drive significant enterprise data center demand. Minnesota's climate allows for some of the most energy-efficient data center operations in the country, with PUE values approaching 1.1 achievable through direct air economization for much of the year.",
    marketHighlights: [
      "Cold climate enables industry-leading PUE through extensive free cooling",
      "Central US location with strong fiber connectivity east-west",
      "Fortune 500 enterprise demand from UnitedHealth, Target, US Bancorp, 3M",
      "University of Minnesota provides strong engineering talent pipeline",
      "I-494 corridor and suburban areas are primary data center zones",
      "Growing hyperscale interest driven by renewable energy access",
    ],
    majorEmployers: [
      "Equinix",
      "Digital Realty",
      "DataBank",
      "Cologix",
      "TierPoint",
      "Flexential",
      "Aligned Data Centers",
      "UnitedHealth Group (enterprise)",
      "Target (enterprise)",
      "US Bancorp (enterprise)",
    ],
    keyStats: {
      estimatedMWCapacity: "200+ MW",
      numberOfFacilities: "25+ facilities",
      majorUtilityProvider: "Xcel Energy",
      averagePUE: "1.1-1.3",
      yearOverYearGrowth: "10-14%",
    },
  },

  /* ---------------------------------------------------------------------- */
  /*  20. Hillsboro, Oregon                                                  */
  /* ---------------------------------------------------------------------- */
  {
    slug: "hillsboro-oregon",
    city: "Hillsboro",
    state: "Oregon",
    stateCode: "OR",
    metaTitle:
      "Data Center Staffing in Hillsboro, OR | Oregon Data Center Recruitment",
    metaDescription:
      "Data center staffing in Hillsboro, Oregon. We recruit construction professionals for the Pacific Northwest's silicon forest data center hub.",
    description:
      "Hillsboro, located in Washington County west of Portland, has become the Pacific Northwest's data center epicenter. Known as part of Oregon's 'Silicon Forest,' the area's concentration of semiconductor manufacturing (Intel's massive Ronler Acres campus is here) created the fiber infrastructure and technical workforce that data center operators find attractive. Hillsboro offers the same Oregon advantages of no sales tax, low-cost hydroelectric power, and cool climate, combined with proximity to Portland's workforce and amenities. The city and surrounding area host a dense cluster of data centers from major operators, making it one of the most concentrated data center submarkets on the West Coast. Enterprise zone tax incentives and the Portland General Electric service territory provide additional economic advantages for both operators and the construction professionals building new capacity.",
    marketHighlights: [
      "Pacific Northwest's densest data center submarket",
      "Located in Oregon's 'Silicon Forest' with Intel and other tech manufacturers",
      "No sales tax on data center equipment",
      "Low-cost hydroelectric power from Columbia River system",
      "Cool climate supports industry-leading free cooling efficiency",
      "Enterprise zone tax incentives available for qualifying projects",
    ],
    majorEmployers: [
      "Google",
      "Amazon Web Services (AWS)",
      "Meta (Facebook)",
      "Digital Realty",
      "Flexential",
      "QTS Realty Trust",
      "STACK Infrastructure",
      "EdgeConneX",
      "Intel (enterprise)",
      "Pittock Block Data Centers",
    ],
    keyStats: {
      estimatedMWCapacity: "250+ MW",
      numberOfFacilities: "25+ facilities",
      majorUtilityProvider: "Portland General Electric (PGE)",
      averagePUE: "1.1-1.3",
      yearOverYearGrowth: "16-20%",
    },
  },
];

/**
 * Look up a location by its URL slug.
 */
export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

/**
 * Return all location slugs (useful for generateStaticParams).
 */
export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}

/**
 * Return locations filtered by state.
 */
export function getLocationsByState(stateCode: string): Location[] {
  return locations.filter((l) => l.stateCode === stateCode);
}
