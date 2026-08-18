import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { studioInfo } from "@/content/studio";
import { ArrowUpRight, Award, Compass, Eye, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About the Studio — Architectural Philosophy & Leadership | MV Architects",
  description:
    "Learn about MV Architects and Interiors: 14 years of architectural practice in Bengaluru, crafting bespoke tropical residences and contextual interiors.",
};

const awards = [
  { year: "2025", title: "AD100 Excellence in Residential Architecture", organization: "Architectural Digest India" },
  { year: "2024", title: "Best Penthouse Interior Architecture — South India", organization: "National Architecture Awards" },
  { year: "2023", title: "Sustainable Tropical Living Award (The Courtyard House)", organization: "Indian Institute of Architects" },
  { year: "2022", title: "Excellence in Precision Millwork & Kitchen Engineering", organization: "Hafele Design Guild" },
];

const team = [
  {
    name: "Manoj Varma",
    role: "Principal Architect & Founder",
    credentials: "B.Arch, M.Arch (CEPT), IIA Fellow",
    bio: "With over 16 years of architectural practice, Manoj directs the studio's spatial geometry, courtyard bioclimatic systems, and material authenticity.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Vidya Sagar",
    role: "Design Director — Interiors & Scenography",
    credentials: "M.Des (Interior Architecture), NID",
    bio: "Vidya oversees tactile materiality, bespoke furniture curation, lighting scenography, and the studio's artisan textile collaborations.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Karthik Narayanan",
    role: "Head of Turnkey Execution & Engineering",
    credentials: "B.Tech (Civil), PMP",
    bio: "Leading 40+ master joiners and site engineers to ensure that every GFC blueprint is built on-site with millimeter accuracy.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-[var(--color-bone)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Studio Intro */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
            About MV Studio
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--color-charcoal)] leading-tight mb-6">
            Architecture of Calm, Crafted for Modern Living.
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-stone)] leading-relaxed font-light">
            Founded in Bengaluru in 2012, MV Architects and Interiors is a multidisciplinary architecture and bespoke design practice. We create residences that celebrate raw materials, natural cross-ventilation, and thoughtful spatial flow.
          </p>
        </div>

        {/* Studio Cover Photography */}
        <div className="relative aspect-[16/8] w-full overflow-hidden radius-arch mb-24 border border-[var(--color-stone)]/20 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="MV Architects Studio & Courtyard"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 pb-16 border-b border-[var(--color-stone)]/20">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono tracking-widest text-[var(--color-brass)] uppercase block mb-3">
              Our Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--color-charcoal)]">
              Four Pillars of Our Studio Practice.
            </h2>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-normal text-[var(--color-charcoal)]">
                01. Material Honesty
              </h3>
              <p className="text-xs text-[var(--color-stone)] leading-relaxed">
                We celebrate materials in their natural state: raw microcement, brushed brass, kiln-fired terracotta, and reclaimed teak that age gracefully with time.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-normal text-[var(--color-charcoal)]">
                02. Climate & Cross-Breeze
              </h3>
              <p className="text-xs text-[var(--color-stone)] leading-relaxed">
                Bengaluru enjoys a rare climate. Our designs harness central courtyards, deep overhangs, and perforated jaali screens to reduce active air conditioning loads.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-normal text-[var(--color-charcoal)]">
                03. Turnkey Certainty
              </h3>
              <p className="text-xs text-[var(--color-stone)] leading-relaxed">
                We believe exceptional design is worthless without disciplined execution. We maintain 100% itemized BOQ transparency with strict milestone warranties.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-serif text-xl font-normal text-[var(--color-charcoal)]">
                04. Tactile Quietude
              </h3>
              <p className="text-xs text-[var(--color-stone)] leading-relaxed">
                Homes should be peaceful sanctuaries. We eliminate visual noise through concealed flush storage, integrated warm coves, and acoustic wall dampening.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <section className="mb-24">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
              Studio Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[var(--color-charcoal)]">
              The Architects & Directors.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-[var(--color-bone-warm)]/40 p-6 radius-arch border border-[var(--color-stone)]/20 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square w-full overflow-hidden radius-arch mb-5 border border-[var(--color-stone)]/20">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[var(--color-charcoal)] mb-1">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-[var(--color-clay)] mb-2">
                    {member.role}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--color-stone)] mb-4">
                    {member.credentials}
                  </div>
                  <p className="text-xs text-[var(--color-stone)] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards & Press */}
        <section className="mb-16 bg-[var(--color-charcoal)] text-[var(--color-bone)] p-8 sm:p-12 radius-arch">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono tracking-widest text-[var(--color-brass)] uppercase block mb-2">
              Recognition
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal">
              Awards & Honors
            </h2>
          </div>

          <div className="space-y-4">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-[var(--color-stone)]/20 gap-2"
              >
                <div>
                  <h4 className="font-serif text-lg font-normal text-[var(--color-bone)]">
                    {award.title}
                  </h4>
                  <span className="text-xs font-mono text-[var(--color-stone)]">
                    {award.organization}
                  </span>
                </div>
                <span className="text-xs font-mono text-[var(--color-brass)] font-semibold">
                  {award.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-clay)] text-[var(--color-bone)] text-xs font-mono uppercase tracking-widest hover:bg-[var(--color-clay-light)] transition-colors radius-arch shadow-lg"
          >
            <span>Start a Conversation With Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
