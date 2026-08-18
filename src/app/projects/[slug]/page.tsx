import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/content/projects";
import { PanoramaViewer } from "@/components/3d/PanoramaViewer";
import { BeforeAfterSlider } from "@/components/projects/BeforeAfterSlider";
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, Clock, Maximize, Layers, Shield } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — ${project.categoryLabel} in ${project.locality}`,
    description: `${project.title}: ${project.subtitle}. Designed by MV Architects and Interiors in ${project.location}.`,
    openGraph: {
      title: `${project.title} | MV Architects`,
      description: project.subtitle,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Find next project
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://omprakashkadur.github.io/mv-architects-demo",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://omprakashkadur.github.io/mv-architects-demo/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://omprakashkadur.github.io/mv-architects-demo/projects/${project.slug}`,
      },
    ],
  };

  return (
    <article className="py-12 sm:py-20 bg-[var(--color-bone)] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Back Link & Breadcrumbs */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--color-stone)] hover:text-[var(--color-charcoal)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Works</span>
          </Link>

          <span className="px-3 py-1 bg-[var(--color-clay)]/10 text-[var(--color-clay)] text-[10px] font-mono uppercase tracking-widest radius-arch">
            {project.categoryLabel}
          </span>
        </div>

        {/* Project Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-3 text-xs font-mono text-[var(--color-stone)] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[var(--color-clay)]" />
            <span>{project.location}</span>
            <span>•</span>
            <span>Completed {project.year}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--color-charcoal)] leading-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-stone)] font-light leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Hero Cover Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden radius-arch mb-16 border border-[var(--color-stone)]/20 shadow-md">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Brief & Specification Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 pb-16 border-b border-[var(--color-stone)]/20">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
                The Client Brief
              </h2>
              <p className="text-base text-[var(--color-charcoal)]/85 leading-relaxed font-light">
                {project.brief}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
                Spatial Concept & Light
              </h2>
              <p className="text-base text-[var(--color-charcoal)]/85 leading-relaxed font-light">
                {project.concept}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
                Craftsmanship & Execution
              </h2>
              <p className="text-base text-[var(--color-charcoal)]/85 leading-relaxed font-light">
                {project.executionStory}
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Spec Table */}
          <div className="lg:col-span-5 bg-[var(--color-bone-warm)]/50 p-8 radius-arch border border-[var(--color-stone)]/20 space-y-6">
            <h3 className="font-serif text-xl font-normal text-[var(--color-charcoal)] border-b border-[var(--color-stone)]/20 pb-4">
              Project Parameters
            </h3>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex justify-between py-2 border-b border-[var(--color-stone)]/15">
                <span className="text-[var(--color-stone)]">Location:</span>
                <span className="text-[var(--color-charcoal)] font-semibold">{project.location}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--color-stone)]/15">
                <span className="text-[var(--color-stone)]">Built-up Area:</span>
                <span className="text-[var(--color-charcoal)] font-semibold">{project.areaSqFt.toLocaleString()} sq.ft.</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--color-stone)]/15">
                <span className="text-[var(--color-stone)]">Year of Handover:</span>
                <span className="text-[var(--color-charcoal)] font-semibold">{project.year}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--color-stone)]/15">
                <span className="text-[var(--color-stone)]">Execution Duration:</span>
                <span className="text-[var(--color-charcoal)] font-semibold">{project.durationMonths} Months</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[var(--color-stone)]/15">
                <span className="text-[var(--color-stone)]">Project Scale:</span>
                <span className="text-[var(--color-charcoal)] font-semibold">₹{project.budgetLakhs} Lakhs Approx.</span>
              </div>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-stone)] block mb-2">
                Scope of Work:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.scope.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-[var(--color-bone)] text-[11px] font-mono text-[var(--color-charcoal)] radius-arch border border-[var(--color-stone)]/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2: 360° Panorama Interactive Walkthrough */}
        <section className="mb-24">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-2">
              Layer 2 — Spatial Immersion
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[var(--color-charcoal)] mb-3">
              Interactive 360° Walkthrough.
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-stone)] leading-relaxed">
              Explore the spherical room volume. Rotate freely, switch between living zones, and inspect material specifications embedded directly in the 3D scene.
            </p>
          </div>

          <PanoramaViewer rooms={project.panoramas} fallbackImage={project.heroImage} />
        </section>

        {/* Before / After Transformation Slider */}
        <section className="mb-24">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-2">
              Transformation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[var(--color-charcoal)] mb-3">
              Before & After Comparison.
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-stone)] leading-relaxed">
              Slide horizontally across to reveal the architectural intervention from raw demolition state to completed bespoke residence.
            </p>
          </div>

          <BeforeAfterSlider
            beforeUrl={project.beforeAfter.beforeUrl}
            afterUrl={project.beforeAfter.afterUrl}
            beforeLabel={project.beforeAfter.beforeLabel}
            afterLabel={project.beforeAfter.afterLabel}
            description={project.beforeAfter.description}
          />
        </section>

        {/* Material Palette Swatches */}
        <section className="mb-24">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-2">
              Tactile Materiality
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[var(--color-charcoal)] mb-3">
              Material Palette & Origins.
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-stone)] leading-relaxed">
              Every texture is specified for longevity, climate responsiveness, and aesthetic patina over time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.materials.map((mat, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-bone-warm)]/40 p-6 radius-arch border border-[var(--color-stone)]/20 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-full h-16 radius-arch mb-4 border border-[var(--color-stone)]/20 shadow-inner"
                    style={{ backgroundColor: mat.colorHex }}
                  />
                  <h4 className="font-serif text-lg font-semibold text-[var(--color-charcoal)] mb-1">
                    {mat.name}
                  </h4>
                  <div className="text-xs font-mono text-[var(--color-clay)] mb-2">
                    {mat.type}
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--color-stone)]/15 text-[11px] font-mono text-[var(--color-stone)] space-y-1">
                  <div>Finish: <span className="text-[var(--color-charcoal)]">{mat.finish}</span></div>
                  <div>Origin: <span className="text-[var(--color-charcoal)]">{mat.origin}</span></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Project Footer Link */}
        <div className="pt-12 border-t border-[var(--color-stone)]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/projects"
            className="text-xs font-mono uppercase tracking-widest text-[var(--color-stone)] hover:text-[var(--color-charcoal)]"
          >
            ← View All Works
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-3 p-6 bg-[var(--color-charcoal)] text-[var(--color-bone)] radius-arch hover:bg-[var(--color-clay)] transition-colors group"
          >
            <div className="text-right">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-brass)] block">
                Next Project
              </span>
              <span className="font-serif text-lg font-normal">
                {nextProject.title}
              </span>
            </div>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
