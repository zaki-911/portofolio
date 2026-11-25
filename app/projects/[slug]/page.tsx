import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { projectsData } from '@/data/projects';
import { personalData } from '@/data/personal';
import {
  ArrowLeft,
  Calendar,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Github,
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | ${personalData.name}`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for continuous portfolio exploration
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <article className="pt-32 pb-24 bg-[#070709] min-h-screen relative overflow-hidden">
      {/* Ambient golden background glow */}
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#C5A059] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#D4AF37]" />
            <span>Back to All Works</span>
          </Link>
        </div>

        {/* Hero Header */}
        <header className="space-y-6 pb-10 border-b border-[#D4AF37]/20">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 rounded-sm bg-[#14141A] text-gold-300 border border-[#D4AF37]/40 font-bold">
              ARTIFACT {project.number}
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A059]">
              {project.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white uppercase leading-tight">
            {project.title}
          </h1>

          <p className="text-sm sm:text-lg text-typography-secondary font-sans leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-sm bg-[#14141A] text-typography-primary border border-[#D4AF37]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </header>

        {/* Visual Showcase: Orpheus Sculpture Artifact with Gold Wireframe Framing */}
        <div className="my-12 rounded-sm overflow-hidden bg-[#0D0D12] border border-[#D4AF37]/40 shadow-[0_10px_40px_rgba(0,0,0,0.8)] relative">
          {/* Gold Framing Accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37] z-20 opacity-80" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37] z-20 opacity-80" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37] z-20 opacity-80" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37] z-20 opacity-80" />

          <div className="relative w-full h-80 sm:h-[480px]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover object-center filter contrast-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-transparent to-transparent opacity-60" />
          </div>
        </div>

        {/* In-Depth Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-6">
          {/* Main Prose Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-white uppercase tracking-wider">
                System Overview
              </h2>
              <p className="text-sm sm:text-base text-typography-secondary font-sans leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            {/* Architecture Pipeline */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-white uppercase tracking-wider">
                Technical Architecture
              </h2>
              <div className="space-y-3">
                {project.architecture.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-sm bg-[#0E0E14] border border-[#D4AF37]/20 flex items-start gap-4"
                  >
                    <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-[#14141A] text-gold-300 border border-[#D4AF37]/30 shrink-0 font-bold mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-typography-secondary font-sans leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Engineering Highlights */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-white uppercase tracking-wider">
                Key Engineering Highlights
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-typography-secondary font-sans leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Engineering Challenges & Solutions */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#D4AF37]" />
                <span>Technical Challenges Addressed</span>
              </h2>
              <div className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-sm bg-[#0E0E14] border border-[#D4AF37]/20 text-xs sm:text-sm text-typography-secondary font-sans leading-relaxed"
                  >
                    {challenge}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Meta */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-sm bg-[#0E0E14] border border-[#D4AF37]/30 space-y-5">
              <h3 className="font-serif text-base font-bold text-white pb-3 border-b border-[#D4AF37]/15 uppercase tracking-wider">
                Project Metadata
              </h3>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] mb-1">
                  Discipline
                </div>
                <div className="text-xs font-medium text-white font-mono">
                  {project.category}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] mb-1">
                  Stack &amp; Frameworks
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#14141A] text-typography-secondary border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.githubUrl ? (
                <div className="pt-3 border-t border-[#D4AF37]/15">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium text-white hover:text-gold-300 transition-colors uppercase tracking-wider"
                  >
                    <Github className="w-4 h-4 text-[#D4AF37]" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <div className="pt-3 border-t border-[#D4AF37]/15 text-[11px] font-mono text-typography-muted">
                  Institutional / Proprietary Codebase
                </div>
              )}
            </div>

            {/* Next Project Teaser */}
            <div className="p-6 rounded-sm bg-[#0E0E14] border border-[#D4AF37]/25 space-y-3">
              <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059]">
                Next Selected Work
              </div>
              <h4 className="font-serif text-lg font-bold text-white">
                {nextProject.title}
              </h4>
              <p className="text-xs text-typography-secondary line-clamp-2">
                {nextProject.shortDescription}
              </p>
              <div className="pt-2">
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-gold-300 hover:text-white transition-colors"
                >
                  <span>Explore Project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
