'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface GlowButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function GlowButton({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
}: GlowButtonProps) {
  const baseClass = variant === 'primary' ? 'glow-btn' : 'glow-btn-outline';

  if (href) {
    return (
      <Link href={href} className={`${baseClass} inline-flex items-center gap-2 ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} inline-flex items-center gap-2 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
