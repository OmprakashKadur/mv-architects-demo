import React from "react";
import { MessageSquare, PenTool, Hammer, KeyRound } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consult & Spatial Discovery",
    tagline: "Uncovering your lifestyle, light preferences & spatial habits",
    description:
      "We begin with a deep-dive design workshop at your site. We analyse sun paths, natural ventilation, cross-breezes, and your daily rituals to establish the spatial brief and preliminary budget.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Concept & 3D Material Scenography",
    tagline: "Tangible material palettes and 360° interactive renders",
    description:
      "Our team crafts customized moodboards with physical samples of Italian marble, raw teak, microcement, and brass. We simulate natural light in 4K 3D renders before any demolition starts.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Precision Turnkey Execution",
    tagline: "Single-point engineering accountability with zero budget overrun",
    description:
      "Master joiners and project engineers execute the civil, false ceiling, German modular hardware, and bespoke millwork according to strict GFC architectural blueprints.",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "White-Glove Handover",
    tagline: "Deep cleaning, art curation & complete 5-year warranty package",
    description:
      "We conduct a 50-point quality audit, style your soft furnishings and art, and hand over your keys accompanied by comprehensive maintenance documentation and warranty certificates.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--color-bone)] border-b border-[var(--color-stone)]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
            Execution Roadmap
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[var(--color-charcoal)] mb-4">
            Four Steps from Raw Space to Living Sanctuarary.
          </h2>
          <p className="text-sm text-[var(--color-stone)] leading-relaxed">
            Transparent, milestone-based execution engineered to eliminate construction delays and budget creep.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-[var(--color-bone-warm)]/40 p-8 radius-arch border border-[var(--color-stone)]/20 flex flex-col justify-between hover:border-[var(--color-clay)]/50 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-2xl font-light text-[var(--color-brass)]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[var(--color-bone)] border border-[var(--color-stone)]/30 flex items-center justify-center text-[var(--color-charcoal)] group-hover:bg-[var(--color-clay)] group-hover:text-[var(--color-bone)] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[var(--color-charcoal)] mb-2">
                    {step.title}
                  </h3>
                  <div className="text-xs font-mono text-[var(--color-clay)] mb-4">
                    {step.tagline}
                  </div>
                  <p className="text-xs text-[var(--color-stone)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
