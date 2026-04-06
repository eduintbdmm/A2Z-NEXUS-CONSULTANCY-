'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  href: string;
  delay?: number;
}

export default function ServiceCard({ title, description, icon: Icon, color, href, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
    >
      <Link href={href} className="block h-full">
        <div className="glass-card p-8 h-full group cursor-pointer relative overflow-hidden">
          {/* Gradient overlay on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(ellipse at 50% 0%, ${color}15 0%, transparent 70%)`,
            }}
          />

          <div className="relative z-10">
            {/* Icon */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
              style={{
                background: `${color}15`,
                border: `1px solid ${color}30`,
              }}
            >
              <Icon size={28} style={{ color }} />
            </div>

            {/* Title */}
            <h3
              className="text-xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {title}
            </h3>

            {/* Description */}
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              {description}
            </p>

            {/* Arrow */}
            <div className="mt-5 flex items-center gap-2 text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0"
              style={{ color }}
            >
              Learn More
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
