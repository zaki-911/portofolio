'use client';

import React from 'react';
import { HeroScene } from '@/components/three/HeroScene';
import { GoldenIsometricLattice } from '@/components/ui/GoldenIsometricLattice';
import { personalData } from '@/data/personal';
import { ChevronDown, Download, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#070709]"
    >
      {/* Golden Isometric Honeycomb Lattices in Corners (Exact Match to Figma Reference) */}
      <GoldenIsometricLattice position="top-right" />
      <GoldenIsometricLattice position="bottom-left" />

      {/* Ambient Vignette & Subtle Radial Golden Spotlight */}
      <div className="absolute inset-0 bg-radial-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Orpheus Editorial Typography & Story */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Editorial Serif Kicker (Reference: "YET THE STORY OF") */}
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="font-serif italic text-sm sm:text-base tracking-[0.25em] text-[#C5A059] uppercase">
                YET THE STORY OF
              </span>
              <span className="hidden sm:inline-block w-8 h-[1px] bg-[#D4AF37]/50" />
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[11px] font-mono text-typography-secondary">
                <MapPin className="w-3 h-3 text-[#D4AF37]" />
                {personalData.location}, {personalData.country}
              </span>
            </div>

            {/* Massive Display Title (Reference: "O R P H E U S" with Metallic Gold Gradient) */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-[0.18em] uppercase text-white leading-none">
                MUHAMMAD{' '}
                <span className="text-gold-gradient block sm:inline drop-shadow-[0_4px_15px_rgba(212,175,55,0.35)]">
                  ZAKI
                </span>
              </h1>

              {/* Tagline */}
              <p className="font-heading text-lg sm:text-xl text-typography-primary font-medium tracking-wide">
                &ldquo;{personalData.tagline}&rdquo;
              </p>
            </div>

            {/* Description (Reference: "Product & Graphic Designer, With Experience in Delivering...") */}
            <p className="text-sm sm:text-base text-typography-secondary font-sans leading-relaxed max-w-xl mx-auto lg:mx-0">
              {personalData.bio}
            </p>

            {/* Professional Roles Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              {personalData.roles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded text-xs font-mono bg-[#14141A] text-typography-primary border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-colors"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Action Buttons (Reference: "WORKS ˅" and Solid Gold Button) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              {/* Button 1: "WORKS ˅" with fine gold border */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border border-[#D4AF37]/60 text-xs font-mono font-medium tracking-[0.2em] uppercase text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)] group"
              >
                <span>WORKS</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* Button 2: Vibrant Solid Gold Metallic Button */}
              <a
                href={personalData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-sm bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] text-black font-mono font-bold text-xs tracking-[0.2em] uppercase shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] hover:brightness-105 active:scale-[0.98] transition-all duration-300"
              >
                <Download className="w-3.5 h-3.5 text-black" />
                <span>DOWNLOAD CV</span>
              </a>

              {/* Button 3: Secondary Contact Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-typography-muted hover:text-gold-300 transition-colors py-2 px-2"
              >
                <span>LET&apos;S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Framed Neoclassical 3D Sculpture Experience */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroScene />
          </div>
        </div>

        {/* Bottom Metric Strip (Orpheus Asymmetric Grid with Gold Accents) */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-[#D4AF37]/20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalData.metrics.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-white flex items-baseline gap-1">
                <span className="text-gold-gradient">{metric.value}</span>
              </div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#C5A059]">
                {metric.label}
              </div>
              <p className="text-xs text-typography-muted font-sans line-clamp-1">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
