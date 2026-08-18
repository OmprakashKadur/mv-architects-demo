"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight, Compass } from "lucide-react";
import { studioInfo } from "@/content/studio";

const HeroCanvas = dynamic(
  () => import("../3d/HeroCanvas").then((mod) => mod.HeroCanvas),
  { ssr: false }
);

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, scrollY / windowHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden px-6 sm:px-8 lg:px-12 pt-12 pb-8 bg-[var(--color-bone)] border-b border-[var(--color-stone)]/15">
      {/* Layer 1: Real 3D Canvas Background */}
      <HeroCanvas scrollProgress={scrollProgress} />

      {/* Top Meta Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono tracking-widest uppercase text-[var(--color-stone)]">
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-[var(--color-brass)] animate-spin-slow" />
          <span>{studioInfo.location.city}, India • Studio Practice</span>
        </div>
        <div className="hidden sm:block">
          <span>Est. 2012 • 120+ Completed Homes</span>
        </div>
      </div>

      {/* Main Core Headline & Primary CTA (Real DOM text rendered over Canvas) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full py-12 sm:py-20 my-auto">
        <div className="max-w-4xl">
          <span className="inline-block px-3 py-1 bg-[var(--color-clay)]/10 text-[var(--color-clay)] text-xs font-mono uppercase tracking-widest radius-arch mb-6">
            Bespoke Architecture & Interiors
          </span>
          <h1 className="font-serif text-hero-clamp font-normal text-[var(--color-charcoal)] leading-[0.95] tracking-tight mb-8">
            Atmospheric Living Sculpted in Light & Stone.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-charcoal)]/80 max-w-2xl font-light leading-relaxed mb-10">
            {studioInfo.manifesto.line1} {studioInfo.manifesto.line2}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-clay)] text-[var(--color-bone)] text-xs font-mono uppercase tracking-widest hover:bg-[var(--color-clay-light)] transition-colors radius-arch group shadow-lg"
            >
              <span>Book Design Consultation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-[var(--color-charcoal)] text-[var(--color-charcoal)] text-xs font-mono uppercase tracking-widest hover:bg-[var(--color-charcoal)] hover:text-[var(--color-bone)] transition-colors radius-arch"
            >
              <span>Explore Selected Work</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Guide */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-[var(--color-stone)] pt-4">
        <div className="flex items-center gap-2">
          <ArrowDown className="w-3.5 h-3.5 text-[var(--color-clay)] animate-bounce" />
          <span className="uppercase tracking-wider">Scroll to explore our spatial philosophy</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <span>Residential</span>
          <span>•</span>
          <span>Turnkey</span>
          <span>•</span>
          <span>Commercial</span>
        </div>
      </div>
    </section>
  );
}
