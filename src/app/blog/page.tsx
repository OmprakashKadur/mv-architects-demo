import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Design Journal — Interior Design Guides & Insights | MV Architects",
  description:
    "Architectural and interior design insights in Bengaluru: cost breakdowns per sq.ft., modular kitchen comparisons, and turnkey execution timelines.",
};

export default function BlogPage() {
  return (
    <div className="py-16 sm:py-24 bg-[var(--color-bone)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
            Editorial & Insights
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--color-charcoal)] leading-tight mb-6">
            The Design Journal.
          </h1>
          <p className="text-base text-[var(--color-stone)] leading-relaxed">
            Honest architectural guides, cost calculators, material teardowns, and execution realities for homeowners in Bengaluru.
          </p>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block flex flex-col justify-between focus:outline-none"
              data-cursor="Read"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden radius-arch bg-[var(--color-bone-warm)] mb-6 border border-[var(--color-stone)]/20 shadow-sm">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-[var(--color-bone)]/95 backdrop-blur-sm text-[var(--color-charcoal)] text-[10px] font-mono uppercase tracking-widest radius-arch border border-[var(--color-stone)]/30">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Details */}
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-[var(--color-stone)] mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-brass)]" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-clay)]" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="font-serif text-xl sm:text-2xl font-normal text-[var(--color-charcoal)] group-hover:text-[var(--color-clay)] transition-colors mb-3 leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs text-[var(--color-stone)] line-clamp-3 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[var(--color-clay)] font-semibold group-hover:underline">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
