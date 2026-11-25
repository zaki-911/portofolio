'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GoldenIsometricLatticeProps {
  className?: string;
  position?: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right';
}

export function GoldenIsometricLattice({
  className,
  position = 'top-right',
}: GoldenIsometricLatticeProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute z-0 select-none overflow-hidden transition-opacity duration-1000',
        position === 'top-right' && 'top-0 right-0 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px]',
        position === 'bottom-left' && 'bottom-0 left-0 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px]',
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-40 hover:opacity-60 transition-opacity"
      >
        <defs>
          <linearGradient id="goldLatticeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D77F" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#997A15" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="goldGlowGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Isometric Nested Hexagons / Cubes */}
        <g stroke="url(#goldLatticeGrad)" strokeWidth="1.2">
          {/* Main isometric cluster */}
          <path d="M350 40 L450 97.7 L450 213.2 L350 271 L250 213.2 L250 97.7 Z" />
          <path d="M350 40 L350 155.5 L450 213.2" />
          <path d="M350 155.5 L250 213.2" />

          {/* Secondary smaller isometric cube adjacent */}
          <path d="M250 97.7 L350 155.5 L350 271 L250 328.8 L150 271 L150 155.5 Z" />
          <path d="M250 97.7 L250 213.2 L350 271" />
          <path d="M250 213.2 L150 271" />

          {/* Tertiary outer geometric wireframe lines */}
          <path d="M450 97.7 L550 155.5 L550 271 L450 328.8 L350 271 L350 155.5 Z" opacity="0.6" />
          <path d="M350 271 L450 328.8 L450 444.3 L350 502 L250 444.3 L250 328.8 Z" opacity="0.4" />
          
          {/* Fine parallel isometric grid lines */}
          <line x1="300" y1="10" x2="520" y2="137" strokeWidth="0.8" opacity="0.5" />
          <line x1="280" y1="20" x2="500" y2="147" strokeWidth="0.8" opacity="0.5" />
          <line x1="260" y1="30" x2="480" y2="157" strokeWidth="0.8" opacity="0.5" />
          <line x1="240" y1="40" x2="460" y2="167" strokeWidth="0.8" opacity="0.5" />
          <line x1="220" y1="50" x2="440" y2="177" strokeWidth="0.8" opacity="0.5" />
          <line x1="200" y1="60" x2="420" y2="187" strokeWidth="0.8" opacity="0.5" />
          
          {/* Diagonal intersecting rays */}
          <line x1="450" y1="97.7" x2="150" y2="271" strokeDasharray="3 3" opacity="0.4" />
          <line x1="350" y1="40" x2="350" y2="500" strokeDasharray="2 4" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}
