'use client';

import React, { useState } from 'react';
import { certificationsData } from '@/data/certifications';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Certifications() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { label: 'ALL CREDENTIALS', value: 'all' },
    { label: 'AI & DATA', value: 'AI & Data' },
    { label: 'DEEP LEARNING', value: 'Deep Learning' },
    { label: 'DEVOPS', value: 'Software & DevOps' },
    { label: 'LEADERSHIP', value: 'Leadership' },
  ];

  const filtered =
    selectedFilter === 'all'
      ? certificationsData
      : certificationsData.filter((c) => c.category === selectedFilter);

  return (
    <section id="certifications" className="py-24 sm:py-32 relative bg-[#09090D] border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Orpheus Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-10 border-b border-[#D4AF37]/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase mb-2">
              <span>[ 06 / ACCREDITATIONS ]</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>CONTINUOUS MASTERY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.12em] text-white uppercase">
              LEARNING <span className="text-gold-gradient">NEVER STOPS</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedFilter(cat.value)}
                className={cn(
                  'px-3 py-1 rounded-sm text-[11px] font-mono tracking-wider transition-all duration-200 border uppercase',
                  selectedFilter === cat.value
                    ? 'bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] text-black font-bold border-[#D4AF37]'
                    : 'bg-[#14141A] text-typography-secondary border-white/5 hover:border-[#D4AF37]/30 hover:text-white'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((cert) => (
            <div
              key={cert.id}
              className="group bg-[#0E0E14] rounded-sm p-6 border border-[#D4AF37]/25 hover:border-[#D4AF37]/75 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Year */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#14141A] text-gold-300 border border-[#D4AF37]/30">
                    <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                    {cert.issuerShort}
                  </span>
                  <span className="font-mono text-xs text-typography-muted">
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-gold-300 transition-colors duration-200 mb-2 leading-snug">
                  {cert.title}
                </h3>
                <div className="text-xs text-[#C5A059] font-mono leading-relaxed mb-3">
                  {cert.issuer}
                </div>
                <p className="text-xs text-typography-secondary font-sans leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-6 border-t border-[#D4AF37]/15 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#D4AF37] flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-[#D4AF37]" />
                  {cert.verificationBadge}
                </span>

                <span className="text-[10px] font-mono text-typography-muted group-hover:text-white transition-colors uppercase tracking-wider">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
