'use client';

import React from 'react';
import { educationData } from '@/data/education';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative bg-[#070709] border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Orpheus Section Header */}
        <div className="pb-6 mb-12 border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase mb-2">
            <span>[ 05 / PEDIGREE ]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>FORMAL FOUNDATIONS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.12em] text-white uppercase">
            ACADEMIC <span className="text-gold-gradient">BACKGROUND</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Institution Editorial Box */}
          <div className="relative bg-[#0E0E14] rounded-sm p-8 sm:p-12 border border-[#D4AF37]/35 hover:border-[#D4AF37]/80 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Ambient Corner Flare */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#D4AF37]/15 to-transparent pointer-events-none" />

            {/* Corner Framing Markers */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] opacity-60" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] opacity-60" />

            {/* Header / Institution Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#D4AF37]/20">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-sm bg-[#14141A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="font-mono text-xs text-[#C5A059] uppercase tracking-wider">
                    {educationData.status}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {educationData.institution}
                  </h3>
                </div>
              </div>

              {/* GPA Display Pill */}
              <div className="flex flex-col sm:items-end">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-[#14141A] border border-[#D4AF37]/50 text-gold-300 font-mono text-sm font-bold shadow-[0_0_15px_rgba(212,175,55,0.25)]">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>GPA: {educationData.gpa} / {educationData.gpaMax}</span>
                </div>
                <span className="text-[11px] font-mono text-[#C5A059] mt-1">
                  High Academic Standing
                </span>
              </div>
            </div>

            {/* Degree & Location Row */}
            <div className="py-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm font-mono text-typography-secondary border-b border-[#D4AF37]/15">
              <div className="text-white font-serif font-bold text-base sm:text-lg">
                {educationData.degree}
              </div>
              <div className="flex items-center gap-2 text-typography-muted">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{educationData.period}</span>
              </div>
              <div className="flex items-center gap-2 text-typography-muted">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{educationData.location}</span>
              </div>
            </div>

            {/* Key Academic Research Highlights */}
            <div className="pt-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
                Key Academic Highlights &amp; Thesis
              </div>
              <ul className="space-y-3">
                {educationData.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-typography-secondary font-sans leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Coursework Badges */}
            <div className="pt-6 border-t border-[#D4AF37]/15 mt-6">
              <div className="text-xs font-mono uppercase tracking-widest text-[#C5A059] mb-3 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Relevant Coursework</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {educationData.coursework.map((course) => (
                  <span
                    key={course}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-sm bg-[#14141A] text-typography-secondary border border-white/5"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
