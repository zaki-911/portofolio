'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  number?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  badge,
  number,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={cn(
        'relative mb-12 sm:mb-16',
        isCentered ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl',
        className
      )}
    >
      {/* Top Tagline / Category / Number */}
      <div
        className={cn(
          'flex items-center gap-3 mb-3 text-xs sm:text-sm font-mono tracking-widest uppercase text-[#648CFF]',
          isCentered ? 'justify-center' : 'justify-start'
        )}
      >
        {number && (
          <span className="text-typography-muted font-normal">[{number}]</span>
        )}
        {badge && (
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#648CFF] animate-pulse" />
            {badge}
          </span>
        )}
      </div>

      {/* Primary Display Title */}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-typography-primary leading-tight">
        {title}
      </h2>

      {/* Optional Editorial Sub-Description */}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-typography-secondary font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
