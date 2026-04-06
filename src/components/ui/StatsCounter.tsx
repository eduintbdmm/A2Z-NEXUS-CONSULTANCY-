'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatsCounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function StatsCounter({ value, suffix = '', label, delay = 0 }: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current * 10) / 10);
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  const displayValue = Number.isInteger(value) ? Math.floor(count) : count.toFixed(1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold gradient-text mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
        {displayValue}{suffix}
      </div>
      <div className="text-[var(--color-text-secondary)] text-sm uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
