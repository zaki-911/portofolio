'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { personalData } from '@/data/personal';
import { educationData } from '@/data/education';
import { GraduationCap, Award, Compass, Lightbulb, ChevronRight, ArrowUpRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#09090D] border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Orpheus Section Header */}
        <div className="pb-6 mb-12 border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase mb-2">
            <span>[ 04 / PHILOSOPHY ]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>BACKGROUND &amp; IDENTITY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.12em] text-white uppercase">
            BEYOND THE CODE, <span className="text-gold-gradient">INTO THE POSSIBILITIES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Prose Narrative */}
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-typography-secondary font-sans leading-relaxed">
            {personalData.aboutStory.paragraphs.map((para, index) => (
              <p
                key={index}
                className="first-of-type:text-white first-of-type:text-base sm:first-of-type:text-lg first-of-type:font-medium leading-relaxed"
              >
                {para}
              </p>
            ))}

            {/* Core Values / Working Philosophy Callout in Gold Frame */}
            <div className="mt-8 p-6 sm:p-8 rounded-sm bg-[#0E0E14] border border-[#D4AF37]/30 relative overflow-hidden shadow-[0_8px_30px_rgba(212,175,55,0.08)]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/15 to-transparent pointer-events-none" />
              <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-[#C5A059] mb-2">
                <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
                <span>Analytical Rigor &amp; Practical Execution</span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-typography-primary leading-relaxed">
                I believe modern data and artificial intelligence are only as impactful as the practical clarity they bring. Whether architecting real-time computer vision networks, designing structured relational databases, or leading organizational operations, I strive for precision, reproducibility, and high engineering discipline.
              </p>
            </div>
          </div>

          {/* Right Column: Academic & Competency Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Highlight Card */}
            <div className="bg-[#0E0E14] rounded-sm p-6 sm:p-7 border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-sm bg-[#14141A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs px-2.5 py-1 rounded-sm bg-[#14141A] text-gold-300 border border-[#D4AF37]/40 font-bold">
                  GPA {educationData.gpa} / {educationData.gpaMax}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-1">
                {educationData.institution}
              </h3>
              <p className="text-xs font-mono text-[#C5A059] mb-3">
                {educationData.degree} ({educationData.period})
              </p>
              <p className="text-xs text-typography-secondary leading-relaxed">
                Specialized in deep learning computer vision research (attention mechanisms in YOLOv8) and distributed web architecture.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-sm bg-[#0E0E14] border border-[#D4AF37]/20">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] mb-1">
                  Location
                </div>
                <div className="font-serif text-base font-bold text-white">
                  Bandung, ID
                </div>
                <div className="text-[11px] text-typography-muted font-sans mt-0.5">
                  West Java, Indonesia
                </div>
              </div>

              <div className="p-5 rounded-sm bg-[#0E0E14] border border-[#D4AF37]/20">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] mb-1">
                  Status
                </div>
                <div className="font-serif text-base font-bold text-gold-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  Available
                </div>
                <div className="text-[11px] text-typography-muted font-sans mt-0.5">
                  Data &amp; AI Engineering Roles
                </div>
              </div>
            </div>

            {/* Direct Link to Selected Works */}
            <Link
              href="#projects"
              className="flex items-center justify-between p-4 rounded-sm bg-[#0E0E14] border border-[#D4AF37]/30 hover:border-[#D4AF37] group transition-all"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-typography-secondary group-hover:text-white">
                View Applied Engineering Artifacts
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
