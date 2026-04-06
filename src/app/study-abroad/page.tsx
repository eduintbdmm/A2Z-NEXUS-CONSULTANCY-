'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Plane, FileText, Users, ArrowRight, CheckCircle, Globe } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlowButton from '@/components/ui/GlowButton';
import ProcessStep from '@/components/cards/ProcessStep';
import FooterCTA from '@/components/shared/FooterCTA';
import { studyCountries } from '@/lib/data';

const studyServices = [
  { title: 'University Admissions', description: 'Expert guidance on university selection, application strategy, and admission to top institutions worldwide.', icon: GraduationCap, color: '#6366f1' },
  { title: 'SOP & Essay Writing', description: 'Professional Statement of Purpose and essay writing that highlights your unique strengths and aspirations.', icon: FileText, color: '#8b5cf6' },
  { title: 'Scholarship Advisory', description: 'Identify and apply for merit-based, need-based, and specialized scholarships to fund your education.', icon: Award, color: '#f59e0b' },
  { title: 'Visa Guidance', description: 'Step-by-step visa application support with document preparation and interview coaching.', icon: Globe, color: '#06b6d4' },
  { title: 'Immigration Consultancy', description: 'Post-study immigration pathways, work permit guidance, and permanent residency advisory.', icon: Plane, color: '#10b981' },
  { title: 'Career Mapping', description: 'Strategic career planning aligned with your academic goals and global job market trends.', icon: Users, color: '#f43f5e' },
];

const applicationSteps = [
  { step: 1, title: 'Profile Assessment', description: 'We evaluate your academic background, test scores, and career goals to create a personalized strategy.', icon: Users },
  { step: 2, title: 'University Shortlisting', description: 'Data-driven selection of best-fit universities based on your profile, budget, and career aspirations.', icon: GraduationCap },
  { step: 3, title: 'Application Preparation', description: 'SOP writing, recommendation letters, resume building, and complete application package assembly.', icon: FileText },
  { step: 4, title: 'Submission & Tracking', description: 'Timely application submission, follow-up with admissions offices, and real-time status tracking.', icon: BookOpen },
  { step: 5, title: 'Visa & Pre-Departure', description: 'Visa application support, accommodation guidance, financial planning, and pre-departure briefings.', icon: Plane },
];

export default function StudyAbroadPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm font-semibold text-[var(--color-accent-rose)] mb-4 uppercase tracking-wider">Study Abroad</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Your Global Education{' '}
              <span className="gradient-text">Journey Starts Here</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Expert university admissions, scholarship advisory, visa guidance, and immigration support. We&apos;ve helped thousands of Bangladeshi students achieve their dream of studying abroad.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Country Cards */}
      <section className="py-24 bg-[var(--color-bg-secondary)]/30 border-y border-[var(--color-border-glass)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Study Destinations"
            subtitle="Access top universities across 8+ countries with our expert guidance."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {studyCountries.map((country, i) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 text-center cursor-pointer group"
              >
                <div className="text-4xl mb-3">{country.flag}</div>
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  {country.name}
                </h3>
                <div className="space-y-1">
                  <p className="text-xs text-[var(--color-accent-primary)]">{country.universities} Universities</p>
                  <p className="text-xs text-[var(--color-accent-emerald)]">{country.scholarships} Scholarships</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Study Abroad Services"
            subtitle="End-to-end support from admission to arrival — we handle everything."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyServices.map((svc, i) => {
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
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                    style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}30` }}
                  >
                    <Icon size={26} style={{ color: svc.color }} />
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

      {/* Application Process Timeline */}
      <section className="py-24 bg-[var(--color-bg-secondary)]/30 border-y border-[var(--color-border-glass)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Application Process"
            subtitle="Our streamlined 5-step process makes your study abroad journey smooth and stress-free."
          />
          <div className="max-w-2xl mx-auto">
            {applicationSteps.map((step, i) => (
              <ProcessStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
                delay={i * 0.15}
                isLast={i === applicationSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient-alt" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass-card p-10 md:p-14 text-center" style={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Student Success Numbers
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { value: '5,000+', label: 'Students Placed' },
                  { value: '89%', label: 'Acceptance Rate' },
                  { value: '50+', label: 'University Partners' },
                  { value: '8', label: 'Countries' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">{stat.label}</div>
                  </div>
                ))}
              </div>
              <GlowButton href="/contact">
                Start Your Application <ArrowRight size={16} />
              </GlowButton>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}
