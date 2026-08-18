import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { ArrowUpRight, CheckCircle2, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Scope — Architectural Design & Turnkey Fitouts | MV Architects",
  description:
    "Explore our complete range of architectural and interior design services in Bengaluru: Bespoke Interiors, Architecture, Turnkey Execution, and Modular Systems.",
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24 bg-[var(--color-bone)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
            Our Disciplines
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--color-charcoal)] leading-tight mb-6">
            Architectural Rigor. Bespoke Craft.
          </h1>
          <p className="text-base text-[var(--color-stone)] leading-relaxed">
            From bare plot architecture to high-precision modular kitchens and turnkey interior handovers. We provide transparent timelines, fixed-price BOQs, and single-point engineering accountability.
          </p>
        </div>

        {/* Services In-Depth List */}
        <div className="space-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 sm:p-12 bg-[var(--color-bone-warm)]/40 radius-arch border border-[var(--color-stone)]/20 items-start"
            >
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-2.5 py-1 bg-[var(--color-clay)]/10 text-[var(--color-clay)] radius-arch uppercase tracking-widest">
                    {service.number} // CAPABILITY
                  </span>
                  <span className="text-xs font-mono text-[var(--color-stone)] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[var(--color-brass)]" />
                    {service.timeline}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--color-charcoal)]">
                  {service.title}
                </h2>
                <div className="text-sm font-mono text-[var(--color-clay)]">
                  {service.tagline}
                </div>
                <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-[var(--color-stone)]/20 text-xs font-mono">
                  <span className="text-[var(--color-stone)] block mb-1">Ideal For:</span>
                  <span className="text-[var(--color-charcoal)] font-semibold">{service.idealFor}</span>
                </div>

                <div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-charcoal)] text-[var(--color-bone)] text-xs font-mono uppercase tracking-widest hover:bg-[var(--color-clay)] transition-colors radius-arch group"
                  >
                    <span>Enquire for {service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Scope & Deliverables */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-[var(--color-bone)] p-6 sm:p-8 radius-arch border border-[var(--color-stone)]/20">
                {/* Scope */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--color-brass)] mb-4 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[var(--color-clay)]" />
                    <span>Included Scope</span>
                  </h3>
                  <ul className="space-y-3 text-xs text-[var(--color-charcoal)] font-mono">
                    {service.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-clay)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--color-brass)] mb-4">
                    Tangible Deliverables
                  </h3>
                  <ul className="space-y-3 text-xs text-[var(--color-stone)] font-mono">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[var(--color-brass)]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
