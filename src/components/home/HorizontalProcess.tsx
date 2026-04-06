'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Lightbulb, Rocket, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Consultation',
    subtitle: 'Free Strategy Call',
    description: 'We listen deeply to understand your business, challenges, and vision. A 30-minute call that sets the foundation for transformation.',
    icon: Phone,
    color: '#6366f1',
    features: ['Business Assessment', 'Pain Point Analysis', 'Goal Alignment'],
  },
  {
    step: 2,
    title: 'Strategy',
    subtitle: 'Custom Roadmap',
    description: 'Our experts craft a tailored strategic roadmap with clear milestones, technology choices, and measurable success criteria.',
    icon: Lightbulb,
    color: '#8b5cf6',
    features: ['Technical Blueprint', 'Cost Estimation', 'Timeline Planning'],
  },
  {
    step: 3,
    title: 'Execution',
    subtitle: 'Agile Delivery',
    description: 'Sprint-based development with weekly demos. You see progress continuously and can pivot based on real feedback.',
    icon: Rocket,
    color: '#06b6d4',
    features: ['Weekly Demos', 'Quality Assurance', 'Continuous Testing'],
  },
  {
    step: 4,
    title: 'Growth',
    subtitle: 'Scale & Optimize',
    description: 'Post-launch support, performance optimization, and strategic scaling. We grow with you as your long-term technology partner.',
    icon: TrendingUp,
    color: '#10b981',
    features: ['24/7 Monitoring', 'Performance Tuning', 'Scaling Support'],
  },
];

export default function HorizontalProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      {/* Desktop: Horizontal layout */}
      <div className="hidden md:block">
        <div className="relative max-w-6xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-[60px] left-[12%] right-[12%] h-[2px] z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full origin-left"
              style={{
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4, #10b981)',
              }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step circle */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="relative mb-6"
                  >
                    {/* Glow ring */}
                    <div
                      className="absolute inset-[-8px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle, ${step.color}30 0%, transparent 70%)`,
                      }}
                    />
                    <div
                      className="w-[120px] h-[120px] rounded-full flex items-center justify-center relative"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}15, ${step.color}05)`,
                        border: `2px solid ${step.color}40`,
                      }}
                    >
                      <Icon size={36} style={{ color: step.color }} />

                      {/* Step number badge */}
                      <div
                        className="absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: step.color }}
                      >
                        {step.step}
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3
                    className="text-xl font-bold text-[var(--color-text-primary)] mb-1"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: step.color }}>
                    {step.subtitle}
                  </span>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 max-w-[240px]">
                    {step.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {step.features.map((f) => (
                      <span
                        key={f}
                        className="text-[10px] px-2.5 py-1 rounded-full"
                        style={{
                          background: `${step.color}10`,
                          color: step.color,
                          border: `1px solid ${step.color}20`,
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Arrow connector (not on last) */}
                  {i < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 + 0.5 }}
                      className="hidden lg:block absolute top-[60px] right-0 translate-x-1/2"
                      style={{ left: `${(i + 1) * 25}%` }}
                    >
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical layout */}
      <div className="md:hidden max-w-sm mx-auto space-y-6">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-4 items-start"
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: `${step.color}15`,
                    border: `2px solid ${step.color}40`,
                  }}
                >
                  <Icon size={24} style={{ color: step.color }} />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-[2px] h-16 mt-2" style={{ background: `linear-gradient(to bottom, ${step.color}40, transparent)` }} />
                )}
              </div>
              <div className="pt-1 pb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: step.color }}>
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
