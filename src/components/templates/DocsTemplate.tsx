import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Grid, List, ExternalLink } from 'lucide-react';
import { cn } from '@/utils/cn';
import { GoogleDocEmbed } from '@/components/atoms/GoogleDocEmbed';
import { SearchBar } from '@/components/molecules/SearchBar';
import { Badge } from '@/components/atoms/Badge';

interface DocItem {
  id: string;
  title: string;
  description: string;
  type: string;
  embedUrl: string;
}

interface DocsTemplateProps {
  docs: DocItem[];
}

export const DocsTemplate: React.FC<DocsTemplateProps> = ({ docs }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'embed'>('list');
  const [selectedDoc, setSelectedDoc] = useState<DocItem | null>(null);

  const filteredDocs = docs.filter(
    doc =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpenExternal = (doc: DocItem) => {
    const fullUrl = doc.embedUrl.replace('/pub?embedded=true', '');
    window.open(fullUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Google <span className="text-gradient">Docs</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
            Access my documents, notes, and resources directly from Google Docs.
          </p>

          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
            <FileText className="w-4 h-4 text-accent-purple" />
            <span className="text-text-muted">Total:</span>
            <Badge variant="purple">{docs.length} Documents</Badge>
          </div>
        </motion.div>

        {/* Search and View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="flex-1 max-w-xl">
            <SearchBar
              placeholder="Search documents..."
              onSearch={setSearchQuery}
            />
          </div>

          <div className="flex items-center gap-2 glass rounded-lg p-1">
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                'p-2 rounded-md transition-colors',
                viewMode === 'list'
                  ? 'bg-accent-purple text-white'
                  : 'text-text-muted hover:text-text-primary'
              )}
              aria-label="List view"
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                'p-2 rounded-md transition-colors',
                viewMode === 'grid'
                  ? 'bg-accent-purple text-white'
                  : 'text-text-muted hover:text-text-primary'
              )}
              aria-label="Grid view"
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('embed')}
              className={cn(
                'p-2 rounded-md transition-colors',
                viewMode === 'embed'
                  ? 'bg-accent-purple text-white'
                  : 'text-text-muted hover:text-text-primary'
              )}
              aria-label="Embed view"
            >
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Content */}
        {searchQuery && filteredDocs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-text-muted text-lg">
              No documents found matching "{searchQuery}"
            </p>
          </motion.div>
        ) : (
          <>
            {/* Embed View - Full screen doc viewer */}
            {viewMode === 'embed' && selectedDoc ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-8"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-accent-purple" />
                    <h2 className="text-xl font-semibold text-text-primary">
                      {selectedDoc.title}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenExternal(selectedDoc)}
                      className="inline-flex items-center gap-2 px-4 py-2 glass text-text-primary rounded-lg hover:bg-surface-hover transition-all text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in Google Docs
                    </button>
                    <button
                      onClick={() => setSelectedDoc(null)}
                      className="inline-flex items-center gap-2 px-4 py-2 glass text-text-secondary rounded-lg hover:bg-surface-hover transition-all text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
                <GoogleDocEmbed
                  title={selectedDoc.title}
                  description={selectedDoc.description}
                  embedUrl={selectedDoc.embedUrl}
                  className="h-[calc(100vh-300px)] min-h-[500px]"
                />
              </motion.div>
            ) : viewMode === 'embed' ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <FileText className="w-16 h-16 text-text-muted mx-auto mb-4" />
                <p className="text-text-muted text-lg mb-4">
                  Select a document to view
                </p>
              </motion.div>
            ) : null}

            {/* List View */}
            {viewMode === 'list' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass rounded-xl overflow-hidden"
              >
                {filteredDocs.map((doc, index) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      'flex items-center justify-between p-4 hover:bg-surface-hover transition-colors cursor-pointer',
                      index !== filteredDocs.length - 1 && 'border-b border-white/5'
                    )}
                    onClick={() => {
                      setSelectedDoc(doc);
                      setViewMode('embed');
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-accent-purple" />
                      </div>
                      <div>
                        <h3 className="text-text-primary font-medium">{doc.title}</h3>
                        <p className="text-sm text-text-muted">{doc.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ExternalLink
                        className="w-4 h-4 text-text-muted hover:text-accent-purple transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenExternal(doc);
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Grid View */}
            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDocs.map((doc, index) => (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card p-5 cursor-pointer"
                    onClick={() => {
                      setSelectedDoc(doc);
                      setViewMode('embed');
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-accent-purple" />
                      </div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {doc.title}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary mb-4">
                      {doc.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="purple">{doc.type}</Badge>
                      <ExternalLink
                        className="w-4 h-4 text-text-muted hover:text-accent-purple transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenExternal(doc);
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
