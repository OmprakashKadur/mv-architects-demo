"use client";

import React, { useState } from "react";
import { faqs } from "@/content/faq";
import { Plus, Minus, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-24 sm:py-32 bg-[var(--color-bone)] border-b border-[var(--color-stone)]/15">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column Header */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-widest text-[var(--color-clay)] uppercase block mb-3">
              Common Inquiries
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-[var(--color-charcoal)] mb-4">
              Frequently Asked Questions.
            </h2>
            <p className="text-sm text-[var(--color-stone)] leading-relaxed mb-6">
              Everything you need to know about our architectural fees, execution timelines, material authenticity, and turnkey guarantees.
            </p>
            <div className="p-4 bg-[var(--color-bone-warm)]/50 radius-arch border border-[var(--color-stone)]/20 text-xs text-[var(--color-charcoal)] flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-[var(--color-clay)] shrink-0 mt-0.5" />
              <span>
                Have a unique floor plan or customized requirement? Our studio is always open for direct consultations.
              </span>
            </div>
          </div>

          {/* Right Column Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[var(--color-bone-warm)]/30 border border-[var(--color-stone)]/20 radius-arch overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl font-normal text-[var(--color-charcoal)] pr-4">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[var(--color-bone)] border border-[var(--color-stone)]/30 flex items-center justify-center text-[var(--color-charcoal)] shrink-0 transition-transform">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[var(--color-stone)] leading-relaxed border-t border-[var(--color-stone)]/15">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
