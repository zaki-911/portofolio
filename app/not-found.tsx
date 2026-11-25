'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0B0D] px-4 py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#648CFF]/15 to-[#A78BFA]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-xl mx-auto text-center relative z-10 space-y-6">
        <div className="font-mono text-xs uppercase tracking-widest text-[#648CFF]">
          [Error 404]
        </div>

        <h1 className="font-heading text-6xl sm:text-8xl font-black text-white tracking-tight">
          404
        </h1>

        <h2 className="font-heading text-xl sm:text-2xl font-bold text-typography-primary">
          Page Not Found
        </h2>

        <p className="text-sm sm:text-base text-typography-secondary font-sans leading-relaxed">
          The requested coordinate or project record does not exist or has been relocated.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Button href="/" variant="primary" size="md" icon={Home} iconPosition="left">
            Return to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
