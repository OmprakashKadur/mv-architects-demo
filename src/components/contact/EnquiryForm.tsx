"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Send, MessageCircle, AlertCircle } from "lucide-react";
import { studioInfo } from "@/content/studio";

const enquirySchema = z.object({
  name: z.string().min(2, "Please provide your full name"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Please enter a valid email address"),
  propertyType: z.string().min(1, "Please select property type"),
  locality: z.string().min(2, "Please enter your project locality in Bengaluru"),
  areaSqFt: z.string().min(1, "Please specify approximate area in sq.ft."),
  budget: z.string().min(1, "Please select an estimated budget range"),
  message: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected"), // Anti-spam honeypot
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

export function EnquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<EnquiryFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      propertyType: "",
      locality: "",
      areaSqFt: "",
      budget: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    // Simulate server action / webhook delivery
    // TODO: Wire to Resend API / CRM Webhook when keys are provided
    console.log("MV Architects Lead Enquiry Payload:", data);

    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setSubmittedData(data);
    reset();
  };

  const getWhatsAppLinkWithData = (data: EnquiryFormData) => {
    const text = `Hello MV Architects, I just submitted an enquiry on your website:
- Name: ${data.name}
- Phone: ${data.phone}
- Property: ${data.propertyType} (${data.areaSqFt} sq.ft.)
- Locality: ${data.locality}
- Budget: ${data.budget}`;
    return `https://wa.me/${studioInfo.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  if (isSubmitted && submittedData) {
    return (
      <div className="bg-[var(--color-bone)] border border-[var(--color-clay)]/30 p-8 sm:p-12 radius-arch text-center shadow-lg animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-[var(--color-clay)]/10 text-[var(--color-clay)] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-[var(--color-charcoal)] mb-3">
          Consultation Request Received
        </h3>
        <p className="text-sm text-[var(--color-stone)] max-w-md mx-auto mb-8 leading-relaxed">
          Thank you, <span className="font-semibold text-[var(--color-charcoal)]">{submittedData.name}</span>. Our principal design team will review your project requirements for {submittedData.locality} and get in touch within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppLinkWithData(submittedData)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white text-xs font-mono uppercase tracking-wider font-semibold radius-arch hover:opacity-90 transition-opacity shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            <span>Fast-Track on WhatsApp</span>
          </a>
          <button
            onClick={() => setIsSubmitted(false)}
            className="w-full sm:w-auto px-6 py-3.5 border border-[var(--color-charcoal)]/30 text-[var(--color-charcoal)] text-xs font-mono uppercase tracking-wider radius-arch hover:bg-[var(--color-charcoal)] hover:text-[var(--color-bone)] transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[var(--color-bone)] border border-[var(--color-stone)]/20 p-6 sm:p-10 radius-arch shadow-sm space-y-6"
    >
      {/* Honeypot field (hidden from genuine users) */}
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-charcoal)] mb-2">
            Your Full Name *
          </label>
          <input
            type="text"
            placeholder="e.g. Anand Mahindra"
            {...register("name")}
            className="w-full px-4 py-3 bg-[var(--color-bone-warm)]/60 border border-[var(--color-stone)]/30 text-sm text-[var(--color-charcoal)] radius-arch focus:outline-none focus:border-[var(--color-clay)] transition-colors"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.name.message}</span>
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-charcoal)] mb-2">
            Indian Mobile (10 Digits) *
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-xs font-mono bg-[var(--color-stone)]/15 border border-r-0 border-[var(--color-stone)]/30 text-[var(--color-charcoal)]">
              +91
            </span>
            <input
              type="tel"
              placeholder="9876543210"
              maxLength={10}
              {...register("phone")}
              className="w-full px-4 py-3 bg-[var(--color-bone-warm)]/60 border border-[var(--color-stone)]/30 text-sm text-[var(--color-charcoal)] radius-arch focus:outline-none focus:border-[var(--color-clay)] transition-colors"
            />
          </div>
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone.message}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-charcoal)] mb-2">
            Email Address *
          </label>
          <input
            type="email"
            placeholder="anand@example.com"
            {...register("email")}
            className="w-full px-4 py-3 bg-[var(--color-bone-warm)]/60 border border-[var(--color-stone)]/30 text-sm text-[var(--color-charcoal)] radius-arch focus:outline-none focus:border-[var(--color-clay)] transition-colors"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email.message}</span>
            </p>
          )}
        </div>

        {/* Project Locality */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-charcoal)] mb-2">
            Project Locality in Bengaluru *
          </label>
          <input
            type="text"
            placeholder="e.g. Indiranagar, Whitefield, Lavelle Rd"
            {...register("locality")}
            className="w-full px-4 py-3 bg-[var(--color-bone-warm)]/60 border border-[var(--color-stone)]/30 text-sm text-[var(--color-charcoal)] radius-arch focus:outline-none focus:border-[var(--color-clay)] transition-colors"
          />
          {errors.locality && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.locality.message}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Property Type */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-charcoal)] mb-2">
            Property Type *
          </label>
          <select
            {...register("propertyType")}
            className="w-full px-4 py-3 bg-[var(--color-bone-warm)]/60 border border-[var(--color-stone)]/30 text-sm text-[var(--color-charcoal)] radius-arch focus:outline-none focus:border-[var(--color-clay)] transition-colors"
          >
            <option value="">Select Type</option>
            <option value="Apartment (3BHK / 4BHK)">Apartment (3BHK / 4BHK)</option>
            <option value="Penthouse / Duplex">Penthouse / Duplex</option>
            <option value="Independent Villa">Independent Villa</option>
            <option value="Commercial / Hospitality">Commercial / Hospitality</option>
            <option value="Modular Kitchen & Wardrobe">Modular Kitchen & Wardrobes</option>
          </select>
          {errors.propertyType && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.propertyType.message}</span>
            </p>
          )}
        </div>

        {/* Approximate Area */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-charcoal)] mb-2">
            Area (Sq. Ft.) *
          </label>
          <input
            type="text"
            placeholder="e.g. 3,200"
            {...register("areaSqFt")}
            className="w-full px-4 py-3 bg-[var(--color-bone-warm)]/60 border border-[var(--color-stone)]/30 text-sm text-[var(--color-charcoal)] radius-arch focus:outline-none focus:border-[var(--color-clay)] transition-colors"
          />
          {errors.areaSqFt && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.areaSqFt.message}</span>
            </p>
          )}
        </div>

        {/* Estimated Budget */}
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-charcoal)] mb-2">
            Target Budget *
          </label>
          <select
            {...register("budget")}
            className="w-full px-4 py-3 bg-[var(--color-bone-warm)]/60 border border-[var(--color-stone)]/30 text-sm text-[var(--color-charcoal)] radius-arch focus:outline-none focus:border-[var(--color-clay)] transition-colors"
          >
            <option value="">Select Range</option>
            <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs</option>
            <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
            <option value="₹1 Crore – ₹2.5 Crores">₹1 Crore – ₹2.5 Crores</option>
            <option value="₹2.5 Crores+">₹2.5 Crores+</option>
          </select>
          {errors.budget && (
            <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.budget.message}</span>
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-[var(--color-charcoal)] mb-2">
          Specific Requirements / Vision (Optional)
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your possession date, stylistic preferences, or architectural vision..."
          {...register("message")}
          className="w-full px-4 py-3 bg-[var(--color-bone-warm)]/60 border border-[var(--color-stone)]/30 text-sm text-[var(--color-charcoal)] radius-arch focus:outline-none focus:border-[var(--color-clay)] transition-colors resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 bg-[var(--color-charcoal)] text-[var(--color-bone)] text-xs font-mono uppercase tracking-widest hover:bg-[var(--color-clay)] transition-colors radius-arch flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
      >
        <span>{isSubmitting ? "Submitting Request..." : "Request Studio Design Consultation"}</span>
        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>

      <p className="text-[11px] text-center text-[var(--color-stone)] font-mono">
        Strict privacy guaranteed. We do not share your contact details with external vendors.
      </p>
    </form>
  );
}
