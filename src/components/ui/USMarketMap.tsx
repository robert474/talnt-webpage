"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";

/* -------------------------------------------------------------------------- */
/*  Market pin data with real longitude / latitude                            */
/* -------------------------------------------------------------------------- */

interface MarketPin {
  slug: string;
  city: string;
  state: string;
  stat: string;
  coords: [number, number]; // [longitude, latitude]
}

const markets: MarketPin[] = [
  { slug: "northern-virginia", city: "Northern Virginia", state: "Virginia", stat: "Largest data center market globally", coords: [-77.487, 39.044] },
  { slug: "dallas-fort-worth", city: "Dallas-Fort Worth", state: "Texas", stat: "Fastest-growing capacity in the South", coords: [-96.797, 32.777] },
  { slug: "phoenix", city: "Phoenix", state: "Arizona", stat: "Major hyperscale expansion hub", coords: [-112.074, 33.449] },
  { slug: "chicago", city: "Chicago", state: "Illinois", stat: "Central U.S. network interconnection hub", coords: [-87.63, 41.878] },
  { slug: "silicon-valley", city: "Silicon Valley", state: "California", stat: "Heart of tech-driven data demand", coords: [-121.89, 37.335] },
  { slug: "atlanta", city: "Atlanta", state: "Georgia", stat: "Southeast\u2019s premier connectivity market", coords: [-84.388, 33.749] },
  { slug: "portland-oregon", city: "Portland", state: "Oregon", stat: "Low-cost power and fiber-rich region", coords: [-122.676, 45.523] },
  { slug: "columbus-ohio", city: "Columbus", state: "Ohio", stat: "Emerging Midwest data center corridor", coords: [-82.999, 39.961] },
  { slug: "reno", city: "Reno", state: "Nevada", stat: "Growing hyperscale destination", coords: [-119.814, 39.53] },
  { slug: "salt-lake-city", city: "Salt Lake City", state: "Utah", stat: "Mountain West expansion market", coords: [-111.891, 40.761] },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

const TOPO_URL =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function USMarketMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [active, setActive] = useState<string | null>(null);
  const [pinPositions, setPinPositions] = useState<
    { slug: string; x: number; y: number }[]
  >([]);
  const [loaded, setLoaded] = useState(false);

  /* Draw the D3 map once on mount */
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 960;
    const height = 600;

    const projection = d3.geoAlbersUsa().fitSize([width, height], {
      type: "Sphere",
    } as d3.GeoPermissibleObjects);

    const path = d3.geoPath().projection(projection);

    d3.json<Topology>(TOPO_URL).then((topology) => {
      if (!topology) return;

      const states = topojson.feature(
        topology,
        topology.objects.states as GeometryCollection
      );

      // Draw state polygons
      svg
        .select<SVGGElement>(".states")
        .selectAll("path")
        .data(states.features)
        .join("path")
        .attr("d", path as never)
        .attr("fill", "#e8eff5")
        .attr("stroke", "#94a3b8")
        .attr("stroke-width", 0.75)
        .attr("vector-effect", "non-scaling-stroke");

      // Draw state borders (mesh for clean lines without duplicates)
      const stateBorders = topojson.mesh(
        topology,
        topology.objects.states as GeometryCollection,
        (a, b) => a !== b
      );
      svg
        .select<SVGGElement>(".borders")
        .append("path")
        .datum(stateBorders)
        .attr("d", path as never)
        .attr("fill", "none")
        .attr("stroke", "#94a3b8")
        .attr("stroke-width", 0.75)
        .attr("vector-effect", "non-scaling-stroke");

      // Project pin coordinates
      const positions = markets
        .map((m) => {
          const projected = projection(m.coords);
          if (!projected) return null;
          return {
            slug: m.slug,
            x: (projected[0] / width) * 100,
            y: (projected[1] / height) * 100,
          };
        })
        .filter(Boolean) as { slug: string; x: number; y: number }[];

      setPinPositions(positions);

      // Stagger pin drop-in animation
      requestAnimationFrame(() => setLoaded(true));
    });
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* D3-rendered US map */}
      <svg
        ref={svgRef}
        viewBox="0 0 960 600"
        className="w-full h-auto"
        aria-label="Map of United States showing DC TALNT market locations"
      >
        <g className="states" />
        <g className="borders" />
      </svg>

      {/* Pin overlay (HTML for better tooltip / link handling) */}
      <div className="absolute inset-0">
        {pinPositions.map((pos, i) => {
          const market = markets.find((m) => m.slug === pos.slug)!;
          const isActive = active === market.slug;

          return (
            <div
              key={market.slug}
              className="absolute"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                /* anchor at the bottom tip of the teardrop */
                transform: loaded
                  ? "translate(-50%, -100%) translateY(0)"
                  : "translate(-50%, -100%) translateY(-30px)",
                opacity: loaded ? 1 : 0,
                transition: `opacity 0.4s ease ${i * 0.08}s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.08}s`,
              }}
              onMouseEnter={() => setActive(market.slug)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Teardrop pin with DC logo */}
              <Link
                href={`/locations/${market.slug}`}
                className={`relative z-10 block transition-transform duration-200 ${
                  isActive ? "scale-125" : "scale-100"
                }`}
                aria-label={`${market.city}, ${market.state}`}
              >
                <svg
                  width="36"
                  height="48"
                  viewBox="0 0 36 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-lg"
                >
                  {/* Teardrop shape */}
                  <path
                    d="M18 0C8.059 0 0 8.059 0 18c0 9.941 18 30 18 30s18-20.059 18-30C36 8.059 27.941 0 18 0z"
                    className={isActive ? "fill-blue-dark" : "fill-blue"}
                    style={{ transition: "fill 0.2s" }}
                  />
                  {/* White circle inside */}
                  <circle cx="18" cy="17" r="11" fill="white" />
                  {/* Hex logo icon inside circle */}
                  <path
                    d="M18 7.5L25.5 12V21L18 25.5L10.5 21V12L18 7.5Z"
                    className={isActive ? "fill-blue-dark" : "fill-blue"}
                    style={{ transition: "fill 0.2s" }}
                  />
                  <path
                    d="M13 14h10M13 16.5h10M13 19h7"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </Link>

              {/* Tooltip */}
              <div
                className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-1 -translate-x-1/2 transition-all duration-200 ${
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1"
                }`}
              >
                <div className="whitespace-nowrap rounded-lg bg-navy px-4 py-3 text-center shadow-xl">
                  <p className="text-sm font-bold text-white">{market.city}</p>
                  <p className="text-xs text-gray-400">{market.state}</p>
                  <p className="mt-1 text-xs leading-snug text-blue-light">
                    {market.stat}
                  </p>
                  {/* Tooltip arrow */}
                  <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-navy" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
