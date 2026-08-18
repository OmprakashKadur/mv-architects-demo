import React from "react";
import Link from "next/link";
import { studioInfo } from "@/content/studio";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/common/Icons";

export function Footer() {
  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-bone)] pt-20 pb-28 md:pb-16 border-t border-[var(--color-stone)]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Big Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[var(--color-stone)]/20">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono tracking-widest text-[var(--color-brass)] uppercase block mb-4">
              Begin Your Living Transformation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight max-w-2xl">
              Let&apos;s sculpt a home that reflects your life.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-clay)] text-[var(--color-bone)] text-xs font-mono uppercase tracking-widest hover:bg-[var(--color-clay-light)] transition-colors radius-arch group shadow-lg"
            >
              <span>Book Design Consultation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Links & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">
          {/* Col 1: Studio Story & Manifesto */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-2xl font-bold uppercase tracking-tight mb-4">
              MV Architects
            </h3>
            <p className="text-sm text-[var(--color-stone)] leading-relaxed mb-6">
              {studioInfo.manifesto.line1} {studioInfo.manifesto.line2}
            </p>
            <div className="text-xs font-mono text-[var(--color-stone)]">
              Studio Practice est. 2012 • Bengaluru, India
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-brass)] mb-4">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[var(--color-stone)] font-mono">
              <li>
                <Link href="/projects" className="hover:text-[var(--color-bone)] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[var(--color-bone)] transition-colors">
                  Services & Scope
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[var(--color-bone)] transition-colors">
                  About Studio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[var(--color-bone)] transition-colors">
                  Design Journal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-bone)] transition-colors">
                  Contact & Maps
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Prime Localities */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-brass)] mb-4">
              Locations Served
            </h4>
            <ul className="space-y-2 text-xs text-[var(--color-stone)]">
              <li>• Indiranagar & Domlur</li>
              <li>• Koramangala & HSR Layout</li>
              <li>• Whitefield & Palm Meadows</li>
              <li>• Lavelle Road & Sadashivanagar</li>
              <li>• Sarjapur & Bellandur</li>
              <li>• Central Karnataka & Across India</li>
            </ul>
          </div>

          {/* Col 4: Studio Address & Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--color-brass)] mb-4">
              Studio Visit
            </h4>
            <div className="space-y-3 text-xs text-[var(--color-stone)]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-clay)] shrink-0 mt-0.5" />
                <span>{studioInfo.location.address}, {studioInfo.location.city} – {studioInfo.location.pincode}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[var(--color-clay)] shrink-0" />
                <a href={`tel:${studioInfo.contact.phoneFormatted}`} className="hover:text-[var(--color-bone)] transition-colors font-mono">
                  {studioInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[var(--color-clay)] shrink-0" />
                <a href={`mailto:${studioInfo.contact.email}`} className="hover:text-[var(--color-bone)] transition-colors font-mono">
                  {studioInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <InstagramIcon className="w-4 h-4 text-[var(--color-brass)] shrink-0" />
                <a
                  href={studioInfo.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-bone)] transition-colors font-mono"
                >
                  {studioInfo.contact.instagram}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-stone)]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--color-stone)]/70">
          <p>© {new Date().getFullYear()} {studioInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>RERA Compliant Architecture</span>
            <span className="text-[var(--color-brass)]">Built for Distinction</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
