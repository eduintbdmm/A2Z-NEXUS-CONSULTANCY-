'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Software Development', href: '/services' },
    { label: 'AI Solutions', href: '/ai-solutions' },
    { label: 'Cybersecurity', href: '/services#cybersecurity' },
    { label: 'Business Consulting', href: '/services#management' },
  ],
  industries: [
    { label: 'Banking & Finance', href: '/industries' },
    { label: 'Healthcare', href: '/industries' },
    { label: 'Education', href: '/industries' },
    { label: 'Real Estate', href: '/industries' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border-glass)]">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent-primary)] to-[var(--color-accent-secondary)] flex items-center justify-center text-white font-bold text-lg">
                  A2Z
                </div>
                <div>
                  <span className="text-lg font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                    A2Z Nexus
                  </span>
                </div>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                From AI to Investment — We Build Every Solution Your Business Needs. Your strategic partner for digital transformation.
              </p>
              <div className="space-y-3">
                <a href="mailto:info@a2znexus.com" className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors">
                  <Mail size={14} /> info@a2znexus.com
                </a>
                <a href="tel:+8801700000000" className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors">
                  <Phone size={14} /> +880 1700-000000
                </a>
                <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                  <MapPin size={14} /> Dhaka, Bangladesh
                </div>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Company
              </h4>
              <div className="space-y-3">
                {footerLinks.company.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Services
              </h4>
              <div className="space-y-3">
                {footerLinks.services.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--color-text-primary)] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Industries
              </h4>
              <div className="space-y-3">
                {footerLinks.industries.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[var(--color-border-glass)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} A2Z Nexus Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
