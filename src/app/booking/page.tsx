'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, ArrowLeft, CheckCircle, User, Building2, Briefcase,
  DollarSign, Calendar, MessageSquare, Send, Sparkles
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';

const serviceOptions = [
  { id: 'software', label: 'Software Development', color: '#6366f1' },
  { id: 'ai', label: 'AI & Automation', color: '#8b5cf6' },
  { id: 'legal', label: 'Legal Advisory', color: '#f59e0b' },
  { id: 'investment', label: 'Investment Consulting', color: '#10b981' },
  { id: 'banking', label: 'Banking & Fintech', color: '#06b6d4' },
  { id: 'study', label: 'Study Abroad', color: '#f43f5e' },
  { id: 'cyber', label: 'Cybersecurity', color: '#ef4444' },
  { id: 'management', label: 'Business Consulting', color: '#a855f7' },
];

const budgetRanges = [
  '$1,000 – $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000+',
  'Not sure yet',
];

const timelineOptions = [
  'Urgent (< 2 weeks)',
  'Short (2–4 weeks)',
  'Standard (1–3 months)',
  'Long-term (3–6 months)',
  'Ongoing / Retainer',
  'Flexible',
];

const steps = [
  { label: 'Service', icon: Briefcase },
  { label: 'Details', icon: User },
  { label: 'Budget', icon: DollarSign },
  { label: 'Schedule', icon: Calendar },
  { label: 'Submit', icon: Send },
];

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    services: [] as string[],
    name: '', email: '', phone: '', company: '', industry: '',
    budget: '', timeline: '',
    message: '', preferredDate: '', preferredTime: '',
  });

  const toggleService = (id: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(id)
        ? prev.services.filter(s => s !== id)
        : [...prev.services, id],
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0: return formData.services.length > 0;
      case 1: return formData.name && formData.email;
      case 2: return formData.budget !== '';
      case 3: return true;
      case 4: return true;
      default: return true;
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-block text-sm font-semibold text-[var(--color-accent-primary)] mb-4 uppercase tracking-wider">Book a Consultation</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Start Your <span className="gradient-text">Transformation</span>
            </h1>
            <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Tell us about your project in 4 simple steps. Our team will respond within 24 hours with a custom strategy proposal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Multi-Step Form */}
      <section className="py-12 relative">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6"
              >
                <Sparkles size={40} className="text-emerald-400" />
              </motion.div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                Consultation Booked! 🎉
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-4 max-w-md mx-auto">
                Thank you, {formData.name}! Our solutions architect will review your requirements and reach out within 24 hours to schedule your free strategy call.
              </p>
              <div className="glass p-4 rounded-xl inline-block">
                <p className="text-xs text-[var(--color-text-muted)]">Selected Services</p>
                <div className="flex flex-wrap gap-2 mt-2 justify-center">
                  {formData.services.map(s => {
                    const svc = serviceOptions.find(o => o.id === s);
                    return svc ? (
                      <span key={s} className="text-xs px-3 py-1 rounded-full" style={{ background: `${svc.color}20`, color: svc.color, border: `1px solid ${svc.color}30` }}>
                        {svc.label}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            </motion.div>
          ) : (
            <>
              {/* Step Indicator */}
              <div className="flex items-center justify-center gap-1 mb-10">
                {steps.map((s, i) => {
                  const Icon = s.icon;
                  const isActive = i === currentStep;
                  const isDone = i < currentStep;
                  return (
                    <div key={s.label} className="flex items-center">
                      <motion.div
                        animate={{
                          scale: isActive ? 1.1 : 1,
                          background: isDone ? '#6366f1' : isActive ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.04)',
                        }}
                        className="w-10 h-10 rounded-full flex items-center justify-center border transition-colors"
                        style={{
                          borderColor: isDone || isActive ? '#6366f180' : 'rgba(255,255,255,0.08)',
                        }}
                      >
                        {isDone ? (
                          <CheckCircle size={18} className="text-white" />
                        ) : (
                          <Icon size={16} className={isActive ? 'text-[var(--color-accent-primary)]' : 'text-[var(--color-text-muted)]'} />
                        )}
                      </motion.div>
                      {i < steps.length - 1 && (
                        <div className="w-8 md:w-16 h-[2px] mx-1" style={{ background: isDone ? '#6366f1' : 'rgba(255,255,255,0.08)' }} />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Step Content */}
              <div className="glass-card p-8 md:p-10 min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Step 1: Service Selection */}
                    {currentStep === 0 && (
                      <div>
                        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                          What services are you interested in?
                        </h2>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-6">Select one or more services. Don&apos;t worry — you can discuss details later.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {serviceOptions.map((svc) => {
                            const selected = formData.services.includes(svc.id);
                            return (
                              <motion.button
                                key={svc.id}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => toggleService(svc.id)}
                                className={`p-4 rounded-xl text-left text-sm font-medium transition-all cursor-pointer ${
                                  selected ? 'ring-2' : 'glass'
                                }`}
                                style={{
                                  background: selected ? `${svc.color}15` : undefined,
                                  borderColor: selected ? `${svc.color}50` : undefined,
                                  color: selected ? svc.color : 'var(--color-text-secondary)',
                                  ringColor: selected ? svc.color : undefined,
                                }}
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${svc.color}20` }}>
                                    {selected ? <CheckCircle size={16} style={{ color: svc.color }} /> : <div className="w-2 h-2 rounded-full" style={{ background: svc.color }} />}
                                  </div>
                                  {svc.label}
                                </div>
                              </motion.button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Contact Details */}
                    {currentStep === 1 && (
                      <div>
                        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                          Tell us about yourself
                        </h2>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-6">Your details help us prepare a personalized consultation.</p>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Full Name *</label>
                              <input type="text" required value={formData.name}
                                onChange={e => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors"
                                placeholder="Your full name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Email *</label>
                              <input type="email" required value={formData.email}
                                onChange={e => setFormData({...formData, email: e.target.value})}
                                className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors"
                                placeholder="your@email.com"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Phone</label>
                              <input type="tel" value={formData.phone}
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                                className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors"
                                placeholder="+880 1700-000000"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Company</label>
                              <input type="text" value={formData.company}
                                onChange={e => setFormData({...formData, company: e.target.value})}
                                className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors"
                                placeholder="Your company"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Industry</label>
                            <input type="text" value={formData.industry}
                              onChange={e => setFormData({...formData, industry: e.target.value})}
                              className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors"
                              placeholder="e.g., Healthcare, Banking, Education..."
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Budget & Timeline */}
                    {currentStep === 2 && (
                      <div>
                        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                          Budget & Timeline
                        </h2>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-6">This helps us match you with the right team and scope.</p>
                        
                        <div className="mb-8">
                          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-3">Estimated Budget (USD)</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {budgetRanges.map(b => (
                              <motion.button
                                key={b}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setFormData({...formData, budget: b})}
                                className={`p-3 rounded-xl text-sm text-center cursor-pointer transition-all ${
                                  formData.budget === b
                                    ? 'bg-[var(--color-accent-primary)]/15 border-[var(--color-accent-primary)]/50 text-[var(--color-accent-primary)] ring-2 ring-[var(--color-accent-primary)]/30'
                                    : 'glass text-[var(--color-text-secondary)]'
                                }`}
                              >
                                {b}
                              </motion.button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-3">Timeline</label>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {timelineOptions.map(t => (
                              <motion.button
                                key={t}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setFormData({...formData, timeline: t})}
                                className={`p-3 rounded-xl text-sm text-center cursor-pointer transition-all ${
                                  formData.timeline === t
                                    ? 'bg-[var(--color-accent-cyan)]/15 border-[var(--color-accent-cyan)]/50 text-[var(--color-accent-cyan)] ring-2 ring-[var(--color-accent-cyan)]/30'
                                    : 'glass text-[var(--color-text-secondary)]'
                                }`}
                              >
                                {t}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Schedule & Message */}
                    {currentStep === 3 && (
                      <div>
                        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                          Schedule & Additional Details
                        </h2>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-6">Choose your preferred consultation time and add any extra context.</p>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Preferred Date</label>
                              <input type="date" value={formData.preferredDate}
                                onChange={e => setFormData({...formData, preferredDate: e.target.value})}
                                className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors"
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Preferred Time (BST)</label>
                              <select value={formData.preferredTime}
                                onChange={e => setFormData({...formData, preferredTime: e.target.value})}
                                className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors"
                              >
                                <option value="" className="bg-[var(--color-bg-secondary)]">Select time...</option>
                                {['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '7:00 PM', '8:00 PM'].map(t => (
                                  <option key={t} value={t} className="bg-[var(--color-bg-secondary)]">{t}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm text-[var(--color-text-secondary)] mb-1.5">Project Details / Message</label>
                            <textarea rows={5} value={formData.message}
                              onChange={e => setFormData({...formData, message: e.target.value})}
                              className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors resize-none"
                              placeholder="Tell us about your project, challenges, goals..."
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 5: Review & Submit */}
                    {currentStep === 4 && (
                      <div>
                        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                          Review & Submit
                        </h2>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-6">Verify your information and submit your consultation request.</p>
                        <div className="space-y-4">
                          {[
                            { label: 'Services', value: formData.services.map(s => serviceOptions.find(o => o.id === s)?.label).join(', ') || 'None' },
                            { label: 'Name', value: formData.name || '—' },
                            { label: 'Email', value: formData.email || '—' },
                            { label: 'Company', value: formData.company || '—' },
                            { label: 'Budget', value: formData.budget || '—' },
                            { label: 'Timeline', value: formData.timeline || '—' },
                            { label: 'Preferred Date', value: formData.preferredDate || 'Flexible' },
                            { label: 'Preferred Time', value: formData.preferredTime || 'Flexible' },
                          ].map((item, i) => (
                            <div key={i} className="flex justify-between items-center py-2 border-b border-[var(--color-border-glass)]">
                              <span className="text-sm text-[var(--color-text-muted)]">{item.label}</span>
                              <span className="text-sm text-[var(--color-text-primary)] font-medium text-right max-w-[60%]">{item.value}</span>
                            </div>
                          ))}
                          {formData.message && (
                            <div className="glass p-4 rounded-xl mt-4">
                              <span className="text-xs text-[var(--color-text-muted)] block mb-1">Message</span>
                              <p className="text-sm text-[var(--color-text-secondary)]">{formData.message}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-[var(--color-border-glass)]">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                      currentStep === 0
                        ? 'text-[var(--color-text-muted)] cursor-not-allowed'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] glass'
                    }`}
                  >
                    <ArrowLeft size={16} /> Back
                  </button>

                  {currentStep < steps.length - 1 ? (
                    <button
                      onClick={nextStep}
                      disabled={!canProceed()}
                      className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                        canProceed()
                          ? 'glow-btn'
                          : 'bg-[var(--color-bg-glass)] text-[var(--color-text-muted)] cursor-not-allowed'
                      }`}
                    >
                      Next <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold glow-btn cursor-pointer"
                    >
                      Submit Request <Send size={16} />
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
