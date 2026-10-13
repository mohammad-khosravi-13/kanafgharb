"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Float,
  Stars,
  Sparkles,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Wrench, ArrowUpRight } from "lucide-react";
import * as THREE from "three";

/* ─────────────────────────────────────────────
   Realistic Earth
───────────────────────────────────────────── */
function Earth() {
  const earthRef = useRef(null);
  const cloudsRef = useRef(null);

  // NASA Blue Marble textures (CORS-safe)
  const [colorMap, bumpMap, cloudsMap] = useLoader(THREE.TextureLoader, [
    "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
    "https://unpkg.com/three-globe/example/img/earth-topology.png",
    "https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_clouds_1024.png",
  ]);

  // بهتر شدن کیفیت تکسچر
  colorMap.colorSpace = THREE.SRGBColorSpace;
  colorMap.anisotropy = 8;

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.04; // چرخش آرام زمین
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.055; // ابرها کمی سریع‌تر
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      {/* ===== Earth Surface ===== */}
      <mesh ref={earthRef} scale={2.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.05}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* ===== Clouds Layer ===== */}
      <mesh ref={cloudsRef} scale={2.23}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={cloudsMap}
          transparent
          opacity={0.4}
          depthWrite={false}
          roughness={1}
          metalness={0}
        />
      </mesh>

      {/* ===== Atmosphere Glow (Fresnel-like) ===== */}
      <mesh scale={2.35}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color="#4fc3f7"
          transparent
          opacity={0.12}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Soft outer atmosphere */}
      <mesh scale={2.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#81d4fa"
          transparent
          opacity={0.06}
          side={THREE.BackSide}
        />
      </mesh>
    </Float>
  );
}

/* ─────────────────────────────────────────────
   Scene
───────────────────────────────────────────── */
function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8.2], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      }}
    >
      <color attach="background" args={["#030712"]} />
      <fog attach="fog" args={["#030712", 14, 32]} />

      {/* Lighting – مثل نور خورشید */}
      <ambientLight intensity={0.25} />
      <directionalLight
        position={[5, 3, 5]}
        intensity={1.8}
        color="#ffffff"
      />
      <pointLight position={[-4, -2, -3]} intensity={0.4} color="#4fc3f7" />

      <Suspense fallback={null}>
        <Earth />

        <Sparkles
          count={80}
          scale={16}
          size={2}
          speed={0.3}
          opacity={0.5}
          color="#e0f2fe"
        />

        <Stars
          radius={100}
          depth={60}
          count={2200}
          factor={3.8}
          saturation={0}
          fade
          speed={0.4}
        />

        <Environment preset="night" />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        maxPolarAngle={Math.PI / 1.65}
        minPolarAngle={Math.PI / 2.5}
      />
    </Canvas>
  );
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function Home() {
  return (
    <main
      dir="ltr"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#030712] font-vazirmatn text-white selection:bg-blue-500/30"
    >
      {/* Atmospheric Layers */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0)_0%,#030712_70%)]" />

      {/* Soft large glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/12 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/8 blur-[100px]" />

      {/* 3D Canvas */}
      <div className="pointer-events-none absolute inset-0 opacity-95">
        <Scene />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center px-6 pb-20 pt-14 text-center">
        {/* Live Status Pill */}
        <div className="mb-9 flex items-center gap-3 rounded-full border border-blue-400/25 bg-blue-500/[0.07] px-6 py-2.5 shadow-[0_0_30px_rgba(59,130,246,0.15)] backdrop-blur-2xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          </span>
          <span className="text-[11px] font-semibold tracking-[0.22em] text-cyan-300 sm:text-xs">
            TEMPORARILY UNAVAILABLE
          </span>
        </div>

        {/* Icon */}
        <div className="mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_0_60px_rgba(59,130,246,0.18)] backdrop-blur-2xl">
          <Wrench size={28} strokeWidth={1.4} className="text-blue-400" />
        </div>

        {/* Heading */}
        <h1 className="mb-7 text-4xl font-black leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          We're Making
          <span className="mt-3 block bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-300 bg-clip-text pb-1 text-transparent drop-shadow-[0_0_30px_rgba(96,165,250,0.3)]">
            Things Better
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-md text-[15px] leading-8 text-slate-400/90 sm:text-base">
          Our website is temporarily unavailable while we perform
          maintenance and improvements. We'll be back soon with
          a significantly better experience.
        </p>

        {/* Divider */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400/60 to-blue-400/20" />
          <span className="text-[10px] font-medium tracking-[0.35em] text-slate-500">
            UNDER MAINTENANCE
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-blue-400/60 to-blue-400/20" />
        </div>

        {/* Thank you */}
        <p className="mt-6 text-xs tracking-wide text-slate-500 sm:text-sm">
          Thank you for your patience and understanding.
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 z-20 flex w-full items-center justify-center px-6 py-7">
        <a
          href="https://khosravideveloper.ir"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-xs tracking-wider text-slate-500 transition-all duration-300 hover:text-cyan-400"
        >
          <span>Development by Khosravi</span>
          <ArrowUpRight
            size={13}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </footer>

      {/* Bottom light line */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </main>
  );
}