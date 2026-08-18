import React from "react";
import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { FeaturedRail } from "@/components/home/FeaturedRail";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { StatsBand } from "@/components/home/StatsBand";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { services } from "@/content/services";
import { studioInfo } from "@/content/studio";
import { ArrowUpRight, Compass, ShieldCheck, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section (Layer 1 3D Scene + Real DOM Text) */}
      <Hero />

      {/* 2. Studio Manifesto & Philosophy */}
      <section className="py-24 sm:py-32 bg-[var(--color-bone)] border-b border-[var(--color-stone)]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-4">
                Design Manifesto
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[var(--color-charcoal)] leading-tight">
                Authentic spaces born from climate, craft, and calm.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[var(--color-charcoal)]/80 font-light leading-relaxed">
              <p>
                Founded in 2012 in Bengaluru, MV Architects and Interiors crafts residential architecture and bespoke interior environments that reject ephemeral trends. We believe that true luxury lies in restraint: honest materials, sculptural daylight, and flawless millwork.
              </p>
              <p className="text-sm text-[var(--color-stone)] leading-relaxed">
                Whether sculpting a light-filled courtyard residence in Indiranagar or delivering an ultra-engineered penthouse in Koramangala, our team bridges architectural rigor with turnkey execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[var(--color-stone)]/20 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-brass)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[var(--color-charcoal)] uppercase mb-1">
                      100% Fixed-Price BOQ
                    </strong>
                    <span className="text-[var(--color-stone)]">
                      Transparent milestone contracts with zero hidden escalation clauses.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[var(--color-clay)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[var(--color-charcoal)] uppercase mb-1">
                      Bespoke Master Joinery
                    </strong>
                    <span className="text-[var(--color-stone)]">
                      Custom teak, travertine, and brass detailing engineered in-house.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Works Rail (Layer 3 GSAP / Responsive Grid) */}
      <FeaturedRail />

      {/* 4. Services Grid Overview */}
      <section className="py-24 sm:py-32 bg-[var(--color-bone)] border-b border-[var(--color-stone)]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
                Disciplines & Capabilities
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[var(--color-charcoal)]">
                Our Services.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--color-charcoal)] hover:text-[var(--color-clay)] transition-colors group"
            >
              <span>Explore All Capabilities</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-[var(--color-bone-warm)]/40 p-8 radius-arch border border-[var(--color-stone)]/20 flex flex-col justify-between hover:border-[var(--color-clay)]/40 transition-colors group"
              >
                <div>
                  <div className="text-xs font-mono text-[var(--color-brass)] mb-4">
                    {service.number} // CAPABILITY
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-[var(--color-charcoal)] mb-2 group-hover:text-[var(--color-clay)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[var(--color-stone)] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--color-stone)]/20 flex items-center justify-between text-xs font-mono text-[var(--color-charcoal)]">
                  <span>{service.timeline}</span>
                  <Link
                    href="/services"
                    className="text-[var(--color-clay)] hover:underline flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Timeline */}
      <ProcessTimeline />

      {/* 6. Stats Band */}
      <StatsBand />

      {/* 7. Client Testimonials */}
      <TestimonialsSection />

      {/* 8. FAQ Section */}
      <FAQSection />

      {/* 9. Homepage Consultation CTA & Lead Form */}
      <section className="py-24 sm:py-32 bg-[var(--color-bone-warm)]/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
                Begin Your Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[var(--color-charcoal)] mb-6">
                Request a Design Consultation.
              </h2>
              <p className="text-sm text-[var(--color-stone)] leading-relaxed mb-8">
                Share your floor plans, project locality in Bengaluru, or architectural vision. Our principal architects will review your requirements and coordinate an on-site discovery session.
              </p>

              <div className="space-y-4 text-xs font-mono text-[var(--color-charcoal)]/80">
                <div className="p-4 bg-[var(--color-bone)] radius-arch border border-[var(--color-stone)]/20">
                  <div className="text-[var(--color-brass)] font-semibold uppercase mb-1">
                    Direct Phone / WhatsApp
                  </div>
                  <div>{studioInfo.contact.phone}</div>
                </div>
                <div className="p-4 bg-[var(--color-bone)] radius-arch border border-[var(--color-stone)]/20">
                  <div className="text-[var(--color-brass)] font-semibold uppercase mb-1">
                    Studio Location
                  </div>
                  <div>{studioInfo.location.address}, {studioInfo.location.city}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
