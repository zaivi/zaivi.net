import React from 'react';
import { cn } from '@/utils/cn';
import { LucideIcon } from 'lucide-react';

interface LinkRowProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  description?: string;
  className?: string;
}

export const LinkRow: React.FC<LinkRowProps> = ({
  href,
  label,
  icon: Icon,
  description,
  className
}) => {
  return (
    <a
      href={href}
      className={cn(
        'flex items-center gap-4 p-3 rounded-lg hover:bg-surface transition-all duration-200 group',
        className
      )}
    >
      {Icon && (
        <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-accent-purple/10 transition-colors">
          <Icon className="w-4 h-4 text-text-secondary group-hover:text-accent-purple transition-colors" />
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        <span className="text-text-primary font-medium block truncate">
          {label}
        </span>
        {description && (
          <span className="text-text-muted text-sm block truncate">
            {description}
          </span>
        )}
      </div>
      
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-text-muted group-hover:text-accent-purple transform group-hover:translate-x-1 transition-all"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  );
};
