'use client';

import { ReactNode } from 'react';
import AnimatedSection from './AnimatedSection';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({ title, subtitle, centered = true, children }: SectionHeadingProps) {
  return (
    <AnimatedSection className={`mb-16 ${centered ? 'text-center' : ''}`}>
      <h2
        className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-6">
          {subtitle}
        </p>
      )}
      <div className="section-line" />
      {children}
    </AnimatedSection>
  );
}
