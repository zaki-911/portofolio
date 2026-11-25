'use client';

import React from 'react';
import { ExperienceCard } from '@/components/ui/ExperienceCard';
import { experiencesData } from '@/data/experiences';
import { ArrowUpRight } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#0A0A0E] border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Orpheus Section Header: "CONTRIBUTION | VIEW MORE" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12 border-b border-[#D4AF37]/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase mb-2">
              <span>[ 02 / ROLES ]</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>TRACK RECORD</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.12em] text-white uppercase">
              CONTRIBUTION <span className="text-gold-gradient">&amp; IMPACT</span>
            </h2>
          </div>

          <div className="text-xs font-mono tracking-wider text-typography-muted">
            <span>PUBLIC SECTOR TECH • ACADEMIC LEADERSHIP</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiencesData.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              isLast={index === experiencesData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
