'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  delay?: number;
}

export default function TestimonialCard({ name, role, quote, rating, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="glass-card p-8 h-full flex flex-col"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[var(--color-text-secondary)] leading-relaxed flex-1 mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Person */}
      <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border-glass)]">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] flex items-center justify-center text-white font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-[var(--color-text-primary)]">{name}</div>
          <div className="text-xs text-[var(--color-text-muted)]">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}
