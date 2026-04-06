'use client';

import { motion } from 'framer-motion';

interface CaseStudyCardProps {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: Array<{ label: string; value: string }>;
  color: string;
  delay?: number;
}

export default function CaseStudyCard({
  title, industry, challenge, solution, metrics, color, delay = 0
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card overflow-hidden group"
    >
      {/* Top gradient bar */}
      <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }} />

      <div className="p-8">
        {/* Industry tag */}
        <span
          className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
          style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
        >
          {industry}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          {title}
        </h3>

        {/* Challenge & Solution */}
        <div className="space-y-3 mb-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">Challenge</span>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">{challenge}</p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">Solution</span>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">{solution}</p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--color-border-glass)]">
          {metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ color, fontFamily: 'var(--font-heading)' }}>
                {metric.value}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
