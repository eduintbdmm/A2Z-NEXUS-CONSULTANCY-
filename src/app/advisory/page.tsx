'use client';

import { motion } from 'framer-motion';
import { Scale, TrendingUp, FileText, Building2, Shield, Globe, Landmark, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlowButton from '@/components/ui/GlowButton';
import FooterCTA from '@/components/shared/FooterCTA';

const legalServices = [
  { title: 'Corporate Legal Services', description: 'End-to-end corporate law support including company formation, restructuring, and compliance management.', icon: Building2 },
  { title: 'Contracts & Agreements', description: 'Drafting, reviewing, and negotiating commercial contracts, NDAs, SLAs, and partnership agreements.', icon: FileText },
  { title: 'IP & Trademark Advisory', description: 'Intellectual property protection, trademark registration, patent advisory, and brand safeguarding.', icon: Shield },
  { title: 'Tax & VAT Consultation', description: 'Expert tax planning, VAT compliance, transfer pricing advisory, and regulatory filing support.', icon: Scale },
  { title: 'Labor Law & HR Compliance', description: 'Employment contracts, labor dispute resolution, workplace policies, and compliance audits.', icon: Scale },
  { title: 'Regulatory Filings', description: 'Government compliance filings, RJSC documentation, environmental clearances, and industry licenses.', icon: FileText },
];

const investmentServices = [
  { title: 'Foreign Investor Onboarding', description: 'Complete guidance for foreign investors entering Bangladesh, from registration to operational setup.', icon: Globe },
  { title: 'BIDA Advisory', description: 'Bangladesh Investment Development Authority compliance, incentive applications, and liaison services.', icon: Landmark },
  { title: 'Feasibility Reports', description: 'Comprehensive market research, financial modeling, and investment feasibility analysis.', icon: TrendingUp },
  { title: 'Market Entry Strategy', description: 'Strategic planning for new market penetration including competitive analysis and go-to-market plans.', icon: TrendingUp },
  { title: 'M&A Advisory', description: 'Mergers, acquisitions, and joint venture advisory including due diligence and valuation support.', icon: Building2 },
  { title: 'Capital Raise Support', description: 'Investment deck preparation, investor matchmaking, and fundraising strategy for startups and SMEs.', icon: Landmark },
];

export default function AdvisoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm font-semibold text-[var(--color-accent-amber)] mb-4 uppercase tracking-wider">Advisory Services</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="gradient-text-warm">Legal & Investment</span> Advisory
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Navigate complex regulatory landscapes and investment decisions with confidence. Our expert legal and financial advisors provide strategic guidance for businesses of all sizes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Legal Services */}
      <section id="legal" className="py-24 relative">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Legal & Compliance Services"
            subtitle="Comprehensive legal advisory for corporate governance, compliance, and intellectual property protection."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {svc.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Investment Services */}
      <section id="investment" className="py-24 bg-[var(--color-bg-secondary)]/30 border-y border-[var(--color-border-glass)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Investment & Financial Advisory"
            subtitle="Strategic financial guidance for foreign investors, startups, and established enterprises entering or expanding in Bangladesh."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                    {svc.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{svc.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BIDA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient-alt" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass-card p-10 md:p-14 text-center" style={{ borderColor: 'rgba(16, 185, 129, 0.2)' }}>
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                <Landmark size={32} className="text-emerald-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                BIDA Advisory Services
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto leading-relaxed">
                Navigate the Bangladesh Investment Development Authority (BIDA) process with expert guidance. From initial application to operational licensing, we handle every step of your investment journey in Bangladesh.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-8">
                {[
                  'Investment Registration', 'Work Permit Processing',
                  'Visa Recommendation', 'Banking Approvals',
                  'Tax Exemption Applications', 'Land Use Clearance',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle size={16} className="text-emerald-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <GlowButton href="/contact">
                Schedule Legal Consultation <ArrowRight size={16} />
              </GlowButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
