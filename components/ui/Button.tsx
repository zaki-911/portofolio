'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  isExternal?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon: Icon,
  iconPosition = 'right',
  isExternal = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-heading font-medium tracking-wide transition-all duration-300 rounded-full select-none focus:outline-none focus:ring-2 focus:ring-[#648CFF]/50 focus:ring-offset-2 focus:ring-offset-[#0B0B0D] disabled:opacity-50 disabled:pointer-events-none group';

  const variants = {
    primary:
      'bg-white text-[#0B0B0D] hover:bg-[#F5F5F5] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-[0.98]',
    secondary:
      'bg-[#18181D] text-typography-primary border border-white/10 hover:border-white/25 hover:bg-[#202027] active:scale-[0.98]',
    outline:
      'border border-white/15 text-typography-primary hover:border-[#648CFF] hover:text-[#648CFF] hover:bg-[#648CFF]/5 active:scale-[0.98]',
    ghost:
      'text-typography-secondary hover:text-typography-primary hover:bg-white/5 active:scale-[0.98]',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5',
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </button>
  );
}
