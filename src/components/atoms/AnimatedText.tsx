import React, { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';

interface AnimatedTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  words,
  className,
  interval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className={cn(
        'text-gradient inline-block min-w-[200px]',
        className
      )}
      key={currentIndex}
    >
      {words[currentIndex]}
    </span>
  );
};
