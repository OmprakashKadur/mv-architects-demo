"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { HeroScene } from "./HeroScene";

export function HeroCanvas({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const [shouldRender3D, setShouldRender3D] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Check conditions for running 3D WebGL
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const lowHardware =
      typeof navigator !== "undefined" &&
      navigator.hardwareConcurrency &&
      navigator.hardwareConcurrency < 4;

    if (!isMobile && !prefersReducedMotion && !lowHardware) {
      // Delay WebGL canvas mount slightly so LCP DOM text paints first
      const timer = setTimeout(() => {
        setShouldRender3D(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isClient || !shouldRender3D) {
    return (
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 40%, rgba(244, 241, 236, 0.2) 0%, rgba(28, 26, 25, 0.4) 100%), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85')",
        }}
      >
        <div className="absolute inset-0 bg-[var(--color-bone)]/20 backdrop-blur-[2px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [0, 1.6, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <HeroScene scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
