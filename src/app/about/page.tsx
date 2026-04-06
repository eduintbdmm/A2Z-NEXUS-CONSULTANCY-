'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Globe, Shield, Zap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlowButton from '@/components/ui/GlowButton';
import FooterCTA from '@/components/shared/FooterCTA';
import { companyValues, milestones } from '@/lib/data';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm font-semibold text-[var(--color-accent-primary)] mb-4 uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              One Company.{' '}
              <span className="gradient-text">Every Solution.</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              A2Z Nexus Consultancy is Bangladesh&apos;s premier full-stack enterprise advisory firm. We combine deep technology expertise with strategic business consulting to deliver transformative solutions for organizations worldwide.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[var(--color-bg-secondary)]/30 border-y border-[var(--color-border-glass)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-sm font-semibold text-[var(--color-accent-primary)] uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Born in Dhaka.{' '}
                <span className="gradient-text">Built for the World.</span>
              </h2>
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between world-class enterprise solutions and the rapidly growing Bangladesh market, A2Z Nexus has evolved into a comprehensive consultancy powerhouse.
                </p>
                <p>
                  We recognized that businesses don&apos;t need multiple vendors — they need one strategic partner who understands the full spectrum of modern enterprise challenges. From AI-powered automation to legal compliance, from software architecture to investment advisory — we deliver it all under one roof.
                </p>
                <p>
                  Today, we serve 120+ enterprise clients across banking, healthcare, education, manufacturing, and government sectors, with a team of specialists who bring both local market expertise and global best practices.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '500+', label: 'Projects Delivered', color: '#6366f1' },
                  { value: '120+', label: 'Enterprise Clients', color: '#8b5cf6' },
                  { value: '8', label: 'Service Verticals', color: '#06b6d4' },
                  { value: '24/7', label: 'Support Coverage', color: '#10b981' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-6 text-center"
                  >
                    <div className="text-3xl font-bold mb-1" style={{ color: stat.color, fontFamily: 'var(--font-heading)' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that drive every solution we create and every relationship we build."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent-primary)]/10 border border-[var(--color-accent-primary)]/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={26} className="text-[var(--color-accent-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {value.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[var(--color-bg-secondary)]/30 border-y border-[var(--color-border-glass)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in the A2Z Nexus Consultancy story."
          />
          <div className="max-w-3xl mx-auto space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 relative"
              >
                {/* Timeline line */}
                {i < milestones.length - 1 && (
                  <div className="absolute left-[39px] top-[50px] w-[2px] h-full bg-gradient-to-b from-[var(--color-accent-primary)]/30 to-transparent" />
                )}

                <div className="flex-shrink-0 w-20 text-right pt-1">
                  <span className="text-sm font-bold text-[var(--color-accent-primary)]">{m.year}</span>
                </div>

                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[var(--color-accent-primary)] mt-2 ring-4 ring-[var(--color-accent-primary)]/20" />

                <div className="pb-10">
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    {m.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient-alt" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose A2Z Nexus?"
            subtitle="What sets us apart from traditional consultancies and software firms."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Full-stack expertise: Software + AI + Legal + Finance + Advisory',
              'Bangladesh market expertise with global delivery standards',
              'Dedicated project managers for every engagement',
              'Enterprise-grade security and compliance built-in',
              'Transparent pricing with no hidden costs',
              'Post-deployment support and continuous optimization',
              '10+ years combined leadership experience',
              'Proven track record across 8 industry verticals',
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 glass-card p-5"
              >
                <CheckCircle size={20} className="text-[var(--color-accent-emerald)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
