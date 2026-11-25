'use client';

import React, { useState } from 'react';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { projectsData } from '@/data/projects';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'ALL WORKS', value: 'all' },
    { label: 'AI & VISION', value: 'ai' },
    { label: 'FULL-STACK', value: 'web' },
    { label: 'EDTECH GAME', value: 'game' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'ai') return project.category.includes('Artificial Intelligence');
    if (activeCategory === 'web') return project.category.includes('Full-Stack');
    if (activeCategory === 'game') return project.category.includes('Game');
    return true;
  });

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#070709] border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Orpheus Section Header: "RECENT WORKS | VIEW MORE" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-10 border-b border-[#D4AF37]/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase mb-2">
              <span>[ 01 / ARTIFACTS ]</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>SELECTED PORTFOLIO</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.12em] text-white uppercase">
              RECENT <span className="text-gold-gradient">WORKS</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={cn(
                    'px-3 py-1 rounded-sm text-[11px] font-mono tracking-wider transition-all duration-200 border uppercase',
                    activeCategory === cat.value
                      ? 'bg-gradient-to-r from-[#F5D77F] to-[#D4AF37] text-black font-bold border-[#D4AF37] shadow-sm'
                      : 'bg-[#14141A] text-typography-secondary border-white/5 hover:border-[#D4AF37]/30 hover:text-white'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects 3-Column Showcase Grid (Exact Match to Figma Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-typography-muted">
          <span>* Each technical artifact includes architectural specifications, model benchmarks, and source code.</span>
          <a
            href="https://github.com/muhammad-zaki"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gold-300 hover:text-white transition-colors uppercase tracking-wider"
          >
            <span>EXPLORE REPOSITORIES ON GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
