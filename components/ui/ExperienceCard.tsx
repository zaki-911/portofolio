'use client';

import React from 'react';
import { experiencesData, ExperienceItem } from '@/data/experiences';
import { Calendar, MapPin, CheckCircle2, ArrowUpRight, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ExperienceCard({
  experience,
  isLast = false,
}: {
  experience: ExperienceItem;
  isLast?: boolean;
}) {
  return (
    <div className="relative pl-7 sm:pl-10 group">
      {/* Vertical Timeline Track Line */}
      {!isLast && (
        <div className="absolute left-[9px] sm:left-[13px] top-6 bottom-0 w-[1px] bg-[#D4AF37]/20 group-hover:bg-[#D4AF37]/60 transition-colors duration-500" />
      )}

      {/* Timeline Node Dot */}
      <div className="absolute left-0 top-1.5 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#0E0E12] border border-[#D4AF37]/40 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.4)] transition-all duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:scale-125 transition-transform" />
      </div>

      {/* Main Experience Content Card */}
      <div className="bg-[#0E0E14] rounded-sm p-6 sm:p-7 border border-[#D4AF37]/25 hover:border-[#D4AF37]/70 transition-all duration-300 mb-8 sm:mb-10 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]">
        {/* Header Metadata */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-sm bg-[#14141A] text-gold-300 border border-[#D4AF37]/40">
              {experience.number}
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A059]">
              {experience.type}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-typography-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
              {experience.period}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-typography-muted" />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Role & Organization */}
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
          {experience.role}
        </h3>
        <div className="text-xs sm:text-sm font-mono text-gold-300 mb-5 flex items-center gap-2">
          <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
          {experience.company}
        </div>

        {/* Detailed Points */}
        <ul className="space-y-2.5 mb-6">
          {experience.descriptionPoints.map((point, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-typography-secondary leading-relaxed font-sans"
            >
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Technology / Competency Tags */}
        {experience.technologies && (
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#D4AF37]/15">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#14141A] text-typography-secondary border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
