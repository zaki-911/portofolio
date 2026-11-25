'use client';

import React from 'react';
import { personalData } from '@/data/personal';
import { Github, Linkedin, Mail, Instagram, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  variant?: 'icons-only' | 'cards';
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  instagram: Instagram,
};

export function SocialLinks({
  variant = 'icons-only',
  className,
}: SocialLinksProps) {
  if (variant === 'cards') {
    return (
      <div className={cn('grid grid-cols-1 sm:grid-cols-2 gap-3', className)}>
        {personalData.socials.map((social) => {
          const Icon = iconMap[social.icon] || Mail;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-3.5 rounded-sm bg-[#0E0E14] border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:bg-[#14141A] transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-sm bg-[#14141A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:text-white group-hover:border-[#D4AF37] transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059]">
                  {social.name}
                </div>
                <div className="text-xs font-mono text-typography-primary group-hover:text-white transition-colors truncate">
                  {social.handle}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {personalData.socials.map((social) => {
        const Icon = iconMap[social.icon] || Mail;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="w-9 h-9 rounded-sm bg-[#0E0E14] border border-[#D4AF37]/25 flex items-center justify-center text-typography-secondary hover:text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
}
