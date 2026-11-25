'use client';

import React from 'react';
import Link from 'next/link';
import { personalData } from '@/data/personal';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070709] border-t border-[#D4AF37]/20 pt-16 pb-12 overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute inset-0 bg-radial-gradient-hero pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#D4AF37]/15">
          {/* Brand & Personal Statement */}
          <div className="md:col-span-6 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 font-serif text-2xl font-bold tracking-[0.2em] text-white uppercase"
            >
              <span>{personalData.logo}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
            </Link>
            <p className="text-sm font-sans text-typography-secondary max-w-md leading-relaxed">
              &ldquo;{personalData.tagline}&rdquo;
            </p>
            <p className="text-xs font-mono text-[#C5A059]">
              Based in {personalData.location}, {personalData.country}
            </p>
          </div>

          {/* Quick Section Directory */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A059]">
              Index
            </div>
            <ul className="space-y-2 text-xs font-mono tracking-wider">
              {['Works', 'Contribution', 'Skills', 'About', 'Education', 'Certifications'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section.toLowerCase()}`}
                    className="text-typography-secondary hover:text-gold-300 transition-colors uppercase"
                  >
                    {section}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A059]">
              Connect
            </div>
            <SocialLinks variant="icons-only" />
            <div className="pt-2">
              <a
                href={personalData.socials.find((s) => s.name === 'Email')?.url || '#'}
                className="text-xs font-mono text-typography-secondary hover:text-white transition-colors"
              >
                contact@muhammadzaki.dev
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-typography-muted">
          <div>
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </div>

          <div className="text-center sm:text-right">
            Designed &amp; Developed by <span className="text-gold-300 font-medium">{personalData.name}</span>.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-typography-secondary hover:text-white hover:border-[#D4AF37] px-3.5 py-1.5 rounded-sm bg-[#0E0E14] border border-[#D4AF37]/30 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <span className="text-[11px] uppercase tracking-wider font-mono">Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
