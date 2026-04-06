'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronRight } from 'lucide-react';
import ParticleBackground from '@/components/ui/ParticleBackground';
import GlowButton from '@/components/ui/GlowButton';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import StatsCounter from '@/components/ui/StatsCounter';
import ServiceCard from '@/components/cards/ServiceCard';
import IndustryCard from '@/components/cards/IndustryCard';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import TestimonialCard from '@/components/cards/TestimonialCard';
import ProcessStep from '@/components/cards/ProcessStep';
import ChatbotDemo from '@/components/home/ChatbotDemo';
import FooterCTA from '@/components/shared/FooterCTA';
import {
  serviceVerticals, industries, processSteps, caseStudies,
  testimonials, stats, trustLogos
} from '@/lib/data';

export default function HomePage() {
  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Particle background */}
        <ParticleBackground />

        {/* Gradient overlays */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Floating shapes */}
        <div className="floating-shape w-96 h-96 bg-[var(--color-accent-primary)] top-20 -left-48" style={{ animationDelay: '0s' }} />
        <div className="floating-shape w-72 h-72 bg-[var(--color-accent-secondary)] bottom-20 -right-36" style={{ animationDelay: '3s' }} />
        <div className="floating-shape w-56 h-56 bg-[var(--color-accent-cyan)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-[var(--color-text-secondary)]">
              Bangladesh&apos;s Premier Enterprise Consultancy
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            From{' '}
            <span className="gradient-text">AI to Investment</span>
            <br />
            We Build{' '}
            <span className="gradient-text-warm">Every Solution</span>
            <br />
            Your Business Needs.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-10"
          >
            Software. Legal. Finance. AI. Advisory. Operations.{' '}
            <span className="text-[var(--color-text-primary)] font-medium">One strategic partner.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <GlowButton href="/contact">
              Book Consultation <ArrowRight size={18} />
            </GlowButton>
            <GlowButton href="/services" variant="outline">
              Explore Services <ChevronRight size={18} />
            </GlowButton>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-[var(--color-text-muted)] flex items-start justify-center p-1"
            >
              <motion.div className="w-1.5 h-3 rounded-full bg-[var(--color-accent-primary)]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          TRUST BAR
          ============================================ */}
      <section className="py-12 border-y border-[var(--color-border-glass)] overflow-hidden bg-[var(--color-bg-secondary)]/50">
        <div className="max-w-7xl mx-auto px-4 mb-6">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Trusted by Leading Organizations
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="trust-bar-track">
            {[...trustLogos, ...trustLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-8 py-2 flex items-center justify-center"
              >
                <span className="text-lg font-bold text-[var(--color-text-muted)]/40 whitespace-nowrap" style={{ fontFamily: 'var(--font-heading)' }}>
                  {logo}
                </span>
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent z-10" />
        </div>
      </section>

      {/* ============================================
          SERVICES GRID
          ============================================ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Service Verticals"
            subtitle="Eight comprehensive pillars of expertise, each backed by deep domain knowledge and cutting-edge technology."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceVerticals.map((service, i) => (
              <ServiceCard
                key={service.id}
                title={service.shortTitle}
                description={service.description}
                icon={service.icon}
                color={service.color}
                href={service.href}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          STATS SECTION
          ============================================ */}
      <section className="py-20 border-y border-[var(--color-border-glass)] bg-[var(--color-bg-secondary)]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatsCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          INDUSTRIES
          ============================================ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient-alt" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Deep domain expertise across every major sector, from banking to healthcare, startups to government."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {industries.map((industry, i) => (
              <IndustryCard
                key={industry.name}
                name={industry.name}
                icon={industry.icon}
                color={industry.color}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          PROCESS TIMELINE
          ============================================ */}
      <section className="py-24 bg-[var(--color-bg-secondary)]/30 border-y border-[var(--color-border-glass)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Process"
            subtitle="A proven six-step methodology that transforms vision into operational excellence."
          />

          <div className="max-w-2xl mx-auto">
            {processSteps.map((step, i) => (
              <ProcessStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={i * 0.15}
                isLast={i === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CASE STUDIES
          ============================================ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Case Studies"
            subtitle="Real results from real enterprise projects. See how we deliver measurable business impact."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.slice(0, 4).map((study, i) => (
              <CaseStudyCard
                key={study.id}
                title={study.title}
                industry={study.industry}
                challenge={study.challenge}
                solution={study.solution}
                metrics={study.metrics}
                color={study.color}
                delay={i * 0.15}
              />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <GlowButton href="/case-studies" variant="outline">
              View All Case Studies <ArrowRight size={16} />
            </GlowButton>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================
          AI DEMO SECTION
          ============================================ */}
      <section className="py-24 bg-[var(--color-bg-secondary)]/30 border-y border-[var(--color-border-glass)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Experience Our{' '}
                <span className="gradient-text">AI Solutions</span>{' '}
                in Action
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Our AI-powered assistants handle everything from customer inquiries to complex enterprise consultations. Watch how our intelligent agents qualify leads, provide expert guidance, and drive conversions — 24/7.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Multilingual Bangla-English support',
                  'Intelligent lead qualification',
                  'Context-aware enterprise recommendations',
                  'Seamless CRM integration',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]"
                  >
                    <span className="w-5 h-5 rounded-full bg-[var(--color-accent-primary)]/20 flex items-center justify-center flex-shrink-0">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-accent-primary)]" />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
              <GlowButton href="/ai-solutions">
                Explore AI Solutions <ArrowRight size={16} />
              </GlowButton>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <ChatbotDemo />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS
          ============================================ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient-alt" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Client Testimonials"
            subtitle="What our enterprise clients say about working with A2Z Nexus Consultancy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                role={t.role}
                quote={t.quote}
                rating={t.rating}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FOOTER CTA
          ============================================ */}
      <FooterCTA />
    </>
  );
}
