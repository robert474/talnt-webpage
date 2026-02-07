"use client";

import { useEffect, useState } from "react";

interface AnimatedHeroProps {
  title: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode;
  imageUrl: string;
  overlayOpacity?: string;
}

export default function AnimatedHero({
  title,
  subtitle,
  children,
  imageUrl,
  overlayOpacity = "bg-navy/75",
}: AnimatedHeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setLoaded(true);
  }, [imageUrl]);

  return (
    <section className="relative min-h-[600px] overflow-hidden lg:min-h-[700px]">
      {/* Animated background image - slow drone-style zoom and pan */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className="absolute inset-[-10%] animate-hero-drift bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>

      {/* Gradient overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[600px] items-center lg:min-h-[700px]">
        <div className="container-page w-full py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-balance drop-shadow-lg">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-200 md:text-xl lg:max-w-2xl drop-shadow">
              {subtitle}
            </p>
            {children && <div className="mt-10">{children}</div>}
          </div>
        </div>
      </div>

      {/* Bottom fade for smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent" />
    </section>
  );
}
