'use client';

import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import GlowButton from '../ui/GlowButton';

export default function FooterCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-primary)]/10 via-[var(--color-accent-secondary)]/10 to-[var(--color-accent-cyan)]/10" />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <h2
            className="text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Need a Tailored{' '}
            <span className="gradient-text">Enterprise Solution?</span>
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
            Let&apos;s discuss how A2Z Nexus Consultancy can architect the perfect strategy, software, or AI solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GlowButton href="/contact">
              Book Strategy Call <ArrowRight size={18} />
            </GlowButton>
            <GlowButton href="/services" variant="outline">
              Explore Services
            </GlowButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
