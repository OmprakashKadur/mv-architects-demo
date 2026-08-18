import React from "react";
import { testimonials } from "@/content/testimonials";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-bone)] border-b border-[var(--color-stone)]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
            Client Perspectives
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[var(--color-charcoal)] mb-4">
            Words from Those Who Live in Our Work.
          </h2>
          <p className="text-sm text-[var(--color-stone)] leading-relaxed">
            Real stories from homeowners in Indiranagar, Koramangala, and Whitefield.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[var(--color-bone-warm)]/30 p-8 radius-arch border border-[var(--color-stone)]/20 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-[var(--color-brass)]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[var(--color-clay)]/40" />
                </div>
                <p className="text-sm text-[var(--color-charcoal)] leading-relaxed italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-stone)]/20">
                <img
                  src={t.image}
                  alt={t.clientName}
                  className="w-12 h-12 rounded-full object-cover border border-[var(--color-stone)]/30"
                />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[var(--color-charcoal)]">
                    {t.clientName}
                  </h4>
                  <div className="text-xs font-mono text-[var(--color-clay)]">
                    {t.locality}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--color-stone)]">
                    {t.projectType}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
