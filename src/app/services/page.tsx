'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlowButton from '@/components/ui/GlowButton';
import FooterCTA from '@/components/shared/FooterCTA';
import { serviceVerticals } from '@/lib/data';

function ServiceAccordion({ service, index }: { service: typeof serviceVerticals[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 cursor-pointer text-left"
      >
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
          >
            <Icon size={24} style={{ color: service.color }} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
              {service.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">{service.description}</p>
          </div>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={20} className="text-[var(--color-text-muted)]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-8 pb-8 pt-0">
              <div className="border-t border-[var(--color-border-glass)] pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {service.services.map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.color }} />
                      {s}
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6">
                  <GlowButton href="/contact">
                    Get a Quote <ArrowRight size={16} />
                  </GlowButton>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm font-semibold text-[var(--color-accent-primary)] mb-4 uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="gradient-text">Every Service</span> Your Business Needs
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              From custom software and AI automation to legal compliance and investment advisory — 8 comprehensive verticals, 100+ specialized services, one strategic partner.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {serviceVerticals.map((service, i) => (
            <ServiceAccordion key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-24 bg-[var(--color-bg-secondary)]/30 border-y border-[var(--color-border-glass)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Our Services Stand Out"
            subtitle="Enterprise-grade quality with startup agility."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Custom-Built Solutions',
                description: 'No templates, no shortcuts. Every solution is architected specifically for your business requirements and growth trajectory.',
                color: '#6366f1',
              },
              {
                title: 'Agile Delivery',
                description: 'Sprint-based development with weekly demos ensures you see progress continuously and can pivot based on real feedback.',
                color: '#8b5cf6',
              },
              {
                title: 'Post-Launch Support',
                description: '24/7 monitoring, maintenance, and optimization. We don\'t disappear after deployment — we\'re your long-term technology partner.',
                color: '#06b6d4',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-8 text-center"
              >
                <div className="w-12 h-12 rounded-xl mx-auto mb-5 flex items-center justify-center"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
