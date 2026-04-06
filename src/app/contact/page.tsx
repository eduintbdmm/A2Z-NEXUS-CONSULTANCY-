'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlowButton from '@/components/ui/GlowButton';

const serviceOptions = [
  'Software Development', 'AI & Automation', 'Legal Advisory',
  'Investment Consulting', 'Banking & Fintech', 'Study Abroad',
  'Cybersecurity', 'Business Consulting', 'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In Phase 2, this will connect to backend API
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-sm font-semibold text-[var(--color-accent-primary)] mb-4 uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Let&apos;s Build Something{' '}
              <span className="gradient-text">Extraordinary</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Ready to transform your business? Book a free strategy consultation and let&apos;s discuss how A2Z Nexus can help you achieve your goals.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 section-gradient" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="glass-card p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-8">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={32} className="text-emerald-400" />
                      </div>
                      <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                        Message Sent!
                      </h3>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        Thank you for reaching out. We&apos;ll respond within 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Email *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Phone</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors"
                            placeholder="+880 1700-000000"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Company</label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors"
                            placeholder="Your Company"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Service Interested In</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors"
                        >
                          <option value="" className="bg-[var(--color-bg-secondary)]">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-[var(--color-bg-secondary)]">{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">Message *</label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-[var(--color-bg-glass)] border border-[var(--color-border-glass)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-primary)]/50 transition-colors resize-none"
                          placeholder="Tell us about your project requirements..."
                        />
                      </div>

                      <GlowButton type="submit">
                        Send Message <Send size={16} />
                      </GlowButton>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right" delay={0.2}>
                <div className="space-y-6">
                  {/* Contact cards */}
                  {[
                    { icon: Mail, title: 'Email Us', detail: 'info@a2znexus.com', sub: 'We respond within 24 hours', color: '#6366f1' },
                    { icon: Phone, title: 'Call Us', detail: '+880 1700-000000', sub: 'Mon-Sat, 9 AM - 8 PM BST', color: '#8b5cf6' },
                    { icon: MapPin, title: 'Visit Us', detail: 'Dhaka, Bangladesh', sub: 'Gulshan, Dhaka 1212', color: '#06b6d4' },
                    { icon: MessageSquare, title: 'WhatsApp', detail: '+880 1700-000000', sub: 'Quick response via WhatsApp', color: '#10b981' },
                  ].map((contact, i) => {
                    const Icon = contact.icon;
                    return (
                      <motion.div
                        key={contact.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-6 flex items-start gap-4"
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ background: `${contact.color}15`, border: `1px solid ${contact.color}30` }}
                        >
                          <Icon size={22} style={{ color: contact.color }} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-1">{contact.title}</h3>
                          <p className="text-sm text-[var(--color-text-secondary)]">{contact.detail}</p>
                          <p className="text-xs text-[var(--color-text-muted)] mt-1">{contact.sub}</p>
                        </div>
                      </motion.div>
                    );
                  })}

                  {/* Booking CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="glass-card p-8 text-center" style={{ borderColor: 'rgba(99, 102, 241, 0.2)' }}
                  >
                    <Clock size={32} className="text-[var(--color-accent-primary)] mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      Book a Strategy Call
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                      Schedule a free 30-minute consultation with our solutions architect.
                    </p>
                    <GlowButton href="#" variant="outline">
                      Schedule Now <ArrowRight size={16} />
                    </GlowButton>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
