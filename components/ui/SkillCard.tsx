'use client';

import React from 'react';
import { SkillCategory } from '@/data/skills';
import { cn } from '@/lib/utils';
import {
  Code,
  BarChart3,
  Brain,
  Cpu,
  Globe,
  Wrench,
  LucideIcon,
} from 'lucide-react';

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  'bar-chart-3': BarChart3,
  brain: Brain,
  cpu: Cpu,
  globe: Globe,
  wrench: Wrench,
};

export function SkillCard({ category, index }: SkillCardProps) {
  const IconComponent = iconMap[category.iconName] || Code;

  return (
    <div className="group relative bg-[#0E0E14] rounded-sm p-6 sm:p-7 border border-[#D4AF37]/25 hover:border-[#D4AF37]/70 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] flex flex-col justify-between">
      {/* Top Gold Corner Accents */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#D4AF37]/40" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#D4AF37]/40" />

      {/* Top Category Badge & Icon */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-sm bg-[#14141A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:text-white group-hover:border-[#D4AF37] transition-all duration-300">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="font-mono text-xs font-bold text-gold-300">
            0{index + 1}
          </span>
        </div>

        <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors duration-300">
          {category.name}
        </h3>
        <p className="text-xs text-typography-secondary leading-relaxed mb-5 font-sans">
          {category.shortDescription}
        </p>
      </div>

      {/* Interactive Tag List */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#D4AF37]/15">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-[11px] font-mono px-2.5 py-1 rounded-sm bg-[#14141A] text-typography-primary border border-white/5 hover:border-[#D4AF37]/40 hover:text-gold-300 transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
