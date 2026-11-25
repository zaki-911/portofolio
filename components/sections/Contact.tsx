'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { contactFormSchema, ContactFormData } from '@/lib/validations';
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, ArrowUpRight } from 'lucide-react';

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus('success');
        setStatusMessage(result.message || 'Thank you! Your message has been sent successfully.');
        reset();
      } else {
        setFormStatus('error');
        setStatusMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setFormStatus('error');
      setStatusMessage('Network error occurred. Please try again or email directly.');
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#09090D] border-t border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Orpheus Section Header */}
        <div className="pb-6 mb-12 border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase mb-2">
            <span>[ 08 / REACH OUT ]</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.12em] text-white uppercase">
            LET&apos;S CREATE <span className="text-gold-gradient">SOMETHING MEANINGFUL</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-typography-secondary font-sans max-w-2xl leading-relaxed">
            Have an opportunity, an interesting idea, or a project in mind? I&apos;d love to hear from you. Let&apos;s connect and explore how we can create something impactful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Channels & Context */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-bold text-white">
                Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-typography-secondary leading-relaxed font-sans">
                Whether you represent an AI research group, a tech company, or have an engineering challenge, feel free to reach out directly through social channels or the transmission form.
              </p>
            </div>

            {/* Social Channels with visual cards */}
            <SocialLinks variant="cards" />

            {/* Quick Availability Card */}
            <div className="p-6 rounded-sm bg-[#0E0E14] border border-[#D4AF37]/25 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C5A059]">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                Response Window
              </div>
              <p className="text-xs text-typography-secondary font-sans leading-relaxed">
                Typically active and responsive within 24 business hours (WIB / GMT+7, Bandung, Indonesia).
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#0E0E14] rounded-sm p-8 sm:p-10 border border-[#D4AF37]/35 relative shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
            {/* Corner Framing Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#D4AF37]/60" />

            <h3 className="font-serif text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <MessageSquare className="w-5 h-5 text-[#D4AF37]" />
              <span>Send a Direct Message</span>
            </h3>

            {/* Status Alerts */}
            {formStatus === 'success' && (
              <div className="mb-6 p-4 rounded-sm bg-green-500/10 border border-green-500/30 text-green-400 text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-green-400" />
                <span>{statusMessage}</span>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="mb-6 p-4 rounded-sm bg-red-500/10 border border-red-500/30 text-red-400 text-xs sm:text-sm flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                <span>{statusMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="fullName"
                  className="block text-[11px] font-mono uppercase tracking-wider text-typography-secondary"
                >
                  Full Name <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="e.g. Alex Henderson"
                  disabled={formStatus === 'loading'}
                  {...register('fullName')}
                  className="w-full px-4 py-3 rounded-sm bg-[#14141A] border border-[#D4AF37]/20 text-typography-primary placeholder:text-typography-muted text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                />
                {errors.fullName && (
                  <p className="text-xs text-red-400 font-mono mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-[11px] font-mono uppercase tracking-wider text-typography-secondary"
                >
                  Email Address <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  disabled={formStatus === 'loading'}
                  {...register('email')}
                  className="w-full px-4 py-3 rounded-sm bg-[#14141A] border border-[#D4AF37]/20 text-typography-primary placeholder:text-typography-muted text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                />
                {errors.email && (
                  <p className="text-xs text-red-400 font-mono mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="block text-[11px] font-mono uppercase tracking-wider text-typography-secondary"
                >
                  Subject <span className="text-[#D4AF37]">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project Collaboration / Data Science Opportunity"
                  disabled={formStatus === 'loading'}
                  {...register('subject')}
                  className="w-full px-4 py-3 rounded-sm bg-[#14141A] border border-[#D4AF37]/20 text-typography-primary placeholder:text-typography-muted text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                />
                {errors.subject && (
                  <p className="text-xs text-red-400 font-mono mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-[11px] font-mono uppercase tracking-wider text-typography-secondary"
                >
                  Message <span className="text-[#D4AF37]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project, timeline, or open role..."
                  disabled={formStatus === 'loading'}
                  {...register('message')}
                  className="w-full px-4 py-3 rounded-sm bg-[#14141A] border border-[#D4AF37]/20 text-typography-primary placeholder:text-typography-muted text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-red-400 font-mono mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button with Vibrant Solid Gold Styling */}
              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full py-3.5 px-6 rounded-sm bg-gradient-to-r from-[#F5D77F] via-[#D4AF37] to-[#B8860B] text-black font-mono font-bold text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:brightness-105 active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {formStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-black" />
                    <span>TRANSMITTING MESSAGE...</span>
                  </>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <Send className="w-4 h-4 text-black" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
