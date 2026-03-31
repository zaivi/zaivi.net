import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { cn } from '@/utils/cn';

interface GoogleDocEmbedProps {
  title: string;
  description?: string;
  embedUrl: string;
  className?: string;
}

export const GoogleDocEmbed: React.FC<GoogleDocEmbedProps> = ({
  title,
  description,
  embedUrl,
  className
}) => {
  const handleOpenExternal = () => {
    // Convert embed URL to full Google Docs URL
    const fullUrl = embedUrl.replace('/pub?embedded=true', '');
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={cn('flex flex-col', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center">
            <FileText className="w-5 h-5 text-accent-purple" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
            {description && (
              <p className="text-sm text-text-secondary">{description}</p>
            )}
          </div>
        </div>
        <button
          onClick={handleOpenExternal}
          className="p-2 text-text-muted hover:text-accent-purple transition-colors"
          aria-label="Open in new tab"
        >
          <ExternalLink className="w-5 h-5" />
        </button>
      </div>

      {/* Embed Container */}
      <div className="relative w-full rounded-xl overflow-hidden glass-card flex-1 min-h-[500px]">
        <iframe
          src={embedUrl}
          className="absolute inset-0 w-full h-full border-0"
          title={title}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups"
        />
      </div>
    </div>
  );
};
