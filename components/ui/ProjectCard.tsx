'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { ProjectItem } from '@/data/projects';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        'group relative bg-[#0D0D12] rounded-sm border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 overflow-hidden flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)]',
        className
      )}
    >
      {/* Top Image: Neoclassical Sculpture (Orpheus Reference Match) */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-[#070709] border-b border-[#D4AF37]/20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Ambient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent opacity-80" />

        {/* Gold Frame Corner Accents */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#D4AF37] opacity-60" />
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#D4AF37] opacity-60" />

        {/* Floating Number Badge & Category */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-sm bg-[#070709]/80 backdrop-blur-md text-gold-300 border border-[#D4AF37]/40">
            {project.number}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-typography-muted px-2 py-0.5 rounded-sm bg-[#070709]/80 backdrop-blur-md border border-white/5">
            {project.category.split('/')[0].trim()}
          </span>
        </div>

        {/* Hover Golden Glow Bottom Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Details Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-[11px] font-mono text-[#C5A059] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
            {project.category}
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-300 transition-colors duration-300 mb-2 leading-snug">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-typography-secondary font-sans leading-relaxed line-clamp-3 mb-4">
            {project.shortDescription}
          </p>
        </div>

        <div>
          {/* Tech Tag Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#14141A] text-typography-secondary border border-[#D4AF37]/15"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-[#14141A] text-[#C5A059] border border-[#D4AF37]/15">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Action Links */}
          <div className="pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium tracking-wider uppercase text-white hover:text-gold-300 transition-colors duration-200 group/link"
            >
              <span>VIEW DETAILS</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="text-typography-muted hover:text-gold-300 transition-colors p-1"
              >
                <Github className="w-4 h-4" />
              </a>
            ) : (
              <span className="text-[10px] font-mono text-typography-muted/50 uppercase tracking-wider">
                Institutional
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
