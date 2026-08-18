import React from "react";
import Link from "next/link";
import { getFeaturedProjects } from "@/content/projects";
import { ArrowUpRight, MapPin, Maximize2 } from "lucide-react";

export function FeaturedRail() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-24 sm:py-32 bg-[var(--color-charcoal)] text-[var(--color-bone)] border-b border-[var(--color-stone)]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-widest text-[var(--color-brass)] uppercase block mb-3">
              Selected Architecture & Interiors
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
              Featured Works
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--color-bone)] hover:text-[var(--color-clay)] transition-colors group"
          >
            <span>View All Projects ({featured.length + 2})</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Project Grid / Horizontal Scroll on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {featured.map((project, idx) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block flex flex-col justify-between focus:outline-none"
              data-cursor="View"
            >
              {/* Image Container with Clip-Path Reveal feel */}
              <div className="relative aspect-[4/3] w-full overflow-hidden radius-arch bg-[var(--color-charcoal-light)] mb-5 border border-[var(--color-stone)]/20">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[var(--color-charcoal)]/90 backdrop-blur-md text-[var(--color-bone)] text-[10px] font-mono uppercase tracking-widest radius-arch border border-[var(--color-stone)]/30">
                    {project.categoryLabel}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[var(--color-clay)] text-[var(--color-bone)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Text Info */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-stone)] mb-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-clay)]" />
                  <span>{project.locality}, {project.city}</span>
                  <span>•</span>
                  <span>{project.areaSqFt.toLocaleString()} sq.ft.</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[var(--color-bone)] group-hover:text-[var(--color-clay)] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-[var(--color-stone)] line-clamp-2 leading-relaxed">
                  {project.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
