"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import { PanoramaRoom, Hotspot } from "@/content/projects";
import { RotateCw, Maximize2, Info, Eye, Layers } from "lucide-react";

function SpherePanorama({
  imageUrl,
  hotspots,
  onHotspotClick,
  activeHotspotId,
}: {
  imageUrl: string;
  hotspots: Hotspot[];
  onHotspotClick: (hotspot: Hotspot) => void;
  activeHotspotId: string | null;
}) {
  const texture = useLoader(THREE.TextureLoader, imageUrl);
  texture.mapping = THREE.EquirectangularReflectionMapping;

  return (
    <group>
      {/* Inverted Sphere with Equirectangular Texture */}
      <mesh scale={[-1, 1, 1]}>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>

      {/* 3D Hotspot Markers with HTML Tooltips */}
      {hotspots.map((hs) => {
        const isSelected = activeHotspotId === hs.id;
        return (
          <group key={hs.id} position={hs.position}>
            <Html center distanceFactor={15}>
              <div className="relative group">
                <button
                  onClick={() => onHotspotClick(hs)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer ${
                    isSelected
                      ? "bg-[var(--color-clay)] text-[var(--color-bone)] scale-125 ring-4 ring-[var(--color-clay)]/30"
                      : "bg-[var(--color-charcoal)]/80 text-[var(--color-bone)] hover:bg-[var(--color-clay)] hover:scale-110 border border-[var(--color-bone)]/50"
                  }`}
                  aria-label={`View material specification for ${hs.title}`}
                >
                  <Info className="w-3.5 h-3.5" />
                </button>

                {/* Popover Card */}
                {isSelected && (
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 bg-[var(--color-charcoal)]/95 backdrop-blur-md text-[var(--color-bone)] p-4 radius-arch border border-[var(--color-brass)]/40 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-brass)] mb-1">
                      Material Spec
                    </div>
                    <h5 className="font-serif text-sm font-semibold mb-1">{hs.title}</h5>
                    <p className="text-xs text-[var(--color-stone)] mb-2 leading-relaxed">
                      {hs.description}
                    </p>
                    <div className="pt-2 border-t border-[var(--color-stone)]/20 flex flex-col gap-1 text-[11px] font-mono">
                      <div className="flex justify-between">
                        <span className="text-[var(--color-stone)]">Finish:</span>
                        <span className="text-[var(--color-bone)]">{hs.material}</span>
                      </div>
                      {hs.dimension && (
                        <div className="flex justify-between">
                          <span className="text-[var(--color-stone)]">Dimension:</span>
                          <span className="text-[var(--color-bone)]">{hs.dimension}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

export function PanoramaViewer({
  rooms,
  fallbackImage,
}: {
  rooms: PanoramaRoom[];
  fallbackImage: string;
}) {
  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<any>(null);

  const currentRoom = rooms[currentRoomIndex] || rooms[0];

  // Arrow key navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!controlsRef.current) return;
      setHasInteracted(true);
      const step = 0.08;
      if (e.key === "ArrowLeft") controlsRef.current.rotateLeft(step);
      if (e.key === "ArrowRight") controlsRef.current.rotateLeft(-step);
      if (e.key === "ArrowUp") controlsRef.current.rotateUp(step);
      if (e.key === "ArrowDown") controlsRef.current.rotateUp(-step);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  if (!rooms || rooms.length === 0) {
    return (
      <div className="relative aspect-video w-full overflow-hidden radius-arch border border-[var(--color-stone)]/20">
        <img
          src={fallbackImage}
          alt="Room perspective"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden radius-arch bg-[var(--color-charcoal)] border border-[var(--color-stone)]/30 select-none ${
        isFullscreen ? "fixed inset-0 z-[100] h-screen w-screen rounded-none" : "aspect-[16/9] min-h-[420px]"
      }`}
      tabIndex={0}
      role="region"
      aria-label="360 degree architectural panorama viewer"
    >
      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 0.1], fov: 75 }}
        onPointerDown={() => setHasInteracted(true)}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <SpherePanorama
            imageUrl={currentRoom.panoramaUrl}
            hotspots={currentRoom.hotspots}
            activeHotspotId={activeHotspot ? activeHotspot.id : null}
            onHotspotClick={(hs) => {
              setHasInteracted(true);
              setActiveHotspot(activeHotspot?.id === hs.id ? null : hs);
            }}
          />
          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={-0.4}
            autoRotate={!hasInteracted}
            autoRotateSpeed={0.3}
            dampingFactor={0.08}
            enableDamping
          />
        </Suspense>
      </Canvas>

      {/* Top Controls Overlay */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--color-charcoal)]/80 backdrop-blur-md text-[var(--color-bone)] text-xs font-mono radius-arch border border-[var(--color-stone)]/30 pointer-events-auto">
          <Eye className="w-3.5 h-3.5 text-[var(--color-brass)]" />
          <span>360° Walkthrough — {currentRoom.name}</span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setHasInteracted(false)}
            className="p-2 bg-[var(--color-charcoal)]/80 backdrop-blur-md text-[var(--color-bone)] hover:text-[var(--color-brass)] radius-arch border border-[var(--color-stone)]/30 text-xs flex items-center gap-1 font-mono transition-colors"
            title="Auto Rotate"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 bg-[var(--color-charcoal)]/80 backdrop-blur-md text-[var(--color-bone)] hover:text-[var(--color-brass)] radius-arch border border-[var(--color-stone)]/30 text-xs transition-colors"
            title="Toggle Fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Bottom Room Switcher & Navigation Guide */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-none">
        {/* Navigation instruction */}
        <div className="text-[11px] font-mono text-[var(--color-bone)]/70 bg-[var(--color-charcoal)]/80 px-3 py-1 radius-arch border border-[var(--color-stone)]/20 hidden sm:block">
          Drag to look around • Click ⓘ for materials • Arrow keys to rotate
        </div>

        {/* Room Switcher Tabs */}
        {rooms.length > 1 && (
          <div className="flex items-center gap-2 bg-[var(--color-charcoal)]/90 backdrop-blur-md p-1 radius-arch border border-[var(--color-stone)]/30 pointer-events-auto">
            <Layers className="w-3.5 h-3.5 text-[var(--color-brass)] ml-2 mr-1" />
            {rooms.map((room, idx) => (
              <button
                key={room.id}
                onClick={() => {
                  setCurrentRoomIndex(idx);
                  setActiveHotspot(null);
                }}
                className={`px-3 py-1 text-xs font-mono uppercase tracking-wider transition-all radius-arch ${
                  idx === currentRoomIndex
                    ? "bg-[var(--color-clay)] text-[var(--color-bone)] shadow"
                    : "text-[var(--color-bone)]/70 hover:text-[var(--color-bone)] hover:bg-[var(--color-bone)]/10"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
