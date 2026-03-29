import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  colSpan?: 1 | 2;
  rowSpan?: 1 | 2;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className }) => {
  return (
    <div className={cn(
      'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4',
      className
    )}>
      {children}
    </div>
  );
};

export const BentoItem: React.FC<BentoItemProps> = ({
  children,
  className,
  colSpan = 1,
  rowSpan = 1
}) => {
  return (
    <motion.div
      className={cn(
        colSpan === 2 && 'sm:col-span-2',
        rowSpan === 2 && 'row-span-2',
        className
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};
