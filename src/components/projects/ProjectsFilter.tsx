"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Project } from "@/content/projects";
import { ArrowUpRight, MapPin } from "lucide-react";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "turnkey", label: "Turnkey Architecture" },
  { id: "modular-kitchens", label: "Modular Kitchens" },
];

export function ProjectsFilter({ allProjects }: { allProjects: Project[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = searchParams.get("category") || "all";

  const handleCategoryChange = (catId: string) => {
    if (catId === "all") {
      router.push("/projects");
    } else {
      router.push(`/projects?category=${catId}`);
    }
  };

  const filteredProjects =
    currentCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === currentCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 pb-8 mb-12 border-b border-[var(--color-stone)]/20">
        {categories.map((cat) => {
          const isActive = currentCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all radius-arch cursor-pointer ${
                isActive
                  ? "bg-[var(--color-charcoal)] text-[var(--color-bone)] shadow-sm font-semibold"
                  : "bg-[var(--color-bone-warm)]/50 text-[var(--color-charcoal)]/80 hover:bg-[var(--color-bone-warm)] hover:text-[var(--color-charcoal)] border border-[var(--color-stone)]/20"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block flex flex-col justify-between focus:outline-none"
            data-cursor="View"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden radius-arch bg-[var(--color-bone-warm)] mb-5 border border-[var(--color-stone)]/20 shadow-sm">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/70 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-[var(--color-bone)]/90 backdrop-blur-md text-[var(--color-charcoal)] text-[10px] font-mono uppercase tracking-widest radius-arch border border-[var(--color-stone)]/30">
                  {project.categoryLabel}
                </span>
              </div>

              {/* Hover Arrow Circle */}
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[var(--color-clay)] text-[var(--color-bone)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-stone)] mb-2">
                <MapPin className="w-3.5 h-3.5 text-[var(--color-clay)]" />
                <span>{project.locality}, {project.city}</span>
                <span>•</span>
                <span>{project.areaSqFt.toLocaleString()} sq.ft.</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <h2 className="font-serif text-2xl font-normal text-[var(--color-charcoal)] group-hover:text-[var(--color-clay)] transition-colors mb-2">
                {project.title}
              </h2>
              <p className="text-xs text-[var(--color-stone)] line-clamp-2 leading-relaxed">
                {project.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
