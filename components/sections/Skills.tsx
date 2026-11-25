'use client';

import React, { useState } from 'react';
import { SkillCard } from '@/components/ui/SkillCard';
import { skillCategories } from '@/data/skills';
import { cn } from '@/lib/utils';

export function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredCategories =
    selectedFilter === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedFilter);

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-[#070709] border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Orpheus Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-10 border-b border-[#D4AF37]/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase mb-2">
              <span>[ 03 / CAPABILITIES ]</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>COMPETENCY SPECTRUM</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.12em] text-white uppercase">
              TECHNICAL <span className="text-gold-gradient">ARSENAL</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar select-none">
            <button
              onClick={() => setSelectedFilter('all')}
              className={cn(
                'px-3.5 py-1 rounded-sm text-[11px] font-mono whitespace-nowrap transition-all duration-200 border uppercase',
                selectedFilter === 'all'
                  ? 'bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] text-black font-bold border-[#D4AF37]'
                  : 'bg-[#14141A] text-typography-secondary border-white/5 hover:border-[#D4AF37]/30 hover:text-white'
              )}
            >
              ALL ({skillCategories.length})
            </button>

            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={cn(
                  'px-3.5 py-1 rounded-sm text-[11px] font-mono whitespace-nowrap transition-all duration-200 border uppercase',
                  selectedFilter === cat.id
                    ? 'bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] text-black font-bold border-[#D4AF37]'
                    : 'bg-[#14141A] text-typography-secondary border-white/5 hover:border-[#D4AF37]/30 hover:text-white'
                )}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>

        {/* Methodology Note */}
        <div className="mt-12 text-center border-t border-white/5 pt-6">
          <p className="text-xs font-mono text-typography-muted">
            * Practical capabilities verified through applied machine learning pipelines, production full-stack systems, and academic research.
          </p>
        </div>
      </div>
    </section>
  );
}
