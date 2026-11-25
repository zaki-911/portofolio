'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import * as THREE from 'three';
import { createAbstractSculpture } from './AbstractSculpture';
import { Sparkles, Box, Eye } from 'lucide-react';

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [viewMode, setViewMode] = useState<'sculpture' | 'webgl'>('sculpture');
  const [coords, setCoords] = useState({ x: 0.12, y: -0.08 });

  // 3D Three.js WebGL Interactive Scene
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let isWebGLSupported = false;
    try {
      const testCanvas = document.createElement('canvas');
      isWebGLSupported = !!(
        window.WebGLRenderingContext &&
        (testCanvas.getContext('webgl2') ||
          testCanvas.getContext('webgl') ||
          testCanvas.getContext('experimental-webgl'))
      );
    } catch {
      isWebGLSupported = false;
    }

    if (!isWebGLSupported) return;

    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    } catch (err) {
      console.warn('WebGL initialization skipped:', err);
      return;
    }

    // Golden & Obsidian Dramatic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xfff0c2, 0.75);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xd4af37, 2.8);
    goldKeyLight.position.set(5, 7, 5);
    scene.add(goldKeyLight);

    const goldFillLight = new THREE.PointLight(0xf5d77f, 2.5, 20);
    goldFillLight.position.set(-5, -4, 4);
    scene.add(goldFillLight);

    const coolRimLight = new THREE.PointLight(0x648cff, 1.8, 18);
    coolRimLight.position.set(4, 5, -3);
    scene.add(coolRimLight);

    // Sculpture & Gold Dust Particle Field
    const sculpture = createAbstractSculpture();
    scene.add(sculpture.group);
    scene.add(sculpture.particles);

    // Mouse Tracking Targets
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      const rect = container.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x;
      targetY = y;
      setCoords({ x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) });
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      sculpture.group.position.y = Math.sin(elapsedTime * 0.8) * 0.12;
      sculpture.knotMesh.rotation.x = mouseY * 0.35 + Math.sin(elapsedTime * 0.3) * 0.15;
      sculpture.knotMesh.rotation.y = mouseX * 0.45 + elapsedTime * 0.22;

      sculpture.innerMesh.rotation.z = elapsedTime * 0.15;
      sculpture.innerMesh.rotation.x = -elapsedTime * 0.1;

      sculpture.ring1.rotation.z = -elapsedTime * 0.08;
      sculpture.ring2.rotation.z = elapsedTime * 0.06;

      sculpture.particles.rotation.y = elapsedTime * 0.025;
      sculpture.particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('touchmove', onPointerMove);
      resizeObserver.disconnect();
      sculpture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[480px] lg:max-w-[540px] aspect-[4/5] mx-auto flex items-center justify-center select-none"
    >
      {/* Ambient Golden Radial Backlight */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[320px] sm:w-[440px] h-[320px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#D4AF37]/25 via-[#F5D77F]/10 to-transparent blur-[100px] animate-pulse-slow" />
      </div>

      {/* Primary Orpheus Luxury Gold Wireframe Frame */}
      <div className="absolute inset-0 sm:inset-3 border border-[#D4AF37]/50 rounded-sm pointer-events-none z-20 shadow-[0_0_25px_rgba(212,175,55,0.15)]">
        {/* Top-Right Offset Framing Line (Orpheus signature design detail) */}
        <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#D4AF37] opacity-80" />
        <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#D4AF37] opacity-80" />

        {/* Framing Corner Accents */}
        <div className="absolute top-2 left-2 text-[9px] font-mono tracking-widest text-[#D4AF37]/70 uppercase">
          [ SCULPT_ORPHEUS_V1 ]
        </div>
        <div className="absolute top-2 right-2 flex items-center gap-1.5 text-[9px] font-mono tracking-wider text-[#D4AF37]/80 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-ping" />
          ACTIVE
        </div>
        <div className="absolute bottom-2 left-2 text-[9px] font-mono text-[#D4AF37]/60 tracking-wider">
          ROT: [{coords.x}, {coords.y}]
        </div>
      </div>

      {/* Main Visual Display: Neoclassical Bust with Gold Skull OR Interactive Three.js WebGL */}
      <div className="relative w-full h-full overflow-hidden rounded-sm bg-[#0B0B0E]/90 flex items-center justify-center">
        {/* Mode A: Neoclassical Sculpture Masterpiece (Figma Orpheus Exact Match) */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            viewMode === 'sculpture' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          <Image
            src="/images/hero-sculpture.jpg"
            alt="Muhammad Zaki - Classical Sculpture with Golden Skull (Orpheus Inspiration)"
            fill
            sizes="(max-width: 768px) 100vw, 540px"
            className="object-cover object-center filter contrast-110 brightness-95"
            priority
          />
          {/* Subtle Vignette & Gold Rim Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070709]/60 via-transparent to-[#070709]/60 pointer-events-none" />
        </div>

        {/* Mode B: Live Three.js WebGL Interactive 3D Canvas */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            viewMode === 'webgl' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          />
        </div>
      </div>

      {/* Interactive Mode Switcher Pill */}
      <div className="absolute -bottom-5 z-30 flex items-center gap-1.5 p-1 rounded-full bg-[#14141A]/95 border border-[#D4AF37]/40 shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md">
        <button
          onClick={() => setViewMode('sculpture')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all ${
            viewMode === 'sculpture'
              ? 'bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] text-black font-semibold shadow-sm'
              : 'text-[#A1A1AA] hover:text-white'
          }`}
        >
          <Eye className="w-3 h-3" />
          Sculpture
        </button>
        <button
          onClick={() => setViewMode('webgl')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase transition-all ${
            viewMode === 'webgl'
              ? 'bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] text-black font-semibold shadow-sm'
              : 'text-[#A1A1AA] hover:text-white'
          }`}
        >
          <Box className="w-3 h-3" />
          3D WebGL
        </button>
      </div>
    </div>
  );
}
