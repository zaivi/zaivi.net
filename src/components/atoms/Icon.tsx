import React from 'react';
import { cn } from '@/utils/cn';
import type { LucideIcon } from 'lucide-react';

interface IconProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8'
};

export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 'md',
  className
}) => {
  return (
    <IconComponent
      className={cn(sizes[size], className)}
    />
  );
};
