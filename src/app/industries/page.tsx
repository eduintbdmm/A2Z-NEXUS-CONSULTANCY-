'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlowButton from '@/components/ui/GlowButton';
import FooterCTA from '@/components/shared/FooterCTA';
import { industries, serviceVerticals } from '@/lib/data';

export default function IndustriesPage() {
  const industryDetails = [
    {
      name: 'Banking & Finance',
      icon: industries[0].icon,
      color: '#6366f1',
      description: 'Digital banking systems, fintech platforms, payment gateways, stock analytics, and regulatory compliance solutions for financial institutions.',
      solutions: ['Core Banking Software', 'Payment Gateway Integration', 'Stock Analytics Platform', 'Loan Management System', 'AML Compliance Tools', 'Mobile Banking Apps'],
    },
    {
      name: 'Healthcare',
      icon: industries[3].icon,
      color: '#10b981',
      description: 'Hospital management ERP, patient portals, telemedicine platforms, and health data analytics for modern healthcare providers.',
      solutions: ['Hospital Management ERP', 'Patient Portal', 'Telemedicine Platform', 'Lab Management System', 'Pharmacy Management', 'Health Analytics Dashboard'],
    },
    {
      name: 'Education',
      icon: industries[2].icon,
      color: '#06b6d4',
      description: 'School and university ERP systems, e-learning platforms, admission management, and student performance analytics.',
      solutions: ['School/College ERP', 'E-Learning Platform', 'Admission Management', 'Student Analytics', 'Library Management', 'Fee Collection System'],
    },
    {
      name: 'Real Estate',
      icon: industries[4].icon,
      color: '#f59e0b',
      description: 'Property management platforms, CRM for realtors, virtual tour systems, and real estate investment analysis tools.',
      solutions: ['Property Listing Platform', 'CRM for Realtors', 'Virtual Tour System', 'Investment Analysis Tool', 'Tenant Management', 'Construction Tracking'],
    },
    {
      name: 'Manufacturing',
      icon: industries[5].icon,
      color: '#f43f5e',
      description: 'Supply chain management, inventory optimization, production tracking, and quality control automation for manufacturers.',
      solutions: ['Supply Chain Management', 'Inventory Optimization', 'Production Tracking', 'Quality Control System', 'Vendor Management', 'IoT Integration'],
    },
    {
      name: 'Government & Public Sector',
      icon: industries[1].icon,
      color: '#8b5cf6',
      description: 'E-governance platforms, citizen service portals, digital ID systems, and public service automation for government bodies.',
      solutions: ['E-Governance Portal', 'Citizen Service Platform', 'Digital ID System', 'Tax Management', 'Public Records System', 'Smart City Solutions'],
    },
    {
      name: 'Retail & eCommerce',
      icon: industries[6].icon,
      color: '#a855f7',
      description: 'eCommerce platforms, POS systems, inventory management, and customer analytics for modern retail businesses.',
      solutions: ['eCommerce Platform', 'POS System', 'Inventory Management', 'Customer Analytics', 'Loyalty Programs', 'Omnichannel Solutions'],
    },
    {
      name: 'Logistics & Export',
      icon: industries[9].icon,
      color: '#34d399',
      description: 'Fleet management, delivery tracking, warehouse management, and export documentation automation for logistics companies.',
      solutions: ['Fleet Management', 'Delivery Tracking', 'Warehouse Management', 'Export Documentation', 'Route Optimization', 'Customs Compliance'],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm font-semibold text-[var(--color-accent-primary)] mb-4 uppercase tracking-wider">Industry Solutions</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Solutions Tailored to{' '}
              <span className="gradient-text">Your Industry</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Deep domain expertise across every major sector. We don&apos;t just build software — we understand your industry&apos;s unique challenges and regulatory requirements.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {industryDetails.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: `${ind.color}15`, border: `1px solid ${ind.color}30` }}
                    >
                      <Icon size={32} style={{ color: ind.color }} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                      {ind.name}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">{ind.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      {ind.solutions.map((sol) => (
                        <div key={sol} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ind.color }} />
                          {sol}
                        </div>
                      ))}
                    </div>

                    <GlowButton href="/contact" variant="outline">
                      Discuss Requirements <ArrowRight size={16} />
                    </GlowButton>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
