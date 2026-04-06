'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  isLast?: boolean;
}

export default function ProcessStep({ step, title, description, icon: Icon, delay = 0, isLast = false }: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex gap-6 relative"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[27px] top-[60px] w-[2px] h-[calc(100%+1rem)] bg-gradient-to-b from-[var(--color-accent-primary)] to-transparent opacity-30" />
      )}

      {/* Step circle */}
      <div className="flex-shrink-0">
        <motion.div
          whileInView={{ scale: [0.5, 1.1, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="w-14 h-14 rounded-full flex items-center justify-center relative"
          style={{
            background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
          }}
        >
          <Icon size={22} className="text-white" />
          {/* Step number badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-accent-primary)] text-[10px] font-bold text-[var(--color-accent-primary)] flex items-center justify-center">
            {step}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="pb-10">
        <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          {title}
        </h3>
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
