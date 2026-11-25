'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react';
import { personalData } from '@/data/personal';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'WORKS', href: '#projects' },
  { name: 'CONTRIBUTION', href: '#experience' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'ABOUT', href: '#about' },
  { name: 'EDUCATION', href: '#education' },
  { name: 'GET IN TOUCH', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = ['hero', 'projects', 'experience', 'skills', 'about', 'education', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 lg:px-12',
        isScrolled
          ? 'py-3.5 bg-[#070709]/90 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo with Neoclassical Sculpture Icon */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-serif text-lg sm:text-xl font-bold tracking-[0.2em] text-white focus:outline-none"
        >
          {/* Neoclassical Bust Avatar Silhouette */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2A2A35] to-[#121216] border border-[#D4AF37]/50 flex items-center justify-center relative overflow-hidden group-hover:border-[#D4AF37] transition-colors shadow-[0_0_10px_rgba(212,175,55,0.2)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M12 2a5 5 0 0 0-5 5v3a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5Z" />
              <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
            </svg>
          </div>
          <span className="text-white group-hover:text-gold-300 transition-colors uppercase">
            {personalData.logo}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
        </Link>

        {/* Desktop Navigation Links (Orpheus uppercase spaced styling) */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => {
            const sectionTarget = item.href.replace('#', '');
            const isActive = activeSection === sectionTarget;

            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'text-[11px] font-mono tracking-[0.2em] uppercase transition-all duration-200 relative py-1',
                  isActive
                    ? 'text-gold-300 font-semibold'
                    : 'text-typography-secondary hover:text-white'
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          {/* Subtle Decorative Star/Gear Icon from Figma Reference */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-sm border border-[#D4AF37]/60 text-xs font-mono tracking-widest uppercase text-white hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] group"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 rounded-md bg-[#14141A] border border-[#D4AF37]/30 text-typography-secondary hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-gold-300" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-[#0E0E12]/98 backdrop-blur-2xl border border-[#D4AF37]/30 rounded-lg p-6 shadow-[0_10px_40px_rgba(0,0,0,0.9)] animate-in fade-in duration-200">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded text-xs font-mono tracking-widest text-typography-secondary hover:text-white hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5"
              >
                <span>{item.name}</span>
                <span className="text-[10px] text-gold-500 font-mono">
                  {item.href}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 flex items-center justify-center gap-2 rounded bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] text-black font-mono font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
