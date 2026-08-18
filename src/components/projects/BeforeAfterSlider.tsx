"use client";

import React, { useState, useRef, useCallback } from "react";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeUrl: string;
  afterUrl: string;
  beforeLabel?: string;
  afterLabel?: string;
  description?: string;
}

export function BeforeAfterSlider({
  beforeUrl,
  afterUrl,
  beforeLabel = "Before Construction",
  afterLabel = "Completed Residence",
  description,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden radius-arch select-none cursor-ew-resize border border-[var(--color-stone)]/20"
      >
        {/* "After" Image (Full background) */}
        <img
          src={afterUrl}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* "Before" Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeUrl}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Divider Bar & Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[var(--color-bone)] shadow-xl pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div
            onMouseDown={handleMouseDown}
            onTouchStart={() => setIsDragging(true)}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-[var(--color-charcoal)] border-2 border-[var(--color-bone)] text-[var(--color-bone)] rounded-full flex items-center justify-center shadow-2xl pointer-events-auto cursor-grab active:cursor-grabbing hover:bg-[var(--color-clay)] transition-colors"
            aria-label="Drag to compare before and after photos"
          >
            <ChevronsLeftRight className="w-4 h-4" />
          </div>
        </div>

        {/* Floating Labels */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <span className="px-2.5 py-1 bg-[var(--color-charcoal)]/80 backdrop-blur-sm text-[var(--color-bone)] text-[10px] font-mono uppercase tracking-widest radius-arch">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4 pointer-events-none">
          <span className="px-2.5 py-1 bg-[var(--color-clay)]/90 backdrop-blur-sm text-[var(--color-bone)] text-[10px] font-mono uppercase tracking-widest radius-arch shadow">
            {afterLabel}
          </span>
        </div>
      </div>

      {description && (
        <p className="text-xs text-[var(--color-stone)] font-mono text-center">
          {description} (Slide across to view transformation)
        </p>
      )}
    </div>
  );
}
