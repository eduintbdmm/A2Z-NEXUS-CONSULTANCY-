'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bot, MessageSquare, Zap, BarChart3, Phone, FileText, Brain, Cpu } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlowButton from '@/components/ui/GlowButton';
import ChatbotDemo from '@/components/home/ChatbotDemo';
import FooterCTA from '@/components/shared/FooterCTA';

const aiUseCases = [
  { title: 'Customer Support AI', description: 'Intelligent chatbots that handle 80% of queries automatically with human handoff for complex issues.', icon: MessageSquare, color: '#6366f1' },
  { title: 'Sales AI Agents', description: 'Automated lead qualification, follow-up sequences, and personalized product recommendations.', icon: Zap, color: '#8b5cf6' },
  { title: 'Document Intelligence', description: 'AI-powered document processing, OCR, data extraction, and automated compliance checking.', icon: FileText, color: '#06b6d4' },
  { title: 'Predictive Analytics', description: 'Machine learning models for demand forecasting, risk assessment, and market trend analysis.', icon: BarChart3, color: '#10b981' },
  { title: 'Voice AI Assistants', description: 'Multilingual voice agents for call centers, IVR systems, and voice-commanded business operations.', icon: Phone, color: '#f59e0b' },
  { title: 'Workflow Automation', description: 'End-to-end business process automation using AI agents that learn and adapt to your operations.', icon: Cpu, color: '#f43f5e' },
];

const aiTechnologies = [
  'Natural Language Processing', 'Computer Vision', 'Large Language Models',
  'Reinforcement Learning', 'Neural Networks', 'Transfer Learning',
  'Sentiment Analysis', 'Speech Recognition', 'Generative AI',
  'Knowledge Graphs', 'Recommendation Engines', 'Time Series Forecasting',
];

export default function AISolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm font-semibold text-[var(--color-accent-secondary)] mb-4 uppercase tracking-wider">AI Solutions</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="gradient-text">Intelligent AI</span> That Transforms Business
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              From conversational AI agents to predictive analytics, our AI solutions automate operations, enhance decision-making, and create unfair competitive advantages for your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* AI Use Cases */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="AI Use Cases"
            subtitle="Practical AI applications that deliver measurable ROI from day one."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiUseCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{ background: `${uc.color}15`, border: `1px solid ${uc.color}30` }}
                  >
                    <Icon size={26} style={{ color: uc.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {uc.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{uc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-24 bg-[var(--color-bg-secondary)]/30 border-y border-[var(--color-border-glass)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="text-sm font-semibold text-[var(--color-accent-secondary)] uppercase tracking-wider">Live Demo</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Try Our <span className="gradient-text">AI Assistant</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Watch our enterprise AI assistant handle a real consultation inquiry. This is the same technology we deploy for our clients — intelligent, context-aware, and designed to convert.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { metric: '80%', label: 'Query Resolution Rate' },
                  { metric: '< 2s', label: 'Average Response Time' },
                  { metric: '24/7', label: 'Availability' },
                  { metric: '15+', label: 'Languages Supported' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-2xl font-bold gradient-text w-16" style={{ fontFamily: 'var(--font-heading)' }}>{item.metric}</span>
                    <span className="text-sm text-[var(--color-text-secondary)]">{item.label}</span>
                  </div>
                ))}
              </div>
              <GlowButton href="/contact">
                Deploy AI for Your Business <ArrowRight size={16} />
              </GlowButton>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <ChatbotDemo />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient-alt" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="AI Technologies We Use"
            subtitle="Cutting-edge AI and ML frameworks powering our enterprise solutions."
          />
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {aiTechnologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="glass-card px-5 py-3 text-sm text-[var(--color-text-secondary)] cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
