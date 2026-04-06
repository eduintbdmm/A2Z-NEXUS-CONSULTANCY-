'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  name: string;
  icon: LucideIcon;
  color: string;
  delay?: number;
}

export default function IndustryCard({ name, icon: Icon, color, delay = 0 }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.08, y: -5 }}
      className="glass-card p-6 flex flex-col items-center gap-3 cursor-pointer group"
    >
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${color}15`,
          border: `1px solid ${color}25`,
        }}
      >
        <Icon size={30} style={{ color }} className="transition-transform duration-300 group-hover:rotate-6" />
      </div>
      <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors text-center">
        {name}
      </span>
    </motion.div>
  );
}
