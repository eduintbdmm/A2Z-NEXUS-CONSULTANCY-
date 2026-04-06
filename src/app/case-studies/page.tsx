'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CaseStudyCard from '@/components/cards/CaseStudyCard';
import FooterCTA from '@/components/shared/FooterCTA';
import { caseStudies } from '@/lib/data';

const additionalCaseStudies = [
  {
    id: 'legal-automation',
    title: 'AI-Powered Legal Document Automation',
    industry: 'Legal Services',
    challenge: 'Law firm processing 500+ contracts monthly with 3-day turnaround and frequent human errors.',
    solution: 'Built AI legal drafting assistant with template intelligence, clause matching, and compliance verification.',
    metrics: [
      { label: 'Turnaround Time', value: '4 Hours' },
      { label: 'Error Reduction', value: '95%' },
      { label: 'Cost Savings', value: '$200K/yr' },
    ],
    color: '#f59e0b',
  },
  {
    id: 'ecommerce-scale',
    title: 'Multi-Vendor eCommerce Platform',
    industry: 'Retail & eCommerce',
    challenge: 'Retail group needed unified platform for 50+ vendors with real-time inventory sync and analytics.',
    solution: 'Architected scalable multi-vendor marketplace with AI-powered recommendations and real-time dashboards.',
    metrics: [
      { label: 'Vendors Onboarded', value: '50+' },
      { label: 'Revenue Growth', value: '+156%' },
      { label: 'Order Processing', value: '< 1s' },
    ],
    color: '#a855f7',
  },
  {
    id: 'cybersecurity-audit',
    title: 'Enterprise Cybersecurity Overhaul',
    industry: 'Banking & Finance',
    challenge: 'Regional bank with critical security vulnerabilities, no SOC, and failing compliance audits.',
    solution: 'Conducted full penetration testing, built SOC dashboard, implemented zero-trust architecture.',
    metrics: [
      { label: 'Vulnerabilities Fixed', value: '340+' },
      { label: 'Compliance Score', value: '98%' },
      { label: 'Incident Response', value: '< 15min' },
    ],
    color: '#ef4444',
  },
  {
    id: 'university-portal',
    title: 'Smart University Management System',
    industry: 'Education',
    challenge: 'University managing 15,000 students with paper-based processes and no digital student lifecycle management.',
    solution: 'Deployed comprehensive university ERP with student portal, faculty management, and automated grading.',
    metrics: [
      { label: 'Students Managed', value: '15K+' },
      { label: 'Admin Efficiency', value: '+80%' },
      { label: 'Paper Reduction', value: '95%' },
    ],
    color: '#06b6d4',
  },
];

const allCaseStudies = [...caseStudies, ...additionalCaseStudies];
const industries = ['All', ...new Set(allCaseStudies.map(c => c.industry))];

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? allCaseStudies : allCaseStudies.filter(c => c.industry === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm font-semibold text-[var(--color-accent-primary)] mb-4 uppercase tracking-wider">Case Studies</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Proven Results.{' '}
              <span className="gradient-text">Real Impact.</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Explore how we&apos;ve helped enterprises across industries achieve measurable business transformation through technology and strategic consulting.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Industry Filter */}
          <AnimatedSection className="flex flex-wrap gap-2 justify-center mb-12">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setFilter(ind)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  filter === ind
                    ? 'bg-[var(--color-accent-primary)] text-white'
                    : 'glass text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                {ind}
              </button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((study, i) => (
              <CaseStudyCard
                key={study.id}
                title={study.title}
                industry={study.industry}
                challenge={study.challenge}
                solution={study.solution}
                metrics={study.metrics}
                color={study.color}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
