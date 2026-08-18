import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/projects";
import { ArrowUpRight, MapPin } from "lucide-react";
import { ProjectsFilter } from "@/components/projects/ProjectsFilter";

export const metadata: Metadata = {
  title: "Portfolio — Architecture & Luxury Interiors | MV Architects",
  description:
    "Explore our curated portfolio of residential villas, penthouses, bespoke modular kitchens, and turnkey residences across Bengaluru.",
};

export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-24 bg-[var(--color-bone)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
            Selected Works (2018 – 2026)
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--color-charcoal)] leading-tight mb-6">
            Crafted for Permanence & Light.
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-stone)] leading-relaxed">
            A portfolio of contemporary residential sanctuaries, private villas, and bespoke hospitality spaces across South India.
          </p>
        </div>

        {/* Interactive Filterable Projects Grid (with URL Query state) */}
        <Suspense fallback={<div className="h-40" />}>
          <ProjectsFilter allProjects={projects} />
        </Suspense>
      </div>
    </div>
  );
}
