
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'dark' | 'premium';
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ 
  children, 
  variant = 'default',
  className = '',
  hover = false
}: GlassCardProps) => {
  const baseClasses = cn(
    'rounded-2xl p-6 transition-all duration-300',
    {
      'glass-effect': variant === 'default',
      'glass-effect-dark': variant === 'dark',
      'glass-effect-premium': variant === 'premium',
      'hover:-translate-y-1 hover:shadow-lg': hover,
    },
    className
  );

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};

export default GlassCard;
