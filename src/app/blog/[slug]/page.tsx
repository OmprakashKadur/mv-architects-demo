import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User, Share2 } from "lucide-react";
import { studioInfo } from "@/content/studio";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | MV Architects Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: "2026-02-01",
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: studioInfo.name,
      logo: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      },
    },
  };

  return (
    <article className="py-12 sm:py-20 bg-[var(--color-bone)] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Back Link */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--color-stone)] hover:text-[var(--color-charcoal)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Journal</span>
          </Link>

          <span className="px-3 py-1 bg-[var(--color-clay)]/10 text-[var(--color-clay)] text-[10px] font-mono uppercase tracking-widest radius-arch">
            {post.category}
          </span>
        </div>

        {/* Title & Metadata */}
        <div className="mb-10">
          <div className="flex items-center gap-3 text-xs font-mono text-[var(--color-stone)] mb-4">
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

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[var(--color-charcoal)] leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[var(--color-stone)] leading-relaxed font-light">
            {post.excerpt}
          </p>
        </div>

        {/* Author Header Bar */}
        <div className="flex items-center justify-between py-4 border-y border-[var(--color-stone)]/20 mb-12 text-xs font-mono text-[var(--color-stone)]">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-[var(--color-clay)]" />
            <span className="text-[var(--color-charcoal)] font-semibold">{post.author.name}</span>
            <span>({post.author.role})</span>
          </div>
        </div>

        {/* Cover Photo */}
        <div className="relative aspect-[16/9] w-full overflow-hidden radius-arch mb-12 border border-[var(--color-stone)]/20 shadow-sm">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body HTML */}
        <div
          className="prose prose-lg max-w-none text-[var(--color-charcoal)]/90 leading-relaxed space-y-6 [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-normal [&>h2]:text-[var(--color-charcoal)] [&>h2]:pt-6 [&>h3]:font-serif [&>h3]:text-xl [&>h3]:text-[var(--color-clay)] [&>h3]:pt-4 [&>p]:text-sm [&>p]:sm:text-base [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ul]:text-sm"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* In-Article CTA */}
        <div className="mt-16 p-8 bg-[var(--color-bone-warm)]/50 radius-arch border border-[var(--color-stone)]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-clay)] block mb-1">
              Have a Project in Bengaluru?
            </span>
            <h3 className="font-serif text-xl font-normal text-[var(--color-charcoal)]">
              Consult with our architectural team today.
            </h3>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-clay)] text-[var(--color-bone)] text-xs font-mono uppercase tracking-widest radius-arch hover:bg-[var(--color-clay-light)] transition-colors shadow"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
