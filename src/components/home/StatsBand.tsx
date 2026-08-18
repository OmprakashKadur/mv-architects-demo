import React from "react";
import { studioInfo } from "@/content/studio";

export function StatsBand() {
  return (
    <section className="py-20 bg-[var(--color-charcoal)] text-[var(--color-bone)] border-b border-[var(--color-stone)]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {studioInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="border-l border-[var(--color-brass)]/40 pl-6 flex flex-col justify-between"
            >
              <div>
                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[var(--color-bone)] mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-brass)] mb-1">
                  {stat.label}
                </div>
              </div>
              <div className="text-[11px] text-[var(--color-stone)] font-mono">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
