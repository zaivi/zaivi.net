import React from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'purple' | 'cyan' | 'pink' | 'blue';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className
}) => {
  const variants = {
    default: 'bg-white/5 text-text-secondary border-white/10',
    purple: 'bg-accent-purple/20 text-accent-purple border-accent-purple/30',
    cyan: 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30',
    pink: 'bg-accent-pink/20 text-accent-pink border-accent-pink/30',
    blue: 'bg-accent-blue/20 text-accent-blue border-accent-blue/30'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
