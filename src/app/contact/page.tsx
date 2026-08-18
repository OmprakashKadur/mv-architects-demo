import React from "react";
import type { Metadata } from "next";
import { studioInfo } from "@/content/studio";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/common/Icons";

export const metadata: Metadata = {
  title: `Contact Studio — Interior Designers in ${studioInfo.location.city} | MV Architects`,
  description:
    `Get in touch with MV Architects & Interiors in ${studioInfo.location.locality}, ${studioInfo.location.city}. Request a bespoke interior design or architectural consultation.`,
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24 bg-[var(--color-bone)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
            Direct Studio Inquiry
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[var(--color-charcoal)] leading-tight mb-6">
            Begin Your Architectural Transformation.
          </h1>
          <p className="text-base text-[var(--color-stone)] leading-relaxed">
            Whether you are building a private villa or transforming a luxury apartment in Bengaluru, our principal architects are ready to evaluate your floor plan and spatial vision.
          </p>
        </div>

        {/* Main Grid: Form + Studio Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          {/* Form on Left/Main */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-2xl font-normal text-[var(--color-charcoal)] mb-6">
              Project Consultation Form
            </h2>
            <EnquiryForm />
          </div>

          {/* Contact Details & Info on Right */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[var(--color-bone-warm)]/50 p-8 radius-arch border border-[var(--color-stone)]/20 space-y-6">
              <h2 className="font-serif text-2xl font-normal text-[var(--color-charcoal)] border-b border-[var(--color-stone)]/20 pb-4">
                Studio Contact Details
              </h2>

              <div className="space-y-4 text-xs font-mono">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[var(--color-clay)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--color-stone)] block mb-1">Studio Address</span>
                    <span className="text-[var(--color-charcoal)] font-semibold leading-relaxed">
                      {studioInfo.location.address}, {studioInfo.location.city} – {studioInfo.location.pincode}, {studioInfo.location.state}
                    </span>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[var(--color-clay)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--color-stone)] block mb-1">Direct Phone</span>
                    <a
                      href={`tel:${studioInfo.contact.phoneFormatted}`}
                      className="text-[var(--color-charcoal)] font-semibold hover:text-[var(--color-clay)] transition-colors"
                    >
                      {studioInfo.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[var(--color-clay)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--color-stone)] block mb-1">Email Inquiries</span>
                    <a
                      href={`mailto:${studioInfo.contact.email}`}
                      className="text-[var(--color-charcoal)] font-semibold hover:text-[var(--color-clay)] transition-colors"
                    >
                      {studioInfo.contact.email}
                    </a>
                  </div>
                </div>

                {/* Studio Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[var(--color-brass)] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[var(--color-stone)] block mb-1">Studio Visiting Hours</span>
                    <span className="text-[var(--color-charcoal)] font-semibold block">
                      {studioInfo.contact.workingHours}
                    </span>
                    <span className="text-[var(--color-stone)]">{studioInfo.contact.workingDays}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-6 border-t border-[var(--color-stone)]/20">
                <a
                  href={studioInfo.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white text-xs font-mono uppercase tracking-wider font-semibold radius-arch hover:opacity-90 transition-opacity shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Social & Verification */}
            <div className="p-6 bg-[var(--color-charcoal)] text-[var(--color-bone)] radius-arch flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-brass)] block">
                  Follow Our Process
                </span>
                <span className="font-serif text-sm font-normal">
                  Daily On-Site Stories & Reels
                </span>
              </div>
              <a
                href={studioInfo.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-[var(--color-brass)] hover:underline"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{studioInfo.contact.instagram}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Google Map Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-2xl font-normal text-[var(--color-charcoal)]">
              Studio Location Map
            </h2>
            <a
              href={studioInfo.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[var(--color-clay)] hover:underline"
            >
              Open in Google Maps App →
            </a>
          </div>

          <div className="aspect-[21/9] w-full overflow-hidden radius-arch border border-[var(--color-stone)]/20 shadow-sm bg-[var(--color-bone-warm)]">
            <iframe
              src={studioInfo.location.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MV Architects Studio Location in Indiranagar, Bengaluru"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
