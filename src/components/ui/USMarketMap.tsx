"use client";

import { useState } from "react";
import Link from "next/link";

interface MarketPin {
  slug: string;
  city: string;
  state: string;
  stat: string;
  /** Percentage-based position on the map (0-100) */
  x: number;
  y: number;
}

const markets: MarketPin[] = [
  { slug: "ashburn-va", city: "Ashburn", state: "Virginia", stat: "Largest data center market globally", x: 79, y: 38 },
  { slug: "dallas-tx", city: "Dallas", state: "Texas", stat: "Fastest-growing capacity in the South", x: 52, y: 62 },
  { slug: "phoenix-az", city: "Phoenix", state: "Arizona", stat: "Major hyperscale expansion hub", x: 26, y: 60 },
  { slug: "chicago-il", city: "Chicago", state: "Illinois", stat: "Central U.S. network interconnection hub", x: 62, y: 32 },
  { slug: "silicon-valley-ca", city: "Silicon Valley", state: "California", stat: "Heart of tech-driven data demand", x: 12, y: 42 },
  { slug: "atlanta-ga", city: "Atlanta", state: "Georgia", stat: "Southeast\u2019s premier connectivity market", x: 70, y: 56 },
  { slug: "portland-or", city: "Portland", state: "Oregon", stat: "Low-cost power and fiber-rich region", x: 14, y: 18 },
  { slug: "columbus-oh", city: "Columbus", state: "Ohio", stat: "Emerging Midwest data center corridor", x: 72, y: 36 },
  { slug: "reno-nv", city: "Reno", state: "Nevada", stat: "Growing hyperscale destination", x: 17, y: 32 },
  { slug: "salt-lake-city-ut", city: "Salt Lake City", state: "Utah", stat: "Mountain West expansion market", x: 26, y: 35 },
];

export default function USMarketMap() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* US outline SVG */}
      <svg
        viewBox="0 0 960 600"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Map of United States showing DC TALNT market locations"
      >
        {/* Simplified US outline */}
        <path
          d="M 120,100 L 180,80 220,85 260,90 300,80 340,75 380,78 420,82 460,88 500,85 540,80 580,90 620,95 660,100 700,110 730,130 750,160 760,200 770,220 780,250 790,280 800,310 810,340 800,360 780,370 760,350 740,340 730,360 720,380 700,400 680,390 660,380 640,370 620,360 600,370 580,380 560,370 540,360 520,370 500,380 480,375 460,370 440,365 420,370 400,380 380,390 360,395 340,390 320,385 300,390 280,400 260,395 240,380 220,370 200,365 180,370 160,380 140,375 120,370 100,360 90,340 85,320 80,300 75,280 80,260 85,240 90,220 100,200 110,180 115,160 118,140 120,100Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-300"
        />
        {/* State borders hint */}
        <path
          d="M 460,88 L 455,380 M 340,75 L 345,390 M 580,90 L 575,380 M 220,85 L 225,370 M 700,110 L 695,400 M 120,100 L 120,370 M 460,88 L 460,200 M 340,200 L 700,200 M 340,300 L 700,300"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-gray-200"
          opacity="0.5"
        />
      </svg>

      {/* Pins overlay */}
      <div className="absolute inset-0">
        {markets.map((market) => (
          <div
            key={market.slug}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${market.x}%`, top: `${market.y}%` }}
            onMouseEnter={() => setActive(market.slug)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Pulse ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`h-8 w-8 rounded-full bg-blue/20 transition-transform duration-300 ${
                  active === market.slug ? "scale-150" : "scale-100"
                }`}
              />
            </div>

            {/* Pin dot */}
            <Link
              href={`/locations/${market.slug}`}
              className={`relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white shadow-lg transition-all duration-200 ${
                active === market.slug
                  ? "h-5 w-5 bg-blue-dark"
                  : "bg-blue"
              }`}
              aria-label={`${market.city}, ${market.state}`}
            >
              <span className="sr-only">
                {market.city}, {market.state}
              </span>
            </Link>

            {/* Tooltip */}
            <div
              className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 transition-all duration-200 ${
                active === market.slug
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
        ))}
      </div>
    </div>
  );
}
