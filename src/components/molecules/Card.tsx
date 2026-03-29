import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import type { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description?: string;
  href: string;
  icon?: LucideIcon;
  count?: number;
  className?: string;
  gridArea?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  href,
  icon: Icon,
  count,
  className,
  gridArea
}) => {
  return (
    <motion.a
      href={href}
      className={cn(
        'glass-card group flex flex-col p-5 relative overflow-hidden',
        className
      )}
      style={gridArea ? { gridArea } : undefined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          {Icon && (
            <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors">
              <Icon className="w-5 h-5 text-accent-purple" />
            </div>
          )}
          {count !== undefined && (
            <span className="text-xs text-text-muted bg-white/5 px-2 py-1 rounded">
              {count}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-text-primary group-hover:text-gradient transition-all mb-1">
          {title}
        </h3>
        
        {description && (
          <p className="text-sm text-text-secondary line-clamp-2">
            {description}
          </p>
        )}
      </div>
      
      {/* Arrow indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-5px] group-hover:translate-x-0">
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          className="text-accent-purple"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </motion.a>
  );
};
