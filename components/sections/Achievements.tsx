'use client';

import React from 'react';
import { achievementsData } from '@/data/achievements';
import { BookMarked, Users, Award, CheckCircle2 } from 'lucide-react';

export function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 relative bg-[#070709] border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Orpheus Section Header */}
        <div className="pb-6 mb-12 border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase mb-2">
            <span>[ 07 / DISTINCTION ]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>ACADEMIC &amp; LEADERSHIP</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.12em] text-white uppercase">
            MILESTONES <span className="text-gold-gradient">THAT MATTER</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#0E0E14] rounded-sm p-8 border border-[#D4AF37]/30 hover:border-[#D4AF37]/80 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]"
            >
              <div>
                {/* Header Icon & Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-sm bg-[#14141A] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                    {item.type === 'Publication' ? (
                      <BookMarked className="w-6 h-6" />
                    ) : (
                      <Users className="w-6 h-6" />
                    )}
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-sm bg-[#14141A] text-gold-300 border border-[#D4AF37]/40 font-bold">
                    {item.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#C5A059] uppercase tracking-wider mb-2">
                  {item.venueOrContext}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="font-serif text-sm italic text-gold-300 mb-4">
                  &ldquo;{item.subtitle}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-typography-secondary font-sans leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {item.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-typography-secondary font-sans"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tag */}
              <div className="pt-5 mt-6 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs font-mono text-typography-muted">
                <span>{item.year}</span>
                <span className="text-[#C5A059] uppercase tracking-wider">Verified Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
