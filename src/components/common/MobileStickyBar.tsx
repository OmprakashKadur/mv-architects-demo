"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { studioInfo } from "@/content/studio";

export function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-charcoal)]/95 backdrop-blur-md border-t border-[var(--color-stone)]/30 px-4 py-3 flex items-center gap-3">
      {/* Direct Call Button */}
      <a
        href={`tel:${studioInfo.contact.phoneFormatted}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[var(--color-bone)] text-[var(--color-charcoal)] text-xs font-mono uppercase tracking-wider font-semibold radius-arch active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-[var(--color-clay)]" />
        <span>Call Studio</span>
      </a>

      {/* Direct WhatsApp Button */}
      <a
        href={studioInfo.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-xs font-mono uppercase tracking-wider font-semibold radius-arch active:scale-95 transition-transform shadow-md"
      >
        <MessageCircle className="w-4 h-4 fill-white text-transparent" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
