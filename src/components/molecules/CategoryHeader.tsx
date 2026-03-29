import React from 'react';
import { cn } from '@/utils/cn';
import type { LucideIcon } from 'lucide-react';

interface CategoryHeaderProps {
  title: string;
  count?: number;
  icon?: LucideIcon;
  className?: string;
}

export const CategoryHeader: React.FC<CategoryHeaderProps> = ({
  title,
  count,
  icon: Icon,
  className
}) => {
  return (
    <div className={cn('flex items-center gap-3 mb-4', className)}>
      {Icon && (
        <div className="w-8 h-8 rounded-lg bg-accent-purple/10 flex items-center justify-center">
          <Icon className="w-4 h-4 text-accent-purple" />
        </div>
      )}
      <h2 className="text-xl font-semibold text-text-primary">
        {title}
      </h2>
      {count !== undefined && (
        <span className="text-sm text-text-muted bg-white/5 px-2 py-0.5 rounded">
          {count}
        </span>
      )}
    </div>
  );
};
