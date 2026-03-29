import React from 'react';
import { cn } from '@/utils/cn';
import type { LucideIcon } from 'lucide-react';

interface CategorySectionProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  count?: number;
  children: React.ReactNode;
  className?: string;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  title,
  description,
  icon: Icon,
  count,
  children,
  className
}) => {
  return (
    <section className={cn('mb-12', className)}>
      <div className="flex items-center gap-3 mb-2">
        {Icon && (
          <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-accent-purple" />
          </div>
        )}
        <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
        {count !== undefined && (
          <span className="text-sm text-text-muted bg-white/5 px-3 py-1 rounded-full">
            {count}
          </span>
        )}
      </div>
      
      {description && (
        <p className="text-text-secondary mb-6">{description}</p>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {children}
      </div>
    </section>
  );
};
