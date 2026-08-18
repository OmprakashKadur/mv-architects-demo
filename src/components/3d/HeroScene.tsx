"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Float } from "@react-three/drei";
import * as THREE from "three";

export function HeroScene({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const { camera } = useThree();
  const roomGroupRef = useRef<THREE.Group>(null);
  const lampLightRef = useRef<THREE.PointLight>(null);

  // Animate camera and subtle scene rotation based on scroll & time
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Scroll progress camera interpolation: dolly forward and subtle orbit
    const targetZ = 5.2 - scrollProgress * 1.8;
    const targetY = 1.6 - scrollProgress * 0.4;
    const targetX = Math.sin(t * 0.15) * 0.2 + (scrollProgress * 0.5);

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.lookAt(0, 0.5, 0);

    // Subtle gentle float on scene
    if (roomGroupRef.current) {
      roomGroupRef.current.rotation.y = Math.sin(t * 0.1) * 0.03;
    }
  });

  return (
    <>
      {/* Lighting & Environment */}
      <ambientLight intensity={0.65} color="#F4F1EC" />

      {/* Main Architectural Window Sunlight */}
      <directionalLight
        position={[6, 8, 4]}
        intensity={1.8}
        color="#FFF4E0"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />

      {/* Warm Fill Light */}
      <directionalLight position={[-5, 4, -2]} intensity={0.4} color="#C9A227" />

      {/* Ambient Floor Lamp Glow */}
      <pointLight
        ref={lampLightRef}
        position={[-1.8, 1.8, -0.8]}
        intensity={1.2}
        distance={4}
        color="#FFA86B"
      />

      <group ref={roomGroupRef} position={[0, -0.6, 0]}>
        {/* Floor - Warm Teak Planks Material Simulation */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial
            color="#3A271D"
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>

        {/* Back Wall - Lime-wash Clay Texture */}
        <mesh receiveShadow position={[0, 2.5, -4]}>
          <planeGeometry args={[10, 5]} />
          <meshStandardMaterial
            color="#EAE5DC"
            roughness={0.9}
          />
        </mesh>

        {/* Left Side Wall with Window Aperture */}
        <mesh receiveShadow position={[-4, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[10, 5]} />
          <meshStandardMaterial
            color="#DFD8CD"
            roughness={0.9}
          />
        </mesh>

        {/* Window Frame on Left */}
        <group position={[-3.95, 2.5, 0]} rotation={[0, Math.PI / 2, 0]}>
          <mesh>
            <boxGeometry args={[3, 3.2, 0.08]} />
            <meshStandardMaterial color="#1C1A19" roughness={0.5} wireframe={false} />
          </mesh>
          {/* Glowing Window Light Pane */}
          <mesh position={[0, 0, 0.05]}>
            <planeGeometry args={[2.8, 3.0]} />
            <meshBasicMaterial color="#FFF9ED" transparent opacity={0.85} />
          </mesh>
        </group>

        {/* Architectural Modular Minimalist Sofa */}
        <group position={[0.2, 0.35, -1.2]}>
          {/* Main Seat Base */}
          <mesh castShadow receiveShadow position={[0, 0, 0]}>
            <boxGeometry args={[3.2, 0.45, 1.3]} />
            <meshStandardMaterial color="#D7D0C5" roughness={0.8} />
          </mesh>

          {/* Backrest */}
          <mesh castShadow receiveShadow position={[0, 0.5, -0.45]}>
            <boxGeometry args={[3.2, 0.65, 0.4]} />
            <meshStandardMaterial color="#CBC3B7" roughness={0.85} />
          </mesh>

          {/* Left Armrest */}
          <mesh castShadow receiveShadow position={[-1.65, 0.3, 0]}>
            <boxGeometry args={[0.35, 0.5, 1.3]} />
            <meshStandardMaterial color="#CBC3B7" roughness={0.85} />
          </mesh>

          {/* Bespoke Clay Accent Cushion */}
          <mesh castShadow position={[-1.1, 0.45, -0.2]} rotation={[0.1, 0.2, 0]}>
            <boxGeometry args={[0.55, 0.55, 0.2]} />
            <meshStandardMaterial color="#A8624A" roughness={0.7} />
          </mesh>

          {/* Brass Low Plinth */}
          <mesh position={[0, -0.26, 0]}>
            <boxGeometry args={[3.25, 0.08, 1.35]} />
            <meshStandardMaterial color="#C9A227" roughness={0.3} metalness={0.8} />
          </mesh>
        </group>

        {/* Low Monolithic Travertine Coffee Table */}
        <group position={[0.2, 0.18, 0.5]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.8, 0.22, 0.9]} />
            <meshStandardMaterial color="#E2DDD5" roughness={0.35} metalness={0.05} />
          </mesh>
          {/* Ceramic Decorative Bowl */}
          <mesh position={[-0.3, 0.16, 0]} castShadow>
            <cylinderGeometry args={[0.18, 0.1, 0.08, 24]} />
            <meshStandardMaterial color="#1C1A19" roughness={0.9} />
          </mesh>
        </group>

        {/* Architectural Brass Floor Lamp */}
        <group position={[-1.8, 0, -0.8]}>
          {/* Lamp Base */}
          <mesh position={[0, 0.04, 0]}>
            <cylinderGeometry args={[0.22, 0.22, 0.04, 32]} />
            <meshStandardMaterial color="#C9A227" roughness={0.25} metalness={0.85} />
          </mesh>
          {/* Slender Stem */}
          <mesh position={[0, 1.1, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 2.1, 16]} />
            <meshStandardMaterial color="#C9A227" roughness={0.25} metalness={0.85} />
          </mesh>
          {/* Conical Shade */}
          <mesh position={[0, 2.05, 0]} rotation={[0, 0, 0]}>
            <coneGeometry args={[0.3, 0.35, 32, 1, true]} />
            <meshStandardMaterial color="#F4F1EC" roughness={0.5} side={THREE.DoubleSide} />
          </mesh>
        </group>

        {/* Sculptural Biophilic Plant in Terracotta Planter */}
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.05}>
          <group position={[1.9, 0, -1.8]}>
            {/* Terracotta Pot */}
            <mesh castShadow position={[0, 0.35, 0]}>
              <cylinderGeometry args={[0.32, 0.24, 0.7, 32]} />
              <meshStandardMaterial color="#A8624A" roughness={0.85} />
            </mesh>
            {/* Foliage geometry */}
            <mesh castShadow position={[0, 0.95, 0]}>
              <dodecahedronGeometry args={[0.55, 1]} />
              <meshStandardMaterial color="#334B35" roughness={0.6} />
            </mesh>
            <mesh castShadow position={[0.15, 1.35, -0.1]}>
              <dodecahedronGeometry args={[0.4, 1]} />
              <meshStandardMaterial color="#415D43" roughness={0.6} />
            </mesh>
          </group>
        </Float>

        {/* Soft Contact Shadows on Floor */}
        <ContactShadows
          position={[0, 0.01, 0]}
          opacity={0.7}
          scale={10}
          blur={2.2}
          far={3.5}
          color="#1C1A19"
        />
      </group>
    </>
  );
}
