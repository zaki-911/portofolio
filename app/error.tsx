'use client';

import React, { useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { RotateCcw, Home } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0B0D] px-4 py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#648CFF]/15 to-[#A78BFA]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-xl mx-auto text-center relative z-10 space-y-6">
        <div className="font-mono text-xs uppercase tracking-widest text-[#FF6464]">
          [System Exception]
        </div>

        <h1 className="font-heading text-5xl sm:text-7xl font-black text-white tracking-tight">
          500
        </h1>

        <h2 className="font-heading text-xl sm:text-2xl font-bold text-typography-primary">
          Something went wrong
        </h2>

        <p className="text-sm sm:text-base text-typography-secondary font-sans leading-relaxed">
          An unexpected runtime error occurred. Please try again or return to the main portfolio.
        </p>

        <div className="pt-4 flex items-center justify-center gap-4">
          <Button onClick={() => reset()} variant="primary" size="md" icon={RotateCcw} iconPosition="left">
            Try Again
          </Button>
          <Button href="/" variant="secondary" size="md" icon={Home} iconPosition="left">
            Return to Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}
